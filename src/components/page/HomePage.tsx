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
    IconChevronLeft,
    IconChevronRight,
    IconShuffle,
    IconCopy,
    IconShare,
    IconMenu,
    IconMail,
    IconGitHub,
    IconSun,
    IconMoon
} from "@/components/icons";
import type { Quote, ByFileMap } from "@/types/quotes";

type Theme = ThemeSlug;

// Themes that should enable Tailwind's .dark styles for contrast
const DARK_THEMES = new Set<Theme>([
    'dark', 'violet', 'ocean', 'forest', 'indigo', 'midnight',
    'dracula', 'coffee', 'lava', 'neon'
]);

export default function HomePage({ initialList, initialByfile }: { initialList: Quote[]; initialByfile: ByFileMap }) {
    // Initialize with deterministic SSR-safe defaults, then load from localStorage after mount
    const [lang, setLang] = useState<'en' | 'id'>('en');
    const [theme, setTheme] = useState<Theme>('light');
    const [showThemePanel, setShowThemePanel] = useState(false);
    const [showSourcesPanel, setShowSourcesPanel] = useState(false);
    const [selectedCats, setSelectedCats] = useState<string[]>([]);
    const [toastOpen, setToastOpen] = useState(false);
    const [toastMsg, setToastMsg] = useState<string>('');
    const [showDrawer, setShowDrawer] = useState(false);
    // Data from server (via /page.tsx) passed as props
    const [list, setList] = useState<Quote[]>(initialList ?? []);
    const [byfileMap, setByfileMap] = useState<ByFileMap>(initialByfile ?? {});

    // Load saved preferences after mount to avoid SSR/CSR mismatch
    useEffect(() => {
        const savedLang = getItem('lang') as 'en' | 'id' | null;
        const savedTheme = getItem('theme') as Theme | null;
        if (savedLang) setLang(savedLang);
        if (savedTheme) setTheme(savedTheme);
    }, []);

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

    // Categories from byfile
    const categories = useMemo(() => Object.keys(byfileMap), [byfileMap]);

    // Load/save categories
    useEffect(() => {
        const saved = getJSON<string[]>('quoteCategories', []);
        setSelectedCats(saved.length ? saved : categories);
    }, [categories]);

    const allowedCodes = useMemo(() => {
        if (!selectedCats || selectedCats.length === 0) return null;
        const map = byfileMap;
        const s = new Set<string>();
        selectedCats.forEach(cat => {
            (map[cat] ?? []).forEach(q => s.add(q.code));
        });
        return s;
    }, [selectedCats, byfileMap]);

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

    // Initialize history from localStorage or start with a random quote
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (list.length === 0) return;
        const selectRandom = (initial = false) => {
            const i = Math.floor(Math.random() * list.length);
            setIdx(i);
            const code = list[i].code;
            setHistory(prev => {
                const newHist = initial ? [code] : [...prev.slice(0, ptr + 1), code];
                setPtr(newHist.length - 1);
                return newHist;
            });
        };

        try {
            const hist = getJSON<string[]>('quoteHistory', []);
            const rawPtr = getItem('quotePtr');
            const p = rawPtr ? parseInt(rawPtr, 10) : -1;
            if (hist.length > 0 && p >= 0 && p < hist.length && codeToIdx.has(hist[p])) {
                setHistory(hist);
                setPtr(p);
                setIdx(codeToIdx.get(hist[p])!);
            } else {
                selectRandom(true);
            }
        } catch {
            selectRandom(true);
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
        }
    }

    function selectRandom() {
        const pool = allowedIdx.length ? allowedIdx : list.map((_, i) => i);
        const i = pool[Math.floor(Math.random() * pool.length)];
        setIdx(i);
        const code = list[i].code;
        setHistory(prev => {
            const newHist = [...prev.slice(0, ptr + 1), code];
            setPtr(newHist.length - 1);
            return newHist;
        });
    }

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
            selectRandom();
        }
    };

    const onShuffle = () => {
        selectRandom();
    };

    // Category toggles
    function toggleCategory(cat: string) {
        const next = selectedCats.includes(cat)
            ? selectedCats.filter(c => c !== cat)
            : [...selectedCats, cat];
        setSelectedCats(next);
        setJSON('quoteCategories', next);

        // Fresh pick within new pool and reset history
        const map = byfileMap;
        const codes = new Set<string>();
        next.forEach(c => (map[c] ?? []).forEach(q => codes.add(q.code)));
        const pool = (codes.size
            ? list.map((q, i) => (codes.has(q.code) ? i : -1)).filter(i => i >= 0)
            : list.map((_, i) => i));
        if (pool.length) {
            const i = Math.floor(Math.random() * pool.length);
            const idxPick = pool[i];
            setIdx(idxPick);
            setHistory([list[idxPick].code]);
            setPtr(0);
        }
    }

    const selectAllCategories = () => {
        setSelectedCats(categories);
        setJSON('quoteCategories', categories);
        const pool = allowedIdx;
        if (pool.length) {
            const i = pool[Math.floor(Math.random() * pool.length)];
            setIdx(i);
            setHistory([list[i].code]);
            setPtr(0);
        }
    };

    const clearCategories = () => {
        setSelectedCats([]);
        setJSON('quoteCategories', []);
        const pool = list.map((_, i) => i);
        if (pool.length) {
            const i = pool[Math.floor(Math.random() * pool.length)];
            setIdx(i);
            setHistory([list[i].code]);
            setPtr(0);
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

    const toggleLang = () => setLang(prev => (prev === 'en' ? 'id' : 'en'));

    return (
        <div className="min-h-dvh font-sans text-[var(--foreground)] relative">
            {/* Soft aurora-like background */}
            <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                <div className="aurora absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_-120px,var(--aurora-a),transparent),radial-gradient(900px_520px_at_80%_120%,var(--aurora-b),transparent)]" />
            </div>

            {/* Top navigation */}
            <header className="sticky top-0 z-10">
                <div className="relative mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image src="/apple-touch-icon.png" width={30} height={30} alt="katahari icon" />
                        <div className="-ml-2 text-xl font-extrabold tracking-tight">atahari</div>
                        <span className="text-sm text-slate-500">quotes</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-[15px]">
                        <button
                            className="opacity-80 hover:opacity-100 transition inline-flex h-9 items-center justify-center rounded-md px-3 border border-black/10 dark:border-white/10"
                            aria-label="Toggle language"
                            onClick={toggleLang}
                        >
                            {lang === 'en' ? 'EN' : 'ID'}
                        </button>

                        <button
                            className="opacity-80 hover:opacity-100 transition inline-flex h-9 items-center justify-center rounded-md px-3 border border-black/10 dark:border-white/10"
                            aria-label="Open theme chooser"
                            onClick={() => setShowThemePanel(v => !v)}
                        >
                            Themes
                        </button>

                        {/* Quick light/dark toggle with single button */}
                        <button
                            className="opacity-80 hover:opacity-100 transition inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
                            aria-label="Toggle light/dark"
                            title={DARK_THEMES.has(theme) ? "Light" : "Dark"}
                            onClick={() => setTheme(DARK_THEMES.has(theme) ? 'light' : 'dark')}
                        >
                            {DARK_THEMES.has(theme) ? (
                                <IconSun className="size-5" />
                            ) : (
                                <IconMoon className="size-5" />
                            )}
                        </button>

                        <button className="opacity-80 hover:opacity-100 transition" onClick={() => setShowSourcesPanel(true)}>Category</button>

                        <a
                            className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white shadow-sm hover:from-violet-700 hover:to-fuchsia-600 transition"
                            href="#"
                        >
                            <span className="font-medium">Donate</span>
                        </a>

                        <Link target="_blank" href="mailto:ahmadyudafahrudin@gmail.com">
                            <IconMail className="size-5" />
                        </Link>
                        <Link target="_blank" href="https://github.com/yudafhd/katahari">
                            <IconGitHub className="size-5" />
                        </Link>
                    </nav>

                    <Modal
                        open={showThemePanel}
                        onClose={() => setShowThemePanel(false)}
                        title="Select Theme"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {THEME_LIST.map(t => (
                                <button
                                    key={t.slug}
                                    onClick={() => { setTheme(t.slug as Theme); setShowThemePanel(false); }}
                                    className={`group flex items-center 
                    gap-3 rounded-lg border border-black/10 dark:border-white/10 
                    p-3 hover:bg-slate-200/50 dark:hover:bg-white/10 
                    ${theme === t.slug ? 'ring-2 ring-[var(--ring)]' : ''}`}
                                    aria-label={`Set theme ${t.name}`}
                                    title={t.name}
                                >
                                    <span
                                        className="inline-block h-6 w-6 rounded-full ring-1 ring-black/10 dark:ring-white/10"
                                        style={{ background: `linear-gradient(135deg, ${t.swatchA}, ${t.swatchB})` }}
                                    />
                                    <span className="text-sm text-[var(--foreground)]">{t.name}</span>
                                </button>
                            ))}
                        </div>
                    </Modal>

                    {/* Sources / Categories Modal */}
                    <Modal
                        open={showSourcesPanel}
                        onClose={() => setShowSourcesPanel(false)}
                        title={lang === 'id' ? 'Kategori' : 'Category'}
                    >
                        <div className="mb-3 flex items-center gap-2">
                            <button
                                className="text-xs text-[var(--foreground)] px-2 py-1 rounded border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
                                onClick={selectAllCategories}
                            >
                                {lang === 'id' ? 'Pilih semua' : 'Select all'}
                            </button>
                            <button
                                className="text-xs text-[var(--foreground)] px-2 py-1 rounded border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
                                onClick={clearCategories}
                            >
                                {lang === 'id' ? 'Bersihkan' : 'Clear'}
                            </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {categories.map(cat => (
                                <label
                                    key={cat}
                                    className="cursor-pointer select-none group flex items-center gap-3 rounded-lg border border-black/10 dark:border-white/10 p-3 hover:bg-black/5 dark:hover:bg-white/10"
                                    title={cat}
                                >
                                    <input
                                        type="checkbox"
                                        className="size-4 accent-violet-600"
                                        checked={selectedCats.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    <span className="text-sm text-[var(--foreground)] capitalize">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </Modal>

                    <button
                        onClick={() => setShowDrawer(true)}
                        className="md:hidden inline-flex size-10 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
                        aria-label="Open menu"
                    >
                        <IconMenu className="size-5" />
                    </button>
                </div>
            </header>

            {/* Mobile navigation drawer (right side) */}
            <Drawer
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                side="right"
                title="MENU"
            >
                <nav className="flex flex-col gap-3">
                    <button
                        className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={() => { toggleLang(); setShowDrawer(false); }}
                    >
                        <span className="text-sm">{lang === 'en' ? 'Language' : 'Bahasa'}</span>
                        <span className="text-xs opacity-70">{lang.toUpperCase()}</span>
                    </button>

                    <button
                        className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={() => { setShowThemePanel(true); setShowDrawer(false); }}
                    >
                        <span className="text-sm">Themes</span>
                        <span className="text-xs opacity-70 capitalize">{theme}</span>
                    </button>

                    <button
                        className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={() => { setTheme(DARK_THEMES.has(theme) ? 'light' : 'dark'); setShowDrawer(false); }}
                    >
                        <span className="text-sm">{DARK_THEMES.has(theme) ? (lang === 'id' ? 'Mode Terang' : 'Light mode') : (lang === 'id' ? 'Mode Gelap' : 'Dark mode')}</span>
                        <span className="inline-flex h-6 w-6 items-center justify-center">
                            {DARK_THEMES.has(theme) ? (
                                <IconSun className="size-4" />
                            ) : (
                                <IconMoon className="size-4" />
                            )}
                        </span>
                    </button>

                    <button
                        className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={() => { setShowSourcesPanel(true); setShowDrawer(false); }}
                    >
                        <span className="text-sm">{lang === 'id' ? 'Kategori' : 'Category'}</span>
                    </button>

                    <a
                        className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        href="#"
                    >
                        <span className="text-sm">Donate</span>
                    </a>

                    <Link
                        className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        href="mailto:ahmadyudafahrudin@gmail.com"
                        onClick={() => setShowDrawer(false)}
                    >
                        <span className="text-sm">Email</span>
                    </Link>

                    <Link
                        className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        href="https://github.com/yudafhd/katahari"
                        target="_blank"
                        onClick={() => setShowDrawer(false)}
                    >
                        <span className="text-sm">GitHub</span>
                    </Link>
                </nav>
            </Drawer>

            {/* Main content */}
            <main className="mx-auto max-w-4xl px-10 min-h-[calc(100dvh-8rem)] flex items-center justify-center">
                <section className="flex w-full relative">
                    {/* Decorative open-quote */}
                    <div className="absolute -top-8 left-4 text-9xl leading-none text-violet-400/30 select-none">“</div>

                    <div className="my-auto rounded-3xl ring-1 ring-[var(--ring)] shadow-[0_1px_0_0_rgba(0,0,0,.04),0_10px_40px_-12px_rgba(2,6,23,.18)] pt-8 p-5 md:p-10" style={{ backgroundColor: "var(--card-bg)" }}>
                        <blockquote key={`${idx ?? 'loading'}-${lang}`} className="space-y-6">
                            <p className="font-bold tracking-tight leading-tight text-[var(--foreground)] text-2xl md:text-5xl animate-quote-in">
                                {quote ? displayedText : <span className="inline-block h-6 w-4/5 bg-slate-200/80 dark:bg-white/10 rounded animate-pulse" />}
                            </p>
                            <footer className="text-sm md:text-xl text-[var(--muted-foreground)] animate-quote-in">
                                {quote ? <>— {quote.credit}</> : <span className="inline-block h-4 w-40 bg-slate-200/80 dark:bg-white/10 rounded animate-pulse" />}
                            </footer>
                        </blockquote>

                        {/* Card controls */}
                        <div className="hidden md:flex items-center justify-between mt-10">
                            <div className="flex items-center gap-6 text-slate-600">
                                <button onClick={onPrev} className="inline-flex items-center justify-center rounded-full size-8 hover:bg-slate-200/60 dark:hover:bg-white/10" aria-label="Sebelumnya">
                                    <IconChevronLeft className="size-5" />
                                </button>
                                <button onClick={onShuffle} className="inline-flex items-center justify-center rounded-full size-8 hover:bg-slate-200/60 dark:hover:bg-white/10" aria-label="Acak">
                                    <IconShuffle className="size-5" />
                                </button>
                                <button onClick={onNext} className="inline-flex items-center justify-center rounded-full size-8 hover:bg-slate-200/60 dark:hover:bg-white/10" aria-label="Berikutnya">
                                    <IconChevronRight className="size-5" />
                                </button>
                            </div>

                            <div className="flex items-center gap-6 text-slate-600">
                                <button onClick={onCopy} className="inline-flex items-center justify-center rounded-md h-9 px-2 hover:bg-slate-200/60 dark:hover:bg-white/10" aria-label="Salin">
                                    <IconCopy className="size-5" />
                                </button>
                                {/* <button className="inline-flex items-center justify-center rounded-md h-9 px-2 hover:bg-slate-200/60 dark:hover:bg-white/10" aria-label="Bagikan">
                  <IconShare className="size-5" />
                </button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BottomNav
                onNext={onNext}
                onPrev={onPrev}
                onShuffle={onShuffle}
                onCopy={onCopy}
                onSources={() => { setShowSourcesPanel(true); setShowDrawer(false); }}
                onThemes={() => { setShowThemePanel(true); setShowDrawer(false); }} />
            <Notification open={toastOpen} onClose={() => setToastOpen(false)} message={toastMsg} />
        </div>
    );
}