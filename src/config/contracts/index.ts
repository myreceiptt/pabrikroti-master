// /src/config/contracts/index.ts

// Blockchain configurations
export * from "@/config/contracts/accountFactories";
export * from "@/config/contracts/tekekContracts";
export * from "@/config/contracts/tekeks";
export * from "@/config/contracts/tekeksIstiqlal";
export * from "@/config/contracts/tekeksMeMoRa";
export * from "@/config/contracts/tekeksPabrikRoti";
export * from "@/config/contracts/tokekContracts";

// Define the interface explicitly
export interface SupportedNFTs {
  [key: number]: `0x${string}`[];
}
