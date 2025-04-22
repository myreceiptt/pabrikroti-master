// /src/config/rantais.ts

// External libraries
import { defineChain } from "thirdweb";
import {
  avalanche,
  base,
  baseSepolia as baseTestnet,
  ethereum,
  optimism,
  zora,
} from "thirdweb/chains";

// All chains should be exported and defined from this file, including any custom chain using `defineChain`.
export const avalancheC = avalanche; // Avalanche C-Chain
// export const avalancheC = defineChain(43114); // Avalanche C-Chain

export const baseMainnet = base; // Base Mainnet
// export const baseMainnet = defineChain(8453); // Base Mainnet

export const baseSepolia = baseTestnet; // Base Sepolia Testnet
// export const baseSepolia = defineChain(84532); // Base Sepolia Testnet

export const customChain = defineChain(0.001); // Not exist. Don't actually use this!

export const ethereumEvm = ethereum; // Ethereum Mainnet
// export const ethereumEvm = defineChain(1); // Ethereum Mainnet

export const humanityTest = defineChain(1942999413); // Humanity Testnet

export const monadTestnet = defineChain(10143); // Monad Testnet

export const opMainnet = optimism; // OP Mainnet
// export const opMainnet = defineChain(10); // OP Mainnet

export const shapeNetwork = defineChain(360); // Shape Network

export const zoraMainnet = zora; // Zora Mainnet
// export const zoraMainnet = defineChain(7777777); // Zora Mainnet

// All chain and chains combinations - Tentukan Dulu Rantainya.
export const chain = baseMainnet; // Default Chain
export const chains = [baseMainnet, baseSepolia]; // Supported Chains
