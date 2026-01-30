// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Verelios | Engineered · Optimized · Secured',
//   description:
//     'Verelios delivers high-performance app, web, and enterprise solutions — engineered for scalability, optimized for performance, and secured with modern technology.',
//   keywords: [
//     'Verelios',
//     'app development',
//     'web development',
//     'custom software',
//     'enterprise solutions',
//     'UI/UX design',
//     'React',
//     'Next.js',
//     'technology company',
//     'software engineering',
//   ],
//   authors: [{ name: 'Verelios' }],
//   creator: 'Verelios',
//   publisher: 'Verelios',
//   openGraph: {
//     title: 'Verelios | Engineered · Optimized · Secured',
//     description:
//       'High-quality software and digital solutions built by Verelios. Engineered for precision, optimized for performance, and secured by design.',
//     type: 'website',
//     locale: 'en_US',
//     siteName: 'Verelios',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Verelios | Engineered · Optimized · Secured',
//     description:
//       'High-quality software and digital solutions built by Verelios. Engineered for precision, optimized for performance, and secured by design.',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://verelios.com" />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Verelios | App & Web Development Services',
  description: 'Professional app and web development services. We create exceptional mobile apps, responsive websites, and custom software solutions that drive business growth. Expert team delivering quality digital experiences.',
  keywords: ['app development', 'web development', 'mobile apps', 'custom software', 'UI/UX design', 'React', 'Next.js', 'software company'],
  authors: [{ name: 'Verelios' }],
  creator: 'Verelios',
  publisher: 'Verelios',
  icons: {
    icon: '/logo.png',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Verelios | App & Web Development Services',
    description: 'Professional app and web development services that transform ideas into exceptional digital experiences.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Verelios',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verelios | App & Web Development Services',
    description: 'Professional app and web development services that transform ideas into exceptional digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://gratiumlabs.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
