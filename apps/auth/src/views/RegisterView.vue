<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Brand/Visual -->
    <div
      class="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center relative overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
          alt="Business meeting"
          class="w-full h-full object-cover brightness-[0.3]"
        />
      </div>

      <!-- Content - Left Aligned -->
      <div class="relative z-20 max-w-lg">
        <Logo size="lg" class="mb-12" />
        
        <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
          Workly Ailesine<br />Katılın
        </h1>
        
        <p class="text-white/90 text-xl mb-10">
          Ücretsiz hesap oluşturun ve tüm özellikleri 14 gün boyunca deneyin.
        </p>

        <!-- Benefits List -->
        <div class="space-y-4 mb-10">
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/95 text-lg">Kredi kartı bilgisi gerekmez</span>
          </div>
          
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/95 text-lg">2 dakikada kurulum</span>
          </div>
          
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/95 text-lg">Tüm özelliklere tam erişim</span>
          </div>
        </div>

        <!-- Testimonial Slider -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
          <Splide
            :options="{
              type: 'loop',
              autoplay: true,
              interval: 5000,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
              speed: 800,
            }"
          >
            <SplideSlide>
              <div class="text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=ahmet"
                  alt="Ahmet Yılmaz"
                  class="w-16 h-16 rounded-full ring-2 ring-white/50 mx-auto mb-4"
                />
                <div class="font-semibold text-white text-lg mb-1">Ahmet Yılmaz</div>
                <div class="text-white/80 text-sm mb-4">İK Müdürü, TechCorp</div>
                <p class="text-white/90 text-sm italic">
                  "Workly ile İK süreçlerimizi tamamen dijitalleştirdik. Çok memnunuz!"
                </p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div class="text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=ayse"
                  alt="Ayşe Demir"
                  class="w-16 h-16 rounded-full ring-2 ring-white/50 mx-auto mb-4"
                />
                <div class="font-semibold text-white text-lg mb-1">Ayşe Demir</div>
                <div class="text-white/80 text-sm mb-4">Genel Müdür, StartupX</div>
                <p class="text-white/90 text-sm italic">
                  "Ekip yönetimi hiç bu kadar kolay olmamıştı. Kesinlikle tavsiye ediyorum!"
                </p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div class="text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=mehmet"
                  alt="Mehmet Kaya"
                  class="w-16 h-16 rounded-full ring-2 ring-white/50 mx-auto mb-4"
                />
                <div class="font-semibold text-white text-lg mb-1">Mehmet Kaya</div>
                <div class="text-white/80 text-sm mb-4">Proje Yöneticisi, DijiCo</div>
                <p class="text-white/90 text-sm italic">
                  "Görev takibi ve performans ölçümü için harika bir platform. 5 yıldız!"
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>

    <!-- Right Side - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
      <div class="max-w-md w-full">
        <!-- Mobile Logo -->
        <div class="lg:hidden flex justify-center mb-8">
          <Logo size="md" />
        </div>

        <!-- Header -->
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Hesap Oluştur</h2>
          <p class="text-gray-600">Workly'de yeni bir hesap açın</p>
        </div>

        <!-- Register Form -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <form @submit.prevent="handleRegister" class="space-y-5">
          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Ad Soyad
            </label>
            <input
              v-model="fullName"
              type="text"
              required
              placeholder="Ahmet Yılmaz"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              E-posta Adresi
            </label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="ornek@workly.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Şifre
            </label>
            <input
              v-model="password"
              type="password"
              required
              placeholder="••••••••"
              minlength="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
            <p class="text-xs text-gray-500 mt-1">En az 6 karakter olmalıdır</p>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Şifre Tekrar
            </label>
            <input
              v-model="confirmPassword"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Terms Checkbox -->
          <div class="flex items-start">
            <input
              v-model="acceptTerms"
              type="checkbox"
              required
              class="w-4 h-4 mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <label class="ml-2 text-sm text-gray-700">
              <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
                Kullanım koşullarını
              </a>
              ve
              <a href="#" class="text-primary-600 hover:text-primary-700 font-medium">
                gizlilik politikasını
              </a>
              kabul ediyorum
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {{ isLoading ? 'Hesap oluşturuluyor...' : 'Hesap Oluştur' }}
          </button>
        </form>

        <!-- Login Link -->
        <div class="mt-6 text-center">
          <span class="text-gray-600">Zaten hesabınız var mı? </span>
          <router-link
            to="/auth/login"
            class="text-primary-600 font-semibold hover:text-primary-700"
          >
            Giriş yapın
          </router-link>
        </div>
      </div>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <a
            :href="landingUrl"
            class="text-gray-600 hover:text-gray-900 text-sm inline-flex items-center gap-1"
          >
            ← Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Logo from '../components/Logo.vue';

const router = useRouter();
const toast = useToast();

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const acceptTerms = ref(false);
const isLoading = ref(false);

// Environment variables
const landingUrl = import.meta.env.VITE_LANDING_URL || 'https://workly-landing.vercel.app';

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    toast.error('Şifreler eşleşmiyor!');
    return;
  }

  if (!acceptTerms.value) {
    toast.error('Lütfen kullanım koşullarını kabul edin');
    return;
  }

  try {
    isLoading.value = true;

    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Hesabınız başarıyla oluşturuldu! Giriş sayfasına yönlendiriliyorsunuz...');

    setTimeout(() => {
      router.push('/auth/login');
    }, 1500);
  } catch (error) {
    toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
  } finally {
    isLoading.value = false;
  }
};
</script>
