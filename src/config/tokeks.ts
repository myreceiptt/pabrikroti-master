// /src/config/tokeks.ts

// Blockchain configurations
import { base, baseSepolia } from "@/config/rantais";

export const tokeks = {
  [base.id]: [
    {
      address: "0x237b1188F8BAC61f2E4e0EdF2D933F827262157C",
      name: "BON Dosh",
      symbol: "BON",
      icon: "/erc20-icons/bon.png",
    },
    {
      address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
  [baseSepolia.id]: [
    {
      address: "0x204717A95a9362660dCF026cdE4cEB1586FfD576",
      name: "BON Dosh",
      symbol: "BON",
      icon: "/erc20-icons/bon.png",
    },
    {
      address: "0x5dEaC602762362FE5f135FA5904351916053cF70",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
};
