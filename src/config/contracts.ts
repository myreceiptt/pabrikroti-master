// /src/config/contracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { baseMainnet, baseSepolia, monadTestnet } from "@/config/rantais";

// List factory address contract
const accountFactoryNOTA = "0x186b1740d24bc028D220838796441441dc444f9A"; // Prof. NOTA Inc.

// Factory address contract - pilih satu dari daftar factory untuk digunakan
export const theAccountFactory = accountFactoryNOTA; // Dynamic
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// NFT contracts Avalanche C-Chain
// ...

// NFT contracts Base Mainnet
// ...

// NFT contracts Base Sepolia
const erc1155TryError = getContract({
  address: "0xdf9F3A962875cAAAC9f62d6Cc505B9b61E06c34c", // Try and Error - Default
  chain: baseSepolia,
  client,
});

// NFT contracts BOB (Buitl On Bitcoin)
// ...

// NFT contracts Custom Chain
// ...

// NFT contracts Ethereum Mainnet
// ...

// NFT contracts Humanity Testnet
// ...

// NFT contracts Ink On Chain
// ...

// NFT contracts Mint Blockchain
// ...

// NFT contracts Mode Network
// ...

// NFT contracts Monad Testnet
// ...

// NFT contracts OP Mainnet
// ...

// NFT contracts on Shape Network
// ...

// NFT contracts on Soneium Mainnet
// ...

// NFT contracts on Superseed Blockchain
// ...

// NFT contracts on Unichain Blockchain
// ...

// NFT contracts on World Chain
// ...

// NFT contracts Zora Mainnet
// ...

// All supported NFTs
// Define the interface explicitly
interface SupportedNFTs {
  // Keys are numbers, values are arrays of Ethereum addresses
  [key: number]: `0x${string}`[];
}

// Define `tekeks` (NFTs) with the proper interface - Tentukan satu atau lebih dari daftar NFT sesuai rantainya
export const tekeks: SupportedNFTs = {
  [baseSepolia.id]: [erc1155TryError.address], // Dynamic
};
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Launched NFT contracts - Pilih satu dari daftar NFT untuk digunakan
export const erc1155Launched = getContract({
  address: erc1155TryError.address,
  chain: erc1155TryError.chain,
  client,
}); // Dynamic
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// FT contracts Avalanche C-Chain
// ...

// FT contracts Base Mainnet
const erc20OiOiBase = getContract({
  address: "0xba0032620d88D9b16752CbDE75593c080C3d38de", // OiOi Token  - Default
  chain: baseMainnet,
  client,
});

// FT contracts Base Sepolia
const erc20OiOiBaseSepolia = getContract({
  address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53", // OiOi Token - Default
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
const erc20OiOiMonadTestnet = getContract({
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

// All supported FTs
const nameOiOiToken = "OiOi Token"; // OiOi Token
const symbolOiOiToken = "OiOi"; // OiOi Token
const iconOiOiToken = "/erc20-icons/oioi.png"; // OiOi Token

// Define `tokeks` (FTs) - Tentukan satu atau lebih dari daftar FT sesuai rantainya
export const tokeks = {
  [baseMainnet.id]: [
    {
      address: erc20OiOiBase.address,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
  ],
  [baseSepolia.id]: [
    {
      address: erc20OiOiBaseSepolia.address,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
  ],
  [monadTestnet.id]: [
    {
      address: erc20OiOiMonadTestnet.address,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
  ],
}; // Dynamic
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Displayed balance FTs - Tentukan satu dari daftar NFT sesuai rantainya
export const displayedTekeks = {
  [baseMainnet.id]: erc20OiOiBase.address,
  [baseSepolia.id]: erc20OiOiBaseSepolia.address,
  [monadTestnet.id]: erc20OiOiMonadTestnet.address,
}; // Dynamic
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Flatten tokeks into a simple address-to-metadata mapping
export const currencyMap: Record<
  string,
  { symbol: string; name: string; icon: string }
> = {};

// Build the map from `tokeks`
Object.values(tokeks).forEach((tokens) => {
  tokens.forEach(({ address, name, symbol, icon }) => {
    currencyMap[address.toLowerCase()] = { name, symbol, icon };
  });
});

// Add native token manually (ETH)
currencyMap["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"] = {
  name: "Ethereum",
  symbol: "ETH",
  icon: "/erc20-icons/eth.png",
};
// Add native token manually (MON)
// icon: "/erc20-icons/mon.png",

// Launched FT contracts - Tentukan satu atau lebih dari daftar FT sesuai rantainya untuk digunakan
export const erc20ContractsLaunched = [
  {
    address: erc20OiOiBase.address,
    name: nameOiOiToken,
    symbol: symbolOiOiToken,
    icon: iconOiOiToken,
    by: "Prof. NOTA Inc.",
    link: "https://nota.endhonesa.com/",
    chain: erc20OiOiBase.chain,
    client,
  },
  {
    address: erc20OiOiBaseSepolia.address,
    name: nameOiOiToken,
    symbol: symbolOiOiToken,
    icon: iconOiOiToken,
    by: "Prof. NOTA Inc.",
    link: "https://nota.endhonesa.com/",
    chain: erc20OiOiBaseSepolia.chain,
    client,
  },
  {
    address: erc20OiOiMonadTestnet.address,
    name: nameOiOiToken,
    symbol: symbolOiOiToken,
    icon: iconOiOiToken,
    by: "Prof. NOTA Inc.",
    link: "https://nota.endhonesa.com/",
    chain: erc20OiOiMonadTestnet.chain,
    client,
  },
];
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
