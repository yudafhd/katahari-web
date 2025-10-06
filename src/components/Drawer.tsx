'use client';

import { useEffect, useRef, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    side?: 'left' | 'right';
    widthClassName?: string; // Tailwind width classes
    overlayClassName?: string;
    containerClassName?: string;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
};

export default function Drawer({
    open,
    onClose,
    title,
    children,
    side = 'left',
    widthClassName = 'w-[65vw] max-w-sm',
    overlayClassName,
    containerClassName,
    closeOnBackdrop = true,
    closeOnEsc = true,
}: DrawerProps) {
    const overlayRef = useRef<HTMLDivElement | null>(null);

    // Disable background scroll
    useEffect(() => {
        if (!open) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = prev;
        };
    }, [open]);

    // ESC to close
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!open) return;
            if (closeOnEsc && e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        },
        [open, closeOnEsc, onClose]
    );

    useEffect(() => {
        if (!open) return;
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, onKeyDown]);

    // Backdrop click to close
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!closeOnBackdrop) return;
        if (e.target === overlayRef.current) onClose();
    };

    if (typeof document === 'undefined' || !open) return null;

    const justify = side === 'left' ? 'justify-start' : 'justify-end';
    const slideIn = side === 'left' ? 'animate-drawer-in-left' : 'animate-drawer-in-right';

    const overlayCls =
        overlayClassName ??
        `drawer fixed inset-0 z-50 flex ${justify} bg-black/10 backdrop-blur-sm`;

    const containerCls =
        containerClassName ??
        [
            'relative h-full',
            widthClassName,
            'border border-black/10 dark:border-white/10',
            'bg-white/10 bg-transparent',
            'shadow-xl',
            'p-4',
            slideIn,
        ].join(' ');

    return createPortal(
        <div
            ref={overlayRef}
            className={overlayCls}
            aria-modal="true"
            role="dialog"
            aria-label={title ?? 'Drawer'}
            onClick={handleBackdropClick}
        >
            <div className={containerCls}>
                <div className="mb-2 flex items-center justify-between">
                    {title ? <h2 className="text-base font-semibold opacity-90">{title}</h2> : <span />}
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="inline-flex items-center justify-center rounded-md h-8 w-8 hover:bg-black/5 dark:hover:bg-white/10 text-[var(--foreground)]"
                    >
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6 6 18" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>,
        document.body
    );
}

/* Keyframes (optional): Add these classes to your global CSS if you want smoother animation
@keyframes drawerInLeft {
  0% { transform: translateX(-100%); opacity: .98; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes drawerInRight {
  0% { transform: translateX(100%); opacity: .98; }
  100% { transform: translateX(0); opacity: 1; }
}
.animate-drawer-in-left { animation: drawerInLeft .22s ease-out both; }
.animate-drawer-in-right { animation: drawerInRight .22s ease-out both; }
*/