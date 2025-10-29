'use client';

import { Card, CardContent } from '@workly/shared-ui';
import { CheckSquare, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
        <p className="text-gray-600 mt-1">Manage projects and track team tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">To Do</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
              </div>
              <Clock className="h-12 w-12 text-gray-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">18</p>
              </div>
              <AlertCircle className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
              </div>
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Blocked</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <AlertCircle className="h-12 w-12 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="elevated">
        <CardContent className="p-8 text-center">
          <CheckSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Management Module</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            This section will integrate with the Next.js Task Manager microfrontend.
            Drag & drop task boards, real-time updates, and project management features will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

