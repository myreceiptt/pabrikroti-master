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
    shouldCheckAccess: boolean;
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
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  "memora.voyage.co.id": {
    receipt: memora,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155MeMoRa1,
    supportedNFTs: tekeksMeMoRa,
    erc20sLaunched: erc20sLaunchedMeMoRa,
    supportedFTs: tokeksMeMoRa,
    displayedTokeks: displayedTokeksMeMoRa,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  "travconn.endhonesa.com": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  "coupon.travelconnect.co": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  "pabrikroti.endhonesa.com": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: erc20sLaunchedPabrikRoti,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  "preroti.endhonesa.com": {
    receipt: pabrikroti,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeksPabrikRoti,
    erc20sLaunched: erc20sLaunchedPabrikRoti,
    supportedFTs: tokeksPabrikRoti,
    displayedTokeks: displayedTokeksPabrikRoti,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  localhost: {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
  },
  "127.0.0.1": {
    receipt: myreceipt,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155TryError,
    supportedNFTs: tekeks,
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each component.
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
  shouldCheckAccess: boolean;
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
    erc20sLaunched: erc20sLaunched,
    supportedFTs: tokeks,
    displayedTokeks: displayedTokeks,
    shouldCheckAccess: true, // Will be overridden by the shouldCheck value on each receipt (nftsFTGated and coinsNFTGated).
  };
}
