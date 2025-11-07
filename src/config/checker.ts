// /src/config/checker.ts

"use client";

// External libraries
import { useEffect, useMemo } from "react";
import { getContract } from "thirdweb";
import { balanceOfBatch, nextTokenIdToMint } from "thirdweb/extensions/erc1155";
import { getBalance } from "thirdweb/extensions/erc20";
import { useReadContract } from "thirdweb/react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// --------------------------------------------------
// ✅ ERC1155 Checker
// --------------------------------------------------
interface CheckErc1155Props {
  activeAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
  shouldCheck?: boolean;
}

export const CheckErc1155 = ({
  activeAddress,
  onAccessChange,
  shouldCheck,
}: CheckErc1155Props) => {
  const { erc1155Launched, shouldCheckAccess } = getActiveReceipt();
  const effectiveShouldCheck = shouldCheck ?? shouldCheckAccess;

  // ⛔️ Jika tidak ingin dicek, langsung beri akses
  useEffect(() => {
    if (!effectiveShouldCheck) {
      onAccessChange(true);
    }
  }, [effectiveShouldCheck, onAccessChange]);

  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
    queryOptions: {
      enabled: effectiveShouldCheck,
    },
  });

  const nftIds = useMemo(() => {
    if (!effectiveShouldCheck || nextNFTId === undefined) return [];
    return Array.from({ length: Number(nextNFTId) }, (_, i) => BigInt(i));
  }, [nextNFTId, effectiveShouldCheck]);

  const owners = new Array(nftIds.length).fill(activeAddress);

  const { data: balances } = useReadContract(balanceOfBatch, {
    contract: erc1155Launched,
    owners,
    tokenIds: nftIds,
    queryOptions: {
      enabled: effectiveShouldCheck && nftIds.length > 0,
    },
  });

  useEffect(() => {
    if (!effectiveShouldCheck) return;

    if (balances !== undefined) {
      const hasTokens = balances.some((balance: bigint) => balance > 0n);
      onAccessChange(hasTokens);
    }
  }, [balances, onAccessChange, effectiveShouldCheck]);

  return null;
};

// --------------------------------------------------
// ✅ ERC20 Checker (Multiple Token Support)
// --------------------------------------------------
interface CheckErc20Props {
  activeAddress: string;
  onAccessChange: (hasAccess: boolean | null) => void;
  shouldCheck?: boolean;
}

export const CheckErc20 = ({
  activeAddress,
  onAccessChange,
  shouldCheck,
}: CheckErc20Props) => {
  const { erc20sLaunched, shouldCheckAccess } = getActiveReceipt();
  const effectiveShouldCheck = shouldCheck ?? shouldCheckAccess;

  useEffect(() => {
    let isCancelled = false;

    // ⛔️ Jika pengecekan dimatikan, langsung beri akses
    if (!effectiveShouldCheck) {
      onAccessChange(true);
      return;
    }

    const checkBalances = async () => {
      if (!activeAddress || !erc20sLaunched.length) {
        onAccessChange(false);
        return;
      }

      const results = await Promise.all(
        erc20sLaunched.map(async (token) => {
          try {
            const contract = getContract({
              address: token.address,
              chain: token.chain,
              client: token.client,
            });

            const result = await getBalance({
              contract,
              address: activeAddress,
            });

            return result.value > 0n;
          } catch (error) {
            console.warn(`Error for ${token.symbol}`, error);
            return false;
          }
        }),
      );

      const hasToken = results.some(Boolean);
      if (!isCancelled) {
        onAccessChange(hasToken);
      }
    };

    checkBalances();

    return () => {
      isCancelled = true;
    };
  }, [activeAddress, erc20sLaunched, onAccessChange, effectiveShouldCheck]);

  return null;
};
