'use client';

import { useEffect, useRef } from 'react';

// Types only — `typeof import(...)` is erased at compile time and pulls NOTHING
// into the bundle. The actual GSAP code is loaded lazily inside run() (below)
// so it stays OUT of the above-the-fold critical chunk and off the main thread
// during first paint / hydration. This is the main mobile-TBT win.
type Gsap = (typeof import('gsap'))['default'];
type ScrollTriggerType = (typeof import('gsap/ScrollTrigger'))['ScrollTrigger'];

type SetupFn = (ctx: { gsap: Gsap; ScrollTrigger: ScrollTriggerType; scope: HTMLElement }) => void;

type WindowWithIdle = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/**
 * Scoped GSAP — runs `setup` once on mount (deferred until the browser is
 * idle so it doesn't block first paint or contend with hydration on slow
 * phones), cleans up all tweens + triggers on unmount.
 *
 * GSAP itself is dynamically imported, so it is never downloaded or parsed
 * until after the page is interactive — and never at all for users who prefer
 * reduced motion.
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>(setup: SetupFn) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return; // GSAP is never even fetched for these users

    let cancelled = false;
    let ctx: ReturnType<Gsap['context']> | null = null;
    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

    const run = () => {
      Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
        ([{ default: gsap }, { ScrollTrigger }]) => {
          if (cancelled || !ref.current) return;
          gsap.registerPlugin(ScrollTrigger);
          ctx = gsap.context(() => {
            setup({ gsap, ScrollTrigger, scope: el });
          }, el);
        },
      );
    };

    const w = window as WindowWithIdle;
    if (typeof w.requestIdleCallback === 'function') {
      idleHandle = w.requestIdleCallback(run, { timeout: 800 });
    } else {
      timeoutHandle = setTimeout(run, 120);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== null && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) clearTimeout(timeoutHandle);
      if (ctx) ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
