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
    <Card variant="default" className="hover:border-gray-300 transition-all duration-300 border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
            <div className="flex items-center gap-1">
              {trendUp ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                {trend}
              </span>
              <span className="text-sm text-gray-500">geçen aya göre</span>
            </div>
          </div>
          <div className={`p-4 rounded-xl ${iconBgColor} shadow-sm`}>
            <Icon className={`h-7 w-7 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

