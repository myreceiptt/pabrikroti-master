// /src/config/rantais.ts

// External libraries
import { defineChain } from "thirdweb";
import {
  avalanche,
  base,
  baseSepolia as baseTestnet,
  ethereum,
  mode,
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

export const bobBitcoin = defineChain(60808); // BOB (Buitl On Bitcoin)

export const ethereumEvm = ethereum; // Ethereum Mainnet
// export const ethereumEvm = defineChain(1); // Ethereum Mainnet

export const humanityTest = defineChain(1942999413); // Humanity Testnet

export const inkChain = defineChain(57073); // Ink On Chain

export const mintChain = defineChain(185); // Mint Blockchain

export const modeNetwork = mode; // Mode Network
// export const modeNetwork = defineChain(34443); // Mode Network

export const monadTestnet = defineChain(10143); // Monad Testnet

export const opMainnet = optimism; // OP Mainnet
// export const opMainnet = defineChain(10); // OP Mainnet

export const shapeNetwork = defineChain(360); // Shape Network

export const soneiumMainnet = defineChain(1868); // Soneium Mainnet

export const superseedChain = defineChain(5330); // Superseed Blockchain

export const unichainBlock = defineChain(130); // Unichain Blockchain

export const worldChain = defineChain(480); // World Chain

export const zoraMainnet = zora; // Zora Mainnet
// export const zoraMainnet = defineChain(7777777); // Zora Mainnet

// All chain and chains combinations - Tentukan Dulu Rantainya.
export const chain = baseMainnet; // Default Chain
export const chains = [
  baseMainnet, // Native Ether - ETH
  baseSepolia, // Native Ether - ETH
  monadTestnet, // Native Monad - MON
  opMainnet, // Native Ether - ETH
  shapeNetwork, // Native Ether - ETH
]; // Supported Chains

// Daftar nama jaringan blockchain (chain) yang didukung
export const chainNames: Record<number, string> = {
  [avalancheC.id]: "Avalanche",
  [baseMainnet.id]: "Base Mainnet",
  [baseSepolia.id]: "Base Sepolia",
  [bobBitcoin.id]: "BOB Chain",
  [ethereumEvm.id]: "Ethereum",
  [humanityTest.id]: "Humanity Testnet",
  [inkChain.id]: "Ink On Chain",
  [mintChain.id]: "Mint Blockchain",
  [modeNetwork.id]: "Mode Network",
  [monadTestnet.id]: "Monad Testnet",
  [opMainnet.id]: "OP Mainnet",
  [shapeNetwork.id]: "Shape Network",
  [soneiumMainnet.id]: "Soneium",
  [superseedChain.id]: "Superseed",
  [unichainBlock.id]: "Unichain",
  [worldChain.id]: "World Chain",
  [zoraMainnet.id]: "Zora Mainnet",
};
