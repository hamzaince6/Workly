import React from 'react';
import { cn } from '../utils/cn';

export interface HeaderProps {
  /** User name */
  userName?: string;
  /** User role/title */
  userRole?: string;
  /** User avatar URL */
  userAvatar?: string;
  /** Show search bar */
  showSearch?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Search handler */
  onSearch?: (query: string) => void;
  /** Notification count */
  notificationCount?: number;
  /** Mobile menu toggle handler */
  onMenuToggle?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Custom children (for additional header content) */
  children?: React.ReactNode;
}

export function Header({
  userName = 'Admin Kullanıcı',
  userRole = 'Sistem Yöneticisi',
  userAvatar,
  showSearch = true,
  searchPlaceholder = 'Çalışanları, görevleri, duyuruları ara...',
  onSearch,
  notificationCount = 0,
  onMenuToggle,
  className = '',
  children,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <header
      className={cn(
        'h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6',
        className
      )}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Toggle */}
        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Search Bar */}
        {showSearch && (
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            />
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Custom Children */}
        {children}

        {/* Notifications */}
        <button className="relative p-2 hover:bg-teal-50 rounded-lg transition-colors">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500">{userRole}</p>
          </div>
          <div className="relative">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-green-600 flex items-center justify-center text-white font-semibold ring-2 ring-gray-200">
                {userName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
            )}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

