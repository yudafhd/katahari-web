'use client';

import { isMobileView } from '@/utils/window';
import { useEffect, useRef, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

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
        // Bottom sheet on mobile (items-end), centered on sm+ (items-center)
        (!isSheetMobile
            ? 'modal fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm'
            : 'modal fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/10 backdrop-blur-sm');

    let containerCls: string;
    if (containerClassName) {
        containerCls = containerClassName;
    } else {
        const base = [
            'relative',
            'w-full md:max-w-[50vw]'.replace(':', ':'), /* keep class safety */
            'max-h-[60vh] md:max-h-[85vh]',
            'overflow-auto',
            'rounded-t-3xl sm:rounded-2xl',
            'border border-black/10 dark:border-white/10',
            'bg-white/10 bg-transparent',
            'text-white',
            'shadow-xl',
            'p-4 sm:p-4',
            'pb-[max(1rem,env(safe-area-inset-bottom))]',
            'animate-sheet-in',
        ];
        if (!isSheetMobile) {
            const idx = base.indexOf('rounded-t-3xl sm:rounded-2xl');
            if (idx >= 0) base[idx] = 'rounded-2xl';
        }
        containerCls = base.join(' ');
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
                    <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-black/10 dark:bg-white/20 sm:hidden" />
                ) : null}

                {(title || onClose) ? (
                    <div className="mb-2 flex items-center justify-between">
                        {title ? <h2 className="font-semibold opacity-90">{title}</h2> : <span />}
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="inline-flex items-center justify-center rounded-md h-8 w-8 hover:bg-black/5 dark:hover:bg-white/10 text-[var(--foreground)]"
                        >
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6 6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ) : null}

                {children}
            </div>
        </div>
    );

    return createPortal(node, document.body);
}