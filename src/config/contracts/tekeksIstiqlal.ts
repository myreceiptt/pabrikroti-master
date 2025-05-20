// /src/config/contracts/tekeksIstiqlal.ts

// Blockchain configurations
import { SupportedNFTs } from "@/config/contracts/index";
import { erc1155IstiqlalDL } from "@/config/contracts/tekekContracts";
import { baseMainnet } from "@/config/rantais";

export const tekeksIstiqlal: SupportedNFTs = {
  [baseMainnet.id]: [erc1155IstiqlalDL.address],
};
