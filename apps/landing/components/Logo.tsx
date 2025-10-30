import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizes = {
    sm: {
      container: 'w-8 h-8',
      text: 'text-lg',
      textSize: 'text-base',
    },
    md: {
      container: 'w-10 h-10',
      text: 'text-xl',
      textSize: 'text-2xl',
    },
    lg: {
      container: 'w-16 h-16',
      text: 'text-3xl',
      textSize: 'text-4xl',
    },
  };

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        {/* Gradient Background */}
        <div
          className={`${sizes[size].container} bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
        >
          {/* Letter W with geometric design */}
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`${sizes[size].text} text-white relative z-10`}
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
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-secondary-400 rounded-bl-lg opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-primary-700 rounded-tr-lg opacity-50"></div>
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`${sizes[size].textSize} font-bold text-primary-600 leading-none`}
          >
            Workly
          </span>
          {size === 'lg' && (
            <span className="text-xs text-gray-500 font-medium mt-0.5">
              İşletme Yönetimi
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

