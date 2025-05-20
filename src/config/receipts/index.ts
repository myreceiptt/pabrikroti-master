// /src/config/receipts/index.ts

// Blockchain configurations
import {
  erc1155IstiqlalDL,
  erc1155MeMoRa1,
  erc1155TryError,
  factoryNOTA,
  SupportedNFTs,
  tekeks,
  tekeksIstiqlal,
  tekeksMeMoRa,
  tekeksPabrikRoti,
} from "@/config/contracts";
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
  {
    receipt: ReceiptType;
    factoryAddress: string;
    erc1155Launched: typeof erc1155TryError;
    supportedNFTs: SupportedNFTs;
  }
> = {
  "istiqlal.endhonesa.com": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
  },
  "nft.istiqlal.or.id": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
  },
  "login.istiqlal.or.id": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
  },
  "leminerale.istiqlal.or.id": {
    receipt: leminerale,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
  },
  "memora.endhonesa.com": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
  },
  "memora.voyage.co.id": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
  },
  "pabrikroti.endhonesa.com": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
  },
  "preroti.endhonesa.com": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
  },
  "localhost": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
  },
  "127.0.0.1": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
  },
};

// Main function (checking full host first, then fallback)
export function getActiveReceipt(host?: string): {
  receipt: ReceiptType;
  factoryAddress: string;
  erc1155Launched: typeof erc1155TryError;
  supportedNFTs: SupportedNFTs;
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

  // Fallback default
  return {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
  };
}
