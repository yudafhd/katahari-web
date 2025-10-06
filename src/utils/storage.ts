/**
 * Safe localStorage helpers with SSR guards and JSON handling.
 */

export const isBrowser = typeof window !== 'undefined';

export function getItem(key: string): string | null {
    try {
        if (!isBrowser) return null;
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
}

export function setItem(key: string, value: string): void {
    try {
        if (!isBrowser) return;
        window.localStorage.setItem(key, value);
    } catch { }
}

export function removeItem(key: string): void {
    try {
        if (!isBrowser) return;
        window.localStorage.removeItem(key);
    } catch { }
}

export function getJSON<T>(key: string, fallback: T): T {
    try {
        if (!isBrowser) return fallback;
        const raw = window.localStorage.getItem(key);
        if (!raw) return fallback;
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
}

export function setJSON<T>(key: string, value: T): void {
    try {
        if (!isBrowser) return;
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch { }
}

export function withLocalStorage<T>(fn: (ls: Storage) => T, fallback: T): T {
    try {
        if (!isBrowser) return fallback;
        return fn(window.localStorage);
    } catch {
        return fallback;
    }
}