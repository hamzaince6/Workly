'use client';

import { Card, CardContent } from '@workly/shared-ui';
import { Megaphone, Eye, MessageSquare, Pin } from 'lucide-react';

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
        <p className="text-gray-600 mt-1">Company news and updates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">45</p>
              </div>
              <Megaphone className="h-12 w-12 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">2.4K</p>
              </div>
              <Eye className="h-12 w-12 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Comments</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
              </div>
              <MessageSquare className="h-12 w-12 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pinned</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
              </div>
              <Pin className="h-12 w-12 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="elevated">
        <CardContent className="p-8 text-center">
          <Megaphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Announcements Module</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            This section will integrate with the Next.js Announcements microfrontend.
            SEO-optimized announcements, rich content editor, and engagement tracking will be available here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

