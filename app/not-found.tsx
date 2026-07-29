import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

// Distinct title + noindex so the 404 doesn't inherit the homepage's title/
// robots. (The HTTP 404 status already prevents indexing; this is for
// cleanliness and crawler tools that read the meta rather than the status.)
export const metadata: Metadata = {
  // No "| Verelios Labs" suffix here — the root layout's title template
  // (`%s | Verelios Labs`) appends it. Including it manually rendered
  // "Page Not Found | Verelios Labs | Verelios Labs".
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

// Custom 404. Replacing Next's built-in not-found removes the default
// "404: This page could not be found" <title> that was rendering ALONGSIDE the
// root layout's title (the invalid duplicate-<title> the audit flagged). The
// page is statically exported to 404.html and served by Vercel with a real
// HTTP 404 status, which is what keeps it out of Google's index — so no
// soft-404. This version also gives lost visitors a way back instead of a
// dead end.

const HELPFUL_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our services', href: '/services' },
  { label: 'Website development', href: '/services/website-development' },
  { label: 'Mobile app development', href: '/services/mobile-app-development' },
  { label: 'AI automation', href: '/services/ai-automation' },
  { label: 'Read the blog', href: '/blog' },
];

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
        }}
      >
        <div style={{ maxWidth: 620, textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#2997ff',
              margin: '0 0 16px',
            }}
          >
            Error 404
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 5vw, 44px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
              color: '#fff',
            }}
          >
            This page could not be found.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.66)',
              margin: '0 0 32px',
            }}
          >
            The link may be broken or the page may have moved. Here are a few
            places that might help — or message us on WhatsApp and we&apos;ll
            point you the right way.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center',
            }}
          >
            {HELPFUL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
