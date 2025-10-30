import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Sınırlı Süreliğine Ücretsiz Deneme</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            İşletmenizi Bir Sonraki Seviyeye Taşımaya Hazır Mısınız?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Hemen ücretsiz denemeye başlayın. Kredi kartı bilgisi gerekmez,
            kurulum sadece 2 dakika sürer.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 py-6">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>14 Gün Ücretsiz Deneme</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Kredi Kartı Gerekmez</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Anında Kurulum</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="http://localhost:3001"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-lg"
            >
              Ücretsiz Başla
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all text-lg">
              Satış Ekibiyle Görüş
            </button>
          </div>

          {/* Trust Indicator */}
          <p className="text-white/80 text-sm pt-4">
            ⚡ Şu anda <strong className="text-white">2,500+</strong> kullanıcı online
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Aktif Şirket</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/80">Kullanıcı</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/80">Görev Tamamlandı</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/80">Memnuniyet</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

