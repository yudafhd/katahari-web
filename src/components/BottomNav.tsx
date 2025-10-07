'use client';

import { IconChevronLeft, IconShuffle, IconChevronRight, IconCopy, IconPalette, IconList } from "@/components/icons";

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
                    text-[var(--foreground)]"
                >
                    <nav className="flex justify-between px-2 py-2">
                        <button
                            aria-label="Previous"
                            onClick={onPrev}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            <IconChevronLeft className="size-5" />
                            <span className="text-[10px] opacity-75">Prev</span>
                        </button>

                        <button
                            aria-label="Shuffle"
                            onClick={onShuffle}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            <IconShuffle className="size-5" />
                            <span className="text-[10px] opacity-75">Shuffle</span>
                        </button>

                        <button
                            aria-label="Next"
                            onClick={onNext}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            <IconChevronRight className="size-5" />
                            <span className="text-[10px] opacity-75">Next</span>
                        </button>

                        {
                            onCopy && <button
                                aria-label="Copy"
                                onClick={onCopy}
                                className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                            >
                                <IconCopy className="size-5" />
                                <span className="text-[10px] opacity-75">Copy</span>
                            </button>
                        }


                        <button
                            aria-label="Themes"
                            onClick={onThemes}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            {/* Palette icon */}
                            <IconPalette className="size-5" />
                            <span className="text-[10px] opacity-75">Themes</span>
                        </button>

                        <button
                            aria-label="Sources"
                            onClick={onSources}
                            className="flex flex-col items-center gap-1 rounded-md py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            {/* List icon */}
                            <IconList className="size-5" />
                            <span className="text-[10px] opacity-75">Category</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}