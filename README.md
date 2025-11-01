# 🚀 Workly - Kurumsal İK & Görev Yönetim Platformu# 🚀 Workly - Enterprise HR & Task Management Platform



[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)

[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D)](https://vuejs.org/)[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D)](https://vuejs.org/)

[![Angular](https://img.shields.io/badge/Angular-17-DD0031)](https://angular.io/)[![Angular](https://img.shields.io/badge/Angular-17-DD0031)](https://angular.io/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)

[![pnpm](https://img.shields.io/badge/pnpm-9.x-orange)](https://pnpm.io/)[![pnpm](https://img.shields.io/badge/pnpm-9.x-orange)](https://pnpm.io/)

[![Vercel'de Yayında](https://img.shields.io/badge/Vercel'de-Yayında-black)](https://vercel.com)[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)



> **Workly**, İK yönetimi, görev takibi, performans analitiği ve kurumsal iletişim için **mikro frontend tabanlı** kurumsal bir platformdur. **Next.js 15**, **Vue 3**, **Angular 17** ile geliştirilmiş ve **Vercel** üzerinde modern, ölçeklenebilir bir mimari ile deploy edilmiştir.> **Workly** is a cutting-edge **microfrontend-based** enterprise platform for HR management, task tracking, performance analytics, and company communications. Built with **Next.js 15**, **Vue 3**, **Angular 17**, and deployed on **Vercel** with a modern, scalable architecture.



🌐 **Canlı Demo:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)🌐 **Live Demo:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)



------



## 📋 İçindekiler## 📋 Table of Contents



- [✨ Özellikler](#-özellikler)- [✨ Features](#-features)

- [🎯 Canlı Uygulamalar](#-canlı-uygulamalar)- [🎯 Live Applications](#-live-applications)

- [🏗️ Mimari](#️-mimari)- [🏗️ Architecture](#️-architecture)

- [🛠️ Teknoloji Yığını](#️-teknoloji-yığını)- [🛠️ Tech Stack](#️-tech-stack)

- [📁 Proje Yapısı](#-proje-yapısı)- [📁 Project Structure](#-project-structure)

- [🚀 Başlangıç](#-başlangıç)- [🚀 Getting Started](#-getting-started)

- [💻 Geliştirme](#-geliştirme)- [💻 Development](#-development)

- [🌐 Deployment](#-deployment)- [🌐 Deployment](#-deployment)

- [📦 Mikro Frontend'ler](#-mikro-frontendler)- [📦 Microfrontends](#-microfrontends)

- [📚 Ortak Paketler](#-ortak-paketler)- [📚 Shared Packages](#-shared-packages)

- [🎯 Yol Haritası](#-yol-haritası)- [🎯 Roadmap](#-roadmap)

- [🤝 Katkıda Bulunma](#-katkıda-bulunma)- [🤝 Contributing](#-contributing)

- [📄 Lisans](#-lisans)- [📄 License](#-license)



------



## ✨ Özellikler## ✨ Features



### 🏢 Kurumsal Seviye Mimari### 🏢 Enterprise-Ready Architecture

- **🔥 Mikro Frontend Mimarisi** - Her modül bağımsız olarak geliştiriliyor, deploy ediliyor ve ölçekleniyor- **🔥 Microfrontend Architecture** - Each module is independently developed, deployed, and scaled

- **🔒 Iframe Tabanlı Entegrasyon** - Her uygulama için güvenli, izole çalışma ortamı- **🔒 Iframe-Based Integration** - Secure, isolated runtime environments for each application

- **📦 Monorepo Yönetimi** - Turbo ile hızlandırılmış pnpm workspaces- **📦 Monorepo Management** - pnpm workspaces with Turbo for blazing-fast builds

- **🎨 Ortak Bileşen Kütüphanesi** - Tüm modüllerde tutarlı UI/UX- **🎨 Shared Component Library** - Consistent UI/UX across all modules

- **🌐 Çoklu Framework Desteği** - Next.js, Vue ve Angular sorunsuz çalışıyor- **🌐 Multi-Framework Support** - Next.js, Vue, and Angular working seamlessly together

- **⚡ Ortam Tabanlı Yapılandırma** - Tüm uygulamalar için merkezi .env yönetimi- **⚡ Environment-Based Configuration** - Centralized .env management for all apps



### 🎯 Ana Modüller### 🎯 Core Modules



#### 1. 🏠 **Landing (Ana Sayfa)**#### 1. 🏠 **Landing Page**

- Modern, responsive pazarlama sitesi- Modern, responsive marketing site

- Çağrı-aksiyon bölümleri- Call-to-action sections

- Özellik vitrinleri- Feature showcases

- SEO optimize edilmiş- SEO-optimized

- **Framework:** Next.js 15- **Framework:** Next.js 15

- **Canlı:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)- **Live:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)



#### 2. 🔐 **Kimlik Doğrulama**#### 2. 🔐 **Authentication**

- Kullanıcı girişi ve kayıt- User login and registration

- Şifre kurtarma- Password recovery

- localStorage ile oturum yönetimi- Session management with localStorage

- Güzel, responsive kimlik doğrulama formları- Beautiful, responsive auth forms

- Giriş sonrası otomatik Shell'e yönlendirme- Automatic redirect to Shell after login

- **Framework:** Vue 3 + Vite- **Framework:** Vue 3 + Vite

- **Canlı:** [https://workly-auth.vercel.app](https://workly-auth.vercel.app)- **Live:** [https://workly-auth.vercel.app](https://workly-auth.vercel.app)



#### 3. 🏢 **Shell (Kontrol Paneli)**#### 3. 🏢 **Shell (Dashboard)**

- Merkezi navigasyon merkezi- Centralized navigation hub

- Genel istatistikler ve KPI'lar- Overview statistics and KPIs

- Son aktivite akışı- Recent activity feed

- Iframe entegrasyonu ile modül başlatıcı- Module launcher with iframe integration

- Responsive yan menü navigasyonu- Responsive sidebar navigation

- Çıkış yapma özelliği- Logout functionality

- **Framework:** Next.js 15- **Framework:** Next.js 15

- **Canlı:** [https://workly-shell.vercel.app](https://workly-shell.vercel.app)- **Live:** [https://workly-shell.vercel.app](https://workly-shell.vercel.app)



#### 4. ✅ **Görev Yöneticisi**#### 4. ✅ **Task Manager**

- Kanban tarzı görev panosu (Yapılacak, Devam Eden, İnceleme, Tamamlandı)- Kanban-style task board (To Do, In Progress, In Review, Done)

- Görev oluşturma ve yönetimi- Task creation and management

- Öncelik seviyeleri (Düşük, Orta, Yüksek, Acil)- Priority levels (Low, Medium, High, Urgent)

- Proje kategorilendirme- Project categorization

- Bitiş tarihi takibi- Due date tracking

- Görev arama ve filtreleme- Task search and filtering

- **Framework:** Next.js 15- **Framework:** Next.js 15

- **Canlı:** [https://workly-task-manager.vercel.app](https://workly-task-manager.vercel.app)- **Live:** [https://workly-task-manager.vercel.app](https://workly-task-manager.vercel.app)



#### 5. 📢 **Duyurular**#### 5. 📢 **Announcements**

- Şirket çapında duyurular- Company-wide announcements

- Performans için Static Site Generation (SSG)- Static Site Generation (SSG) for performance

- SEO optimize edilmiş duyuru sayfaları- SEO-optimized announcement pages

- Sabitlenmiş duyurular- Pinned announcements

- Kategori filtreleme- Category filtering

- Görüntüleme ve etkileşim takibi- View and engagement tracking

- **Framework:** Next.js 15- **Framework:** Next.js 15

- **Canlı:** [https://workly-announcements.vercel.app](https://workly-announcements.vercel.app)- **Live:** [https://workly-announcements.vercel.app](https://workly-announcements.vercel.app)



#### 6. 👥 **İnsan Kaynakları Yönetimi**#### 6. 👥 **HR Management**

- Çalışan dizini ve yönetimi- Employee directory and management

- İzin talep sistemi- Leave request system

- Devamsızlık takibi- Attendance tracking

- Departman organizasyonu- Department organization

- **Framework:** Angular 17- **Framework:** Angular 17

- **Canlı:** [https://workly-hr-management.vercel.app](https://workly-hr-management.vercel.app)- **Live:** [https://workly-hr-management.vercel.app](https://workly-hr-management.vercel.app)



#### 7. 📊 **Performans Yönetimi** *(Planlanıyor)*#### 7. 📊 **Performance Management** *(Planned)*

- Çalışan performans takibi- Employee performance tracking

- KPI panoları ve analizler- KPI dashboards and analytics

- Hedef belirleme ve OKR'ler- Goal setting and OKRs

- İnceleme döngüleri ve geri bildirim- Review cycles and feedback

- Performans raporları- Performance reports

- **Durum:** Planlama aşamasında- **Status:** In Planning



------



## 🎯 Canlı Uygulamalar## � Live Applications



Tüm uygulamalar Vercel üzerinde deploy edilmiş ve tam işlevsel:All applications are deployed on Vercel and fully functional:



| Uygulama | URL | Framework | Durum || Application | URL | Framework | Status |

|----------|-----|-----------|-------||------------|-----|-----------|--------|

| 🏠 **Landing** | [workly-landing.vercel.app](https://workly-landing.vercel.app) | Next.js 15 | ✅ Canlı || 🏠 **Landing** | [workly-landing.vercel.app](https://workly-landing.vercel.app) | Next.js 15 | ✅ Live |

| 🔐 **Auth** | [workly-auth.vercel.app](https://workly-auth.vercel.app) | Vue 3 + Vite | ✅ Canlı || 🔐 **Auth** | [workly-auth.vercel.app](https://workly-auth.vercel.app) | Vue 3 + Vite | ✅ Live |

| 🏢 **Shell** | [workly-shell.vercel.app](https://workly-shell.vercel.app) | Next.js 15 | ✅ Canlı || 🏢 **Shell** | [workly-shell.vercel.app](https://workly-shell.vercel.app) | Next.js 15 | ✅ Live |

| ✅ **Görevler** | [workly-task-manager.vercel.app](https://workly-task-manager.vercel.app) | Next.js 15 | ✅ Canlı || ✅ **Tasks** | [workly-task-manager.vercel.app](https://workly-task-manager.vercel.app) | Next.js 15 | ✅ Live |

| 📢 **Duyurular** | [workly-announcements.vercel.app](https://workly-announcements.vercel.app) | Next.js 15 | ✅ Canlı || 📢 **Announcements** | [workly-announcements.vercel.app](https://workly-announcements.vercel.app) | Next.js 15 | ✅ Live |

| 👥 **İK** | [workly-hr-management.vercel.app](https://workly-hr-management.vercel.app) | Angular 17 | ✅ Canlı || 👥 **HR** | [workly-hr-management.vercel.app](https://workly-hr-management.vercel.app) | Angular 17 | ✅ Live |

| 📊 **Performans** | *Yakında* | TBD | 🚧 Planlama || 📊 **Performance** | *Coming Soon* | TBD | 🚧 Planning |



------



## 🏗️ Mimari## �🏗️ Architecture



Workly, **iframe tabanlı entegrasyon** kullanarak **gerçek bir mikro frontend mimarisi** uygulamaktadır. Her uygulama:Workly uses a **microfrontend architecture** where each module is developed and deployed independently but integrated seamlessly through the shell application.

- ✅ **Bağımsız olarak deploy edilebilir** (Vercel'de)

- ✅ **Teknoloji agnostik** (Next.js, Vue, Angular)```

- ✅ **İzole çalışma ortamı** (versiyon çakışması yok)┌─────────────────────────────────────────┐

- ✅ **Güvenli** (cross-origin izolasyonu)│          Shell (Host App)               │

│         Next.js 15 - Port 3000          │

### Sistem Mimarisi│  ┌───────────────────────────────────┐  │

│  │   Navigation & Authentication     │  │

```│  └───────────────────────────────────┘  │

┌─────────────────────────────────────────────────────────┐└─────────────┬───────────────────────────┘

│              Landing Page (Giriş Noktası)               │              │

│           https://workly-landing.vercel.app              │    ┌─────────┼─────────┬─────────┐

│                     Next.js 15                          │    │         │         │         │

└─────────────────┬───────────────────────────────────────┘┌───▼───┐ ┌──▼───┐ ┌───▼───┐ ┌───▼────┐

                  ││  HR   │ │Tasks │ │Perf.  │ │Announce│

                  ▼│Angular│ │Next  │ │Angular│ │Next    │

┌─────────────────────────────────────────────────────────┐│ 3001  │ │ 3001 │ │ TBD   │ │ 3002   │

│           Kimlik Doğrulama (Vue 3)                      │└───────┘ └──────┘ └───────┘ └────────┘

│           https://workly-auth.vercel.app                 │```

│         Giriş → Shell'e Yönlendirme                     │

└─────────────────┬───────────────────────────────────────┘### Communication Layer

                  │- **Event Bus** - Cross-application event communication

                  ▼- **Shared State** - Common data and user context

┌─────────────────────────────────────────────────────────┐- **Type Safety** - Shared TypeScript types across all apps

│        Shell - Ana Kontrol Paneli (Next.js)             │

│         https://workly-shell.vercel.app                  │---

│  ┌────────────────────────────────────────────────┐    │

│  │   Yan Menü Navigasyonu + Iframe Konteyneri    │    │## 🛠️ Tech Stack

│  │                                                 │    │

│  │   Dinamik olarak mikro frontend'leri yükler:   │    │### Frontend Frameworks

│  │   • Görev Yöneticisi (iframe)                  │    │- **Next.js 15** - Shell, Task Manager, Announcements (App Router)

│  │   • Duyurular (iframe)                         │    │- **Angular** - HR Management (planned)

│  │   • İK Yönetimi (iframe)                       │    │- **React 18** - UI components

│  │   • Performans (iframe) - Yakında              │    │

│  └────────────────────────────────────────────────┘    │### Styling & UI

└─────────────────────────────────────────────────────────┘- **Tailwind CSS** - Utility-first CSS framework

                  │- **Shared UI Components** - Custom component library

        ┌─────────┼─────────┬─────────┬─────────┐- **Lucide React** - Beautiful icon set

        │         │         │         │         │

   ┌────▼───┐ ┌──▼───┐ ┌───▼────┐ ┌──▼────┐ ┌──▼────┐### Development Tools

   │  İK    │ │Görev │ │Duyuru  │ │Perf.  │ │Daha...│- **TypeScript** - Static typing

   │Angular │ │Next  │ │ Next   │ │ TBD   │ │       │- **pnpm** - Fast, disk-efficient package manager

   │17      │ │15    │ │ 15     │ │       │ │       │- **Turbo** - Incremental build system

   └────────┘ └──────┘ └────────┘ └───────┘ └───────┘- **ESLint** - Code linting

```- **Prettier** - Code formatting



### Kimlik Doğrulama Akışı### State & Data

- **Mock Data** - Built-in mock data for development

```- **Event Bus** - Inter-app communication

Kullanıcı → Landing → "Giriş Yap" Tıkla - **Local Storage** - Client-side persistence

         → Auth Uygulaması → Kimlik Bilgileri Gir 

         → Başarılı → Shell Kontrol Paneli---

         → Modül Seç → Iframe mikro frontend'i yükler

```## 📁 Project Structure



### Ortam Değişkeni Yönetimi```

workly/

Tüm uygulamalar monorepo kökündeki **merkezi `.env` dosyasını** paylaşır:├── apps/

│   ├── shell/                    # Host application (Next.js 15)

```env│   │   ├── app/                  # App router pages

# Next.js uygulamaları (NEXT_PUBLIC_*)│   │   ├── components/           # Shell-specific components

NEXT_PUBLIC_LANDING_URL=https://workly-landing.vercel.app│   │   ├── lib/                  # Utilities

NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.app│   │   └── package.json

NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app│   │

NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task-manager.vercel.app│   ├── task-manager/             # Task management module (Next.js)

NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announcements.vercel.app│   │   ├── app/                  # Task pages

NEXT_PUBLIC_HR_MANAGEMENT_URL=https://workly-hr-management.vercel.app│   │   ├── components/           # Task components

│   │   ├── data/                 # Mock data

# Vite uygulamaları (VITE_*)│   │   └── package.json

VITE_LANDING_URL=https://workly-landing.vercel.app│   │

VITE_SHELL_URL=https://workly-shell.vercel.app│   ├── announcements/            # Announcements module (Next.js)

VITE_AUTH_URL=https://workly-auth.vercel.app│   │   ├── app/                  # Announcement pages

```│   │   ├── data/                 # Mock announcements

│   │   └── package.json

---│   │

│   └── hr-management/            # HR module (Angular - planned)

## 🛠️ Teknoloji Yığını│       └── package.json

│

### Frontend Framework'leri├── packages/

- **Next.js 15** - Shell, Görev Yöneticisi, Duyurular, Landing (App Router)│   ├── shared-ui/                # Shared UI components

- **Vue 3 + Vite** - Kimlik Doğrulama│   │   ├── src/

- **Angular 17** - İK Yönetimi│   │   │   ├── components/       # Button, Card, Input, etc.

- **React 18** - UI bileşenleri│   │   │   └── utils/            # UI utilities

│   │   └── package.json

### Stil & UI│   │

- **Tailwind CSS** - Utility-first CSS framework│   ├── shared-utils/             # Utility functions

- **Ortak UI Bileşenleri** - Özel bileşen kütüphanesi│   │   ├── src/

- **Lucide React** - Güzel ikon seti│   │   │   ├── date.utils.ts     # Date formatting

- **Headless UI** - Erişilebilir UI bileşenleri│   │   │   ├── validation.utils.ts

│   │   │   ├── format.utils.ts

### Geliştirme Araçları│   │   │   └── array.utils.ts

- **TypeScript 5.3** - Statik tipleme│   │   └── package.json

- **pnpm** - Hızlı, disk-verimli paket yöneticisi│   │

- **Turbo** - Artımlı build sistemi│   ├── shared-types/             # TypeScript types

- **ESLint** - Kod linting│   │   ├── src/

- **Prettier** - Kod formatlama│   │   │   ├── employee.types.ts

│   │   │   ├── task.types.ts

### State & Veri│   │   │   ├── announcement.types.ts

- **Pinia** - Vue state yönetimi│   │   │   └── user.types.ts

- **Mock Data** - Geliştirme için dahili mock veri│   │   └── package.json

- **Event Bus** - Uygulamalar arası iletişim│   │

- **Local Storage** - İstemci tarafı kalıcılık│   └── event-bus/                # Inter-app communication

│       ├── src/

### Deployment & CI/CD│       │   ├── event-bus.ts      # Event emitter

- **Vercel** - Hosting ve otomatik deployment│       │   └── events.ts         # Event definitions

- **Git** - Versiyon kontrolü│       └── package.json

- **GitHub** - Kod repository│

├── pnpm-workspace.yaml           # Workspace configuration

---├── package.json                  # Root package.json

├── turbo.json                    # Turbo configuration

## 📁 Proje Yapısı├── tsconfig.json                 # Base TypeScript config

└── README.md                     # This file

``````

workly/

├── apps/---

│   ├── landing/                  # Ana sayfa (Next.js 15)

│   │   ├── app/                  # App router sayfaları## 🚀 Getting Started

│   │   ├── components/           # Landing bileşenleri

│   │   │   ├── Header.tsx        # Navigasyon başlığı### Prerequisites

│   │   │   └── sections/         # Sayfa bölümleri

│   │   ├── lib/                  # Yardımcı fonksiyonlar- **Node.js** >= 18.0.0

│   │   └── package.json- **pnpm** >= 8.0.0

│   │

│   ├── auth/                     # Kimlik doğrulama (Vue 3)```bash

│   │   ├── src/# Install pnpm globally if you haven't

│   │   │   ├── views/            # Login, Register, ForgotPasswordnpm install -g pnpm@8.12.0

│   │   │   ├── stores/           # Pinia stores (auth.ts)```

│   │   │   ├── router/           # Vue Router

│   │   │   └── components/       # Logo, form bileşenleri### Installation

│   │   ├── vite.config.ts        # Vite yapılandırması

│   │   └── package.json1. **Clone the repository**

│   │```bash

│   ├── shell/                    # Ana kontrol paneli (Next.js 15)git clone <repository-url>

│   │   ├── app/                  # Dashboard ve modül sayfalarıcd workly

│   │   ├── components/```

│   │   │   ├── Header.tsx        # Üst başlık

│   │   │   ├── Sidebar.tsx       # Yan menü navigasyonu2. **Install dependencies**

│   │   │   ├── MicroFrontendLoader.tsx  # Iframe yükleyici```bash

│   │   │   └── dashboard/        # Dashboard bileşenleripnpm install

│   │   ├── contexts/```

│   │   │   └── SidebarContext.tsx # Sidebar state yönetimi

│   │   └── package.jsonThis will install all dependencies for the root, apps, and packages.

│   │

│   ├── task-manager/             # Görev yönetimi (Next.js 15)---

│   │   ├── app/                  # Görev sayfaları

│   │   ├── components/           # TaskCard, TaskFilters, vb.## 💻 Development

│   │   ├── data/                 # Mock görevler

│   │   └── package.json### Run All Applications

│   │

│   ├── announcements/            # Duyurular (Next.js 15)```bash

│   │   ├── app/                  # Duyuru sayfaları# Start all microfrontends in parallel

│   │   │   └── announcement/[slug]/  # Dinamik SSG sayfalarıpnpm dev

│   │   ├── components/           # AnnouncementCard, vb.```

│   │   ├── data/                 # Mock duyurular

│   │   └── package.jsonThis will start:

│   │- **Shell**: http://localhost:3000

│   └── hr-management/            # İK yönetimi (Angular 17)- **Task Manager**: http://localhost:3001

│       ├── src/- **Announcements**: http://localhost:3002

│       │   ├── app/              # Angular bileşenleri

│       │   └── environments/     # Ortam yapılandırmaları### Run Individual Applications

│       ├── angular.json

│       └── package.json```bash

│# Shell (Dashboard)

├── packages/pnpm dev:shell

│   ├── shared-ui/                # Ortak UI bileşenleri

│   │   ├── src/# Task Manager

│   │   │   ├── components/       # Button, Card, Input, Badge, vb.pnpm dev:task

│   │   │   └── utils/            # UI yardımcı fonksiyonları

│   │   └── package.json# Announcements

│   │pnpm dev:announce

│   ├── shared-utils/             # Yardımcı fonksiyonlar

│   │   ├── src/# HR Management (when available)

│   │   │   ├── date.utils.ts     # Tarih formatlamapnpm dev:hr

│   │   │   ├── validation.utils.ts # Form doğrulama```

│   │   │   ├── format.utils.ts   # String formatlama

│   │   │   └── array.utils.ts    # Dizi operasyonları### Build Applications

│   │   └── package.json

│   │```bash

│   ├── shared-types/             # TypeScript tipleri# Build all apps

│   │   ├── src/pnpm build

│   │   │   ├── employee.types.ts

│   │   │   ├── task.types.ts# Build individual app

│   │   │   ├── announcement.types.tspnpm build:shell

│   │   │   └── user.types.tspnpm build:task

│   │   └── package.jsonpnpm build:announce

│   │```

│   └── event-bus/                # Uygulamalar arası iletişim

│       ├── src/### Linting & Formatting

│       │   ├── event-bus.ts      # Event emitter

│       │   └── events.ts         # Event tanımları```bash

│       └── package.json# Lint all projects

│pnpm lint

├── .env                          # Merkezi ortam değişkenleri (gitignore)

├── .env.example                  # Ortam değişkenleri şablonu# Format all files

├── pnpm-workspace.yaml           # Workspace yapılandırmasıpnpm format

├── package.json                  # Root package.json

├── turbo.json                    # Turbo yapılandırması# Type check all projects

├── tsconfig.json                 # Temel TypeScript configpnpm type-check

└── README.md                     # Bu dosya```

```

### Clean Build Artifacts

---

```bash

## 🚀 Başlangıçpnpm clean

```

### Ön Gereksinimler

---

- **Node.js** >= 18.0.0

- **pnpm** >= 9.0.0## 📦 Microfrontends



```bash### 1. Shell (Host Application)

# pnpm'i global olarak yükleyin (yoksa)

npm install -g pnpm**Port:** 3000  

```**Framework:** Next.js 15  

**Purpose:** Main entry point, navigation, and dashboard

### Kurulum

**Features:**

1. **Repository'yi klonlayın**- Centralized navigation

```bash- User authentication (mock)

git clone https://github.com/hamzaince6/Workly.git- Dashboard with statistics

cd workly- Module integration

```

**Key Pages:**

2. **Bağımlılıkları yükleyin**- `/` - Dashboard

```bash- `/hr` - HR Management (placeholder)

pnpm install- `/tasks` - Task Manager (placeholder)

```- `/performance` - Performance Reports (placeholder)

- `/announcements` - Announcements (placeholder)

Bu komut root, apps ve packages için tüm bağımlılıkları yükleyecektir.

### 2. Task Manager

3. **Ortam değişkenlerini ayarlayın**

```bash**Port:** 3001  

# .env.example dosyasını kopyalayın**Framework:** Next.js  

cp .env.example .env**Purpose:** Task and project management



# .env dosyasını düzenleyin (gerekirse)**Features:**

```- Kanban board (To Do, In Progress, In Review, Done)

- Task filtering and search

---- Priority management

- Project grouping

## 💻 Geliştirme- Real-time updates (mock)



### Tüm Uygulamaları Çalıştırma**Tech:**

- `@dnd-kit` - Drag and drop (planned)

```bash- Mock task data with 8+ sample tasks

# Tüm mikro frontend'leri paralel olarak başlat

pnpm dev### 3. Announcements

```

**Port:** 3002  

Bu komut şunları başlatır:**Framework:** Next.js (with SSG)  

- **Landing**: http://localhost:3000**Purpose:** Company announcements and news

- **Auth**: http://localhost:3001

- **Shell**: http://localhost:3005**Features:**

- **Task Manager**: http://localhost:3003- SEO-optimized pages

- **Announcements**: http://localhost:3004- Static Site Generation

- **HR Management**: http://localhost:3002- Pinned announcements

- Category filtering

### Tekil Uygulamaları Çalıştırma- Rich content display

- View tracking

```bash

# Landing**Routes:**

pnpm --filter landing dev- `/` - All announcements

- `/announcement/[slug]` - Individual announcement (SSG)

# Auth

pnpm --filter auth dev### 4. HR Management



# Shell (Kontrol Paneli)**Status:** Planned (Angular)  

pnpm --filter shell dev**Purpose:** Employee management and HR operations



# Görev Yöneticisi**Planned Features:**

pnpm --filter task-manager dev- Employee CRUD

- Leave management

# Duyurular- Attendance tracking

pnpm --filter announcements dev- Department management



# İK Yönetimi---

pnpm --filter hr-management dev

```## 📚 Shared Packages



### Build Alma### @workly/shared-ui



```bashReusable React UI components with Tailwind CSS.

# Tüm uygulamaları build et

pnpm build**Components:**

- `Button` - Primary, secondary, outline, ghost, danger variants

# Tekil uygulama build et- `Card` - Versatile card component with header, content, footer

pnpm --filter shell build- `Input` - Form input with validation states

pnpm --filter task-manager build- `Badge` - Status badges with color variants

pnpm --filter announcements build- `Avatar` - User avatars with status indicators

pnpm --filter auth build

pnpm --filter hr-management build**Usage:**

``````tsx

import { Button, Card } from '@workly/shared-ui';

### Linting & Formatlama

<Button variant="primary" size="md">

```bash  Click Me

# Tüm projeleri lint et</Button>

pnpm lint```



# Tüm dosyaları formatla### @workly/shared-utils

pnpm format

Common utility functions.

# Tip kontrolü yap

pnpm type-check**Modules:**

```- `date.utils` - Date formatting and manipulation

- `validation.utils` - Form validation

### Build Artifact'lerini Temizleme- `format.utils` - String formatting, currency, file size

- `array.utils` - Array operations (groupBy, sortBy, unique)

```bash- `object.utils` - Object operations (deepClone, merge)

pnpm clean- `storage.utils` - LocalStorage, SessionStorage wrappers

```

**Usage:**

---```ts

import { formatDate, isEmail } from '@workly/shared-utils';

## 🌐 Deployment

const formatted = formatDate(new Date(), 'DD/MM/YYYY');

### Vercel Deploymentconst valid = isEmail('user@example.com');

```

Her mikro frontend ayrı bir Vercel projesi olarak deploy edilmiştir:

### @workly/shared-types

**Otomatik Deployment:**

- `main` branch'e her push otomatik olarak production'a deploy edilirTypeScript type definitions shared across all apps.

- Her pull request preview deployment oluşturur

**Type Categories:**

**Manuel Deployment:**- Employee types (Employee, LeaveRequest, Attendance)

```bash- Task types (Task, Project, TaskActivity)

# Vercel CLI ile deploy- Announcement types (Announcement, AnnouncementCategory)

cd apps/shell- Performance types (PerformanceReview, KPI, Goal)

vercel --prod- User types (User, UserRole, Permission)

```- Common types (ApiResponse, Pagination)



### Deployment URL'leri**Usage:**

```ts

Tüm uygulamalar şu URL'lerde canlıdır:import { Employee, Task, Announcement } from '@workly/shared-types';

```

- **Landing**: https://workly-landing.vercel.app

- **Auth**: https://workly-auth.vercel.app### @workly/event-bus

- **Shell**: https://workly-shell.vercel.app

- **Task Manager**: https://workly-task-manager.vercel.appCross-application event communication system.

- **Announcements**: https://workly-announcements.vercel.app

- **HR Management**: https://workly-hr-management.vercel.app**Features:**

- Type-safe event system

### Ortam Değişkenleri (Vercel)- Subscribe/unsubscribe

- One-time listeners

Her Vercel projesinde aşağıdaki environment variables tanımlıdır:- Predefined event names



**Landing:****Usage:**

```env```ts

NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.appimport { eventBus, WorklyEvents } from '@workly/event-bus';

```

// Subscribe

**Auth (Vite):**eventBus.on(WorklyEvents.TASK_CREATED, (data) => {

```env  console.log('Task created:', data);

VITE_LANDING_URL=https://workly-landing.vercel.app});

VITE_SHELL_URL=https://workly-shell.vercel.app

```// Emit

eventBus.emit(WorklyEvents.TASK_CREATED, { taskId: '123' });

**Shell:**```

```env

NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.app---

NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task-manager.vercel.app

NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announcements.vercel.app## 🌐 Deployment

NEXT_PUBLIC_HR_MANAGEMENT_URL=https://workly-hr-management.vercel.app

```### Vercel Deployment (Recommended)



---Each microfrontend can be deployed as a separate Vercel project:



## 📦 Mikro Frontend'ler**1. Shell Application**

```bash

### 1. Landing (Ana Sayfa)cd apps/shell

vercel --prod

**Port:** 3000  ```

**Framework:** Next.js 15  

**Amaç:** Pazarlama sayfası ve giriş noktası**2. Task Manager**

```bash

**Özellikler:**cd apps/task-manager

- Modern, responsive tasarımvercel --prod

- Hero section ve CTA butonları```

- Özellik vitrinleri

- Footer ve navigasyon**3. Announcements**

- Auth'a yönlendirme```bash

cd apps/announcements

**Ana Sayfalar:**vercel --prod

- `/` - Ana sayfa```



### 2. Auth (Kimlik Doğrulama)### Environment Variables



**Port:** 3001  Create `.env.local` files in each app:

**Framework:** Vue 3 + Vite  

**Amaç:** Kullanıcı girişi ve kayıt```env

# apps/shell/.env.local

**Özellikler:**NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task.vercel.app

- Login formuNEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announce.vercel.app

- Register formuNEXT_PUBLIC_HR_URL=https://workly-hr.vercel.app

- Şifre unuttum

- Pinia ile state yönetimi# apps/task-manager/.env.local

- localStorage ile oturumNEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app

- Başarılı giriş sonrası Shell'e yönlendirme

# apps/announcements/.env.local

**Rotalar:**NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app

- `/auth/login` - Giriş sayfası```

- `/auth/register` - Kayıt sayfası

- `/auth/forgot-password` - Şifre kurtarma### Expected URLs



**Teknolojiler:**- **Shell**: `https://workly-shell.vercel.app`

- Vue Router- **Task Manager**: `https://workly-task.vercel.app`

- Pinia- **Announcements**: `https://workly-announce.vercel.app`

- Vue Toastification- **HR Management**: `https://workly-hr.vercel.app`

- Splide.js (carousel)

---

### 3. Shell (Kontrol Paneli)

## 🎯 Roadmap

**Port:** 3005  

**Framework:** Next.js 15  ### Phase 1 ✅ (Current)

**Amaç:** Ana kontrol paneli ve modül entegrasyonu- [x] Project setup with pnpm monorepo

- [x] Shared packages (UI, Utils, Types, Event Bus)

**Özellikler:**- [x] Shell application with dashboard

- Dashboard özet kartları- [x] Task Manager with Kanban board

- Yan menü navigasyonu- [x] Announcements with SSG

- Iframe ile mikro frontend yükleme

- Son aktiviteler### Phase 2 🚧 (In Progress)

- Responsive tasarım- [ ] Angular HR Management module

- Çıkış yapma (Auth'a yönlendirme)- [ ] Module Federation implementation

- [ ] Real drag-and-drop in Task Manager

**Ana Sayfalar:**- [ ] User authentication system

- `/` - Dashboard

- `/tasks` - Görev Yöneticisi iframe### Phase 3 📋 (Planned)

- `/announcements` - Duyurular iframe- [ ] Performance Reports module (Angular)

- `/hr-management` - İK iframe- [ ] Real-time WebSocket integration

- `/performance` - Performans iframe (yakında)- [ ] Advanced analytics dashboard

- [ ] Mobile responsive improvements

**Bileşenler:**- [ ] Dark mode support

- `Header.tsx` - Üst başlık

- `Sidebar.tsx` - Yan menü### Phase 4 🔮 (Future)

- `MicroFrontendLoader.tsx` - Iframe yükleyici- [ ] Backend API integration

- `dashboard/` - Dashboard kartları- [ ] Database persistence

- [ ] User roles and permissions

### 4. Task Manager (Görev Yöneticisi)- [ ] Email notifications

- [ ] PDF export functionality

**Port:** 3003  - [ ] Multi-language support (i18n)

**Framework:** Next.js 15  

**Amaç:** Görev ve proje yönetimi---



**Özellikler:**## 🤝 Contributing

- Kanban panosu (4 kolon)

- Görev oluşturma ve düzenlemeWe welcome contributions! Please follow these guidelines:

- Öncelik seviyeleri

- Proje filtreleme1. Fork the repository

- Arama fonksiyonu2. Create a feature branch (`git checkout -b feature/amazing-feature`)

- Mock veri (8+ örnek görev)3. Commit your changes (`git commit -m 'Add amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)

**Kolonlar:**5. Open a Pull Request

- To Do (Yapılacak)

- In Progress (Devam Ediyor)### Development Guidelines

- In Review (İncelemede)

- Done (Tamamlandı)- Follow the existing code style

- Write meaningful commit messages

**Rotalar:**- Add tests for new features

- `/` - Ana görev panosu- Update documentation as needed

- `/new` - Yeni görev oluştur- Ensure all linters pass before submitting PR



### 5. Announcements (Duyurular)---



**Port:** 3004  ## 📄 License

**Framework:** Next.js 15 (SSG)  

**Amaç:** Şirket duyuruları ve haberlerThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



**Özellikler:**---

- Static Site Generation (SSG)

- SEO optimize edilmiş## 👥 Authors

- Sabitlenmiş duyurular

- Kategori filtreleme**Hamza** - Initial work and architecture

- Görüntüleme sayısı

- Mock veri (6+ duyuru)---



**Rotalar:**## 🙏 Acknowledgments

- `/` - Tüm duyurular listesi

- `/announcement/[slug]` - Tekil duyuru (SSG)- Next.js team for the amazing framework

- Vercel for hosting platform

**SSG:**- Tailwind CSS for the utility-first CSS framework

- Build time'da tüm duyuru sayfaları oluşturulur- All contributors to the open-source packages used

- Hızlı sayfa yükleme

- SEO dostu---



### 6. HR Management (İK Yönetimi)## 📞 Support



**Port:** 3002  For support, email hamza@workly.com or join our Slack channel.

**Framework:** Angular 17  

**Amaç:** Çalışan ve İK operasyonları---



**Planlanan Özellikler:**<div align="center">

- Çalışan CRUD  <strong>Built with ❤️ using Microfrontend Architecture</strong>

- İzin yönetimi</div>

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

## 🎯 Yol Haritası

### Faz 1 ✅ (Tamamlandı)
- [x] pnpm monorepo ile proje kurulumu
- [x] Ortak paketler (UI, Utils, Types, Event Bus)
- [x] Landing sayfası
- [x] Auth uygulaması (Vue 3)
- [x] Shell kontrol paneli
- [x] Görev Yöneticisi Kanban panosu
- [x] Duyurular SSG ile
- [x] İK Yönetimi (Angular 17)
- [x] Vercel deployment
- [x] Merkezi .env yönetimi

### Faz 2 🚧 (Devam Ediyor)
- [ ] Performans Yönetimi modülü
- [ ] Görev Yöneticisi'nde gerçek drag-and-drop
- [ ] Backend API entegrasyonu
- [ ] Gerçek veritabanı bağlantısı

### Faz 3 📋 (Planlanıyor)
- [ ] Gerçek zamanlı WebSocket entegrasyonu
- [ ] Gelişmiş analitik dashboard
- [ ] Mobil responsive iyileştirmeler
- [ ] Dark mode desteği
- [ ] Kullanıcı rolleri ve yetkileri

### Faz 4 🔮 (Gelecek)
- [ ] E-posta bildirimleri
- [ ] PDF export işlevselliği
- [ ] Çoklu dil desteği (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Offline destek

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

---

## 🙏 Teşekkürler

- Next.js ekibine harika framework için
- Vercel'e hosting platformu için
- Vue.js ve Angular ekiplerine
- Tailwind CSS'e utility-first CSS framework için
- Kullanılan tüm açık kaynak paketlerin katkıcılarına

---

## 📞 Destek

Destek için hamzaince6@gmail.com adresine e-posta gönderin.

---

<div align="center">
  <strong>Mikro Frontend Mimarisi ile ❤️ ile geliştirildi</strong>
  <br><br>
  <a href="https://workly-landing.vercel.app">🌐 Canlı Demo'yu Görüntüle</a>
</div>
