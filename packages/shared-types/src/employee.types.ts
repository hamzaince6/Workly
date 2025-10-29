export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: Department;
  startDate: string;
  salary: number;
  status: EmployeeStatus;
  avatar?: string;
  address?: Address;
  emergencyContact?: EmergencyContact;
  skills?: string[];
  performanceScore?: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export enum Department {
  ENGINEERING = 'Engineering',
  HR = 'Human Resources',
  SALES = 'Sales',
  MARKETING = 'Marketing',
  FINANCE = 'Finance',
  OPERATIONS = 'Operations',
  IT = 'IT',
  CUSTOMER_SERVICE = 'Customer Service',
}

export enum EmployeeStatus {
  ACTIVE = 'Active',
  ON_LEAVE = 'On Leave',
  TERMINATED = 'Terminated',
  SUSPENDED = 'Suspended',
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
  approvedBy?: string;
  approvalDate?: string;
  createdAt: string;
}

export enum LeaveType {
  ANNUAL = 'Annual Leave',
  SICK = 'Sick Leave',
  MATERNITY = 'Maternity Leave',
  PATERNITY = 'Paternity Leave',
  UNPAID = 'Unpaid Leave',
  EMERGENCY = 'Emergency Leave',
}

export enum LeaveStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  CANCELLED = 'Cancelled',
}

export interface Attendance {
  id: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut?: string;
  status: AttendanceStatus;
  workHours?: number;
  notes?: string;
}

export enum AttendanceStatus {
  PRESENT = 'Present',
  ABSENT = 'Absent',
  LATE = 'Late',
  HALF_DAY = 'Half Day',
  WORK_FROM_HOME = 'Work From Home',
}

