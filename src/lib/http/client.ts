/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBaseUrl, joinUrl } from '@/utils/host';

export type Primitive = string | number | boolean | null | undefined;
export type Params = Record<string, Primitive>;
export type QueryValue = Primitive | Primitive[];
export type Query = Record<string, QueryValue>;

export type ApiOptions = Omit<RequestInit, 'body' | 'method'> & {
    /** Path params replacement for templates like "/api/users/:id" */
    params?: Params;
    /** Query string object to append to URL */
    query?: Query;
    /**
     * Revalidate behavior for Next.js fetch:
     * - number: ISR seconds (e.g. 60)
     * - false: no-store (always fresh)
     * - undefined: framework default
     */
    revalidate?: number | false;
    /** Next.js route segment tags for cache invalidation */
    tags?: string[];
};

export type ApiBody = any;

function isDefined(v: unknown): v is Exclude<unknown, undefined> {
    return typeof v !== 'undefined';
}

export function withParams(path: string, params?: Params): string {
    if (!params) return path;
    return path.replace(/:([A-Za-z0-9_]+)/g, (_m, key) => {
        const v = params[key];
        if (!isDefined(v) || v === null) return '';
        return encodeURIComponent(String(v));
    });
}

export function withQuery(input: string, query?: Query): string {
    if (!query) return input;
    const url = new URL(input, 'http://local'); // base needed for URL handling
    const append = (k: string, v: Primitive) => {
        if (!isDefined(v) || v === null) return;
        url.searchParams.append(k, String(v));
    };
    for (const [k, v] of Object.entries(query)) {
        if (Array.isArray(v)) {
            v.forEach(item => append(k, item));
        } else {
            append(k, v);
        }
    }
    // remove fake origin
    const qs = url.search.toString();
    const pathname = input.split('?')[0] ?? input;
    return qs ? `${pathname}${qs}` : pathname;
}

function buildUrl(path: string, opts?: Pick<ApiOptions, 'params' | 'query'>): string {
    const withP = withParams(path, opts?.params);
    const withQ = withQuery(withP, opts?.query);
    return withQ;
}

function nextCacheOptions(opts?: ApiOptions): RequestInit {
    if (!opts) return {};
    const { revalidate, tags } = opts;
    if (revalidate === false) {
        return { cache: 'no-store' };
    }
    if (typeof revalidate === 'number') {
        return { next: { revalidate, tags } as any };
    }
    if (tags && tags.length) {
        return { next: { tags } as any };
    }
    return {};
}

async function parseJSON<T>(res: Response): Promise<T> {
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
        return (await res.json()) as T;
    }
    // Fallback to text when JSON header missing
    const text = await res.text();
    try {
        return JSON.parse(text) as T;
    } catch {
        //  return text if not JSON
        return text as T;
    }
}

/**
 * Low-level request wrapper
 */
export async function request<T = unknown>(path: string, options?: ApiOptions & { body?: ApiBody; method?: string }): Promise<T> {
    const { params, query, revalidate, tags, headers, body, method, ...rest } = options || {};
    const built = buildUrl(path, { params, query });

    // Ensure absolute URL for server-side fetches; relative is fine on client
    const absolute = /^https?:\/\//i.test(built) ? built : joinUrl(getBaseUrl(), built);

    const cacheInit = nextCacheOptions({ revalidate, tags });

    const init: RequestInit = {
        ...cacheInit,
        ...rest,
        method: method ?? (body ? 'POST' : 'GET'),
        headers: {
            'accept': 'application/json',
            ...(body ? { 'content-type': 'application/json' } : {}),
            ...(headers || {}),
        },
        body: body != null ? JSON.stringify(body) : undefined,
    };

    const res = await fetch(absolute, init as any);
    if (!res.ok) {
        const errPayload = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${res.statusText} - ${absolute} :: ${errPayload}`);
    }
    return parseJSON<T>(res);
}

/**
 * GET JSON
 */
export function get<T = unknown>(path: string, options?: ApiOptions): Promise<T> {
    return request<T>(`${getBaseUrl()}${path}`, { ...options, method: 'GET' });
}

/**
 * POST JSON
 */
export function post<T = unknown>(path: string, body?: ApiBody, options?: ApiOptions): Promise<T> {
    return request<T>(path, { ...options, method: 'POST', body });
}

/**
 * PUT JSON
 */
export function put<T = unknown>(path: string, body?: ApiBody, options?: ApiOptions): Promise<T> {
    return request<T>(path, { ...options, method: 'PUT', body });
}

/**
 * DELETE (optionally with body)
 */
export function del<T = unknown>(path: string, body?: ApiBody, options?: ApiOptions): Promise<T> {
    return request<T>(path, { ...options, method: 'DELETE', body });
}

/**
 * Helpers to create revalidate options for Next.js fetch
 */
export const revalidate = (seconds: number): Pick<ApiOptions, 'revalidate'> => ({ revalidate: seconds });
export const noStore = (): Pick<ApiOptions, 'revalidate'> => ({ revalidate: false });

/**
 * Convenience builder to compose URL from parts
 */
export function url(path: string, params?: Params, query?: Query): string {
    return buildUrl(path, { params, query });
}