export type ThemeEntry = {
    slug: string;
    name: string;
    swatchA: string; // preview gradient start
    swatchB: string; // preview gradient end
};

// Base themes + 20 additional themes (must match data-theme values in themes.css)
export const THEME_LIST: readonly ThemeEntry[] = [
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
] as const;

export type ThemeSlug = typeof THEME_LIST[number]["slug"];

// Utility: find a theme by slug (falls back to "light")
export function getTheme(slug: string): ThemeEntry {
    return THEME_LIST.find(t => t.slug === slug) ?? THEME_LIST[0];
}