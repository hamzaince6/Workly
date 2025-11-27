# 💻 Geliştirme Rehberi

## Geliştirme Ortamı Kurulumu

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

3. **Ortam değişkenlerini ayarlayın**
```bash
# Root .env.example dosyasını kopyalayın
cp .env.example .env

# Her uygulama için .env.example dosyalarını da kopyalayın (opsiyonel)
cp apps/shell/.env.example apps/shell/.env.local
cp apps/auth/.env.example apps/auth/.env.local
cp apps/task-manager/.env.example apps/task-manager/.env.local
cp apps/announcements/.env.example apps/announcements/.env.local
```

## Geliştirme Komutları

### Tüm Uygulamaları Çalıştırma

```bash
# Tüm mikro frontend'leri paralel olarak başlat
pnpm dev
```

Bu komut şunları başlatır:
- **Landing**: http://localhost:3000
- **Auth**: http://localhost:3001
- **HR Management**: http://localhost:3002
- **Task Manager**: http://localhost:3003
- **Announcements**: http://localhost:3004
- **Shell**: http://localhost:3005

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

## Kod Stili

### TypeScript

- Tüm dosyalar TypeScript ile yazılmalı
- Strict mode aktif
- Anlamlı tip tanımları kullanılmalı

### Formatlama

- Prettier kullanılır
- ESLint kurallarına uyulmalı
- Commit öncesi format kontrolü yapılmalı

### Commit Mesajları

Anlamlı commit mesajları yazın:

```
feat: Task Manager'a drag-and-drop özelliği eklendi
fix: Auth sayfasında token hatası düzeltildi
docs: README'ye deployment bilgisi eklendi
refactor: Event bus yapısı iyileştirildi
```

## Yeni Modül Ekleme

1. `apps/` klasörü altında yeni klasör oluşturun
2. Gerekli `package.json` dosyasını ekleyin
3. Root `package.json`'a workspace ekleyin
4. `.env.example` dosyası oluşturun
5. Shell uygulamasına route ekleyin

## Ortak Paketler Kullanımı

### Shared UI

```tsx
import { Button, Card } from '@workly/shared-ui';

<Button variant="primary" size="md">
  Tıkla
</Button>
```

### Shared Utils

```ts
import { formatDate, isEmail } from '@workly/shared-utils';

const formatted = formatDate(new Date(), 'DD/MM/YYYY');
const valid = isEmail('kullanici@example.com');
```

### Shared Types

```ts
import { Employee, Task, Announcement } from '@workly/shared-types';
```

### Event Bus

```ts
import { eventBus, WorklyEvents } from '@workly/event-bus';

// Dinle
eventBus.on(WorklyEvents.TASK_CREATED, (data) => {
  console.log('Görev oluşturuldu:', data);
});

// Yayınla
eventBus.emit(WorklyEvents.TASK_CREATED, { taskId: '123' });
```

## Debugging

### Chrome DevTools

Her mikro frontend kendi iframe'inde çalıştığı için, DevTools'ta doğru iframe'i seçtiğinizden emin olun.

### Console Logging

Geliştirme sırasında console.log kullanabilirsiniz, ancak production build'lerde bunlar otomatik olarak temizlenir.

## Test

Şu anda test altyapısı kurulmamıştır. Gelecekte eklenecektir.

## Pull Request Süreci

1. Feature branch oluşturun
2. Değişikliklerinizi yapın
3. Lint ve type-check çalıştırın
4. Commit edin
5. Push edin
6. Pull Request açın

PR açmadan önce:
- ✅ Tüm linter'lar geçiyor mu?
- ✅ TypeScript hataları var mı?
- ✅ Dokümantasyon güncellendi mi?
- ✅ README güncellendi mi?

