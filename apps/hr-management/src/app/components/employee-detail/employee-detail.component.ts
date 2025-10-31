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
    <div *ngIf="employee()" class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <button
          (click)="goBack()"
          class="text-teal-600 hover:text-teal-700 font-medium"
        >
          ← Çalışanlara Dön
        </button>
        <div class="flex gap-3">
          <a
            [routerLink]="['/employees', employee()!.id, 'edit']"
            class="btn btn-secondary"
          >
            Düzenle
          </a>
          <button
            (click)="deleteEmployee()"
            class="btn btn-danger"
          >
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
            <h3 class="text-lg font-semibold">İletişim Bilgileri</h3>
          </div>
          <div class="card-body space-y-3">
            <div>
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
            <div>
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

        <!-- Employment Details -->
        <div class="card">
          <div class="card-header">
            <h3 class="text-lg font-semibold">İstihdam Bilgileri</h3>
          </div>
          <div class="card-body space-y-3">
            <div>
              <div class="text-sm text-gray-600">Başlangıç Tarihi</div>
              <div class="font-medium text-gray-900">
                {{ employee()!.startDate | date: 'MMM d, yyyy' }}
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-600">Maaş</div>
              <div class="font-medium text-gray-900">
                $ {{ employee()!.salary }} / yıl
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div *ngIf="employee()!.skills && employee()!.skills!.length > 0" class="card mb-6">
        <div class="card-header">
          <h3 class="text-lg font-semibold">Yetenekler & Uzmanlık</h3>
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
          <h3 class="text-lg font-semibold">Performans Özeti</h3>
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

