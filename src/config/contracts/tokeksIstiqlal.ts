// /src/config/contracts/tokeksIstiqlal.ts

// Blockchain configurations
import { SupportedFTs } from "@/config/contracts/index";
import {
  erc20BONBase,
  erc20IstiqlalDL,
  erc20USDCBase,
  bonDoshIcon,
  idlTokenIcon,
  usdCoinIcon,
  bonDoshName,
  idlTokenName,
  usdCoinName,
  bonDoshSymbol,
  idlTokenSymbol,
  usdCoinSymbol,
  idlTokenBy,
  idlTokenLink,
} from "@/config/contracts/tokekContracts";
import { baseMainnet } from "@/config/rantais";

// Define the supportedTokens - tokeks (FTs)
export const tokeksIstiqlal: SupportedFTs = {
  [baseMainnet.id]: [
    {
      address: erc20USDCBase.address,
      name: usdCoinName,
      symbol: usdCoinSymbol,
      icon: usdCoinIcon,
    },
    {
      address: erc20BONBase.address,
      name: bonDoshName,
      symbol: bonDoshSymbol,
      icon: bonDoshIcon,
    },
    {
      address: erc20IstiqlalDL.address,
      name: idlTokenName,
      symbol: idlTokenSymbol,
      icon: idlTokenIcon,
    },
  ],
};

// Displayed balance FTs
export const displayedTokeksIstiqlal = {
  [baseMainnet.id]: erc20IstiqlalDL.address,
};

// Launched FT contracts
export const istiqlalErc20sLaunched = [
  {
    address: erc20IstiqlalDL.address,
    name: idlTokenName,
    symbol: idlTokenSymbol,
    icon: idlTokenIcon,
    by: idlTokenBy,
    link: idlTokenLink,
    chain: erc20IstiqlalDL.chain,
    client: erc20IstiqlalDL.client,
  },
];
