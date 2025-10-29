export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: string;
  assigneeName?: string;
  assigneeAvatar?: string;
  reporter: string;
  reporterName: string;
  dueDate?: string;
  startDate?: string;
  estimatedHours?: number;
  actualHours?: number;
  tags?: string[];
  attachments?: Attachment[];
  comments?: Comment[];
  projectId?: string;
  createdAt: string;
  updatedAt: string;
}

export enum TaskStatus {
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  IN_REVIEW = 'In Review',
  BLOCKED = 'Blocked',
  DONE = 'Done',
  CANCELLED = 'Cancelled',
}

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  URGENT = 'Urgent',
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  manager: string;
  managerName: string;
  team: string[];
  progress: number;
  budget?: number;
  color?: string;
  icon?: string;
}

export enum ProjectStatus {
  PLANNING = 'Planning',
  ACTIVE = 'Active',
  ON_HOLD = 'On Hold',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
  uploadedBy: string;
}

export interface Comment {
  id: string;
  taskId: string;
  author: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  mentions?: string[];
}

export interface TaskActivity {
  id: string;
  taskId: string;
  userId: string;
  userName: string;
  action: TaskActivityAction;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export enum TaskActivityAction {
  CREATED = 'Created',
  UPDATED = 'Updated',
  STATUS_CHANGED = 'Status Changed',
  ASSIGNED = 'Assigned',
  COMMENTED = 'Commented',
  ATTACHMENT_ADDED = 'Attachment Added',
  DUE_DATE_CHANGED = 'Due Date Changed',
}

