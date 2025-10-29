import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./components/employee-list/employee-list.component').then(
        (m) => m.EmployeeListComponent
      )
  },
  {
    path: 'employees/new',
    loadComponent: () =>
      import('./components/employee-form/employee-form.component').then(
        (m) => m.EmployeeFormComponent
      )
  },
  {
    path: 'employees/:id',
    loadComponent: () =>
      import('./components/employee-detail/employee-detail.component').then(
        (m) => m.EmployeeDetailComponent
      )
  },
  {
    path: 'employees/:id/edit',
    loadComponent: () =>
      import('./components/employee-form/employee-form.component').then(
        (m) => m.EmployeeFormComponent
      )
  },
  {
    path: 'leaves',
    loadComponent: () =>
      import('./components/leave-list/leave-list.component').then(
        (m) => m.LeaveListComponent
      )
  },
  {
    path: 'leaves/new',
    loadComponent: () =>
      import('./components/leave-form/leave-form.component').then(
        (m) => m.LeaveFormComponent
      )
  }
];

