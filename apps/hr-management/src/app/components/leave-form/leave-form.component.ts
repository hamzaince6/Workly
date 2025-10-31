import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { EmployeeService } from '../../services/employee.service';
import { LeaveType, LeaveStatus } from '@workly/shared-types';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="max-w-2xl mx-auto">
      <div class="card">
        <div class="card-header">
          <h2 class="text-2xl font-bold text-gray-900">İzin Talebi Oluştur</h2>
        </div>

        <form [formGroup]="leaveForm" (ngSubmit)="onSubmit()" class="card-body space-y-6">
          <!-- Employee Selection -->
          <div class="form-group">
            <label class="form-label">Çalışan *</label>
            <div class="relative">
              <select
                formControlName="employeeId"
                class="form-control appearance-none pr-10"
                [ngClass]="{'is-invalid': isFieldInvalid('employeeId')}"
                (change)="onEmployeeChange($event)"
              >
                <option value="">Çalışan Seçin</option>
                <option [value]="emp.id" *ngFor="let emp of employees()">
                  {{ emp.firstName }} {{ emp.lastName }} - {{ emp.position }}
                </option>
              </select>
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <div *ngIf="isFieldInvalid('employeeId')" class="invalid-feedback">
              Çalışan seçimi gereklidir
            </div>
          </div>

          <!-- Leave Type -->
          <div class="form-group">
            <label class="form-label">İzin Tipi *</label>
            <div class="relative">
              <select
                formControlName="leaveType"
                class="form-control appearance-none pr-10"
                [ngClass]="{'is-invalid': isFieldInvalid('leaveType')}"
              >
                <option value="">İzin Tipi Seçin</option>
                <option [value]="type" *ngFor="let type of leaveTypes">
                  {{ leaveTypeLabels[type] }}
                </option>
              </select>
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <div *ngIf="isFieldInvalid('leaveType')" class="invalid-feedback">
              İzin tipi gereklidir
            </div>
          </div>

          <!-- Date Range -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <label class="form-label">Bitiş Tarihi *</label>
              <input
                type="date"
                formControlName="endDate"
                class="form-control"
                [ngClass]="{'is-invalid': isFieldInvalid('endDate')}"
              />
              <div *ngIf="isFieldInvalid('endDate')" class="invalid-feedback">
                Bitiş tarihi gereklidir
              </div>
            </div>
          </div>

          <!-- Duration Display -->
          <div *ngIf="leaveForm.get('startDate')?.value && leaveForm.get('endDate')?.value" class="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <div class="text-sm text-teal-900">
              <strong>Süre:</strong>
              {{ calculateDuration() }} gün
            </div>
          </div>

          <!-- Reason -->
          <div class="form-group">
            <label class="form-label">Sebep *</label>
            <textarea
              formControlName="reason"
              rows="4"
              class="form-control"
              [ngClass]="{'is-invalid': isFieldInvalid('reason')}"
              placeholder="Lütfen izin talebiniz için bir sebep belirtin..."
            ></textarea>
            <div *ngIf="isFieldInvalid('reason')" class="invalid-feedback">
              Sebep gereklidir (minimum 10 karakter)
            </div>
          </div>

          <!-- Info Box -->
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 mb-2">ℹ️ Önemli Bilgiler</h4>
            <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>İzin talepleri yöneticinizin onayına tabidir</li>
              <li>Lütfen mümkün olduğunca en az 3 gün önceden başvurunuzu gönderin</li>
              <li>Acil izinler geriye dönük olarak gönderilebilir</li>
              <li>Talebiniz işleme alındığında bilgilendirileceksiniz</li>
            </ul>
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
              [disabled]="leaveForm.invalid"
            >
              Talebi Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class LeaveFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private leaveService = inject(LeaveService);
  private employeeService = inject(EmployeeService);

  leaveForm!: FormGroup;
  employees = this.employeeService.employees;
  leaveTypes = Object.values(LeaveType);
  selectedEmployeeName = '';

  // Türkçe çevirileri
  leaveTypeLabels: Record<string, string> = {
    [LeaveType.ANNUAL]: 'Yıllık İzin',
    [LeaveType.SICK]: 'Hastalık İzni',
    [LeaveType.MATERNITY]: 'Doğum İzni',
    [LeaveType.PATERNITY]: 'Babalık İzni',
    [LeaveType.UNPAID]: 'Ücretsiz İzin',
    [LeaveType.EMERGENCY]: 'Acil Durum İzni',
  };

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      employeeId: ['', Validators.required],
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Set today as minimum date
    const today = new Date().toISOString().split('T')[0];
    this.leaveForm.get('startDate')?.valueChanges.subscribe(value => {
      if (value) {
        // Set end date minimum to start date
        const endDateControl = this.leaveForm.get('endDate');
        if (endDateControl && endDateControl.value && endDateControl.value < value) {
          endDateControl.setValue(value);
        }
      }
    });
  }

  onEmployeeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const employee = this.employeeService.getEmployeeById(select.value);
    this.selectedEmployeeName = employee
      ? `${employee.firstName} ${employee.lastName}`
      : '';
  }

  calculateDuration(): number {
    const startDate = this.leaveForm.get('startDate')?.value;
    const endDate = this.leaveForm.get('endDate')?.value;

    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.leaveForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const leaveData = {
        ...this.leaveForm.value,
        employeeName: this.selectedEmployeeName,
        status: LeaveStatus.PENDING
      };

      this.leaveService.addLeave(leaveData);
      this.router.navigate(['/leaves']);
    } else {
      Object.keys(this.leaveForm.controls).forEach(key => {
        this.leaveForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/leaves']);
  }
}

