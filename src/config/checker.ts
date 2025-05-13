// /src/config/checker.ts

"use client";

// External libraries
import { useEffect, useMemo } from "react";
import { balanceOfBatch, nextTokenIdToMint } from "thirdweb/extensions/erc1155";
import { useReadContract } from "thirdweb/react";

// Blockchain configurations
import { erc1155Launched } from "@/config/contracts";

interface CheckErc1155Props {
  activeAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
}

export const CheckErc1155 = ({
  activeAddress,
  onAccessChange,
}: CheckErc1155Props) => {
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  const nftIds = useMemo(() => {
    if (nextNFTId === undefined) return [];
    return Array.from({ length: Number(nextNFTId) }, (_, i) => BigInt(i));
  }, [nextNFTId]);

  const owners = new Array(nftIds.length).fill(activeAddress);

  const { data: balances } = useReadContract(balanceOfBatch, {
    contract: erc1155Launched,
    owners,
    tokenIds: nftIds,
  });

  useEffect(() => {
    if (balances !== undefined) {
      const hasTokens = balances.some((balance: bigint) => balance > 0n);
      onAccessChange(hasTokens);
    }
  }, [balances, onAccessChange]);

  return null;
};
