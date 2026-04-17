'use client';

import { Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh M.',
    role: 'Business Owner',
    company: 'Real Estate',
    image: 'https://ui-avatars.com/api/?name=Rajesh+M&background=3b82f6&color=fff&size=96&bold=true',
    text: 'They delivered our website in just 2.5 weeks and we saw double the inquiries within the first month. Honestly did not expect this level of quality at this price point. Would recommend to anyone.',
    rating: 5,
    project: 'Business Website',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya S.',
    role: 'Entrepreneur',
    company: 'Property Business',
    image: 'https://ui-avatars.com/api/?name=Priya+S&background=8b5cf6&color=fff&size=96&bold=true',
    text: 'We needed both a website and a mobile app and they built both at the same time. The quality was outstanding and our conversions jumped by 40% after launch. Very professional team.',
    rating: 5,
    project: 'Website + Mobile App',
    accent: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Amit Patel',
    role: 'Director',
    company: 'FastNews Media',
    image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=06b6d4&color=fff&size=96&bold=true',
    text: 'The news application they built handles thousands of daily readers without any performance issues. The real-time updates and push notifications work flawlessly. Best tech team we have worked with.',
    rating: 5,
    project: 'News Application',
    accent: 'from-cyan-500 to-sky-500',
  },
  {
    name: 'Neha Gupta',
    role: 'Founder',
    company: 'StyleCart E-commerce',
    image: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=ec4899&color=fff&size=96&bold=true',
    text: 'I was skeptical about the 3-week timeline but they actually delivered my e-commerce store in 18 days. The free mockup within 48 hours convinced me to go ahead. My online sales have tripled since launch.',
    rating: 5,
    project: 'E-commerce Website',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Vikram Singh',
    role: 'CTO',
    company: 'HealthFirst Clinics',
    image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=f59e0b&color=fff&size=96&bold=true',
    text: 'Verelios built our patient booking system and clinic management app. The milestone-based payment model made it risk-free for us. Their WhatsApp support is incredibly responsive — felt like having an in-house team.',
    rating: 5,
    project: 'Custom Software + App',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Ananya Krishnan',
    role: 'Marketing Head',
    company: 'TravelBuddy Tours',
    image: 'https://ui-avatars.com/api/?name=Ananya+Krishnan&background=10b981&color=fff&size=96&bold=true',
    text: 'We approached Verelios for a complete website redesign. The new site loads in under 2 seconds and our bounce rate dropped by 60%. The free SEO setup they included helped us rank on the first page for our key terms.',
    rating: 5,
    project: 'Website Redesign',
    accent: 'from-emerald-500 to-teal-500',
  },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 overflow-hidden isolate"
    >
      {/* Animated dark gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 animate-bg-sweep" />

      {/* Drifting accent blobs — warm + cool glow */}
      <div className="pointer-events-none absolute top-10 -left-20 w-[26rem] h-[26rem] rounded-full bg-amber-500/15 blur-[90px] animate-drift-1 -z-10" />
      <div className="pointer-events-none absolute bottom-10 -right-20 w-[28rem] h-[28rem] rounded-full bg-blue-500/15 blur-[100px] animate-drift-2 -z-10" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-violet-500/10 blur-[80px] animate-drift-3 -z-10" />

      {/* Subtle grid pan */}
      <div className="absolute inset-0 bg-dot-grid animate-grid-pan [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_20%,transparent_100%)] opacity-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            Client Love
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Don&apos;t just take{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent animate-headline-gradient">
              our word for it
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Real results from real businesses. Here&apos;s what our clients have to say about working with Verelios Labs.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`magnetic-card group relative rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-7 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_8px_24px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] hover:border-blue-400/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              {/* Gradient accent bar */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${testimonial.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Quote mark (decorative) */}
              <Quote
                className={`absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-blue-400/20 transition-colors duration-500`}
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-slate-300 leading-relaxed mb-6 text-[0.94rem] relative">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Project badge */}
              <div className="mb-5">
                <span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.accent} bg-clip-text text-transparent border border-white/10`}
                >
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full ring-2 ring-white/20 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stat */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-300 text-sm">
              <strong className="text-white">5.0 / 5.0</strong> average rating from 50+ clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
