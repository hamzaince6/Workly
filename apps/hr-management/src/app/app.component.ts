import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <h1 class="text-2xl font-bold text-blue-600">Workly HR</h1>
            </div>
            <nav class="flex space-x-4">
              <a
                routerLink="/employees"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Employees
              </a>
              <a
                routerLink="/leaves"
                routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Leave Requests
              </a>
            </nav>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'HR Management';
}

