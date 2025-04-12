// /src/config/contracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { baseMainnet, baseSepolia, monadTestnet } from "@/config/rantais";

// Factory Address Contract - Gunakan salah satu
// export const theAccountFactory = "0x186b1740d24bc028D220838796441441dc444f9A"; // Prof. NOTA Inc.
export const theAccountFactory = "0x82EC684C86b84AC60b5e162EC87d6DCF4213D468"; // BON VOYAGE

// NFT Contracts Shape Network

// NFT Contracts Base Mainnet
// const addressErc1155BaseMainnet1 = "0x365a4245ee96F08927f9B960b87A961dA7F0Ab3C"; // LabX POAP
// const addressErc1155BaseMainnet1 = "0xc226653E9C043674a48C6b7Be33526771C34389A"; // Bukhari Open Door
const addressErc1155BaseMainnet1 = "0x1925B991C5e2eC45BA1f34786BAd405d58202140"; // MeMoRa One - Default
export const erc1155BaseMainnet1 = getContract({
  address: addressErc1155BaseMainnet1,
  chain: baseMainnet,
  client,
});

const addressErc1155BaseMainnet2 = "0x1925B991C5e2eC45BA1f34786BAd405d58202140"; // MeMoRa One - Default
export const erc1155BaseMainnet2 = getContract({
  address: addressErc1155BaseMainnet2,
  chain: baseMainnet,
  client,
});

// NFT Contracts Base Sepolia
const addressErc1155BaseSepolia1 = "0xdf9F3A962875cAAAC9f62d6Cc505B9b61E06c34c"; // Try and Error - Default
export const erc1155BaseSepolia1 = getContract({
  address: addressErc1155BaseSepolia1,
  chain: baseSepolia,
  client,
});

const addressErc1155BaseSepolia2 = "0xc3046681149f96746b362a64472fD4B1cd1E33B2"; // MeM0Ra Zer0 - Default
export const erc1155BaseSepolia2 = getContract({
  address: addressErc1155BaseSepolia2,
  chain: baseSepolia,
  client,
});

// All Supported NFTs
// Define the type explicitly
type SupportedNFTs = {
  // Keys are numbers, values are arrays of Ethereum addresses
  [key: number]: `0x${string}`[];
};

// Define `tekeks` (NFTs) with the proper type
export const tekeks: SupportedNFTs = {
  [baseMainnet.id]: [addressErc1155BaseMainnet1, addressErc1155BaseMainnet2],
  [baseSepolia.id]: [addressErc1155BaseSepolia1, addressErc1155BaseSepolia2],
};

// FT Contracts Shape Network

// FT Contracts Base Mainnet
const addressErc20BaseMainnet1 = "0xba0032620d88D9b16752CbDE75593c080C3d38de"; // OiOi Token  - Default
export const erc20BaseMainnet1 = getContract({
  address: addressErc20BaseMainnet1,
  chain: baseMainnet,
  client,
});

const addressErc20BaseMainnet2 = "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"; // USD Coin - Default
export const erc20BaseMainnet2 = getContract({
  address: addressErc20BaseMainnet2,
  chain: baseMainnet,
  client,
});

const addressErc20BaseMainnet3 = "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C"; // BON Voyage - Default
export const erc20BaseMainnet3 = getContract({
  address: addressErc20BaseMainnet3,
  chain: baseMainnet,
  client,
});

// FT Contracts Base Sepolia
const addressErc20BaseSepolia1 = "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53"; // OiOi Token - Default
export const erc20BaseSepolia1 = getContract({
  address: addressErc20BaseSepolia1,
  chain: baseSepolia,
  client,
});

const addressErc20BaseSepolia2 = "0x5dEaC602762362FE5f135FA5904351916053cF70"; // USD C0in - Default
export const erc20BaseSepolia2 = getContract({
  address: addressErc20BaseSepolia2,
  chain: baseSepolia,
  client,
});

const addressErc20BaseSepolia3 = "0x204717A95a9362660dCF026cdE4cEB1586FfD576"; // B0N V0yage - Default
export const erc20BaseSepolia3 = getContract({
  address: addressErc20BaseSepolia3,
  chain: baseSepolia,
  client,
});

// FT Contracts Monad Tesnet
const addressErc20MonadTestnet1 = "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53"; // OiOi Token - Default
export const erc20MonadTestnet1 = getContract({
  address: addressErc20MonadTestnet1,
  chain: monadTestnet,
  client,
});

// All Supported FTs
const nameOiOiToken = "OiOi Token"; // OiOi Token
const symbolOiOiToken = "OiOi"; // OiOi Token
const iconOiOiToken = "/erc20-icons/oioi.png"; // OiOi Token

const nameUSDCoin = "USD Coin"; // USD Coin
const symbolUSDCoin = "USDC"; // USD Coin
const iconUSDCoin = "/erc20-icons/usdc.png"; // USD Coin

const nameBONDosh = "BON Dosh"; // BON Voyage
const symbolBONDosh = "BON"; // BON Voyage
const iconBONDosh = "/erc20-icons/bon.png"; // BON Voyage

// Define `tokeks` (FTs) with the proper type
export const tokeks = {
  [baseMainnet.id]: [
    {
      address: addressErc20BaseMainnet1,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
    {
      address: addressErc20BaseMainnet2,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
    {
      address: addressErc20BaseMainnet3,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
  ],
  [baseSepolia.id]: [
    {
      address: addressErc20BaseSepolia1,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
    {
      address: addressErc20BaseSepolia2,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
    {
      address: addressErc20BaseSepolia3,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
  ],
  [monadTestnet.id]: [
    {
      address: addressErc20MonadTestnet1,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
  ],
};

// All Displayed Balance FTs
export const displayedTekeks = {
  [baseMainnet.id]: addressErc20BaseMainnet1,
  [baseSepolia.id]: addressErc20BaseSepolia1,
  [monadTestnet.id]: addressErc20MonadTestnet1,
};

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
