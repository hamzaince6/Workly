# 🚀 Workly - Kurumsal İK & Görev Yönetim Platformu

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D)](https://vuejs.org/)
[![Angular](https://img.shields.io/badge/Angular-17-DD0031)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-orange)](https://pnpm.io/)
[![Vercel'de Yayında](https://img.shields.io/badge/Vercel'de-Yayında-black)](https://vercel.com)

> **Workly**, İK yönetimi, görev takibi, performans analitiği ve kurumsal iletişim için **mikro frontend tabanlı** kurumsal bir platformdur. **Next.js 15**, **Vue 3**, **Angular 17** ile geliştirilmiş ve **Vercel** üzerinde modern, ölçeklenebilir bir mimari ile deploy edilmiştir.

🌐 **Canlı Demo:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)

---

## 📋 İçindekiler

- [✨ Özellikler](#-özellikler)
- [🎯 Canlı Uygulamalar](#-canlı-uygulamalar)
- [🏗️ Mimari](#️-mimari)
- [🛠️ Teknoloji Yığını](#️-teknoloji-yığını)
- [📁 Proje Yapısı](#-proje-yapısı)
- [🚀 Başlangıç](#-başlangıç)
- [💻 Geliştirme](#-geliştirme)
- [🌐 Deployment](#-deployment)
- [📦 Mikro Frontend'ler](#-mikro-frontendler)
- [📚 Ortak Paketler](#-ortak-paketler)
- [🎯 Yol Haritası](#-yol-haritası)
- [🤝 Katkıda Bulunma](#-katkıda-bulunma)
- [📄 Lisans](#-lisans)

---

## ✨ Özellikler

### 🏢 Kurumsal Seviye Mimari

- **🔥 Mikro Frontend Mimarisi** - Her modül bağımsız olarak geliştiriliyor, deploy ediliyor ve ölçekleniyor
- **🔒 Iframe Tabanlı Entegrasyon** - Her uygulama için güvenli, izole çalışma ortamı
- **📦 Monorepo Yönetimi** - Turbo ile hızlandırılmış pnpm workspaces
- **🎨 Ortak Bileşen Kütüphanesi** - Tüm modüllerde tutarlı UI/UX
- **🌐 Çoklu Framework Desteği** - Next.js, Vue ve Angular sorunsuz çalışıyor
- **⚡ Ortam Tabanlı Yapılandırma** - Tüm uygulamalar için merkezi .env yönetimi

### 🎯 Ana Modüller

#### 1. 🏠 **Landing (Ana Sayfa)**
- Modern, responsive pazarlama sitesi
- Çağrı-aksiyon bölümleri
- Özellik vitrinleri
- SEO optimize edilmiş
- **Framework:** Next.js 15
- **Canlı:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)

#### 2. 🔐 **Kimlik Doğrulama**
- Kullanıcı girişi ve kayıt
- Şifre kurtarma
- localStorage ile oturum yönetimi
- Güzel, responsive kimlik doğrulama formları
- Giriş sonrası otomatik Shell'e yönlendirme
- **Framework:** Vue 3 + Vite
- **Canlı:** [https://workly-auth.vercel.app](https://workly-auth.vercel.app)

#### 3. 🏢 **Shell (Kontrol Paneli)**
- Merkezi navigasyon merkezi
- Genel istatistikler ve KPI'lar
- Son aktivite akışı
- Iframe entegrasyonu ile modül başlatıcı
- Responsive yan menü navigasyonu
- Çıkış yapma özelliği
- **Framework:** Next.js 15
- **Canlı:** [https://workly-shell.vercel.app](https://workly-shell.vercel.app)

#### 4. ✅ **Görev Yöneticisi**
- Kanban tarzı görev panosu (Yapılacak, Devam Eden, İnceleme, Tamamlandı)
- Görev oluşturma ve yönetimi
- Öncelik seviyeleri (Düşük, Orta, Yüksek, Acil)
- Proje kategorilendirme
- Bitiş tarihi takibi
- Görev arama ve filtreleme
- **Framework:** Next.js 15
- **Canlı:** [https://workly-task-manager.vercel.app](https://workly-task-manager.vercel.app)

#### 5. 📢 **Duyurular**
- Şirket çapında duyurular
- Performans için Static Site Generation (SSG)
- SEO optimize edilmiş duyuru sayfaları
- Sabitlenmiş duyurular
- Kategori filtreleme
- Görüntüleme ve etkileşim takibi
- **Framework:** Next.js 15
- **Canlı:** [https://workly-announcements.vercel.app](https://workly-announcements.vercel.app)

#### 6. 👥 **İnsan Kaynakları Yönetimi**
- Çalışan dizini ve yönetimi
- İzin talep sistemi
- Devamsızlık takibi
- Departman organizasyonu
- **Framework:** Angular 17
- **Canlı:** [https://workly-hr-management.vercel.app](https://workly-hr-management.vercel.app)

#### 7. 📊 **Performans Yönetimi** *(Planlanıyor)*
- Çalışan performans takibi
- KPI panoları ve analizler
- Hedef belirleme ve OKR'ler
- İnceleme döngüleri ve geri bildirim
- Performans raporları
- **Durum:** Planlama aşamasında

---

## 🎯 Canlı Uygulamalar

Tüm uygulamalar Vercel üzerinde deploy edilmiş ve tam işlevsel:

| Uygulama | URL | Framework | Durum |
|----------|-----|-----------|-------|
| 🏠 **Landing** | [workly-landing.vercel.app](https://workly-landing.vercel.app) | Next.js 15 | ✅ Canlı |
| 🔐 **Auth** | [workly-auth.vercel.app](https://workly-auth.vercel.app) | Vue 3 + Vite | ✅ Canlı |
| 🏢 **Shell** | [workly-shell.vercel.app](https://workly-shell.vercel.app) | Next.js 15 | ✅ Canlı |
| ✅ **Görevler** | [workly-task-manager.vercel.app](https://workly-task-manager.vercel.app) | Next.js 15 | ✅ Canlı |
| 📢 **Duyurular** | [workly-announcements.vercel.app](https://workly-announcements.vercel.app) | Next.js 15 | ✅ Canlı |
| 👥 **İK** | [workly-hr-management.vercel.app](https://workly-hr-management.vercel.app) | Angular 17 | ✅ Canlı |
| 📊 **Performans** | *Yakında* | TBD | 🚧 Planlama |

---

## 🏗️ Mimari

Workly, **mikro frontend mimarisi** kullanmaktadır. Her modül bağımsız olarak geliştirilip deploy edilir ancak shell uygulaması üzerinden sorunsuz bir şekilde entegre edilir.

```
┌─────────────────────────────────────────┐
│          Shell (Ana Uygulama)           │
│         Next.js 15 - Port 3000          │
│  ┌───────────────────────────────────┐  │
│  │   Navigasyon & Kimlik Doğrulama  │  │
│  └───────────────────────────────────┘  │
└─────────────┬───────────────────────────┘
              │
    ┌─────────┼─────────┬─────────┐
    │         │         │         │
┌───▼───┐ ┌──▼───┐ ┌───▼───┐ ┌───▼────┐
│  İK   │ │Görev │ │Perf.  │ │Duyuru  │
│Angular│ │Next  │ │Angular│ │Next    │
│ 3001  │ │ 3001 │ │ TBD   │ │ 3002   │
└───────┘ └──────┘ └───────┘ └────────┘
```

### İletişim Katmanı
- **Event Bus** - Uygulamalar arası olay iletişimi
- **Ortak State** - Paylaşılan veri ve kullanıcı bağlamı
- **Tip Güvenliği** - Tüm uygulamalarda paylaşılan TypeScript tipleri

---

## 🛠️ Teknoloji Yığını

### Frontend Framework'leri
- **Next.js 15** - Shell, Görev Yöneticisi, Duyurular, Landing (App Router)
- **Vue 3 + Vite** - Kimlik Doğrulama
- **Angular 17** - İK Yönetimi
- **React 18** - UI bileşenleri

### Stil & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Ortak UI Bileşenleri** - Özel bileşen kütüphanesi
- **Lucide React** - Güzel ikon seti

### Geliştirme Araçları
- **TypeScript** - Statik tipleme
- **pnpm** - Hızlı, disk-verimli paket yöneticisi
- **Turbo** - Artımlı build sistemi
- **ESLint** - Kod linting
- **Prettier** - Kod formatlama

### State & Veri
- **Pinia** - Vue state yönetimi
- **Mock Data** - Geliştirme için dahili mock veri
- **Event Bus** - Uygulamalar arası iletişim
- **Local Storage** - İstemci tarafı kalıcılık

### Deployment & CI/CD
- **Vercel** - Hosting ve otomatik deployment
- **Git** - Versiyon kontrolü
- **GitHub** - Kod repository

---

## 📁 Proje Yapısı

```
workly/
├── apps/
│   ├── shell/                    # Ana uygulama (Next.js 15)
│   │   ├── app/                  # App router sayfaları
│   │   ├── components/           # Shell-özel bileşenler
│   │   ├── lib/                  # Yardımcı fonksiyonlar
│   │   └── package.json
│   │
│   ├── task-manager/             # Görev yönetimi modülü (Next.js)
│   │   ├── app/                  # Görev sayfaları
│   │   ├── components/           # Görev bileşenleri
│   │   ├── data/                 # Mock veri
│   │   └── package.json
│   │
│   ├── announcements/            # Duyurular modülü (Next.js)
│   │   ├── app/                  # Duyuru sayfaları
│   │   ├── data/                 # Mock duyurular
│   │   └── package.json
│   │
│   ├── auth/                     # Kimlik doğrulama (Vue 3)
│   │   ├── src/
│   │   │   ├── views/            # Login, Register
│   │   │   ├── stores/           # Pinia stores
│   │   │   └── router/           # Vue Router
│   │   └── package.json
│   │
│   ├── landing/                  # Ana sayfa (Next.js 15)
│   │   ├── app/
│   │   ├── components/
│   │   └── package.json
│   │
│   └── hr-management/            # İK modülü (Angular 17)
│       └── package.json
│
├── packages/
│   ├── shared-ui/                # Ortak UI bileşenleri
│   │   ├── src/
│   │   │   ├── components/       # Button, Card, Input, vb.
│   │   │   └── utils/            # UI yardımcı fonksiyonları
│   │   └── package.json
│   │
│   ├── shared-utils/             # Yardımcı fonksiyonlar
│   │   ├── src/
│   │   │   ├── date.utils.ts     # Tarih formatlama
│   │   │   ├── validation.utils.ts
│   │   │   ├── format.utils.ts
│   │   │   └── array.utils.ts
│   │   └── package.json
│   │
│   ├── shared-types/             # TypeScript tipleri
│   │   ├── src/
│   │   │   ├── employee.types.ts
│   │   │   ├── task.types.ts
│   │   │   ├── announcement.types.ts
│   │   │   └── user.types.ts
│   │   └── package.json
│   │
│   └── event-bus/                # Uygulamalar arası iletişim
│       ├── src/
│       │   ├── event-bus.ts      # Event emitter
│       │   └── events.ts         # Event tanımları
│       └── package.json
│
├── pnpm-workspace.yaml           # Workspace yapılandırması
├── package.json                  # Root package.json
├── turbo.json                    # Turbo yapılandırması
├── tsconfig.json                 # Temel TypeScript config
└── README.md                     # Bu dosya
```

---

## 🚀 Başlangıç

### Ön Gereksinimler

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

```bash
# pnpm'i global olarak yükleyin (yoksa)
npm install -g pnpm@8.12.0
```

### Kurulum

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/hamzaince6/Workly.git
cd workly
```

2. **Bağımlılıkları yükleyin**
```bash
pnpm install
```

Bu komut root, apps ve packages için tüm bağımlılıkları yükleyecektir.

3. **Ortam değişkenlerini ayarlayın**
```bash
# .env.example dosyasını kopyalayın
cp .env.example .env

# .env dosyasını düzenleyin (gerekirse)
```

---

## 💻 Geliştirme

### Tüm Uygulamaları Çalıştırma
```bash
# Tüm mikro frontend'leri paralel olarak başlat
pnpm dev
```

Bu komut şunları başlatır:
- **Landing**: http://localhost:3000
- **Auth**: http://localhost:3001
- **Shell**: http://localhost:3005
- **Task Manager**: http://localhost:3003
- **Announcements**: http://localhost:3004
- **HR Management**: http://localhost:3002

### Tekil Uygulamaları Çalıştırma
```bash
# Landing
pnpm --filter landing dev

# Auth
pnpm --filter auth dev

# Shell (Kontrol Paneli)
pnpm --filter shell dev

# Görev Yöneticisi
pnpm --filter task-manager dev

# Duyurular
pnpm --filter announcements dev

# İK Yönetimi
pnpm --filter hr-management dev
```

### Build Alma
```bash
# Tüm uygulamaları build et
pnpm build

# Tekil uygulama build et
pnpm --filter shell build
pnpm --filter task-manager build
pnpm --filter announcements build
pnpm --filter auth build
pnpm --filter hr-management build
```

### Linting & Formatlama
```bash
# Tüm projeleri lint et
pnpm lint

# Tüm dosyaları formatla
pnpm format

# Tip kontrolü yap
pnpm type-check
```

### Build Artifact'lerini Temizleme
```bash
pnpm clean
```

---

## 📦 Mikro Frontend'ler

### 1. Shell (Ana Uygulama)

**Port:** 3000  
**Framework:** Next.js 15  
**Amaç:** Ana giriş noktası, navigasyon ve kontrol paneli

**Özellikler:**
- Merkezi navigasyon
- Kullanıcı kimlik doğrulaması (mock)
- İstatistiklerle dashboard
- Modül entegrasyonu

**Ana Sayfalar:**
- `/` - Dashboard
- `/hr` - İK Yönetimi (placeholder)
- `/tasks` - Görev Yöneticisi (placeholder)
- `/performance` - Performans Raporları (placeholder)
- `/announcements` - Duyurular (placeholder)

### 2. Görev Yöneticisi

**Port:** 3001  
**Framework:** Next.js  
**Amaç:** Görev ve proje yönetimi

**Özellikler:**
- Kanban panosu (Yapılacak, Devam Ediyor, İncelemede, Tamamlandı)
- Görev filtreleme ve arama
- Öncelik yönetimi
- Proje gruplama
- Gerçek zamanlı güncellemeler (mock)

**Teknolojiler:**
- `@dnd-kit` - Sürükle bırak (planlı)
- 8+ örnek görev içeren mock veri

### 3. Duyurular

**Port:** 3002  
**Framework:** Next.js (SSG ile)  
**Amaç:** Şirket duyuruları ve haberler

**Özellikler:**
- SEO optimize edilmiş sayfalar
- Static Site Generation
- Sabitlenmiş duyurular
- Kategori filtreleme
- Zengin içerik gösterimi
- Görüntüleme takibi

**Rotalar:**
- `/` - Tüm duyurular
- `/announcement/[slug]` - Tekil duyuru (SSG)

### 4. İK Yönetimi

**Durum:** Planlandı (Angular)  
**Amaç:** Çalışan yönetimi ve İK operasyonları

**Planlanan Özellikler:**
- Çalışan CRUD
- İzin yönetimi
- Devamsızlık takibi
- Departman yönetimi

---

## 📚 Ortak Paketler

### @workly/shared-ui

Tailwind CSS ile yeniden kullanılabilir React UI bileşenleri.

**Bileşenler:**
- `Button` - Primary, secondary, outline, ghost, danger varyantları
- `Card` - Header, content, footer ile esnek kart bileşeni
- `Input` - Doğrulama durumları ile form input
- `Badge` - Renk varyantları ile durum rozetleri
- `Avatar` - Durum göstergeli kullanıcı avatarları

**Kullanım:**
```tsx
import { Button, Card } from '@workly/shared-ui';

<Button variant="primary" size="md">
  Tıkla
</Button>
```

### @workly/shared-utils

Ortak yardımcı fonksiyonlar.

**Modüller:**
- `date.utils` - Tarih formatlama ve manipülasyon
- `validation.utils` - Form doğrulama
- `format.utils` - String formatlama, para birimi, dosya boyutu
- `array.utils` - Dizi operasyonları (groupBy, sortBy, unique)
- `object.utils` - Obje operasyonları (deepClone, merge)
- `storage.utils` - LocalStorage, SessionStorage wrapper'ları

**Kullanım:**
```ts
import { formatDate, isEmail } from '@workly/shared-utils';

const formatted = formatDate(new Date(), 'DD/MM/YYYY');
const valid = isEmail('kullanici@example.com');
```

### @workly/shared-types

Tüm uygulamalarda paylaşılan TypeScript tip tanımları.

**Tip Kategorileri:**
- Employee types (Employee, LeaveRequest, Attendance)
- Task types (Task, Project, TaskActivity)
- Announcement types (Announcement, AnnouncementCategory)
- Performance types (PerformanceReview, KPI, Goal)
- User types (User, UserRole, Permission)
- Common types (ApiResponse, Pagination)

**Kullanım:**
```ts
import { Employee, Task, Announcement } from '@workly/shared-types';
```

### @workly/event-bus

Uygulamalar arası event iletişim sistemi.

**Özellikler:**
- Tip güvenli event sistemi
- Subscribe/unsubscribe
- Tek seferlik dinleyiciler
- Önceden tanımlı event isimleri

**Kullanım:**
```ts
import { eventBus, WorklyEvents } from '@workly/event-bus';

// Dinle
eventBus.on(WorklyEvents.TASK_CREATED, (data) => {
  console.log('Görev oluşturuldu:', data);
});

// Yayınla
eventBus.emit(WorklyEvents.TASK_CREATED, { taskId: '123' });
```

---

## 🌐 Deployment

### Vercel Deployment (Önerilen)

Her mikro frontend ayrı bir Vercel projesi olarak deploy edilebilir:

**1. Shell Uygulaması**
```bash
cd apps/shell
vercel --prod
```

**2. Görev Yöneticisi**
```bash
cd apps/task-manager
vercel --prod
```

**3. Duyurular**
```bash
cd apps/announcements
vercel --prod
```

### Ortam Değişkenleri

Her uygulamada `.env.local` dosyaları oluşturun:

```env
# apps/shell/.env.local
NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task.vercel.app
NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announce.vercel.app
NEXT_PUBLIC_HR_URL=https://workly-hr.vercel.app

# apps/task-manager/.env.local
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app

# apps/announcements/.env.local
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app
```

### Beklenen URL'ler
- **Shell**: `https://workly-shell.vercel.app`
- **Görev Yöneticisi**: `https://workly-task.vercel.app`
- **Duyurular**: `https://workly-announce.vercel.app`
- **İK Yönetimi**: `https://workly-hr.vercel.app`

---

## 🎯 Yol Haritası

### Faz 1 ✅ (Tamamlandı)
- [x] pnpm monorepo ile proje kurulumu
- [x] Ortak paketler (UI, Utils, Types, Event Bus)
- [x] Shell kontrol paneli
- [x] Görev Yöneticisi Kanban panosu
- [x] Duyurular SSG ile
- [x] Landing sayfası
- [x] Auth uygulaması (Vue 3)
- [x] İK Yönetimi (Angular 17)
- [x] Vercel deployment

### Faz 2 🚧 (Devam Ediyor)
- [ ] Module Federation implementasyonu
- [ ] Görev Yöneticisi'nde gerçek drag-and-drop
- [ ] Kullanıcı kimlik doğrulama sistemi
- [ ] Backend API entegrasyonu

### Faz 3 📋 (Planlanıyor)
- [ ] Performans Raporları modülü (Angular)
- [ ] Gerçek zamanlı WebSocket entegrasyonu
- [ ] Gelişmiş analitik dashboard
- [ ] Mobil responsive iyileştirmeler
- [ ] Dark mode desteği

### Faz 4 🔮 (Gelecek)
- [ ] Veritabanı kalıcılığı
- [ ] Kullanıcı rolleri ve yetkileri
- [ ] E-posta bildirimleri
- [ ] PDF export işlevselliği
- [ ] Çoklu dil desteği (i18n)
- [ ] Progressive Web App (PWA)

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu yönergeleri takip edin:

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/harika-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/harika-ozellik`)
5. Pull Request açın

### Geliştirme Yönergeleri
- Mevcut kod stilini takip edin
- Anlamlı commit mesajları yazın
- Yeni özellikler için test ekleyin
- Dokümantasyonu güncelleyin
- PR göndermeden önce tüm linter'ların geçtiğinden emin olun

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👥 Yazar

**Hamza İnce** - İlk geliştirme ve mimari tasarım
- GitHub: [@hamzaince6](https://github.com/hamzaince6)

---

## 🙏 Teşekkürler

- Next.js ekibine harika framework için
- Vue.js ve Angular ekiplerine mükemmel framework'ler için
- Vercel'e hosting platformu için
- Tailwind CSS'e utility-first CSS framework için
- Kullanılan tüm açık kaynak paketlerin katkıcılarına

---

## 📞 Destek

Destek için hamzaince001@gmail.com adresine e-posta gönderin.

---

<div align="center">
  <strong>Mikro Frontend Mimarisi ile ❤️ ile geliştirildi</strong>
  <br><br>
  <a href="https://workly-landing.vercel.app">🌐 Canlı Demo'yu Görüntüle</a>
</div>
