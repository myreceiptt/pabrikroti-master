// /src/components/account/OwnedNfts.tsx

"use client";

import React from "react";
import { getContract } from "thirdweb";
import { useReadContract, useActiveWalletChain } from "thirdweb/react";
import { FaImage } from "react-icons/fa6";
import { client } from "@/config/client";
import { bukhariVirtualCollectibles } from "@/config/contracts";

interface OwnedNFTsProps {
  account: { address: string } | null;
}

export default function OwnedNFTs({ account }: OwnedNFTsProps) {
  // Get the currently connected blockchain
  const activeChain = useActiveWalletChain();

  const contract = getContract({
    client,
    address: bukhariVirtualCollectibles.address,
    chain: activeChain ?? undefined, // Ensure chain is set
  });

  const { data: ownedNFTs } = useReadContract({
    contract,
    method: "function balanceOfBatch(address[], uint256[]) returns (uint256[])",
    params: [
      [account?.address ?? "0x0000000000000000000000000000000000000000"],
      [0n, 1n, 2n, 3n, 4n, 5n],
    ],
  });

  return (
    <div className="mt-6 w-full max-w-md">
      <h2 className="text-lg font-semibold text-hitam-judul-body mb-2">
        Owned NFTs
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {ownedNFTs?.some((balance: bigint) => balance > 0n) ? (
          ownedNFTs?.map((balance: bigint, index: number) =>
            balance > 0n ? (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-xl flex items-center gap-2">
                <FaImage className="text-2xl text-icon-wording" />
                <p className="text-sm">
                  NFT #{index} - {balance.toString()} Owned
                </p>
              </div>
            ) : null
          )
        ) : (
          <p className="text-sm text-icon-wording">No NFTs owned</p>
        )}
      </div>
    </div>
  );
}
