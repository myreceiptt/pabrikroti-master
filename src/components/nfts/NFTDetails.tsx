// /src/components/nfts/NFTDetails.tsx

"use client";

// External libraries
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Chain, getContract, readContract } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import {
  canClaim,
  getClaimConditionById,
  nextTokenIdToMint,
  totalSupply,
} from "thirdweb/extensions/erc1155";
import { decimals } from "thirdweb/extensions/erc20";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { download } from "thirdweb/storage";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { CheckErc20 } from "@/config/checker";
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import { SmartGIFImage } from "@/components/contents/SmartImage";
import NFTAccess from "@/components/nfts/NFTAccess";
import NFTForm from "@/components/nfts/NFTForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

interface NFTData {
  nftChain: Chain;
  nftId: bigint;
  nftIdString: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  perWallet: bigint;
  claimRemaining: bigint;
  supply: bigint;
  maxClaim: bigint;
  maxSupply: bigint;
  currency: string;
  adjustedPrice: number;
  adjustedBalance: number;
}

interface SnapshotEntry {
  address: string;
  maxClaimable?: string;
  price?: string;
  currency?: string;
}

function getNFTIdFromParams(params: ReturnType<typeof useParams>): bigint {
  const val = params.idNFT;
  return BigInt(Array.isArray(val) ? val[0] : (val ?? "0"));
}

export default function NFTDetails() {
  const { receipt, erc1155Launched } = getActiveReceipt();
  const activeAccount = useActiveAccount();
  const params = useParams();
  const router = useRouter();
  const nftId = getNFTIdFromParams(params);

  // Ensure state variables are properly declared
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
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
      // Fetch claim condition
      const claimCondition = await getClaimConditionById({
        contract: erc1155Launched,
        tokenId: nftId,
        conditionId: 0n,
      });

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

      // Fetch limit per wallet
      let perWallet = claimCondition.quantityLimitPerWallet;

      // Fetch currency and decimals
      const nativeETH = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
      let currencyDecimals = 18;
      let balanceRaw = 0n;

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

      // Adjust currency balance
      const adjustedBalance = Number(balanceRaw) / 10 ** currencyDecimals;

      // Fetch and adjust price
      let adjustedPrice =
        Number(claimCondition.pricePerToken) / 10 ** currencyDecimals;

      // Fetch NFT contract metadata
      const contractMetaData = await getContractMetadata({
        contract: erc1155Launched,
      });

      // Merkle root map from nft contract metadata
      const merkleMap = contractMetaData?.merkle as
        | Record<string, string>
        | undefined;

      // Fetch override price and per wallet
      const currentMerkleRoot = claimCondition.merkleRoot?.toLowerCase();
      const snapshotUri = merkleMap?.[currentMerkleRoot ?? ""];

      if (snapshotUri && activeAccount?.address) {
        try {
          const merkleMetadataRes = await download({
            client: erc1155Launched.client,
            uri: snapshotUri,
          });

          const merkleMetadata = await merkleMetadataRes.json();

          const originalEntriesUri = merkleMetadata.originalEntriesUri;

          if (originalEntriesUri) {
            const entriesRes = await download({
              client: erc1155Launched.client,
              uri: originalEntriesUri,
            });

            const entries: SnapshotEntry[] = await entriesRes.json();

            const entry = entries.find(
              (e) =>
                e.address?.toLowerCase() ===
                activeAccount.address.toLowerCase(),
            );

            if (entry?.maxClaimable) {
              const parsedPerWallet = parseFloat(entry.maxClaimable);
              if (!isNaN(parsedPerWallet)) {
                perWallet = BigInt(parsedPerWallet);
              }
            }

            if (entry?.price) {
              const parsedPrice = parseFloat(entry.price);
              if (!isNaN(parsedPrice)) {
                adjustedPrice = parsedPrice;
              }
            }
          }
        } catch (e) {
          console.warn(receipt.fetchAllowList, e);
        }
      }

      // Fetch supply claimed by wallet
      const claimedRaw = await readContract({
        contract: erc1155Launched,
        method:
          "function getSupplyClaimedByWallet(uint256 _tokenId, uint256 _conditionId, address _claimer) view returns (uint256 supplyClaimedByWallet)",
        params: [nftId, 0n, activeAccount.address],
      });

      // Calculate claim remaining
      const claimRemaining: bigint = perWallet - (claimedRaw ?? 0n);

      // Fetch total supply
      const nftSupply = await totalSupply({
        contract: erc1155Launched,
        id: nftId,
      });

      // Fetch claimed supply based on claim condition
      const nftClaimed = claimCondition.supplyClaimed;

      // Fetch max. claim supply based on claim condition
      const nftMaxClaim = claimCondition.maxClaimableSupply;

      // Calculate max. supply
      const nftMaxSupply = nftMaxClaim + (nftSupply - nftClaimed);

      setNFT({
        nftChain: erc1155Launched.chain,
        nftId,
        nftIdString: nftId.toString(),
        startTimestamp: claimCondition.startTimestamp,
        isClaimable,
        reason,
        perWallet,
        claimRemaining,
        supply: nftSupply,
        maxClaim: nftMaxClaim,
        maxSupply: nftMaxSupply,
        currency: claimCondition.currency,
        adjustedPrice,
        adjustedBalance,
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
    receipt.fetchAllowList,
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
      <main className="grid gap-4 lg:gap-7 place-items-center">
        <Loader message={receipt.loaderChecking} />

        {/* Bottom Section - Background Image */}
        <div className="bottom-0 left-0 w-full h-full mt-4 md:mt-8 lg:mt-12">
          <SmartGIFImage
            src={receipt.coinAccessBanner}
            alt={receipt.proTitle}
            width={4096}
            height={1109}
            className="rounded-xl md:rounded-2xl lg:rounded-3xl"
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
      <main className="grid gap-4 lg:gap-7 place-items-center">
        <Loader message={receipt.contentFallLoader} />

        <Message
          message1={error}
          message2={receipt.nftMessage2}
          message3={receipt.nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 lg:gap-7 place-items-center">
      {activeAccount?.address && (
        <CheckErc20
          key={refreshToken}
          activeAddress={activeAccount.address}
          onAccessChange={setHasAccess}
          shouldCheck={receipt.nftsFTGated}
        />
      )}
      {hasAccess === null && (
        <>
          <Loader message={receipt.loaderChecking} />

          {/* Bottom Section - Background Image */}
          <div className="bottom-0 left-0 w-full h-full mt-4 md:mt-8 lg:mt-12">
            <SmartGIFImage
              src={receipt.nftAccessBanner}
              alt={receipt.proTitle}
              width={4096}
              height={1109}
              className="rounded-xl md:rounded-2xl lg:rounded-3xl"
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
        </>
      )}
      {hasAccess === false && (
        <NFTAccess
          onRedirect={() => router.push(receipt.nftAccessRedirect)}
          message={receipt.coinAccessTitle}
        />
      )}
      {hasAccess === true && nft && (
        <NFTForm
          hasAccess={hasAccess}
          dropContract={erc1155Launched}
          {...nft}
          setRefreshToken={setRefreshToken}
        />
      )}
    </main>
  );
}
