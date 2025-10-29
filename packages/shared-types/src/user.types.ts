export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatar?: string;
  role: UserRole;
  permissions: Permission[];
  department?: string;
  position?: string;
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  preferences?: UserPreferences;
}

export enum UserRole {
  SUPER_ADMIN = 'Super Admin',
  ADMIN = 'Admin',
  HR_MANAGER = 'HR Manager',
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee',
  VIEWER = 'Viewer',
}

export enum Permission {
  // Employee Management
  VIEW_EMPLOYEES = 'view:employees',
  CREATE_EMPLOYEE = 'create:employee',
  EDIT_EMPLOYEE = 'edit:employee',
  DELETE_EMPLOYEE = 'delete:employee',
  
  // Leave Management
  VIEW_LEAVES = 'view:leaves',
  APPROVE_LEAVE = 'approve:leave',
  REJECT_LEAVE = 'reject:leave',
  
  // Task Management
  VIEW_TASKS = 'view:tasks',
  CREATE_TASK = 'create:task',
  EDIT_TASK = 'edit:task',
  DELETE_TASK = 'delete:task',
  ASSIGN_TASK = 'assign:task',
  
  // Performance
  VIEW_PERFORMANCE = 'view:performance',
  CONDUCT_REVIEW = 'conduct:review',
  VIEW_ALL_REVIEWS = 'view:all-reviews',
  
  // Announcements
  VIEW_ANNOUNCEMENTS = 'view:announcements',
  CREATE_ANNOUNCEMENT = 'create:announcement',
  EDIT_ANNOUNCEMENT = 'edit:announcement',
  DELETE_ANNOUNCEMENT = 'delete:announcement',
  
  // System
  MANAGE_USERS = 'manage:users',
  MANAGE_SETTINGS = 'manage:settings',
  VIEW_ANALYTICS = 'view:analytics',
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: NotificationPreferences;
  dashboard: DashboardPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  taskAssigned: boolean;
  taskDue: boolean;
  leaveApproval: boolean;
  announcements: boolean;
}

export interface DashboardPreferences {
  defaultView: string;
  widgets: string[];
  compactMode: boolean;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: AuthToken;
}

