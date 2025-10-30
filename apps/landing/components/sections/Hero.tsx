import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Türkiye&apos;nin En Gelişmiş İşletme Platformu</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              İşletmenizi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Dijital Dönüşüme
              </span>{' '}
              Taşıyın
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              İK yönetimi, görev takibi, duyuru sistemi ve performans ölçümlemesi için
              ihtiyacınız olan her şey tek platformda. Şimdi ücretsiz deneyin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="http://localhost:3001"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Hemen Başla
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-all">
                <Play className="w-5 h-5" />
                Demo İzle
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Aktif Şirket</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Kullanıcı</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in animation-delay-200">
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg"></div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">Workly Dashboard</div>
                        <div className="text-xs text-gray-500">İşletme Yönetimi</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-700">248</div>
                      <div className="text-xs text-primary-600">Çalışan</div>
                    </div>
                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-4">
                      <div className="text-2xl font-bold text-secondary-700">64</div>
                      <div className="text-xs text-secondary-600">Aktif Görev</div>
                    </div>
                  </div>

                  {/* Activity List */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-100 rounded w-1/2 mt-2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white rounded-xl shadow-xl p-4 animate-bounce animation-delay-1000">
                <div className="w-8 h-8 bg-secondary-500 rounded-lg mb-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-100 rounded mt-2"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-xl shadow-xl p-4 animate-bounce animation-delay-2000">
                <div className="w-8 h-8 bg-primary-500 rounded-lg mb-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-100 rounded mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

