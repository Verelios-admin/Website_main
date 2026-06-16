'use client';

import { useEffect, useRef } from 'react';

// Types only — `typeof import(...)` is erased at compile time and pulls NOTHING
// into the bundle. The actual GSAP code is loaded lazily inside init() (below)
// so it stays OUT of the above-the-fold critical chunk and off the main thread
// during first paint / hydration. This is the main mobile-TBT/JS win.
type Gsap = (typeof import('gsap'))['default'];
type ScrollTriggerType = (typeof import('gsap/ScrollTrigger'))['ScrollTrigger'];

type SetupFn = (ctx: { gsap: Gsap; ScrollTrigger: ScrollTriggerType; scope: HTMLElement }) => void;

/**
 * Scoped GSAP. GSAP is dynamically imported (never in the first-paint bundle,
 * never fetched for prefers-reduced-motion), and a section's `setup` only runs
 * once that section scrolls near the viewport.
 *
 * The near-viewport gating is what keeps Cumulative Layout Shift low: entrance
 * `gsap.from(...)` tweens snap their targets to the start state the instant the
 * tween is created. With GSAP lazy-loaded, creating every section's tweens at
 * once *after* first paint would snap the whole page and spike CLS. By creating
 * each section's tweens only as it approaches the viewport, below-the-fold
 * sections never snap during the initial-load CLS window — and the setup work
 * is spread out instead of running all at once (also helps TBT).
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

    const init = () => {
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

    // Init when the section is ~150px from entering the viewport. The hero is
    // already in view at load, so its (transform/opacity-only) loops start
    // immediately; every other section waits until it's scrolled to.
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver === 'function') {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io?.disconnect();
            init();
          }
        },
        { rootMargin: '150px 0px' },
      );
      io.observe(el);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      if (io) io.disconnect();
      if (ctx) ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
