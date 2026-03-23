'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 600px)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20a%20free%20quote%20for%20my%20project.',
      '_blank'
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 slide-up">
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 border-t border-blue-500/30 shadow-lg shadow-blue-900/40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden sm:block w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <p className="text-white text-sm sm:text-base font-medium truncate">
              <span className="hidden sm:inline">Get a free mockup in 48 hours — </span>
              <span className="sm:hidden">Free mockup in 48hrs — </span>
              <span className="text-blue-200">no commitment needed</span>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-md"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleDismiss}
              className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
