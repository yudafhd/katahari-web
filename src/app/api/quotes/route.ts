import { NextResponse } from 'next/server';
import quotes from '@/data/quotes.json';

export const dynamic = 'force-dynamic';

export function GET() {
    return NextResponse.json(quotes);
}