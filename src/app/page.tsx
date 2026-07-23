import type { Metadata } from 'next';
import HomePage from '@/components/page/HomePage';
import { get } from '@/lib/http/client';
import type { ByCategoryMap } from '@/types/quotes';

export const dynamic = 'force-dynamic';

const TITLE = 'Katahari';
const DESCRIPTION = 'Baca kutipan inspiratif acak setiap refresh. Dukungan multi bahasa (ID/EN), tema, kategori, dan salin cepat.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4877'),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Katahari',
  keywords: ['quotes', 'kutipan', 'kata-kata', 'motivasi', 'random quotes', 'inspirational', 'kata bijak', 'ID', 'EN', 'Katahari'],
  authors: [{ name: 'Katahari' }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    siteName: 'Katahari',
    images: [{ url: '/globe.svg', width: 1200, height: 630, alt: 'Katahari' }],
    locale: 'id_ID',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/globe.svg'],
    creator: '@katahari'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'id-ID': '/'
    }
  },
  robots: { index: true, follow: true }
};

import localQuotes from '@/data/quotes/quotes.by.category.json';

export default async function Page() {
  let initialByCategory: ByCategoryMap = localQuotes as unknown as ByCategoryMap;
  if (process.env.R2_BUCKET && process.env.NODE_ENV === 'production') {
    try {
      const fetched = await get<ByCategoryMap>(`/api/cloudflare/r2?key=quotes.by.category.json`, { revalidate: 3600, tags: ['quote-by-category'] });
      if (fetched && typeof fetched === 'object' && Object.keys(fetched).length > 0) {
        initialByCategory = fetched;
      }
    } catch {
      // Fallback to bundled local JSON if Cloudflare R2 fetch fails
    }
  }
  return <HomePage initialByCategory={initialByCategory} />;
}

