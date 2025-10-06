'use client';

type BottomNavProps = {
    onPrev: () => void;
    onShuffle: () => void;
    onNext: () => void;
    onCopy?: () => void;
    onThemes: () => void;
    onSources: () => void;
};

export default function BottomNav({
    onPrev,
    onShuffle,
    onNext,
    onCopy,
    onThemes,
    onSources,
}: BottomNavProps) {
    return (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 ">
            <div className="mx-auto max-w-4xl px-4 ">
                <div
                    className="
                    mb-[max(0px,calc(env(safe-area-inset-bottom)))] 
                    rounded-t-2xl border border-black/10 
                    dark:border-white/10 
                    bg-gray/10 backdrop-blur-sm
                    ring-1 ring-[var(--ring)] 
                    shadow-[0_-6px_20px_-10px_rgba(2,6,23,.20)] 
                    text-[var(--foreground)]">
                    <nav className="flex justify-between px-2 py-2">
                        <button
                            aria-label="Previous"
                            onClick={onPrev}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            <span className="text-[10px] opacity-75">Prev</span>
                        </button>

                        <button
                            aria-label="Shuffle"
                            onClick={onShuffle}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 3h5v5" />
                                <path d="M4 20 19 5" />
                                <path d="M21 16v5h-5" />
                                <path d="M15 15l6 6" />
                                <path d="M3 4l6 6" />
                            </svg>
                            <span className="text-[10px] opacity-75">Shuffle</span>
                        </button>

                        <button
                            aria-label="Next"
                            onClick={onNext}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m9 6 6 6-6 6" />
                            </svg>
                            <span className="text-[10px] opacity-75">Next</span>
                        </button>

                        {
                            onCopy && <button
                                aria-label="Copy"
                                onClick={onCopy}
                                className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                            >
                                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="9" y="9" width="13" height="13" rx="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                                <span className="text-[10px] opacity-75">Copy</span>
                            </button>
                        }


                        <button
                            aria-label="Themes"
                            onClick={onThemes}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            {/* Palette icon */}
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 22a10 10 0 1 1 10-10c0 2.21-1.79 4-4 4h-1a2 2 0 0 0-2 2v1a3 3 0 0 1-3 3z" />
                                <circle cx="7.5" cy="10.5" r="1" />
                                <circle cx="12" cy="7.5" r="1" />
                                <circle cx="16.5" cy="10.5" r="1" />
                            </svg>
                            <span className="text-[10px] opacity-75">Themes</span>
                        </button>

                        <button
                            aria-label="Sources"
                            onClick={onSources}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            {/* List icon */}
                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M8 6h13" />
                                <path d="M8 12h13" />
                                <path d="M8 18h13" />
                                <path d="M3 6h.01" />
                                <path d="M3 12h.01" />
                                <path d="M3 18h.01" />
                            </svg>
                            <span className="text-[10px] opacity-75">Category</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}