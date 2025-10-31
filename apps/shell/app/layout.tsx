import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { SidebarProvider } from '@/contexts/SidebarContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Workly - Enterprise HR & Task Management',
  description: 'Modern microfrontend platform for enterprise HR and task management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <Header />
              
              {/* Page Content */}
              <main className="flex-1 overflow-hidden">
                {children}
              </main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}

