/**
 * Window helpers (SSR-safe) including mobile browser view detection.
 */

export const isBrowser = typeof window !== 'undefined';

/**
 * Get current viewport width (0 on SSR).
 */
export function viewportWidth(): number {
    return isBrowser ? window.innerWidth : 0;
}

/**
 * Get current viewport height (0 on SSR).
 */
export function viewportHeight(): number {
    return isBrowser ? window.innerHeight : 0;
}

/**
 * Naive userAgent-based mobile detection.
 * Covers common mobile platforms; may not be exhaustive.
 */
export function isMobileUA(): boolean {
    if (!isBrowser || typeof navigator === 'undefined') return false;
    const nav = navigator as Navigator & { vendor?: string };
    const ua = `${nav.userAgent ?? ''} ${nav.vendor ?? ''}`;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

/**
 * Viewport-based mobile detection using a breakpoint (default 640px, Tailwind 'sm').
 * Returns true when viewport width is less than the provided breakpoint.
 */
export function isMobileViewport(breakpoint = 640): boolean {
    return viewportWidth() > 0 ? viewportWidth() < breakpoint : false;
}

/**
 * Combined mobile view detection:
 * true when either the user-agent looks mobile OR the viewport is below breakpoint.
 */
export function isMobileView(breakpoint = 640): boolean {
    return isMobileUA() || isMobileViewport(breakpoint);
}

/**
 * Subscribe to a window event in an SSR-safe way.
 * Returns an unsubscribe function.
 */
export function onWindowEvent<K extends keyof WindowEventMap>(
    type: K,
    handler: (this: Window, ev: WindowEventMap[K]) => unknown,
    options?: boolean | AddEventListenerOptions
): () => void {
    if (!isBrowser) {
        return () => void 0;
    }
    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
}