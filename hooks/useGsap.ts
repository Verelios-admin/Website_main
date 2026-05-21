'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register once on the client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type SetupFn = (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger; scope: HTMLElement }) => void;

/**
 * Scoped GSAP — runs `setup` once on mount, cleans up all tweens + triggers on unmount.
 * The `scope` is the element ref you pass in; any selectors inside `setup` should be
 * passed through `gsap.context` so they query inside that element only.
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

    const ctx = gsap.context(() => {
      setup({ gsap, ScrollTrigger, scope: el });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export { gsap, ScrollTrigger };
