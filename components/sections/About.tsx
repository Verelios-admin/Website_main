'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, TrendingUp, Clock, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: Clock,
    title: 'Under 3-Week Delivery',
    description: 'Most projects go from kickoff to launch in under 21 days. No endless timelines.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    description: 'A single point of contact on WhatsApp — get updates, share feedback, and resolve queries instantly.',
  },
  {
    icon: Target,
    title: 'Built to Convert',
    description: 'Every site and app we build is optimized for one thing: turning your visitors into paying customers.',
  },
  {
    icon: TrendingUp,
    title: 'Pay in Milestones',
    description: 'No full upfront payments. Pay 30% to start, 30% at mid-delivery, and 40% at launch.',
  },
  {
    icon: Heart,
    title: '7-Day Free Post-Launch Support',
    description: 'After launch, we stick around. Bug fixes, tweaks, and support — on us for the first week.',
  },
  {
    icon: Award,
    title: 'Free SEO & Speed Optimization',
    description: 'Every project includes basic SEO setup and performance tuning so you rank faster on Google.',
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
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Verelios Labs?
          </h2>
          <div className={`mx-auto h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'w-20' : 'w-0'
          }`} />
          <p className="text-xl text-slate-400 leading-relaxed">
            We don&apos;t just build websites — we build growth engines. Here&apos;s what makes working with us different from every other agency.
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
                Got an Idea? Let&apos;s Make It Real.
              </h3>
              <p className="text-blue-100 text-lg">
                Tell us what you need — we&apos;ll show you a free mockup within 48 hours. No commitment, no strings attached.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">48 hrs</div>
                <div className="text-xs sm:text-sm text-blue-100">Free Mockup Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-blue-100">WhatsApp Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">&lt;3 Weeks</div>
                <div className="text-xs sm:text-sm text-blue-100">Average Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">EMI</div>
                <div className="text-xs sm:text-sm text-blue-100">Milestone Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
