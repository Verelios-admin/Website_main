'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build a website or app?',
    answer:
      'Most projects go from kickoff to launch in under 3 weeks. Simple websites can be done in 7–10 days, while complex apps with custom backends may take 4–6 weeks. We share a clear timeline before we start.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We work on a milestone-based payment model — 30% to start, 30% at mid-delivery, and 40% at launch. This way, you only pay as you see progress. No hidden charges, no surprises.',
  },
  {
    question: 'Do you build mobile apps for both iOS and Android?',
    answer:
      'Yes! We build cross-platform apps using React Native and Flutter, which means your app works on both iOS and Android from a single codebase — saving you time and money.',
  },
  {
    question: 'What happens after my project launches?',
    answer:
      'Every project comes with 7 days of free post-launch support for bug fixes and tweaks. After that, we offer affordable monthly maintenance plans to keep your site secure and updated.',
  },
  {
    question: 'Can I see a mockup before committing?',
    answer:
      'Absolutely. We provide a free mockup or prototype within 48 hours of our first conversation. No payment or commitment required — we want you to see our quality before you decide.',
  },
  {
    question: 'Do you help with SEO and getting found on Google?',
    answer:
      'Every project includes free basic SEO setup — proper meta tags, sitemap, performance optimization, and structured data. For advanced SEO (content strategy, link building, ongoing optimization), we offer add-on packages.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use modern, battle-tested technologies: React, Next.js, React Native, Flutter, Node.js, MongoDB, PostgreSQL, Firebase, and AWS/Vercel for hosting. We choose the best stack for your specific needs.',
  },
  {
    question: 'How do we communicate during the project?',
    answer:
      'You get a dedicated project manager on WhatsApp for instant communication. We share daily/weekly progress updates and you can give feedback in real time — no waiting for scheduled meetings.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div
            className={`mx-auto h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'w-20' : 'w-0'
            }`}
          />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blue-500/50 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="text-white font-medium text-lg pr-4 group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
