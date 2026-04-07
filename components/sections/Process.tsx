'use client';

import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Free Consultation',
    description: 'Tell us about your project on WhatsApp or a quick call. We understand your goals, audience, and timeline — no commitment needed.',
    duration: 'Day 1',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Free Mockup in 48 Hours',
    description: 'We design a visual mockup or prototype of your project within 48 hours. You review, give feedback, and approve before we write a single line of code.',
    duration: 'Day 2–3',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Development & Updates',
    description: 'Our team builds your project with regular WhatsApp updates. You see progress in real-time and can request changes at any milestone.',
    duration: 'Day 4–18',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description: 'We deploy your project live, handle all the technical setup, and provide 7 days of free post-launch support for any tweaks or bug fixes.',
    duration: 'Day 19–21',
    color: 'from-emerald-500 to-emerald-600',
  },
];

export function Process() {
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
    <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <div className={`mx-auto h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'w-20' : 'w-0'
          }`} />
          <p className="text-xl text-slate-400 leading-relaxed">
            From first message to live launch in 4 simple steps. No surprises, no delays.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative flex gap-6 sm:gap-8 pb-12 last:pb-0 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[27px] sm:left-[31px] top-16 bottom-0 w-px bg-gradient-to-b from-slate-600 to-transparent" />
                )}

                {/* Icon circle */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Step {step.step}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400">{step.duration}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
