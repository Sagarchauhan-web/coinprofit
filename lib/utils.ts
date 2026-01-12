import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  number: number,
  locale = 'en-US',
  currency = 'USD',
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(number);
}
