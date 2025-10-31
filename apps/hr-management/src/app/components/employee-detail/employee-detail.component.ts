import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee, Department, EmployeeStatus } from '@workly/shared-types';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="employee()" class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <button
          (click)="goBack()"
          class="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-lg transition-all font-medium"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Geri Dön
        </button>
        <div class="flex gap-3">
          <a
            [routerLink]="['/employees', employee()!.id, 'edit']"
            class="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 rounded-lg transition-all font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            Düzenle
          </a>
          <button
            (click)="deleteEmployee()"
            class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-all font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
            Sil
          </button>
        </div>
      </div>

      <!-- Employee Card -->
      <div class="card mb-6">
        <div class="card-body">
          <div class="flex items-start gap-6">
            <img
              [src]="employee()!.avatar || 'https://i.pravatar.cc/150'"
              [alt]="employee()!.firstName + ' ' + employee()!.lastName"
              class="w-32 h-32 rounded-full border-4 border-gray-200"
            />
            <div class="flex-1">
              <h1 class="text-3xl font-bold text-gray-900">
                {{ employee()!.firstName }} {{ employee()!.lastName }}
              </h1>
              <p class="text-xl text-gray-600 mt-1">
                {{ employee()!.position }}
              </p>
              <div class="flex gap-4 mt-4">
                <span
                  class="badge"
                  [ngClass]="{
                    'badge-success': employee()!.status === 'Active',
                    'badge-warning': employee()!.status === 'On Leave',
                    'badge-danger': employee()!.status === 'Terminated'
                  }"
                >
                  {{ statusLabels[employee()!.status] }}
                </span>
                <span class="badge badge-info">
                  {{ departmentLabels[employee()!.department] }}
                </span>
                <div *ngIf="employee()!.performanceScore" class="flex items-center gap-1">
                  <span class="text-yellow-500 text-lg">★</span>
                  <span class="font-semibold">{{ employee()!.performanceScore }}</span>
                  <span class="text-gray-500 text-sm">/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Details Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Contact Information -->
        <div class="card">
          <div class="card-header">
            <h3 class="text-lg font-semibold flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              İletişim Bilgileri
            </h3>
          </div>
          <div class="card-body space-y-3">
            <div class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div class="flex-1">
                <div class="text-sm text-gray-600">E-posta</div>
                <div class="font-medium text-gray-900">
                  <a
                    [href]="'mailto:' + employee()!.email"
                    class="text-teal-600 hover:underline"
                  >
                    {{ employee()!.email }}
                  </a>
                </div>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <div class="flex-1">
                <div class="text-sm text-gray-600">Telefon</div>
                <div class="font-medium text-gray-900">
                  <a
                    [href]="'tel:' + employee()!.phone"
                    class="text-teal-600 hover:underline"
                  >
                    {{ employee()!.phone }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Employment Details -->
        <div class="card">
          <div class="card-header">
            <h3 class="text-lg font-semibold flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              İstihdam Bilgileri
            </h3>
          </div>
          <div class="card-body space-y-3">
            <div class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <div class="flex-1">
                <div class="text-sm text-gray-600">Başlangıç Tarihi</div>
                <div class="font-medium text-gray-900">
                  {{ employee()!.startDate | date: 'MMM d, yyyy' }}
                </div>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <svg class="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div class="flex-1">
                <div class="text-sm text-gray-600">Maaş</div>
                <div class="font-medium text-gray-900">
                  $ {{ employee()!.salary }} / yıl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div *ngIf="employee()!.skills && employee()!.skills!.length > 0" class="card mb-6">
        <div class="card-header">
          <h3 class="text-lg font-semibold flex items-center gap-2">
            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
            Yetenekler & Uzmanlık
          </h3>
        </div>
        <div class="card-body">
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let skill of employee()!.skills"
              class="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Performance Overview -->
      <div class="card">
        <div class="card-header">
          <h3 class="text-lg font-semibold flex items-center gap-2">
            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Performans Özeti
          </h3>
        </div>
        <div class="card-body">
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-gray-600">Genel Performans</span>
                <span class="font-medium">
                  {{ employee()!.performanceScore || 0 }}/5.0
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-teal-600 h-2 rounded-full transition-all"
                  [style.width]="((employee()!.performanceScore || 0) / 5 * 100) + '%'"
                ></div>
              </div>
            </div>
            <p class="text-sm text-gray-600 mt-4">
              Performans değerlendirmeleri ve detaylı analizler Performans modülünde mevcut olacaktır.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div *ngIf="!employee()" class="card">
      <div class="card-body text-center py-12">
        <div class="text-gray-400 text-4xl mb-4">🔍</div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          Çalışan Bulunamadı
        </h3>
        <p class="text-gray-600 mb-4">
          Aradığınız çalışan mevcut değil.
        </p>
        <button (click)="goBack()" class="btn btn-primary">
          Geri Dön
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  employee = signal<Employee | undefined>(undefined);

  // Türkçe çevirileri
  departmentLabels: Record<string, string> = {
    [Department.ENGINEERING]: 'Mühendislik',
    [Department.HR]: 'İnsan Kaynakları',
    [Department.SALES]: 'Satış',
    [Department.MARKETING]: 'Pazarlama',
    [Department.FINANCE]: 'Finans',
    [Department.OPERATIONS]: 'Operasyon',
    [Department.IT]: 'Bilgi Teknolojileri',
    [Department.CUSTOMER_SERVICE]: 'Müşteri Hizmetleri',
  };

  statusLabels: Record<string, string> = {
    [EmployeeStatus.ACTIVE]: 'Aktif',
    [EmployeeStatus.ON_LEAVE]: 'İzinli',
    [EmployeeStatus.TERMINATED]: 'İşten Ayrıldı',
    [EmployeeStatus.SUSPENDED]: 'Askıda',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const emp = this.employeeService.getEmployeeById(id);
      this.employee.set(emp);
    }
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }

  deleteEmployee(): void {
    if (confirm('Bu çalışanı silmek istediğinizden emin misiniz?')) {
      this.employeeService.deleteEmployee(this.employee()!.id);
      this.router.navigate(['/employees']);
    }
  }
}

