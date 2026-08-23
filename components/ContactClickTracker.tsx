'use client';

import { useEffect } from 'react';
import { trackCallClick, trackWhatsAppClick, trackEmailClick } from '@/lib/gtag';

/**
 * One global listener for every "contact me" click on the site.
 *
 * Previously only `tel:` links were tracked. That left two real gaps:
 *
 *   - WhatsApp links in the footer and in ClosingCta (which sits at the bottom
 *     of ~20 service and location pages) had no onClick at all, so those
 *     clicks were invisible.
 *   - `mailto:` links were untracked everywhere.
 *
 * For an agency where a lot of enquiries arrive over WhatsApp, that meant a
 * page could be producing real business and look completely dead in analytics.
 *
 * Using one delegated listener rather than per-link handlers means every link
 * — including ones added later — is covered automatically, and each click
 * fires exactly once. Anything relying on a hand-wired onClick eventually
 * misses a link; this can't.
 *
 * These are GA4 engagement events, NOT Google Ads conversions. A WhatsApp or
 * phone click is intent, not a delivered lead. Counting intent as conversion
 * is precisely what made the previous campaign's numbers meaningless.
 *
 * Mounted once in the root layout.
 */
export function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !target.closest) return;

      const link = target.closest('a[href]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        trackCallClick(href.replace('tel:', '') || 'unknown');
        return;
      }

      if (href.startsWith('mailto:')) {
        trackEmailClick(href.replace('mailto:', '').split('?')[0] || 'unknown');
        return;
      }

      // wa.me and api.whatsapp.com/send both appear in the codebase.
      if (href.includes('wa.me/') || href.includes('whatsapp.com/')) {
        // Label by where on the page it was clicked, falling back to the link
        // text, so GA4 shows which surface is actually driving WhatsApp chats.
        const label =
          link.getAttribute('data-wa-label') ||
          (link.textContent || '').trim().slice(0, 60) ||
          'WhatsApp link';
        trackWhatsAppClick(label);
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

export default ContactClickTracker;
