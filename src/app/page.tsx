'use client';

import { useEffect, useMemo, useState } from "react";
import quotes from "@/data/quotes.json";
import byfile from "@/data/quotes.byfile.json";
import { THEME_LIST, ThemeSlug } from "@/config/themes";
import { getItem, setItem, getJSON, setJSON } from "@/utils/storage";
import Modal from "@/components/Modal";
import Notification from "@/components/Notification";
import { copyText } from "@/utils/clipboard";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import BottomNav from "@/components/BottomNav";

export const dynamic = 'force-dynamic';

type Quote = {
  code: string;
  content: string;
  content_id: string;
  credit: string;
};

type Theme = ThemeSlug;

export default function Home() {
  // Initialize with deterministic SSR-safe defaults, then load from localStorage after mount
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [showSourcesPanel, setShowSourcesPanel] = useState(false);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string>('');
  const [showDrawer, setShowDrawer] = useState(false);

  // Themes that should enable Tailwind's .dark styles for contrast
  const DARK_THEMES = new Set<Theme>([
    'dark', 'violet', 'ocean', 'forest', 'indigo', 'midnight',
    'dracula', 'coffee', 'lava', 'neon'
  ]);

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

  const list = quotes as Quote[];

  const codeToIdx = useMemo(() => {
    const m = new Map<string, number>();
    list.forEach((q, i) => m.set(q.code, i));
    return m;
  }, [list]);

  // Categories from byfile
  type ByFileMap = Record<string, Quote[]>;
  const categories = useMemo(() => Object.keys(byfile as ByFileMap), []);

  // Load/save categories
  useEffect(() => {
    const saved = getJSON<string[]>('quoteCategories', []);
    setSelectedCats(saved.length ? saved : categories);
  }, [categories]);

  const allowedCodes = useMemo(() => {
    if (!selectedCats || selectedCats.length === 0) return null;
    const map = byfile as ByFileMap;
    const s = new Set<string>();
    selectedCats.forEach(cat => {
      (map[cat] ?? []).forEach(q => s.add(q.code));
    });
    return s;
  }, [selectedCats]);

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
    const map = byfile as ByFileMap;
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

  const cycleTheme = () => {
    const order = THEME_LIST.map(t => t.slug as Theme);
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
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
                // Sun icon
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M4.93 19.07l1.41-1.41" />
                  <path d="M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                // Moon icon
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
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
          {/* 
          <button
            className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => { setShowThemePanel(true); setShowDrawer(false); }}
          >
            <span className="text-sm">Themes</span>
            <span className="text-xs opacity-70 capitalize">{theme}</span>
          </button> */}

          {/* <button
            className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => { setTheme(DARK_THEMES.has(theme) ? 'light' : 'dark'); setShowDrawer(false); }}
          >
            <span className="text-sm">{DARK_THEMES.has(theme) ? (lang === 'id' ? 'Mode Terang' : 'Light mode') : (lang === 'id' ? 'Mode Gelap' : 'Dark mode')}</span>
            <span className="inline-flex h-6 w-6 items-center justify-center">
              {DARK_THEMES.has(theme) ? (
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93l1.41 1.41" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M4.93 19.07l1.41-1.41" />
                  <path d="M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
          </button> */}

          {/* <button
            className="inline-flex items-center justify-between rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => { setShowSourcesPanel(true); setShowDrawer(false); }}
          >
            <span className="text-sm">{lang === 'id' ? 'Kategori' : 'Category'}</span>
          </button> */}

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

/* --- Minimal, local SVG icons --- */
function IconChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
function IconShuffle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3h5v5" />
      <path d="M4 20 19 5" />
      <path d="M21 16v5h-5" />
      <path d="M15 15l6 6" />
      <path d="M3 4l6 6" />
    </svg>
  );
}
function IconCopy({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
function IconShare({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M12 16V3" />
      <path d="m7 8 5-5 5 5" />
    </svg>
  );
}
function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}
function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.5 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.2 9.2 0 0 1 12 6.8c.85 0 1.71.12 2.51.36 1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.21 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}
