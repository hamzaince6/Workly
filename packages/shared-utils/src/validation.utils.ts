export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const isURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isStrongPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

export const isNumeric = (value: string): boolean => {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};

export const isAlphanumeric = (value: string): boolean => {
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(value);
};

export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

export const hasMinLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const hasMaxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export const matchesPattern = (value: string, pattern: RegExp): boolean => {
  return pattern.test(value);
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateRequired = (value: any, fieldName: string): string | null => {
  return isEmpty(value) ? `${fieldName} is required` : null;
};

export const validateEmail = (email: string): string | null => {
  if (isEmpty(email)) return 'Email is required';
  if (!isEmail(email)) return 'Invalid email format';
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (isEmpty(phone)) return 'Phone number is required';
  if (!isPhoneNumber(phone)) return 'Invalid phone number format';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (isEmpty(password)) return 'Password is required';
  if (!hasMinLength(password, 8)) return 'Password must be at least 8 characters';
  if (!isStrongPassword(password)) {
    return 'Password must contain uppercase, lowercase, number and special character';
  }
  return null;
};

