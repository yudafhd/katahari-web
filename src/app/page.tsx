import type { Metadata } from 'next';
import HomePage from '@/components/page/HomePage';
import { get } from '@/lib/http/client';
import type { Quote, ByFileMap } from '@/types/quotes';

export const dynamic = 'force-dynamic';

const TITLE = 'Katahari';
const DESCRIPTION = 'Baca kutipan inspiratif acak setiap refresh. Dukungan multi bahasa (ID/EN), tema, kategori, dan salin cepat.';

export const metadata: Metadata = {
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

export default async function Page() {
  const initialList = await get<Quote[]>(`/api/quotes`, { revalidate: 3000, tags: ['quote'] });
  const initialByfile = await get<ByFileMap>(`/api/quotes/byfile`, { revalidate: 3000, tags: ['quote-byfile'] });
  return <HomePage initialList={initialList} initialByfile={initialByfile} />;
}
