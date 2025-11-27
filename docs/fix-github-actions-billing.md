# 🔧 GitHub Actions Billing Sorunu Çözümü

## Sorun

```
The job was not started because your account is locked due to a billing issue.
```

## Çözüm 1: GitHub Actions'ı Aktifleştirin (Önerilen)

### Adım 1: Repository Ayarları

1. GitHub'da repository'nize gidin: `https://github.com/hamzaince6/Workly`
2. `Settings` sekmesine tıklayın
3. Sol menüden `Actions` > `General` seçin

### Adım 2: Actions Permissions

**"Actions permissions"** bölümünde:
- ✅ **"Allow all actions and reusable workflows"** seçeneğini işaretleyin
- Veya **"Allow local actions and reusable workflows"** seçeneğini işaretleyin

### Adım 3: Workflow Permissions

**"Workflow permissions"** bölümünde:
- ✅ **"Read and write permissions"** seçeneğini işaretleyin
- ✅ **"Allow GitHub Actions to create and approve pull requests"** işaretleyin

### Adım 4: Kaydet

Sayfanın altındaki **"Save"** butonuna tıklayın.

## Çözüm 2: Billing Ayarlarını Kontrol Edin

### Public Repository İçin

Public repository'lerde GitHub Actions **ücretsizdir**. Eğer hala sorun varsa:

1. GitHub profil sayfanıza gidin
2. `Settings` > `Billing` > `Plans and usage`
3. GitHub Actions kullanımını kontrol edin
4. Eğer limit aşılmışsa, kullanımı azaltın veya plan yükseltin

### Private Repository İçin

Private repository'lerde:
- **Free plan:** 2,000 dakika/ay
- Limit aşılırsa billing eklemeniz gerekir

## Çözüm 3: Workflow'u Sadece PR'larda Çalıştırın

Eğer billing sorununu çözemiyorsanız, workflow'u sadece PR açıldığında çalışacak şekilde ayarlayın:

`.github/workflows/pr-check.yml` dosyasında:

```yaml
on:
  pull_request:
    branches: [main]
  # push:  # Bu satırı yorum satırı yapın
  #   branches: [main]
```

Bu şekilde:
- ✅ Push yapabilirsiniz (workflow çalışmaz)
- ✅ PR açıldığında workflow çalışır
- ✅ Billing sorunu push'u engellemez

## Çözüm 4: Workflow'u Geçici Olarak Devre Dışı Bırakın

Eğer hiçbir çözüm işe yaramazsa:

1. `.github/workflows/pr-check.yml` dosyasını silin veya
2. Dosyanın başına `#` ekleyerek yorum satırı yapın

## Test Etme

Ayarları yaptıktan sonra:

1. Küçük bir değişiklik yapın
2. Commit edin: `git commit -m "test: check GitHub Actions"`
3. Push edin: `git push`
4. GitHub'da `Actions` sekmesine gidin
5. Workflow'un çalıştığını kontrol edin

## Önemli Notlar

- ✅ **Public repository'lerde GitHub Actions ücretsizdir**
- ✅ **Push yapabilirsiniz** (workflow çalışmasa bile)
- ⚠️ **Billing sorunu sadece workflow'u etkiler, push'u engellemez**
- ✅ **Branch protection aktif değilse, direkt push yapabilirsiniz**

## Hala Sorun Varsa

1. GitHub Support'a başvurun: `https://support.github.com`
2. Repository'yi silip yeniden oluşturmayı deneyin (son çare)
3. Workflow'u tamamen devre dışı bırakın

## Mevcut Durum

Workflow şu anda sadece PR açıldığında çalışacak şekilde ayarlandı. Bu sayede:
- ✅ Push yapabilirsiniz
- ✅ Billing sorunu push'u engellemez
- ✅ PR açıldığında workflow çalışır (billing sorunu çözülürse)

