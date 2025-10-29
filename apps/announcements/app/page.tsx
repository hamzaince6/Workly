import { Card, CardContent, CardHeader, CardTitle, Badge, Avatar } from '@workly/shared-ui';
import { mockAnnouncements, getPinnedAnnouncements } from '@/data/mock-announcements';
import { formatRelativeTime } from '@workly/shared-utils';
import { Pin, Eye, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export default function AnnouncementsPage() {
  const pinnedAnnouncements = getPinnedAnnouncements();
  const regularAnnouncements = mockAnnouncements.filter((ann) => !ann.isPinned);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, 'default' | 'success' | 'warning' | 'danger' | 'info'> = {
      'Company News': 'info',
      'HR Update': 'success',
      'Policy': 'warning',
      'Event': 'info',
      'Achievement': 'success',
      'Training': 'info',
      'System': 'danger',
      'General': 'default',
    };
    return colors[category] || 'default';
  };

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
        <p className="text-gray-600 mt-1">Stay updated with the latest company news and updates</p>
      </div>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Pin className="h-5 w-5 text-yellow-600" />
            <h2 className="text-xl font-semibold text-gray-900">Pinned Announcements</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pinnedAnnouncements.map((announcement) => (
              <Link key={announcement.id} href={`/announcement/${announcement.slug}`}>
                <Card variant="elevated" className="h-full cursor-pointer hover:shadow-xl transition-shadow">
                  {announcement.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={announcement.coverImage}
                        alt={announcement.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant={announcement.priority === 'Urgent' ? 'danger' : 'warning'}>
                          {announcement.priority}
                        </Badge>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                      {announcement.tags?.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{announcement.title}</h3>
                    <p className="text-gray-600 mb-4">{announcement.summary}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{announcement.authorName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{announcement.viewCount}</span>
                        </div>
                      </div>
                      <span>{formatRelativeTime(announcement.publishedAt)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Announcements */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">All Announcements</h2>
        <div className="space-y-4">
          {regularAnnouncements.map((announcement) => (
            <Link key={announcement.id} href={`/announcement/${announcement.slug}`}>
              <Card variant="bordered" className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {announcement.coverImage && (
                      <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={announcement.coverImage}
                          alt={announcement.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant={getCategoryColor(announcement.category)}>
                            {announcement.category}
                          </Badge>
                          {announcement.priority === 'Urgent' && (
                            <Badge variant="danger">{announcement.priority}</Badge>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatRelativeTime(announcement.publishedAt)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                      <p className="text-gray-600 mb-3 line-clamp-2">{announcement.summary}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{announcement.authorName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{announcement.viewCount} views</span>
                        </div>
                        {announcement.tags && announcement.tags.length > 0 && (
                          <div className="flex gap-1">
                            {announcement.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

