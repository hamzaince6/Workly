# 🚀 Workly Micro-Frontend Mimarisi

## 📋 Genel Bakış

Workly, **Micro-Frontend** mimarisine sahip modern bir kurumsal yönetim platformudur. Bu mimari, farklı teknolojilerle geliştirilmiş bağımsız uygulamaların tek bir Shell (Container) içinde birleştirilmesini sağlar.

## 🏗️ Mimari Yapı

```
┌─────────────────────────────────────────────────────────┐
│           Shell App (localhost:3005)                    │
│           ⚛️  Next.js - Container/Dashboard              │
│  ┌──────────┐  ┌────────────────────────────────────┐  │
│  │          │  │                                     │  │
│  │ Sidebar  │  │   Micro-Frontend Content           │  │
│  │ (Sabit)  │  │                                     │  │
│  │          │  │  📦 HR Management (3003)           │  │
│  │  🏠 Dash │  │  📦 Task Manager (3002)            │  │
│  │  👥 HR   │  │  📦 Announcements (3004)           │  │
│  │  ✅ Task │  │  📦 Performance (3006)             │  │
│  │  📢 Anno │  │                                     │  │
│  │          │  │                                     │  │
│  └──────────┘  └────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────┐   │
│  │         Header (Sabit - Arama, Profil)          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Micro-Frontend'ler

| Uygulama | Port | Teknoloji | Amaç |
|----------|------|-----------|------|
| **Landing** | 3000 | Next.js | Ana giriş sayfası, pazarlama |
| **Auth** | 3001 | Vue.js | Kimlik doğrulama (Login/Register) |
| **Task Manager** | 3002 | Next.js | Görev yönetimi, Kanban board |
| **HR Management** | 3003 | Angular | Çalışan yönetimi, izin talepleri |
| **Announcements** | 3004 | Next.js | Duyuru yönetimi, SEO |
| **Shell** | 3005 | Next.js | **Container** - Tüm uygulamaları birleştirir |

## 🚀 Nasıl Çalıştırılır?

### 1️⃣ Tüm Bağımlılıkları Yükle

```bash
pnpm install
```

### 2️⃣ Tüm Uygulamaları Başlat

```bash
pnpm dev
```

Bu komut tüm micro-frontend'leri ve shell app'i aynı anda başlatır:
- ✅ Landing (3000)
- ✅ Auth (3001)
- ✅ Task Manager (3002)
- ✅ HR Management (3003)
- ✅ Announcements (3004)
- ✅ **Shell Dashboard (3005)** 👈 **BURADAN BAŞLA**

### 3️⃣ Shell Dashboard'a Git

```
http://localhost:3005
```

Shell Dashboard açıldığında:
- Sol tarafta **Sidebar** (sabit)
- Üstte **Header** (sabit)
- Ortada **Dashboard** (varsayılan sayfa)

### 4️⃣ Micro-Frontend'lere Geç

Sidebar'dan istediğin modüle tıkla:

- **Dashboard** → Genel özet ve istatistikler
- **HR Management** → Angular app (3003) iframe ile yüklenir
- **Tasks** → Next.js app (3002) iframe ile yüklenir
- **Announcements** → Next.js app (3004) iframe ile yüklenir

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Teal (#0d9488)
- **Secondary**: Green (#22c55e)
- **Gradient**: `from-teal-600 to-green-600`

### Tipografi
- **Font**: Inter (Google Fonts)
- **Başlık**: `text-3xl font-bold text-gray-900`
- **Alt Başlık**: `text-gray-600 mt-1`

### Bileşenler
- **Buttons**: Gradient arka plan, hover efektleri
- **Cards**: Elevated shadow, rounded corners
- **Sidebar**: Fixed width (256px), gradient active state

## 🔧 Teknik Detaylar

### Micro-Frontend Yükleme

Shell App, micro-frontend'leri **iframe** ile yükler:

```typescript
// apps/shell/components/MicroFrontendLoader.tsx
<iframe
  src="http://localhost:3003"  // HR Management
  className="w-full h-full border-0"
  title="HR Management"
  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
/>
```

### Layout Yapısı

```typescript
// apps/shell/app/layout.tsx
<div className="flex h-screen bg-gray-50 overflow-hidden">
  {/* Sidebar - Sabit */}
  <Sidebar />
  
  <div className="flex-1 flex flex-col overflow-hidden">
    {/* Header - Sabit */}
    <Header />
    
    {/* Main Content - Dinamik (Micro-Frontend'ler) */}
    <main className="flex-1 overflow-hidden">
      {children}
    </main>
  </div>
</div>
```

### Route Yapısı

```
/                  → Dashboard (Shell'in kendi sayfası)
/hr                → HR Management (iframe: 3003)
/tasks             → Task Manager (iframe: 3002)
/announcements     → Announcements (iframe: 3004)
/performance       → Performance (iframe: 3006)
```

## 📦 Shared Packages

### 1. `@workly/shared-types`
Ortak tip tanımları (Employee, Task, Leave, Announcement)

### 2. `@workly/shared-ui`
Ortak UI bileşenleri (Button, Card, Avatar, Badge)

### 3. `@workly/shared-utils`
Ortak yardımcı fonksiyonlar (date, format, validation)

### 4. `@workly/event-bus`
Micro-frontend'ler arası iletişim

## 🔄 Micro-Frontend İletişimi

### Event Bus ile İletişim

```typescript
import { eventBus } from '@workly/event-bus';

// Event yayınla
eventBus.emit('employee:created', { id: 123, name: 'Ahmet' });

// Event dinle
eventBus.on('employee:created', (data) => {
  console.log('Yeni çalışan eklendi:', data);
});
```

## 🌍 Çoklu Dil Desteği

Tüm uygulamalar **Türkçe** olarak geliştirilmiştir:
- ✅ UI metinleri
- ✅ Form etiketleri
- ✅ Hata mesajları
- ✅ Dropdown seçenekleri

## 🎯 Avantajları

1. **Teknoloji Bağımsızlığı**: Her micro-frontend farklı teknoloji ile geliştirilmiş
   - Angular (HR Management)
   - Next.js (Tasks, Announcements, Shell)
   - Vue.js (Auth)

2. **Bağımsız Geliştirme**: Her ekip kendi modülünü bağımsız geliştirir

3. **Bağımsız Deployment**: Her micro-frontend ayrı deploy edilebilir

4. **Scalability**: Yeni modüller kolayca eklenebilir

5. **Fault Isolation**: Bir modül hata verse diğerleri çalışmaya devam eder

## 🚧 Gelecek Geliştirmeler

- [ ] **Module Federation** (Webpack 5) ile daha advanced entegrasyon
- [ ] **Server-Side Rendering** (SSR) desteği
- [ ] **Progressive Web App** (PWA) özellik leri
- [ ] **Real-time** güncellemeler (WebSocket)
- [ ] **Advanced Event Bus** (cross-iframe communication)

## 📝 Notlar

### Dikkat Edilmesi Gerekenler

1. **Tüm uygulamalar çalışmalı**: Shell'den bir modüle tıkladığınızda, o modülün kendi portunda çalışıyor olması gerekir.

2. **CORS**: Iframe kullanıldığı için CORS sorunu olmamalı (hepsi localhost)

3. **Responsive**: Mobile için sidebar toggle eklenebilir

4. **Performance**: Iframe başlangıçta yükleniyor, lazy loading eklenebilir

## 🆘 Sorun Giderme

### Problem: Micro-frontend yüklenmiyor

**Çözüm**: İlgili uygulamanın çalıştığından emin ol
```bash
# Örnek: HR Management
cd apps/hr-management
pnpm dev
```

### Problem: Stil uyumsuzlukları

**Çözüm**: Tüm uygulamalarda aynı renk paleti kullanıldığından emin ol (teal-green)

### Problem: Header/Footer duplicate

**Çözüm**: Micro-frontend'lerde Header/Footer olmamalı, sadece Shell'de olmalı

## 🎉 Sonuç

Shell App (localhost:3005) üzerinden tüm modüllere erişebilirsin. Her modül kendi bağımsız uygulaması ama Shell içinde birleşik bir deneyim sunuyor! 🚀

