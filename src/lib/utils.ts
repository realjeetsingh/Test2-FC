import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = 'INR'): string {
  const symbols = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    GBP: '£'
  }

  return `${symbols[currency as keyof typeof symbols] || '₹'}${price.toLocaleString()}`
}

export function formatCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
  const rates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095
  }

  if (fromCurrency === toCurrency) return amount

  const inINR = amount / (rates[fromCurrency as keyof typeof rates] || 1)
  return inINR * (rates[toCurrency as keyof typeof rates] || 1)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}