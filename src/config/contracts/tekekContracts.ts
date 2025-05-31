// /src/config/contracts/tekekContracts.ts

// External libraries
import { getContract } from "thirdweb";

// Blockchain configurations
import { client } from "@/config/client";
import { baseMainnet, baseSepolia } from "@/config/rantais";

// NFT contracts Avalanche C-Chain
// ...

// NFT contracts Base Mainnet
export const erc721Bananow = getContract({
  address: "0xfd039aC57cc8E646802dBA4b7Cf6bc561E13A09A", // Bananow Based - Default
  chain: baseMainnet,
  client,
});

export const erc1155MeMoRa1 = getContract({
  address: "0x1925B991C5e2eC45BA1f34786BAd405d58202140", // MeMoRa One - Default
  chain: baseMainnet,
  client,
});

export const erc1155MbokSri2025 = getContract({
  address: "0x6ddAcee48391d604a19e29aE545EE4A17B02ce7F", // Mbok Sri Festival 2025
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
