'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register once on the client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type SetupFn = (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger; scope: HTMLElement }) => void;

type WindowWithIdle = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/**
 * Scoped GSAP — runs `setup` once on mount (deferred until the browser is
 * idle so it doesn't block first paint or contend with hydration on slow
 * phones), cleans up all tweens + triggers on unmount.
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>(setup: SetupFn) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let ctx: ReturnType<typeof gsap.context> | null = null;
    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

    const run = () => {
      ctx = gsap.context(() => {
        setup({ gsap, ScrollTrigger, scope: el });
      }, el);
    };

    const w = window as WindowWithIdle;
    if (typeof w.requestIdleCallback === 'function') {
      idleHandle = w.requestIdleCallback(run, { timeout: 800 });
    } else {
      timeoutHandle = setTimeout(run, 120);
    }

    return () => {
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

export { gsap, ScrollTrigger };
