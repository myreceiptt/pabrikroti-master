// /src/config/contracts/tekeks.ts

// Blockchain configurations
import { SupportedNFTs } from "@/config/contracts/index";
import { erc1155TryError } from "@/config/contracts/tekekContracts";
import { baseSepolia } from "@/config/rantais";

export const tekeks: SupportedNFTs = {
  [baseSepolia.id]: [erc1155TryError.address],
};
