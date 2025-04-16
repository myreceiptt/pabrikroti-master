// /src/components/nfts/NFTDetails.tsx

"use client";

// External libraries
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { getContract } from "thirdweb";
import { canClaim, getClaimConditionById } from "thirdweb/extensions/erc1155";
import { decimals } from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { erc1155Launched } from "@/config/contracts";
import {
  listConsoleWarn,
  listError,
  listFailReason,
  listMessage1,
  listMessage2,
  listMessage3,
  listSetError,
  listUknownError,
  loaderChecking,
} from "@/config/myreceipt";

// Components libraries
import NFTForm from "@/components/nfts/NFTForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

type NFTData = {
  tokenId: bigint;
  tokenIdString: string;
  price: bigint;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxClaim: bigint;
  perWallet: bigint;
  balanceRaw: bigint;
  adjustedBalance: number;
};

const NFTDetails: React.FC = () => {
  const activeAccount = useActiveAccount();
  const params = useParams();
  const router = useRouter();

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [nft, setNft] = useState<NFTData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const tokenIdParams = params.tokenId;
  const tokenIdString = Array.isArray(tokenIdParams)
    ? tokenIdParams[0]
    : tokenIdParams ?? "0";
  const tokenId = BigInt(tokenIdString);

  // Fetch claim condition for any data
  const fetchNFTDetails = useCallback(async () => {
    if (tokenId == null || !activeAccount?.address) return;

    try {
      const claimCondition = await getClaimConditionById({
        contract: erc1155Launched,
        tokenId,
        conditionId: 0n,
      });

      // Fetch currency, price, and decimals
      let currencyDecimals = 18;
      let balanceRaw = 0n;
      const nativeETH = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

      if (claimCondition.currency.toLowerCase() !== nativeETH) {
        const currencyContract = getContract({
          client: erc1155Launched.client,
          address: claimCondition.currency,
          chain: erc1155Launched.chain,
        });

        currencyDecimals = await decimals({ contract: currencyContract });

        // Fetch wallet balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc1155Launched.chain,
          client: erc1155Launched.client,
          tokenAddress: claimCondition.currency,
        });

        balanceRaw = balanceResult.value ?? 0n;
      } else {
        // Native token balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc1155Launched.chain,
          client: erc1155Launched.client,
        });

        currencyDecimals = balanceResult.decimals ?? 18;
        balanceRaw = balanceResult.value ?? 0n;
      }

      // Adjust price and balance
      const adjustedPrice =
        Number(claimCondition.pricePerToken) / 10 ** currencyDecimals;
      const adjustedBalance = Number(balanceRaw) / 10 ** currencyDecimals;

      let isClaimable = false;
      let reason: string | null = null;

      // Fetch can claim status
      try {
        const claimStatus = await canClaim({
          contract: erc1155Launched,
          tokenId,
          quantity: 1n,
          claimer: activeAccount.address,
        });

        isClaimable = claimStatus.result;
        reason = claimStatus.reason ?? null;
      } catch (innerErr) {
        // Continue if check failed
        isClaimable = false;
        reason = listFailReason;
        console.warn(`${listConsoleWarn} ${tokenId}`, innerErr);
      }

      setNft({
        tokenId,
        tokenIdString: tokenId.toString(),
        price: claimCondition.pricePerToken,
        adjustedPrice,
        currency: claimCondition.currency,
        startTimestamp: claimCondition.startTimestamp,
        isClaimable,
        reason,
        supply: claimCondition.supplyClaimed,
        maxClaim: claimCondition.maxClaimableSupply,
        perWallet: claimCondition.quantityLimitPerWallet,
        balanceRaw,
        adjustedBalance,
      });
    } catch (err: unknown) {
      setError(listSetError);
      if (err instanceof Error) {
        console.error(listError, err.message);
      } else {
        console.error(listUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [tokenId, activeAccount?.address]);

  // Refetch NFT details
  useEffect(() => {
    fetchNFTDetails();
  }, [refreshToken, fetchNFTDetails]);

  // Ensure tokenId exists, otherwise redirect
  useEffect(() => {
    if (params.tokenId == null) {
      router.push("/");
    }
  }, [params.tokenId, router]);

  if (loading || tokenId === undefined) {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={loaderChecking} />
      </main>
    );
  }

  if (error) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error ?? listMessage1}
          message2={listMessage2}
          message3={listMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      {nft && (
        <NFTForm
          dropContract={erc1155Launched}
          setRefreshToken={setRefreshToken}
          {...nft}
        />
      )}
    </main>
  );
};

export default NFTDetails;
