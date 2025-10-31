import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

interface NavItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <header class="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <app-logo [size]="'md'" [showText]="true"></app-logo>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <a
              *ngFor="let item of navigation"
              [routerLink]="item.path"
              routerLinkActive="text-teal-600 font-semibold"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              class="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              {{ item.name }}
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="hidden md:flex items-center gap-4">
            <a
              href="http://localhost:3000"
              class="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            >
              Ana Sayfa
            </a>
            <a
              href="http://localhost:3001"
              class="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Giriş Yap
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              *ngIf="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              *ngIf="isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          *ngIf="isMobileMenuOpen"
          class="md:hidden py-4 space-y-2 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg -mx-4 px-4"
        >
            <a
              *ngFor="let item of navigation"
              [routerLink]="item.path"
              routerLinkActive="bg-teal-50 text-teal-600"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              (click)="toggleMobileMenu()"
              class="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
            >
              {{ item.name }}
            </a>
          <div class="pt-4 border-t border-gray-200 space-y-2">
            <a
              href="http://localhost:3000"
              class="block px-4 py-3 text-center text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              Ana Sayfa
            </a>
            <a
              href="http://localhost:3001"
              class="block px-4 py-3 text-center bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Giriş Yap
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  navigation: NavItem[] = [
    { name: 'Çalışanlar', path: '/employees' },
    { name: 'İzin Talepleri', path: '/leaves' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

