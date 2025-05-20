// /src/config/receipts/index.ts

// Blockchain configurations
import { factoryNOTA } from "@/config/contracts";
import { istiqlal } from "@/config/receipts/istiqlal";
import { leminerale } from "@/config/receipts/leminerale";
import { memora } from "@/config/receipts/memora";
import { myreceipt } from "@/config/receipts/myreceipt";
import { pabrikroti } from "@/config/receipts/pabrikroti";

// Use `typeof` from one of the receipt (structure must same)
type ReceiptType = typeof myreceipt;

// Domain-based or Subdomain-based config mapping
const hostMap: Record<
  string,
  { receipt: ReceiptType; factoryAddress: string }
> = {
  "istiqlal.endhonesa.com": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
  },
  "nft.istiqlal.or.id": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
  },
  "login.istiqlal.or.id": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
  },
  "leminerale.istiqlal.or.id": {
    receipt: leminerale,
    factoryAddress: factoryNOTA,
  },
  "memora.endhonesa.com": {
    receipt: memora,
    factoryAddress: factoryNOTA,
  },
  "memora.voyage.co.id": {
    receipt: memora,
    factoryAddress: factoryNOTA,
  },
  "preroti.endhonesa.com": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
  },
  "localhost": { receipt: istiqlal, factoryAddress: factoryNOTA },
  "127.0.0.1": { receipt: istiqlal, factoryAddress: factoryNOTA },
};

// Main function (checking full host first, then fallback)
export function getActiveReceipt(host?: string): {
  receipt: ReceiptType;
  factoryAddress: string;
} {
  let resolvedHost = "";

  if (host) {
    resolvedHost = host.toLowerCase();
  } else if (typeof window !== "undefined") {
    resolvedHost = window.location.hostname.toLowerCase();
  }
  resolvedHost = resolvedHost.split(":")[0];

  // Full host match first
  if (hostMap[resolvedHost]) {
    return hostMap[resolvedHost];
  }

  // Fallback
  return { receipt: pabrikroti, factoryAddress: factoryNOTA };
}
