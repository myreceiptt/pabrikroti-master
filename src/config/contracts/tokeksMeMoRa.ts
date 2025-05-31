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
  oioiTokenIcon,
  oioiTokenSymbol,
  oioiTokenName,
  erc20OiOiShapeNetwork,
  erc20OiOiOpMainnet,
  erc20OiOiMonadTestnet,
  erc20OiOiBaseSepolia,
  erc20OiOiBase,
} from "@/config/contracts/tokekContracts";
import {
  baseMainnet,
  baseSepolia,
  monadTestnet,
  opMainnet,
  shapeNetwork,
} from "@/config/rantais";

// Define the supportedTokens - tokeks (FTs)
export const tokeksMeMoRa: SupportedFTs = {
  [baseMainnet.id]: [
    {
      address: erc20BONBase.address,
      name: bonDoshName,
      symbol: bonDoshSymbol,
      icon: bonDoshIcon,
    },
    {
      address: erc20OiOiBase.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
    },
    {
      address: erc20USDCBase.address,
      name: usdCoinName,
      symbol: usdCoinSymbol,
      icon: usdCoinIcon,
    },
  ],
  [baseSepolia.id]: [
    {
      address: erc20BONBaseSepolia.address,
      name: bonDoshName,
      symbol: bonDoshSymbol,
      icon: bonDoshIcon,
    },
    {
      address: erc20OiOiBaseSepolia.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
    },
    {
      address: erc20USDCBaseSepolia.address,
      name: usdCoinName,
      symbol: usdCoinSymbol,
      icon: usdCoinIcon,
    },
  ],
  [monadTestnet.id]: [
    {
      address: erc20OiOiMonadTestnet.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
    },
  ],
  [opMainnet.id]: [
    {
      address: erc20OiOiOpMainnet.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
    },
  ],
  [shapeNetwork.id]: [
    {
      address: erc20OiOiShapeNetwork.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
    },
  ],
};

// Displayed balance FTs
export const displayedTokeksMeMoRa = {
  [baseMainnet.id]: erc20BONBase.address,
  [baseSepolia.id]: erc20BONBaseSepolia.address,
  [monadTestnet.id]: erc20OiOiMonadTestnet.address,
  [opMainnet.id]: erc20OiOiOpMainnet.address,
  [shapeNetwork.id]: erc20OiOiShapeNetwork.address,
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
