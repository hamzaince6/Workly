export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
  meta?: PaginationMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  statusCode: number;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  filters?: Record<string, any>;
}

export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
  icon?: string;
  color?: string;
}

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  count?: number;
  disabled?: boolean;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
  badge?: string | number;
  disabled?: boolean;
  permissions?: string[];
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: string;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
}

export interface StatCard {
  id: string;
  title: string;
  value: string | number;
  icon?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
    positive?: boolean;
  };
  color?: string;
  change?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  timestamp: string;
  action?: NotificationAction;
  icon?: string;
  avatar?: string;
}

export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  TASK = 'task',
  ANNOUNCEMENT = 'announcement',
  LEAVE = 'leave',
  PERFORMANCE = 'performance',
}

export interface NotificationAction {
  label: string;
  url: string;
}

export interface FilterConfig {
  field: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'dateRange' | 'number';
  options?: SelectOption[];
  placeholder?: string;
}

export interface SortConfig {
  field: string;
  direction: 'asc' | 'desc';
}

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en' | 'tr';
export type Status = 'idle' | 'loading' | 'success' | 'error';

