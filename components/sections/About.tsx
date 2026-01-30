'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, TrendingUp, Clock, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver exceptional quality in every project we undertake.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to ensure their vision comes to life.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our focus is on delivering measurable business outcomes.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We stay ahead with the latest technologies and best practices.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on schedule.',
  },
  {
    icon: Heart,
    title: 'Passionate Team',
    description: 'Our team is dedicated and passionate about what we do.',
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose Verelios?
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We are a dedicated team of developers, designers, and strategists committed to transforming your digital vision into reality. With years of experience and a passion for innovation, we deliver solutions that drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className={`border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 hover:animate-pulse-glow overflow-hidden">
                      <div className="absolute inset-0 animate-rotate opacity-30">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" />
                      </div>
                      <Icon className="w-6 h-6 text-white relative z-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className={`bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white transition-all duration-1000 border border-cyan-500/50 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/30 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-blue-100 text-lg">
                Let's collaborate to create digital solutions that exceed your expectations and drive your business growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-blue-100">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-1">Fast</div>
                <div className="text-sm text-blue-100">Turnaround Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-1">Agile</div>
                <div className="text-sm text-blue-100">Development Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
