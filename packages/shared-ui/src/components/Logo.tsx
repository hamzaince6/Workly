import React from 'react';
import { cn } from '../utils/cn';

export interface LogoProps {
  /** Logo size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show text next to logo */
  showText?: boolean;
  /** Subtitle text (only shown on lg size) */
  subtitle?: string;
  /** Link href */
  href?: string;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

const sizeConfig = {
  sm: {
    container: 'w-8 h-8',
    icon: 'w-5 h-5',
    text: 'text-base',
    accent: 'w-2 h-2',
  },
  md: {
    container: 'w-10 h-10',
    icon: 'w-6 h-6',
    text: 'text-xl',
    accent: 'w-2 h-2',
  },
  lg: {
    container: 'w-12 h-12',
    icon: 'w-7 h-7',
    text: 'text-2xl',
    accent: 'w-3 h-3',
  },
};

export function Logo({
  size = 'md',
  showText = true,
  subtitle,
  href = '/',
  className = '',
  onClick,
}: LogoProps) {
  const config = sizeConfig[size];

  const logoContent = (
    <>
      {/* Logo Icon */}
      <div className="relative">
        <div
          className={cn(
            'bg-gradient-to-br from-teal-600 via-teal-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden',
            config.container
          )}
        >
          {/* W Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={cn(config.icon, 'text-white relative z-10')}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4L6 18L9 8L12 18L15 8L18 18L21 4"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Corner Accents */}
          <div
            className={cn(
              'absolute top-0 right-0 bg-green-400 rounded-bl-lg opacity-50',
              config.accent
            )}
          />
          <div
            className={cn(
              'absolute bottom-0 left-0 bg-teal-700 rounded-tr-lg opacity-50',
              config.accent
            )}
          />
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              config.text,
              'font-bold text-teal-600 leading-none'
            )}
          >
            Workly
          </span>
          {subtitle && size === 'lg' && (
            <span className="text-xs text-gray-500 font-medium mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </>
  );

  const baseClasses = cn('flex items-center gap-2', className);

  if (href && !onClick) {
    return (
      <a href={href} className={baseClasses}>
        {logoContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {logoContent}
      </button>
    );
  }

  return <div className={baseClasses}>{logoContent}</div>;
}

