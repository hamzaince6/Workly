'use client';

import { Card, CardContent } from '@workly/shared-ui';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
}

export function StatsCard({ 
  title, 
  value, 
  trend, 
  trendUp = true, 
  icon: Icon, 
  iconColor,
  iconBgColor 
}: StatsCardProps) {
  return (
    <Card variant="default" className="hover:border-gray-300 hover:shadow-md transition-all duration-300 border border-gray-200">
      <CardContent className="p-4 sm:p-5 lg:p-6">
        <div className="flex items-start sm:items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1 truncate">{title}</p>
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">{value}</h3>
            <div className="flex items-center gap-1 flex-wrap">
              {trendUp ? (
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
              )}
              <span className={`text-xs sm:text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'} whitespace-nowrap`}>
                {trend}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 hidden xs:inline">geçen aya göre</span>
              <span className="text-xs sm:text-sm text-gray-500 xs:hidden">bu ay</span>
            </div>
          </div>
          <div className={`p-3 sm:p-3.5 lg:p-4 rounded-lg sm:rounded-xl ${iconBgColor} shadow-sm flex-shrink-0`}>
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

