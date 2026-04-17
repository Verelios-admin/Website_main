'use client';

import { Smartphone, Globe, Code, Palette, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Native Development'],
    gradient: 'from-blue-500 to-blue-600',
    ring: 'ring-blue-500/20',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, fast, and scalable web applications using modern frameworks and best practices.',
    features: ['React & Next.js', 'Full-Stack Solutions', 'Progressive Web Apps', 'E-commerce'],
    gradient: 'from-cyan-500 to-sky-600',
    ring: 'ring-cyan-500/20',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your unique business requirements and workflows.',
    features: ['Enterprise Solutions', 'API Development', 'System Integration', 'Cloud Solutions'],
    gradient: 'from-violet-500 to-purple-600',
    ring: 'ring-violet-500/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that provide exceptional user experiences and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    gradient: 'from-pink-500 to-rose-600',
    ring: 'ring-pink-500/20',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed and efficiency improvements to ensure your applications run at peak performance.',
    features: ['Speed Optimization', 'SEO Enhancement', 'Code Refactoring', 'Analytics Setup'],
    gradient: 'from-amber-500 to-orange-600',
    ring: 'ring-amber-500/20',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your applications secure, updated, and running smoothly.',
    features: ['24/7 Monitoring', 'Security Updates', 'Bug Fixes', 'Feature Updates'],
    gradient: 'from-emerald-500 to-teal-600',
    ring: 'ring-emerald-500/20',
  },
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
              }, index * 90);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Magnetic pointer-follow for each card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    card.style.setProperty('--rx', `${-y}deg`);
    card.style.setProperty('--ry', `${x}deg`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 overflow-hidden isolate"
    >
      {/* Animated dark gradient mesh */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 animate-bg-sweep" />

      {/* Drifting accent blobs — glowing through the dark */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-500/20 blur-[90px] animate-drift-1 -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-cyan-500/20 blur-[100px] animate-drift-2 -z-10" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[24rem] h-[24rem] rounded-full bg-violet-500/15 blur-[90px] animate-drift-3 -z-10" />

      {/* Animated dot grid pan (dark version) */}
      <div className="absolute inset-0 bg-dot-grid animate-grid-pan [mask-image:radial-gradient(ellipse_70%_80%_at_50%_40%,black_30%,transparent_100%)] opacity-60 -z-10" />

      {/* Rising particles — desktop only, non-critical */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block -z-10" aria-hidden="true">
        {[
          { left: '8%',  size: 6, delay: 0,  dur: 22, hue: 'bg-blue-400/50' },
          { left: '22%', size: 4, delay: 4,  dur: 28, hue: 'bg-cyan-400/40' },
          { left: '38%', size: 5, delay: 9,  dur: 24, hue: 'bg-violet-400/40' },
          { left: '55%', size: 3, delay: 2,  dur: 30, hue: 'bg-blue-300/50' },
          { left: '68%', size: 6, delay: 12, dur: 26, hue: 'bg-cyan-300/40' },
          { left: '82%', size: 4, delay: 6,  dur: 34, hue: 'bg-blue-400/40' },
          { left: '92%', size: 3, delay: 15, dur: 28, hue: 'bg-violet-300/45' },
        ].map((p, i) => (
          <span
            key={i}
            className={`animate-particle absolute bottom-[-10%] rounded-full ${p.hue}`}
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: '0 0 12px currentColor',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Services That{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent animate-headline-gradient">
              Deliver Results
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your business — from idea to launch in under 3 weeks.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOn = visibleCards.includes(index);
            return (
              <div
                key={index}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={
                  {
                    '--rx': '0deg',
                    '--ry': '0deg',
                    transform:
                      'perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0)',
                  } as React.CSSProperties
                }
                className={`magnetic-card card-sheen group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-7 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_8px_24px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.35)] hover:border-blue-400/40 ${
                  isOn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Corner arrow (on hover) */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-4 h-4 text-white transition-colors" />
                </div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:icon-glow group-hover:scale-105 transition-transform duration-500`}
                >
                  <Icon className="w-7 h-7 text-white relative z-10" />
                  <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </div>

                {/* Title + description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-5" />

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-slate-300"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-2.5 flex-shrink-0 shadow-[0_0_8px_currentColor]`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover gradient ring accent */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl ring-2 ${service.ring} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            );
          })}
        </div>

        {/* Footer blurb */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-sm text-slate-400">
            Don&apos;t see what you need?{' '}
            <a
              href="#contact"
              className="font-semibold text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline"
            >
              Let&apos;s talk about your project →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
