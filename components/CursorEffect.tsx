'use client';

import { useEffect, useRef, useState } from 'react';

export function CursorEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Skip on coarse pointers (touch devices) — no cursor visible there anyway
    const mql = window.matchMedia('(pointer: fine)');
    if (!mql.matches) return;
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    const tick = () => {
      // Lerp toward target for smooth trailing motion
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.2;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.2;

      const el = containerRef.current;
      if (el) {
        el.style.setProperty('--cx', `${currentRef.current.x}px`);
        el.style.setProperty('--cy', `${currentRef.current.y}px`);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 hidden md:block"
      style={{ '--cx': '-100px', '--cy': '-100px' } as React.CSSProperties}
    >
      {/* Outer ring */}
      <div
        className={`absolute w-8 h-8 border-2 border-white rounded-full mix-blend-difference transition-[width,height,opacity] duration-200 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: 'var(--cx)',
          top: 'var(--cy)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      {/* Soft glow */}
      <div
        className={`absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl transition-opacity duration-500 ${
          isClicking ? 'opacity-60' : 'opacity-25'
        }`}
        style={{
          left: 'var(--cx)',
          top: 'var(--cy)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

export default CursorEffect;
