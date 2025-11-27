# 🌐 Deployment Dokümantasyonu

## Vercel Deployment (Önerilen)

Her mikro frontend ayrı bir Vercel projesi olarak deploy edilebilir.

### 1. Shell Uygulaması

```bash
cd apps/shell
vercel --prod
```

### 2. Görev Yöneticisi

```bash
cd apps/task-manager
vercel --prod
```

### 3. Duyurular

```bash
cd apps/announcements
vercel --prod
```

### 4. Auth Uygulaması

```bash
cd apps/auth
vercel --prod
```

### 5. Landing Sayfası

```bash
cd apps/landing
vercel --prod
```

### 6. İK Yönetimi (Angular)

```bash
cd apps/hr-management
vercel --prod
```

## Ortam Değişkenleri

Her uygulamada Vercel dashboard'dan ortam değişkenlerini ayarlayın.

### Shell App (.env.local)

```env
NEXT_PUBLIC_TASK_MANAGER_URL=https://workly-task-manager.vercel.app
NEXT_PUBLIC_ANNOUNCEMENTS_URL=https://workly-announcements.vercel.app
NEXT_PUBLIC_HR_URL=https://workly-hr-management.vercel.app
NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.app
```

### Task Manager App (.env.local)

```env
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app
```

### Announcements App (.env.local)

```env
NEXT_PUBLIC_SHELL_URL=https://workly-shell.vercel.app
```

### Auth App (.env.local)

```env
VITE_SHELL_URL=https://workly-shell.vercel.app
VITE_LANDING_URL=https://workly-landing.vercel.app
VITE_AUTH_URL=https://workly-auth.vercel.app
```

### Landing App (.env.local)

```env
NEXT_PUBLIC_AUTH_URL=https://workly-auth.vercel.app
```

## Beklenen URL'ler

Production ortamında beklenen URL yapısı:

- **Shell**: `https://workly-shell.vercel.app`
- **Görev Yöneticisi**: `https://workly-task-manager.vercel.app`
- **Duyurular**: `https://workly-announcements.vercel.app`
- **İK Yönetimi**: `https://workly-hr-management.vercel.app`
- **Auth**: `https://workly-auth.vercel.app`
- **Landing**: `https://workly-landing.vercel.app`

## Vercel Preview Environments

Vercel, her pull request için otomatik olarak preview environment oluşturur. Bu ortamlarda:

1. Her mikro frontend için ayrı preview URL oluşturulur
2. Ortam değişkenleri otomatik olarak ayarlanır
3. Preview URL'leri PR yorumlarında görünür

### Preview Environment Yapılandırması

Vercel dashboard'dan her proje için:
1. Settings > Environment Variables
2. Preview environment için değişkenleri ayarlayın
3. Production ve Preview için farklı değerler kullanabilirsiniz

## Build Ayarları

### Next.js Uygulamaları

Vercel otomatik olarak Next.js uygulamalarını algılar. Ekstra yapılandırma gerekmez.

### Vue Uygulaması (Auth)

`vercel.json` dosyası ile yapılandırılır:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Angular Uygulaması (HR Management)

`vercel.json` dosyası ile yapılandırılır:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/hr-management",
  "framework": null
}
```

## CI/CD

Vercel, GitHub entegrasyonu ile otomatik deployment sağlar:

1. `main` branch'e push → Production deployment
2. Pull Request → Preview deployment
3. Her commit için otomatik build ve test

## Monorepo Deployment

Vercel, monorepo'ları destekler:

1. Her uygulama için ayrı Vercel projesi oluşturun
2. Root directory'yi ilgili app klasörüne ayarlayın
3. Build command'ı ayarlayın: `pnpm --filter <app-name> build`

## Troubleshooting

### Build Hataları

- `pnpm install` komutunun çalıştığından emin olun
- Ortam değişkenlerinin doğru ayarlandığını kontrol edin
- Build log'larını inceleyin

### CORS Hataları

- Iframe entegrasyonu için CORS ayarlarını kontrol edin
- Vercel'de gerekli header'ları ekleyin

### Ortam Değişkeni Sorunları

- Vercel dashboard'dan değişkenlerin doğru ayarlandığını kontrol edin
- Preview ve Production için ayrı değerler kullanın
- Değişken isimlerinin doğru olduğundan emin olun (`NEXT_PUBLIC_*`, `VITE_*`)

