// /src/config/contracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { baseMainnet, baseSepolia, monadTestnet } from "@/config/rantais";

// List factory address contract
export const accountFactoryNOTA = "0x186b1740d24bc028D220838796441441dc444f9A"; // Prof. NOTA Inc.
export const accountFactoryVoyage =
  "0x186b1740d24bc028D220838796441441dc444f9A"; // BON VOYAGE

// Factory address contract - pilih satu dari daftar factory untuk digunakan
export const theAccountFactory = accountFactoryVoyage;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// NFT contracts Avalanche C-Chain
// ...

// NFT contracts Base Mainnet
const addressErc1155BukhariOD = "0xc226653E9C043674a48C6b7Be33526771C34389A"; // Bukhari Open Door
export const erc1155BukhariOD = getContract({
  address: addressErc1155BukhariOD,
  chain: baseMainnet,
  client,
});

const addressErc1155MeMoRa1 = "0x1925B991C5e2eC45BA1f34786BAd405d58202140"; // MeMoRa One - Default
export const erc1155MeMoRa1 = getContract({
  address: addressErc1155MeMoRa1,
  chain: baseMainnet,
  client,
});

// NFT contracts Base Sepolia
const addressErc1155TryError = "0xdf9F3A962875cAAAC9f62d6Cc505B9b61E06c34c"; // Try and Error - Default
export const erc1155TryError = getContract({
  address: addressErc1155TryError,
  chain: baseSepolia,
  client,
});

const addressErc1155MeMoRa0 = "0xc3046681149f96746b362a64472fD4B1cd1E33B2"; // MeM0Ra Zer0 - Default
export const erc1155MeMoRa0 = getContract({
  address: addressErc1155MeMoRa0,
  chain: baseSepolia,
  client,
});

// NFT contracts Custom Chain
// ...

// NFT contracts Ethereum Mainnet
// ...

// NFT contracts Humanity Testnet
// ...

// NFT contracts Monad Testnet
// ...

// NFT contracts OP Mainnet
// ...

// NFT contracts on Shape Network
// ...

// NFT contracts Zora Mainnet
// ...

// All supported NFTs
// Define the type explicitly
type SupportedNFTs = {
  // Keys are numbers, values are arrays of Ethereum addresses
  [key: number]: `0x${string}`[];
};

// Define `tekeks` (NFTs) with the proper type - Tentukan satu atau lebih dari daftar NFT sesuai rantainya
export const tekeks: SupportedNFTs = {
  [baseMainnet.id]: [addressErc1155BukhariOD, addressErc1155MeMoRa1],
  [baseSepolia.id]: [addressErc1155TryError, addressErc1155MeMoRa0],
};
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Launched NFT contracts - Pilih satu dari daftar NFT untuk digunakan
const addressErc1155Launched = addressErc1155MeMoRa1;
export const erc1155Launched = getContract({
  address: addressErc1155Launched,
  chain: baseMainnet,
  client,
});
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// FT contracts Avalanche C-Chain
// ...

// FT contracts Base Mainnet
const addressErc20PoinIGF = "0x01460F06aC46aBc2185db9Fa529564798eEC33C3"; // Poin IGF
export const erc20OPoinIGF = getContract({
  address: addressErc20PoinIGF,
  chain: baseMainnet,
  client,
});

const addressErc20PoinIstiqlal = "0x01460F06aC46aBc2185db9Fa529564798eEC33C3"; // Poin Masjid Istiqlal
export const erc20OPoinIstiqlal = getContract({
  address: addressErc20PoinIstiqlal,
  chain: baseMainnet,
  client,
});

const addressErc20OiOiBase = "0xba0032620d88D9b16752CbDE75593c080C3d38de"; // OiOi Token  - Default
export const erc20OiOiBase = getContract({
  address: addressErc20OiOiBase,
  chain: baseMainnet,
  client,
});

const addressErc20BONBase = "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C"; // BON Voyage - Default
export const erc20BONBase = getContract({
  address: addressErc20BONBase,
  chain: baseMainnet,
  client,
});

const addressErc20USDCBase = "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"; // USD Coin - Default
export const erc20USDCBase = getContract({
  address: addressErc20USDCBase,
  chain: baseMainnet,
  client,
});

// FT contracts Base Sepolia
const addressErc20OiOiBaseSepolia =
  "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53"; // OiOi Token - Default
export const erc20OiOiBaseSepolia = getContract({
  address: addressErc20OiOiBaseSepolia,
  chain: baseSepolia,
  client,
});

const addressErc20BONBaseSepolia = "0x204717A95a9362660dCF026cdE4cEB1586FfD576"; // B0N V0yage - Default
export const erc20BONBaseSepolia = getContract({
  address: addressErc20BONBaseSepolia,
  chain: baseSepolia,
  client,
});

const addressErc20USDCBaseSepolia =
  "0x5dEaC602762362FE5f135FA5904351916053cF70"; // USD C0in - Default
export const erc20USDCBaseSepolia = getContract({
  address: addressErc20USDCBaseSepolia,
  chain: baseSepolia,
  client,
});

// FT contracts Custom Chain
// ...

// FT contracts Ethereum Mainnet
// ...

// FT contracts Humanity Testnet
// ...

// FT contracts Monad Tesnet
const addressErc20OiOiMonadTestnet =
  "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53"; // OiOi Token - Default
export const erc20OiOiMonadTestnet = getContract({
  address: addressErc20OiOiMonadTestnet,
  chain: monadTestnet,
  client,
});

// FT contracts OP Mainnet
// ...

// NFT contracts on Shape Network
// ...

// FT contracts Zora Mainnet
// ...

// All supported FTs
const namePoinIGF = "Poin IGF"; // Poin IGF
const symbolPoinIGF = "IGF"; // Poin IGF
const iconPoinIGF = "/erc20-icons/oioi.png"; // Poin IGF

const namePoinIstiqlal = "Poin Istiqlal"; // Poin Masjid Istiqlal
const symbolPoinIstiqlal = "PMI"; // Poin Masjid Istiqlal
const iconPoinIstiqlal = "/erc20-icons/oioi.png"; // Poin Masjid Istiqlal

const nameOiOiToken = "OiOi Token"; // OiOi Token
const symbolOiOiToken = "OiOi"; // OiOi Token
const iconOiOiToken = "/erc20-icons/oioi.png"; // OiOi Token

const nameBONDosh = "BON Dosh"; // BON Voyage
const symbolBONDosh = "BON"; // BON Voyage
const iconBONDosh = "/erc20-icons/bon.png"; // BON Voyage

const nameUSDCoin = "USD Coin"; // USD Coin
const symbolUSDCoin = "USDC"; // USD Coin
const iconUSDCoin = "/erc20-icons/usdc.png"; // USD Coin

// Define `tokeks` (FTs) with the proper type - Tentukan satu atau lebih dari daftar FT sesuai rantainya
export const tokeks = {
  [baseMainnet.id]: [
    {
      address: addressErc20PoinIGF,
      name: namePoinIGF,
      symbol: symbolPoinIGF,
      icon: iconPoinIGF,
    },
    {
      address: addressErc20PoinIstiqlal,
      name: namePoinIstiqlal,
      symbol: symbolPoinIstiqlal,
      icon: iconPoinIstiqlal,
    },
    {
      address: addressErc20BONBase,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
    {
      address: addressErc20USDCBase,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
  ],
  [baseSepolia.id]: [
    {
      address: addressErc20BONBaseSepolia,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
    {
      address: addressErc20USDCBaseSepolia,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
  ],
  [monadTestnet.id]: [
    {
      address: addressErc20OiOiMonadTestnet,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
  ],
};
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Displayed balance FTs - Tentukan satu dari daftar NFT sesuai rantainya
export const displayedTekeks = {
  [baseMainnet.id]: addressErc20BONBase,
  [baseSepolia.id]: addressErc20BONBaseSepolia,
  [monadTestnet.id]: addressErc20OiOiMonadTestnet,
};
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

// Launched FT contracts - Tentukan satu atau lebih dari daftar FT sesuai rantainya untuk digunakan
export const erc20ContractsLaunched = [
  {
    address: addressErc20PoinIGF,
    name: namePoinIGF,
    symbol: symbolPoinIGF,
    icon: iconPoinIGF,
    chain: erc20OPoinIGF.chain,
    client: erc20OPoinIGF.client,
  },
  {
    address: addressErc20PoinIstiqlal,
    name: namePoinIstiqlal,
    symbol: symbolPoinIstiqlal,
    icon: iconPoinIstiqlal,
    chain: erc20OPoinIstiqlal.chain,
    client: erc20OPoinIstiqlal.client,
  },
  {
    address: addressErc20BONBase,
    name: nameBONDosh,
    symbol: symbolBONDosh,
    icon: iconBONDosh,
    chain: erc20BONBase.chain,
    client: erc20BONBase.client,
  },
  {
    address: addressErc20BONBaseSepolia,
    name: nameBONDosh,
    symbol: symbolBONDosh,
    icon: iconBONDosh,
    chain: erc20BONBaseSepolia.chain,
    client: erc20BONBaseSepolia.client,
  },
];
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
