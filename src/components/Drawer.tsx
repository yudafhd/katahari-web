'use client';

import { useEffect, useRef, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { IconX } from '@/components/icons';

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
        `drawer fixed inset-0 z-50 flex ${justify} bg-black/40 backdrop-blur-md transition-all duration-200`;

    const containerCls =
        containerClassName ??
        [
            'relative h-full',
            widthClassName,
            'border-l border-[color-mix(in_srgb,var(--foreground)_18%,transparent)]',
            'bg-[color-mix(in_srgb,var(--background)_95%,var(--foreground)_5%)]',
            'backdrop-blur-2xl text-[var(--foreground)]',
            'shadow-2xl',
            'p-6',
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
                <div className="mb-4 flex items-center justify-between pb-3 border-b border-[color-mix(in_srgb,var(--foreground)_15%,transparent)]">
                    {title ? <h2 className="text-sm font-bold tracking-wider uppercase opacity-75 text-[var(--foreground)]">{title}</h2> : <span />}
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="inline-flex items-center justify-center p-1.5 opacity-70 hover:opacity-100 text-[var(--foreground)] active:scale-90 transition"
                    >
                        <IconX className="size-4.5" />
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