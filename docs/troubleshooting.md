# 🔧 Troubleshooting

## GitHub Actions Workflow Hataları

### Workflow Başarısız Oluyor

Eğer GitHub Actions workflow'u başarısız oluyorsa:

1. **Lint hataları:** Bazı uygulamalarda lint script'i olmayabilir. Bu normaldir.
2. **Type check hataları:** TypeScript hataları varsa, bunları düzeltin.
3. **Format check:** Prettier formatı uyumsuzsa, `pnpm format` çalıştırın.

### Workflow'u Geçici Olarak Devre Dışı Bırakma

Eğer workflow'u geçici olarak devre dışı bırakmak isterseniz:

`.github/workflows/pr-check.yml` dosyasında `on:` kısmını yorum satırı yapın:

```yaml
# on:
#   pull_request:
#     branches: [main]
#   push:
#     branches: [main]
```

## Push Yapamıyorum

### Branch Protection Rules

Eğer push yapamıyorsanız:

1. **Branch protection aktif mi?** 
   - `Settings` > `Branches` kontrol edin
   - Eğer aktifse, PR açmanız gerekir

2. **Collaborator mısınız?**
   - Repository owner'sınız, direkt push yapabilirsiniz
   - Başkaları fork edip PR açmalı

3. **Workflow başarısız mı?**
   - Workflow başarısız olsa bile push yapabilirsiniz
   - Sadece branch protection rules aktifse engellenirsiniz

### Workflow'u Zorunlu Kılmak

Branch protection rules'da workflow'u zorunlu kılmak için:

1. `Settings` > `Branches` > `Add rule`
2. Branch pattern: `main`
3. `Require status checks to pass before merging` işaretleyin
4. `Require branches to be up to date before merging` işaretleyin
5. Status check olarak `lint-and-type-check` seçin

## Local Geliştirme Sorunları

### pnpm install hataları

```bash
# Lockfile'ı temizle ve yeniden yükle
rm pnpm-lock.yaml
pnpm install
```

### TypeScript hataları

```bash
# Type check çalıştır
pnpm type-check

# Hataları düzelt
```

### Lint hataları

```bash
# Lint çalıştır
pnpm lint

# Otomatik düzelt (mümkünse)
pnpm lint --fix
```

## Vercel Deployment Sorunları

### Build hataları

1. Vercel dashboard'da build log'ları kontrol edin
2. Local'de build çalıştırın: `pnpm build`
3. Ortam değişkenlerini kontrol edin

### Environment variables

Vercel dashboard'da:
1. `Settings` > `Environment Variables`
2. Tüm gerekli değişkenlerin eklendiğinden emin olun
3. Production, Preview ve Development için ayrı ayrı ayarlayın

## Sorun Devam Ediyorsa

1. [Issues](https://github.com/hamzaince6/Workly/issues) sayfasında arama yapın
2. Yeni issue açın
3. Detaylı hata mesajı ve adımları ekleyin

