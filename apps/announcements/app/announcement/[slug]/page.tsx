import { Card, CardContent, Badge, Avatar } from '@workly/shared-ui';
import { mockAnnouncements, getAnnouncementBySlug } from '@/data/mock-announcements';
import { formatDate } from '@workly/shared-utils';
import { Calendar, User, Eye, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return mockAnnouncements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

export default function AnnouncementDetailPage({ params }: { params: { slug: string } }) {
  const announcement = getAnnouncementBySlug(params.slug);

  if (!announcement) {
    notFound();
  }

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
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Announcements</span>
      </Link>

      <Card variant="elevated">
        {/* Cover Image */}
        {announcement.coverImage && (
          <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
            <img
              src={announcement.coverImage}
              alt={announcement.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <CardContent className="p-8">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            <Badge variant={getCategoryColor(announcement.category)}>
              {announcement.category}
            </Badge>
            {announcement.priority === 'Urgent' && (
              <Badge variant="danger">{announcement.priority}</Badge>
            )}
            {announcement.isPinned && (
              <Badge variant="warning">Pinned</Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{announcement.title}</h1>

          {/* Summary */}
          <p className="text-lg text-gray-600 mb-6 pb-6 border-b border-gray-200">
            {announcement.summary}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{announcement.authorName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(announcement.publishedAt, 'DD/MM/YYYY')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{announcement.viewCount} views</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="announcement-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: announcement.content }}
          />

          {/* Tags */}
          {announcement.tags && announcement.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {announcement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Related Announcements */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockAnnouncements
            .filter((ann) => ann.id !== announcement.id && ann.category === announcement.category)
            .slice(0, 2)
            .map((relatedAnn) => (
              <Link key={relatedAnn.id} href={`/announcement/${relatedAnn.slug}`}>
                <Card variant="bordered" className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Badge variant={getCategoryColor(relatedAnn.category)} size="sm" className="mb-2">
                      {relatedAnn.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedAnn.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedAnn.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

