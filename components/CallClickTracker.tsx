'use client';

import { useEffect } from 'react';
import { trackCallClick } from '@/lib/gtag';

/**
 * Global phone-call tracker. Listens for clicks on ANY `tel:` link across the
 * whole site and fires a GA4 `call_click` event. This means every phone number
 * — in the top bar, footer, contact section, location pages, and any tel: link
 * added in future — is tracked automatically, with no need to wire each one by
 * hand. Mounted once in the root layout.
 */
export function CallClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target && target.closest ? (target.closest('a[href^="tel:"]') as HTMLAnchorElement | null) : null;
      if (!link) return;
      const number = (link.getAttribute('href') || '').replace('tel:', '') || 'unknown';
      trackCallClick(number);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

export default CallClickTracker;
