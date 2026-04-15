import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Dígitos apenas, para links `tel:` */
export function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, "")
}

export function formatAddressStreet(address: {
  street: string
  complement: string
}): string {
  return [address.street, address.complement].filter(Boolean).join(", ")
}
