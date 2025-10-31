import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send
} from 'lucide-react';
import { Logo } from '@workly/shared-ui';

const footerLinks = {
  product: [
    { name: 'İK Yönetimi', href: 'http://localhost:3003' },
    { name: 'Görev Yönetimi', href: 'http://localhost:3002' },
    { name: 'Duyuru Sistemi', href: 'http://localhost:3004' },
    { name: 'Dashboard', href: 'http://localhost:3005' },
  ],
  company: [
    { name: 'Hakkımızda', href: '#' },
    { name: 'Kariyer', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'İletişim', href: '#' },
  ],
  support: [
    { name: 'Yardım Merkezi', href: '#' },
    { name: 'Dökümanlar', href: '#' },
    { name: 'API', href: '#' },
    { name: 'Durum', href: '#' },
  ],
  legal: [
    { name: 'Gizlilik Politikası', href: '#' },
    { name: 'Kullanım Koşulları', href: '#' },
    { name: 'KVKK', href: '#' },
    { name: 'Çerez Politikası', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="mb-4">
                <Logo size="md" className="[&>*]:!text-white" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Modern işletmeler için tasarlanmış, kapsamlı yönetim platformu.
                İK, görev yönetimi ve daha fazlası tek çatı altında.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-sm">İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-sm">+90 (212) 555 0100</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-sm">info@workly.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-secondary-600 flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-4">Ürün</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Yasal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h3 className="text-white font-bold text-xl">Haber Bülteni</h3>
            <p className="text-gray-400">
              Yeni özellikler ve güncellemelerden ilk siz haberdar olun.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Abone Ol</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              &copy; {new Date().getFullYear()} Workly. Tüm hakları saklıdır.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Gizlilik
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Şartlar
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

