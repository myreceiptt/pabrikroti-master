// /src/config/contracts/tokekContracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { baseMainnet, baseSepolia, monadTestnet } from "@/config/rantais";

// FT contracts Avalanche C-Chain
// ...

// FT contracts Base Mainnet
export const erc20USDCBase = getContract({
  address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", // USD Coin - Default
  chain: baseMainnet,
  client,
});

export const erc20OiOiBase = getContract({
  address: "0xba0032620d88D9b16752CbDE75593c080C3d38de", // OiOi Token  - Default
  chain: baseMainnet,
  client,
});

export const erc20BONBase = getContract({
  address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C", // BON Voyage - Default
  chain: baseMainnet,
  client,
});

export const erc20IstiqlalDL = getContract({
  address: "0x848a5F7CE782d183606C729d1dd9b089b54437d9", // IDL Token - Default
  chain: baseMainnet,
  client,
});

// FT contracts Base Sepolia
export const erc20USDCBaseSepolia = getContract({
  address: "0x5dEaC602762362FE5f135FA5904351916053cF70", // USD C0in - Default
  chain: baseSepolia,
  client,
});

export const erc20OiOiBaseSepolia = getContract({
  address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53", // OiOi Token - Default
  chain: baseSepolia,
  client,
});

export const erc20BONBaseSepolia = getContract({
  address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576", // B0N V0yage - Default
  chain: baseSepolia,
  client,
});

// FT contracts BOB (Buitl On Bitcoin)
// ...

// FT contracts Custom Chain
// ...

// FT contracts Ethereum Mainnet
// ...

// FT contracts Humanity Testnet
// ...

// FT contracts Ink On Chain
// ...

// FT contracts Mint Blockchain
// ...

// FT contracts Mode Network
// ...

// FT contracts Monad Tesnet
export const erc20OiOiMonadTestnet = getContract({
  address: "0x8d7402Ae89CdF92D3477d9D63517F5e609caBcb2", // OiOi Token - Default
  chain: monadTestnet,
  client,
});

// FT contracts OP Mainnet
// ...

// FT contracts on Shape Network
// ...

// FT contracts on Soneium Mainnet
// ...

// FT contracts on Superseed Blockchain
// ...

// FT contracts on Unichain Blockchain
// ...

// FT contracts on World Chain
// ...

// FT contracts Zora Mainnet
// ...
