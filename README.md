# 🚀 Workly - Kurumsal İK & Görev Yönetim Platformu

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D)](https://vuejs.org/)
[![Angular](https://img.shields.io/badge/Angular-17-DD0031)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-orange)](https://pnpm.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> **Workly**, İK yönetimi, görev takibi, performans analitiği ve kurumsal iletişim için **mikro frontend tabanlı** kurumsal bir platformdur. **Next.js 15**, **Vue 3**, **Angular 17** ile geliştirilmiş ve **Vercel** üzerinde modern, ölçeklenebilir bir mimari ile deploy edilmiştir.

🌐 **Canlı Demo:** [https://workly-landing.vercel.app](https://workly-landing.vercel.app)

---

## ✨ Özellikler

### 🏢 Kurumsal Seviye Mimari

- **🔥 Mikro Frontend Mimarisi** - Her modül bağımsız olarak geliştiriliyor, deploy ediliyor ve ölçekleniyor
- **🔒 Iframe Tabanlı Entegrasyon** - Her uygulama için güvenli, izole çalışma ortamı
- **📦 Monorepo Yönetimi** - Turbo ile hızlandırılmış pnpm workspaces
- **🎨 Ortak Bileşen Kütüphanesi** - Tüm modüllerde tutarlı UI/UX
- **🌐 Çoklu Framework Desteği** - Next.js, Vue ve Angular sorunsuz çalışıyor

### 🎯 Ana Modüller

| Modül | Framework | Canlı Link | Durum |
|-------|-----------|------------|-------|
| 🏠 **Landing** | Next.js 15 | [workly-landing.vercel.app](https://workly-landing.vercel.app) | ✅ |
| 🔐 **Auth** | Vue 3 + Vite | [workly-auth.vercel.app](https://workly-auth.vercel.app) | ✅ |
| 🏢 **Shell** | Next.js 15 | [workly-shell.vercel.app](https://workly-shell.vercel.app) | ✅ |
| ✅ **Görevler** | Next.js 15 | [workly-task-manager.vercel.app](https://workly-task-manager.vercel.app) | ✅ |
| 📢 **Duyurular** | Next.js 15 | [workly-announcements.vercel.app](https://workly-announcements.vercel.app) | ✅ |
| 👥 **İK** | Angular 17 | [workly-hr-management.vercel.app](https://workly-hr-management.vercel.app) | ✅ |
| 📊 **Performans** | TBD | *Yakında* | 🚧 |

---

## 🏗️ Mimari

Workly, **mikro frontend mimarisi** kullanmaktadır. Her modül bağımsız olarak geliştirilip deploy edilir ancak shell uygulaması üzerinden sorunsuz bir şekilde entegre edilir.

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

📖 **Detaylı mimari dokümantasyon için:** [docs/architecture.md](docs/architecture.md)

---

## 🚀 Hızlı Başlangıç

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
# cp apps/shell/.env.example apps/shell/.env.local
```

4. **Geliştirme sunucusunu başlatın**
```bash
# Tüm uygulamaları paralel olarak başlat
pnpm dev
```

Bu komut şunları başlatır:
- **Landing**: http://localhost:3000
- **Auth**: http://localhost:3001
- **HR Management**: http://localhost:3002
- **Task Manager**: http://localhost:3003
- **Announcements**: http://localhost:3004
- **Shell**: http://localhost:3005

---

## 📚 Dokümantasyon

Detaylı dokümantasyon için [docs/](docs/) klasörüne bakın:

- [📖 Mimari Dokümantasyon](docs/architecture.md) - Detaylı mimari açıklamaları
- [🔧 Geliştirme Rehberi](docs/development.md) - Geliştirme süreçleri ve best practices
- [📦 Ortak Paketler](docs/packages.md) - Shared packages dokümantasyonu
- [🌐 Deployment](docs/deployment.md) - Deployment rehberi
- [🎯 Roadmap](docs/roadmap.md) - Proje yol haritası
- [🔓 Açık Kaynak Kurulum](docs/open-source-setup.md) - Açık kaynak yapılandırması

---

## 🛠️ Teknoloji Yığını

- **Frontend:** Next.js 15, Vue 3, Angular 17, React 18
- **Styling:** Tailwind CSS
- **Language:** TypeScript 5.3
- **Package Manager:** pnpm
- **Build Tool:** Turbo
- **Deployment:** Vercel

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu yönergeleri takip edin:

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/harika-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/harika-ozellik`)
5. Pull Request açın

📋 **Detaylı katkı rehberi için:** [CONTRIBUTING.md](CONTRIBUTING.md)  
📋 **Katkıda bulunabileceğiniz konular için:** [Issues](https://github.com/hamzaince6/Workly/issues) sayfasına bakın.

---

## 🔒 Güvenlik

Güvenlik açığı bulduysanız, lütfen **hamzaince001@gmail.com** adresine e-posta gönderin.  
Detaylar için: [SECURITY.md](SECURITY.md)

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👥 Yazar

**Hamza İnce** - İlk geliştirme ve mimari tasarım
- GitHub: [@hamzaince6](https://github.com/hamzaince6)

---

<div align="center">
  <strong>Mikro Frontend Mimarisi ile ❤️ ile geliştirildi</strong>
  <br><br>
  <a href="https://workly-landing.vercel.app">🌐 Canlı Demo'yu Görüntüle</a>
</div>
