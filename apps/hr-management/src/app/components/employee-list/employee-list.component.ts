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
          <h1 class="text-3xl font-bold text-gray-900">Employees</h1>
          <p class="text-gray-600 mt-1">Manage your workforce</p>
        </div>
        <a
          routerLink="/employees/new"
          class="btn btn-primary"
        >
          + Add Employee
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Total Employees</div>
            <div class="text-2xl font-bold text-gray-900 mt-1">
              {{ employees().length }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Active</div>
            <div class="text-2xl font-bold text-green-600 mt-1">
              {{ activeCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">On Leave</div>
            <div class="text-2xl font-bold text-yellow-600 mt-1">
              {{ onLeaveCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Departments</div>
            <div class="text-2xl font-bold text-blue-600 mt-1">
              {{ departmentCount() }}
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search employees..."
              class="form-control"
              (input)="onSearchChange($event)"
            />
            <select
              class="form-control"
              (change)="onDepartmentChange($event)"
            >
              <option value="">All Departments</option>
              <option [value]="dept" *ngFor="let dept of departments">
                {{ dept }}
              </option>
            </select>
            <select
              class="form-control"
              (change)="onStatusChange($event)"
            >
              <option value="">All Status</option>
              <option [value]="status" *ngFor="let status of statuses">
                {{ status }}
              </option>
            </select>
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
                  <th>Employee</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Actions</th>
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
                  <td class="text-gray-600">{{ employee.department }}</td>
                  <td>
                    <span
                      class="badge"
                      [ngClass]="{
                        'badge-success': employee.status === 'Active',
                        'badge-warning': employee.status === 'On Leave',
                        'badge-danger': employee.status === 'Terminated'
                      }"
                    >
                      {{ employee.status }}
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
                        class="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        View
                      </a>
                      <a
                        [routerLink]="['/employees', employee.id, 'edit']"
                        class="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Edit
                      </a>
                      <button
                        (click)="deleteEmployee(employee.id)"
                        class="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Delete
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
            No employees found
          </h3>
          <p class="text-gray-600">
            Try adjusting your filters or add a new employee
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
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
    }
  }
}

