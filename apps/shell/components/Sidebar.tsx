'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  Megaphone, 
  TrendingUp,
  Settings,
  LogOut
} from 'lucide-react';
import { cn, Logo } from '@workly/shared-ui';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'HR Management', href: '/hr', icon: Users },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Performance', href: '/performance', icon: TrendingUp },
  { name: 'Announcements', href: '/announcements', icon: Megaphone },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <Logo size="md" showText={true} subtitle="Dashboard" href="/" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                isActive
                  ? 'bg-gradient-to-r from-teal-50 to-green-50 text-teal-700 shadow-sm'
                  : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors mt-1"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}

