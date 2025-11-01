'use client';

import { Users, CheckSquare, Megaphone, Clock } from 'lucide-react';
import { WelcomeCard } from '@/components/dashboard/WelcomeCard';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { EmployeeGrowthChart } from '@/components/dashboard/EmployeeGrowthChart';
import { DepartmentChart } from '@/components/dashboard/DepartmentChart';
import { TaskStatusChart } from '@/components/dashboard/TaskStatusChart';
import { RecentActivity } from '@/components/dashboard/RecentActivity';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Toplam Çalışan',
      value: '248',
      trend: '+12%',
      trendUp: true,
      icon: Users,
      iconColor: 'text-teal-600',
      iconBgColor: 'bg-teal-50',
    },
    {
      title: 'Aktif Görevler',
      value: '64',
      trend: '+8%',
      trendUp: true,
      icon: CheckSquare,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-50',
    },
    {
      title: 'Bekleyen İzinler',
      value: '12',
      trend: '-3%',
      trendUp: false,
      icon: Clock,
      iconColor: 'text-yellow-600',
      iconBgColor: 'bg-yellow-50',
    },
    {
      title: 'Yeni Duyurular',
      value: '8',
      trend: '+2',
      trendUp: true,
      icon: Megaphone,
      iconColor: 'text-purple-600',
      iconBgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 overflow-y-auto h-full bg-gray-50">
      {/* Welcome Card */}
      <WelcomeCard userName="Admin Kullanıcı" userRole="Sistem Yöneticisi" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts Grid - 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {/* Employee Growth Chart */}
        <EmployeeGrowthChart />

        {/* Department Distribution */}
        <DepartmentChart />
      </div>

      {/* Bottom Grid - Task Status & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {/* Task Status - 1/2 width */}
        <div className="h-[500px] sm:h-[450px] lg:h-[500px]">
          <TaskStatusChart />
        </div>

        {/* Recent Activity - 1/2 width */}
        <div className="h-[500px] sm:h-[450px] lg:h-[500px]">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

