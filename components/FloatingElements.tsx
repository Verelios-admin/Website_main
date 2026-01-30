'use client';

import { Code, Smartphone, Palette, Zap, Database, Cloud } from 'lucide-react';

const icons = [Code, Smartphone, Palette, Zap, Database, Cloud];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-5"
          style={{
            left: `${(index * 15) + 5}%`,
            top: `${(index * 12) + 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${15 + index * 2}s`,
          }}
        >
          <Icon className="w-16 h-16 text-blue-600" />
        </div>
      ))}

      {icons.map((Icon, index) => (
        <div
          key={`second-${index}`}
          className="absolute animate-float opacity-5"
          style={{
            right: `${(index * 12) + 8}%`,
            bottom: `${(index * 15) + 5}%`,
            animationDelay: `${(index * 0.7) + 2}s`,
            animationDuration: `${18 + index * 1.5}s`,
          }}
        >
          <Icon className="w-20 h-20 text-cyan-600" />
        </div>
      ))}

      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-20" style={{ animationDuration: '5s', animationDelay: '2s' }} />
    </div>
  );
}
