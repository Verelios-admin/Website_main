'use client';

import { Code, Smartphone, Palette, Zap, Database, Cloud } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [Code, Smartphone, Palette, Zap, Database, Cloud];

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Skip entirely on small viewports (mobile) — saves ~8 animated elements
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Mount only after browser is idle — doesn't block FCP/LCP
    const onIdle =
      (window as any).requestIdleCallback ||
      ((cb: () => void) => setTimeout(cb, 1500));
    const handle = onIdle(() => setMounted(true));

    return () => {
      const cancel =
        (window as any).cancelIdleCallback ||
        ((id: number) => clearTimeout(id));
      cancel(handle);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-[0.04]"
          style={{
            left: `${(index * 15) + 5}%`,
            top: `${(index * 12) + 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${15 + index * 2}s`,
            willChange: 'transform',
          }}
        >
          <Icon className="w-16 h-16 text-blue-600" />
        </div>
      ))}

      {icons.slice(0, 3).map((Icon, index) => (
        <div
          key={`second-${index}`}
          className="absolute animate-float opacity-[0.04]"
          style={{
            right: `${(index * 12) + 8}%`,
            bottom: `${(index * 15) + 5}%`,
            animationDelay: `${(index * 0.7) + 2}s`,
            animationDuration: `${18 + index * 1.5}s`,
            willChange: 'transform',
          }}
        >
          <Icon className="w-20 h-20 text-cyan-600" />
        </div>
      ))}
    </div>
  );
}

export default FloatingElements;
