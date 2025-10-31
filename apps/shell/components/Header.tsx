'use client';

import { Header as SharedHeader, Logo } from '@workly/shared-ui';
import { Menu } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';

export function Header() {
  const { toggleMobileMenu } = useSidebar();

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block">
        <SharedHeader
          userName="Admin Kullanıcı"
          userRole="Sistem Yöneticisi"
          showSearch={false}
          notificationCount={3}
        />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
        <Logo size="md" showText={true} href="/" />
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}

