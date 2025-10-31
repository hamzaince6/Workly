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
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-900">İzin Yönetimi</h1>
          </div>
        </div>
        <a routerLink="/leaves/new" class="btn btn-primary">
          + İzin Talebi Oluştur
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Toplam Talepler</div>
            <div class="text-2xl font-bold text-gray-900 mt-1">
              {{ leaves().length }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Bekleyen</div>
            <div class="text-2xl font-bold text-yellow-600 mt-1">
              {{ pendingCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Onaylanan</div>
            <div class="text-2xl font-bold text-green-600 mt-1">
              {{ approvedCount() }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-sm text-gray-600">Reddedilen</div>
            <div class="text-2xl font-bold text-red-600 mt-1">
              {{ rejectedCount() }}
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
                placeholder="İzin talebi ara..."
                class="form-control pr-10"
                (input)="onSearchChange($event)"
              />
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <div class="relative">
              <select class="form-control appearance-none pr-10" (change)="onStatusChange($event)">
                <option value="">Tüm Durumlar</option>
                <option [value]="status" *ngFor="let status of statuses">
                  {{ statusLabels[status] }}
                </option>
              </select>
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <div class="relative">
              <select class="form-control appearance-none pr-10" (change)="onTypeChange($event)">
                <option value="">Tüm Tipler</option>
                <option [value]="type" *ngFor="let type of types">
                  {{ typeLabels[type] }}
                </option>
              </select>
              <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
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
                  <th>Çalışan</th>
                  <th>İzin Tipi</th>
                  <th>Dönem</th>
                  <th>Süre</th>
                  <th>Sebep</th>
                  <th>Durum</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let leave of filteredLeaves()">
                  <td class="font-medium text-gray-900">
                    {{ leave.employeeName }}
                  </td>
                  <td>
                    <span class="badge badge-info">
                      {{ typeLabels[leave.leaveType] }}
                    </span>
                  </td>
                  <td class="text-gray-600 text-sm">
                    <div>{{ leave.startDate | date: 'MMM d' }}</div>
                    <div>{{ leave.endDate | date: 'MMM d, yyyy' }}</div>
                  </td>
                  <td class="font-medium text-gray-900">
                    {{ calculateDuration(leave.startDate, leave.endDate) }} gün
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
                      {{ statusLabels[leave.status] }}
                    </span>
                  </td>
                  <td>
                    <div *ngIf="leave.status === 'Pending'" class="flex gap-2">
                      <button
                        (click)="approveLeave(leave.id)"
                        class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Onayla"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </button>
                      <button
                        (click)="rejectLeave(leave.id)"
                        class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Reddet"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </button>
                    </div>
                    <div *ngIf="leave.status !== 'Pending'" class="text-sm text-gray-500">
                      {{ leave.status === 'Approved' ? 'Onaylandı' : 'Reddedildi' }}
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
            İzin talebi bulunamadı
          </h3>
          <p class="text-gray-600">
            Filtrelerinizi ayarlayın veya yeni bir izin talebi oluşturun
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
  searchTerm = signal('');
  selectedStatus = signal('');
  selectedType = signal('');

  statuses = Object.values(LeaveStatus);
  types = Object.values(LeaveType);

  // Türkçe çevirileri
  statusLabels: Record<string, string> = {
    [LeaveStatus.PENDING]: 'Beklemede',
    [LeaveStatus.APPROVED]: 'Onaylandı',
    [LeaveStatus.REJECTED]: 'Reddedildi',
    [LeaveStatus.CANCELLED]: 'İptal Edildi',
  };

  typeLabels: Record<string, string> = {
    [LeaveType.ANNUAL]: 'Yıllık İzin',
    [LeaveType.SICK]: 'Hastalık İzni',
    [LeaveType.MATERNITY]: 'Doğum İzni',
    [LeaveType.PATERNITY]: 'Babalık İzni',
    [LeaveType.UNPAID]: 'Ücretsiz İzin',
    [LeaveType.EMERGENCY]: 'Acil Durum İzni',
  };

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

    // Search filter
    const search = this.searchTerm().toLowerCase();
    if (search) {
      filtered = filtered.filter(
        l =>
          l.employeeName.toLowerCase().includes(search) ||
          l.reason.toLowerCase().includes(search) ||
          this.typeLabels[l.leaveType].toLowerCase().includes(search) ||
          this.statusLabels[l.status].toLowerCase().includes(search)
      );
    }

    if (this.selectedStatus()) {
      filtered = filtered.filter(l => l.status === this.selectedStatus());
    }

    if (this.selectedType()) {
      filtered = filtered.filter(l => l.leaveType === this.selectedType());
    }

    return filtered;
  });

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

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
    if (confirm('Bu izin talebini reddetmek istediğinizden emin misiniz?')) {
      this.leaveService.updateLeaveStatus(id, LeaveStatus.REJECTED, 'emp-2');
    }
  }
}

