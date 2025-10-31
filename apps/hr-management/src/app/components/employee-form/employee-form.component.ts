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
    <div class="max-w-3xl mx-auto">
      <div class="card">
        <div class="card-header">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ isEditMode() ? 'Çalışanı Düzenle' : 'Yeni Çalışan Ekle' }}
          </h2>
        </div>

        <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()" class="card-body space-y-6">
          <!-- Personal Information -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Kişisel Bilgiler</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">Ad *</label>
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
                <label class="form-label">Soyad *</label>
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
                <label class="form-label">E-posta *</label>
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
                <label class="form-label">Telefon *</label>
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
            <h3 class="text-lg font-semibold text-gray-900 mb-4">İstihdam Detayları</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">Pozisyon *</label>
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
                <label class="form-label">Departman *</label>
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
                <label class="form-label">Başlangıç Tarihi *</label>
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
                <label class="form-label">Maaş *</label>
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
                <label class="form-label">Durum *</label>
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
                <label class="form-label">Avatar URL</label>
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
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Yetenekler (virgülle ayırın)</h3>
            <div class="form-group">
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

