'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Globe, Code, Palette, Zap, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Native Development'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, fast, and scalable web applications using modern frameworks and best practices.',
    features: ['React & Next.js', 'Full-Stack Solutions', 'Progressive Web Apps', 'E-commerce'],
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your unique business requirements and workflows.',
    features: ['Enterprise Solutions', 'API Development', 'System Integration', 'Cloud Solutions'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that provide exceptional user experiences and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed and efficiency improvements to ensure your applications run at peak performance.',
    features: ['Speed Optimization', 'SEO Enhancement', 'Code Refactoring', 'Analytics Setup'],
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your applications secure, updated, and running smoothly.',
    features: ['24/7 Monitoring', 'Security Updates', 'Bug Fixes', 'Feature Updates'],
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
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`border-slate-700 hover:border-blue-400 bg-slate-800/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 group ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <CardHeader>
                  <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <div className="absolute inset-0 animate-shimmer" />
                    <Icon className="w-7 h-7 text-white relative z-10" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base text-slate-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
