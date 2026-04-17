'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'Business Website',
    startingAt: '14,999',
    description: 'Perfect for startups, small businesses & personal brands',
    timeline: '7–14 days',
    features: [
      'Up to 5 pages (Home, About, Services, Contact, etc.)',
      'Mobile-responsive design',
      'SEO optimized & fast loading',
      'Contact form with WhatsApp integration',
      'Free domain & hosting setup assistance',
      '7-day post-launch support',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Mobile App',
    startingAt: '49,999',
    description: 'Cross-platform apps for iOS & Android from a single codebase',
    timeline: '3–5 weeks',
    features: [
      'iOS + Android from one codebase',
      'Custom UI/UX design',
      'Push notifications & real-time updates',
      'Backend API & database setup',
      'App Store & Play Store submission',
      '7-day post-launch support',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Custom Software',
    startingAt: '99,999',
    description: 'Tailored solutions — CRM, ERP, dashboards, automation & more',
    timeline: '4–8 weeks',
    features: [
      'Fully custom-built to your requirements',
      'Admin dashboard & analytics',
      'Third-party API integrations',
      'Role-based access & security',
      'Scalable cloud architecture',
      'Dedicated project manager',
    ],
    popular: false,
    cta: 'Get Started',
  },
];

export function Pricing() {
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <div className={`mx-auto h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'w-20' : 'w-0'
          }`} />
          <p className="text-xl text-slate-400 leading-relaxed">
            No hidden charges. Pay in milestones — 30% to start, 30% at mid-delivery, 40% at launch.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-600/20 to-slate-800/80 border-2 border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-blue-500/30'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-sm text-slate-400">Starting at</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">&#8377;{plan.startingAt}</span>
                </div>
              </div>

              {/* Timeline */}
              <p className="text-sm text-blue-400 mb-6">Delivery: {plan.timeline}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={scrollToContact}
                className={`w-full py-6 group transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-slate-400 text-sm">
            Every project includes <strong className="text-slate-200">free SEO setup</strong>, <strong className="text-slate-200">speed optimization</strong>, and <strong className="text-slate-200">7-day post-launch support</strong>.
            <br className="hidden sm:block" />
            Need something custom? <button onClick={scrollToContact} className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Let&apos;s talk</button>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
