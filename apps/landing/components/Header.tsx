'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@workly/shared-ui';

const navigation = [
  { name: 'Anasayfa', href: '#' },
  { 
    name: 'Özellikler', 
    href: '#features',
  },
  { 
    name: 'Modüller', 
    href: '#modules',
  },
  { name: 'Referanslar', href: '#testimonials' },
  { name: 'İletişim', href: '#footer' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo size="md" showText={true} href="/" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={process.env.NEXT_PUBLIC_AUTH_URL || 'https://workly-auth.vercel.app'}
              className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Giriş Yap
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_AUTH_URL || 'https://workly-auth.vercel.app'}
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Ücretsiz Başla
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg -mx-4 px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                href={process.env.NEXT_PUBLIC_AUTH_URL || 'https://workly-auth.vercel.app'}
                className="block px-4 py-3 text-center text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Giriş Yap
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_AUTH_URL || 'https://workly-auth.vercel.app'}
                className="block px-4 py-3 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ücretsiz Başla
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

