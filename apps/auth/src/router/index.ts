import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ForgotPasswordView from '../views/ForgotPasswordView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/auth/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/auth/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/',
      redirect: '/auth/login',
    },
  ],
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  // Public routes
  const publicRoutes = ['login', 'register', 'forgot-password'];
  
  if (authStore.isAuthenticated && publicRoutes.includes(to.name as string)) {
    // Redirect to dashboard if already logged in
    const shellUrl = import.meta.env.VITE_SHELL_URL || 'https://workly-shell.vercel.app';
    window.location.href = shellUrl;
    return;
  }
  
  next();
});

export default router;

