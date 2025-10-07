import { NextResponse } from 'next/server';
import byfile from '@/data/quotes.byfile.json';

export const dynamic = 'force-dynamic';

export function GET() {
    return NextResponse.json(byfile);
}