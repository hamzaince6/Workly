<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Brand/Visual -->
    <div
      class="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center relative overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
          alt="Team working together"
          class="w-full h-full object-cover brightness-[0.3]"
        />
      </div>

      <!-- Content - Left Aligned -->
      <div class="relative z-20 max-w-lg">
        <Logo size="lg" class="mb-12" />
        
        <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
          Şifrenizi mi<br />Unuttunuz?
        </h1>
        
        <p class="text-white/90 text-xl mb-10">
          Endişelenmeyin! Şifrenizi kolayca sıfırlayabilirsiniz.
        </p>

        <!-- Security Features -->
        <div class="space-y-4 mb-10">
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <span class="text-white/95 text-lg">Güvenli şifre sıfırlama</span>
          </div>
          
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span class="text-white/95 text-lg">E-posta ile doğrulama</span>
          </div>
          
          <div class="flex items-center gap-3 text-white">
            <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span class="text-white/95 text-lg">Hızlı işlem (2 dakika)</span>
          </div>
        </div>

        <!-- Help Card -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
          <div>
            <div class="text-white font-semibold text-lg mb-2">Yardıma mı ihtiyacınız var?</div>
            <p class="text-white/90 mb-4">
              Destek ekibimiz 7/24 hizmetinizde
            </p>
            <a
              href="mailto:destek@workly.com"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-all backdrop-blur-sm"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              destek@workly.com
            </a>
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
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Şifremi Unuttum</h2>
          <p class="text-gray-600">
            {{ emailSent
              ? 'E-posta adresinizi kontrol edin'
              : 'E-posta adresinizi girin, şifre sıfırlama linki gönderelim'
            }}
          </p>
        </div>

        <!-- Form or Success Message -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <!-- Success Message -->
        <div v-if="emailSent" class="space-y-6">
          <div class="text-center">
            <div
              class="inline-flex w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              E-posta Gönderildi!
            </h3>
            <p class="text-gray-600 mb-6">
              <strong>{{ email }}</strong> adresine şifre sıfırlama linki
              gönderdik. Lütfen e-postanızı kontrol edin.
            </p>
          </div>

          <div class="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <p class="text-sm text-primary-800">
              <strong>Not:</strong> E-posta gelmedi mi? Spam klasörünüzü kontrol
              edin veya birkaç dakika sonra tekrar deneyin.
            </p>
          </div>

          <button
            @click="resetForm"
            class="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Farklı E-posta ile Dene
          </button>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
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

          <!-- Info Box -->
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p class="text-sm text-gray-700">
              Kayıtlı e-posta adresinizi girin. Size şifrenizi sıfırlamak için
              güvenli bir bağlantı göndereceğiz.
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {{ isLoading ? 'Gönderiliyor...' : 'Sıfırlama Linki Gönder' }}
          </button>
        </form>

          <!-- Login Link -->
          <div class="mt-6 text-center">
            <router-link
              to="/auth/login"
              class="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1"
            >
              ← Giriş sayfasına dön
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
import { useToast } from 'vue-toastification';
import Logo from '../components/Logo.vue';

const toast = useToast();

const email = ref('');
const isLoading = ref(false);
const emailSent = ref(false);

const handleSubmit = async () => {
  try {
    isLoading.value = true;

    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    emailSent.value = true;
    toast.success('Şifre sıfırlama linki e-posta adresinize gönderildi!');
  } catch (error) {
    toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  email.value = '';
  emailSent.value = false;
};
</script>

