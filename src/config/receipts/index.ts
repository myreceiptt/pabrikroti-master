// /src/config/receipts/index.ts

// Blockchain configurations
import {
  displayedTokeks,
  displayedTokeksMeMoRa,
  displayedTokeksPabrikRoti,
  erc1155MeMoRa1,
  erc1155TryError,
  erc20sLaunched,
  factoryNOTA,
  erc20sLaunchedMeMoRa,
  erc20sLaunchedPabrikRoti,
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
import { tracon } from "@/config/receipts/tracon";
import { zim } from "@/config/receipts/zim";

// Use typeof from one of the receipt (structure must same)
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
    erc20sLaunched: erc20sLaunchedMeMoRa,
    supportedFTs: tokeksMeMoRa,
    displayedTokeks: displayedTokeksMeMoRa,
  },
  "memora.voyage.co.id": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
    erc20sLaunched: erc20sLaunchedMeMoRa,
    supportedFTs: tokeksMeMoRa,
    displayedTokeks: displayedTokeksMeMoRa,
  },
  "motion.endhonesa.com": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "www.inamotion.id": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "tracon.endhonesa.com": {
    receipt: tracon,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "zim.endhonesa.com": {
    receipt: zim,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "pabrikroti.endhonesa.com": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: erc20sLaunchedPabrikRoti,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  },
  "preroti.endhonesa.com": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: erc20sLaunchedPabrikRoti,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  },
  localhost: {
    receipt: zim,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
  },
  "127.0.0.1": {
    receipt: zim,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
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
    erc20sLaunched: erc20sLaunchedPabrikRoti,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
  };
}
