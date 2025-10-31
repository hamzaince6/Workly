import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <footer class="bg-gray-900 text-gray-300">
      <!-- Main Footer -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <!-- Brand Column -->
          <div class="lg:col-span-2 space-y-6">
            <div>
              <div class="mb-4">
                <app-logo 
                  [size]="'md'" 
                  [showText]="true"
                  [className]="'[&_.text-blue-600]:!text-white'"
                ></app-logo>
              </div>
              <p class="text-gray-400 leading-relaxed">
                Modern işletmeler için tasarlanmış, kapsamlı yönetim platformu.
                İK, görev yönetimi ve daha fazlası tek çatı altında.
              </p>
            </div>

            <!-- Contact Info -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-sm">İstanbul, Türkiye</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-sm">+90 (212) 555 0100</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-sm">info&#64;workly.com</span>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex gap-3">
              <a
                *ngFor="let social of socialLinks"
                [href]="social.href"
                [attr.aria-label]="social.label"
                class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-teal-600 hover:to-green-600 flex items-center justify-center transition-all"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" [innerHTML]="social.icon"></svg>
              </a>
            </div>
          </div>

          <!-- Links Columns -->
          <div *ngFor="let section of footerSections">
            <h3 class="text-white font-bold mb-4">{{ section.title }}</h3>
            <ul class="space-y-3">
              <li *ngFor="let link of section.links">
                <a
                  [href]="link.href"
                  class="hover:text-teal-400 transition-colors text-sm"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="mt-12 pt-12 border-t border-gray-800">
          <div class="max-w-xl mx-auto text-center space-y-4">
            <h3 class="text-white font-bold text-xl">Haber Bülteni</h3>
            <p class="text-gray-400">
              Yeni özellikler ve güncellemelerden ilk siz haberdar olun.
            </p>
            <form class="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                class="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-teal-500 transition-colors"
              />
              <button
                type="submit"
                class="px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <span class="hidden sm:inline">Abone Ol</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              &copy; {{ currentYear }} Workly. Tüm hakları saklıdır.
            </div>
            <div class="flex gap-6">
              <a href="#" class="hover:text-teal-400 transition-colors">Gizlilik</a>
              <a href="#" class="hover:text-teal-400 transition-colors">Şartlar</a>
              <a href="#" class="hover:text-teal-400 transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Ürün',
      links: [
        { name: 'İK Yönetimi', href: 'http://localhost:3003' },
        { name: 'Görev Yönetimi', href: 'http://localhost:3002' },
        { name: 'Duyuru Sistemi', href: 'http://localhost:3004' },
        { name: 'Dashboard', href: 'http://localhost:3005' },
      ]
    },
    {
      title: 'Şirket',
      links: [
        { name: 'Hakkımızda', href: '#' },
        { name: 'Kariyer', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'İletişim', href: '#' },
      ]
    },
    {
      title: 'Destek',
      links: [
        { name: 'Yardım Merkezi', href: '#' },
        { name: 'Dökümanlar', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Durum', href: '#' },
      ]
    },
    {
      title: 'Yasal',
      links: [
        { name: 'Gizlilik Politikası', href: '#' },
        { name: 'Kullanım Koşulları', href: '#' },
        { name: 'KVKK', href: '#' },
        { name: 'Çerez Politikası', href: '#' },
      ]
    }
  ];

  socialLinks = [
    {
      label: 'Facebook',
      href: '#',
      icon: '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>'
    },
    {
      label: 'Twitter',
      href: '#',
      icon: '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>'
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle>'
    },
    {
      label: 'Instagram',
      href: '#',
      icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>'
    }
  ];
}

