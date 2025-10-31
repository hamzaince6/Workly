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
        employeeName: 'Ahmet Yılmaz',
        leaveType: LeaveType.ANNUAL,
        startDate: '2024-12-20',
        endDate: '2024-12-27',
        reason: 'Yılbaşı tatili için aile ziyareti',
        status: LeaveStatus.PENDING,
        createdAt: '2024-12-01T10:00:00Z'
      },
      {
        id: 'leave-2',
        employeeId: 'emp-3',
        employeeName: 'Mehmet Kaya',
        leaveType: LeaveType.SICK,
        startDate: '2024-12-15',
        endDate: '2024-12-16',
        reason: 'Sağlık kontrolü ve doktor randevusu',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-10T14:30:00Z',
        createdAt: '2024-12-08T09:00:00Z'
      },
      {
        id: 'leave-3',
        employeeId: 'emp-6',
        employeeName: 'Elif Çelik',
        leaveType: LeaveType.MATERNITY,
        startDate: '2024-11-15',
        endDate: '2025-02-15',
        reason: 'Doğum izni - 3 aylık süre',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-11-01T11:00:00Z',
        createdAt: '2024-10-28T13:00:00Z'
      },
      {
        id: 'leave-4',
        employeeId: 'emp-5',
        employeeName: 'Can Öztürk',
        leaveType: LeaveType.ANNUAL,
        startDate: '2024-12-30',
        endDate: '2025-01-05',
        reason: 'Yeni yıl tatili ve dinlenme',
        status: LeaveStatus.PENDING,
        createdAt: '2024-12-05T15:00:00Z'
      },
      {
        id: 'leave-5',
        employeeId: 'emp-7',
        employeeName: 'Burak Yıldız',
        leaveType: LeaveType.EMERGENCY,
        startDate: '2024-12-18',
        endDate: '2024-12-18',
        reason: 'Aile acil durumu',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-17T16:00:00Z',
        createdAt: '2024-12-17T14:00:00Z'
      },
      {
        id: 'leave-6',
        employeeId: 'emp-8',
        employeeName: 'Selin Aksoy',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-01-10',
        endDate: '2025-01-17',
        reason: 'Kişisel seyahat planı',
        status: LeaveStatus.REJECTED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-12T10:00:00Z',
        createdAt: '2024-12-10T11:00:00Z'
      },
      {
        id: 'leave-7',
        employeeId: 'emp-9',
        employeeName: 'Emre Şahin',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-02-10',
        endDate: '2025-02-14',
        reason: 'Kayak tatili için izin talebi',
        status: LeaveStatus.PENDING,
        createdAt: '2025-01-05T09:00:00Z'
      },
      {
        id: 'leave-8',
        employeeId: 'emp-11',
        employeeName: 'Özge Arslan',
        leaveType: LeaveType.SICK,
        startDate: '2024-12-10',
        endDate: '2024-12-12',
        reason: 'Grip ve ateş şikayeti',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-09T08:00:00Z',
        createdAt: '2024-12-09T07:30:00Z'
      },
      {
        id: 'leave-9',
        employeeId: 'emp-14',
        employeeName: 'Barış Taş',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-03-15',
        endDate: '2025-03-22',
        reason: 'Yurt dışı tatil planı - İtalya gezisi',
        status: LeaveStatus.PENDING,
        createdAt: '2025-01-10T10:00:00Z'
      },
      {
        id: 'leave-10',
        employeeId: 'emp-16',
        employeeName: 'Cem Yavuz',
        leaveType: LeaveType.EMERGENCY,
        startDate: '2024-12-05',
        endDate: '2024-12-06',
        reason: 'Acil aile işleri',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-12-04T17:00:00Z',
        createdAt: '2024-12-04T16:45:00Z'
      },
      {
        id: 'leave-11',
        employeeId: 'emp-10',
        employeeName: 'Deniz Koç',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-04-23',
        endDate: '2025-04-28',
        reason: '23 Nisan tatili uzatma talebi',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2025-03-15T11:00:00Z',
        createdAt: '2025-03-10T09:00:00Z'
      },
      {
        id: 'leave-12',
        employeeId: 'emp-17',
        employeeName: 'Merve Polat',
        leaveType: LeaveType.SICK,
        startDate: '2024-11-20',
        endDate: '2024-11-21',
        reason: 'Diş ağrısı ve tedavi',
        status: LeaveStatus.APPROVED,
        approvedBy: 'emp-2',
        approvalDate: '2024-11-19T14:00:00Z',
        createdAt: '2024-11-19T13:30:00Z'
      },
      {
        id: 'leave-13',
        employeeId: 'emp-12',
        employeeName: 'Kaan Toprak',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-06-15',
        endDate: '2025-06-29',
        reason: 'Yaz tatili - Ege turu',
        status: LeaveStatus.PENDING,
        createdAt: '2025-04-20T10:00:00Z'
      },
      {
        id: 'leave-14',
        employeeId: 'emp-15',
        employeeName: 'Gamze Kurt',
        leaveType: LeaveType.ANNUAL,
        startDate: '2025-01-20',
        endDate: '2025-01-24',
        reason: 'Kişisel işler ve dinlenme',
        status: LeaveStatus.REJECTED,
        approvedBy: 'emp-2',
        approvalDate: '2025-01-05T09:00:00Z',
        createdAt: '2025-01-03T11:00:00Z'
      },
      {
        id: 'leave-15',
        employeeId: 'emp-18',
        employeeName: 'Tolga Erdoğan',
        leaveType: LeaveType.EMERGENCY,
        startDate: '2024-12-22',
        endDate: '2024-12-23',
        reason: 'Ev tadilatı acil durumu',
        status: LeaveStatus.PENDING,
        createdAt: '2024-12-20T14:00:00Z'
      }
    ];
  }
}

