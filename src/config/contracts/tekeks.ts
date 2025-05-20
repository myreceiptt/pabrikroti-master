// /src/config/contracts/tekeks.ts

// Blockchain configurations
import { SupportedNFTs } from "@/config/contracts/index";
import {
  erc1155MeMoRa1,
  erc1155IstiqlalDL,
  erc1155TryError,
  erc721Bananow,
} from "@/config/contracts/tekekContracts";
import { baseMainnet, baseSepolia } from "@/config/rantais";

export const tekeks: SupportedNFTs = {
  [baseSepolia.id]: [erc1155TryError.address],
};
