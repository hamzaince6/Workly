/**
 * Centralized event names for type safety
 */
export const WorklyEvents = {
  // Navigation Events
  NAVIGATE: 'workly:navigate',
  ROUTE_CHANGE: 'workly:route-change',

  // User Events
  USER_LOGIN: 'workly:user-login',
  USER_LOGOUT: 'workly:user-logout',
  USER_UPDATED: 'workly:user-updated',

  // Employee Events
  EMPLOYEE_CREATED: 'workly:employee-created',
  EMPLOYEE_UPDATED: 'workly:employee-updated',
  EMPLOYEE_DELETED: 'workly:employee-deleted',
  EMPLOYEE_SELECTED: 'workly:employee-selected',

  // Leave Events
  LEAVE_REQUESTED: 'workly:leave-requested',
  LEAVE_APPROVED: 'workly:leave-approved',
  LEAVE_REJECTED: 'workly:leave-rejected',

  // Task Events
  TASK_CREATED: 'workly:task-created',
  TASK_UPDATED: 'workly:task-updated',
  TASK_DELETED: 'workly:task-deleted',
  TASK_ASSIGNED: 'workly:task-assigned',
  TASK_STATUS_CHANGED: 'workly:task-status-changed',
  TASK_COMMENT_ADDED: 'workly:task-comment-added',

  // Announcement Events
  ANNOUNCEMENT_PUBLISHED: 'workly:announcement-published',
  ANNOUNCEMENT_UPDATED: 'workly:announcement-updated',
  ANNOUNCEMENT_DELETED: 'workly:announcement-deleted',

  // Performance Events
  REVIEW_CREATED: 'workly:review-created',
  REVIEW_UPDATED: 'workly:review-updated',
  REVIEW_COMPLETED: 'workly:review-completed',

  // Notification Events
  NOTIFICATION_RECEIVED: 'workly:notification-received',
  NOTIFICATION_READ: 'workly:notification-read',
  NOTIFICATION_CLEARED: 'workly:notification-cleared',

  // UI Events
  MODAL_OPEN: 'workly:modal-open',
  MODAL_CLOSE: 'workly:modal-close',
  SIDEBAR_TOGGLE: 'workly:sidebar-toggle',
  THEME_CHANGED: 'workly:theme-changed',
  LANGUAGE_CHANGED: 'workly:language-changed',

  // Data Events
  DATA_REFRESH: 'workly:data-refresh',
  CACHE_CLEAR: 'workly:cache-clear',

  // Error Events
  ERROR: 'workly:error',
  API_ERROR: 'workly:api-error',
  VALIDATION_ERROR: 'workly:validation-error',
} as const;

/**
 * Event payload types
 */
export interface WorklyEventPayloads {
  [WorklyEvents.NAVIGATE]: { path: string; data?: any };
  [WorklyEvents.ROUTE_CHANGE]: { from: string; to: string };
  
  [WorklyEvents.USER_LOGIN]: { userId: string; email: string };
  [WorklyEvents.USER_LOGOUT]: { userId: string };
  [WorklyEvents.USER_UPDATED]: { userId: string; changes: any };
  
  [WorklyEvents.EMPLOYEE_CREATED]: { employeeId: string };
  [WorklyEvents.EMPLOYEE_UPDATED]: { employeeId: string; changes: any };
  [WorklyEvents.EMPLOYEE_DELETED]: { employeeId: string };
  [WorklyEvents.EMPLOYEE_SELECTED]: { employeeId: string };
  
  [WorklyEvents.TASK_CREATED]: { taskId: string };
  [WorklyEvents.TASK_UPDATED]: { taskId: string; changes: any };
  [WorklyEvents.TASK_DELETED]: { taskId: string };
  [WorklyEvents.TASK_ASSIGNED]: { taskId: string; assigneeId: string };
  [WorklyEvents.TASK_STATUS_CHANGED]: { taskId: string; oldStatus: string; newStatus: string };
  
  [WorklyEvents.NOTIFICATION_RECEIVED]: { notificationId: string; type: string; message: string };
  
  [WorklyEvents.THEME_CHANGED]: { theme: 'light' | 'dark' | 'system' };
  [WorklyEvents.LANGUAGE_CHANGED]: { language: string };
  
  [WorklyEvents.ERROR]: { message: string; code?: string; details?: any };
}

