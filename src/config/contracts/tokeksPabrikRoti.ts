// /src/config/contracts/tokeksPabrikRoti.ts

// Blockchain configurations
import { SupportedFTs } from "@/config/contracts/index";
import {
  erc20OiOiBase,
  erc20OiOiBaseSepolia,
  erc20OiOiMonadTestnet,
  erc20OiOiOpMainnet,
  erc20OiOiShapeNetwork,
  oioiTokenBy,
  oioiTokenIcon,
  oioiTokenLink,
  oioiTokenName,
  oioiTokenSymbol,
} from "@/config/contracts/tokekContracts";
import {
  baseMainnet,
  baseSepolia,
  monadTestnet,
  opMainnet,
  shapeNetwork,
} from "@/config/rantais";

// Define the supportedTokens - tokeks (FTs)
export const tokeksPabrikRoti: SupportedFTs = {
  [baseMainnet.id]: [
    {
      address: erc20OiOiBase.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
    },
  ],
  [baseSepolia.id]: [
    {
      address: erc20OiOiBaseSepolia.address,
      name: oioiTokenName,
      symbol: oioiTokenSymbol,
      icon: oioiTokenIcon,
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
};

// Displayed balance FTs
export const displayedTokeksPabrikRoti = {
  [baseMainnet.id]: erc20OiOiBase.address,
  [baseSepolia.id]: erc20OiOiBaseSepolia.address,
  [monadTestnet.id]: erc20OiOiMonadTestnet.address,
  [opMainnet.id]: erc20OiOiOpMainnet.address,
  [shapeNetwork.id]: erc20OiOiShapeNetwork.address,
};

// Launched FT contracts
export const pabrikrotiErc20sLaunched = [
  {
    address: erc20OiOiBase.address,
    name: oioiTokenName,
    symbol: oioiTokenSymbol,
    icon: oioiTokenIcon,
    by: oioiTokenBy,
    link: oioiTokenLink,
    chain: erc20OiOiBase.chain,
    client: erc20OiOiBase.client,
  },
  {
    address: erc20OiOiBaseSepolia.address,
    name: oioiTokenName,
    symbol: oioiTokenSymbol,
    icon: oioiTokenIcon,
    by: oioiTokenBy,
    link: oioiTokenLink,
    chain: erc20OiOiBaseSepolia.chain,
    client: erc20OiOiBaseSepolia.client,
  },
  {
    address: erc20OiOiMonadTestnet.address,
    name: oioiTokenName,
    symbol: oioiTokenSymbol,
    icon: oioiTokenIcon,
    by: oioiTokenBy,
    link: oioiTokenLink,
    chain: erc20OiOiMonadTestnet.chain,
    client: erc20OiOiMonadTestnet.client,
  },
  {
    address: erc20OiOiOpMainnet.address,
    name: oioiTokenName,
    symbol: oioiTokenSymbol,
    icon: oioiTokenIcon,
    by: oioiTokenBy,
    link: oioiTokenLink,
    chain: erc20OiOiOpMainnet.chain,
    client: erc20OiOiOpMainnet.client,
  },
  {
    address: erc20OiOiShapeNetwork.address,
    name: oioiTokenName,
    symbol: oioiTokenSymbol,
    icon: oioiTokenIcon,
    by: oioiTokenBy,
    link: oioiTokenLink,
    chain: erc20OiOiShapeNetwork.chain,
    client: erc20OiOiShapeNetwork.client,
  },
];
