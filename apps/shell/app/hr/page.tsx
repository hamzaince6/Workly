'use client';

import { Card, CardContent } from '@workly/shared-ui';
import { Users, UserPlus, Calendar, FileText } from 'lucide-react';

export default function HRPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">HR Management</h1>
        <p className="text-gray-600 mt-1">Manage employees, leaves, and attendance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Employees</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">248</p>
              </div>
              <Users className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Leaves</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <Calendar className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Hires (Month)</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              </div>
              <UserPlus className="h-12 w-12 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Documents</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
              </div>
              <FileText className="h-12 w-12 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="elevated">
        <CardContent className="p-8 text-center">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">HR Management Module</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            This section will integrate with the Angular HR Management microfrontend. 
            Employee management, leave requests, and attendance tracking features will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

