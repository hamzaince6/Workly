'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@workly/shared-ui';
import { 
  User, 
  Bell, 
  Shield, 
  Building2, 
  Palette,
  Save,
  Mail,
  Phone,
  MapPin,
  Lock,
  Smartphone,
  Clock,
  Globe,
  Moon,
  Sun,
  ChevronDown,
  Camera,
  Trash2,
  Check,
  AlertCircle,
  CheckSquare,
  Megaphone,
  TrendingUp,
  Users
} from 'lucide-react';

type SettingsTab = 'profile' | 'notifications' | 'security' | 'company' | 'appearance';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { id: 'profile' as SettingsTab, label: 'Profil', icon: User },
    { id: 'notifications' as SettingsTab, label: 'Bildirimler', icon: Bell },
    { id: 'security' as SettingsTab, label: 'Güvenlik', icon: Shield },
    { id: 'company' as SettingsTab, label: 'Şirket', icon: Building2 },
    { id: 'appearance' as SettingsTab, label: 'Görünüm', icon: Palette },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-gray-50 via-teal-50/20 to-green-50/20 p-4 sm:p-6">
      <div className="w-full">
        {/* Modern Header with Gradient */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  Ayarlar
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  Hesap ve sistem tercihlerinizi yönetin
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-4 py-2 bg-teal-50 rounded-lg border border-teal-200">
                  <p className="text-xs text-teal-600 font-medium">Son Güncelleme</p>
                  <p className="text-sm text-teal-900 font-semibold">Bugün, 14:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Tabs - Horizontal with Pills */}
        <div className="mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 shadow-md overflow-x-auto scrollbar-hide">
            <nav className="flex gap-2 min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all whitespace-nowrap group ${
                      isActive
                        ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg shadow-teal-500/30'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    <span className="text-sm sm:text-base font-semibold">{tab.label}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area - Full Width */}
        <div className="w-full">
          {activeTab === 'profile' && <ProfileSettings />}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'company' && <CompanySettings />}
          {activeTab === 'appearance' && <AppearanceSettings darkMode={darkMode} setDarkMode={setDarkMode} />}
        </div>
      </div>
    </div>
  );
}

// Profile Settings Component
function ProfileSettings() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
      {/* Left Column - Avatar & Quick Stats */}
      <div className="xl:col-span-1 space-y-4 sm:space-y-6">
        <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                AK
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-all shadow-lg hover:scale-110">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Admin Kullanıcı</h3>
            <p className="text-sm text-gray-600 mt-1">Sistem Yöneticisi</p>
            <div className="mt-4 flex justify-center gap-2">
              <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg hover:from-teal-600 hover:to-green-600 transition-all text-sm font-medium shadow-md">
                Fotoğraf Değiştir
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-lg">
          <CardContent className="p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Hesap Durumu</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">E-posta Doğrulama</span>
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                <span className="text-sm text-gray-700">Telefon Doğrulama</span>
                <AlertCircle className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">2FA Aktif</span>
                <Check className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Form Fields */}
      <div className="xl:col-span-2">
        <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600" />
              Profil Bilgileri
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ad</label>
                <input
                  type="text"
                  defaultValue="Admin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Soyad</label>
                <input
                  type="text"
                  defaultValue="Kullanıcı"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600" />
                E-posta
              </label>
              <input
                type="email"
                defaultValue="admin@workly.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600" />
                Telefon
              </label>
              <input
                type="tel"
                defaultValue="+90 555 123 4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-600" />
                Konum
              </label>
              <input
                type="text"
                defaultValue="İstanbul, Türkiye"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200">
              <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all text-sm font-semibold">
                İptal
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl hover:from-teal-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm font-semibold">
                <Save className="w-4 h-4" />
                Değişiklikleri Kaydet
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Notification Settings Component
function NotificationSettings() {
  const notificationOptions = [
    { id: 'tasks', label: 'Görev Bildirimleri', description: 'Yeni görevler ve güncellemeler', icon: CheckSquare },
    { id: 'announcements', label: 'Duyuru Bildirimleri', description: 'Şirket duyuruları ve haberler', icon: Megaphone },
    { id: 'performance', label: 'Performans Bildirimleri', description: 'Performans değerlendirmeleri', icon: TrendingUp },
    { id: 'hr', label: 'İK Bildirimleri', description: 'İzin, bordro ve İK işlemleri', icon: Users },  
  ];

  const channels = [
    { id: 'email', label: 'E-posta', icon: Mail },
    { id: 'push', label: 'Push', icon: Bell },
    { id: 'sms', label: 'SMS', icon: Smartphone },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Bell className="w-5 h-5 text-teal-600" />
            Bildirim Tercihleri
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {notificationOptions.map((option, index) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.id}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-green-50 flex items-center justify-center flex-shrink-0 border border-teal-100">
                      <OptionIcon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900">{option.label}</h4>
                      <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pl-16">
                    {channels.map((channel) => {
                      const Icon = channel.icon;
                      return (
                        <label key={channel.id} className="group relative flex items-center gap-2 p-3 border-2 border-gray-200 rounded-xl hover:border-teal-300 cursor-pointer transition-all bg-white hover:bg-teal-50">
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-teal-600 rounded-lg focus:ring-2 focus:ring-teal-500 border-2 border-gray-300 cursor-pointer" />
                          <Icon className="w-4 h-4 text-gray-500 group-hover:text-teal-600 transition-colors flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-teal-700 transition-colors">{channel.label}</span>
                        </label>
                      );
                    })}
                  </div>
                  {index !== notificationOptions.length - 1 && (
                    <hr className="mt-6 border-gray-200" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-200 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl hover:from-teal-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm font-semibold">
              <Save className="w-4 h-4" />
              Tercihleri Kaydet
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Security Settings Component
function SecuritySettings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      {/* Password Change */}
      <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-600" />
            Şifre Değiştir
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mevcut Şifre</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Yeni Şifre</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
            />
            <p className="text-xs text-gray-500 mt-2">En az 8 karakter, büyük/küçük harf ve rakam içermeli</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Yeni Şifre (Tekrar)</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
            />
          </div>
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl hover:from-teal-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm font-semibold">
              <Lock className="w-4 h-4" />
              Şifreyi Güncelle
            </button>
          </div>
        </CardContent>
      </Card>

      {/* 2FA */}
      <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-600" />
            İki Faktörlü Doğrulama
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <div className="p-5 bg-gradient-to-r from-teal-50 to-green-50 border-2 border-teal-200 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-900">2FA Aktif</h4>
                <p className="text-sm text-gray-600 mt-1">Hesabınız ekstra güvenlik katmanı ile korunuyor</p>
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all text-sm">
              Devre Dışı Bırak
            </button>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-yellow-900">Güvenlik İpucu</h5>
              <p className="text-xs text-yellow-700 mt-1">Yedek kodlarınızı güvenli bir yerde saklayın</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Sessions - Full Width */}
      <Card className="lg:col-span-2 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-teal-600" />
            Aktif Oturumlar
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              { device: 'Chrome - Windows', location: 'İstanbul, TR', time: 'Şimdi Aktif', active: true },
              { device: 'Safari - iPhone', location: 'İstanbul, TR', time: '2 saat önce', active: false },
              { device: 'Firefox - MacOS', location: 'Ankara, TR', time: '1 gün önce', active: false },
            ].map((session, index) => (
              <div key={index} className="group flex items-center gap-4 p-4 border-2 border-gray-200 rounded-2xl hover:border-teal-300 transition-all bg-white">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  session.active 
                    ? 'bg-gradient-to-br from-teal-500 to-green-500' 
                    : 'bg-gray-100'
                }`}>
                  <Smartphone className={`w-7 h-7 ${session.active ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    {session.device}
                    {session.active && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">Aktif</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{session.location} • {session.time}</p>
                </div>
                <button className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg font-medium transition-colors">
                  Kapat
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Company Settings Component
function CompanySettings() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Building2 className="w-5 h-5 text-teal-600" />
            Şirket Bilgileri
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl border border-teal-100">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold flex-shrink-0 shadow-xl">
                W
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-all shadow-lg hover:scale-110">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Workly Tech</h3>
              <p className="text-sm text-gray-600 mt-1">Teknoloji • 201-500 Çalışan</p>
              <div className="flex gap-2 mt-3">
                <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg hover:from-teal-600 hover:to-green-600 transition-all text-sm font-medium shadow-md">
                  Logo Değiştir
                </button>
                <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Şirket Adı</label>
            <input
              type="text"
              defaultValue="Workly Tech"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Sektör</label>
              <div className="relative">
                <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors appearance-none cursor-pointer">
                  <option>Teknoloji</option>
                  <option>Finans</option>
                  <option>Eğitim</option>
                  <option>Sağlık</option>
                  <option>İmalat</option>
                  <option>Perakende</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Çalışan Sayısı</label>
              <div className="relative">
                <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors appearance-none cursor-pointer">
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Adres</label>
            <textarea
              rows={4}
              defaultValue="Maslak Mahallesi, Büyükdere Caddesi No: 123, Sarıyer/İstanbul"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm bg-white shadow-sm hover:border-teal-300 transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200">
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all text-sm font-semibold">
              İptal
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl hover:from-teal-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm font-semibold">
              <Save className="w-4 h-4" />
              Değişiklikleri Kaydet
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Appearance Settings Component
function AppearanceSettings({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Palette className="w-5 h-5 text-teal-600" />
            Tema Seçimi
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setDarkMode(false)}
              className={`group p-6 border-2 rounded-2xl transition-all hover:scale-105 ${
                !darkMode 
                  ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-green-50 shadow-lg shadow-teal-500/20' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all ${
                !darkMode ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gray-100'
              }`}>
                <Sun className={`w-8 h-8 ${!darkMode ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <p className={`text-base font-semibold text-center ${!darkMode ? 'text-teal-900' : 'text-gray-700'}`}>
                Açık Tema
              </p>
              {!darkMode && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-xs text-teal-600 font-medium">Aktif</span>
                </div>
              )}
            </button>
            <button
              onClick={() => setDarkMode(true)}
              className={`group p-6 border-2 rounded-2xl transition-all hover:scale-105 ${
                darkMode 
                  ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-green-50 shadow-lg shadow-teal-500/20' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all ${
                darkMode ? 'bg-gradient-to-br from-teal-500 to-green-500' : 'bg-gray-100'
              }`}>
                <Moon className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-gray-400'}`} />
              </div>
              <p className={`text-base font-semibold text-center ${darkMode ? 'text-teal-900' : 'text-gray-700'}`}>
                Koyu Tema
              </p>
              {darkMode && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span className="text-xs text-teal-600 font-medium">Aktif</span>
                </div>
              )}
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-teal-50 to-green-50">
          <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
            <Globe className="w-5 h-5 text-teal-600" />
            Bölgesel Ayarlar
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-600" />
              Dil
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors appearance-none cursor-pointer">
                <option>Türkçe</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>Français</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-600" />
              Saat Dilimi
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors appearance-none cursor-pointer">
                <option>İstanbul (GMT+3)</option>
                <option>UTC (GMT+0)</option>
                <option>New York (GMT-5)</option>
                <option>London (GMT+0)</option>
                <option>Tokyo (GMT+9)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tarih Formatı</label>
            <div className="relative">
              <select className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white shadow-sm hover:border-teal-300 transition-colors appearance-none cursor-pointer">
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex justify-end pt-6 border-t border-gray-200">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-xl hover:from-teal-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm font-semibold">
              <Save className="w-4 h-4" />
              Kaydet
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

