'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@workly/shared-ui';
import { 
  Users, 
  CheckSquare, 
  Megaphone, 
  TrendingUp,
  Clock,
  AlertCircle,
  Calendar,
  Award
} from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Toplam Çalışan',
      value: '248',
      icon: Users,
      trend: '+12%',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Aktif Görevler',
      value: '64',
      icon: CheckSquare,
      trend: '+8%',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Bekleyen İzinler',
      value: '12',
      icon: Clock,
      trend: '-3%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Duyurular',
      value: '8',
      icon: Megaphone,
      trend: '+2',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'employee',
      message: 'Yeni çalışan Ahmet Yılmaz Mühendislik departmanına eklendi',
      time: '2 saat önce',
      icon: Users,
    },
    {
      id: 2,
      type: 'task',
      message: '"Dashboard UI Güncellemesi" görevi tamamlandı',
      time: '4 saat önce',
      icon: CheckSquare,
    },
    {
      id: 3,
      type: 'leave',
      message: 'Ayşe Demir\'in izin talebi onaylandı',
      time: '5 saat önce',
      icon: Calendar,
    },
    {
      id: 4,
      type: 'announcement',
      message: 'Yeni şirket politikası duyurusu yayınlandı',
      time: '1 gün önce',
      icon: Megaphone,
    },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Q4 Performans Değerlendirmeleri', dueDate: '15 Aralık 2024', priority: 'Yüksek' },
    { id: 2, title: 'Çalışan El Kitabı Güncellemesi', dueDate: '20 Aralık 2024', priority: 'Orta' },
    { id: 3, title: 'Takım Oluşturma Etkinliği Planlaması', dueDate: '25 Aralık 2024', priority: 'Düşük' },
  ];

  return (
    <div className="space-y-6 p-6 overflow-y-auto h-full">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Hoş geldiniz! Bugün neler oluyor?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.trend} geçen aya göre</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Son Aktiviteler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <activity.icon className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Yaklaşan Son Tarihler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.dueDate}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      task.priority === 'Yüksek'
                        ? 'bg-red-100 text-red-800'
                        : task.priority === 'Orta'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Hızlı İşlemler</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors">
              <Users className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Çalışan Ekle</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors">
              <CheckSquare className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Görev Oluştur</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors">
              <Megaphone className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Duyuru Yayınla</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50 transition-colors">
              <Award className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Performans İncele</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

