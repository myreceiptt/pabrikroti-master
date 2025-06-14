// /src/components/nfts/NFTDetails.tsx

"use client";

// External libraries
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Chain, getContract, readContract } from "thirdweb";
import {
  canClaim,
  getClaimConditionById,
  nextTokenIdToMint,
  totalSupply,
} from "thirdweb/extensions/erc1155";
import { decimals } from "thirdweb/extensions/erc20";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import NFTForm from "@/components/nfts/NFTForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

interface NFTData {
  nftChain: Chain;
  nftId: bigint;
  nftIdString: string;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxSupply: bigint;
  perWallet: bigint;
  adjustedBalance: number;
  claimRemaining: bigint;
}

function getNFTIdFromParams(params: ReturnType<typeof useParams>): bigint {
  const val = params.idNFT;
  return BigInt(Array.isArray(val) ? val[0] : val ?? "0");
}

export default function NFTDetails() {
  const { receipt, erc1155Launched } = getActiveReceipt();

  const activeAccount = useActiveAccount();
  const params = useParams();
  const router = useRouter();
  const nftId = getNFTIdFromParams(params);

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [nft, setNFT] = useState<NFTData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch next token ID to mint
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  // Fetch any data
  const fetchNFTDetails = useCallback(async () => {
    if (!activeAccount?.address) return;

    // Check nftId exist based on nextNFTId
    if (nextNFTId !== undefined && nftId >= nextNFTId) {
      setError(receipt.nftMessage1);
      setLoading(false);
      return;
    }

    try {
      // Fetch total supply
      const nftSupply = await totalSupply({
        contract: erc1155Launched,
        id: nftId,
      });

      // Fetch claim condition
      const claimCondition = await getClaimConditionById({
        contract: erc1155Launched,
        tokenId: nftId,
        conditionId: 0n,
      });

      // Fetch claimed supply based on claim condition
      const nftClaimed = claimCondition.supplyClaimed;

      // Fetch max. claim supply based on claim condition
      const nftMaxClaim = claimCondition.maxClaimableSupply;

      // Fetch max. supply
      const nftMaxSupply = nftMaxClaim + (nftSupply - nftClaimed);

      // Fetch supply claimed by wallet
      const claimedRaw = await readContract({
        contract: erc1155Launched,
        method:
          "function getSupplyClaimedByWallet(uint256 _tokenId, uint256 _conditionId, address _claimer) view returns (uint256 supplyClaimedByWallet)",
        params: [nftId, 0n, activeAccount.address],
      });

      // Calculate claim remaining
      const claimRemaining: bigint =
        claimCondition.quantityLimitPerWallet - (claimedRaw ?? 0n);

      // Fetch currency and decimals
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

        // Fetch currency balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc1155Launched.chain,
          client: erc1155Launched.client,
          tokenAddress: claimCondition.currency,
        });

        balanceRaw = balanceResult.value ?? 0n;
      } else {
        // Native currency balance
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

      // Fetch can claim status
      let isClaimable = false;
      let reason: string | null = null;

      try {
        const claimStatus = await canClaim({
          contract: erc1155Launched,
          tokenId: nftId,
          quantity: 1n,
          claimer: activeAccount.address,
        });

        isClaimable = claimStatus.result;
        reason = claimStatus.reason ?? null;
      } catch (innerErr) {
        // Continue if check failed
        isClaimable = false;
        reason = receipt.nftsFailReason;
        console.warn(`${receipt.nftsConsoleWarn} ${nftId}`, innerErr);
      }

      setNFT({
        nftChain: erc1155Launched.chain,
        nftId,
        nftIdString: nftId.toString(),
        adjustedPrice,
        currency: claimCondition.currency,
        startTimestamp: claimCondition.startTimestamp,
        isClaimable,
        reason,
        supply: nftSupply,
        maxSupply: nftMaxSupply,
        perWallet: claimCondition.quantityLimitPerWallet,
        adjustedBalance,
        claimRemaining,
      });
    } catch (err: unknown) {
      setError(receipt.nftSetError);
      if (err instanceof Error) {
        console.error(receipt.nftsError, err.message);
      } else {
        console.error(receipt.nftsUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [
    nextNFTId,
    nftId,
    activeAccount?.address,
    erc1155Launched,
    receipt.nftMessage1,
    receipt.nftSetError,
    receipt.nftsConsoleWarn,
    receipt.nftsError,
    receipt.nftsFailReason,
    receipt.nftsUknownError,
  ]);

  // Refetch NFT details
  useEffect(() => {
    if (nextNFTId !== undefined) {
      fetchNFTDetails();
    }
  }, [refreshToken, fetchNFTDetails, nextNFTId]);

  // Ensure tokenId exists, otherwise redirect
  useEffect(() => {
    if (params.idNFT == null) {
      router.push("/");
    }
  }, [params.idNFT, router]);

  // Placeholder loader
  if (loading) {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={receipt.loaderChecking} />

        {/* Bottom Section - Background Image */}
        <div className="bottom-0 left-0 w-full h-full mt-4 md:mt-8 lg:mt-12">
          <Image
            src={receipt.coinAccessBanner}
            alt={receipt.proTitle}
            width={4096}
            height={1109}
            className="rounded-3xl"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>
      </main>
    );
  }

  // Fallback message nftId not found
  if (error) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error}
          message2={receipt.nftMessage2}
          message3={receipt.nftsMessage3}
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
}
