import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Department, EmployeeStatus } from '@workly/shared-types';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">
            {{ isEditMode() ? 'Çalışanı Düzenle' : 'Yeni Çalışan Ekle' }}
          </h1>
        </div>
      </div>

      <div class="card">
        <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()" class="card-body space-y-6">
          <!-- Personal Information -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Kişisel Bilgiler
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Ad *
                </label>
                <input
                  type="text"
                  formControlName="firstName"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('firstName')}"
                />
                <div *ngIf="isFieldInvalid('firstName')" class="invalid-feedback">
                  Ad gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Soyad *
                </label>
                <input
                  type="text"
                  formControlName="lastName"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('lastName')}"
                />
                <div *ngIf="isFieldInvalid('lastName')" class="invalid-feedback">
                  Soyad gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  E-posta *
                </label>
                <input
                  type="email"
                  formControlName="email"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('email')}"
                />
                <div *ngIf="isFieldInvalid('email')" class="invalid-feedback">
                  Geçerli bir e-posta gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Telefon *
                </label>
                <input
                  type="tel"
                  formControlName="phone"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('phone')}"
                />
                <div *ngIf="isFieldInvalid('phone')" class="invalid-feedback">
                  Telefon numarası gereklidir
                </div>
              </div>
            </div>
          </div>

          <!-- Employment Details -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              İstihdam Detayları
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Pozisyon *
                </label>
                <input
                  type="text"
                  formControlName="position"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('position')}"
                />
                <div *ngIf="isFieldInvalid('position')" class="invalid-feedback">
                  Pozisyon gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  Departman *
                </label>
                <div class="relative">
                  <select
                    formControlName="department"
                    class="form-control appearance-none pr-10"
                    [ngClass]="{'is-invalid': isFieldInvalid('department')}"
                  >
                    <option value="">Departman Seçin</option>
                    <option [value]="dept" *ngFor="let dept of departments">
                      {{ departmentLabels[dept] }}
                    </option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
                <div *ngIf="isFieldInvalid('department')" class="invalid-feedback">
                  Departman gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Başlangıç Tarihi *
                </label>
                <input
                  type="date"
                  formControlName="startDate"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('startDate')}"
                />
                <div *ngIf="isFieldInvalid('startDate')" class="invalid-feedback">
                  Başlangıç tarihi gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Maaş *
                </label>
                <input
                  type="number"
                  formControlName="salary"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('salary')}"
                />
                <div *ngIf="isFieldInvalid('salary')" class="invalid-feedback">
                  Maaş gereklidir
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Durum *
                </label>
                <div class="relative">
                  <select
                    formControlName="status"
                    class="form-control appearance-none pr-10"
                    [ngClass]="{'is-invalid': isFieldInvalid('status')}"
                  >
                    <option [value]="status" *ngFor="let status of statuses">
                      {{ statusLabels[status] }}
                    </option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Avatar URL
                </label>
                <input
                  type="url"
                  formControlName="avatar"
                  class="form-control"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              Yetenekler
            </h3>
            <div class="form-group">
              <label class="form-label">Virgülle ayırın</label>
              <input
                type="text"
                formControlName="skills"
                class="form-control"
                placeholder="TypeScript, Angular, React..."
              />
            </div>
          </div>

          <!-- Actions -->
          <div class="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              class="btn btn-secondary"
              (click)="onCancel()"
            >
              İptal
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="employeeForm.invalid || isSubmitting()"
            >
              {{ isSubmitting() ? 'Kaydediliyor...' : (isEditMode() ? 'Güncelle' : 'Oluştur') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class EmployeeFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  employeeForm!: FormGroup;
  isEditMode = signal(false);
  isSubmitting = signal(false);
  employeeId: string | null = null;

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

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.isEditMode.set(!!this.employeeId);

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      startDate: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]],
      status: [EmployeeStatus.ACTIVE, Validators.required],
      avatar: [''],
      skills: ['']
    });

    if (this.isEditMode() && this.employeeId) {
      this.loadEmployee(this.employeeId);
    }
  }

  loadEmployee(id: string): void {
    const employee = this.employeeService.getEmployeeById(id);
    if (employee) {
      this.employeeForm.patchValue({
        ...employee,
        skills: employee.skills?.join(', ') || ''
      });
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.employeeForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.isSubmitting.set(true);

      const formValue = this.employeeForm.value;
      const employeeData = {
        ...formValue,
        skills: formValue.skills
          ? formValue.skills.split(',').map((s: string) => s.trim()).filter(Boolean)
          : []
      };

      if (this.isEditMode() && this.employeeId) {
        this.employeeService.updateEmployee(this.employeeId, employeeData);
      } else {
        this.employeeService.addEmployee(employeeData);
      }

      setTimeout(() => {
        this.router.navigate(['/employees']);
      }, 500);
    } else {
      Object.keys(this.employeeForm.controls).forEach(key => {
        this.employeeForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/employees']);
  }
}

