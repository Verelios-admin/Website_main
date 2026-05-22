'use client';

import { useEffect, useRef } from 'react';

/**
 * Thin gradient bar at the very top of the page that fills as the user
 * scrolls. Driven by rAF + transform scaleX so it stays cheap on the main
 * thread, no GSAP needed.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    let target = 0;
    let current = 0;

    const compute = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const tick = () => {
      current += (target - current) * 0.18;
      const el = ref.current;
      if (el) el.style.transform = `scaleX(${current})`;
      rafId = requestAnimationFrame(tick);
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 60,
        pointerEvents: 'none',
        background: 'rgba(255, 255, 255, 0.03)',
        overflow: 'hidden',
      }}
    >
      <div
        ref={ref}
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(90deg, #2997ff 0%, #7cc1ff 35%, #b794ff 75%, #25D366 100%)',
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

export default ScrollProgress;
