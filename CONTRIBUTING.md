# 🤝 Katkıda Bulunma Rehberi

Workly projesine katkıda bulunmak istediğiniz için teşekkürler! Bu rehber, katkı sürecini kolaylaştırmak için hazırlanmıştır.

## 🚀 Başlangıç

1. Repository'yi fork edin
2. Fork'unuzu local'inize klonlayın
3. Yeni bir branch oluşturun (`git checkout -b feature/harika-ozellik`)
4. Değişikliklerinizi yapın
5. Commit edin (`git commit -m 'Harika özellik eklendi'`)
6. Push edin (`git push origin feature/harika-ozellik`)
7. Pull Request açın

## 📋 Pull Request Süreci

### PR Açmadan Önce Kontrol Listesi

- [ ] Kod çalışıyor mu?
- [ ] Tüm linter'lar geçiyor mu? (`pnpm lint`)
- [ ] TypeScript hataları var mı? (`pnpm type-check`)
- [ ] Dokümantasyon güncellendi mi?
- [ ] README güncellendi mi? (Gerekirse)
- [ ] Commit mesajları anlamlı mı?

### Commit Mesajları

Anlamlı commit mesajları yazın:

```
feat: Task Manager'a drag-and-drop özelliği eklendi
fix: Auth sayfasında token hatası düzeltildi
docs: README'ye deployment bilgisi eklendi
refactor: Event bus yapısı iyileştirildi
style: Kod formatı düzeltildi
test: Task Manager için testler eklendi
chore: Bağımlılıklar güncellendi
```

## 🎯 Katkıda Bulunabileceğiniz Konular

### Yüksek Öncelikli

1. **Task Manager sürükle bırak eklenecek** - @dnd-kit kullanarak drag-and-drop özelliği
2. **HR ekibi için izin takvimi sayfası** - Takvim görünümü ile izin yönetimi
3. **Shared UI bileşeni: Modal** - Yeniden kullanılabilir modal bileşeni

### Orta Öncelikli

4. **Vercel preview env dokümantasyonu** - Preview environment yapılandırması
5. **Test altyapısı** - Jest/Vitest kurulumu ve örnek testler
6. **E2E testler** - Playwright/Cypress ile end-to-end testler

### Düşük Öncelikli

7. **Storybook entegrasyonu** - UI bileşenleri için Storybook
8. **API dokümantasyonu** - Backend API için Swagger/OpenAPI

## 💻 Geliştirme

Detaylı geliştirme rehberi için [docs/development.md](docs/development.md) dosyasına bakın.

### Kod Stili

- TypeScript strict mode kullanılır
- Prettier ile formatlanır
- ESLint kurallarına uyulur
- Anlamlı değişken ve fonksiyon isimleri kullanılır

### Test

Şu anda test altyapısı kurulmamıştır. Test eklemek isterseniz, önce test altyapısını kurmanızı öneririz.

## 📝 Dokümantasyon

- Yeni özellikler için dokümantasyon ekleyin
- README'yi güncelleyin (gerekirse)
- Kod yorumları ekleyin (karmaşık mantık için)

## 🐛 Bug Bildirimi

Bug bildirmek için [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) kullanın.

## 💡 Özellik Önerisi

Yeni özellik önermek için [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) kullanın.

## ❓ Sorular

Sorularınız için:
- [Issues](https://github.com/hamzaince6/Workly/issues) sayfasına bakın
- Yeni issue açın
- [Discussions](https://github.com/hamzaince6/Workly/discussions) sayfasında soru sorun

## 📄 Lisans

Katkıda bulunarak, kodunuzun MIT lisansı altında yayınlanmasını kabul etmiş olursunuz.

---

Teşekkürler! 🎉

