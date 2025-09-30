import type { Metadata } from 'next';
import { Outfit, Crimson_Text } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ClientLayout from '../components/layout/ClientLayout';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Justo García Ferrández - Programador Junior en IA, Automatización y Redes',
    template: '%s | Justo García Ferrández',
  },
  description: 'Especializado en inteligencia artificial, automatización de procesos y administración de redes. Desarrollo soluciones eficientes usando Make, n8n y stacks modernos en Orihuela, Alicante.',
  keywords: [
    'Justo García Ferrández',
    'programador',
    'desarrollador web',
    'inteligencia artificial',
    'automatización',
    'Make',
    'n8n',
    'React',
    'Next.js',
    'TypeScript',
    'Orihuela',
    'Alicante',
    'España',
    'freelance',
    'portfolio',
  ],
  authors: [{ name: 'Justo García Ferrández', url: 'https://justogarciaferrandez.com' }],
  creator: 'Justo García Ferrández',
  publisher: 'Justo García Ferrández',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://justogarciaferrandez.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'Justo García Ferrández - Programador Junior en IA, Automatización y Redes',
    description: 'Especializado en inteligencia artificial, automatización de procesos y administración de redes. Desarrollo soluciones eficientes usando Make, n8n y stacks modernos.',
    siteName: 'Justo García Ferrández Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Justo García Ferrández - Programador Junior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justo García Ferrández - Programador Junior en IA, Automatización y Redes',
    description: 'Especializado en inteligencia artificial, automatización de procesos y administración de redes.',
    images: ['/images/og-image.jpg'],
    creator: '@justogarciadev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Justo García Ferrández',
  jobTitle: 'Programador Junior en IA, Automatización y Redes',
  description: 'Especializado en inteligencia artificial, automatización de procesos y administración de redes.',
  url: 'https://justogarciaferrandez.com',
  image: 'https://justogarciaferrandez.com/images/justo-garcia-ferrandez.jpg',
  email: 'justo.garcia.2004@gmail.com',
  telephone: '+34644619118',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orihuela',
    addressRegion: 'Alicante',
    addressCountry: 'ES',
  },
  sameAs: [
    'https://github.com/Jusdorado',
    'https://linkedin.com/in/justo-garcia-ferrandez',
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'Inteligencia Artificial',
    'Automatización',
    'Make',
    'n8n',
    'Administración de Sistemas',
    'Active Directory',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'IES Las Espeñetas',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Orihuela',
      addressRegion: 'Alicante',
      addressCountry: 'ES',
    },
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Grado Superior en Administración de Sistemas Informáticos en Red (ASIR)',
      credentialCategory: 'degree',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bootcamp en Inteligencia Artificial',
      credentialCategory: 'certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Convotis/Accenture',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${crimsonText.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-moka-50 text-moka-700 scrollbar-moka">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
