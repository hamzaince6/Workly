import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workly - Modern İşletme Yönetim Platformu | İK, Görev ve Daha Fazlası',
  description:
    'İK yönetimi, görev takibi, duyuru sistemi ve performans ölçümlemesi için Türkiye\'nin en gelişmiş işletme yönetim platformu. 14 gün ücretsiz deneyin.',
  keywords: [
    'işletme yönetimi',
    'ik yazılımı',
    'insan kaynakları',
    'görev yönetimi',
    'proje yönetimi',
    'duyuru sistemi',
    'performans takibi',
    'saas',
    'işletme yazılımı',
    'kurumsal yazılım',
  ],
  authors: [{ name: 'Workly' }],
  creator: 'Workly',
  publisher: 'Workly',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://workly.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Workly - Modern İşletme Yönetim Platformu',
    description:
      'İK yönetimi, görev takibi, duyuru sistemi ve performans ölçümlemesi için tek platform. Ücretsiz deneyin.',
    url: 'https://workly.com',
    siteName: 'Workly',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Workly Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workly - Modern İşletme Yönetim Platformu',
    description:
      'İK yönetimi, görev takibi, duyuru sistemi ve performans ölçümlemesi için tek platform.',
    images: ['/twitter-image.png'],
    creator: '@workly',
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
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

