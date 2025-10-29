<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex w-16 h-16 bg-white rounded-2xl items-center justify-center mb-4">
          <span class="text-3xl font-bold text-purple-600">W</span>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Welcome Back</h1>
        <p class="text-white/80">Sign in to continue to Workly</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-white mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="admin@workly.com"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-white mb-2">Password</label>
            <input
              v-model="password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <!-- Error Message -->
          <div v-if="authStore.error" class="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-lg">
            {{ authStore.error }}
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-white/50" />
              <span class="ml-2 text-sm text-white/80">Remember me</span>
            </label>
            <a href="#" class="text-sm text-white/80 hover:text-white">Forgot password?</a>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="authStore.isLoading"
            class="w-full py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ authStore.isLoading ? 'Signing in...' : 'Sign In' }}
          </button>

          <!-- Divider -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-white/20"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-transparent text-white/60">Demo Credentials</span>
            </div>
          </div>

          <!-- Demo Credentials -->
          <div class="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white/80 space-y-2">
            <div><strong>Admin:</strong> admin@workly.com / admin123</div>
            <div><strong>User:</strong> user@workly.com / user123</div>
          </div>
        </form>

        <!-- Register Link -->
        <div class="mt-6 text-center">
          <span class="text-white/60">Don't have an account? </span>
          <router-link to="/auth/register" class="text-white font-semibold hover:underline">
            Sign up
          </router-link>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="mt-6 text-center">
        <a href="/" class="text-white/80 hover:text-white text-sm">
          ← Back to Home
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  const success = await authStore.login(email.value, password.value);
  
  if (success) {
    // Redirect to dashboard
    window.location.href = '/dashboard';
  }
};
</script>

