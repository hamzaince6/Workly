# 🔓 Açık Kaynak Kurulum Rehberi

Bu rehber, Workly projesinin tam olarak açık kaynak olarak çalışması için yapılması gereken ayarları içerir.

## ✅ Şu Anda Hazır Olanlar

- ✅ Repository Public
- ✅ MIT Lisansı
- ✅ README.md
- ✅ CONTRIBUTING.md
- ✅ Dokümantasyon (docs/)
- ✅ Issue Template'leri
- ✅ .env.example dosyaları

## 🔧 GitHub Repository Ayarları

### 1. Repository Ayarları

GitHub'da repository ayarlarına gidin: `Settings` > `General`

**Önemli Ayarlar:**
- ✅ **Repository visibility:** Public (zaten public)
- ✅ **Features:** 
  - Issues: ✅ Açık
  - Projects: ✅ Açık (opsiyonel)
  - Wiki: ❌ Kapalı (dokümantasyon docs/ klasöründe)
  - Discussions: ✅ Açık (önerilir)
  - Sponsorships: ✅ Açık (opsiyonel)

### 2. Branch Protection Rules

`Settings` > `Branches` > `Add rule`

**main branch için:**
- ✅ Require a pull request before merging
  - ✅ Require approvals: 1 (veya daha fazla)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
- ✅ Require conversation resolution before merging
- ✅ Do not allow bypassing the above settings

**Korunacak branch pattern:** `main`

### 3. Collaborator Ayarları

`Settings` > `Collaborators`

**Önemli:**
- Direkt push yapabilmeleri için collaborator eklemeniz gerekir
- **Önerilen yaklaşım:** Herkes fork edip PR açsın, direkt push yapmasın
- Sadece güvendiğiniz kişilere collaborator ekleyin

### 4. Actions Ayarları

`Settings` > `Actions` > `General`

**Workflow permissions:**
- ✅ Read and write permissions (CI/CD için gerekli)
- ✅ Allow GitHub Actions to create and approve pull requests

## 🔄 Açık Kaynak Katkı Akışı

### Standart Akış (Önerilen)

1. **Fork:** Kullanıcı repository'yi fork eder
2. **Clone:** Fork'u local'e klonlar
3. **Branch:** Yeni branch oluşturur
4. **Değişiklik:** Değişiklikleri yapar
5. **Push:** Fork'una push eder
6. **PR:** Pull Request açar
7. **Review:** Maintainer review yapar
8. **Merge:** Onaylandıktan sonra merge edilir

### Direkt Push (Sadece Collaborator'lar)

Sadece collaborator olarak eklenen kişiler direkt push yapabilir.

## 🚀 GitHub Actions Workflows

CI/CD için GitHub Actions workflow'ları ekleyebilirsiniz.

### Örnek: PR Check Workflow

`.github/workflows/pr-check.yml` dosyası oluşturun:

```yaml
name: PR Check

on:
  pull_request:
    branches: [main]

jobs:
  lint-and-type-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm type-check
```

## 📋 Repository Açıklaması

GitHub repository sayfasında şu bilgileri ekleyin:

**Description:**
```
🚀 Micro Frontend based Enterprise HR & Task Management Platform built with Next.js, Vue, and Angular
```

**Topics (Tags):**
```
micro-frontend
nextjs
vue
angular
typescript
monorepo
pnpm
vercel
hr-management
task-management
enterprise
```

**Website:**
```
https://workly-landing.vercel.app
```

## 🔐 Güvenlik

### Security Policy

`SECURITY.md` dosyası oluşturun:

```markdown
# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

Güvenlik açığı bulduysanız, lütfen hamzaince001@gmail.com adresine e-posta gönderin.

Güvenlik açıklarını public issue olarak açmayın.
```

## 📊 Insights ve Analytics

GitHub Insights'ta şunları kontrol edin:
- Traffic: Repository görüntüleme sayıları
- Contributors: Katkıda bulunanlar
- Community: Community standards

## 🎯 Sonraki Adımlar

1. ✅ Repository ayarlarını yapın
2. ✅ Branch protection rules ekleyin
3. ✅ GitHub Actions workflow ekleyin (opsiyonel)
4. ✅ Repository açıklamasını güncelleyin
5. ✅ SECURITY.md ekleyin
6. ✅ İlk issue'ları açın (roadmap items)

## 📝 Notlar

- **Direkt push:** Sadece collaborator'lar yapabilir
- **PR akışı:** Herkes fork edip PR açabilir (önerilen)
- **Review:** Tüm PR'lar review edilmeli
- **CI/CD:** GitHub Actions ile otomatik testler çalıştırılabilir

