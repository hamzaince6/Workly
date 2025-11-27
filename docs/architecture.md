# 🏗️ Mimari Dokümantasyon

## Genel Bakış

Workly, **mikro frontend mimarisi** kullanarak geliştirilmiş kurumsal bir platformdur. Her modül bağımsız olarak geliştirilip deploy edilir ancak shell uygulaması üzerinden sorunsuz bir şekilde entegre edilir.

## Mimari Diyagram

```
┌─────────────────────────────────────────┐
│          Shell (Ana Uygulama)           │
│         Next.js 15 - Port 3005          │
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
│ 3002  │ │ 3003 │ │ TBD   │ │ 3004   │
└───────┘ └──────┘ └───────┘ └────────┘
```

## İletişim Katmanı

### Event Bus

Uygulamalar arası olay iletişimi için `@workly/event-bus` paketi kullanılır.

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

### Ortak State

Paylaşılan veri ve kullanıcı bağlamı için localStorage kullanılır.

### Tip Güvenliği

Tüm uygulamalarda paylaşılan TypeScript tipleri `@workly/shared-types` paketinde tanımlanır.

## Modül Detayları

### 1. Shell (Ana Uygulama)

**Port:** 3005  
**Framework:** Next.js 15  
**Amaç:** Ana giriş noktası, navigasyon ve kontrol paneli

**Özellikler:**
- Merkezi navigasyon
- Kullanıcı kimlik doğrulaması (mock)
- İstatistiklerle dashboard
- Modül entegrasyonu (iframe tabanlı)

**Ana Sayfalar:**
- `/` - Dashboard
- `/hr` - İK Yönetimi (iframe)
- `/tasks` - Görev Yöneticisi (iframe)
- `/performance` - Performans Raporları (placeholder)
- `/announcements` - Duyurular (iframe)
- `/settings` - Ayarlar

### 2. Görev Yöneticisi

**Port:** 3003  
**Framework:** Next.js 15  
**Amaç:** Görev ve proje yönetimi

**Özellikler:**
- Kanban panosu (Yapılacak, Devam Ediyor, İncelemede, Tamamlandı)
- Görev filtreleme ve arama
- Öncelik yönetimi
- Proje gruplama
- Gerçek zamanlı güncellemeler (mock)

**Teknolojiler:**
- `@dnd-kit` - Sürükle bırak (planlı)
- Mock veri ile geliştirme

### 3. Duyurular

**Port:** 3004  
**Framework:** Next.js 15 (SSG ile)  
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

**Port:** 3002  
**Framework:** Angular 17  
**Amaç:** Çalışan yönetimi ve İK operasyonları

**Özellikler:**
- Çalışan CRUD
- İzin yönetimi
- Devamsızlık takibi
- Departman yönetimi

### 5. Auth (Kimlik Doğrulama)

**Port:** 3001  
**Framework:** Vue 3 + Vite  
**Amaç:** Kullanıcı girişi ve kayıt

**Özellikler:**
- Kullanıcı girişi ve kayıt
- Şifre kurtarma
- localStorage ile oturum yönetimi
- Giriş sonrası otomatik Shell'e yönlendirme

### 6. Landing (Ana Sayfa)

**Port:** 3000  
**Framework:** Next.js 15  
**Amaç:** Pazarlama sitesi

**Özellikler:**
- Modern, responsive tasarım
- Çağrı-aksiyon bölümleri
- Özellik vitrinleri
- SEO optimize edilmiş

## Proje Yapısı

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
│   ├── shared-utils/             # Yardımcı fonksiyonlar
│   ├── shared-types/             # TypeScript tipleri
│   └── event-bus/                # Uygulamalar arası iletişim
│
├── pnpm-workspace.yaml           # Workspace yapılandırması
├── package.json                  # Root package.json
├── turbo.json                    # Turbo yapılandırması
└── tsconfig.json                 # Temel TypeScript config
```

## Iframe Entegrasyonu

Shell uygulaması, diğer mikro frontend'leri iframe içinde yükler. Bu yaklaşım:

- **İzolasyon:** Her uygulama kendi ortamında çalışır
- **Bağımsızlık:** Her modül bağımsız deploy edilebilir
- **Güvenlik:** Cross-origin izolasyonu sağlar

## Ortam Değişkenleri

Her uygulama kendi `.env.local` dosyasına sahip olabilir. Root seviyesinde `.env.example` dosyası tüm gerekli değişkenleri içerir.

Detaylı bilgi için: [Deployment Dokümantasyonu](deployment.md)

