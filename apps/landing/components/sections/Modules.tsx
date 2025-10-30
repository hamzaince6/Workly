import Link from 'next/link';
import { 
  Users, 
  CheckSquare, 
  Megaphone, 
  LayoutDashboard,
  ArrowRight,
  Check
} from 'lucide-react';

const modules = [
  {
    icon: Users,
    title: 'İK Yönetimi',
    description: 'Çalışan bilgilerini yönetin, izin takibi yapın, performans değerlendirmeleri oluşturun.',
    features: [
      'Çalışan profilleri ve dosyaları',
      'İzin ve devamsızlık takibi',
      'Bordro entegrasyonu',
      'Performans raporları',
    ],
    url: 'http://localhost:3003',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: CheckSquare,
    title: 'Görev Yönetimi',
    description: 'Kanban board ile görevleri organize edin, takım çalışmasını kolaylaştırın.',
    features: [
      'Kanban board görünümü',
      'Öncelik ve etiket sistemi',
      'Zaman takibi',
      'Proje bazlı organizasyon',
    ],
    url: 'http://localhost:3002',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Megaphone,
    title: 'Duyuru Sistemi',
    description: 'Şirket içi duyuruları yayınlayın, önemli haberleri personelle paylaşın.',
    features: [
      'Kategori bazlı duyurular',
      'Öncelikli duyurular',
      'E-posta bildirimleri',
      'Arşiv ve arama',
    ],
    url: 'http://localhost:3004',
    color: 'from-secondary-500 to-secondary-600',
    bgColor: 'bg-secondary-50',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Raporlama',
    description: 'Tüm verileri tek ekranda görüntüleyin, detaylı raporlar oluşturun.',
    features: [
      'Gerçek zamanlı istatistikler',
      'Özelleştirilebilir grafikler',
      'Excel/PDF export',
      'Otomatik raporlar',
    ],
    url: 'http://localhost:3005',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function Modules() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Güçlü{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Modüller
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Her biri işletmenizin farklı ihtiyaçlarına özel geliştirilmiş,
            birbirleriyle uyumlu çalışan modüller.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${module.color} shadow-lg`}
                  >
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {module.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={module.url}
                  className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${module.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5`}
                >
                  <span>Modülü İncele</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-200 transition-colors pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Integration Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tüm Modüller Entegre Çalışır
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Her modül bağımsız olarak çalışsa da, verileriniz tek merkezden yönetilir.
            Modüller arası geçiş anlıktır, veri senkronizasyonu otomatiktir.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
              <span className="text-sm font-medium text-gray-700">✓ Tek Veri Merkezi</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
              <span className="text-sm font-medium text-gray-700">✓ Anında Senkronizasyon</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
              <span className="text-sm font-medium text-gray-700">✓ API Desteği</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

