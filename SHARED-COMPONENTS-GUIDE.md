# 🎨 Shared UI Components Kullanım Kılavuzu

## 📋 Genel Bakış

`@workly/shared-ui` paketi, tüm projeler arasında **tutarlı tasarım** sağlamak için ortak bileşenler içerir. Bu sayede:
- ✅ Logo her yerde aynı görünür
- ✅ Renk paleti tutarlı (teal-green)
- ✅ Kod tekrarı önlenir
- ✅ Tek bir yerde güncelleme yapılır, her yerde etki eder

## 🎯 Mevcut Shared Components

### 1. **Logo**
Tüm projelerde kullanılan Workly logosu.

**Props:**
```typescript
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';        // Boyut
  showText?: boolean;                // Metni göster/gizle
  subtitle?: string;                 // Alt başlık (sadece lg'de)
  href?: string;                     // Link adresi
  className?: string;                // Ek CSS class'ları
  onClick?: () => void;              // Click handler
}
```

**Kullanım (React/Next.js):**
```tsx
import { Logo } from '@workly/shared-ui';

// Basit kullanım
<Logo size="md" showText={true} href="/" />

// Subtitle ile
<Logo size="lg" showText={true} subtitle="Dashboard" href="/" />

// Sadece ikon
<Logo size="sm" showText={false} />
```

---

### 2. **Header**
Standart header bileşeni (arama, bildirimler, profil).

**Props:**
```typescript
interface HeaderProps {
  userName?: string;                 // Kullanıcı adı
  userRole?: string;                 // Kullanıcı rolü
  userAvatar?: string;               // Avatar URL
  showSearch?: boolean;              // Arama barı göster
  searchPlaceholder?: string;        // Arama placeholder
  onSearch?: (query: string) => void;// Arama handler
  notificationCount?: number;        // Bildirim sayısı
  onMenuToggle?: () => void;         // Mobil menü toggle
  className?: string;                // Ek CSS class'ları
  children?: React.ReactNode;        // Özel içerik
}
```

**Kullanım (React/Next.js):**
```tsx
import { Header } from '@workly/shared-ui';

<Header
  userName="Admin Kullanıcı"
  userRole="Sistem Yöneticisi"
  showSearch={true}
  searchPlaceholder="Ara..."
  notificationCount={3}
  onSearch={(query) => console.log(query)}
/>
```

---

### 3. **Footer**
Standart footer bileşeni (linkler, sosyal medya, newsletter).

**Props:**
```typescript
interface FooterProps {
  sections?: FooterSection[];        // Footer bölümleri
  showNewsletter?: boolean;          // Newsletter göster
  onNewsletterSubmit?: (email: string) => void;
  copyrightText?: string;            // Copyright metni
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  className?: string;
}
```

**Kullanım (React/Next.js):**
```tsx
import { Footer } from '@workly/shared-ui';

<Footer
  showNewsletter={true}
  copyrightText="© 2024 Workly"
  socialLinks={{
    facebook: 'https://facebook.com/workly',
    twitter: 'https://twitter.com/workly',
  }}
  contactInfo={{
    email: 'info@workly.com',
    phone: '+90 555 123 4567',
    address: 'İstanbul, Türkiye',
  }}
/>
```

---

### 4. **Diğer UI Bileşenleri**

#### **Button**
```tsx
import { Button } from '@workly/shared-ui';

<Button variant="primary" size="md">
  Kaydet
</Button>
```

#### **Card**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@workly/shared-ui';

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Başlık</CardTitle>
  </CardHeader>
  <CardContent>
    İçerik
  </CardContent>
</Card>
```

#### **Avatar**
```tsx
import { Avatar } from '@workly/shared-ui';

<Avatar
  src="https://example.com/avatar.jpg"
  alt="Kullanıcı"
  fallback="AK"
  size="md"
  status="online"
/>
```

#### **Badge**
```tsx
import { Badge } from '@workly/shared-ui';

<Badge variant="success">Aktif</Badge>
<Badge variant="warning">Beklemede</Badge>
<Badge variant="danger">İnaktif</Badge>
```

---

## 🔧 Framework-Specific Kullanım

### ⚛️ **React / Next.js**
✅ **Direkt kullanım** - Herhangi bir wrapper gerekmez

```tsx
import { Logo, Header, Footer } from '@workly/shared-ui';

export default function Page() {
  return (
    <>
      <Header userName="Admin" userRole="Yönetici" />
      <main>...</main>
      <Footer />
    </>
  );
}
```

**Kullanılan projeler:**
- ✅ Shell (localhost:3005)
- ✅ Landing (localhost:3000)
- ✅ Task Manager (localhost:3002)
- ✅ Announcements (localhost:3004)

---

### 🅰️ **Angular (HR Management)**

❗ **Problem:** Angular, React component'lerini direkt kullanamaz.

**Çözüm 1: Web Components (Önerilen)**
React component'lerini **Web Components**'e dönüştür:

```typescript
// packages/shared-ui-webcomponents/logo.ts
import { createRoot } from 'react-dom/client';
import { Logo } from '@workly/shared-ui';

class LogoElement extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<Logo size="md" showText={true} />);
  }
}

customElements.define('workly-logo', LogoElement);
```

**Angular'da kullanım:**
```html
<!-- app.component.html -->
<workly-logo></workly-logo>
```

**Çözüm 2: Angular Component Wrapper (Şu Anki Durum)**
Aynı tasarımda Angular component'i yaz:

```typescript
// apps/hr-management/src/app/components/logo/logo.component.ts
@Component({
  selector: 'app-logo',
  template: `...` // Aynı tasarım, Angular syntax
})
export class LogoComponent { ... }
```

---

### 🟢 **Vue.js (Auth)**

❗ **Problem:** Vue.js, React component'lerini direkt kullanamaz.

**Çözüm 1: Vue Component Wrapper (Şu Anki Durum)**
Aynı tasarımda Vue component'i yaz:

```vue
<!-- apps/auth/src/components/Logo.vue -->
<template>
  <a :href="href" class="flex items-center gap-2">
    <!-- Aynı SVG ve stil -->
  </a>
</template>

<script setup lang="ts">
// Aynı props interface
</script>
```

**Çözüm 2: @workly/shared-ui-vue (Gelecek)**
Vue uyumlu ayrı bir paket:

```bash
packages/
  shared-ui/          # React bileşenleri
  shared-ui-vue/      # Vue bileşenleri
  shared-ui-angular/  # Angular bileşenleri
```

---

## 📦 Paket Yapısı

```
packages/
├── shared-ui/                    # ✅ React/Next.js için
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.tsx          # ✅ Eklendi
│   │   │   ├── Header.tsx        # ✅ Eklendi
│   │   │   ├── Footer.tsx        # ✅ Eklendi
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Input.tsx
│   │   └── utils/
│   │       └── cn.ts
│   └── package.json
│
├── shared-types/                 # ✅ Tüm projeler için
│   ├── src/
│   │   ├── employee.types.ts
│   │   ├── task.types.ts
│   │   └── announcement.types.ts
│   └── package.json
│
└── shared-utils/                 # ✅ Tüm projeler için
    ├── src/
    │   ├── date.ts
    │   ├── format.ts
    │   └── validation.ts
    └── package.json
```

---

## ✅ Şu Anki Durum

### ✅ **Shared-UI Kullanan Projeler**

| Proje | Framework | Logo | Header | Footer | Status |
|-------|-----------|------|--------|--------|--------|
| Shell | Next.js | ✅ | ✅ | ❌ | **Entegre** |
| Landing | Next.js | ✅ | ❌ | ❌ | **Kısmen** |
| Task Manager | Next.js | ❌ | ❌ | ❌ | **Yapılacak** |
| Announcements | Next.js | ❌ | ❌ | ❌ | **Yapılacak** |
| HR Management | Angular | ❌ | ❌ | ❌ | **Wrapper Gerekli** |
| Auth | Vue.js | ❌ | ❌ | ❌ | **Wrapper Gerekli** |

### ❌ **Hala Lokal Component Kullanan Projeler**

- **Auth (Vue.js)** → `apps/auth/src/components/Logo.vue`
- **HR Management (Angular)** → `apps/hr-management/src/app/components/logo/`

---

## 🚀 Yapılması Gerekenler

### 1. **Task Manager ve Announcements**
Shared-UI'yi entegre et (React olduğu için kolay):

```tsx
// apps/task-manager/components/Header.tsx
import { Logo } from '@workly/shared-ui';

export function Header() {
  return (
    <header>
      <Logo size="md" showText={true} href="/" />
      ...
    </header>
  );
}
```

### 2. **Angular (HR Management)**
Web Components veya Angular wrapper oluştur:

**Seçenek A: Web Components**
```bash
# Yeni paket oluştur
mkdir packages/shared-ui-webcomponents
```

**Seçenek B: Mevcut Angular bileşenlerini koru**
- Tasarımı shared-ui ile senkronize tut
- Renkleri ve stilleri aynı yap

### 3. **Vue.js (Auth)**
Vue wrapper paketi oluştur:

```bash
# Yeni paket oluştur
mkdir packages/shared-ui-vue
```

---

## 💡 Best Practices

### ✅ **DO:**
- Shared-UI'yi mümkün olduğunca kullan
- Yeni bileşen eklerken önce shared-ui'ye ekle
- Tüm projelerde aynı renk paletini kullan (teal-green)
- Props interface'lerini TypeScript ile tanımla

### ❌ **DON'T:**
- Her projede aynı bileşeni yeniden yazma
- Lokal component'lerde farklı renkler kullanma
- Shared-UI'yi bypass etme

---

## 🎨 Renk Paleti (Shared)

Tüm projeler **aynı renk paletini** kullanmalı:

```css
/* Primary - Teal */
--primary-50: #f0fdfa;
--primary-100: #ccfbf1;
--primary-200: #99f6e4;
--primary-300: #5eead4;
--primary-400: #2dd4bf;
--primary-500: #14b8a6;
--primary-600: #0d9488;   /* ← Ana renk */
--primary-700: #0f766e;
--primary-800: #115e59;
--primary-900: #134e4a;

/* Secondary - Green */
--secondary-50: #f0fdf4;
--secondary-100: #dcfce7;
--secondary-200: #bbf7d0;
--secondary-300: #86efac;
--secondary-400: #4ade80;
--secondary-500: #22c55e;
--secondary-600: #16a34a;  /* ← Ana renk */
--secondary-700: #15803d;
--secondary-800: #166534;
--secondary-900: #14532d;
```

---

## 🔄 Migration Checklist

### Next.js Projeleri (Kolay)
- [ ] Task Manager → Logo, Header, Footer ekle
- [ ] Announcements → Logo, Header, Footer ekle
- [ ] Landing → Header ve Footer ekle

### Angular (Orta)
- [ ] Web Components paketi oluştur
- [ ] Logo, Header, Footer'ı web component'e dönüştür
- [ ] HR Management'ta kullan

### Vue.js (Orta)
- [ ] shared-ui-vue paketi oluştur
- [ ] Logo, Header, Footer'ı Vue syntax'ına dönüştür
- [ ] Auth'da kullan

---

## 📚 Sonuç

**Shared-UI**, tüm projelerde **tutarlılık** ve **code reusability** sağlar. React/Next.js projeleri için direkt kullanılabilir, Angular ve Vue için wrapper'lar veya Web Components ile entegre edilebilir.

**İleri Seviye Çözüm:** Module Federation kullanarak tüm framework'lere ortak bileşenler sağlanabilir! 🚀

