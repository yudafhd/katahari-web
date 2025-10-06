'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type NotificationProps = {
    open: boolean;
    message: string;
    onClose: () => void;
    duration?: number; // ms
    icon?: ReactNode;
    position?: 'bottom' | 'top';
};

export default function Notification({
    open,
    message,
    onClose,
    duration = 2000,
    icon,
    position = 'bottom',
}: NotificationProps) {
    const [mounted, setMounted] = useState(false);
    const timerRef = useRef<number | null>(null);

    // Auto-hide after duration
    useEffect(() => {
        if (!open) return;
        setMounted(true);
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setMounted(false);
            // give time for exit animation
            window.setTimeout(onClose, 200);
        }, duration);
        return () => {
            if (timerRef.current) window.clearTimeout(timerRef.current);
        };
    }, [open, duration, onClose]);

    if (typeof document === 'undefined' || !open) return null;

    const posCls =
        position === 'top'
            ? 'top-6'
            : 'bottom-[max(1.5rem,calc(1.5rem+env(safe-area-inset-bottom)))]';

    const node = (
        <div
            className="pointer-events-none fixed inset-0 z-[60] flex items-end justify-center sm:items-end"
            aria-live="polite"
            role="status"
        >
            <div
                className={[
                    'pointer-events-auto',
                    'flex items-center gap-2',
                    'rounded-lg border border-black/10 dark:border-white/10',
                    'bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white shadow-sm hover:from-violet-700 hover:to-fuchsia-600 transition',
                    'text-[var(--foreground)]',
                    'shadow-lg px-4 py-2',
                    'ring-1 ring-[var(--ring)]',
                    'transition-all duration-200 ease-out',
                    'transform',
                    posCls,
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
                    'fixed left-1/2 -translate-x-1/2',
                ].join(' ')}
            >
                {icon ?? (
                    <svg className="size-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                )}
                <span className="text-sm">{message}</span>
                <button
                    onClick={() => {
                        setMounted(false);
                        window.setTimeout(onClose, 150);
                    }}
                    className="ml-2 inline-flex items-center justify-center rounded-md h-7 w-7 hover:bg-black/5 dark:hover:bg-white/10"
                    aria-label="Close notification"
                >
                    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6 6 18" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );

    return createPortal(node, document.body);
}