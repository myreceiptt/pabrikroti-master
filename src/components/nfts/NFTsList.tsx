// /src/components/nfts/NFTsList.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { getContract } from "thirdweb";
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
import { erc1155Launched } from "@/config/contracts";
import {
  colorPrimary,
  colorSecondary,
  loaderChecking,
  nftsConsoleWarn,
  nftsError,
  nftsFailReason,
  nftsMessage1,
  nftsMessage2,
  nftsMessage3,
  nftsNext,
  nftsPrevious,
  nftsSetError,
  nftsTitle1Free,
  nftsTitle1Paid,
  nftsTitle2Free,
  nftsTitle2Paid,
  nftsUknownError,
} from "@/config/myreceipt";

// Components libraries
import NFTLister from "@/components/nfts/NFTLister";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";
import Title from "@/components/sections/ReusableTitle";

interface NFTsListProps {
  variant: "free" | "paid";
}

interface NFTData {
  nftId: bigint;
  nftIdString: string;
  adjustedPrice: number;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxClaim: bigint;
  adjustedBalance: number;
}

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 3;

export default function NFTsList({ variant }: NFTsListProps) {
  const activeAccount = useActiveAccount();
  const listRef = useRef<HTMLDivElement>(null);

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const [freeNFTs, setFreeNFTs] = useState<NFTData[]>([]);
  const [paidNFTs, setPaidNFTs] = useState<NFTData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const title1 = variant === "free" ? nftsTitle1Free : nftsTitle1Paid;
  const title2 = variant === "free" ? nftsTitle2Free : nftsTitle2Paid;

  // Fetch next token ID to mint
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  // Fetch any data
  const fetchNFTsList = useCallback(async () => {
    if (nextNFTId == null || !activeAccount?.address) return;

    try {
      const nftIds = Array.from({ length: Number(nextNFTId) }, (_, i) =>
        BigInt(i)
      );

      const results = await Promise.allSettled(
        nftIds.map(async (nftId) => {
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
              address: activeAccount?.address || "",
              chain: erc1155Launched.chain,
              client: erc1155Launched.client,
              tokenAddress: claimCondition.currency,
            });

            balanceRaw = balanceResult.value ?? 0n;
          } else {
            // Native currency balance
            const balanceResult = await getWalletBalance({
              address: activeAccount?.address || "",
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
              claimer: activeAccount?.address || "",
            });

            isClaimable = claimStatus.result;
            reason = claimStatus.reason ?? null;
          } catch (innerErr) {
            // Continue if check failed
            isClaimable = false;
            reason = nftsFailReason;
            console.warn(`${nftsConsoleWarn} ${nftId}`, innerErr);
          }

          return {
            nftId,
            nftIdString: nftId.toString(),
            adjustedPrice,
            startTimestamp: claimCondition.startTimestamp,
            isClaimable,
            reason,
            supply: nftSupply,
            maxClaim: claimCondition.maxClaimableSupply,
            adjustedBalance,
          };
        })
      );

      const free: NFTData[] = [];
      const paid: NFTData[] = [];

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          const nft = result.value;
          if (nft.adjustedPrice === 0) free.push(nft);
          else paid.push(nft);
        }
      });

      setFreeNFTs(free);
      setPaidNFTs(paid);
    } catch (err: unknown) {
      setError(nftsSetError);
      if (err instanceof Error) {
        console.error(nftsError, err.message);
      } else {
        console.error(nftsUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [nextNFTId, activeAccount?.address]);

  // Refetch NFT details
  useEffect(() => {
    fetchNFTsList();
  }, [fetchNFTsList]);

  // Scrolls smoothly when new NFTs are loaded
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount]);

  // Load more NFTs
  const handleLoadMore = () => setVisibleCount((prev) => prev + ITEMS_PER_LOAD);

  // Unload some NFTs
  const handleUnload = () =>
    setVisibleCount((prev) => Math.max(prev - ITEMS_PER_LOAD, INITIAL_ITEMS));

  // Set token IDs to show
  const nftListToShow = variant === "free" ? freeNFTs : paidNFTs;

  // Placeholder loader
  if (loading || nextNFTId === undefined) {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={loaderChecking} />
      </main>
    );
  }

  // Fallback message for no nftListToShow
  if (error || nftListToShow.length === 0) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error ?? nftsMessage1}
          message2={nftsMessage2}
          message3={nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <Title title1={title1} title2={title2} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
        {nftListToShow.slice(0, visibleCount).map((nft, index) => (
          <motion.div
            key={nft.nftIdString}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <NFTLister
              dropContract={erc1155Launched}
              refreshToken={refreshToken}
              {...nft}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        {nftListToShow.length > INITIAL_ITEMS && (
          <button
            onClick={handleUnload}
            disabled={visibleCount === INITIAL_ITEMS}
            style={{ color: colorPrimary, background: colorSecondary }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount === INITIAL_ITEMS ? "" : "cursor-pointer"
            }`}>
            {nftsPrevious}
          </button>
        )}
        <button
          disabled={isRefreshing}
          onClick={async () => {
            setIsRefreshing(true); // ⏳ mulai loading
            await fetchNFTsList(); // 🔄 jalankan ulang semua fetch
            setRefreshToken(Date.now()); // 🔁 trigger NFTLister refresh
            setIsRefreshing(false); // ✅ selesai loading
          }}
          style={{ color: colorPrimary, background: colorSecondary }}
          className={`px-4 py-3 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
            !isRefreshing ? "cursor-pointer" : ""
          }`}>
          <motion.div
            animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              repeat: isRefreshing ? Infinity : 0,
              duration: 0.74,
              ease: "linear",
            }}>
            <FaRotate />
          </motion.div>
        </button>
        {nftListToShow.length > INITIAL_ITEMS && (
          <button
            onClick={handleLoadMore}
            disabled={visibleCount >= nftListToShow.length}
            style={{ color: colorPrimary, background: colorSecondary }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount >= nftListToShow.length ? "" : "cursor-pointer"
            }`}>
            {nftsNext}
          </button>
        )}
      </div>
    </main>
  );
}
