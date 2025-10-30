import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Puzzle, 
  HeadphonesIcon 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hızlı ve Kolay',
    description: 'Sezgisel arayüz sayesinde dakikalar içinde kurulum yapın ve hemen kullanmaya başlayın.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Güvenli ve Emniyetli',
    description: 'Kurumsal seviye güvenlik ve KVKK uyumlu veri koruma ile verileriniz güvende.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Users,
    title: 'Ekip İşbirliği',
    description: 'Takımınızla gerçek zamanlı işbirliği yapın, iletişimi güçlendirin.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Ölçeklenebilir Yapı',
    description: '10 kişiden 10.000 kişiye kadar büyüyebilen esnek ve güçlü altyapı.',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Puzzle,
    title: 'Kolay Entegrasyon',
    description: 'Kullandığınız araçlarla sorunsuz entegrasyon. API desteği ve webhook\'ler.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: HeadphonesIcon,
    title: '7/24 Destek',
    description: 'Türkçe müşteri desteği ekibimiz her zaman yanınızda, sorularınızı yanıtlamaya hazır.',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Neden{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Workly?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            İşletmenizin ihtiyaç duyduğu tüm özellikleri bir arada sunan,
            modern ve güçlü bir platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-xl`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Tüm özellikleri keşfetmek için demo talep edin
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            Ücretsiz Demo Al
          </button>
        </div>
      </div>
    </section>
  );
}

