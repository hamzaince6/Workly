import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Workly - Enterprise Platform',
  description: 'Modern microfrontend platform for enterprise management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

