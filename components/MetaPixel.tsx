'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const FB_PIXEL_ID = '1644794450035619';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: (...args: any[]) => void;
  }
}

export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* The no-JS tracking pixel is emitted as raw HTML rather than JSX on
          purpose. As a JSX <img> it was the first image element in document
          order, so Next's image-preload heuristic emitted
          `<link rel="preload" as="image">` for it into <head> — a High-priority
          fetch for an invisible 1x1 tracking pixel, competing with real
          above-the-fold content for bandwidth on the critical path. Written as a
          string it never reaches that heuristic, and the pixel still works
          exactly as before for visitors without JavaScript. */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"/>`,
        }}
      />
    </>
  );
}

export function trackMetaLead() {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: 'Contact Form Submission',
      content_category: 'Lead Generation',
    });
  }
}
