// /src/config/contracts/tekeks.ts

// Blockchain configurations
import { SupportedNFTs } from "@/config/contracts/index";
import { erc1155MbokSri2025 } from "@/config/contracts/tekekContracts";
import { baseMainnet } from "@/config/rantais";

export const tekeks: SupportedNFTs = {
  [baseMainnet.id]: [erc1155MbokSri2025.address],
};
