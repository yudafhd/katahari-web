import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const quotesDir = path.join(__dirname, '..', 'src', 'data', 'quotes');

const replacements = [
    // Standard double-encoded UTF-8 Mojibake sequences
    { pattern: /â€™/g, replacement: "'" },
    { pattern: /â€˜/g, replacement: "'" },
    { pattern: /â€œ/g, replacement: '"' },
    { pattern: /â€/g, replacement: '"' },
    { pattern: /â€”/g, replacement: "—" },
    { pattern: /â€“/g, replacement: "–" },
    { pattern: /â€¦/g, replacement: "..." },
    { pattern: /â˜…/g, replacement: "★" },
    { pattern: /Ã—/g, replacement: "×" },
    { pattern: /Ã©/g, replacement: "é" },
    { pattern: /Å /g, replacement: "ō" },
    { pattern: /Ã¶/g, replacement: "ö" },
    { pattern: /Ã¤/g, replacement: "ä" },
    { pattern: /Ã¼/g, replacement: "ü" },
];

async function fixFile(filePath) {
    let content = await fs.readFile(filePath, 'utf8');
    let original = content;

    for (const { pattern, replacement } of replacements) {
        content = content.replace(pattern, replacement);
    }

    if (content !== original) {
        await fs.writeFile(filePath, content, 'utf8');
        console.log(`Fixed Mojibake encoding in ${path.basename(filePath)}`);
    } else {
        console.log(`No Mojibake found in ${path.basename(filePath)}`);
    }
}

async function main() {
    const files = await fs.readdir(quotesDir);
    for (const file of files) {
        if (file.endsWith('.js')) {
            await fixFile(path.join(quotesDir, file));
        }
    }
}

main().catch(console.error);
