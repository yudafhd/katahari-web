/* Env + Host utilities for building absolute URLs safely across server/client */

import type { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { headers as nextHeaders } from 'next/headers';

type HLike = Headers | ReadonlyHeaders;

function hasProtocol(url: string) {
    return /^https?:\/\//i.test(url);
}

function normalizeBase(url: string) {
    const trimmed = url.trim();
    if (!trimmed) return '';
    return hasProtocol(trimmed) ? trimmed.replace(/\/+$/, '') : `https://${trimmed.replace(/\/+$/, '')}`;
}

/**
 * Join a base URL and a path, ensuring exactly one slash between them
 */
export function joinUrl(base: string, path: string) {
    const b = base.replace(/\/+$/, '');
    const p = path.startsWith('/') ? path : `/${path}`;
    return `${b}${p}`;
}

/**
 * Build base URL from provided headers
 */
export function getBaseUrlServerFrom(h: HLike) {
    const proto = h.get('x-forwarded-proto') ?? 'http';
    const host = h.get('host') ?? 'localhost:3000';
    return normalizeBase(`${proto}://${host}`);
}

/**
 * Server-side base URL resolver:
 * - Prefer env NEXT_PUBLIC_SITE_URL if provided
 * - Else detect from request headers (x-forwarded-proto, host)
 * - Fallback to http://localhost:3000
 */
export function getBaseUrlServer(h?: HLike) {
    const env = process.env.NEXT_PUBLIC_SITE_API_URL;
    if (env && env.trim().length > 0) {
        return normalizeBase(env);
    }
    try {
        const hdrs = h ?? (nextHeaders as unknown as () => ReadonlyHeaders)();
        return getBaseUrlServerFrom(hdrs as ReadonlyHeaders);
    } catch {
        return 'http://localhost:3000';
    }
}

/**
 * Client-side base URL resolver:
 * - Prefer env NEXT_PUBLIC_SITE_URL if provided
 * - Else use window.location.origin
 */
export function getBaseUrlClient() {
    const env = process.env.NEXT_PUBLIC_SITE_URL;
    if (env && env.trim().length > 0) {
        return normalizeBase(env);
    }
    if (typeof window !== 'undefined' && window.location) {
        return window.location.origin.replace(/\/+$/, '');
    }
    // Ultimate fallback for non-DOM environments
    return 'http://localhost:3000';
}

/**
 * Universal resolver; selects server or client strategy based on environment
 */
export function getBaseUrl() {
    const isServer = typeof window === 'undefined';
    return isServer ? getBaseUrlServer() : getBaseUrlClient();
}