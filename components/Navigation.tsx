'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { trackCtaClick } from '@/lib/gtag';

const links = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
          href="#top"
          onClick={(e) => { e.preventDefault(); go('top'); }}
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
          {links.map((l) => (
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
        </nav>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
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
          {links.map((l) => (
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
          <button onClick={() => { trackCtaClick('Mobile menu — Get a free mockup'); go('contact'); }} className="btn-pill press" style={{ marginTop: 12 }}>
            Get a free mockup
          </button>
        </div>
      )}

      <style jsx>{`
        :global(.topnav-cta-short) { display: none; }
        /* Reserve the button's width so it cannot resize after the webfont's
           metrics settle. Without this the CTA measured 311px then snapped to
           172px a few hundred ms after paint, which was a contributing source of
           a 0.217 CLS on the homepage at 768px width. */
        :global(.topnav-cta) {
          min-width: 190px;
          justify-content: center;
        }
        @media (max-width: 820px) {
          :global(.topnav-links)      { display: none !important; }
          :global(.topnav-burger)     { display: inline-flex !important; }
          :global(.topnav-cta-full)   { display: none !important; }
          :global(.topnav-cta-short)  { display: inline !important; }
          :global(.topnav-cta) {
            padding: 7px 13px !important;
            font-size: 13px !important;
            min-width: 158px !important;
          }
        }
        /* On phones the logo + inline CTA + burger collide. The burger menu
           and the persistent bottom "Get quote" bar already expose the CTA,
           so drop the redundant inline pill here and let the logo + burger
           sit at opposite ends with clean spacing. */
        @media (max-width: 480px) {
          :global(.topnav-cta) { display: none !important; }
        }
      `}</style>
    </>
  );
}
