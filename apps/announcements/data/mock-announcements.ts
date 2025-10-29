import { Announcement, AnnouncementCategory, AnnouncementPriority } from '@workly/shared-types';

export const mockAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Company Holiday Schedule for December 2024',
    summary: 'Important updates regarding office closures and holiday schedules for the upcoming festive season.',
    content: `
      <h2>Holiday Schedule</h2>
      <p>Dear Team,</p>
      <p>As we approach the holiday season, we wanted to share the company holiday schedule for December 2024:</p>
      <ul>
        <li><strong>December 24-26:</strong> Christmas Holiday - Office Closed</li>
        <li><strong>December 31 - January 1:</strong> New Year Holiday - Office Closed</li>
      </ul>
      <p>Please plan your work accordingly and ensure all critical tasks are completed before the holidays.</p>
      <p>Happy Holidays!</p>
    `,
    category: AnnouncementCategory.HR_UPDATE,
    priority: AnnouncementPriority.HIGH,
    author: 'admin-1',
    authorName: 'HR Department',
    publishedAt: '2024-12-01T09:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800',
    tags: ['holiday', 'schedule', 'important'],
    departments: [],
    viewCount: 248,
    slug: 'company-holiday-schedule-december-2024',
    createdAt: '2024-11-28T10:00:00Z',
    updatedAt: '2024-12-01T09:00:00Z',
  },
  {
    id: 'ann-2',
    title: 'New Remote Work Policy',
    summary: 'Updated guidelines for remote work and hybrid arrangements effective January 2025.',
    content: `
      <h2>Remote Work Policy Update</h2>
      <p>Effective January 1, 2025, we are implementing a new remote work policy to better support work-life balance.</p>
      <h3>Key Changes:</h3>
      <ul>
        <li>Employees can work remotely up to 3 days per week</li>
        <li>Core hours: 10 AM - 3 PM (must be available)</li>
        <li>Monthly in-office team meetings required</li>
      </ul>
      <p>Please review the full policy document in the employee portal.</p>
    `,
    category: AnnouncementCategory.POLICY,
    priority: AnnouncementPriority.URGENT,
    author: 'admin-1',
    authorName: 'HR Department',
    publishedAt: '2024-12-05T10:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
    tags: ['policy', 'remote-work', 'hybrid'],
    departments: [],
    viewCount: 312,
    slug: 'new-remote-work-policy',
    createdAt: '2024-12-03T14:00:00Z',
    updatedAt: '2024-12-05T10:00:00Z',
  },
  {
    id: 'ann-3',
    title: 'Q4 2024 Town Hall Meeting',
    summary: 'Join us for the quarterly town hall to discuss company performance and future plans.',
    content: `
      <h2>Q4 Town Hall Meeting</h2>
      <p>You are invited to our quarterly town hall meeting!</p>
      <p><strong>Date:</strong> December 15, 2024<br>
      <strong>Time:</strong> 2:00 PM - 3:30 PM<br>
      <strong>Location:</strong> Main Conference Room / Zoom</p>
      <h3>Agenda:</h3>
      <ul>
        <li>Q4 Performance Review</li>
        <li>2025 Strategic Goals</li>
        <li>Team Recognition</li>
        <li>Q&A Session</li>
      </ul>
    `,
    category: AnnouncementCategory.EVENT,
    priority: AnnouncementPriority.NORMAL,
    author: 'ceo-1',
    authorName: 'John CEO',
    publishedAt: '2024-12-08T11:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    tags: ['event', 'town-hall', 'meeting'],
    departments: [],
    viewCount: 189,
    slug: 'q4-2024-town-hall-meeting',
    createdAt: '2024-12-06T09:00:00Z',
    updatedAt: '2024-12-08T11:00:00Z',
  },
  {
    id: 'ann-4',
    title: 'Employee of the Month - November 2024',
    summary: 'Congratulations to Sarah Johnson for outstanding performance and dedication!',
    content: `
      <h2>Employee of the Month: Sarah Johnson</h2>
      <p>We are thrilled to announce Sarah Johnson from the Engineering team as our Employee of the Month for November 2024!</p>
      <p>Sarah has demonstrated exceptional leadership in the Website Redesign project, consistently going above and beyond to ensure project success.</p>
      <h3>Achievements:</h3>
      <ul>
        <li>Led successful migration to new tech stack</li>
        <li>Mentored 3 junior developers</li>
        <li>Improved deployment efficiency by 40%</li>
      </ul>
      <p>Congratulations, Sarah! Your hard work and dedication are truly appreciated.</p>
    `,
    category: AnnouncementCategory.ACHIEVEMENT,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'HR Team',
    publishedAt: '2024-12-02T13:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    tags: ['recognition', 'employee-of-month'],
    departments: [],
    viewCount: 156,
    slug: 'employee-of-the-month-november-2024',
    createdAt: '2024-12-01T15:00:00Z',
    updatedAt: '2024-12-02T13:00:00Z',
  },
  {
    id: 'ann-5',
    title: 'System Maintenance Scheduled',
    summary: 'Planned system maintenance on December 14, 2024. Expect brief service interruptions.',
    content: `
      <h2>Scheduled System Maintenance</h2>
      <p>Our IT team will be performing essential system maintenance and upgrades.</p>
      <p><strong>Date:</strong> December 14, 2024<br>
      <strong>Time:</strong> 12:00 AM - 4:00 AM EST<br>
      <strong>Duration:</strong> Approximately 4 hours</p>
      <h3>Affected Services:</h3>
      <ul>
        <li>Email System</li>
        <li>Employee Portal</li>
        <li>Internal Applications</li>
      </ul>
      <p>Please save your work and log out before midnight. We apologize for any inconvenience.</p>
    `,
    category: AnnouncementCategory.SYSTEM,
    priority: AnnouncementPriority.HIGH,
    author: 'it-1',
    authorName: 'IT Department',
    publishedAt: '2024-12-10T16:00:00Z',
    expiresAt: '2024-12-15T00:00:00Z',
    isPinned: true,
    isPublished: true,
    tags: ['system', 'maintenance', 'downtime'],
    departments: [],
    viewCount: 201,
    slug: 'system-maintenance-december-2024',
    createdAt: '2024-12-09T10:00:00Z',
    updatedAt: '2024-12-10T16:00:00Z',
  },
  {
    id: 'ann-6',
    title: 'Wellness Program Launch',
    summary: 'Introducing our new employee wellness program with exciting benefits and activities.',
    content: `
      <h2>New Wellness Program</h2>
      <p>We are excited to launch our comprehensive employee wellness program starting January 2025!</p>
      <h3>Program Benefits:</h3>
      <ul>
        <li>Free gym membership</li>
        <li>Mental health counseling sessions</li>
        <li>Yoga and meditation classes</li>
        <li>Nutrition consultations</li>
        <li>Health screening</li>
      </ul>
      <p>Sign up through the employee portal by December 20th to take advantage of these benefits!</p>
    `,
    category: AnnouncementCategory.HR_UPDATE,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'HR Team',
    publishedAt: '2024-12-07T14:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    tags: ['wellness', 'benefits', 'health'],
    departments: [],
    viewCount: 134,
    slug: 'wellness-program-launch',
    createdAt: '2024-12-06T11:00:00Z',
    updatedAt: '2024-12-07T14:00:00Z',
  },
];

export function getAnnouncementBySlug(slug: string): Announcement | undefined {
  return mockAnnouncements.find((ann) => ann.slug === slug);
}

export function getPinnedAnnouncements(): Announcement[] {
  return mockAnnouncements.filter((ann) => ann.isPinned);
}

export function getAnnouncementsByCategory(category: AnnouncementCategory): Announcement[] {
  return mockAnnouncements.filter((ann) => ann.category === category);
}

