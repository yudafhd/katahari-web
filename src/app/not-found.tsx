import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center text-center px-6 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="text-lg mt-3 text-[var(--muted-foreground)]">Halaman tidak ditemukan / Page not found</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_14%,transparent)] hover:bg-[color-mix(in_srgb,var(--foreground)_22%,transparent)] transition border border-[color-mix(in_srgb,var(--foreground)_16%,transparent)] font-semibold text-sm"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
