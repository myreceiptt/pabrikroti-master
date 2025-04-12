// /src/config/checker.ts

"use client";

// External libraries
import React, { useEffect } from "react";
import { balanceOfBatch, nextTokenIdToMint } from "thirdweb/extensions/erc1155";
import { useReadContract } from "thirdweb/react";

// Blockchain configurations
import { erc1155BaseMainnet1 } from "@/config/contracts";

interface CheckErc1155Props {
  activeAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
}

const CheckErc1155: React.FC<CheckErc1155Props> = ({
  activeAddress,
  onAccessChange,
}) => {
  // Fetch the "nextTokenIdToMint"
  const { data: lastTokenId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155BaseMainnet1,
  });

  // Generate array of tokenIds
  const tokenIds = React.useMemo(() => {
    if (lastTokenId === undefined) return [];
    return Array.from({ length: Number(lastTokenId) }, (_, i) => BigInt(i));
  }, [lastTokenId]);

  // Repeat the "activeAddress" for each token ID (required for batch query)
  const owners = new Array(tokenIds.length).fill(activeAddress);

  // Use "balanceOfBatch" to fetch all balances in a single call
  const { data: balances } = useReadContract(balanceOfBatch, {
    contract: erc1155BaseMainnet1,
    owners,
    tokenIds,
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
