'use client';

import { useEffect, useRef } from 'react';

/**
 * Slim contact bar above the main navigation — country flag + phone numbers
 * + email. Real-business agencies (Antino, Mindtree, every Indian dev house)
 * have one; design-portfolio templates don't. That's the point.
 *
 * On narrow phones the row wraps to two (or three) lines, so its height isn't
 * a fixed number. We measure the rendered height and publish it as the
 * `--tcb-h` CSS variable on <html>; the fixed nav reads that variable for its
 * `top` offset, so it always sits flush below this bar instead of overlapping
 * the logo.
 */
export function TopContactBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setVar = () =>
      document.documentElement.style.setProperty('--tcb-h', `${el.offsetHeight}px`);
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener('orientationchange', setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', setVar);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="top-contact-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 51,
        // FIXED height (not min-height) so the measured --tcb-h always equals
        // the CSS fallback — this is what kills the mobile layout shift. The
        // hairline is an inset shadow instead of a border so it adds 0 to
        // offsetHeight (border would make it 37px and reintroduce a 1px shift).
        height: 36,
        background: '#050507',
        boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.06)',
        color: 'rgba(255,255,255,0.78)',
        fontSize: 13,
        letterSpacing: '-0.005em',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          padding: '8px 28px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="tel:+918299522798"
          className="tcb-item"
          aria-label="+91 82995 22798 — call Verelios Labs (primary)"
        >
          <span aria-hidden="true" className="tcb-flag">🇮🇳</span>
          <span>+91 82995 22798</span>
        </a>
        {/* No second phone number here. +91 84710 94125 is the WhatsApp line —
            it reaches WhatsApp via wa.me links elsewhere on the site and must not
            be offered as a call, which would dial a number that may not answer. */}
        <span className="tcb-sep" aria-hidden="true">·</span>
        <a
          href="mailto:contact@verelios.com"
          className="tcb-item"
          aria-label="contact@verelios.com — email Verelios Labs"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <span>contact@verelios.com</span>
        </a>
        <span className="tcb-sep tcb-hidden-sm" aria-hidden="true">·</span>
        <span className="tcb-item tcb-hidden-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#34d399',
              boxShadow: '0 0 0 0 rgba(52,211,153,0.6)',
              animation: 'tcb-live 2s ease-in-out infinite',
            }}
          />
          <span>Online · replies in under an hour</span>
        </span>
      </div>

    </div>
  );
}

export default TopContactBar;
