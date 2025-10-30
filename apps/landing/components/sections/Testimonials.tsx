import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    position: 'İK Müdürü',
    company: 'TechCorp A.Ş.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mehmet',
    rating: 5,
    content:
      'Workly sayesinde İK süreçlerimizi tamamen dijitalleştirdik. Çalışan yönetimi, izin takibi ve performans değerlendirmeleri artık çok daha kolay. Ekibimizin verimliliği %40 arttı.',
  },
  {
    name: 'Ayşe Demir',
    position: 'Genel Müdür',
    company: 'StartupHub',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse',
    rating: 5,
    content:
      'Startup olarak hızlı büyüyoruz ve Workly bu süreçte yanımızda. Ölçeklenebilir yapısı ve kullanım kolaylığı sayesinde odağımızı işimize verebiliyoruz. Kesinlikle tavsiye ederim.',
  },
  {
    name: 'Can Öztürk',
    position: 'Proje Yöneticisi',
    company: 'Digital Agency',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Can',
    rating: 5,
    content:
      'Görev yönetimi modülü harika! Kanban board üzerinden tüm projelerimizi takip ediyoruz. Ekip içi iletişim güçlendi ve deadline\'ları kaçırmamaya başladık. Müşteri desteği de çok başarılı.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Müşterilerimiz{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Binlerce şirket ve on binlerce kullanıcı Workly ile işlerini yönetiyor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">
              Türkiye&apos;nin önde gelen şirketleri Workly&apos;i tercih ediyor
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Logo Placeholders */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 font-bold text-sm">Şirket {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              4.9/5
            </div>
            <div className="text-sm text-gray-600 mt-2">Ortalama Puan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              500+
            </div>
            <div className="text-sm text-gray-600 mt-2">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              10K+
            </div>
            <div className="text-sm text-gray-600 mt-2">Aktif Kullanıcı</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              99.9%
            </div>
            <div className="text-sm text-gray-600 mt-2">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}

