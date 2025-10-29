export interface Announcement {
  id: string;
  title: string;
  content: string;
  summary: string;
  category: AnnouncementCategory;
  priority: AnnouncementPriority;
  author: string;
  authorName: string;
  authorAvatar?: string;
  publishedAt: string;
  expiresAt?: string;
  isPinned: boolean;
  isPublished: boolean;
  coverImage?: string;
  tags?: string[];
  departments?: string[];
  viewCount?: number;
  reactions?: AnnouncementReaction[];
  attachments?: AnnouncementAttachment[];
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export enum AnnouncementCategory {
  COMPANY_NEWS = 'Company News',
  HR_UPDATE = 'HR Update',
  POLICY = 'Policy',
  EVENT = 'Event',
  ACHIEVEMENT = 'Achievement',
  TRAINING = 'Training',
  SYSTEM = 'System',
  GENERAL = 'General',
}

export enum AnnouncementPriority {
  LOW = 'Low',
  NORMAL = 'Normal',
  HIGH = 'High',
  URGENT = 'Urgent',
}

export interface AnnouncementReaction {
  type: ReactionType;
  count: number;
  users: string[];
}

export enum ReactionType {
  LIKE = 'like',
  LOVE = 'love',
  CELEBRATE = 'celebrate',
  INSIGHTFUL = 'insightful',
}

export interface AnnouncementAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

export interface AnnouncementComment {
  id: string;
  announcementId: string;
  author: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  replies?: AnnouncementComment[];
}

