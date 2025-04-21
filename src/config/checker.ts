// /src/config/checker.ts

"use client";

// External libraries
import React, { useEffect } from "react";
import { balanceOfBatch, nextTokenIdToMint } from "thirdweb/extensions/erc1155";
import { useReadContract } from "thirdweb/react";

// Blockchain configurations
import { erc1155Launched } from "@/config/contracts";

interface CheckErc1155Props {
  activeAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
}

const CheckErc1155: React.FC<CheckErc1155Props> = ({
  activeAddress,
  onAccessChange,
}) => {
  // Fetch the "nextTokenIdToMint"
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  // Generate array of nftIds
  const nftIds = React.useMemo(() => {
    if (nextNFTId === undefined) return [];
    return Array.from({ length: Number(nextNFTId) }, (_, i) => BigInt(i));
  }, [nextNFTId]);

  // Repeat the "activeAddress" for each token ID (required for batch query)
  const owners = new Array(nftIds.length).fill(activeAddress);

  // Use "balanceOfBatch" to fetch all balances in a single call
  const { data: balances } = useReadContract(balanceOfBatch, {
    contract: erc1155Launched,
    owners,
    tokenIds: nftIds,
  });

  useEffect(() => {
    if (balances !== undefined) {
      // Check if user owns any token (balance > 0)
      const hasTokens = balances.some((balance: bigint) => balance > 0n);
      onAccessChange(hasTokens);
    }
  }, [balances, onAccessChange]);

  return null; // This component doesn't render anything itself
};

export default CheckErc1155;
