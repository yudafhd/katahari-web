'use client';

import { isMobileView } from '@/utils/window';
import { useEffect, useRef, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { IconX } from '@/components/icons';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
    containerClassName?: string;
    overlayClassName?: string;
    /** Show a drag handle bar at the top (useful for sheet presentation) */
    showHandle?: boolean;
};

export default function Modal({
    open,
    onClose,
    title,
    children,
    closeOnBackdrop = true,
    closeOnEsc = true,
    containerClassName,
    overlayClassName,
    showHandle,
}: ModalProps) {

    const isSheetMobile = isMobileView()
    const overlayRef = useRef<HTMLDivElement | null>(null);
    // Disable page scroll when modal is open
    useEffect(() => {
        if (!open) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = prev;
        };
    }, [open]);

    // Close on Escape
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

    // Close when clicking the backdrop (not the dialog)
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!closeOnBackdrop) return;
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    if (typeof document === 'undefined' || !open) return null;

    const overlayCls =
        overlayClassName ??
        'modal fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-md transition-all duration-200';

    let containerCls: string;
    if (containerClassName) {
        containerCls = containerClassName;
    } else {
        containerCls = [
            'relative',
            'w-full max-w-xl',
            'max-h-[85vh]',
            'overflow-y-auto',
            'rounded-3xl',
            'border border-[color-mix(in_srgb,var(--foreground)_18%,transparent)]',
            'bg-[color-mix(in_srgb,var(--background)_92%,var(--foreground)_8%)]',
            'backdrop-blur-2xl',
            'text-[var(--foreground)]',
            'shadow-2xl',
            'p-6',
            'pb-[max(1.5rem,env(safe-area-inset-bottom))]',
            'animate-sheet-in',
        ].join(' ');
    }

    const handleVisible = showHandle ?? isSheetMobile;

    const node = (
        <div
            ref={overlayRef}
            className={overlayCls}
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
            aria-label={title ?? 'Modal'}
        >
            <div className={containerCls}>
                {/* Drag handle (only on mobile by default) */}
                {handleVisible ? (
                    <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-[color-mix(in_srgb,var(--foreground)_25%,transparent)] sm:hidden" />
                ) : null}

                {(title || onClose) ? (
                    <div className="mb-4 flex items-center justify-between pb-3 border-b border-[color-mix(in_srgb,var(--foreground)_15%,transparent)]">
                        {title ? <h2 className="text-lg font-bold tracking-tight opacity-95 text-[var(--foreground)]">{title}</h2> : <span />}
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="inline-flex items-center justify-center p-1.5 opacity-70 hover:opacity-100 text-[var(--foreground)] active:scale-90 transition"
                        >
                            <IconX className="size-4.5" />
                        </button>
                    </div>
                ) : null}

                {children}
            </div>
        </div>
    );

    return createPortal(node, document.body);
}