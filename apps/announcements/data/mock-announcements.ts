import { Announcement, AnnouncementCategory, AnnouncementPriority } from '@workly/shared-types';

export const mockAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Aralık 2024 Resmi Tatil Takvimi',
    summary: 'Yaklaşan tatil sezonu için ofis kapatma ve tatil programlarıyla ilgili önemli güncellemeler.',
    content: `
      <h2>Tatil Takvimi</h2>
      <p>Değerli Ekip,</p>
      <p>Tatil sezonuna yaklaşırken, Aralık 2024 için şirket tatil takvimini sizlerle paylaşmak istiyoruz:</p>
      <ul>
        <li><strong>31 Aralık - 1 Ocak:</strong> Yılbaşı Tatili - Ofis Kapalı</li>
        <li><strong>9-10 Ocak:</strong> Kurban Bayramı Tatili - Ofis Kapalı</li>
        <li><strong>23 Nisan:</strong> Ulusal Egemenlik ve Çocuk Bayramı - Ofis Kapalı</li>
      </ul>
      <p>Lütfen çalışmalarınızı buna göre planlayın ve kritik görevlerin tatillerden önce tamamlandığından emin olun.</p>
      <p>Herkesin tatilinin keyifli geçmesini dileriz!</p>
    `,
    category: AnnouncementCategory.HR_UPDATE,
    priority: AnnouncementPriority.HIGH,
    author: 'admin-1',
    authorName: 'İnsan Kaynakları',
    publishedAt: '2024-12-01T09:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800',
    tags: ['tatil', 'takvim', 'önemli'],
    departments: [],
    viewCount: 248,
    slug: 'aralik-2024-resmi-tatil-takvimi',
    createdAt: '2024-11-28T10:00:00Z',
    updatedAt: '2024-12-01T09:00:00Z',
  },
  {
    id: 'ann-2',
    title: 'Yeni Uzaktan Çalışma Politikası',
    summary: 'Ocak 2025\'ten itibaren geçerli olacak uzaktan çalışma ve hibrit düzenlemeler için güncellenmiş kurallar.',
    content: `
      <h2>Uzaktan Çalışma Politikası Güncellemesi</h2>
      <p>1 Ocak 2025 tarihinden itibaren, iş-yaşam dengesini daha iyi desteklemek için yeni bir uzaktan çalışma politikası uyguluyoruz.</p>
      <h3>Önemli Değişiklikler:</h3>
      <ul>
        <li>Çalışanlar haftada 3 güne kadar uzaktan çalışabilir</li>
        <li>Çekirdek saatler: 10:00 - 15:00 (ulaşılabilir olunmalı)</li>
        <li>Aylık ofis içi ekip toplantıları zorunludur</li>
        <li>Uzaktan çalışma günleri önceden bildirilmelidir</li>
      </ul>
      <p>Lütfen tam politika belgesini çalışan portalından inceleyin.</p>
      <p>Bu politika tüm departmanlar için geçerlidir ve herhangi bir sorunuz varsa İK departmanı ile iletişime geçebilirsiniz.</p>
    `,
    category: AnnouncementCategory.POLICY,
    priority: AnnouncementPriority.URGENT,
    author: 'admin-1',
    authorName: 'İnsan Kaynakları',
    publishedAt: '2024-12-05T10:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
    tags: ['politika', 'uzaktan-çalışma', 'hibrit'],
    departments: [],
    viewCount: 312,
    slug: 'yeni-uzaktan-calisma-politikasi',
    createdAt: '2024-12-03T14:00:00Z',
    updatedAt: '2024-12-05T10:00:00Z',
  },
  {
    id: 'ann-3',
    title: '2024 4. Çeyrek Genel Kurul Toplantısı',
    summary: 'Şirket performansını ve gelecek planlarını tartışmak için çeyreklik genel kurul toplantımıza katılın.',
    content: `
      <h2>4. Çeyrek Genel Kurul Toplantısı</h2>
      <p>Çeyreklik genel kurul toplantımıza davetlisiniz!</p>
      <p><strong>Tarih:</strong> 15 Aralık 2024<br>
      <strong>Saat:</strong> 14:00 - 15:30<br>
      <strong>Konum:</strong> Ana Toplantı Salonu / Zoom</p>
      <h3>Gündem:</h3>
      <ul>
        <li>4. Çeyrek Performans Değerlendirmesi</li>
        <li>2025 Stratejik Hedefleri</li>
        <li>Ekip Takdirleri</li>
        <li>Soru & Cevap Oturumu</li>
      </ul>
      <p>Tüm çalışanların katılımı beklenmektedir. Zoom bağlantısı toplantıdan bir gün önce paylaşılacaktır.</p>
    `,
    category: AnnouncementCategory.EVENT,
    priority: AnnouncementPriority.NORMAL,
    author: 'ceo-1',
    authorName: 'Genel Müdür',
    publishedAt: '2024-12-08T11:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    tags: ['etkinlik', 'genel-kurul', 'toplantı'],
    departments: [],
    viewCount: 189,
    slug: '2024-4-ceyrek-genel-kurul-toplantisi',
    createdAt: '2024-12-06T09:00:00Z',
    updatedAt: '2024-12-08T11:00:00Z',
  },
  {
    id: 'ann-4',
    title: 'Ayın Çalışanı - Kasım 2024',
    summary: 'Olağanüstü performansı ve özverisi için Ahmet Yılmaz\'ı tebrik ediyoruz!',
    content: `
      <h2>Ayın Çalışanı: Ahmet Yılmaz</h2>
      <p>Mühendislik ekibinden Ahmet Yılmaz\'ı Kasım 2024 Ayın Çalışanı olarak duyurmaktan büyük mutluluk duyuyoruz!</p>
      <p>Ahmet, Web Sitesi Yenileme projesinde olağanüstü liderlik sergiledi ve projenin başarısını sağlamak için sürekli olarak beklentilerin ötesine geçti.</p>
      <h3>Başarıları:</h3>
      <ul>
        <li>Yeni teknoloji yığınına başarılı geçişi yönetti</li>
        <li>3 junior geliştiriciye mentorluk yaptı</li>
        <li>Deployment verimliliğini %40 artırdı</li>
        <li>Kod kalitesini önemli ölçüde iyileştirdi</li>
      </ul>
      <p>Tebrikler Ahmet! Sıkı çalışmanız ve özveriniz gerçekten takdir ediliyor.</p>
    `,
    category: AnnouncementCategory.ACHIEVEMENT,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İK Ekibi',
    publishedAt: '2024-12-02T13:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    tags: ['takdir', 'ayın-çalışanı'],
    departments: [],
    viewCount: 156,
    slug: 'ayin-calisani-kasim-2024',
    createdAt: '2024-12-01T15:00:00Z',
    updatedAt: '2024-12-02T13:00:00Z',
  },
  {
    id: 'ann-5',
    title: 'Planlı Sistem Bakımı',
    summary: '14 Aralık 2024 tarihinde planlı sistem bakımı yapılacak. Kısa süreli hizmet kesintileri beklenebilir.',
    content: `
      <h2>Planlı Sistem Bakımı</h2>
      <p>BT ekibimiz, önemli sistem bakımı ve güncellemeleri gerçekleştirecektir.</p>
      <p><strong>Tarih:</strong> 14 Aralık 2024<br>
      <strong>Saat:</strong> 00:00 - 04:00<br>
      <strong>Süre:</strong> Yaklaşık 4 saat</p>
      <h3>Etkilenecek Servisler:</h3>
      <ul>
        <li>E-posta Sistemi</li>
        <li>Çalışan Portalı</li>
        <li>İç Uygulamalar</li>
        <li>Dosya Paylaşım Sistemi</li>
      </ul>
      <p>Lütfen çalışmalarınızı kaydedin ve gece yarısından önce sistemden çıkış yapın. Yaşanabilecek rahatsızlıklar için özür dileriz.</p>
      <p>Acil durumlarda BT destek hattını arayabilirsiniz: 0850 XXX XX XX</p>
    `,
    category: AnnouncementCategory.SYSTEM,
    priority: AnnouncementPriority.HIGH,
    author: 'it-1',
    authorName: 'BT Departmanı',
    publishedAt: '2024-12-10T16:00:00Z',
    expiresAt: '2024-12-15T00:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['sistem', 'bakım', 'kesinti'],
    departments: [],
    viewCount: 201,
    slug: 'planli-sistem-bakimi-aralik-2024',
    createdAt: '2024-12-09T10:00:00Z',
    updatedAt: '2024-12-10T16:00:00Z',
  },
  {
    id: 'ann-6',
    title: 'Yeni Ofis Lokasyonu Açılıyor',
    summary: 'İstanbul Maslak\'ta modern yeni ofisimiz 15 Ocak 2025 tarihinde hizmete girecek.',
    content: `
      <h2>Yeni Ofis Açılışı</h2>
      <p>Büyüyen ekibimiz için İstanbul Maslak\'ta yeni ofis lokasyonumuzu açıyoruz!</p>
      <p><strong>Açılış Tarihi:</strong> 15 Ocak 2025<br>
      <strong>Adres:</strong> Maslak, Eski Büyükdere Caddesi No:123, Sarıyer/İstanbul</p>
      <h3>Yeni Ofis Özellikleri:</h3>
      <ul>
        <li>3000 m² çalışma alanı</li>
        <li>Modern toplantı odaları</li>
        <li>Oyun ve dinlenme alanları</li>
        <li>Tam donanımlı kafeterya</li>
        <li>Açık hava terası</li>
        <li>Spor salonu ve duş olanakları</li>
      </ul>
      <p>Açılış töreni için davetiyeler yakında gönderilecektir. Yeni ofisimizde görüşmek üzere!</p>
    `,
    category: AnnouncementCategory.COMPANY_NEWS,
    priority: AnnouncementPriority.HIGH,
    author: 'admin-1',
    authorName: 'Genel Müdürlük',
    publishedAt: '2024-12-11T10:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    tags: ['ofis', 'açılış', 'lokasyon'],
    departments: [],
    viewCount: 287,
    slug: 'yeni-ofis-lokasyonu-aciliyor',
    createdAt: '2024-12-10T14:00:00Z',
    updatedAt: '2024-12-11T10:00:00Z',
  },
  {
    id: 'ann-7',
    title: 'Siber Güvenlik Eğitimi Zorunlu Hale Getirildi',
    summary: 'Tüm çalışanların 31 Aralık\'a kadar siber güvenlik eğitimini tamamlaması gerekmektedir.',
    content: `
      <h2>Zorunlu Siber Güvenlik Eğitimi</h2>
      <p>Şirket verilerinin ve bilgi güvenliğinin korunması amacıyla tüm çalışanlar için siber güvenlik eğitimi zorunlu hale getirilmiştir.</p>
      <h3>Eğitim Detayları:</h3>
      <ul>
        <li><strong>Süre:</strong> 2 saat (online)</li>
        <li><strong>Son Tarih:</strong> 31 Aralık 2024</li>
        <li><strong>Platform:</strong> Çalışan Portalı - Eğitim Bölümü</li>
      </ul>
      <h3>Eğitim İçeriği:</h3>
      <ul>
        <li>Güvenli parola oluşturma</li>
        <li>Phishing saldırılarını tanıma</li>
        <li>Güvenli dosya paylaşımı</li>
        <li>Sosyal mühendislik farkındalığı</li>
        <li>Veri koruma protokolleri</li>
      </ul>
      <p>Eğitimi tamamlamayanlar için sistem erişimi kısıtlanacaktır. Lütfen ertelemeyin!</p>
    `,
    category: AnnouncementCategory.TRAINING,
    priority: AnnouncementPriority.URGENT,
    author: 'it-1',
    authorName: 'BT Departmanı',
    publishedAt: '2024-12-09T09:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    tags: ['eğitim', 'güvenlik', 'zorunlu'],
    departments: [],
    viewCount: 325,
    slug: 'siber-guvenlik-egitimi-zorunlu',
    createdAt: '2024-12-08T15:00:00Z',
    updatedAt: '2024-12-09T09:00:00Z',
  },
  {
    id: 'ann-8',
    title: '2025 Yılı Performans Değerlendirme Süreci',
    summary: '2025 yılı performans değerlendirme takvimi ve yeni kriterler açıklandı.',
    content: `
      <h2>2025 Performans Değerlendirme</h2>
      <p>2025 yılı için güncellenmiş performans değerlendirme sürecimizi duyuruyoruz.</p>
      <h3>Değerlendirme Takvimi:</h3>
      <ul>
        <li><strong>Ocak - Mart:</strong> 1. Dönem Değerlendirmesi</li>
        <li><strong>Nisan - Haziran:</strong> 2. Dönem Değerlendirmesi</li>
        <li><strong>Temmuz - Eylül:</strong> 3. Dönem Değerlendirmesi</li>
        <li><strong>Ekim - Aralık:</strong> 4. Dönem Değerlendirmesi</li>
      </ul>
      <h3>Yeni Değerlendirme Kriterleri:</h3>
      <ul>
        <li>Görev başarım oranı (%40)</li>
        <li>Ekip çalışması ve işbirliği (%25)</li>
        <li>İnovasyon ve yaratıcılık (%20)</li>
        <li>Kişisel gelişim (%15)</li>
      </ul>
      <p>Detaylı bilgi ve eğitim materyalleri çalışan portalında paylaşılmıştır.</p>
    `,
    category: AnnouncementCategory.HR_UPDATE,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İnsan Kaynakları',
    publishedAt: '2024-12-12T11:00:00Z',
    isPinned: true,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    tags: ['performans', 'değerlendirme', 'kariyer'],
    departments: [],
    viewCount: 276,
    slug: '2025-performans-degerlendirme-sureci',
    createdAt: '2024-12-11T16:00:00Z',
    updatedAt: '2024-12-12T11:00:00Z',
  },
  {
    id: 'ann-9',
    title: 'Çalışan Sağlık Programı Başlatılıyor',
    summary: 'Heyecan verici faydalar ve aktivitelerle yeni çalışan sağlık programımızı tanıtıyoruz.',
    content: `
      <h2>Yeni Sağlık Programı</h2>
      <p>Ocak 2025\'ten başlayarak kapsamlı çalışan sağlık programımızı başlatmaktan heyecan duyuyoruz!</p>
      <h3>Program Faydaları:</h3>
      <ul>
        <li>Ücretsiz spor salonu üyeliği</li>
        <li>Ruh sağlığı danışmanlık oturumları</li>
        <li>Yoga ve meditasyon dersleri</li>
        <li>Beslenme danışmanlığı</li>
        <li>Sağlık taraması</li>
        <li>Masaj terapisi</li>
        <li>Online fitness programları</li>
      </ul>
      <p>Bu avantajlardan yararlanmak için 20 Aralık\'a kadar çalışan portalı üzerinden kayıt olun!</p>
      <p>Program hakkında detaylı bilgi için İK departmanı ile iletişime geçebilirsiniz.</p>
    `,
    category: AnnouncementCategory.HR_UPDATE,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İK Ekibi',
    publishedAt: '2024-12-07T14:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    tags: ['sağlık', 'yan-haklar', 'wellness'],
    departments: [],
    viewCount: 134,
    slug: 'calisan-saglik-programi-baslatiliyor',
    createdAt: '2024-12-06T11:00:00Z',
    updatedAt: '2024-12-07T14:00:00Z',
  },
  {
    id: 'ann-10',
    title: 'Yılsonu Şirket Partisi Duyurusu',
    summary: '25 Aralık Çarşamba akşamı düzenlenecek yılsonu partisine tüm çalışanlarımız davetlidir.',
    content: `
      <h2>Yılsonu Şirket Partisi</h2>
      <p>2024 yılının başarılarını kutlamak ve yeni yıla birlikte girmek için yılsonu partimize davetlisiniz!</p>
      <p><strong>Tarih:</strong> 25 Aralık 2024, Çarşamba<br>
      <strong>Saat:</strong> 19:00 - 23:00<br>
      <strong>Mekan:</strong> Hilton İstanbul Bosphorus - Ballroom</p>
      <h3>Etkinlik Programı:</h3>
      <ul>
        <li>19:00 - 20:00: Kokteyl ve karşılama</li>
        <li>20:00 - 21:00: Akşam yemeği</li>
        <li>21:00 - 22:00: Ödül töreni ve konuşmalar</li>
        <li>22:00 - 23:00: Müzik ve eğlence</li>
      </ul>
      <p>Lütfen 20 Aralık\'a kadar katılım durumunuzu İK departmanına bildirin. Refakatçi ile gelebilirsiniz.</p>
      <p>Kıyafet: Kokteyl veya resmi giyim</p>
    `,
    category: AnnouncementCategory.EVENT,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İK Ekibi',
    publishedAt: '2024-12-06T10:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    tags: ['etkinlik', 'parti', 'yılsonu'],
    departments: [],
    viewCount: 298,
    slug: 'yilsonu-sirket-partisi',
    createdAt: '2024-12-05T14:00:00Z',
    updatedAt: '2024-12-06T10:00:00Z',
  },
  {
    id: 'ann-11',
    title: 'Yeni Proje Yönetim Aracı Tanıtımı',
    summary: 'Şirket genelinde kullanılacak yeni proje yönetim platformu Jira\'ya geçiş yapılıyor.',
    content: `
      <h2>Yeni Proje Yönetim Sistemi</h2>
      <p>Daha verimli proje takibi için Jira sistemine geçiş yapıyoruz.</p>
      <h3>Geçiş Takvimi:</h3>
      <ul>
        <li><strong>18-20 Aralık:</strong> Eğitim oturumları</li>
        <li><strong>21 Aralık:</strong> Test dönemi başlangıcı</li>
        <li><strong>2 Ocak 2025:</strong> Tam geçiş</li>
      </ul>
      <h3>Yeni Sistemin Avantajları:</h3>
      <ul>
        <li>Gelişmiş görev yönetimi</li>
        <li>Otomatik raporlama</li>
        <li>Entegre iletişim araçları</li>
        <li>Sprint planlama özellikleri</li>
        <li>Gerçek zamanlı işbirliği</li>
      </ul>
      <p>Eğitim oturumlarına kayıt için İK portalını ziyaret edin.</p>
    `,
    category: AnnouncementCategory.SYSTEM,
    priority: AnnouncementPriority.NORMAL,
    author: 'it-1',
    authorName: 'BT Departmanı',
    publishedAt: '2024-12-04T13:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    tags: ['sistem', 'jira', 'eğitim'],
    departments: [],
    viewCount: 245,
    slug: 'yeni-proje-yonetim-araci-jira',
    createdAt: '2024-12-03T09:00:00Z',
    updatedAt: '2024-12-04T13:00:00Z',
  },
  {
    id: 'ann-12',
    title: 'Ebeveyn İzin Politikası Güncellendi',
    summary: 'Doğum ve evlat edinme izinleri için yeni düzenlemeler yapıldı.',
    content: `
      <h2>Güncellenmiş Ebeveyn İzin Politikası</h2>
      <p>Çalışanlarımızın aile yaşamını desteklemek için izin politikalarımızı genişletiyoruz.</p>
      <h3>Yeni Düzenlemeler:</h3>
      <ul>
        <li><strong>Anne İzni:</strong> 16 hafta ücretli izin (yasal minimum: 16 hafta)</li>
        <li><strong>Baba İzni:</strong> 4 hafta ücretli izin (yasal minimum: 10 gün)</li>
        <li><strong>Evlat Edinme İzni:</strong> 12 hafta ücretli izin</li>
        <li><strong>Esnek Dönüş:</strong> İsteğe bağlı part-time çalışma (6 aya kadar)</li>
      </ul>
      <h3>Ek Haklar:</h3>
      <ul>
        <li>Kreş desteği</li>
        <li>Emzirme odası olanakları</li>
        <li>Esnek çalışma saatleri</li>
      </ul>
      <p>Detaylı bilgi için İK departmanı ile görüşebilirsiniz.</p>
    `,
    category: AnnouncementCategory.POLICY,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İnsan Kaynakları',
    publishedAt: '2024-12-03T11:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800',
    tags: ['politika', 'ebeveyn', 'izin'],
    departments: [],
    viewCount: 187,
    slug: 'ebeveyn-izin-politikasi-guncellendi',
    createdAt: '2024-12-02T15:00:00Z',
    updatedAt: '2024-12-03T11:00:00Z',
  },
  {
    id: 'ann-13',
    title: 'Çevre Dostu Ofis İnisiyatifi Başladı',
    summary: 'Şirketimizin karbon ayak izini azaltmak için yeni sürdürülebilirlik programı.',
    content: `
      <h2>Yeşil Ofis Projesi</h2>
      <p>Çevreye duyarlı bir şirket olarak karbon nötr hedefimize ulaşmak için yeni adımlar atıyoruz.</p>
      <h3>Yeni Uygulamalar:</h3>
      <ul>
        <li>Plastik kullanımında %80 azaltma</li>
        <li>Yenilenebilir enerji kullanımı</li>
        <li>Geri dönüşüm istasyonları</li>
        <li>Dijital belge yönetimi</li>
        <li>Kağıtsız ofis hedefi</li>
      </ul>
      <h3>Çalışan Katkıları:</h3>
      <ul>
        <li>Kişisel bardak kullanımı (şirket hediye bardakları dağıtılacak)</li>
        <li>Toplu taşıma desteği</li>
        <li>Bisiklet park alanları</li>
        <li>Çevre gönüllülük programları</li>
      </ul>
      <p>Detaylar ve katılım için sustainability@workly.com</p>
    `,
    category: AnnouncementCategory.COMPANY_NEWS,
    priority: AnnouncementPriority.NORMAL,
    author: 'admin-1',
    authorName: 'Genel Müdürlük',
    publishedAt: '2024-12-01T10:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    tags: ['sürdürülebilirlik', 'çevre', 'yeşil'],
    departments: [],
    viewCount: 215,
    slug: 'cevre-dostu-ofis-inisiyatifi',
    createdAt: '2024-11-30T13:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
  },
  {
    id: 'ann-14',
    title: 'Mentorluk Programı Kayıtları Açıldı',
    summary: 'Kariyer gelişiminizi desteklemek için kıdemli çalışanlardan mentorluk alın.',
    content: `
      <h2>Kariyer Mentorluk Programı</h2>
      <p>Profesyonel gelişiminizi hızlandırmak için mentorluk programımız başlıyor!</p>
      <h3>Program Detayları:</h3>
      <ul>
        <li><strong>Süre:</strong> 6 ay</li>
        <li><strong>Görüşme:</strong> Ayda 2 kez, 1 saat</li>
        <li><strong>Format:</strong> Yüz yüze veya online</li>
      </ul>
      <h3>Kimler Başvurabilir:</h3>
      <ul>
        <li>1-3 yıl tecrübeli çalışanlar</li>
        <li>Kariyer değişikliği planlayan çalışanlar</li>
        <li>Liderlik becerileri geliştirmek isteyenler</li>
      </ul>
      <h3>Program Faydaları:</h3>
      <ul>
        <li>Kişiselleştirilmiş kariyer rehberliği</li>
        <li>Ağ genişletme fırsatları</li>
        <li>Beceri geliştirme desteği</li>
        <li>Kariyer planlama stratejileri</li>
      </ul>
      <p>Başvuru için: 15 Aralık\'a kadar İK portalından form doldurun.</p>
    `,
    category: AnnouncementCategory.TRAINING,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İK Ekibi',
    publishedAt: '2024-11-29T09:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    tags: ['mentorluk', 'kariyer', 'gelişim'],
    departments: [],
    viewCount: 178,
    slug: 'mentorluk-programi-kayitlari',
    createdAt: '2024-11-28T14:00:00Z',
    updatedAt: '2024-11-29T09:00:00Z',
  },
  {
    id: 'ann-15',
    title: 'Teknoloji Konferansı Katılım Desteği',
    summary: 'Şirket sponsorluğunda sektördeki önemli konferanslara katılın.',
    content: `
      <h2>Konferans Katılım Programı</h2>
      <p>Profesyonel gelişiminizi desteklemek için 2025 yılında teknoloji konferanslarına katılım imkanı sunuyoruz.</p>
      <h3>Kapsanan Etkinlikler:</h3>
      <ul>
        <li>Yurt içi ve yurt dışı teknoloji konferansları</li>
        <li>Sektörel zirveler</li>
        <li>Workshop ve eğitim etkinlikleri</li>
        <li>Networking etkinlikleri</li>
      </ul>
      <h3>Şirket Desteği:</h3>
      <ul>
        <li>%100 katılım ücreti karşılama</li>
        <li>Ulaşım ve konaklama masrafları</li>
        <li>Günlük harcırah</li>
        <li>İş günü sayılma (izin kullanılmaz)</li>
      </ul>
      <h3>Başvuru Koşulları:</h3>
      <ul>
        <li>En az 1 yıl kıdem</li>
        <li>Etkinlik konusunun iş ile ilgili olması</li>
        <li>Yönetici onayı</li>
        <li>Etkinlik sonrası sunum yapma</li>
      </ul>
      <p>Başvuru: hr@workly.com adresine etkinlik detayları ile mail atın.</p>
    `,
    category: AnnouncementCategory.TRAINING,
    priority: AnnouncementPriority.NORMAL,
    author: 'hr-1',
    authorName: 'İnsan Kaynakları',
    publishedAt: '2024-11-28T15:00:00Z',
    isPinned: false,
    isPublished: true,
    coverImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
    tags: ['konferans', 'eğitim', 'geliştirme'],
    departments: [],
    viewCount: 192,
    slug: 'teknoloji-konferansi-katilim-destegi',
    createdAt: '2024-11-27T11:00:00Z',
    updatedAt: '2024-11-28T15:00:00Z',
  },
];

export function getAnnouncementBySlug(slug: string): Announcement | undefined {
  return mockAnnouncements.find((ann) => ann.slug === slug);
}

export function getPinnedAnnouncements(): Announcement[] {
  return mockAnnouncements.filter((ann) => ann.isPinned);
}

export function getAnnouncementsByCategory(category: AnnouncementCategory): Announcement[] {
  return mockAnnouncements.filter((ann) => ann.category === category);
}

