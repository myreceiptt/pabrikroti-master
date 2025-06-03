// /src/config/contracts/tokekContracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import {
  baseMainnet,
  baseSepolia,
  monadTestnet,
  opMainnet,
  shapeNetwork,
} from "@/config/rantais";

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

export const erc20FTLKBase = getContract({
  address: "0x73c5a4aE49A98752ae28e4BA97A6D14809a5725E", // FTLK Coin
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
export const erc20OiOiOpMainnet = getContract({
  address: "0x4309d86dceEAd544645D7245d8deE231B98A0d80", // OiOi Token - Default
  chain: opMainnet,
  client,
});

export const erc20FTLKOpMainnet = getContract({
  address: "0x73c5a4aE49A98752ae28e4BA97A6D14809a5725E", // FTLK Coin
  chain: opMainnet,
  client,
});

// FT contracts on Shape Network
export const erc20OiOiShapeNetwork = getContract({
  address: "0x6d6e5b8a5dBeCc6758553FC636Bd0aE65282549f", // OiOi Token - Default
  chain: shapeNetwork,
  client,
});

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
export const usdCoinName = "USD Coin"; // USD Coin
export const usdCoinSymbol = "USDC"; // USD Coin
export const usdCoinIcon = "/erc20-icons/usdc.png"; // USD Coin

export const oioiTokenName = "OiOi Token"; // OiOi Token
export const oioiTokenSymbol = "OiOi"; // OiOi Token
export const oioiTokenIcon = "/erc20-icons/oioi.png"; // OiOi Token
export const oioiTokenBy = "Prof. NOTA Inc."; // OiOi Token
export const oioiTokenLink = "https://nota.endhonesa.com/"; // OiOi Token

export const bonDoshName = "BON Dosh"; // BON Voyage
export const bonDoshSymbol = "BON"; // BON Voyage
export const bonDoshIcon = "/erc20-icons/bon.png"; // BON Voyage
export const bonDoshBy = "Voyage.Co.Id"; // BON Voyage
export const bonDoshLink = "https://voyage.co.id/"; // BON Voyage

export const ftlkName = "FTLK Coin"; // FTLK Coin
export const ftlkSymbol = "FTLK"; // FTLK Coin
export const ftlkIcon = "/erc20-icons/ftlk.png"; // FTLK Coin
export const ftlkBy = "Futuloka"; // FTLK Coin
export const ftlkLink = "https://futuloka.io/"; // FTLK Coin
