// /src/config/contracts/tekeksPabrikRoti.ts

// Blockchain configurations
import { SupportedNFTs } from "@/config/contracts/index";
import {
  erc1155TryError,
  erc721Bananow,
} from "@/config/contracts/tekekContracts";
import { baseMainnet, baseSepolia } from "@/config/rantais";

export const tekeksPabrikRoti: SupportedNFTs = {
  [baseMainnet.id]: [erc721Bananow.address],
  [baseSepolia.id]: [erc1155TryError.address],
};
