#!/usr/bin/env node
/**
 * Build a consolidated quotes.json by reading existing JS modules.
 * Produces:
 *  - database/quotes/quotes.json (flat array) for loader compatibility
 *  - database/quotes/quotes.byfile.json (grouped by source filename)
 *
 * Use: node ./scripts/build-quotes-json.mjs
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import vm from "vm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
    "src/data/quotes/general.js",
    "src/data/quotes/book.js",
    "src/data/quotes/anime-manga.js",
    "src/data/quotes/game.js",
    "src/data/quotes/movie.js",
    "src/data/quotes/spongebob.js",
    "src/data/quotes/drakor-film-artis.js",
];

function extractFirstTopLevelArray(source) {
    const start = source.indexOf("[");
    if (start === -1) return null;

    let depth = 0;
    let inString = false;
    let stringChar = "";
    let escaped = false;

    for (let i = start; i < source.length; i++) {
        const ch = source[i];

        if (inString) {
            if (escaped) {
                escaped = false;
            } else if (ch === "\\") {
                escaped = true;
            } else if (ch === stringChar) {
                inString = false;
                stringChar = "";
            }
            continue;
        }

        if (ch === "'" || ch === '"' || ch === "`") {
            inString = true;
            stringChar = ch;
            continue;
        }

        if (ch === "[") {
            depth++;
        } else if (ch === "]") {
            depth--;
            if (depth === 0) {
                return source.slice(start, i + 1);
            }
        }
    }

    return null;
}

async function evalArray(arraySource, filename) {
    const wrapped = "(" + arraySource + ")";
    const sandbox = {};
    const script = new vm.Script(wrapped, { filename });
    const context = vm.createContext(sandbox);
    const result = script.runInContext(context, { timeout: 2000 });
    if (!Array.isArray(result)) throw new Error("Evaluated result is not an array");
    return result;
}

async function build() {
    const flat = [];
    const byFile = {};

    for (const rel of files) {
        const p = path.join(__dirname, "..", rel);
        try {
            const text = await fs.readFile(p, "utf8");
            const arrSrc = extractFirstTopLevelArray(text);
            if (!arrSrc) {
                console.warn(`No top-level array found in ${rel}, skipping`);
                continue;
            }
            const arr = await evalArray(arrSrc, rel);
            flat.push(...arr);
            const name = path.basename(rel, path.extname(rel));
            byFile[name] = arr;
            console.log(`Loaded ${arr.length} quotes from ${rel}`);
        } catch (err) {
            console.warn(`Failed to process ${rel}: ${err.message}`);
        }
    }

    const destFlat = path.join(__dirname, "..", "src", "data", "quotes", "quotes.json");
    const destBy = path.join(__dirname, "..", "src", "data", "quotes", "quotes.by.category.json");
    const publicDestFlat = path.join(__dirname, "..", "public", "database", "quotes", "quotes.json");
    const publicDestBy = path.join(__dirname, "..", "public", "database", "quotes", "quotes.by.category.json");

    await fs.mkdir(path.dirname(publicDestBy), { recursive: true });

    await fs.writeFile(destFlat, JSON.stringify(flat, null, 2) + "\n", "utf8");
    await fs.writeFile(destBy, JSON.stringify(byFile, null, 2) + "\n", "utf8");
    await fs.writeFile(publicDestFlat, JSON.stringify(flat, null, 2) + "\n", "utf8");
    await fs.writeFile(publicDestBy, JSON.stringify(byFile, null, 2) + "\n", "utf8");

    console.log(`Wrote ${flat.length} quotes to src/data/quotes/ & public/database/quotes/`);
}

build().catch((err) => {
    console.error(err);
    process.exit(1);
});