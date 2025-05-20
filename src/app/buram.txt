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

function getSubdomain(): string | null {
  if (typeof window === "undefined") return null; // SSR safety
  const host = window.location.hostname;
  const parts = host.split(".");
  return parts.length >= 3 ? parts[0] : null;
}

export function getActiveReceipt() {
  const subdomain = getSubdomain();
  return subdomainMap[subdomain || ""] || myreceipt;
}
