import { Injectable, signal } from '@angular/core';
import { Employee, Department, EmployeeStatus } from '@workly/shared-types';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSignal = signal<Employee[]>(this.getMockEmployees());
  
  employees = this.employeesSignal.asReadonly();

  getEmployees(): Employee[] {
    return this.employeesSignal();
  }

  getEmployeeById(id: string): Employee | undefined {
    return this.employeesSignal().find(emp => emp.id === id);
  }

  addEmployee(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = {
      ...employee,
      id: `emp-${Date.now()}`
    };
    this.employeesSignal.update(employees => [...employees, newEmployee]);
    return newEmployee;
  }

  updateEmployee(id: string, updates: Partial<Employee>): void {
    this.employeesSignal.update(employees =>
      employees.map(emp => emp.id === id ? { ...emp, ...updates } : emp)
    );
  }

  deleteEmployee(id: string): void {
    this.employeesSignal.update(employees =>
      employees.filter(emp => emp.id !== id)
    );
  }

  private getMockEmployees(): Employee[] {
    return [
      {
        id: 'emp-1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@workly.com',
        phone: '+1 (555) 123-4567',
        position: 'Senior Software Engineer',
        department: Department.ENGINEERING,
        startDate: '2022-01-15',
        salary: 95000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=12',
        skills: ['TypeScript', 'Angular', 'React', 'Node.js'],
        performanceScore: 4.5
      },
      {
        id: 'emp-2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@workly.com',
        phone: '+1 (555) 234-5678',
        position: 'HR Manager',
        department: Department.HR,
        startDate: '2021-06-01',
        salary: 75000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=5',
        skills: ['Recruitment', 'Employee Relations', 'Performance Management'],
        performanceScore: 4.8
      },
      {
        id: 'emp-3',
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.j@workly.com',
        phone: '+1 (555) 345-6789',
        position: 'Marketing Specialist',
        department: Department.MARKETING,
        startDate: '2023-03-10',
        salary: 62000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=8',
        skills: ['Digital Marketing', 'SEO', 'Content Strategy'],
        performanceScore: 4.2
      },
      {
        id: 'emp-4',
        firstName: 'Sarah',
        lastName: 'Williams',
        email: 'sarah.w@workly.com',
        phone: '+1 (555) 456-7890',
        position: 'Sales Director',
        department: Department.SALES,
        startDate: '2020-09-01',
        salary: 110000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=1',
        skills: ['Sales Strategy', 'Team Leadership', 'Negotiation'],
        performanceScore: 4.9
      },
      {
        id: 'emp-5',
        firstName: 'David',
        lastName: 'Brown',
        email: 'david.b@workly.com',
        phone: '+1 (555) 567-8901',
        position: 'Financial Analyst',
        department: Department.FINANCE,
        startDate: '2022-11-15',
        salary: 68000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=3',
        skills: ['Financial Modeling', 'Data Analysis', 'Excel'],
        performanceScore: 4.3
      },
      {
        id: 'emp-6',
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily.d@workly.com',
        phone: '+1 (555) 678-9012',
        position: 'Product Manager',
        department: Department.OPERATIONS,
        startDate: '2021-04-20',
        salary: 85000,
        status: EmployeeStatus.ON_LEAVE,
        avatar: 'https://i.pravatar.cc/150?img=9',
        skills: ['Product Strategy', 'Agile', 'User Research'],
        performanceScore: 4.6
      },
      {
        id: 'emp-7',
        firstName: 'Robert',
        lastName: 'Miller',
        email: 'robert.m@workly.com',
        phone: '+1 (555) 789-0123',
        position: 'IT Support Specialist',
        department: Department.IT,
        startDate: '2023-01-10',
        salary: 55000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=13',
        skills: ['Network Administration', 'Hardware Support', 'Help Desk'],
        performanceScore: 4.0
      },
      {
        id: 'emp-8',
        firstName: 'Lisa',
        lastName: 'Anderson',
        email: 'lisa.a@workly.com',
        phone: '+1 (555) 890-1234',
        position: 'Customer Success Manager',
        department: Department.CUSTOMER_SERVICE,
        startDate: '2022-08-01',
        salary: 70000,
        status: EmployeeStatus.ACTIVE,
        avatar: 'https://i.pravatar.cc/150?img=10',
        skills: ['Customer Relations', 'CRM Software', 'Team Management'],
        performanceScore: 4.7
      }
    ];
  }
}

