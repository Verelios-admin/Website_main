'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { trackMetaLead } from '@/components/MetaPixel';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 700 && !dismissed) setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div
      className="sticky-cta"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        background: 'var(--color-surface-black)',
        color: '#fff',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        animation: 'cta-slide 480ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
      }}
    >
      <div
        className="sticky-cta-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '12px 22px',
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <div
          className="sticky-cta-text"
          style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, flex: 1 }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--color-primary-on-dark)',
              flexShrink: 0,
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: 14,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}
          >
            <strong style={{ fontWeight: 600 }}>Free mockup in 48 hours</strong>{' '}
            <span style={{ color: 'rgba(255,255,255,0.55)' }} className="sticky-cta-tail">
              — no commitment needed.
            </span>
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <button
            onClick={() => {
              trackMetaLead();
              window.open(
                'https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20a%20free%20quote%20for%20my%20project.',
                '_blank'
              );
            }}
            className="btn-pill press"
            style={{ padding: '8px 14px', fontSize: 13, whiteSpace: 'nowrap' }}
          >
            Get quote →
          </button>
          <button
            onClick={() => {
              setDismissed(true);
              setVisible(false);
            }}
            aria-label="Dismiss banner"
            style={{
              background: 'transparent',
              border: 0,
              color: 'rgba(255,255,255,0.6)',
              padding: 6,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes cta-slide {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (max-width: 560px) {
          :global(.sticky-cta-inner) {
            padding: 10px 14px !important;
            gap: 8px !important;
          }
          :global(.sticky-cta-tail) { display: none; }
          :global(.sticky-cta-text) p { font-size: 13px !important; }
        }
        @media (max-width: 380px) {
          :global(.sticky-cta-text) p { font-size: 12px !important; }
        }
      `}</style>
    </div>
  );
}

export default StickyCTA;
