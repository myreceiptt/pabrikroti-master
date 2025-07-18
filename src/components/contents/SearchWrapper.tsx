// /src/components/SearchWrapper.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { getContract } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import {
  canClaim,
  getClaimConditionById,
  totalSupply,
} from "thirdweb/extensions/erc1155";
import { getNFTs, nextTokenIdToMint } from "thirdweb/extensions/erc1155";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { download } from "thirdweb/storage";

// Components libraries
import NFTLister from "@/components/nfts/NFTLister";
import DropDownSorter from "@/components/sections/DropDownSorter";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";
import Title from "@/components/sections/ReusableTitle";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { decimals } from "thirdweb/extensions/erc20";
import { getWalletBalance } from "thirdweb/wallets";

// Interface definition for NFTs
interface NFTData {
  nftId: bigint;
  nftIdString: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxClaim: bigint;
  maxSupply: bigint;
  adjustedPrice: number;
  adjustedBalance: number;
}

interface SnapshotEntry {
  address: string;
  maxClaimable?: string;
  price?: string;
  currency?: string;
}

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 3;

export default function SearchWrapper() {
  const { receipt, erc1155Launched } = getActiveReceipt();
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const activeAccount = useActiveAccount();
  const listRef = useRef<HTMLDivElement>(null);

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const [searchResults, setSearchResults] = useState<NFTData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<
    "default" | "availability" | "start" | "price" | "claimable"
  >("default");

  // Fetch next token ID to mint
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  // Fetch any data
  const fetchSearchNFTs = useCallback(async () => {
    if (nextNFTId == null || !activeAccount?.address) return;

    try {
      // Fetch all NFT metadata
      const nfts = await getNFTs({
        contract: erc1155Launched,
        start: 0,
        count: Number(nextNFTId),
      });

      // Filter metadata using search terms
      const matchedIds = nfts
        .filter((nft) => {
          const tokenIdMatch = nft.id.toString().includes(query);
          const nameMatch = nft.metadata?.name?.toLowerCase().includes(query);
          const descMatch = nft.metadata?.description
            ?.toLowerCase()
            .includes(query);
          return tokenIdMatch || nameMatch || descMatch;
        })
        .map((nft) => BigInt(nft.id.toString()));

      const results = await Promise.allSettled(
        matchedIds.map(async (nftId) => {
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
              claimer: activeAccount?.address || "",
            });

            isClaimable = claimStatus.result;
            reason = claimStatus.reason ?? null;
          } catch (innerErr) {
            // Continue if check failed
            isClaimable = false;
            reason = receipt.nftsFailReason;
            console.warn(`${receipt.nftsConsoleWarn} ${nftId}`, innerErr);
          }

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

          // Fetch currency and decimals
          const nativeCurrency = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
          let currencyDecimals = 18;
          let balanceRaw = 0n;

          if (claimCondition.currency.toLowerCase() !== nativeCurrency) {
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
              address: activeAccount?.address || "",
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

          // Fetch override price
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
                    activeAccount.address.toLowerCase()
                );

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

          return {
            nftId,
            nftIdString: nftId.toString(),
            startTimestamp: claimCondition.startTimestamp,
            isClaimable,
            reason,
            supply: nftSupply,
            maxClaim: nftMaxClaim,
            maxSupply: nftMaxSupply,
            adjustedPrice,
            adjustedBalance,
          };
        })
      );

      const fulfilled = results
        .filter(
          (r): r is PromiseFulfilledResult<NFTData> => r.status === "fulfilled"
        )
        .map((r) => r.value);

      setSearchResults(fulfilled);
      setError(null);
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
    query,
    nextNFTId,
    activeAccount?.address,
    erc1155Launched,
    receipt.fetchAllowList,
    receipt.nftsConsoleWarn,
    receipt.nftsError,
    receipt.nftsFailReason,
    receipt.nftsSetError,
    receipt.nftsUknownError,
  ]);

  // Refetch NFT details
  useEffect(() => {
    fetchSearchNFTs();
  }, [fetchSearchNFTs]);

  // Scrolls smoothly when new NFTs are loaded
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount]);

  // Reset pagination for sortOption changes
  useEffect(() => {
    setVisibleCount(INITIAL_ITEMS);
  }, [sortOption]);

  // Load more NFTs
  const handleLoadMore = () => setVisibleCount((prev) => prev + ITEMS_PER_LOAD);

  // Unload some NFTs
  const handleUnload = () =>
    setVisibleCount((prev) => Math.max(prev - ITEMS_PER_LOAD, INITIAL_ITEMS));

  // Set the sorting logic
  const sortedNFTs = [...searchResults].sort((a, b) => {
    switch (sortOption) {
      case "availability":
        return Number(b.maxSupply - b.supply) - Number(a.maxSupply - a.supply);
      case "start":
        return Number(a.startTimestamp) - Number(b.startTimestamp);
      case "price":
        return a.adjustedPrice - b.adjustedPrice;
      case "claimable":
        return (b.isClaimable ? 1 : 0) - (a.isClaimable ? 1 : 0);
      default:
        return Number(a.nftId) - Number(b.nftId);
    }
  });

  // Placeholder loader
  if (loading || nextNFTId === undefined) {
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
            className="rounded-xl md:rounded-2xl lg:rounded-3xl"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>
      </main>
    );
  }

  // Fallback message for no nftListToShow
  if (error || searchResults.length === 0) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error ?? receipt.searchMessage1}
          message2={receipt.searchMessage2}
          message3={receipt.nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 lg:gap-6 place-items-center">
      <Title title1={receipt.searchTitle} title2={query} />

      <DropDownSorter sortOption={sortOption} setSortOption={setSortOption} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
        {sortedNFTs.slice(0, visibleCount).map((nft, index) => (
          <motion.div
            key={nft.nftIdString}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <NFTLister
              dropContract={erc1155Launched}
              {...nft}
              refreshToken={refreshToken}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        {searchResults.length > INITIAL_ITEMS && (
          <button
            aria-label={receipt.searchAria1}
            onClick={handleUnload}
            disabled={visibleCount === INITIAL_ITEMS}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorSekunder,
            }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount === INITIAL_ITEMS ? "" : "cursor-pointer"
            }`}>
            {receipt.nftsPrevious}
          </button>
        )}
        <button
          aria-label={receipt.searchAria2}
          disabled={isRefreshing}
          onClick={async () => {
            setIsRefreshing(true); // ⏳ mulai loading
            await fetchSearchNFTs(); // 🔄 jalankan ulang semua fetch
            setRefreshToken(Date.now()); // 🔁 trigger NFTLister refresh
            setIsRefreshing(false); // ✅ selesai loading
          }}
          style={{
            color: receipt.colorSecondary,
            background: receipt.colorSekunder,
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
        {searchResults.length > INITIAL_ITEMS && (
          <button
            aria-label={receipt.searchAria3}
            onClick={handleLoadMore}
            disabled={visibleCount >= searchResults.length}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorSekunder,
            }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount >= searchResults.length ? "" : "cursor-pointer"
            }`}>
            {receipt.nftsNext}
          </button>
        )}
      </div>
    </main>
  );
}
