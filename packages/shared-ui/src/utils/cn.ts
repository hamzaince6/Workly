import clsx, { ClassValue } from 'clsx';

/**
 * Utility function to merge class names with conditional logic
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

