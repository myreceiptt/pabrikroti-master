// /src/config/contracts/tekeksMeMoRa.ts

// Blockchain configurations
import { SupportedNFTs } from "@/config/contracts/index";
import { erc1155MeMoRa1 } from "@/config/contracts/tekekContracts";
import { baseMainnet } from "@/config/rantais";

export const tekeksMeMoRa: SupportedNFTs = {
  [baseMainnet.id]: [erc1155MeMoRa1.address],
};
