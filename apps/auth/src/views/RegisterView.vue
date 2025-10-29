<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex w-16 h-16 bg-white rounded-2xl items-center justify-center mb-4">
          <span class="text-3xl font-bold text-purple-600">W</span>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p class="text-white/80">Join Workly today</p>
      </div>

      <!-- Register Form -->
      <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-white mb-2">First Name</label>
              <input
                v-model="firstName"
                type="text"
                required
                placeholder="John"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-white mb-2">Last Name</label>
              <input
                v-model="lastName"
                type="text"
                required
                placeholder="Doe"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-white mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="john.doe@example.com"
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
              minlength="6"
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <p class="mt-1 text-xs text-white/60">Minimum 6 characters</p>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-medium text-white mb-2">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              required
              minlength="6"
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-lg">
            {{ error }}
          </div>

          <!-- Terms -->
          <label class="flex items-start">
            <input type="checkbox" required class="w-4 h-4 mt-1 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-white/50" />
            <span class="ml-2 text-sm text-white/80">
              I agree to the <a href="#" class="text-white underline">Terms of Service</a> and <a href="#" class="text-white underline">Privacy Policy</a>
            </span>
          </label>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="authStore.isLoading"
            class="w-full py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ authStore.isLoading ? 'Creating Account...' : 'Create Account' }}
          </button>
        </form>

        <!-- Login Link -->
        <div class="mt-6 text-center">
          <span class="text-white/60">Already have an account? </span>
          <router-link to="/auth/login" class="text-white font-semibold hover:underline">
            Sign in
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

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');

const handleRegister = async () => {
  error.value = '';

  // Validation
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters';
    return;
  }

  const success = await authStore.register({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  });

  if (success) {
    // Redirect to dashboard
    window.location.href = '/dashboard';
  } else if (authStore.error) {
    error.value = authStore.error;
  }
};
</script>

