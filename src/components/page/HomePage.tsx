'use client';

import { useEffect, useMemo, useState } from "react";
import { THEME_LIST, ThemeSlug } from "@/config/themes";
import { getItem, setItem, getJSON, setJSON } from "@/utils/storage";
import Modal from "@/components/Modal";
import Notification from "@/components/Notification";
import { copyText } from "@/utils/clipboard";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import BottomNav from "@/components/BottomNav";
import {
    IconMenu,
    IconSun,
    IconMoon
} from "@/components/icons";
import type { Quote, ByCategoryMap } from "@/types/quotes";
import { generateQuoteImage } from "@/utils/quoteImage";

import { FONT_LIST, getFontBySlug } from "@/config/fonts";

type Theme = ThemeSlug;

// Themes that should enable Tailwind's .dark styles for contrast
const DARK_THEMES = new Set<Theme>([
    'dark', 'violet', 'ocean', 'forest', 'indigo', 'midnight',
    'dracula', 'coffee', 'lava', 'neon',
    'cyberpunk', 'matrix', 'synthwave', 'obsidian', 'nebula',
    'breeze', 'crimson', 'abyss', 'phantom', 'tokyo',
    'aurora-grad', 'sunset-grad', 'cyber-grad', 'cosmic-grad',
    'emerald-grad', 'twilight-grad', 'ocean-grad', 'velvet-grad',
    'hyper-grad', 'golden-grad', 'boreal-grad', 'crimson-grad',
    'amethyst-grad', 'inferno-grad', 'midnight-grad', 'prism-grad',
    'tokyo-grad', 'abyss-grad', 'synth-grad', 'matrix-grad', 'solar-grad'
]);

export default function HomePage({ initialByCategory }: { initialByCategory: ByCategoryMap }) {
    // Initialize with deterministic SSR-safe defaults, then load from localStorage after mount
    const [lang, setLang] = useState<'en' | 'id'>('en');
    const [theme, setTheme] = useState<Theme>('light');
    const [fontSlug, setFontSlug] = useState<string>('lora');
    const [showThemePanel, setShowThemePanel] = useState(false);
    const [showSourcesPanel, setShowSourcesPanel] = useState(false);
    const [showDownloadPanel, setShowDownloadPanel] = useState(false);
    const [showFontPanel, setShowFontPanel] = useState(false);
    const [showDonatePanel, setShowDonatePanel] = useState(false);
    const [selectedCats, setSelectedCats] = useState<string[]>([]);
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState<string>('');
    const [showDrawer, setShowDrawer] = useState(false);

    const font = useMemo(() => getFontBySlug(fontSlug), [fontSlug]);

    // Flatten quotes from by-category map; dedupe by code to avoid duplicates across categories
    const list = useMemo(() => {
        const map = new Map<string, Quote>();
        Object.values(initialByCategory).forEach(group => {
            group.forEach(quote => {
                if (!map.has(quote.code)) {
                    map.set(quote.code, quote);
                }
            });
        });
        return Array.from(map.values());
    }, [initialByCategory]);

    // Load saved preferences after mount to avoid SSR/CSR mismatch
    useEffect(() => {
        const savedLang = getItem('lang') as 'en' | 'id' | null;
        const savedTheme = getItem('theme') as Theme | null;
        const savedFont = getItem('katahari-font') as string | null;
        if (savedLang) setLang(savedLang);
        if (savedTheme) setTheme(savedTheme);
        if (savedFont) setFontSlug(savedFont);
    }, []);

    useEffect(() => {
        if (fontSlug) setItem('katahari-font', fontSlug);
    }, [fontSlug]);

    useEffect(() => {
        setItem('lang', lang);
    }, [lang]);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.documentElement.setAttribute('data-theme', theme);
        const isDarkLike = DARK_THEMES.has(theme);
        document.documentElement.classList.toggle('dark', isDarkLike);
        setItem('theme', theme);
    }, [theme]);

    const codeToIdx = useMemo(() => {
        const m = new Map<string, number>();
        list.forEach((q, i) => m.set(q.code, i));
        return m;
    }, [list]);

    // Categories from by-category
    const categories = useMemo(() => Object.keys(initialByCategory), [initialByCategory]);

    // Load/save categories
    useEffect(() => {
        const saved = getJSON<string[]>('quoteCategories', []);
        setSelectedCats(saved.length ? saved : categories);
    }, [categories]);

    const allowedCodes = useMemo(() => {
        if (!selectedCats || selectedCats.length === 0) return null;
        const map = initialByCategory;
        const s = new Set<string>();
        selectedCats.forEach(cat => {
            (map[cat] ?? []).forEach(q => s.add(q.code));
        });
        return s;
    }, [selectedCats, initialByCategory]);

    const allowedIdx = useMemo(() => {
        const all = list.map((_, i) => i);
        if (!allowedCodes) return all;
        const arr: number[] = [];
        list.forEach((q, i) => {
            if (allowedCodes.has(q.code)) arr.push(i);
        });
        return arr.length ? arr : all;
    }, [allowedCodes, list]);

    const [idx, setIdx] = useState<number | null>(null);
    const [history, setHistory] = useState<string[]>([]);
    const [ptr, setPtr] = useState<number>(-1);

    // =========================================================================
    // Fisher-Yates Non-Repeating Quote Deck Engine (Ported from Katahari Extension)
    // =========================================================================
    const [deck, setDeck] = useState<number[]>([]);
    const [deckPtr, setDeckPtr] = useState<number>(0);

    const shuffleDeck = (arr: number[]) => {
        const array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const ANIMATION_CLASSES = useMemo(() => [
        'quote-anim-fade-up',
        'quote-anim-scale-up',
        'quote-anim-slide-left',
        'quote-anim-slide-right',
        'quote-anim-flip-up',
        'quote-anim-blur-in',
    ], []);

    const [animClass, setAnimClass] = useState<string>('animate-quote-in');

    const triggerAnimation = () => {
        const randomAnim = ANIMATION_CLASSES[Math.floor(Math.random() * ANIMATION_CLASSES.length)];
        setAnimClass(randomAnim);
    };

    const initQuoteDeck = (pool: number[], lastIdxPick?: number) => {
        if (!pool || pool.length === 0) return [];
        const newDeck = shuffleDeck(pool);
        if (lastIdxPick !== undefined && newDeck.length > 1 && newDeck[0] === lastIdxPick) {
            [newDeck[0], newDeck[1]] = [newDeck[1], newDeck[0]];
        }
        setDeck(newDeck);
        setDeckPtr(0);
        return newDeck;
    };

    // Re-initialize deck when allowed quotes pool changes
    useEffect(() => {
        if (allowedIdx.length > 0) {
            initQuoteDeck(allowedIdx, idx ?? undefined);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allowedIdx]);

    // Initialize history from localStorage or start with a quote from deck
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (list.length === 0) return;

        try {
            const hist = getJSON<string[]>('quoteHistory', []);
            const rawPtr = getItem('quotePtr');
            const p = rawPtr ? parseInt(rawPtr, 10) : -1;
            if (hist.length > 0 && p >= 0 && p < hist.length && codeToIdx.has(hist[p])) {
                setHistory(hist);
                setPtr(p);
                setIdx(codeToIdx.get(hist[p])!);
            } else {
                const initialDeck = initQuoteDeck(allowedIdx.length ? allowedIdx : list.map((_, i) => i));
                const firstIdx = initialDeck.length > 0 ? initialDeck[0] : 0;
                setIdx(firstIdx);
                setDeckPtr(1);
                setHistory([list[firstIdx].code]);
                setPtr(0);
            }
        } catch {
            const initialDeck = initQuoteDeck(allowedIdx.length ? allowedIdx : list.map((_, i) => i));
            const firstIdx = initialDeck.length > 0 ? initialDeck[0] : 0;
            setIdx(firstIdx);
            setDeckPtr(1);
            setHistory([list[firstIdx].code]);
            setPtr(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [codeToIdx, list.length]);

    // Persist history pointer and list
    useEffect(() => {
        setJSON('quoteHistory', history);
        setItem('quotePtr', String(ptr));
    }, [history, ptr]);

    function selectByCode(code: string) {
        const i = codeToIdx.get(code);
        if (i !== undefined) {
            setIdx(i);
            triggerAnimation();
        }
    }

    const pickNextFromDeck = () => {
        const pool = allowedIdx.length ? allowedIdx : list.map((_, i) => i);
        let currentDeck = deck;
        let currentPointer = deckPtr;

        if (currentDeck.length === 0 || currentPointer >= currentDeck.length) {
            currentDeck = initQuoteDeck(pool, idx ?? undefined);
            currentPointer = 0;
        }

        const pickedIdx = currentDeck[currentPointer];
        setDeck(currentDeck);
        setDeckPtr(currentPointer + 1);

        const code = list[pickedIdx].code;
        setIdx(pickedIdx);
        setHistory(prev => {
            const newHist = [...prev.slice(0, ptr + 1), code];
            setPtr(newHist.length - 1);
            return newHist;
        });
        triggerAnimation();
    };

    const quote = idx !== null ? list[idx] : null;
    const displayedText = quote ? (lang === 'id' ? quote.content_id : quote.content) : '';

    const onPrev = () => {
        if (ptr > 0) {
            const newPtr = ptr - 1;
            setPtr(newPtr);
            selectByCode(history[newPtr]);
        }
    };

    const onNext = () => {
        if (ptr < history.length - 1) {
            const newPtr = ptr + 1;
            setPtr(newPtr);
            selectByCode(history[newPtr]);
        } else {
            pickNextFromDeck();
        }
    };

    const onShuffle = () => {
        pickNextFromDeck();
    };

    // Category toggles
    function toggleCategory(cat: string) {
        const next = selectedCats.includes(cat)
            ? selectedCats.filter(c => c !== cat)
            : [...selectedCats, cat];
        setSelectedCats(next);
        setJSON('quoteCategories', next);

        // Re-build pool and deck for updated categories
        const map = initialByCategory;
        const codes = new Set<string>();
        next.forEach(c => (map[c] ?? []).forEach(q => codes.add(q.code)));
        const pool = (codes.size
            ? list.map((q, i) => (codes.has(q.code) ? i : -1)).filter(i => i >= 0)
            : list.map((_, i) => i));

        const freshDeck = initQuoteDeck(pool);
        if (freshDeck.length > 0) {
            const pick = freshDeck[0];
            setIdx(pick);
            setDeckPtr(1);
            setHistory([list[pick].code]);
            setPtr(0);
            triggerAnimation();
        }
    }

    const selectAllCategories = () => {
        setSelectedCats(categories);
        setJSON('quoteCategories', categories);
        const pool = list.map((_, i) => i);
        const freshDeck = initQuoteDeck(pool);
        if (freshDeck.length > 0) {
            const pick = freshDeck[0];
            setIdx(pick);
            setDeckPtr(1);
            setHistory([list[pick].code]);
            setPtr(0);
            triggerAnimation();
        }
    };

    const clearCategories = () => {
        setSelectedCats([]);
        setJSON('quoteCategories', []);
        const pool = list.map((_, i) => i);
        const freshDeck = initQuoteDeck(pool);
        if (freshDeck.length > 0) {
            const pick = freshDeck[0];
            setIdx(pick);
            setDeckPtr(1);
            setHistory([list[pick].code]);
            setPtr(0);
            triggerAnimation();
        }
    };

    const onCopy = async () => {
        if (!quote) return;
        const text = `${displayedText} — ${quote.credit}`;
        try {
            await copyText(text);
            setToastMsg(lang === 'id' ? 'Tersalin ke clipboard' : 'Copied to clipboard');
            setToastOpen(true);
        } catch {
            setToastMsg(lang === 'id' ? 'Gagal menyalin' : 'Copy failed');
            setToastOpen(true);
        }
    };

    // =========================================================================
    // Keyboard Shortcuts Listener (Ported from Katahari Extension)
    // =========================================================================
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const targetTag = (document.activeElement?.tagName || '').toUpperCase();
            if (['INPUT', 'TEXTAREA'].includes(targetTag)) return;

            if (e.key === 'Escape') {
                setShowThemePanel(false);
                setShowSourcesPanel(false);
                setShowDownloadPanel(false);
                setShowFontPanel(false);
                setShowDonatePanel(false);
                setShowDrawer(false);
                return;
            }

            if (showThemePanel || showSourcesPanel || showDownloadPanel || showFontPanel || showDonatePanel || showDrawer) return;

            if (e.key === ' ' || e.key === 'ArrowRight') {
                e.preventDefault();
                onNext();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                onPrev();
            } else if (e.key.toLowerCase() === 'c') {
                e.preventDefault();
                onCopy();
            } else if (e.key.toLowerCase() === 'd') {
                e.preventDefault();
                setShowDownloadPanel(true);
            } else if (e.key.toLowerCase() === 'f') {
                e.preventDefault();
                setShowFontPanel(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showThemePanel, showSourcesPanel, showDownloadPanel, showFontPanel, showDrawer, ptr, history, deck, deckPtr]);


    const toggleLang = () => setLang(prev => (prev === 'en' ? 'id' : 'en'));

    return (
        <div className="min-h-dvh font-sans text-[var(--foreground)] relative">
            {/* Soft aurora-like background */}
            <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                <div className="aurora absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_-120px,var(--aurora-a),transparent),radial-gradient(900px_520px_at_80%_120%,var(--aurora-b),transparent)]" />
            </div>

            {/* Top navigation header */}
            <header className="sticky top-0 z-20 w-full px-6 py-5">
                <div className="mx-auto max-w-7xl flex items-center justify-between">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-2.5 cursor-pointer select-none">
                        <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">katahari</span>
                    </div>

                    {/* Controls Floating Capsule */}
                    <nav className="hidden md:flex items-center gap-1 p-1 bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)] backdrop-blur-2xl border border-[color-mix(in_srgb,var(--foreground)_16%,transparent)] rounded-full shadow-lg text-xs font-semibold text-[var(--foreground)]">
                        {/* Language */}
                        <button
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] transition"
                            aria-label="Toggle language"
                            title="Switch language (EN/ID)"
                            onClick={toggleLang}
                        >
                            <span>{lang === 'en' ? '🇺🇸 EN' : '🇮🇩 ID'}</span>
                        </button>

                        {/* Themes */}
                        <button
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] transition"
                            aria-label="Open theme chooser"
                            title="Change Theme"
                            onClick={() => setShowThemePanel(v => !v)}
                        >
                            <span className="size-3 rounded-full border border-[color-mix(in_srgb,var(--foreground)_30%,transparent)] bg-current inline-block" />
                            <span className="capitalize">{theme}</span>
                        </button>

                        {/* Aesthetic Fonts */}
                        <button
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] transition"
                            aria-label="Open font chooser"
                            title="Choose Aesthetic Font (Press F)"
                            onClick={() => setShowFontPanel(true)}
                        >
                            <span className="font-serif font-bold text-sm">Aa</span>
                            <span>{font.name}</span>
                        </button>

                        {/* Sources / Categories */}
                        <button
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] transition"
                            aria-label="Open quote sources"
                            title="Filter Quote Sources"
                            onClick={() => setShowSourcesPanel(true)}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                            <span>{lang === 'id' ? 'Kategori' : 'Sources'}</span>
                        </button>

                        {/* Light / Dark Toggle */}
                        <button
                            className="inline-flex items-center justify-center size-7 rounded-full hover:bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] transition"
                            aria-label="Toggle light/dark"
                            title={DARK_THEMES.has(theme) ? "Light" : "Dark"}
                            onClick={() => setTheme(DARK_THEMES.has(theme) ? 'light' : 'dark')}
                        >
                            {DARK_THEMES.has(theme) ? (
                                <IconSun className="size-4" />
                            ) : (
                                <IconMoon className="size-4" />
                            )}
                        </button>

                        {/* Donate */}
                        <button
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] hover:bg-[color-mix(in_srgb,var(--foreground)_22%,transparent)] transition border border-[color-mix(in_srgb,var(--foreground)_16%,transparent)] text-[var(--foreground)]"
                            onClick={() => setShowDonatePanel(true)}
                            title="Support Development"
                        >
                            <span>Donate</span>
                        </button>
                    </nav>

                    <button
                        onClick={() => setShowDrawer(true)}
                        className="md:hidden inline-flex items-center justify-center p-2 text-[var(--foreground)] opacity-85 hover:opacity-100 active:scale-90 transition"
                        aria-label="Open menu"
                        title="Menu"
                    >
                        <IconMenu className="size-6" />
                    </button>
                </div>
            </header>

            {/* Themes Modal */}
            <Modal
                open={showThemePanel}
                onClose={() => setShowThemePanel(false)}
                title="Select Theme"
            >
                <div className="flex flex-col">
                    {THEME_LIST.map(t => (
                        <button
                            key={t.slug}
                            onClick={() => { setTheme(t.slug as Theme); setShowThemePanel(false); }}
                            className={`flex items-center justify-between py-3.5 px-2 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] transition-all text-left ${
                                theme === t.slug ? 'font-bold opacity-100' : 'opacity-75 hover:opacity-100'
                            }`}
                            aria-label={`Set theme ${t.name}`}
                            title={t.name}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="inline-block h-5 w-5 rounded-full ring-2 ring-[color-mix(in_srgb,var(--foreground)_20%,transparent)] shrink-0 shadow-sm"
                                    style={{ background: `linear-gradient(135deg, ${t.swatchA}, ${t.swatchB})` }}
                                />
                                <span className="text-sm font-medium text-[var(--foreground)] capitalize">{t.name}</span>
                            </div>
                            {theme === t.slug ? <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[color-mix(in_srgb,var(--foreground)_15%,transparent)]">Active</span> : null}
                        </button>
                    ))}
                </div>
            </Modal>

            {/* Aesthetic Font Selection Modal */}
            <Modal
                open={showFontPanel}
                onClose={() => setShowFontPanel(false)}
                title="Select Aesthetic Font"
            >
                <div className="flex flex-col">
                    {FONT_LIST.map(f => (
                        <button
                            key={f.slug}
                            onClick={() => { setFontSlug(f.slug); setShowFontPanel(false); }}
                            className={`flex flex-col text-left gap-1 py-3.5 px-2 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] transition-all ${
                                fontSlug === f.slug ? 'opacity-100 font-semibold' : 'opacity-75 hover:opacity-100'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-[var(--foreground)]">{f.name}</span>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">{f.category}</span>
                            </div>
                            <p className={`text-lg text-[var(--foreground)] ${f.fontClass} ${f.weightClass} ${f.leadingClass} ${f.trackingClass} ${f.styleClass ?? ''}`}>
                                {quote ? (lang === 'id' ? quote.content_id : quote.content) : f.preview}
                            </p>
                            <p className="text-[11px] text-[var(--muted-foreground)] opacity-70 line-clamp-1">{f.description}</p>
                        </button>
                    ))}
                </div>
            </Modal>

            {/* Donate Modal */}
            <Modal
                open={showDonatePanel}
                onClose={() => setShowDonatePanel(false)}
                title={lang === 'id' ? 'Dukungan Katahari' : 'Support Katahari'}
            >
                <div className="space-y-4">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {lang === 'id'
                            ? 'Jika Katahari Quotes memberikan inspirasi untuk harimu, dukung pengembangan proyek ini!'
                            : 'If Katahari Quotes brings a moment of inspiration to your day, consider supporting development!'}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        {/* QRIS Indonesia */}
                        <div className="flex flex-col items-center text-center p-4 rounded-2xl border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]">
                            <div className="relative w-44 h-44 rounded-xl overflow-hidden shadow-md bg-white p-2 border border-black/10">
                                <Image src="/qris.jpeg" alt="QRIS QR Code" fill className="object-contain" />
                            </div>
                            <span className="text-xs font-bold text-[var(--foreground)] mt-3">QRIS (Indonesia)</span>
                            <span className="text-[10px] text-[var(--muted-foreground)] opacity-75 mt-0.5">GoPay, OVO, Dana, ShopeePay, Bank Transfer</span>
                        </div>

                        {/* Global (PayPal / Coffee) */}
                        <div className="flex flex-col items-center text-center p-4 rounded-2xl border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]">
                            <div className="relative w-44 h-44 rounded-xl overflow-hidden shadow-md bg-white p-2 border border-black/10">
                                <Image src="/qrcode.png" alt="Global Donation QR Code" fill className="object-contain" />
                            </div>
                            <span className="text-xs font-bold text-[var(--foreground)] mt-3">Global (PayPal / Coffee)</span>
                            <span className="text-[10px] text-[var(--muted-foreground)] opacity-75 mt-0.5">International support / Credit Card</span>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Sources / Categories Modal */}
            <Modal
                open={showSourcesPanel}
                onClose={() => setShowSourcesPanel(false)}
                title={lang === 'id' ? 'Kategori' : 'Category'}
            >
                <div className="mb-4 flex items-center gap-4 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] pb-3">
                    <button
                        className="text-xs text-[var(--foreground)] font-semibold opacity-80 hover:opacity-100 transition underline underline-offset-4"
                        onClick={selectAllCategories}
                    >
                        {lang === 'id' ? 'Pilih semua' : 'Select all'}
                    </button>
                    <button
                        className="text-xs text-[var(--foreground)] font-semibold opacity-80 hover:opacity-100 transition underline underline-offset-4"
                        onClick={clearCategories}
                    >
                        {lang === 'id' ? 'Bersihkan' : 'Clear'}
                    </button>
                </div>
                <div className="flex flex-col">
                    {categories.map(cat => (
                        <label
                            key={cat}
                            className="cursor-pointer select-none flex items-center justify-between py-3.5 px-2 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] hover:opacity-85 transition"
                            title={cat}
                        >
                            <span className="text-sm font-medium text-[var(--foreground)] capitalize">{cat}</span>
                            <input
                                type="checkbox"
                                className="size-4 accent-[var(--foreground)] rounded"
                                checked={selectedCats.includes(cat)}
                                onChange={() => toggleCategory(cat)}
                            />
                        </label>
                    ))}
                </div>
            </Modal>

            {/* Download size chooser */}
            <Modal
                open={showDownloadPanel}
                onClose={() => setShowDownloadPanel(false)}
                title={lang === 'id' ? 'Unduh' : 'Download'}
            >
                <div className="flex flex-col">
                    <button
                        className="flex items-center justify-between py-4 px-2 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={async () => {
                            if (quote) {
                                await generateQuoteImage(displayedText, quote.credit, 'square', `quote-${quote.code}-square.png`, font.family, font.weightClass, font.styleClass);
                            }
                            setShowDownloadPanel(false);
                        }}
                    >
                        <span className="text-sm font-medium">{lang === 'id' ? 'Gambar Persegi (1080 × 1080)' : 'Square Image (1080 × 1080)'}</span>
                        <span className="text-xs font-semibold opacity-75">1:1</span>
                    </button>
                    <button
                        className="flex items-center justify-between py-4 px-2 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={async () => {
                            if (quote) {
                                await generateQuoteImage(displayedText, quote.credit, 'story', `quote-${quote.code}-story.png`, font.family, font.weightClass, font.styleClass);
                            }
                            setShowDownloadPanel(false);
                        }}
                    >
                        <span className="text-sm font-medium">{lang === 'id' ? 'Gambar Story (1080 × 1920)' : 'Story Image (1080 × 1920)'}</span>
                        <span className="text-xs font-semibold opacity-75">9:16</span>
                    </button>
                </div>
            </Modal>

            {/* Mobile navigation drawer */}
            <Drawer
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                side="right"
                title="MENU"
            >
                <nav className="flex flex-col">
                    <button
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={() => { toggleLang(); setShowDrawer(false); }}
                    >
                        <span className="text-sm font-medium">{lang === 'en' ? 'Language' : 'Bahasa'}</span>
                        <span className="text-xs opacity-70 font-semibold">{lang.toUpperCase()}</span>
                    </button>

                    <button
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={() => { setShowFontPanel(true); setShowDrawer(false); }}
                    >
                        <span className="text-sm font-medium">Font</span>
                        <span className="text-xs opacity-70 font-semibold capitalize">{font.name}</span>
                    </button>

                    <button
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={() => { setShowThemePanel(true); setShowDrawer(false); }}
                    >
                        <span className="text-sm font-medium">Themes</span>
                        <span className="text-xs opacity-70 font-semibold capitalize">{theme}</span>
                    </button>

                    <button
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={() => { setTheme(DARK_THEMES.has(theme) ? 'light' : 'dark'); setShowDrawer(false); }}
                    >
                        <span className="text-sm font-medium">{DARK_THEMES.has(theme) ? (lang === 'id' ? 'Mode Terang' : 'Light mode') : (lang === 'id' ? 'Mode Gelap' : 'Dark mode')}</span>
                        <span className="inline-flex h-6 w-6 items-center justify-center">
                            {DARK_THEMES.has(theme) ? (
                                <IconSun className="size-4" />
                            ) : (
                                <IconMoon className="size-4" />
                            )}
                        </span>
                    </button>

                    <button
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={() => { setShowSourcesPanel(true); setShowDrawer(false); }}
                    >
                        <span className="text-sm font-medium">{lang === 'id' ? 'Kategori' : 'Category'}</span>
                    </button>

                    <button
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left"
                        onClick={() => { setShowDonatePanel(true); setShowDrawer(false); }}
                    >
                        <span className="text-sm font-medium">Donate</span>
                        <span className="text-xs font-semibold opacity-75">QRIS / PayPal</span>
                    </button>

                    <Link
                        className="flex items-center justify-between py-3.5 px-1 border-b border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] text-[var(--foreground)] hover:opacity-75 transition text-left font-medium text-sm"
                        href="https://github.com/yudafhd/katahari"
                        target="_blank"
                        onClick={() => setShowDrawer(false)}
                    >
                        <span>GitHub</span>
                    </Link>
                </nav>
            </Drawer>

            {/* Main Quote Content Area (Borderless Center Display) */}
            <main className="mx-auto max-w-5xl px-6 min-h-[calc(100dvh-9rem)] flex flex-col items-center justify-center text-center relative">
                {/* Large decorative watermark quote mark */}
                <div className="font-serif text-[7rem] sm:text-[9rem] leading-none text-current opacity-15 select-none pointer-events-none -mb-14">
                    “
                </div>

                <article className="max-w-4xl space-y-6 relative z-10 px-4">
                    <blockquote key={`${idx ?? 'loading'}-${lang}`} className="space-y-6">
                        <p className={`text-[var(--foreground)] [text-wrap:balance] transition-all duration-300 ${font.fontClass} ${font.weightClass} ${font.leadingClass} ${font.trackingClass} ${font.styleClass ?? ''} ${font.slug === 'caveat' ? 'text-3xl sm:text-5xl md:text-6xl' : 'text-2xl sm:text-4xl md:text-5xl'} ${animClass}`}>
                            {quote ? displayedText : <span className="inline-block h-8 w-4/5 bg-white/10 rounded animate-pulse" />}
                        </p>
                        <footer className={`text-base sm:text-lg md:text-xl font-medium text-[var(--muted-foreground)] opacity-85 mt-8 ${animClass}`}>
                            {quote ? <>— {quote.credit}</> : <span className="inline-block h-5 w-48 bg-white/10 rounded animate-pulse" />}
                        </footer>
                    </blockquote>
                </article>
            </main>

            {/* Bottom-left Action Group */}
            <div className="fixed bottom-6 left-6 z-20 hidden md:inline-flex items-center gap-2.5 text-sm font-medium text-[var(--foreground)] opacity-90 hover:opacity-100 transition select-none">
                <button
                    onClick={onNext}
                    className="inline-flex items-center gap-1.5 hover:opacity-100 transition"
                    title="Inspire Me (Space / → Right Arrow)"
                >
                    <span className="kbd text-[11px] px-1.5 py-0.5">Space</span>
                    <span className="opacity-40">/</span>
                    <span className="kbd text-[11px] px-1.5 py-0.5">→</span>
                    <span className="ml-1">Inspire</span>
                </button>

                <span className="opacity-40">•</span>

                <button
                    onClick={() => setShowFontPanel(true)}
                    className="inline-flex items-center gap-1.5 hover:opacity-100 transition"
                    title="Choose Font (Press F)"
                >
                    <span className="kbd text-[11px] px-1.5 py-0.5">F</span>
                    <span className="ml-1">Font</span>
                </button>

                <span className="opacity-40">•</span>

                <button
                    onClick={onCopy}
                    className="inline-flex items-center gap-1.5 hover:opacity-100 transition"
                    title="Copy Quote (Press C)"
                >
                    <span className="kbd text-[11px] px-1.5 py-0.5">C</span>
                    <span className="ml-1">Copy</span>
                </button>

                <span className="opacity-40">•</span>

                <button
                    onClick={() => setShowDownloadPanel(true)}
                    className="inline-flex items-center gap-1.5 hover:opacity-100 transition"
                    title="Download Quote Image (Press D)"
                >
                    <span className="kbd text-[11px] px-1.5 py-0.5">D</span>
                    <span className="ml-1">Download</span>
                </button>
            </div>

            <BottomNav
                onNext={onNext}
                onPrev={onPrev}
                onShuffle={onShuffle}
                onDownload={() => setShowDownloadPanel(true)}
                onSources={() => { setShowSourcesPanel(true); setShowDrawer(false); }}
                onThemes={() => { setShowThemePanel(true); setShowDrawer(false); }} />
            <Notification open={toastOpen} onClose={() => setToastOpen(false)} message={toastMsg} />
        </div>
    );
}
