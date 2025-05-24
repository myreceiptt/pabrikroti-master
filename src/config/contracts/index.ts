// /src/config/contracts/index.ts

// External libraries
import { useMemo } from "react";

// Blockchain configurations
export * from "@/config/contracts/accountFactories";
export * from "@/config/contracts/tekekContracts";
export * from "@/config/contracts/tekeks";
export * from "@/config/contracts/tekeksIstiqlal";
export * from "@/config/contracts/tekeksMeMoRa";
export * from "@/config/contracts/tekeksPabrikRoti";
export * from "@/config/contracts/tokekContracts";
export * from "@/config/contracts/tokeks";
export * from "@/config/contracts/tokeksIstiqlal";
export * from "@/config/contracts/tokeksMeMoRa";
export * from "@/config/contracts/tokeksPabrikRoti";
import { getActiveReceipt } from "@/config/receipts";
import { buildCurrencyMapFromSupportedFTs } from "@/config/utils";

// Define the SupportedNFTs interface explicitly
export interface SupportedNFTs {
  [key: number]: `0x${string}`[];
}

// Define the TokenMatamuPicek interface explicitly
export interface TokenMatamuPicek {
  address: `0x${string}`;
  name: string;
  symbol: string;
  icon: string;
}

// Define the SupportedFTs interface explicitly
export interface SupportedFTs {
  [chainId: number]: TokenMatamuPicek[];
}

/**
 * React hook: useCurrencyMap
 * Menghasilkan currencyMap berdasarkan supportedFTs dari getActiveReceipt().
 */
export function useCurrencyMap() {
  const { supportedFTs } = getActiveReceipt();

  const currencyMap = useMemo(() => {
    return buildCurrencyMapFromSupportedFTs(supportedFTs);
  }, [supportedFTs]);

  return currencyMap;
}
