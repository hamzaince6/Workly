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
  COMPANY_NEWS = 'Şirket Haberleri',
  HR_UPDATE = 'İK Güncelleme',
  POLICY = 'Politika',
  EVENT = 'Etkinlik',
  ACHIEVEMENT = 'Başarı',
  TRAINING = 'Eğitim',
  SYSTEM = 'Sistem',
  GENERAL = 'Genel',
}

export enum AnnouncementPriority {
  LOW = 'Düşük',
  NORMAL = 'Normal',
  HIGH = 'Yüksek',
  URGENT = 'Acil',
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

