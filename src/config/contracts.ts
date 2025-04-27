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
export const rotiAccountFactory = accountFactoryNOTA;
export const memoraAccountFactory = accountFactoryVoyage;
export const istiqlalAccountFactory = accountFactoryVoyage;
export const theAccountFactory = accountFactoryNOTA;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// NFT contracts Avalanche C-Chain
// ...

// NFT contracts Base Mainnet
export const erc1155MeMoRa1 = getContract({
  address: "0xba0032620d88D9b16752CbDE75593c080C3d38de", // MeMoRa One - Default
  chain: baseMainnet,
  client,
});

export const erc1155IstiqlalDL = getContract({
  address: "0x937F5A27C0d6c979d5b9EBddebD1C666B70b88C1", // Istiqlal Digital Legacy - Default
  chain: baseMainnet,
  client,
});

// NFT contracts Base Sepolia
export const erc1155TryError = getContract({
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
// Define the type explicitly
type SupportedNFTs = {
  // Keys are numbers, values are arrays of Ethereum addresses
  [key: number]: `0x${string}`[];
};

// Define `tekeks` (NFTs) with the proper type - Tentukan satu atau lebih dari daftar NFT sesuai rantainya
export const rotiTekeks: SupportedNFTs = {
  [baseSepolia.id]: [erc1155TryError.address],
};

export const memoraTekeks: SupportedNFTs = {
  [baseMainnet.id]: [erc1155MeMoRa1.address],
};

export const istiqlalTekeks: SupportedNFTs = {
  [baseMainnet.id]: [erc1155IstiqlalDL.address],
};

export const tekeks: SupportedNFTs = {
  [baseSepolia.id]: [erc1155TryError.address],
};
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Launched NFT contracts - Pilih satu dari daftar NFT untuk digunakan
export const rotiErc1155Launched = getContract({
  address: erc1155TryError.address,
  chain: erc1155TryError.chain,
  client,
});

export const memoraErc1155Launched = getContract({
  address: erc1155MeMoRa1.address,
  chain: erc1155MeMoRa1.chain,
  client,
});

export const istiqlalErc1155Launched = getContract({
  address: erc1155IstiqlalDL.address,
  chain: erc1155IstiqlalDL.chain,
  client,
});

export const erc1155Launched = getContract({
  address: erc1155TryError.address,
  chain: erc1155TryError.chain,
  client,
});
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

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

// All supported FTs
const nameUSDCoin = "USD Coin"; // USD Coin
const symbolUSDCoin = "USDC"; // USD Coin
const iconUSDCoin = "/erc20-icons/usdc.png"; // USD Coin

const nameOiOiToken = "OiOi Token"; // OiOi Token
const symbolOiOiToken = "OiOi"; // OiOi Token
const iconOiOiToken = "/erc20-icons/oioi.png"; // OiOi Token

const nameBONDosh = "BON Dosh"; // BON Voyage
const symbolBONDosh = "BON"; // BON Voyage
const iconBONDosh = "/erc20-icons/bon.png"; // BON Voyage

const nameIDLToken = "IDL Token"; // USD Coin
const symbolIDLToken = "IDL"; // USD Coin
const iconIDLToken = "/erc20-icons/idl.png"; // USD Coin

// Define `tokeks` (FTs) with the proper type - Tentukan satu atau lebih dari daftar FT sesuai rantainya
export const rotiTokeks = {
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
};

export const memoraTokeks = {
  [baseMainnet.id]: [
    {
      address: erc20USDCBase.address,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
    {
      address: erc20BONBase.address,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
  ],
  [baseSepolia.id]: [
    {
      address: erc20USDCBaseSepolia.address,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
    {
      address: erc20BONBase.address,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
  ],
};

export const istiqlalTokeks = {
  [baseMainnet.id]: [
    {
      address: erc20USDCBase.address,
      name: nameUSDCoin,
      symbol: symbolUSDCoin,
      icon: iconUSDCoin,
    },
    {
      address: erc20BONBase.address,
      name: nameBONDosh,
      symbol: symbolBONDosh,
      icon: iconBONDosh,
    },
    {
      address: erc20IstiqlalDL.address,
      name: nameIDLToken,
      symbol: symbolIDLToken,
      icon: iconIDLToken,
    },
  ],
};

export const tokeks = {
  [baseSepolia.id]: [
    {
      address: erc20OiOiBaseSepolia.address,
      name: nameOiOiToken,
      symbol: symbolOiOiToken,
      icon: iconOiOiToken,
    },
  ],
};
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Displayed balance FTs - Tentukan satu dari daftar NFT sesuai rantainya
export const rotiDisplayedTekeks = {
  [baseMainnet.id]: erc20OiOiBase.address,
  [baseSepolia.id]: erc20OiOiBaseSepolia.address,
  [monadTestnet.id]: erc20OiOiMonadTestnet.address,
};

export const memoraDisplayedTekeks = {
  [baseMainnet.id]: erc20BONBase.address,
  [baseSepolia.id]: erc20BONBaseSepolia.address,
};

export const istiqlalDisplayedTekeks = {
  [baseMainnet.id]: erc20IstiqlalDL.address,
};

export const displayedTekeks = {
  [baseSepolia.id]: erc20OiOiBaseSepolia.address,
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
export const rotiErc20ContractsLaunched = [
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

export const memoraErc20ContractsLaunched = [
  {
    address: erc20BONBase.address,
    name: nameBONDosh,
    symbol: symbolBONDosh,
    icon: iconBONDosh,
    by: "Voyage.Co.Id",
    link: "https://www.voyage.co.id/",
    chain: erc20BONBase.chain,
    client,
  },
  {
    address: erc20BONBaseSepolia.address,
    name: nameBONDosh,
    symbol: symbolBONDosh,
    icon: iconBONDosh,
    by: "Voyage.Co.Id",
    link: "https://www.voyage.co.id/",
    chain: erc20BONBaseSepolia.chain,
    client,
  },
];

export const istiqlalErc20ContractsLaunched = [
  {
    address: erc20IstiqlalDL.address,
    name: nameIDLToken,
    symbol: symbolIDLToken,
    icon: iconIDLToken,
    by: "Badan Pengelola Masjid Istiqlal",
    link: "https://www.istiqlal.or.id/",
    chain: erc20IstiqlalDL.chain,
    client,
  },
];

export const erc20ContractsLaunched = [
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
];
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
