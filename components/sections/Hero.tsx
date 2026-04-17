'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Clock, Shield, Star, Zap } from 'lucide-react';
import { useEffect, useState, useRef, memo } from 'react';

const ROTATING_WORDS = ['Grow Your Business', 'Convert More Leads', 'Dominate Online', 'Scale Faster'];

/* ── Animated counter hook (runs once, no re-render storms) ── */
function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) return;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [end, duration, startCounting]);

  return count;
}

/* ── Mouse-tracking orbs — zero React re-renders ── */
function Orbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      // Lerp toward target for buttery smooth movement
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.04;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.04;

      const el = containerRef.current;
      if (el) {
        el.style.setProperty('--mx', `${currentRef.current.x}`);
        el.style.setProperty('--my', `${currentRef.current.y}`);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ '--mx': '0', '--my': '0' } as React.CSSProperties}>
      <div
        className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-15 animate-blob will-change-transform"
        style={{ transform: 'translate(calc(var(--mx) * 0.02px), calc(var(--my) * 0.02px))' }}
      />
      <div
        className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply blur-3xl opacity-15 animate-blob animation-delay-2000 will-change-transform"
        style={{ transform: 'translate(calc(var(--mx) * -0.015px), calc(var(--my) * 0.015px))' }}
      />
      <div
        className="absolute bottom-10 left-1/3 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-blob animation-delay-4000 will-change-transform"
        style={{ transform: 'translate(calc(var(--mx) * 0.01px), calc(var(--my) * -0.01px))' }}
      />
    </div>
  );
}

/* ── Typewriter — ref-driven loop, no nested setState ── */
const Typewriter = memo(function Typewriter() {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({ wordIndex: 0, charIndex: 0, isDeleting: false });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const s = stateRef.current;
      const word = ROTATING_WORDS[s.wordIndex];

      if (!s.isDeleting) {
        s.charIndex++;
        setDisplayText(word.slice(0, s.charIndex));

        if (s.charIndex === word.length) {
          // Pause on complete word, then start deleting
          s.isDeleting = true;
          timeoutRef.current = setTimeout(tick, 2500);
          return;
        }
        // Typing speed — varied for natural feel
        const speed = 100 + Math.random() * 40;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        s.charIndex--;
        setDisplayText(word.slice(0, s.charIndex));

        if (s.charIndex === 0) {
          // Move to next word after a pause
          s.isDeleting = false;
          s.wordIndex = (s.wordIndex + 1) % ROTATING_WORDS.length;
          timeoutRef.current = setTimeout(tick, 400);
          return;
        }
        timeoutRef.current = setTimeout(tick, 50);
      }
    };

    // Initial delay before typing starts
    timeoutRef.current = setTimeout(tick, 800);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <>
      <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent animate-headline-gradient">
        {displayText}
      </span>
      <span className="animate-blink-caret ml-0.5">&nbsp;</span>
    </>
  );
});

/* ── Main Hero ── */
export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [startCounting, setStartCounting] = useState(false);

  const projects = useCountUp(50, 2000, startCounting);
  const clients = useCountUp(50, 2000, startCounting);
  const satisfaction = useCountUp(100, 2500, startCounting);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setStartCounting(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black_40%,transparent_100%)] -z-10" />

      {/* Mouse-tracking orbs (zero re-renders) */}
      <Orbs />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-5 h-5 rounded-full bg-emerald-400/30 animate-pulse-ring" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span>Trusted by 50+ Businesses Across India</span>
            <div className="flex -space-x-1 ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Main headline with typewriter */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            We Build Websites & Apps
            <br />
            That <Typewriter />
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            From idea to launch in under <strong className="text-white">3 weeks</strong>. Custom websites, mobile apps & software — engineered to turn visitors into paying customers.
          </p>

          {/* Micro value props */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free mockup in 48hrs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No upfront payment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% satisfaction guarantee
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              className="relative text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] group overflow-hidden rounded-xl"
              onClick={() => scrollToSection('contact')}
            >
              <span className="relative z-10 flex items-center font-semibold">
                Get Your Free Mockup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12" style={{ animation: 'shine-sweep 3s ease-in-out infinite' }} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-7 border-2 border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400/70 text-white transition-all duration-300 group shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.3)] rounded-xl"
              onClick={() => {
                window.open(
                  'https://wa.me/918471094125?text=Hi%20Verelios%20Labs!%20I%27d%20like%20to%20discuss%20my%20project.',
                  '_blank'
                );
              }}
            >
              <svg className="mr-2 w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </Button>
          </div>

          {/* Urgency nudge */}
          <p className="text-xs text-slate-500 mb-14 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Limited slots — Currently accepting only 3 new projects this month
          </p>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: `${projects}+`, label: 'Projects Delivered', icon: Zap },
              { value: `${clients}+`, label: 'Happy Clients', icon: Star },
              { value: '<3 Weeks', label: 'Avg. Delivery', icon: Clock },
              { value: `${satisfaction}%`, label: 'Satisfaction Rate', icon: Shield },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all duration-500 hover:scale-105"
              >
                <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tech stack strip */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">Built with technologies trusted by millions</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-slate-500">
              {['React', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="text-sm font-medium hover:text-slate-300 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
