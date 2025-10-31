'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  Megaphone, 
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn, Logo } from '@workly/shared-ui';
import { useSidebar } from '@/contexts/SidebarContext';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'HR Management', href: '/hr-management', icon: Users },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Performance', href: '/performance', icon: TrendingUp },
  { name: 'Announcements', href: '/announcements', icon: Megaphone },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar, isMobileMenuOpen, closeMobileMenu } = useSidebar();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay - Full Screen */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Content - Full Screen */}
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
              <Logo size="md" showText={true} subtitle="Dashboard" href="/" />
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      'flex items-center gap-4 px-4 py-4 rounded-xl text-base font-medium transition-all',
                      isActive
                        ? 'bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 shadow-sm'
                        : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                    )}
                  >
                    <item.icon className="h-6 w-6 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Bottom Section */}
            <div className="border-t border-gray-200 p-4 space-y-2">
              <Link
                href="/settings"
                onClick={closeMobileMenu}
                className="flex items-center gap-4 px-4 py-4 rounded-xl text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                <Settings className="h-6 w-6 flex-shrink-0" />
                <span>Settings</span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                <LogOut className="h-6 w-6 flex-shrink-0" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div 
        className={cn(
          'hidden md:flex bg-white border-r border-gray-200 flex-col transition-all duration-300',
          isCollapsed ? 'w-20' : 'w-64'
        )}
      >
      {/* Logo & Toggle */}
      <div className={cn(
        'h-16 flex items-center border-b border-gray-200 px-4',
        isCollapsed ? 'justify-center' : 'justify-between'
      )}>
        {isCollapsed ? (
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            aria-label="Expand sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
        ) : (
          <>
            <Logo size="md" showText={true} subtitle="Dashboard" href="/" />
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors flex-shrink-0"
              aria-label="Collapse sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Navigation */}
      <nav className={cn('flex-1 py-6 space-y-1', isCollapsed ? 'px-2' : 'px-4')}>
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center rounded-lg text-sm font-medium transition-all',
                isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3',
                isActive
                  ? 'bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 shadow-sm'
                  : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className={cn('border-t border-gray-200', isCollapsed ? 'p-2' : 'p-4')}>
        <Link
          href="/settings"
          className={cn(
            'flex items-center rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors',
            isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'
          )}
          title={isCollapsed ? 'Settings' : undefined}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <button
          className={cn(
            'w-full flex items-center rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors mt-1',
            isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3'
          )}
          title={isCollapsed ? 'Logout' : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
    </>
  );
}

