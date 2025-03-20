// /src/config/checker.ts

"use client";

// External libraries
import React, { useEffect } from "react";
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";
// import { balanceOfBatch } from "thirdweb/extensions/erc1155";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariOpenDoor } from "@/config/contracts";

interface TokenCheckProps {
  userAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
}

const TokenCheck: React.FC<TokenCheckProps> = ({
  userAddress,
  onAccessChange,
}) => {
  const contract = getContract({
    client,
    address: bukhariOpenDoor.address,
    chain: bukhariOpenDoor.chain,
  });

  // Generate an array of token IDs from 0 to 22
  const tokenIds = Array.from({ length: 23 }, (_, index) => BigInt(index));

  // Repeat the user's address for each token ID (required for batch query)
  const userAddresses = new Array(tokenIds.length).fill(userAddress);

  // Use `balanceOfBatch` to fetch all balances in a single call
  const { data: balances } = useReadContract({
    contract,
    method:
      "function balanceOfBatch(address[] accounts, uint256[] ids) returns (uint256[])",
    params: [userAddresses, tokenIds],
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

export default TokenCheck;
