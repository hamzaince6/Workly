<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Brand/Visual -->
    <div
      class="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center relative overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="Team collaboration"
          class="w-full h-full object-cover brightness-[0.3]"
        />
      </div>

      <!-- Content - Left Aligned -->
      <div class="relative z-20 max-w-lg">
        <Logo size="lg" class="mb-12" />
        
        <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
          İşletmenizi Dijital<br />Dünyaya Taşıyın
        </h1>
        
        <p class="text-white/90 text-xl mb-10">
          Workly ile İK yönetimi, görev takibi ve daha fazlası tek platformda.
        </p>

        <!-- Features List -->
        <div class="space-y-4 mb-10">
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/95 text-lg">Hızlı ve kolay kurulum</span>
          </div>
          
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/95 text-lg">Kurumsal seviye güvenlik</span>
          </div>
          
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-white/95 text-lg">7/24 Türkçe destek</span>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 pt-8 border-t border-white/30">
          <div>
            <div class="text-4xl font-bold text-white mb-2">500+</div>
            <div class="text-white/80 text-sm">Aktif Şirket</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">10K+</div>
            <div class="text-white/80 text-sm">Kullanıcı</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">99.9%</div>
            <div class="text-white/80 text-sm">Uptime</div>
          </div>
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
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Hoş Geldiniz</h2>
          <p class="text-gray-600">Workly hesabınıza giriş yapın</p>
        </div>

        <!-- Login Form -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <form @submit.prevent="handleLogin" class="space-y-6">
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
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center cursor-pointer">
              <input
                v-model="rememberMe"
                type="checkbox"
                class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span class="ml-2 text-sm text-gray-700">Beni hatırla</span>
            </label>
            <router-link
              to="/auth/forgot-password"
              class="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Şifremi unuttum
            </router-link>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="authStore.isLoading"
            class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {{authStore.isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
          </button>

          <!-- Divider -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Demo Hesaplar</span>
            </div>
          </div>

          <!-- Demo Credentials -->
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 space-y-2">
            <div>
              <strong class="text-gray-900">Admin:</strong> admin@workly.com / admin123
            </div>
            <div>
              <strong class="text-gray-900">Kullanıcı:</strong> user@workly.com / user123
            </div>
          </div>
        </form>

        <!-- Register Link -->
        <div class="mt-6 text-center">
          <span class="text-gray-600">Hesabınız yok mu? </span>
          <router-link
            to="/auth/register"
            class="text-primary-600 font-semibold hover:text-primary-700"
          >
            Kayıt olun
          </router-link>
        </div>
      </div>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <a
            href="http://localhost:3000"
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
import { useAuthStore } from '../stores/auth';
import Logo from '../components/Logo.vue';

const router = useRouter();
const toast = useToast();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = async () => {
  try {
    const success = await authStore.login(email.value, password.value);

    if (success) {
      toast.success('Giriş başarılı! Yönlendiriliyorsunuz...');
      setTimeout(() => {
        // Root .env'den VITE_SHELL_URL kullan
        const shellUrl = import.meta.env.VITE_SHELL_URL || 'https://workly-shell.vercel.app';
        window.location.href = shellUrl;
      }, 1000);
    } else {
      toast.error(authStore.error || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  } catch (error) {
    toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
  }
};
</script>

