// /src/config/contracts/tokeksMeMoRa.ts

// Blockchain configurations
import { SupportedFTs } from "@/config/contracts/index";
import {
  erc20BONBase,
  erc20BONBaseSepolia,
  erc20USDCBase,
  erc20USDCBaseSepolia,
  bonDoshIcon,
  usdCoinIcon,
  bonDoshName,
  usdCoinName,
  bonDoshSymbol,
  usdCoinSymbol,
  bonDoshBy,
  bonDoshLink,
} from "@/config/contracts/tokekContracts";
import { baseMainnet, baseSepolia } from "@/config/rantais";

// Define the supportedTokens - tokeks (FTs)
export const tokeksMeMoRa: SupportedFTs = {
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
  ],
  [baseSepolia.id]: [
    {
      address: erc20USDCBaseSepolia.address,
      name: usdCoinName,
      symbol: usdCoinSymbol,
      icon: usdCoinIcon,
    },
    {
      address: erc20BONBaseSepolia.address,
      name: bonDoshName,
      symbol: bonDoshSymbol,
      icon: bonDoshIcon,
    },
  ],
};

// Displayed balance FTs
export const displayedTokeksMeMoRa = {
  [baseMainnet.id]: erc20BONBase.address,
  [baseSepolia.id]: erc20BONBaseSepolia.address,
};

// Launched FT contracts
export const memoraErc20sLaunched = [
  {
    address: erc20BONBase.address,
    name: bonDoshName,
    symbol: bonDoshSymbol,
    icon: bonDoshIcon,
    by: bonDoshBy,
    link: bonDoshLink,
    chain: erc20BONBase.chain,
    client: erc20BONBase.client,
  },
  {
    address: erc20BONBaseSepolia.address,
    name: bonDoshName,
    symbol: bonDoshSymbol,
    icon: bonDoshIcon,
    by: bonDoshBy,
    link: bonDoshLink,
    chain: erc20BONBaseSepolia.chain,
    client: erc20BONBaseSepolia.client,
  },
];
