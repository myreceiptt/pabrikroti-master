// /src/config/receipts/index.ts

// Blockchain configurations
import {
  displayedTokeks,
  displayedTokeksMeMoRa,
  displayedTokeksPabrikRoti,
  erc1155MbokSri2025,
  erc1155MeMoRa1,
  erc1155TryError,
  erc20sLaunched,
  factoryNOTA,
  memoraErc20sLaunched,
  pabrikrotiErc20sLaunched,
  SupportedFTs,
  SupportedNFTs,
  tekeks,
  tekeksMeMoRa,
  tekeksPabrikRoti,
  tokeks,
  tokeksMeMoRa,
  tokeksPabrikRoti,
} from "@/config/contracts";
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
    erc20sLaunched: typeof erc20sLaunched;
    supportedFTs: SupportedFTs;
    displayedTokeks: typeof displayedTokeks;
  }
> = {
  "memora.endhonesa.com": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
    erc20sLaunched: memoraErc20sLaunched,
    supportedFTs: tokeksMeMoRa,
    displayedTokeks: displayedTokeksMeMoRa,
  },
  "memora.voyage.co.id": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
    erc20sLaunched: memoraErc20sLaunched,
    supportedFTs: tokeksMeMoRa,
    displayedTokeks: displayedTokeksMeMoRa,
  },
  "pabrikroti.endhonesa.com": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: pabrikrotiErc20sLaunched,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  },
  "far.futuloka.io": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MbokSri2025,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "www.futuloka.xyz": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MbokSri2025,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "far.futuloka.xyz": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MbokSri2025,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "far.endhonesa.com": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MbokSri2025,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "preroti.endhonesa.com": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
    erc20sLaunched: memoraErc20sLaunched,
    supportedFTs: tokeksMeMoRa,
    displayedTokeks: displayedTokeksMeMoRa,
  },
  localhost: {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: pabrikrotiErc20sLaunched,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  },
  "127.0.0.1": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: pabrikrotiErc20sLaunched,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  },
};

// Main function (checking full host first, then fallback)
export function getActiveReceipt(host?: string): {
  receipt: ReceiptType;
  factoryAddress: string;
  erc1155Launched: typeof erc1155TryError;
  supportedNFTs: SupportedNFTs;
  erc20sLaunched: typeof erc20sLaunched;
  supportedFTs: SupportedFTs;
  displayedTokeks: typeof displayedTokeks;
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
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: pabrikrotiErc20sLaunched,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  };
}
