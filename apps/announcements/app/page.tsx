'use client';

import { useState } from 'react';
import { Badge } from '@workly/shared-ui';
import { mockAnnouncements, getPinnedAnnouncements } from '@/data/mock-announcements';
import { formatRelativeTime } from '@workly/shared-utils';
import { Pin, Eye, User, Megaphone, Search } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const pinnedAnnouncements = getPinnedAnnouncements();
  const regularAnnouncements = mockAnnouncements.filter((ann) => !ann.isPinned);

  const filteredRegularAnnouncements = regularAnnouncements.filter(ann =>
    searchQuery
      ? ann.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ann.summary.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  // Sabitlenmiş duyuruları 2'şerli gruplara ayır
  const groupedPinnedAnnouncements: typeof pinnedAnnouncements[] = [];
  for (let i = 0; i < pinnedAnnouncements.length; i += 2) {
    groupedPinnedAnnouncements.push(pinnedAnnouncements.slice(i, i + 2));
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
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center shadow-lg">
            <Megaphone className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Duyurular</h1>
            <p className="text-gray-600 mt-1">Şirket haberleri ve güncellemelerinden haberdar olun</p>
          </div>
        </div>
      </div>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <Pin className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Sabitlenmiş Duyurular</h2>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pinned-announcements-swiper pb-12"
          >
            {groupedPinnedAnnouncements.map((group, groupIndex) => (
              <SwiperSlide key={groupIndex}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {group.map((announcement) => (
                    <Link key={announcement.id} href={`/announcement/${announcement.slug}`}>
                      <div className="announcement-card bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
                        {announcement.coverImage && (
                          <div className="relative h-48 w-full overflow-hidden">
                            <img
                              src={announcement.coverImage}
                              alt={announcement.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3">
                              {announcement.priority === 'Acil' && (
                                <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded">ACİL</span>
                              )}
                            </div>
                          </div>
                        )}
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant={getCategoryColor(announcement.category)}>
                              {announcement.category}
                            </Badge>
                            {announcement.tags && announcement.tags.length > 0 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                                {announcement.tags[0]}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-base font-bold text-gray-900 mb-2">{announcement.title}</h3>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{announcement.summary}</p>

                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <User className="h-3.5 w-3.5" />
                                <span>{announcement.authorName}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" />
                                <span>{announcement.viewCount}</span>
                              </div>
                            </div>
                            <span>{formatRelativeTime(announcement.publishedAt)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* All Announcements */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-5">Tüm Duyurular</h2>
        {filteredRegularAnnouncements.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <Megaphone className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">Duyuru bulunamadı</p>
            <p className="text-gray-400 text-sm mt-1">Arama kriterlerinizi değiştirmeyi deneyin</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRegularAnnouncements.map((announcement) => (
              <Link key={announcement.id} href={`/announcement/${announcement.slug}`}>
                <div className="announcement-card bg-white rounded-lg border border-gray-200 overflow-hidden h-full">
                  {announcement.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={announcement.coverImage}
                        alt={announcement.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        {announcement.priority === 'Acil' && (
                          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded">ACİL</span>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                      {announcement.tags && announcement.tags.length > 0 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {announcement.tags[0]}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base font-bold text-gray-900 mb-2">{announcement.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{announcement.summary}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5" />
                          <span>{announcement.authorName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{announcement.viewCount}</span>
                        </div>
                      </div>
                      <span>{formatRelativeTime(announcement.publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

