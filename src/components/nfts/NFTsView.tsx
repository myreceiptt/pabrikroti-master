// /src/components/nfts/NFTsView.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { getContract } from "thirdweb";
import {
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
import NFTViewer from "@/components/nfts/NFTViewer";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

interface NFTData {
  nftId: bigint;
  nftIdString: string;
  adjustedPrice: number;
  supply: bigint;
  maxSupply: bigint;
  buttonLabel: string;
  buttonDisabled: boolean;
}

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 3;

export default function NFTsView() {
  const { receipt, erc1155Launched } = getActiveReceipt();
  const activeAccount = useActiveAccount();
  const listRef = useRef<HTMLDivElement>(null);

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const [paidNFTs, setPaidNFTs] = useState<NFTData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch next token ID to mint
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  // Fetch any data
  const fetchNFTsView = useCallback(async () => {
    if (nextNFTId == null) return;

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

          // Fetch claimed supply based on claim condition
          const nftClaimed = claimCondition.supplyClaimed;

          // Fetch max. claim supply based on claim condition
          const nftMaxClaim = claimCondition.maxClaimableSupply;

          // Fetch max. supply
          const nftMaxSupply = nftMaxClaim + (nftSupply - nftClaimed);

          // Fetch currency and decimals
          let currencyDecimals = 18;
          const nativeCurrency = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
          const addressToCheck =
            activeAccount?.address ??
            "0x0000000000000000000000000000000000000000";

          if (claimCondition.currency.toLowerCase() !== nativeCurrency) {
            const currencyContract = getContract({
              client: erc1155Launched.client,
              address: claimCondition.currency,
              chain: erc1155Launched.chain,
            });

            currencyDecimals = await decimals({ contract: currencyContract });

            // Native currency balance
            const balanceResult = await getWalletBalance({
              address: addressToCheck,
              chain: erc1155Launched.chain,
              client: erc1155Launched.client,
            });

            currencyDecimals = balanceResult.decimals ?? 18;
            // balanceRaw = balanceResult.value ?? 0n;
          }

          // Adjust price and balance
          const adjustedPrice =
            Number(claimCondition.pricePerToken) / 10 ** currencyDecimals;

          // Determine button logic di NFTsView.tsx
          let buttonLabel = receipt.nftButton;
          let buttonDisabled = false;

          if (!activeAccount?.address) {
            buttonLabel = "Please Log In";
            buttonDisabled = false;
          } else {
            buttonLabel = "Read More";
            buttonDisabled = false;
          }

          return {
            nftId,
            nftIdString: nftId.toString(),
            adjustedPrice,
            supply: nftSupply,
            maxSupply: nftMaxSupply,
            buttonLabel,
            buttonDisabled,
          };
        })
      );

      const paid: NFTData[] = [];

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          const nft = result.value;
          if (nft.adjustedPrice > 0) paid.push(nft);
        }
      });

      setPaidNFTs(paid);
    } catch (err: unknown) {
      setError(receipt.nftsSetError);
      if (err instanceof Error) {
        console.error(receipt.nftsError, err.message);
      } else {
        console.error(receipt.nftsUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [
    activeAccount?.address,
    erc1155Launched,
    nextNFTId,
    receipt.nftButton,
    receipt.nftsSetError,
    receipt.nftsError,
    receipt.nftsUknownError,
  ]);

  // Refetch NFT details
  useEffect(() => {
    fetchNFTsView();
  }, [fetchNFTsView]);

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
  const nftListToShow = paidNFTs;

  // Placeholder loader
  if (loading || nextNFTId === undefined) {
    return <Loader message={receipt.loaderChecking} />;
  }

  // Fallback message for no nftListToShow
  if (error || nftListToShow.length === 0) {
    return (
      <Message
        message1={error ?? receipt.nftsMessage1}
        message2={receipt.nftsMessage2}
        message3={receipt.nftsMessage3}
      />
    );
  }

  return (
    <>
      <h2
        id="what"
        style={{
          color: receipt.colorSecondary,
        }}
        className="text-3xl font-bold">
        Curated NFTs Artworks: Festival Mbok Sri 2025
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
        {nftListToShow.slice(0, visibleCount).map((nft, index) => (
          <motion.div
            key={nft.nftIdString}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <NFTViewer
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
            aria-label={receipt.searchAria1}
            onClick={handleUnload}
            disabled={visibleCount === INITIAL_ITEMS}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorTertiary,
            }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount === INITIAL_ITEMS ? "" : "cursor-pointer"
            }`}>
            {receipt.nftsPrevious}
          </button>
        )}
        <button
          aria-label={receipt.nftsAria}
          disabled={isRefreshing}
          onClick={async () => {
            setIsRefreshing(true); // ⏳ mulai loading
            await fetchNFTsView(); // 🔄 jalankan ulang semua fetch
            setRefreshToken(Date.now()); // 🔁 trigger NFTLister refresh
            setIsRefreshing(false); // ✅ selesai loading
          }}
          style={{
            color: receipt.colorSecondary,
            background: receipt.colorTertiary,
          }}
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
            aria-label={receipt.searchAria3}
            onClick={handleLoadMore}
            disabled={visibleCount >= nftListToShow.length}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorTertiary,
            }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount >= nftListToShow.length ? "" : "cursor-pointer"
            }`}>
            {receipt.nftsNext}
          </button>
        )}
      </div>
    </>
  );
}
