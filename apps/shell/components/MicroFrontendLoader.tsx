'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface MicroFrontendLoaderProps {
  url: string;
  name: string;
}

export function MicroFrontendLoader({ url, name }: MicroFrontendLoaderProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
    };
  }, [url]);

  return (
    <div className="relative w-full h-full">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-900">Yükleniyor...</p>
            <p className="text-sm text-gray-600 mt-2">{name} modülü hazırlanıyor</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <div className="text-center max-w-md p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Modül Yüklenemedi</h3>
            <p className="text-sm text-gray-600 mb-4">
              {name} modülü yüklenirken bir hata oluştu. Lütfen modülün çalıştığından emin olun.
            </p>
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-xs font-mono text-gray-700">{url}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Yeniden Yükle
            </button>
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        ref={iframeRef}
        src={url}
        className="w-full h-full border-0"
        title={name}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
      />
    </div>
  );
}

