// /src/config/receipts/index.ts

// Blockchain configurations
import { istiqlal } from "@/config/receipts/istiqlal";
import { memora } from "@/config/receipts/memora";
import { myreceipt } from "@/config/receipts/myreceipt";
import { pabrikroti } from "@/config/receipts/pabrikroti";

// Use `typeof` from one of the receipt (structure must same)
type ReceiptType = typeof myreceipt;

// Doman-based or Subdomain-based config mapping
const hostMap: Record<string, ReceiptType> = {
  "istiqlal.endhonesa.com": istiqlal,
  "nft.istiqlal.or.id": istiqlal,
  "memora.endhonesa.com": memora,
  "memora.voyage.co.id": memora,
  "pabrikroti.endhonesa.com": pabrikroti,
};

// Main function (checking full host first, then fallback checking subdomain)
export function getActiveReceipt(host?: string): ReceiptType {
  let resolvedHost = "";

  if (host) {
    resolvedHost = host.toLowerCase();
  } else if (typeof window !== "undefined") {
    resolvedHost = window.location.hostname.toLowerCase();
  }

  // Full host match first
  if (hostMap[resolvedHost]) {
    return hostMap[resolvedHost];
  }

  // Try take subdomain
  const subdomain = resolvedHost.split(".")[0];
  if (hostMap[subdomain]) {
    return hostMap[subdomain];
  }

  // Fallback
  return myreceipt;
}
