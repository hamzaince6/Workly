'use client';

import { Card, CardContent } from '@workly/shared-ui';
import { TrendingUp, Award, Target, BarChart } from 'lucide-react';

export default function PerformancePage() {
  return (
    <div className="space-y-6 p-6 overflow-y-auto h-full bg-gray-50">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Performance Reports</h1>
        <p className="text-gray-600 mt-1">Track employee performance and KPIs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="default" className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Performance</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">4.2/5</p>
              </div>
              <TrendingUp className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="default" className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Reviews Done</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">187</p>
              </div>
              <Award className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="default" className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Goals Met</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">92%</p>
              </div>
              <Target className="h-12 w-12 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="default" className="border border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">KPIs Tracked</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
              </div>
              <BarChart className="h-12 w-12 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="default" className="border border-gray-200">
        <CardContent className="p-8 text-center">
          <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Analytics Module</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            This section will display advanced performance charts and KPI dashboards.
            Employee reviews, goal tracking, and detailed analytics will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

