import { NextResponse } from 'next/server';
import quotes from '@/data/quotes/quotes.json';

export const dynamic = 'force-static';

export async function GET() {
    return NextResponse.json(quotes, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
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
