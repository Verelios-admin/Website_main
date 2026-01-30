// 'use client';

// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ExternalLink } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// const projects = [
// // {
// //   title: ' ',
// //   category: 'Trading Application and Website',
// //   description:
// //     'Rivali Trade is a next-generation trading platform designed to bridge technology, speed, and simplicity. Unlike conventional trading apps, it focuses on an intuitive user experience with lightning-fast order execution, AI-assisted market insights, and real-time portfolio analytics. From retail investors to active traders, it empowers users with tools that feel as smooth as they are smart.',
// //   tags: [
// //     'Next.js',                   // SSR for ultra-fast load times
// //     'React',                     // Dynamic UI architecture
// //     'Tailwind CSS',              // Modern, responsive styling
// //     'TypeScript',                // Type-safe, scalable codebase
// //     'WebSockets',                // Real-time market feeds and order updates
// //     'AI Insights Engine',        // Smart trade recommendations & analysis
// //     'Recharts',                  // Live trading and performance charts
// //     'Advanced Order Types',      // Stop-loss, OCO, and trailing orders
// //     'Portfolio Analytics',       // Real-time gain/loss and risk tracking
// //     'JWT Authentication',        // Secure, encrypted access control
// //     'Redux Toolkit',             // Efficient state management
// //     'Dark/Light Mode',           // Dual theme for better UX
// //     'PWA Support',               // Installable as a mobile trading app
// //     'Performance Optimization',  // Lazy loading and prefetch strategies
// //     'Accessibility Ready',       // WCAG-compliant trading interface
// //   ],
// //   link: 'https://www.rivali-trade.com/',
// //   gradient: 'from-blue-600 via-indigo-600 to-purple-600',
// //   image: '/images/trading-app.png', // 👈 updated image path
// // },
// {
//   title: 'Trading Platform',
//   category: 'Trading Application and Website',
//   description:
//     'A next-generation trading solution built for a leading financial client. The platform focuses on lightning-fast order execution, AI-powered insights, and a sleek, data-driven interface. Designed to give traders real-time control, smart analytics, and a smooth cross-device experience — redefining how digital trading feels and performs.',
//   tags: [
//     'Next.js',                   // SSR for ultra-fast performance
//     'React',                     // Component-based modern UI
//     'Tailwind CSS',              // Custom responsive styling
//     'TypeScript',                // Strongly typed scalable code
//     'WebSockets',                // Real-time live market data
//     'AI Insights Engine',        // Predictive trading assistance
//     'Recharts',                  // Interactive analytical charts
//     'Advanced Order Types',      // Stop-loss, OCO, trailing orders
//     'Portfolio Analytics',       // Live performance & risk tracking
//     'JWT Authentication',        // Secure, encrypted access
//     'Redux Toolkit',             // Efficient state management
//     'Dark/Light Mode',           // Dual theme for user preference
//     'PWA Support',               // Mobile installable experience
//     'Performance Optimization',  // Lazy loading, caching, API tuning
//     'Accessibility Ready',       // WCAG compliant UI
//   ],
//   link: '#', // confidential project, no public link
//   gradient: 'from-blue-600 via-indigo-600 to-purple-600',
//   image: '/images/trading.png', // 👈 project image
// },
// {
//   title: 'News Application',
//   category: 'News & Media Platform',
//   description:
//     'A modern, high-performance news and media platform built for a leading publication client. Designed to deliver real-time updates, personalized feeds, and a seamless reading experience, the application blends speed, interactivity, and elegant UI to keep users engaged and informed across all devices.',
//   tags: [
//     'Next.js',                   // Fast, SEO-friendly framework
//     'React',                     // Interactive component-based UI
//     'Tailwind CSS',              // Clean and responsive styling
//     'TypeScript',                // Scalable and type-safe development
//     'Firebase',                  // Real-time database and notifications
//     'REST API Integration',      // Fetching live news and content
//     'Dynamic Categories',        // Auto-updating sections for news topics
//     'Search & Filters',          // Smart and fast content discovery
//     'Infinite Scroll',           // Smooth content loading experience
//     'User Authentication',       // Personalized experience with login
//     'Bookmark & Reading List',   // Save and manage favorite articles
//     'Dark/Light Mode',           // Reader-friendly dual theme
//     'Push Notifications',        // Instant news alerts
//     'PWA Support',               // Installable on mobile devices
//     'Performance Optimization',  // Fast loading and caching strategies
//   ],
//   link: '#', // confidential project, no public link
//   gradient: 'from-yellow-500 via-orange-500 to-red-500',
//   image: '/images/news-app.png', // 👈 project image
// },


//   {
//     title: 'Rivali Park',
//     category: 'Real Estate Website',
//     description: 'Modern real estate platform showcasing premium properties with interactive features and virtual tours.',
//     tags: ['Next.js', 'React', 'Tailwind', 'Responsive'],
//     link: 'https://www.rivalipark2.com/',
//     gradient: 'from-orange-500 via-red-500 to-pink-500',
//     image: '/images/rivali.png', // 👈 add image path
//   },
//   {
//     title: 'Serene Homes',
//     category: 'Real Estate Platform',
//     description: 'Comprehensive real estate website and mobile application for property discovery and management.',
//     tags: ['React', 'React Native', 'Full-Stack', 'iOS/Android'],
//     link: 'https://www.serenehomes.co.in/',
//     gradient: 'from-green-500 via-emerald-500 to-teal-500',
//     image: '/images/serene.png',
//   },
//   {
//     title: 'MapOut',
//     category: 'Corporate Website',
//     description: 'Elegant corporate branding and web presence with modern design principles and advanced features.',
//     tags: ['React', 'Next.js', 'Animation', 'SEO'],
//     link: 'https://www.mapout.com/',
//     gradient: 'from-blue-500 via-purple-500 to-pink-500',
//     image: '/images/mapout.png',
//   },
// ];


// export function Portfolio() {
//   const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             projects.forEach((_, index) => {
//               setTimeout(() => {
//                 setVisibleProjects((prev) => [...prev, index]);
//               }, index * 150);
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="portfolio" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Our Portfolio
//           </h2>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//             Explore our recent projects that showcase our expertise and commitment to excellence
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`transition-all duration-500 ${
//                 visibleProjects.includes(index)
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-10'
//               }`}
//               onMouseEnter={() => setHoveredProject(index)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <Card className="group relative h-full overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />

//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-white/20 to-transparent blur-3xl animate-shimmer" />
//                 </div>

//                 <CardContent className="p-6 relative z-10 h-full flex flex-col">
//                   <div className="relative mb-6 h-32 rounded-lg overflow-hidden">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-300"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 backdrop-blur-sm opacity-50 group-hover:opacity-0 transition-opacity duration-300" />

//                     <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-blue-400 to-transparent" />
//                       <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-cyan-400 to-transparent" />
//                     </div>
//                   </div>

//                   <Badge className="mb-3 w-fit bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-blue-500/50">
//                     {project.category}
//                   </Badge>

//                   <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                     {project.title}
//                   </h3>

//                   <p className="text-slate-400 mb-4 line-clamp-3 flex-grow">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50 group-hover:border-blue-500/50 transition-colors"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group/btn"
//                   >
//                     <span>View Live</span>
//                     <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                   </a>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="group relative rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-500 h-96 hover:shadow-2xl hover:shadow-blue-500/20">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-800 to-slate-900 opacity-90" />
//             <div className="absolute inset-0 animate-shimmer" />
//             <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//               <div className="text-5xl mb-4 animate-float">🎨</div>
//               <h4 className="text-2xl font-bold text-white mb-3">Beautiful Designs</h4>
//               <p className="text-slate-300">Pixel-perfect, responsive designs that captivate and convert</p>
//             </div>
//           </div>

//           <div className="group relative rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-500 h-96 hover:shadow-2xl hover:shadow-cyan-500/20">
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-slate-800 to-slate-900 opacity-90" />
//             <div className="absolute inset-0 animate-shimmer" />
//             <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//               <div className="text-5xl mb-4 animate-float animation-delay-2000">⚡</div>
//               <h4 className="text-2xl font-bold text-white mb-3">High Performance</h4>
//               <p className="text-slate-300">Lightning-fast loading times and smooth user interactions</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [

  {
    title: 'News Application',
    category: 'News & Media Platform',
    description:
      'A modern, high-performance news and media platform built for a leading publication client. Designed to deliver real-time updates, personalized feeds, and a seamless reading experience, the application blends speed, interactivity, and elegant UI to keep users engaged and informed across all devices.',
    tags: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Firebase',
      'REST API Integration',
      'Dynamic Categories',
      'Search & Filters',
      'Infinite Scroll',
      'User Authentication',
      'Bookmark & Reading List',
      'Dark/Light Mode',
      'Push Notifications',
      'PWA Support',
      'Performance Optimization',
    ],
    link: '#',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    image: '/images/news.png',
  },
{
  title: 'Rivali Park',
  category: 'Real Estate Website',
  description:
    'A premium real estate platform designed for seamless property discovery. It features advanced search, virtual tours, and a responsive interface for a smooth user journey across devices.',
  tags: [
    'Next.js',                     // SSR & fast navigation
    'React',                       // Dynamic component architecture
    'Tailwind CSS',                // Modern responsive styling
    'TypeScript',                  // Type-safe scalable code
    'Framer Motion',               // Smooth animations & transitions
    'Google Maps API',             // Interactive property mapping
    'Image Optimization',          // Lazy loading & webp conversion
    'SEO Optimization',            // Boosted visibility & ranking
    'Responsive Design',           // Mobile-first experience
    'Contact Integration',         // Lead capture forms & WhatsApp link
  ],
  link: 'https://www.rivalipark2.com/',
  gradient: 'from-orange-500 via-red-500 to-pink-500',
  image: '/images/rivali.png',
},


  {
  title: 'Serene Homes',
  category: 'Real Estate Platform',
  description:
    'An end-to-end real estate ecosystem featuring both web and mobile apps for property discovery, management, and client engagement. Designed to deliver a seamless cross-platform experience with smart search, interactive listings, and secure communication tools.',
  tags: [
    'React',                       // Interactive and scalable web interface
    'React Native',                // Unified mobile app for iOS & Android
    'Next.js',                     // SEO-friendly rendering and routing
    'Node.js',                     // Robust backend for API management
    'MongoDB',                     // Efficient data storage for listings
    'Tailwind CSS',                // Clean, modern responsive styling
    'Google Maps API',             // Property location and directions
    'Firebase Auth',               // Secure user login and verification
    'Push Notifications',          // Real-time property updates
    'Dynamic Search Filters',      // Smart property discovery
    'Contact Integration',         // Lead capture and inquiry forms
    'PWA Support',                 // App-like mobile experience
    'Performance Optimization',    // Fast load and smooth transitions
  ],
  link: 'https://www.serenehomes.co.in/',
  gradient: 'from-green-500 via-emerald-500 to-teal-500',
  image: '/images/serene.png',
},

{
  title: 'Vilvah Store',
  category: 'E-commerce Website',
  description:
    'A full-scale, conversion-optimized e-commerce platform developed for a fast-growing natural skincare brand. The website supports secure payments, smooth checkout, order tracking, and hassle-free returns, delivering a reliable shopping experience across all devices.',
  tags: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'E-commerce Platform',
    'Secure Payment Gateway',
    'Cart & Checkout',
    'Order & Delivery Tracking',
    'Returns & Refund Management',
    'SEO & Performance Optimization',
  ],
  link: 'https://www.vilvahstore.com/',
  gradient: 'from-pink-500 via-rose-500 to-red-500',
  image: '/images/vilvah.png',
},
{
  title: 'RMPD Jewellers',
  category: 'Handcrafted Jewellery Collection',
  description:
    'Explore the exquisite collection of handcrafted jewellery by RMPD Jewellers. Featuring timeless designs and premium craftsmanship, the online catalogue showcases a range of gold pieces created to celebrate life’s precious moments.',
  tags: [
    'Gold Jewellery',
    'Premium Craftsmanship',
    'Timeless Design',
    'Online Catalogue',
    'Fine Accessories',
  ],
  link: 'https://www.rmpdjewellers.com/',
  gradient: 'from-pink-500 via-rose-400 to-red-400',
  image: '/images/rmpd2.png',
},
{
  title: 'ChainShots',
  category: 'Trading Education & Market Analysis Platform',
  description:
    'ChainShots is a trading-focused platform offering professional market insights, analysis, and educational content for traders. With a powerful website and fully functional iOS and Android apps, ChainShots helps users stay updated with market trends, trading strategies, and actionable insights in real time.',
  tags: [
    'Trading',
    'Market Analysis',
    'Trading Education',
    'iOS Trading App',
    'Android Trading App',
  ],
  link: 'https://chainshots.com/',
  gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  image: '/images/chainshots.png',
},
{
  title: 'Envirofluent ERP Software',
  category: 'ERP Website & Internal Management Software',
  description:
    'Envirofluent uses a custom-built ERP website and internal management software to streamline operations, project tracking, and organizational workflows. The ERP system is designed to manage internal processes such as project monitoring, data management, reporting, and operational coordination, enabling efficient and centralized business management.',
  tags: [
    'ERP Software',
    'Internal Management System',
    'ERP Website',
    'Process Automation',
    'Business Operations',
  ],
  link: 'https://www.envirofluent.com/',
  gradient: 'from-blue-600 via-cyan-500 to-teal-400',
  image: '/images/EPPL.png',
},
{
  title: 'Screener',
  category: 'Excel Automation & Financial Data Analytics Dashboard',
  description:
    'Screener is a powerful web-based platform that automates financial data collection and analysis. It scrapes large volumes of market data, processes and alters it according to user-defined requirements, and presents actionable insights through interactive dashboards and structured Excel-style reports. The platform helps users analyze companies, track financial metrics, and make data-driven investment decisions efficiently.',
  tags: [
    'Excel Automation',
    'Financial Data Scraping',
    'Analytics Dashboard',
    'Stock Market Analysis',
    'Data Processing',
  ],
  link: 'https://www.screener.in/',
  gradient: 'from-slate-700 via-gray-700 to-zinc-600',
  image: '/images/screener.png',
},
{
  title: 'PuneAIJobs',
  category: 'Job Portal Platform with Intelligent Filters',
  description:
    'PuneAIJobs is an AI-enhanced job portal focused on simplifying the job search process with smart automation and data-driven discovery. It aggregates job listings, applies intelligent scraping and filtering based on user preferences, and presents results in an intuitive UI to help job seekers find relevant opportunities quickly and efficiently.',
  tags: [
    'Job Listings',
    'AI Automation',
    'Smart Filters',
    'Data Aggregation',
    'Career Platform',
  ],
  link: 'https://www.puneaijobs.com/',
  gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  image: '/images/puneaijobs.png',
},
{
  title: 'MyBiniyog',
  category: 'Stock Trading App & Website',
  description:
    'MyBiniyog is a full-stack stock trading platform available as both a responsive website and mobile apps. It enables users to track the market, analyze stocks, and execute trades with real-time data and intuitive UI. Built with automation and user-centric design, it simplifies investment decisions and enhances the trading experience across devices.',
  tags: [
    'Stock Trading',
    'Real-Time Market Data',
    'iOS & Android Apps',
    'Responsive Website',
    'Investment Tools',
  ],
  link: 'https://www.mybiniyog.com/',
  gradient: 'from-green-500 via-lime-400 to-yellow-400',
  image: '/images/mybiniyog.png',
}






];

export function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our recent projects that showcase our expertise and
            commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <Card className="group relative h-full overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="relative mb-6 h-32 rounded-lg overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 backdrop-blur-sm opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
                  </div>

                  <Badge className="mb-3 w-fit bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-blue-500/50">
                    {project.category}
                  </Badge>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50 group-hover:border-blue-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.title === 'Trading Platform' ||
                  project.title === 'News Application' ? (
                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group/btn"
                    >

                      Coming Soon
                      <Rocket className="w-5 h-5 pt-1 text-white " />

                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
