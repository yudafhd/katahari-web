export type FontCategory =
    | 'Editorial Serif'
    | 'Modern Sans'
    | 'Classic Serif'
    | 'Monospace'
    | 'Display'
    | 'Handwriting';

export type FontOption = {
    slug: string;
    name: string;
    category: FontCategory;
    family: string;
    fontClass: string;
    weightClass: string;
    leadingClass: string;
    trackingClass: string;
    styleClass?: string;
    preview: string;
    description: string;
};

export const FONT_LIST: FontOption[] = [
    {
        slug: 'newsreader',
        name: 'Newsreader',
        category: 'Editorial Serif',
        family: "'Newsreader', Georgia, serif",
        fontClass: 'font-serif-newsreader',
        weightClass: 'font-medium',
        leadingClass: 'leading-relaxed',
        trackingClass: 'tracking-normal',
        styleClass: 'italic',
        preview: 'Aduh, merepotkan.',
        description: 'Sastra & buku editorial klasik yang sangat nyaman dibaca.',
    },
    {
        slug: 'playfair',
        name: 'Playfair Display',
        category: 'Editorial Serif',
        family: "'Playfair Display', Georgia, serif",
        fontClass: 'font-serif-playfair',
        weightClass: 'font-medium',
        leadingClass: 'leading-relaxed',
        trackingClass: 'tracking-wide',
        styleClass: 'italic',
        preview: 'Aduh, merepotkan.',
        description: 'Serif kontras tinggi bergaya majalah kelas dunia.',
    },
    {
        slug: 'lora',
        name: 'Lora',
        category: 'Classic Serif',
        family: "'Lora', Georgia, serif",
        fontClass: 'font-serif-lora',
        weightClass: 'font-medium',
        leadingClass: 'leading-relaxed',
        trackingClass: 'tracking-normal',
        preview: 'Aduh, merepotkan.',
        description: 'Serif kaligrafi lembut yang tenang dan hangat.',
    },
    {
        slug: 'cormorant',
        name: 'Cormorant Garamond',
        category: 'Classic Serif',
        family: "'Cormorant Garamond', Georgia, serif",
        fontClass: 'font-serif-cormorant',
        weightClass: 'font-semibold',
        leadingClass: 'leading-relaxed',
        trackingClass: 'tracking-wide',
        styleClass: 'italic',
        preview: 'Aduh, merepotkan.',
        description: 'Serif Garamond anggun bergaya literatur legendaris.',
    },
    {
        slug: 'jakarta',
        name: 'Plus Jakarta Sans',
        category: 'Modern Sans',
        family: "'Plus Jakarta Sans', sans-serif",
        fontClass: 'font-sans-jakarta',
        weightClass: 'font-semibold',
        leadingClass: 'leading-snug',
        trackingClass: 'tracking-tight',
        preview: 'Aduh, merepotkan.',
        description: 'Modern humanist sans buatan Indonesia, sangat jernih.',
    },
    {
        slug: 'outfit',
        name: 'Outfit',
        category: 'Modern Sans',
        family: "'Outfit', sans-serif",
        fontClass: 'font-sans-outfit',
        weightClass: 'font-semibold',
        leadingClass: 'leading-snug',
        trackingClass: 'tracking-tight',
        preview: 'Aduh, merepotkan.',
        description: 'Geometris kontemporer yang seimbang dan tegas.',
    },
    {
        slug: 'inter',
        name: 'Inter',
        category: 'Modern Sans',
        family: "'Inter', sans-serif",
        fontClass: 'font-sans-inter',
        weightClass: 'font-semibold',
        leadingClass: 'leading-snug',
        trackingClass: 'tracking-tight',
        preview: 'Aduh, merepotkan.',
        description: 'Keterbacaan sempurna di layar digital modern.',
    },
    {
        slug: 'space-mono',
        name: 'Space Mono',
        category: 'Monospace',
        family: "'Space Mono', monospace",
        fontClass: 'font-mono-space',
        weightClass: 'font-medium',
        leadingClass: 'leading-relaxed',
        trackingClass: 'tracking-wide',
        preview: 'Aduh, merepotkan.',
        description: 'Monospace cyberpunk puitis bergaya terminal.',
    },
    {
        slug: 'syne',
        name: 'Syne',
        category: 'Display',
        family: "'Syne', sans-serif",
        fontClass: 'font-display-syne',
        weightClass: 'font-bold',
        leadingClass: 'leading-tight',
        trackingClass: 'tracking-normal',
        preview: 'Aduh, merepotkan.',
        description: 'Artistik & berani untuk kutipan yang berdampak visual.',
    },
    {
        slug: 'caveat',
        name: 'Caveat',
        category: 'Handwriting',
        family: "'Caveat', cursive",
        fontClass: 'font-cursive-caveat',
        weightClass: 'font-bold',
        leadingClass: 'leading-normal',
        trackingClass: 'tracking-wide',
        preview: 'Aduh, merepotkan.',
        description: 'Tulisan tangan hangat estetik seperti di buku harian.',
    },
];

export const DEFAULT_FONT_SLUG = 'lora';

export function getFontBySlug(slug?: string | null): FontOption {
    const targetSlug = slug || DEFAULT_FONT_SLUG;
    return FONT_LIST.find(f => f.slug === targetSlug) ?? FONT_LIST.find(f => f.slug === DEFAULT_FONT_SLUG) ?? FONT_LIST[0];
}
