/* Utility to render a quote into a downloadable PNG image (square 1080x1080 or story 1080x1920) */

export type QuoteImageSize = 'square' | 'story';

type ThemeColors = {
    background: string;
    foreground: string;
    mutedForeground: string;
    cardBg: string;
    ring: string;
    auroraA: string;
    auroraB: string;
};

function cssVar(name: string, fallback = ''): string {
    if (typeof document === 'undefined') return fallback;
    const v = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (v || fallback).toString().trim() || fallback;
}

function readTheme(): ThemeColors {
    const foreground = cssVar('--foreground', '#0f172a');
    const mutedForeground = cssVar('--muted-foreground', '#64748b');
    const cardBg = cssVar('--card-bg', 'rgba(255,255,255,0.92)');
    const ring = cssVar('--ring', 'rgba(124,58,237,0.6)');
    const auroraA = cssVar('--aurora-a', 'rgba(236,72,153,0.45)');
    const auroraB = cssVar('--aurora-b', 'rgba(14,165,233,0.45)');
    const background = cssVar('--background', '#0b1220');
    return { background, foreground, mutedForeground, cardBg, ring, auroraA, auroraB };
}

function makeCanvas(size: QuoteImageSize): HTMLCanvasElement {
    const c = document.createElement('canvas');
    if (size === 'story') {
        c.width = 1080;
        c.height = 1920;
    } else {
        c.width = 1080;
        c.height = 1080;
    }
    return c;
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, lineHeight: number): string[] {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let line = '';
    for (let i = 0; i < words.length; i++) {
        const test = line ? line + ' ' + words[i] : words[i];
        const w = ctx.measureText(test).width;
        if (w > maxWidth && line) {
            lines.push(line);
            line = words[i];
        } else {
            line = test;
        }
    }
    if (line) lines.push(line);
    // Merge overly many lines if needed will be handled by caller via font sizing iteration
    return lines;
}

function drawBackground(ctx: CanvasRenderingContext2D, w: number, h: number, colors: ThemeColors) {
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, w, h);
}

async function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * Draw brand image (Katahari logo). Tries several common asset paths, falls back silently if not found.
 */
async function drawBrand(ctx: CanvasRenderingContext2D, x: number, y: number, targetH: number) {
    const candidates = [
        '/brand-logo.png',
        '/apple-touch-icon.png',
        '/logo.png',
        '/logo.svg',
        '/favicon.ico'
    ];
    let img: HTMLImageElement | null = null;
    for (const src of candidates) {
        try {
            img = await loadImage(src);
            if (img) break;
        } catch {
            // try next
        }
    }
    if (!img) return;

    const scale = targetH / (img.naturalHeight || targetH);
    const w = (img.naturalWidth || targetH) * scale;
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(img, x, y, w, targetH);
    ctx.restore();
}

function pickContentFont(base: number) {
    return `700 ${Math.round(base)}px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
}

function pickCreditFont(size: number) {
    return `italic 300 ${Math.round(size)}px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
}

function fitContentFont(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number, baseSize: number, minSize: number) {
    let fontSize = baseSize;
    let lines: string[] = [];
    for (; fontSize >= minSize; fontSize -= 2) {
        ctx.font = pickContentFont(fontSize);
        lines = wrapText(ctx, text, maxWidth, fontSize * 1.2);
        if (lines.length <= maxLines) break;
    }
    return { fontSize, lines };
}

export async function generateQuoteImage(text: string, credit: string, size: QuoteImageSize = 'square', filename?: string) {
    if (typeof document === 'undefined') return;
    const canvas = makeCanvas(size);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;



    const w = canvas.width;
    const h = canvas.height;

    const colors = readTheme();

    drawBackground(ctx, w, h, colors);

    // Card layout
    const pad = size === 'story' ? 72 : 64;
    const cardPadding = size === 'story' ? 56 : 48;

    const cardX = pad;
    const cardY = pad * 1.2;
    const cardW = w - pad * 2;

    // Brand image (logo)
    await drawBrand(
        ctx,
        cardX + cardPadding * 0.2,
        cardY + cardPadding * 0.2,
        size === "story" ? 90 : 80
    );

    // Text layout (centered horizontally and vertically)
    const textBoxW = cardW - cardPadding * 2;
    const maxLines = size === 'story' ? 10 : 8;

    const baseFontPx = size === 'story' ? 72 : 56;
    const minFontPx = size === 'story' ? 40 : 32;

    // Fit content font with wrapping
    const { fontSize, lines } = fitContentFont(ctx, text, textBoxW, maxLines, baseFontPx, minFontPx);
    const lineHeight = fontSize * 1.22;

    // Prepare credit wrapping (needs credit font active for measurement)
    const creditSize = size === 'story' ? 36 : 28;
    const creditLineHeight = creditSize * 1.35;
    const creditTopGap = Math.min(h * 0.2, lineHeight * 1.6);
    const creditText = `— ${credit}`;

    // Compute heights to vertically center the block (content + gap + credit)
    ctx.font = pickContentFont(fontSize);
    const contentHeight = lines.length * lineHeight;

    ctx.font = pickCreditFont(creditSize);
    const creditLines = wrapText(ctx, creditText, textBoxW, creditSize * 1.2);
    const creditHeight = creditLines.length * creditLineHeight;

    const totalHeight = contentHeight + creditTopGap + creditHeight;
    const topY = (h - totalHeight) / 2;


    // Draw content centered block, left-anchored text
    ctx.fillStyle = colors.foreground || '#0f172a';
    ctx.textRendering = "optimizeSpeed";
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'start';
    ctx.font = pickContentFont(fontSize);

    const leftX = (w - textBoxW) / 2;
    let ty = topY + fontSize;
    lines.forEach((ln) => {
        ctx.fillText(ln, leftX, ty);
        ty += lineHeight;
    });

    // Draw credit centered block, left-anchored text
    ctx.font = pickCreditFont(creditSize);
    ctx.fillStyle = colors.mutedForeground || 'rgba(100,116,139,0.95)';
    let cy = ty + creditTopGap + creditSize - fontSize; // align baseline for credit
    // Ensure credit stays inside bottom padding of canvas
    const maxCreditStart = h - cardPadding - creditHeight + creditSize;
    if (cy > maxCreditStart) cy = maxCreditStart;

    creditLines.forEach((ln) => {
        ctx.fillText(ln, leftX, cy);
        cy += creditLineHeight;
    });

    // Export
    return new Promise<void>((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (!blob) {
                reject(new Error('Failed to create image blob'));
                return;
            }
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const ts = new Date().toISOString().replace(/[:.]/g, '-');
            a.download = filename || `quote-${size}-${ts}.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            resolve();
        }, 'image/png', 1);
    });
}