// /src/config/contracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { base, baseSepolia } from "@/config/rantais";

// All Non-Fungible Tokens Contracts
// Bukhari Open Door on Base.
export const bukhariOpenDoor = getContract({
  address: "0xc226653E9C043674a48C6b7Be33526771C34389A",
  chain: base,
  client,
});

// MEMORA ONE on Base.
export const memoraOneOnBase = getContract({
  address: "0x1925B991C5e2eC45BA1f34786BAd405d58202140",
  chain: base,
  client,
});

// Bukhari Virtual Collectibles on Base Sepolia.
export const bukhariVirtualCollectibles = getContract({
  address: "0x045C2bC19d61B7527B1d996548B67B2Fa8cD68e1",
  chain: baseSepolia,
  client,
});

// MEMORA ZER0 on Base Sepolia.
export const memoraZer0 = getContract({
  address: "0xc3046681149f96746b362a64472fD4B1cd1E33B2",
  chain: base,
  client,
});

// All Non-Fungible Tokens Contracts
// BON VOYAGE Drop on Base.
export const bonVoyageDrop = getContract({
  address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
  chain: base,
  client,
});

// USD Coin on Base.
export const usdCoinOnBase = getContract({
  address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  chain: base,
  client,
});

// B0N V0YAGE Drop on Base Sepolia.
export const b0nV0yageDrop = getContract({
  address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
  chain: baseSepolia,
  client,
});

// USD Coin on Base Sepolia.
export const usdCoinOnBaseSepolia = getContract({
  address: "0x5dEaC602762362FE5f135FA5904351916053cF70",
  chain: baseSepolia,
  client,
});
