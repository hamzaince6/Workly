'use client';

import { useState } from 'react';
import { MicroFrontendLoader } from '@/components/MicroFrontendLoader';
import { Users, Calendar } from 'lucide-react';

type TabType = 'employees' | 'leaves';

export default function HRPage() {
  const [activeTab, setActiveTab] = useState<TabType>('employees');

  const tabs = [
    { id: 'employees' as TabType, label: 'Çalışanlar', icon: Users, url: 'http://localhost:3003/employees' },
    { id: 'leaves' as TabType, label: 'İzin Talepleri', icon: Calendar, url: 'http://localhost:3003/leaves' },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Tab Bar */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex justify-center space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all relative
                  ${isActive 
                    ? 'text-teal-600' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-green-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <MicroFrontendLoader 
          url={activeTabData?.url || 'http://localhost:3003/employees'} 
          name={activeTabData?.label || 'HR Management'} 
        />
      </div>
    </div>
  );
}

