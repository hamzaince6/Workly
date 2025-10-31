'use client';

import { Card, CardContent } from '@workly/shared-ui';
import { Calendar, Clock, Sparkles } from 'lucide-react';

interface WelcomeCardProps {
  userName?: string;
  userRole?: string;
}

export function WelcomeCard({ userName = 'Admin Kullanıcı', userRole = 'Sistem Yöneticisi' }: WelcomeCardProps) {
  const currentDate = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const timeOptions: Intl.DateTimeFormatOptions = { 
    hour: '2-digit', 
    minute: '2-digit' 
  };

  const formattedDate = currentDate.toLocaleDateString('tr-TR', dateOptions);
  const formattedTime = currentDate.toLocaleTimeString('tr-TR', timeOptions);

  return (
    <Card variant="default" className="bg-gradient-to-br from-white to-teal-50/30 overflow-hidden relative border border-gray-200">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          {/* Left Section - Greeting */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center shadow-md">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Hoş Geldiniz, {userName}! 👋
              </h2>
              <p className="text-sm text-gray-600 mt-0.5">{userRole}</p>
            </div>
          </div>
          
          {/* Right Section - Date & Time */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 border border-gray-200">
              <Calendar className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-gray-700">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 border border-gray-200">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{formattedTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

