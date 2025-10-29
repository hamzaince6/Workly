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
      title: 'Total Employees',
      value: '248',
      icon: Users,
      trend: '+12%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Tasks',
      value: '64',
      icon: CheckSquare,
      trend: '+8%',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Pending Leaves',
      value: '12',
      icon: Clock,
      trend: '-3%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Announcements',
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
      message: 'New employee John Doe added to Engineering',
      time: '2 hours ago',
      icon: Users,
    },
    {
      id: 2,
      type: 'task',
      message: 'Task "Update Dashboard UI" marked as completed',
      time: '4 hours ago',
      icon: CheckSquare,
    },
    {
      id: 3,
      type: 'leave',
      message: 'Leave request from Sarah Johnson approved',
      time: '5 hours ago',
      icon: Calendar,
    },
    {
      id: 4,
      type: 'announcement',
      message: 'New policy announcement published',
      time: '1 day ago',
      icon: Megaphone,
    },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Q4 Performance Reviews', dueDate: 'Dec 15, 2024', priority: 'High' },
    { id: 2, title: 'Update Employee Handbook', dueDate: 'Dec 20, 2024', priority: 'Medium' },
    { id: 3, title: 'Team Building Event Planning', dueDate: 'Dec 25, 2024', priority: 'Low' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
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
                  <p className="text-sm text-green-600 mt-1">{stat.trend} from last month</p>
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
            <CardTitle>Recent Activity</CardTitle>
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
            <CardTitle>Upcoming Deadlines</CardTitle>
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
                      task.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : task.priority === 'Medium'
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
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <Users className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Add Employee</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <CheckSquare className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Create Task</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <Megaphone className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">New Announcement</span>
            </button>
            <button className="p-4 text-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <Award className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Review Performance</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

