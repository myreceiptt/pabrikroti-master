// /src/components/account/WalletInfo.tsx

"use client";

import React from "react";
import { useWalletBalance, useActiveWalletChain } from "thirdweb/react";
import { FaWallet, FaEthereum, FaCoins } from "react-icons/fa6";
import { client } from "@/config/client";
import { tokeks } from "@/config/tokeks";

interface WalletInfoProps {
  account: { address: string } | null;
}

export default function WalletInfo({ account }: WalletInfoProps) {
  // Get the currently connected blockchain
  const activeChain = useActiveWalletChain();

  // Fetch Native Token Balance (Auto Syncs with Active Chain)
  const { data: ethBalance, isLoading: isLoadingEth } = useWalletBalance({
    address: account?.address,
    chain: activeChain ?? undefined, // Ensure chain is set
    client,
  });

  // Fetch ERC-20 Token Balances (Auto Syncs with Active Chain)
  const tokenBalances =
    activeChain && tokeks[activeChain.id]
      ? tokeks[activeChain.id].map((token) =>
          useWalletBalance({
            address: account?.address,
            chain: activeChain,
            client,
            tokenAddress: token.address,
          })
        )
      : [];

  return (
    <div className="p-4 bg-white shadow-md rounded-xl w-full max-w-sm flex flex-col gap-4">
      {/* Wallet Address */}
      <div className="flex items-center gap-2 text-hitam-judul-body">
        <FaWallet className="text-xl" />
        <p className="break-all text-sm">{account?.address}</p>
      </div>

      {/* Native Token Balance */}
      <div className="flex items-center gap-2 text-hitam-judul-body">
        <FaEthereum className="text-xl" />
        <p className="text-sm">
          {isLoadingEth
            ? "Loading..."
            : `${ethBalance?.displayValue} ${ethBalance?.symbol}`}
        </p>
      </div>

      {/* ERC-20 Token Balances */}
      {tokenBalances?.map(({ data: tokenBalance, isLoading }, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-hitam-judul-body">
          <FaCoins className="text-xl" />
          <p className="text-sm">
            {isLoading
              ? "Loading..."
              : `${tokenBalance?.displayValue} ${
                  tokeks[activeChain?.id || "0"][index].symbol
                }`}
          </p>
        </div>
      ))}
    </div>
  );
}
