'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsMobileMenuOpen(false);

    // CASE 1: Already on Home page → smooth scroll
    if (pathname === '/') {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // CASE 2: On Privacy / Terms / Cookie page → redirect to Home with hash
    router.push(`/${hash}`);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-slate-700'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('#home')}
            >
              <Image
                src="/logo.png"
                alt="Verelios Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white pt-2">
                Verelios Labs
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <Button
                onClick={() => handleNavClick('#contact')}
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-medium text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <Button
              size="lg"
              onClick={() => handleNavClick('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
