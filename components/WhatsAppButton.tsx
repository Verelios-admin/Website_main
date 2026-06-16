'use client';

import { useEffect, useRef, useState } from 'react';
import { trackMetaLead } from '@/components/MetaPixel';

export function WhatsAppButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  // Tracks whether the pill has ever been shown, so we only load GSAP to
  // animate it OUT if it was previously animated IN — never on first mount.
  const shownRef = useRef(false);

  // Only show the floating WhatsApp pill after the user scrolls past the hero
  // (otherwise it overlaps the in-hero stats row on small phones).
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // On first mount the pill is hidden (inline opacity/visibility) and not yet
    // scrolled into view — so we do NOTHING and never load GSAP. GSAP is only
    // imported once the user scrolls past the hero (visible=true), or to animate
    // out again afterwards.
    if (!visible && !shownRef.current) return;

    let cancelled = false;
    let float: { kill: () => void } | null = null;

    import('gsap').then(({ default: gsap }) => {
      if (cancelled || !el) return;
      if (!visible) {
        gsap.to(el, { autoAlpha: 0, y: 20, duration: 0.3, ease: 'power2.in' });
        return;
      }
      shownRef.current = true;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: 'expo.out' }
      );
      float = gsap.to(el, { y: -4, duration: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    });

    return () => {
      cancelled = true;
      if (float) float.kill();
    };
  }, [visible]);

  return (
    <a
      ref={ref}
      href="https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27m%20interested%20in%20your%20web%2Fapp%20development%20services."
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackMetaLead();
      }}
      aria-label="Chat on WhatsApp"
      className="wa-float"
      style={{
        position: 'fixed',
        right: 20,
        bottom: 84,
        zIndex: 45,
        opacity: 0,
        visibility: 'hidden',
      }}
    >
      <span className="wa-float-bubble">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
        </svg>
        <span className="wa-float-label">Chat on WhatsApp</span>
      </span>
      <style jsx>{`
        :global(.wa-float) {
          text-decoration: none;
          display: inline-block;
          transition: visibility 0s linear 0s;
        }
        :global(.wa-float[style*="visibility: hidden"]) {
          transition: visibility 0s linear 0.3s;
        }
        :global(.wa-float .wa-float-bubble) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px 12px 14px;
          background: linear-gradient(135deg, #25D366 0%, #1eb358 55%, #128C7E 100%);
          color: #fff;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: -0.01em;
          box-shadow:
            0 1px 0 0 rgba(255, 255, 255, 0.22) inset,
            0 -1px 0 0 rgba(0, 0, 0, 0.18) inset,
            0 14px 38px -10px rgba(37, 211, 102, 0.55);
          position: relative;
          isolation: isolate;
        }
        :global(.wa-float .wa-float-bubble)::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          background: radial-gradient(60% 60% at 30% 30%, rgba(37, 211, 102, 0.35), transparent 70%);
          filter: blur(8px);
          z-index: -1;
          opacity: 0.7;
        }
        :global(.wa-float):hover .wa-float-bubble {
          filter: brightness(1.06);
          transform: translateY(-1px);
          transition: transform 220ms ease, filter 220ms ease;
        }
        @media (max-width: 640px) {
          :global(.wa-float) { right: 16px !important; bottom: 80px !important; }
          :global(.wa-float .wa-float-bubble) {
            padding: 12px !important;
            gap: 0 !important;
            width: 52px;
            height: 52px;
            justify-content: center;
          }
          :global(.wa-float .wa-float-label) { display: none !important; }
        }
      `}</style>
    </a>
  );
}

export default WhatsAppButton;
