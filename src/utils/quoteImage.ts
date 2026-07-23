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

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
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
    if (colors.background.includes('gradient')) {
        const hexes = colors.background.match(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/g);
        if (hexes && hexes.length >= 2) {
            const grad = ctx.createLinearGradient(0, 0, w, h);
            hexes.forEach((color, idx) => {
                grad.addColorStop(idx / (hexes.length - 1), color);
            });
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);
            return;
        }
    }
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, w, h);
}

function parseWeight(weightClass?: string): string {
    if (!weightClass) return '600';
    if (weightClass.includes('font-bold')) return '700';
    if (weightClass.includes('font-semibold')) return '600';
    if (weightClass.includes('font-medium')) return '500';
    if (weightClass.includes('font-normal')) return '400';
    return '600';
}

function pickContentFont(base: number, fontFamily = 'system-ui, -apple-system, sans-serif', weightClass?: string, styleClass?: string) {
    const style = styleClass?.includes('italic') ? 'italic ' : '';
    const weight = parseWeight(weightClass);
    return `${style}${weight} ${Math.round(base)}px ${fontFamily}`;
}

function pickCreditFont(size: number, fontFamily = 'system-ui, -apple-system, sans-serif') {
    return `italic 400 ${Math.round(size)}px ${fontFamily}`;
}

async function ensureFontLoaded(fontFamily: string, fontSize: number, weightClass?: string, styleClass?: string) {
    if (typeof document === 'undefined' || !document.fonts) return;
    try {
        const style = styleClass?.includes('italic') ? 'italic ' : '';
        const weight = parseWeight(weightClass);
        const spec = `${style}${weight} ${fontSize}px ${fontFamily}`;
        await document.fonts.load(spec);
        await document.fonts.ready;
    } catch {
        // Fallback gracefully if browser font API is unavailable
    }
}

function fitContentFont(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    maxLines: number,
    baseSize: number,
    minSize: number,
    fontFamily?: string,
    weightClass?: string,
    styleClass?: string
) {
    let fontSize = baseSize;
    let lines: string[] = [];
    for (; fontSize >= minSize; fontSize -= 2) {
        ctx.font = pickContentFont(fontSize, fontFamily, weightClass, styleClass);
        lines = wrapText(ctx, text, maxWidth);
        if (lines.length <= maxLines) break;
    }
    return { fontSize, lines };
}

export async function generateQuoteImage(
    text: string,
    credit: string,
    size: QuoteImageSize = 'square',
    filename?: string,
    fontFamily?: string,
    weightClass?: string,
    styleClass?: string
) {
    if (typeof document === 'undefined') return;

    const baseFontPx = size === 'story' ? 72 : 56;
    if (fontFamily) {
        await ensureFontLoaded(fontFamily, baseFontPx, weightClass, styleClass);
    }

    const canvas = makeCanvas(size);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;



    const w = canvas.width;
    const h = canvas.height;

    const colors = readTheme();

    drawBackground(ctx, w, h, colors);

    // Subtle decorative quote mark watermark
    ctx.save();
    ctx.fillStyle = colors.foreground || '#0f172a';
    ctx.globalAlpha = 0.08;
    ctx.font = '800 260px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('“', w / 2, size === 'story' ? 320 : 260);
    ctx.restore();

    // Card layout & spacing
    const pad = size === 'story' ? 72 : 64;
    const cardPadding = size === 'story' ? 56 : 48;
    const cardW = w - pad * 2;

    // Text layout (centered horizontally and vertically)
    const textBoxW = cardW - cardPadding * 2;
    const maxLines = size === 'story' ? 10 : 8;
    const minFontPx = size === 'story' ? 40 : 32;

    // Fit content font with wrapping
    const { fontSize, lines } = fitContentFont(ctx, text, textBoxW, maxLines, baseFontPx, minFontPx, fontFamily, weightClass, styleClass);
    const lineHeight = fontSize * 1.22;

    // Prepare credit wrapping (needs credit font active for measurement)
    const creditSize = size === 'story' ? 36 : 28;
    const creditLineHeight = creditSize * 1.35;
    const creditTopGap = Math.min(h * 0.2, lineHeight * 1.6);
    const creditText = `— ${credit}`;

    // Compute heights to vertically center the block (content + gap + credit)
    ctx.font = pickContentFont(fontSize, fontFamily, weightClass, styleClass);
    const contentHeight = lines.length * lineHeight;

    ctx.font = pickCreditFont(creditSize, fontFamily);
    const creditLines = wrapText(ctx, creditText, textBoxW);
    const creditHeight = creditLines.length * creditLineHeight;

    const totalHeight = contentHeight + creditTopGap + creditHeight;
    const topY = (h - totalHeight) / 2;


    // Draw content centered block, left-anchored text
    ctx.fillStyle = colors.foreground || '#0f172a';
    ctx.textRendering = "optimizeSpeed";
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'start';
    ctx.font = pickContentFont(fontSize, fontFamily, weightClass, styleClass);

    const leftX = (w - textBoxW) / 2;
    let ty = topY + fontSize;
    lines.forEach((ln) => {
        ctx.fillText(ln, leftX, ty);
        ty += lineHeight;
    });

    // Draw credit centered block, left-anchored text
    ctx.font = pickCreditFont(creditSize, fontFamily);
    ctx.fillStyle = colors.mutedForeground || 'rgba(100,116,139,0.95)';
    let cy = ty + creditTopGap + creditSize - fontSize; // align baseline for credit
    // Ensure credit stays inside bottom padding of canvas
    const maxCreditStart = h - cardPadding - creditHeight + creditSize;
    if (cy > maxCreditStart) cy = maxCreditStart;

    creditLines.forEach((ln) => {
        ctx.fillText(ln, leftX, cy);
        cy += creditLineHeight;
    });

    // Small brand domain watermark credit at bottom center
    ctx.save();
    const watermarkSize = size === 'story' ? 20 : 16;
    ctx.font = `500 ${watermarkSize}px system-ui, -apple-system, sans-serif`;
    ctx.fillStyle = colors.mutedForeground || '#64748b';
    ctx.globalAlpha = 0.55;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('katahari.yudafhd.com', w / 2, h - (size === 'story' ? 56 : 40));
    ctx.restore();

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