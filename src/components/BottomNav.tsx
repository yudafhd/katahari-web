'use client';

import { IconChevronLeft, IconShuffle, IconChevronRight, IconCopy, IconPalette, IconList, IconDownload } from "@/components/icons";

type BottomNavProps = {
    onPrev: () => void;
    onShuffle: () => void;
    onNext: () => void;
    onCopy?: () => void;
    onDownload?: () => void;
    onThemes: () => void;
    onSources: () => void;
};

export default function BottomNav({
    onPrev,
    onShuffle,
    onNext,
    onCopy,
    onDownload,
    onThemes,
    onSources,
}: BottomNavProps) {
    return (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40">
            <div className="mx-auto max-w-4xl px-4">
                <div
                    className="
                    mb-[max(0px,calc(env(safe-area-inset-bottom)))] 
                    border-t border-[color-mix(in_srgb,var(--foreground)_12%,transparent)] 
                    bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-xl
                    text-[var(--foreground)]"
                >
                    <nav className="flex justify-around items-center px-2 py-2.5">
                        <button
                            aria-label="Previous"
                            onClick={onPrev}
                            className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                        >
                            <IconChevronLeft className="size-5" />
                            <span className="text-[10px] font-medium opacity-75">Prev</span>
                        </button>

                        <button
                            aria-label="Shuffle"
                            onClick={onShuffle}
                            className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                        >
                            <IconShuffle className="size-5" />
                            <span className="text-[10px] font-medium opacity-75">Shuffle</span>
                        </button>

                        <button
                            aria-label="Next"
                            onClick={onNext}
                            className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                        >
                            <IconChevronRight className="size-5" />
                            <span className="text-[10px] font-medium opacity-75">Next</span>
                        </button>

                        {onCopy && (
                            <button
                                aria-label="Copy"
                                onClick={onCopy}
                                className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                            >
                                <IconCopy className="size-5" />
                                <span className="text-[10px] font-medium opacity-75">Copy</span>
                            </button>
                        )}

                        {onDownload && (
                            <button
                                aria-label="Download"
                                onClick={onDownload}
                                className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                            >
                                <IconDownload className="size-5" />
                                <span className="text-[10px] font-medium opacity-75">Save</span>
                            </button>
                        )}

                        <button
                            aria-label="Themes"
                            onClick={onThemes}
                            className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                        >
                            <IconPalette className="size-5" />
                            <span className="text-[10px] font-medium opacity-75">Themes</span>
                        </button>

                        <button
                            aria-label="Sources"
                            onClick={onSources}
                            className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 active:scale-90 transition px-2 py-1"
                        >
                            <IconList className="size-5" />
                            <span className="text-[10px] font-medium opacity-75">Category</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}