import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee, Department, EmployeeStatus } from '@workly/shared-types';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Çalışanlar</h1>
          <p class="text-gray-600 mt-1">İş gücünüzü yönetin</p>
        </div>
        <a
          routerLink="/employees/new"
          class="btn btn-primary"
        >
          + Çalışan Ekle
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Toplam Çalışan</div>
            <div class="text-2xl font-bold text-gray-900 mt-1">
              {{ employees().length }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Aktif</div>
            <div class="text-2xl font-bold text-green-600 mt-1">
              {{ activeCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">İzinli</div>
            <div class="text-2xl font-bold text-yellow-600 mt-1">
              {{ onLeaveCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Departmanlar</div>
            <div class="text-2xl font-bold text-teal-600 mt-1">
              {{ departmentCount() }}
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="relative">
              <input
                type="text"
                placeholder="Çalışan ara..."
                class="form-control pr-10"
                (input)="onSearchChange($event)"
              />
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <div class="relative">
              <select
                class="form-control appearance-none pr-10"
                (change)="onDepartmentChange($event)"
              >
                <option value="">Tüm Departmanlar</option>
                <option [value]="dept" *ngFor="let dept of departments">
                  {{ departmentLabels[dept] }}
                </option>
              </select>
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <div class="relative">
              <select
                class="form-control appearance-none pr-10"
                (change)="onStatusChange($event)"
              >
                <option value="">Tüm Durumlar</option>
                <option [value]="status" *ngFor="let status of statuses">
                  {{ statusLabels[status] }}
                </option>
              </select>
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Employee Table -->
      <div class="card">
        <div class="card-body p-0">
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>Çalışan</th>
                  <th>Pozisyon</th>
                  <th>Departman</th>
                  <th>Durum</th>
                  <th>Performans</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let employee of filteredEmployees()">
                  <td>
                    <div class="flex items-center gap-3">
                      <img
                        [src]="employee.avatar || 'https://i.pravatar.cc/150'"
                        [alt]="employee.firstName + ' ' + employee.lastName"
                        class="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div class="font-medium text-gray-900">
                          {{ employee.firstName }} {{ employee.lastName }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ employee.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-gray-900">{{ employee.position }}</td>
                  <td class="text-gray-600">{{ departmentLabels[employee.department] }}</td>
                  <td>
                    <span
                      class="badge"
                      [ngClass]="{
                        'badge-success': employee.status === 'Active',
                        'badge-warning': employee.status === 'On Leave',
                        'badge-danger': employee.status === 'Terminated'
                      }"
                    >
                      {{ statusLabels[employee.status] }}
                    </span>
                  </td>
                  <td>
                    <div class="flex items-center gap-1">
                      <span class="text-yellow-500">★</span>
                      <span class="font-medium">
                        {{ employee.performanceScore || 'N/A' }}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div class="flex gap-2">
                      <a
                        [routerLink]="['/employees', employee.id]"
                        class="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                        title="Görüntüle"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                      </a>
                      <a
                        [routerLink]="['/employees', employee.id, 'edit']"
                        class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Düzenle"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                      </a>
                      <button
                        (click)="deleteEmployee(employee.id)"
                        class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Sil"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        *ngIf="filteredEmployees().length === 0"
        class="card"
      >
        <div class="card-body text-center py-12">
          <div class="text-gray-400 text-4xl mb-4">👥</div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            Çalışan bulunamadı
          </h3>
          <p class="text-gray-600">
            Filtrelerinizi ayarlayın veya yeni bir çalışan ekleyin
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EmployeeListComponent {
  private employeeService = inject(EmployeeService);

  employees = this.employeeService.employees;
  searchTerm = signal('');
  selectedDepartment = signal('');
  selectedStatus = signal('');

  departments = Object.values(Department);
  statuses = Object.values(EmployeeStatus);

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

  activeCount = computed(() =>
    this.employees().filter(e => e.status === EmployeeStatus.ACTIVE).length
  );

  onLeaveCount = computed(() =>
    this.employees().filter(e => e.status === EmployeeStatus.ON_LEAVE).length
  );

  departmentCount = computed(() =>
    new Set(this.employees().map(e => e.department)).size
  );

  filteredEmployees = computed(() => {
    let filtered = this.employees();

    // Search filter
    const search = this.searchTerm().toLowerCase();
    if (search) {
      filtered = filtered.filter(
        e =>
          e.firstName.toLowerCase().includes(search) ||
          e.lastName.toLowerCase().includes(search) ||
          e.email.toLowerCase().includes(search) ||
          e.position.toLowerCase().includes(search)
      );
    }

    // Department filter
    if (this.selectedDepartment()) {
      filtered = filtered.filter(e => e.department === this.selectedDepartment());
    }

    // Status filter
    if (this.selectedStatus()) {
      filtered = filtered.filter(e => e.status === this.selectedStatus());
    }

    return filtered;
  });

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  onDepartmentChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedDepartment.set(select.value);
  }

  onStatusChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedStatus.set(select.value);
  }

  deleteEmployee(id: string): void {
    if (confirm('Bu çalışanı silmek istediğinizden emin misiniz?')) {
      this.employeeService.deleteEmployee(id);
    }
  }
}

