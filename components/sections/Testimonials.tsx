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
  },
  {
    name: 'Priya S.',
    role: 'Entrepreneur',
    company: 'Property Business',
    image: 'https://ui-avatars.com/api/?name=Priya+S&background=8b5cf6&color=fff&size=96&bold=true',
    text: 'We needed both a website and a mobile app and they built both at the same time. The quality was outstanding and our conversions jumped by 40% after launch. Very professional team.',
    rating: 5,
    project: 'Website + Mobile App',
  },
  {
    name: 'Amit Patel',
    role: 'Director',
    company: 'FastNews Media',
    image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=06b6d4&color=fff&size=96&bold=true',
    text: 'The news application they built handles thousands of daily readers without any performance issues. The real-time updates and push notifications work flawlessly. Best tech team we have worked with.',
    rating: 5,
    project: 'News Application',
  },
  {
    name: 'Neha Gupta',
    role: 'Founder',
    company: 'StyleCart E-commerce',
    image: 'https://ui-avatars.com/api/?name=Neha+Gupta&background=ec4899&color=fff&size=96&bold=true',
    text: 'I was skeptical about the 3-week timeline but they actually delivered my e-commerce store in 18 days. The free mockup within 48 hours convinced me to go ahead. My online sales have tripled since launch.',
    rating: 5,
    project: 'E-commerce Website',
  },
  {
    name: 'Vikram Singh',
    role: 'CTO',
    company: 'HealthFirst Clinics',
    image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=f59e0b&color=fff&size=96&bold=true',
    text: 'Verelios built our patient booking system and clinic management app. The milestone-based payment model made it risk-free for us. Their WhatsApp support is incredibly responsive — felt like having an in-house team.',
    rating: 5,
    project: 'Custom Software + App',
  },
  {
    name: 'Ananya Krishnan',
    role: 'Marketing Head',
    company: 'TravelBuddy Tours',
    image: 'https://ui-avatars.com/api/?name=Ananya+Krishnan&background=10b981&color=fff&size=96&bold=true',
    text: 'We approached Verelios for a complete website redesign. The new site loads in under 2 seconds and our bounce rate dropped by 60%. The free SEO setup they included helped us rank on the first page for our key terms.',
    rating: 5,
    project: 'Website Redesign',
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
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className={`mx-auto h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'w-20' : 'w-0'
          }`} />
          <p className="text-xl text-slate-400 leading-relaxed">
            Real results from real businesses. Here&apos;s what our clients have to say about working with Verelios Labs.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-blue-500/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Project badge */}
              <div className="mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-slate-400 text-xs">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stat */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
