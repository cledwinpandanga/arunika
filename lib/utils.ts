import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toCurrency(amount: number): string {
  return amount.toLocaleString("id-ID");
}

export const getMessage = (bookType: string) => {
  switch (bookType.toLowerCase()) {
    case "basic":
      return "Hi Min, Saya mau booking paket _*BASIC*_ nih. Mohon bantuannya yaa :) Terima Kasih!";
    case "standard":
      return "Hi Min, Saya mau booking paket _*STANDARD*_. Mohon bantuannya yaa :) Terima Kasih!";
    case "premium":
      return "Hi Min, Saya mau booking paket _*PREMIUM*_. Mohon bantuannya yaa :) Terima Kasih!";
    default:
      return "Hi Min, Saya mau booking. Terima kasih";
  }
};
