import { Injectable, signal } from '@angular/core';
import { LeaveRequest, LeaveType, LeaveStatus } from '@workly/shared-types';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private leavesSignal = signal<LeaveRequest[]>(this.getMockLeaves());
  
  leaves = this.leavesSignal.asReadonly();

  getLeaves(): LeaveRequest[] {
    return this.leavesSignal();
  }

  getLeaveById(id: string): LeaveRequest | undefined {
    return this.leavesSignal().find(leave => leave.id === id);
  }

  addLeave(leave: Omit<LeaveRequest, 'id' | 'createdAt'>): LeaveRequest {
    const newLeave: LeaveRequest = {
      ...leave,
      id: `leave-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    this.leavesSignal.update(leaves => [...leaves, newLeave]);
    return newLeave;
  }

  updateLeaveStatus(id: string, status: LeaveStatus, approvedBy?: string): void {
    this.leavesSignal.update(leaves =>
      leaves.map(leave =>
        leave.id === id
          ? {
              ...leave,
              status,
              approvedBy,
              approvalDate: new Date().toISOString()
            }
          : leave
      )
    );
  }

  private getMockLeaves(): LeaveRequest[] {
    return [
      {
        id: 'leave-1',
        employeeId: 'emp-1',
        employeeName: 'John Doe',
        leaveType: LeaveType.ANNUAL,
        startDate: '2024-12-20',
        endDate: '2024-12-27',
        reason: 'Christmas vacation with family',
        status: LeaveStatus.PENDING,
        createdAt: '2024-12-01T10:00:00Z'
      },
      {
        id: 'leave-2',
        employeeId: 'emp-3',
        employeeName: 'Michael Johnson',
        leaveType: LeaveType.SICK,
        startDate: '2024-12-15',
        endDate: '2024-12-16',
        reason: 'Medical appointment',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-10T14:30:00Z',
        createdAt: '2024-12-08T09:00:00Z'
      },
      {
        id: 'leave-3',
        employeeId: 'emp-6',
        employeeName: 'Emily Davis',
        leaveType: LeaveType.MATERNITY,
        startDate: '2024-11-15',
        endDate: '2025-02-15',
        reason: 'Maternity leave',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-11-01T11:00:00Z',
        createdAt: '2024-10-28T13:00:00Z'
      },
      {
        id: 'leave-4',
        employeeId: 'emp-5',
        employeeName: 'David Brown',
        leaveType: LeaveType.ANNUAL,
        startDate: '2024-12-30',
        endDate: '2025-01-05',
        reason: 'New Year holiday',
        status: LeaveStatus.PENDING,
        createdAt: '2024-12-05T15:00:00Z'
      },
      {
        id: 'leave-5',
        employeeId: 'emp-7',
        employeeName: 'Robert Miller',
        leaveType: LeaveType.EMERGENCY,
        startDate: '2024-12-18',
        endDate: '2024-12-18',
        reason: 'Family emergency',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-17T16:00:00Z',
        createdAt: '2024-12-17T14:00:00Z'
      },
      {
        id: 'leave-6',
        employeeId: 'emp-8',
        employeeName: 'Lisa Anderson',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-01-10',
        endDate: '2025-01-17',
        reason: 'Personal travel',
        status: LeaveStatus.REJECTED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-12T10:00:00Z',
        createdAt: '2024-12-10T11:00:00Z'
      }
    ];
  }
}

