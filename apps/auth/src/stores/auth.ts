import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User } from '@workly/shared-types';

interface AuthState {
  user: User | null;
  token: string | null;
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const isAuthenticated = computed(() => !!token.value && !!user.value);

  // Load from localStorage
  const loadFromStorage = () => {
    const storedToken = localStorage.getItem('workly_token');
    const storedUser = localStorage.getItem('workly_user');
    
    if (storedToken && storedUser) {
      token.value = storedToken;
      user.value = JSON.parse(storedUser);
    }
  };

  // Actions
  const login = async (email: string, password: string) => {
    isLoading.value = true;
    error.value = null;

    try {
      // Mock authentication - In real app, call API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock users
      const mockUsers = [
        {
          id: 'user-1',
          email: 'admin@workly.com',
          password: 'admin123',
          firstName: 'Admin',
          lastName: 'User',
          fullName: 'Admin User',
          role: 'Admin' as const,
          permissions: [],
          isActive: true,
          createdAt: new Date().toISOString(),
        },
        {
          id: 'user-2',
          email: 'user@workly.com',
          password: 'user123',
          firstName: 'John',
          lastName: 'Doe',
          fullName: 'John Doe',
          role: 'Employee' as const,
          permissions: [],
          isActive: true,
          createdAt: new Date().toISOString(),
        },
      ];

      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error('Invalid email or password');
      }

      // Generate mock JWT token
      const mockToken = btoa(JSON.stringify({ userId: foundUser.id, exp: Date.now() + 86400000 }));

      // Remove password from user object
      const { password: _, ...userWithoutPassword } = foundUser;

      user.value = userWithoutPassword as User;
      token.value = mockToken;

      // Save to localStorage
      localStorage.setItem('workly_token', mockToken);
      localStorage.setItem('workly_user', JSON.stringify(userWithoutPassword));

      return true;
    } catch (err: any) {
      error.value = err.message || 'Login failed';
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (data: { firstName: string; lastName: string; email: string; password: string }) => {
    isLoading.value = true;
    error.value = null;

    try {
      // Mock registration
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newUser: User = {
        id: `user-${Date.now()}`,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        fullName: `${data.firstName} ${data.lastName}`,
        role: 'Employee' as const,
        permissions: [],
        isActive: true,
        createdAt: new Date().toISOString(),
      };

      const mockToken = btoa(JSON.stringify({ userId: newUser.id, exp: Date.now() + 86400000 }));

      user.value = newUser;
      token.value = mockToken;

      localStorage.setItem('workly_token', mockToken);
      localStorage.setItem('workly_user', JSON.stringify(newUser));

      return true;
    } catch (err: any) {
      error.value = err.message || 'Registration failed';
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem('workly_token');
    localStorage.removeItem('workly_user');
  };

  // Initialize
  loadFromStorage();

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  };
});

