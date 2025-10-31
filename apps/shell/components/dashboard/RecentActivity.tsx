'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@workly/shared-ui';
import { Users, CheckSquare, Calendar, Megaphone, LucideIcon, ArrowRight } from 'lucide-react';

interface Activity {
  id: number;
  type: string;
  message: string;
  time: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  user?: string;
}

export function RecentActivity() {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'employee',
      message: 'Mühendislik departmanına eklendi',
      time: '2 saat önce',
      user: 'Ahmet Yılmaz',
      icon: Users,
      iconColor: 'text-teal-600',
      iconBgColor: 'bg-teal-50',
    },
    {
      id: 2,
      type: 'task',
      message: 'görevi tamamlandı',
      time: '4 saat önce',
      user: 'Dashboard UI Güncellemesi',
      icon: CheckSquare,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-50',
    },
    {
      id: 3,
      type: 'leave',
      message: 'izin talebi onaylandı',
      time: '5 saat önce',
      user: 'Ayşe Demir\'in',
      icon: Calendar,
      iconColor: 'text-blue-600',
      iconBgColor: 'bg-blue-50',
    },
    {
      id: 4,
      type: 'announcement',
      message: 'duyurusu yayınlandı',
      time: '1 gün önce',
      user: 'Yeni şirket politikası',
      icon: Megaphone,
      iconColor: 'text-purple-600',
      iconBgColor: 'bg-purple-50',
    },
    {
      id: 5,
      type: 'task',
      message: 'görevi oluşturuldu',
      time: '1 gün önce',
      user: 'Müşteri Raporları',
      icon: CheckSquare,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-50',
    },
    {
      id: 6,
      type: 'employee',
      message: 'İK departmanına transfer oldu',
      time: '2 gün önce',
      user: 'Mehmet Kaya',
      icon: Users,
      iconColor: 'text-teal-600',
      iconBgColor: 'bg-teal-50',
    },
    {
      id: 7,
      type: 'leave',
      message: 'izin talebi reddedildi',
      time: '2 gün önce',
      user: 'Fatma Çelik\'in',
      icon: Calendar,
      iconColor: 'text-blue-600',
      iconBgColor: 'bg-blue-50',
    },
    {
      id: 8,
      type: 'task',
      message: 'görevi ertelendi',
      time: '3 gün önce',
      user: 'API Entegrasyonu',
      icon: CheckSquare,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-50',
    },
  ];

  return (
    <Card variant="default" className="h-full flex flex-col border border-gray-200">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex items-center justify-between">
          <span>Son Aktiviteler</span>
          <button className="flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors group">
            Tümünü Gör
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-scroll pr-2 scrollbar-visible">
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer ${
                  index !== activities.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {/* Icon with animated background */}
                <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl ${activity.iconBgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
                  {/* Pulse animation for recent activities */}
                  {index === 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 leading-relaxed">
                    <span className="font-semibold">{activity.user}</span>
                    {' '}
                    <span className="text-gray-600">{activity.message}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs text-gray-500">{activity.time}</span>
                    {/* Activity type badge */}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${activity.iconBgColor} ${activity.iconColor} font-medium`}>
                      {activity.type === 'employee' && 'Çalışan'}
                      {activity.type === 'task' && 'Görev'}
                      {activity.type === 'leave' && 'İzin'}
                      {activity.type === 'announcement' && 'Duyuru'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

