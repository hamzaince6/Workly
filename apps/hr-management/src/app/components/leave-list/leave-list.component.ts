import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { LeaveStatus, LeaveType } from '@workly/shared-types';

@Component({
  selector: 'app-leave-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Leave Requests</h1>
          <p class="text-gray-600 mt-1">Manage employee leave requests</p>
        </div>
        <a routerLink="/leaves/new" class="btn btn-primary">
          + Request Leave
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Total Requests</div>
            <div class="text-2xl font-bold text-gray-900 mt-1">
              {{ leaves().length }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Pending</div>
            <div class="text-2xl font-bold text-yellow-600 mt-1">
              {{ pendingCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Approved</div>
            <div class="text-2xl font-bold text-green-600 mt-1">
              {{ approvedCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Rejected</div>
            <div class="text-2xl font-bold text-red-600 mt-1">
              {{ rejectedCount() }}
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select class="form-control" (change)="onStatusChange($event)">
              <option value="">All Status</option>
              <option [value]="status" *ngFor="let status of statuses">
                {{ status }}
              </option>
            </select>
            <select class="form-control" (change)="onTypeChange($event)">
              <option value="">All Types</option>
              <option [value]="type" *ngFor="let type of types">
                {{ type }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Leave Requests Table -->
      <div class="card">
        <div class="card-body p-0">
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Leave Type</th>
                  <th>Period</th>
                  <th>Duration</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let leave of filteredLeaves()">
                  <td class="font-medium text-gray-900">
                    {{ leave.employeeName }}
                  </td>
                  <td>
                    <span class="badge badge-info">
                      {{ leave.leaveType }}
                    </span>
                  </td>
                  <td class="text-gray-600 text-sm">
                    <div>{{ leave.startDate | date: 'MMM d' }}</div>
                    <div>{{ leave.endDate | date: 'MMM d, yyyy' }}</div>
                  </td>
                  <td class="font-medium text-gray-900">
                    {{ calculateDuration(leave.startDate, leave.endDate) }} days
                  </td>
                  <td class="text-gray-600 max-w-xs truncate">
                    {{ leave.reason }}
                  </td>
                  <td>
                    <span
                      class="badge"
                      [ngClass]="{
                        'badge-warning': leave.status === 'Pending',
                        'badge-success': leave.status === 'Approved',
                        'badge-danger': leave.status === 'Rejected'
                      }"
                    >
                      {{ leave.status }}
                    </span>
                  </td>
                  <td>
                    <div *ngIf="leave.status === 'Pending'" class="flex gap-2">
                      <button
                        (click)="approveLeave(leave.id)"
                        class="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Approve
                      </button>
                      <button
                        (click)="rejectLeave(leave.id)"
                        class="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Reject
                      </button>
                    </div>
                    <div *ngIf="leave.status !== 'Pending'" class="text-sm text-gray-500">
                      {{ leave.status === 'Approved' ? 'Approved' : 'Rejected' }}
                      <div class="text-xs">{{ leave.approvalDate | date: 'short' }}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div *ngIf="filteredLeaves().length === 0" class="card">
        <div class="card-body text-center py-12">
          <div class="text-gray-400 text-4xl mb-4">📅</div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            No leave requests found
          </h3>
          <p class="text-gray-600">
            Try adjusting your filters or create a new leave request
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LeaveListComponent {
  private leaveService = inject(LeaveService);

  leaves = this.leaveService.leaves;
  selectedStatus = signal('');
  selectedType = signal('');

  statuses = Object.values(LeaveStatus);
  types = Object.values(LeaveType);

  pendingCount = computed(() =>
    this.leaves().filter(l => l.status === LeaveStatus.PENDING).length
  );

  approvedCount = computed(() =>
    this.leaves().filter(l => l.status === LeaveStatus.APPROVED).length
  );

  rejectedCount = computed(() =>
    this.leaves().filter(l => l.status === LeaveStatus.REJECTED).length
  );

  filteredLeaves = computed(() => {
    let filtered = this.leaves();

    if (this.selectedStatus()) {
      filtered = filtered.filter(l => l.status === this.selectedStatus());
    }

    if (this.selectedType()) {
      filtered = filtered.filter(l => l.leaveType === this.selectedType());
    }

    return filtered;
  });

  onStatusChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedStatus.set(select.value);
  }

  onTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedType.set(select.value);
  }

  calculateDuration(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  }

  approveLeave(id: string): void {
    this.leaveService.updateLeaveStatus(id, LeaveStatus.APPROVED, 'emp-2');
  }

  rejectLeave(id: string): void {
    if (confirm('Are you sure you want to reject this leave request?')) {
      this.leaveService.updateLeaveStatus(id, LeaveStatus.REJECTED, 'emp-2');
    }
  }
}

