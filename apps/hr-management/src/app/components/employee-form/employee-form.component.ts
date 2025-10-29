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
            {{ isEditMode() ? 'Edit Employee' : 'Add New Employee' }}
          </h2>
        </div>

        <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()" class="card-body space-y-6">
          <!-- Personal Information -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">First Name *</label>
                <input
                  type="text"
                  formControlName="firstName"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('firstName')}"
                />
                <div *ngIf="isFieldInvalid('firstName')" class="invalid-feedback">
                  First name is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Last Name *</label>
                <input
                  type="text"
                  formControlName="lastName"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('lastName')}"
                />
                <div *ngIf="isFieldInvalid('lastName')" class="invalid-feedback">
                  Last name is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email *</label>
                <input
                  type="email"
                  formControlName="email"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('email')}"
                />
                <div *ngIf="isFieldInvalid('email')" class="invalid-feedback">
                  Valid email is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Phone *</label>
                <input
                  type="tel"
                  formControlName="phone"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('phone')}"
                />
                <div *ngIf="isFieldInvalid('phone')" class="invalid-feedback">
                  Phone number is required
                </div>
              </div>
            </div>
          </div>

          <!-- Employment Details -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Employment Details</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label class="form-label">Position *</label>
                <input
                  type="text"
                  formControlName="position"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('position')}"
                />
                <div *ngIf="isFieldInvalid('position')" class="invalid-feedback">
                  Position is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Department *</label>
                <select
                  formControlName="department"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('department')}"
                >
                  <option value="">Select Department</option>
                  <option [value]="dept" *ngFor="let dept of departments">
                    {{ dept }}
                  </option>
                </select>
                <div *ngIf="isFieldInvalid('department')" class="invalid-feedback">
                  Department is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Start Date *</label>
                <input
                  type="date"
                  formControlName="startDate"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('startDate')}"
                />
                <div *ngIf="isFieldInvalid('startDate')" class="invalid-feedback">
                  Start date is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Salary *</label>
                <input
                  type="number"
                  formControlName="salary"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('salary')}"
                />
                <div *ngIf="isFieldInvalid('salary')" class="invalid-feedback">
                  Salary is required
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Status *</label>
                <select
                  formControlName="status"
                  class="form-control"
                  [ngClass]="{'is-invalid': isFieldInvalid('status')}"
                >
                  <option [value]="status" *ngFor="let status of statuses">
                    {{ status }}
                  </option>
                </select>
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
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Skills (comma separated)</h3>
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
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="employeeForm.invalid || isSubmitting()"
            >
              {{ isSubmitting() ? 'Saving...' : (isEditMode() ? 'Update' : 'Create') }}
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

