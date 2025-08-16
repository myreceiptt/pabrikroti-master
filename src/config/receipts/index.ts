// /src/config/receipts/index.ts

// Blockchain configurations
import {
  displayedTokeks,
  displayedTokeksIstiqlal,
  displayedTokeksMeMoRa,
  displayedTokeksPabrikRoti,
  erc1155IstiqlalDL,
  erc1155MeMoRa1,
  erc1155TryError,
  erc20sLaunched,
  factoryNOTA,
  istiqlalErc20sLaunched,
  memoraErc20sLaunched,
  pabrikrotiErc20sLaunched,
  SupportedFTs,
  SupportedNFTs,
  tekeks,
  tekeksIstiqlal,
  tekeksMeMoRa,
  tekeksPabrikRoti,
  tokeks,
  tokeksIstiqlal,
  tokeksMeMoRa,
  tokeksPabrikRoti,
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
    erc20sLaunched: typeof erc20sLaunched;
    supportedFTs: SupportedFTs;
    displayedTokeks: typeof displayedTokeks;
  }
> = {
  "istiqlal.endhonesa.com": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  },
  "nft.istiqlal.or.id": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  },
  "login.istiqlal.or.id": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  },
  "leminerale.istiqlal.or.id": {
    receipt: leminerale,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  },
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
  "preroti.endhonesa.com": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  },
  "localhost": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  },
  "127.0.0.1": {
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
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
    receipt: istiqlal,
    factoryAddress: factoryNOTA,
    erc1155Launched: erc1155IstiqlalDL,
    supportedNFTs: tekeksIstiqlal,
    erc20sLaunched: istiqlalErc20sLaunched,
    supportedFTs: tokeksIstiqlal,
    displayedTokeks: displayedTokeksIstiqlal,
  };
}
