export type ThemeEntry = {
    slug: string;
    name: string;
    swatchA: string; // preview gradient start
    swatchB: string; // preview gradient end
};

// Base themes + Gradient themes + Classic themes
export const THEME_LIST: readonly ThemeEntry[] = [
    /* === GRADIENT THEMES (30 PRESETS AT THE TOP) === */
    { slug: "aurora-grad", name: "Aurora Glow", swatchA: "#3b0764", swatchB: "#0369a1" },
    { slug: "sunset-grad", name: "Sunset Ember", swatchA: "#9a3412", swatchB: "#c2410c" },
    { slug: "cyber-grad", name: "Cyber Pulse", swatchA: "#4c1d95", swatchB: "#06b6d4" },
    { slug: "cosmic-grad", name: "Cosmic Nebula", swatchA: "#701a75", swatchB: "#1e1b4b" },
    { slug: "emerald-grad", name: "Emerald Wave", swatchA: "#065f46", swatchB: "#0284c7" },
    { slug: "peach-grad", name: "Peach Bloom", swatchA: "#ffedd5", swatchB: "#fecdd3" },
    { slug: "pastel-grad", name: "Pastel Dream", swatchA: "#e0e7ff", swatchB: "#fce7f3" },
    { slug: "twilight-grad", name: "Twilight Dusk", swatchA: "#18181b", swatchB: "#3f3f46" },
    { slug: "ocean-grad", name: "Ocean Tide", swatchA: "#0c4a6e", swatchB: "#0d9488" },
    { slug: "velvet-grad", name: "Royal Velvet", swatchA: "#2e1065", swatchB: "#831843" },

    { slug: "hyper-grad", name: "Hyper Neon", swatchA: "#d946ef", swatchB: "#06b6d4" },
    { slug: "blush-grad", name: "Candy Blush", swatchA: "#fbcfe8", swatchB: "#e0e7ff" },
    { slug: "golden-grad", name: "Golden Hour", swatchA: "#b45309", swatchB: "#f59e0b" },
    { slug: "boreal-grad", name: "Boreal Lights", swatchA: "#0d9488", swatchB: "#6366f1" },
    { slug: "crimson-grad", name: "Crimson Dusk", swatchA: "#991b1b", swatchB: "#f43f5e" },
    { slug: "mint-grad", name: "Mint Breeze", swatchA: "#dcfce7", swatchB: "#ccfbf1" },
    { slug: "amethyst-grad", name: "Amethyst Mist", swatchA: "#5b21b6", swatchB: "#9333ea" },
    { slug: "inferno-grad", name: "Inferno Flame", swatchA: "#7f1d1d", swatchB: "#dc2626" },
    { slug: "midnight-grad", name: "Midnight Sky", swatchA: "#0f172a", swatchB: "#1e293b" },
    { slug: "prism-grad", name: "Prism Glow", swatchA: "#2563eb", swatchB: "#ec4899" },
    { slug: "sand-grad", name: "Dune Oasis", swatchA: "#fed7aa", swatchB: "#fef08a" },
    { slug: "sakura-grad", name: "Sakura Shift", swatchA: "#fbcfe8", swatchB: "#f472b6" },
    { slug: "tokyo-grad", name: "Tokyo Neon", swatchA: "#be123c", swatchB: "#0284c7" },
    { slug: "abyss-grad", name: "Abyssal Deep", swatchA: "#115e59", swatchB: "#0f766e" },
    { slug: "lavender-grad", name: "Lavender Dream", swatchA: "#e9d5ff", swatchB: "#c084fc" },
    { slug: "citrus-grad", name: "Citrus Flare", swatchA: "#fef08a", swatchB: "#f97316" },
    { slug: "nordic-grad", name: "Nordic Frost", swatchA: "#e2e8f0", swatchB: "#94a3b8" },
    { slug: "synth-grad", name: "80s Synthwave", swatchA: "#831843", swatchB: "#0284c7" },
    { slug: "matrix-grad", name: "Matrix Stream", swatchA: "#14532d", swatchB: "#22c55e" },
    { slug: "solar-grad", name: "Solar Eclipse", swatchA: "#451a03", swatchB: "#ea580c" },

    /* === BASE & CLASSIC PRESETS === */
    { slug: "light", name: "Light", swatchA: "#ffffff", swatchB: "#e2e8f0" },
    { slug: "dark", name: "Dark", swatchA: "#0a0a0a", swatchB: "#111827" },
    { slug: "violet", name: "Violet", swatchA: "#0b0614", swatchB: "#a855f7" },
    { slug: "ocean", name: "Ocean", swatchA: "#03141c", swatchB: "#0ea5e9" },

    { slug: "rose", name: "Rose", swatchA: "#fff1f2", swatchB: "#f43f5e" },
    { slug: "flamingo", name: "Flamingo", swatchA: "#fff0f6", swatchB: "#ec4899" },
    { slug: "bubblegum", name: "Bubblegum", swatchA: "#fdf2f8", swatchB: "#db2777" },
    { slug: "sunset", name: "Sunset", swatchA: "#fff7ed", swatchB: "#f97316" },
    { slug: "amber", name: "Amber", swatchA: "#fffbeb", swatchB: "#f59e0b" },
    { slug: "gold", name: "Gold", swatchA: "#fffbea", swatchB: "#eab308" },
    { slug: "sand", name: "Sand", swatchA: "#faf7f1", swatchB: "#78716c" },
    { slug: "lime", name: "Lime", swatchA: "#f7fee7", swatchB: "#84cc16" },
    { slug: "mint", name: "Mint", swatchA: "#f0fdf4", swatchB: "#22c55e" },
    { slug: "emerald", name: "Emerald", swatchA: "#ecfdf5", swatchB: "#10b981" },
    { slug: "forest", name: "Forest", swatchA: "#051b15", swatchB: "#10b981" },
    { slug: "aqua", name: "Aqua", swatchA: "#ecfeff", swatchB: "#06b6d4" },
    { slug: "sky", name: "Sky", swatchA: "#f0f9ff", swatchB: "#0ea5e9" },
    { slug: "azure", name: "Azure", swatchA: "#eff6ff", swatchB: "#3b82f6" },
    { slug: "indigo", name: "Indigo", swatchA: "#111827", swatchB: "#6366f1" },
    { slug: "midnight", name: "Midnight", swatchA: "#0b1220", swatchB: "#1e40af" },
    { slug: "dracula", name: "Dracula", swatchA: "#0f0b1f", swatchB: "#7c3aed" },
    { slug: "coffee", name: "Coffee", swatchA: "#1b140f", swatchB: "#92400e" },
    { slug: "lava", name: "Lava", swatchA: "#180606", swatchB: "#ef4444" },
    { slug: "neon", name: "Neon", swatchA: "#070a0a", swatchB: "#10b981" },

    { slug: "nordic", name: "Nordic", swatchA: "#f1f5f9", swatchB: "#64748b" },
    { slug: "sakura", name: "Sakura", swatchA: "#fff5f7", swatchB: "#f472b6" },
    { slug: "matcha", name: "Matcha", swatchA: "#f4f7f2", swatchB: "#65a30d" },
    { slug: "peach", name: "Peach", swatchA: "#fff7ed", swatchB: "#fb923c" },
    { slug: "lavender", name: "Lavender", swatchA: "#f8f5ff", swatchB: "#c084fc" },
    { slug: "dune", name: "Dune", swatchA: "#faf4ed", swatchB: "#d97706" },
    { slug: "serenity", name: "Serenity", swatchA: "#f0fdfa", swatchB: "#2dd4bf" },
    { slug: "clay", name: "Clay", swatchA: "#fdf6f0", swatchB: "#c2410c" },
    { slug: "paper", name: "Paper", swatchA: "#fbf9f4", swatchB: "#a1a1aa" },
    { slug: "olivia", name: "Olivia", swatchA: "#f7f8f3", swatchB: "#4d7c0f" },
    { slug: "cyberpunk", name: "Cyberpunk", swatchA: "#05050a", swatchB: "#06b6d4" },
    { slug: "matrix", name: "Matrix", swatchA: "#020905", swatchB: "#22c55e" },
    { slug: "synthwave", name: "Synthwave", swatchA: "#0f0717", swatchB: "#f43f5e" },
    { slug: "obsidian", name: "Obsidian", swatchA: "#09090b", swatchB: "#71717a" },
    { slug: "nebula", name: "Nebula", swatchA: "#080614", swatchB: "#e879f9" },
    { slug: "breeze", name: "Breeze", swatchA: "#061325", swatchB: "#38bdf8" },
    { slug: "crimson", name: "Crimson", swatchA: "#140406", swatchB: "#e11d48" },
    { slug: "abyss", name: "Abyss", swatchA: "#040d1a", swatchB: "#14b8a6" },
    { slug: "phantom", name: "Phantom", swatchA: "#0c0a18", swatchB: "#a855f7" },
    { slug: "tokyo", name: "Tokyo", swatchA: "#090d16", swatchB: "#fb7185" },
] as const;

export type ThemeSlug = typeof THEME_LIST[number]["slug"];

// Utility: find a theme by slug (falls back to "light")
export function getTheme(slug: string): ThemeEntry {
    return THEME_LIST.find(t => t.slug === slug) ?? THEME_LIST[0];
}