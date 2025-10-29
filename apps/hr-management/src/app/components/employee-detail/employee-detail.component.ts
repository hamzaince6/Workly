import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '@workly/shared-types';

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
          class="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Employees
        </button>
        <div class="flex gap-3">
          <a
            [routerLink]="['/employees', employee()!.id, 'edit']"
            class="btn btn-secondary"
          >
            Edit Employee
          </a>
          <button
            (click)="deleteEmployee()"
            class="btn btn-danger"
          >
            Delete
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
                  {{ employee()!.status }}
                </span>
                <span class="badge badge-info">
                  {{ employee()!.department }}
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
            <h3 class="text-lg font-semibold">Contact Information</h3>
          </div>
          <div class="card-body space-y-3">
            <div>
              <div class="text-sm text-gray-600">Email</div>
              <div class="font-medium text-gray-900">
                <a
                  [href]="'mailto:' + employee()!.email"
                  class="text-blue-600 hover:underline"
                >
                  {{ employee()!.email }}
                </a>
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-600">Phone</div>
              <div class="font-medium text-gray-900">
                <a
                  [href]="'tel:' + employee()!.phone"
                  class="text-blue-600 hover:underline"
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
            <h3 class="text-lg font-semibold">Employment Details</h3>
          </div>
          <div class="card-body space-y-3">
            <div>
              <div class="text-sm text-gray-600">Start Date</div>
              <div class="font-medium text-gray-900">
                {{ employee()!.startDate | date: 'MMM d, yyyy' }}
              </div>
            </div>
            <div>
              <div class="text-sm text-gray-600">Salary</div>
              <div class="font-medium text-gray-900">
                $ {{ employee()!.salary }} / year
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div *ngIf="employee()!.skills && employee()!.skills!.length > 0" class="card mb-6">
        <div class="card-header">
          <h3 class="text-lg font-semibold">Skills & Expertise</h3>
        </div>
        <div class="card-body">
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let skill of employee()!.skills"
              class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Performance Overview -->
      <div class="card">
        <div class="card-header">
          <h3 class="text-lg font-semibold">Performance Overview</h3>
        </div>
        <div class="card-body">
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span class="text-gray-600">Overall Performance</span>
                <span class="font-medium">
                  {{ employee()!.performanceScore || 0 }}/5.0
                </span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-blue-600 h-2 rounded-full transition-all"
                  [style.width]="((employee()!.performanceScore || 0) / 5 * 100) + '%'"
                ></div>
              </div>
            </div>
            <p class="text-sm text-gray-600 mt-4">
              Performance reviews and detailed analytics will be available in the Performance module.
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
          Employee Not Found
        </h3>
        <p class="text-gray-600 mb-4">
          The employee you're looking for doesn't exist.
        </p>
        <button (click)="goBack()" class="btn btn-primary">
          Go Back
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
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(this.employee()!.id);
      this.router.navigate(['/employees']);
    }
  }
}

