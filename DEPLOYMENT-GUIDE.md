# 🚀 Workly - Vercel Deployment Rehberi

## 📋 Deployment Sırası

### ADIM 1: Her Uygulamayı Vercel'e Deploy Edin

#### 1. Landing (Ana Sayfa)
```bash
Project Name: workly-landing
Root Directory: apps/landing
Framework: Next.js
Domain: workly.com (veya workly-landing.vercel.app)
```

#### 2. Auth (Login)
```bash
Project Name: workly-auth
Root Directory: apps/auth
Framework: Vite
Domain: auth.workly.com (veya workly-auth.vercel.app)
```

#### 3. Shell (Dashboard)
```bash
Project Name: workly-shell
Root Directory: apps/shell
Framework: Next.js
Domain: app.workly.com (veya workly-shell.vercel.app)
```

#### 4. Announcements (Duyurular)
```bash
Project Name: workly-announcements
Root Directory: apps/announcements
Framework: Next.js
```

#### 5. Task Manager (Görevler)
```bash
Project Name: workly-tasks
Root Directory: apps/task-manager
Framework: Next.js
```

#### 6. HR Management (İK)
```bash
Project Name: workly-hr
Root Directory: apps/hr-management
Framework: Angular
```

---

## 🔧 ADIM 2: Environment Variables Ekleyin

### Shell (Dashboard) Environment Variables

Vercel Dashboard → workly-shell → Settings → Environment Variables

```bash
NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announcements.vercel.app
NEXT_PUBLIC_TASKS_URL=https://workly-tasks.vercel.app
NEXT_PUBLIC_HR_URL=https://workly-hr.vercel.app
NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.app
```

### Landing Environment Variables

Vercel Dashboard → workly-landing → Settings → Environment Variables

```bash
NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.app
NEXT_PUBLIC_DASHBOARD_URL=https://workly-shell.vercel.app
```

### Auth Environment Variables

Vercel Dashboard → workly-auth → Settings → Environment Variables

```bash
VITE_DASHBOARD_URL=https://workly-shell.vercel.app
VITE_LANDING_URL=https://workly-landing.vercel.app
```

---

## 🌐 ADIM 3: Domain Ayarları (Opsiyonel)

Kendi domain'iniz varsa:

### Ana Domain
```
workly.com → workly-landing
```

### Subdomain'ler
```
app.workly.com → workly-shell
auth.workly.com → workly-auth
announcements.workly.com → workly-announcements
tasks.workly.com → workly-tasks
hr.workly.com → workly-hr
```

### Vercel'de Domain Ekleme
1. Vercel Dashboard → Project → Settings → Domains
2. "Add Domain" butonuna tıklayın
3. Domain'inizi ekleyin
4. DNS ayarlarını yapın (Vercel size gösterecek)

---

## 📁 Site Yapısı

```
workly.com (Landing)
  └─ Features, Pricing, About
  └─ Login butonu → auth.workly.com

auth.workly.com (Auth)
  └─ /login
  └─ /register
  └─ /forgot-password
  └─ Login sonrası → app.workly.com

app.workly.com (Shell - Dashboard)
  └─ /dashboard (Ana dashboard)
  └─ /announcements (iframe: announcements.workly.com)
  └─ /tasks (iframe: tasks.workly.com)
  └─ /hr-management (iframe: hr.workly.com)
```

---

## ✅ Deployment Checklist

- [ ] Landing deployed
- [ ] Auth deployed
- [ ] Shell deployed
- [ ] Announcements deployed
- [ ] Tasks deployed
- [ ] HR deployed
- [ ] Shell environment variables eklendi
- [ ] Landing environment variables eklendi
- [ ] Auth environment variables eklendi
- [ ] Domain'ler bağlandı (opsiyonel)
- [ ] Tüm uygulamalar test edildi

---

## 🔥 İlk Deploy

```bash
# GitHub'a push
git add .
git commit -m "Add deployment configs"
git push origin main

# Vercel'de New Project → Import
# Her uygulama için tekrarla
```

---

## 🔄 Otomatik Deploy

Her `git push` sonrası:
- Ana branch (main) → Production deploy
- Diğer branch'ler → Preview deploy
- Pull Request → Preview URL

---

## 📞 Destek

Sorun yaşarsanız:
1. Vercel Dashboard → Project → Deployments → Log'lara bakın
2. Build hatalarını kontrol edin
3. Environment variables doğru mu kontrol edin

