// /src/config/contracts/tokeks.ts

// Blockchain configurations
import { SupportedFTs } from "@/config/contracts/index";
import {
  erc20FTLKBase,
  erc20FTLKOpMainnet,
  erc20OiOiBase,
  erc20OiOiBaseSepolia,
  erc20OiOiMonadTestnet,
  erc20OiOiOpMainnet,
  erc20OiOiShapeNetwork,
  ftlkBy,
  ftlkIcon,
  ftlkLink,
  ftlkName,
  ftlkSymbol,
  oioiTokenIcon,
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
export const tokeks: SupportedFTs = {
  [baseMainnet.id]: [
    {
      address: erc20FTLKBase.address,
      name: ftlkName,
      symbol: ftlkSymbol,
      icon: ftlkIcon,
    },
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
  [opMainnet.id]: [
    {
      address: erc20FTLKOpMainnet.address,
      name: ftlkName,
      symbol: ftlkSymbol,
      icon: ftlkIcon,
    },
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
export const displayedTokeks = {
  [baseMainnet.id]: erc20FTLKBase.address,
  [baseSepolia.id]: erc20OiOiBaseSepolia.address,
  [monadTestnet.id]: erc20OiOiMonadTestnet.address,
  [opMainnet.id]: erc20FTLKOpMainnet.address,
  [shapeNetwork.id]: erc20OiOiShapeNetwork.address,
};

// Launched FT contracts
export const erc20sLaunched = [
  {
    address: erc20FTLKBase.address,
    name: ftlkName,
    symbol: ftlkSymbol,
    icon: ftlkIcon,
    by: ftlkBy,
    link: ftlkLink,
    chain: erc20FTLKBase.chain,
    client: erc20FTLKBase.client,
  },
  {
    address: erc20FTLKOpMainnet.address,
    name: ftlkName,
    symbol: ftlkSymbol,
    icon: ftlkIcon,
    by: ftlkBy,
    link: ftlkLink,
    chain: erc20FTLKOpMainnet.chain,
    client: erc20FTLKOpMainnet.client,
  },
];
