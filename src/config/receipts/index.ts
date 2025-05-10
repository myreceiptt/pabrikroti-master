// /src/config/receipts/index.ts

// Blockchain configurations
import { istiqlal } from "@/config/receipts/istiqlal";
import { memora } from "@/config/receipts/memora";
import { myreceipt } from "@/config/receipts/myreceipt";
import { pabrikroti } from "@/config/receipts/pabrikroti";

// Use `typeof` from one of the receipt (structure must same)
type ReceiptType = typeof myreceipt;

// Subdomain-based config mapping
const subdomainMap: Record<string, ReceiptType> = {
  pabrikroti,
  memora,
  istiqlal,
};

// Fungsi ambil subdomain dari host string
function extractSubdomain(host: string): string | null {
  const parts = host.split(".");
  return parts.length >= 3 ? parts[0] : null;
}

// Fungsi utama
export function getActiveReceipt(host?: string): ReceiptType {
  let subdomain: string | null = null;

  if (host) {
    subdomain = extractSubdomain(host);
  } else if (typeof window !== "undefined") {
    subdomain = extractSubdomain(window.location.hostname);
  }

  return subdomainMap[subdomain || ""] || myreceipt;
}
