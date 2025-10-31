import { Badge } from '@workly/shared-ui';
import { mockAnnouncements, getAnnouncementBySlug } from '@/data/mock-announcements';
import { formatDate } from '@workly/shared-utils';
import { Calendar, User, Eye, ArrowLeft, Share2 } from 'lucide-react';
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
      'Şirket Haberleri': 'info',
      'İK Güncelleme': 'success',
      'Politika': 'warning',
      'Etkinlik': 'info',
      'Başarı': 'success',
      'Eğitim': 'info',
      'Sistem': 'danger',
      'Genel': 'default',
    };
    return colors[category] || 'default';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image - Full Width */}
      {announcement.coverImage && (
        <div className="relative h-[500px] w-full overflow-hidden">
          <img
            src={announcement.coverImage}
            alt={announcement.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Back Button Overlay */}
          <div className="absolute top-6 left-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg font-medium shadow-lg"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Duyurulara Dön</span>
            </Link>
          </div>

          {/* Badges Overlay */}
          <div className="absolute top-6 right-6 flex gap-2">
            {announcement.priority === 'Acil' && (
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded shadow-lg">ACİL</span>
            )}
            {announcement.isPinned && (
              <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded shadow-lg">SABİTLENMİŞ</span>
            )}
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-5xl mx-auto">
              <Badge variant={getCategoryColor(announcement.category)} className="mb-4">
                {announcement.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {announcement.title}
              </h1>
              <p className="text-xl text-white/90 mb-4 drop-shadow-lg">
                {announcement.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content - Full Width Container */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Yazar</p>
                <p className="font-semibold">{announcement.authorName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Tarih</p>
                <p className="font-semibold">{formatDate(announcement.publishedAt, 'DD/MM/YYYY')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Eye className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Görüntülenme</p>
                <p className="font-semibold">{announcement.viewCount}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="announcement-content prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: announcement.content }} />
          </div>

          {/* Tags */}
          {announcement.tags && announcement.tags.length > 0 && (
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {announcement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

