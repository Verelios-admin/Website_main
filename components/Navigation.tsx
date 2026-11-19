'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { trackCtaClick } from '@/lib/gtag';
import { isUsPath, usMailto, US_HUB_PATH } from '@/lib/us';

const links = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

// US pages (/us/*, plus the two US cost guides) get their own menu. The India
// menu sends every click to homepage sections — ₹ pricing and the India enquiry
// form — which is the wrong place for a US buyer. These are real links into the
// /us hub's sections (ids live on the hub's H2s), and the CTA emails Sahil,
// which is the US contact order the owner set on 2026-11-10.
const usLinks = [
  { href: `${US_HUB_PATH}#what-we-automate`, label: 'Services' },
  { href: `${US_HUB_PATH}#proof`, label: 'Work' },
  { href: `${US_HUB_PATH}#how-it-works`, label: 'Process' },
  { href: `${US_HUB_PATH}#pricing`, label: 'Pricing' },
  { href: `${US_HUB_PATH}#faq`, label: 'FAQ' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isUS = isUsPath(pathname);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (hash: string) => {
    setOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${hash}`);
    }
  };

  return (
    <>
      <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
        <a
          href={isUS ? US_HUB_PATH : '#top'}
          onClick={isUS ? undefined : (e) => { e.preventDefault(); go('top'); }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            textDecoration: 'none', color: 'inherit',
          }}
        >
          <img
            src="/verelios-mark-sm.png"
            alt="Verelios Labs"
            width={30}
            height={30}
            style={{ width: 30, height: 30, objectFit: 'contain', display: 'block' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
              letterSpacing: '-0.015em',
            }}
          >
            Verelios{' '}
            <span style={{ color: scrolled ? 'var(--color-ink-muted-48)' : 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
              Labs
            </span>
          </span>
        </a>

        <nav
          className="topnav-links"
          style={{
            display: 'flex', gap: 26, marginLeft: 40,
            fontSize: 14, letterSpacing: '-0.01em',
          }}
        >
          {isUS && usLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: scrolled ? 'var(--color-ink-muted-80)' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: 14,
                transition: 'color 240ms ease',
              }}
            >
              {l.label}
            </a>
          ))}
          {!isUS && links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                color: scrolled ? 'var(--color-ink-muted-80)' : 'rgba(255,255,255,0.75)',
                background: 'transparent',
                border: 0,
                padding: 0,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 14,
                transition: 'color 240ms ease',
              }}
            >
              {l.label}
            </button>
          ))}
          {/* Real route, not a homepage anchor — /about carries the founder bio and
              the verifiable client list, so it needs a nav entry rather than being
              reachable only from the footer. */}
          <a
            href="/about"
            style={{
              color: scrolled ? 'var(--color-ink-muted-80)' : 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              fontSize: 14,
              transition: 'color 240ms ease',
            }}
          >
            About
          </a>
        </nav>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {isUS ? (
            <a
              href={usMailto('Free 48-hour proof')}
              onClick={() => trackCtaClick('Nav bar — Email us (US)')}
              className="btn-pill press topnav-cta"
              style={{
                padding: '8px 16px',
                fontSize: 14,
                whiteSpace: 'nowrap',
                gap: 6,
                textDecoration: 'none',
              }}
            >
              <span className="topnav-cta-full">Email us</span>
              <span className="topnav-cta-short">Email us</span>
              <svg
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.4"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
                style={{ display: 'inline-block' }}
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          ) : (
          <button
            onClick={() => { trackCtaClick('Nav bar — Get a free mockup'); go('contact'); }}
            className="btn-pill press topnav-cta"
            style={{
              padding: '8px 16px',
              fontSize: 14,
              whiteSpace: 'nowrap',
              gap: 6,
            }}
          >
            <span className="topnav-cta-full">Get a free mockup</span>
            <span className="topnav-cta-short">Free mockup</span>
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.4"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
              style={{ display: 'inline-block' }}
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
          )}
          <button
            className="topnav-burger press"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              // 44x44 minimum hit area. The icon stays 22px; the box around it is
              // padded out to meet the accessible touch-target floor. This is the
              // primary navigation control on phones and used to be only 30x30.
              minWidth: 44,
              minHeight: 44,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 11,
              color: 'inherit',
              display: 'none',
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 49,
            background: 'rgba(10,10,12,0.97)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 22,
            paddingTop: 64,
            color: '#fff',
          }}
        >
          {isUS && usLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28, fontWeight: 500,
                letterSpacing: '-0.02em',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          {!isUS && links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                background: 'transparent',
                border: 0,
                fontFamily: 'var(--font-display)',
                fontSize: 28, fontWeight: 500,
                letterSpacing: '-0.02em',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/about"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28, fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            About
          </a>
          {isUS ? (
            <a
              href={usMailto('Free 48-hour proof')}
              onClick={() => { trackCtaClick('Mobile menu — Email us (US)'); setOpen(false); }}
              className="btn-pill press"
              style={{ marginTop: 12, textDecoration: 'none' }}
            >
              Email us
            </a>
          ) : (
            <button onClick={() => { trackCtaClick('Mobile menu — Get a free mockup'); go('contact'); }} className="btn-pill press" style={{ marginTop: 12 }}>
              Get a free mockup
            </button>
          )}
        </div>
      )}

    </>
  );
}
