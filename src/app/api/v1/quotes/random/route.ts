import { NextRequest, NextResponse } from 'next/server';
import quotes from '@/data/quotes/quotes.json';
import quotesByCategory from '@/data/quotes/quotes.by.category.json';
import type { Quote } from '@/types/quotes';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');

    let pool: Quote[] = quotes as Quote[];

    if (category && category in quotesByCategory) {
        pool = (quotesByCategory as Record<string, Quote[]>)[category] || pool;
    }

    if (!pool || pool.length === 0) {
        return NextResponse.json({ error: 'No quotes found' }, { status: 404 });
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedQuote = pool[randomIndex];

    return NextResponse.json(selectedQuote, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
    });
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
