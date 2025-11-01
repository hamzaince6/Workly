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
      <CardContent className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left Section - Greeting */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center shadow-md flex-shrink-0">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">
                Hoş Geldiniz, {userName}! 👋
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 truncate">{userRole}</p>
            </div>
          </div>
          
          {/* Right Section - Date & Time */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/60 border border-gray-200 flex-1 sm:flex-initial">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/60 border border-gray-200">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">{formattedTime}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

