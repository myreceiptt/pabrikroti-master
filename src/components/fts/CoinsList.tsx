// /src/components/fts/CoinsList.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaRotate } from "react-icons/fa6";
import { Chain, getContract } from "thirdweb";
import {
  canClaim,
  decimals,
  getActiveClaimCondition,
  totalSupply,
} from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { CheckErc1155 } from "@/config/checker";
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import CoinLister from "@/components/fts/CoinLister";
import DropDownSorter from "@/components/sections/DropDownSorter";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";
import Title from "@/components/sections/ReusableTitle";

interface CoinData {
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
  adjustedPrice: number;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  adjustedSupply: number;
  adjustedMaxSupply: number;
  adjustedBalance: number;
}

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 3;

export default function CoinsList() {
  const { receipt, erc20sLaunched } = getActiveReceipt();

  const activeAccount = useActiveAccount();
  const listRef = useRef<HTMLDivElement>(null);

  // Ensure state variables are properly declared
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const [coinListToShow, setCoinListToShow] = useState<CoinData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<
    "default" | "availability" | "start" | "price" | "claimable"
  >("default");

  // Fetch any data
  const fetchCoinsList = useCallback(async () => {
    if (!activeAccount?.address) return;

    try {
      const results = await Promise.allSettled(
        erc20sLaunched.map(async (erc20sLaunched) => {
          const erc20Contract = getContract({
            client: erc20sLaunched.client,
            address: erc20sLaunched.address,
            chain: erc20sLaunched.chain,
          });

          // Fetch coin decimals
          const coinDecimals = await decimals({ contract: erc20Contract });

          // Fetch coin current supply
          const coinTotalSupply = await totalSupply({
            contract: erc20Contract,
          });

          // Adjust coin current supply
          const adjustedSupply = Number(coinTotalSupply) / 10 ** coinDecimals;

          // Fetch claim condition
          const claimCondition = await getActiveClaimCondition({
            contract: erc20Contract,
          });

          if (!claimCondition || claimCondition.pricePerToken === undefined)
            return null;

          // Fetch coin supply based on claim condition
          const adjustedClaimed =
            Number(claimCondition.supplyClaimed) / 10 ** coinDecimals;

          // Fetch and adjust max. claim
          const adjustedMaxClaim =
            Number(claimCondition.maxClaimableSupply) / 10 ** coinDecimals;

          // Fetch and adjust max. supply
          const adjustedMaxSupply =
            adjustedMaxClaim + (adjustedSupply - adjustedClaimed);

          // Fetch currency and decimals
          let currencyDecimals = 18;
          let balanceRaw = 0n;
          const nativeCurrency = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

          if (claimCondition.currency.toLowerCase() !== nativeCurrency) {
            const currencyContract = getContract({
              client: erc20sLaunched.client,
              address: claimCondition.currency,
              chain: erc20sLaunched.chain,
            });

            currencyDecimals = await decimals({ contract: currencyContract });

            // Fetch currency balance
            const balanceResult = await getWalletBalance({
              address: activeAccount?.address || "",
              chain: erc20sLaunched.chain,
              client: erc20sLaunched.client,
              tokenAddress: claimCondition.currency,
            });

            balanceRaw = balanceResult.value ?? 0n;
          } else {
            // Native currency balance
            const balanceResult = await getWalletBalance({
              address: activeAccount?.address || "",
              chain: erc20sLaunched.chain,
              client: erc20sLaunched.client,
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
              contract: erc20Contract,
              quantity: "1",
              claimer: activeAccount?.address || "",
            });

            isClaimable = claimStatus.result;
            reason = claimStatus.reason ?? null;
          } catch (innerErr) {
            // Continue if check failed
            isClaimable = false;
            reason = receipt.nftsFailReason;
            console.warn(
              `${receipt.coinsConsoleWarn} ${erc20sLaunched.address}`,
              innerErr
            );
          }

          return {
            coinAddress: erc20sLaunched.address,
            coinChain: erc20sLaunched.chain,
            coinName: erc20sLaunched.name,
            adjustedPrice,
            startTimestamp: claimCondition.startTimestamp,
            isClaimable,
            reason,
            adjustedSupply,
            adjustedMaxSupply,
            adjustedBalance,
          };
        })
      );

      const coins: CoinData[] = [];

      results.forEach((result) => {
        if (result.status === "fulfilled" && result.value !== null) {
          coins.push(result.value);
        }
      });

      setCoinListToShow(coins);
      setError(null);
    } catch (err: unknown) {
      setError(receipt.coinsSetError);
      if (err instanceof Error) {
        console.error(receipt.nftsError, err.message);
      } else {
        console.error(receipt.nftsUknownError, err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [
    activeAccount?.address,
    erc20sLaunched,
    receipt.coinsConsoleWarn,
    receipt.coinsSetError,
    receipt.nftsError,
    receipt.nftsFailReason,
    receipt.nftsUknownError,
  ]);

  // Refetch coin details
  useEffect(() => {
    fetchCoinsList();
  }, [fetchCoinsList]);

  // Scrolls smoothly when new FTs are loaded
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount]);

  // Load more FTs
  const handleLoadMore = () => setVisibleCount((prev) => prev + ITEMS_PER_LOAD);

  // Unload some FTs
  const handleUnload = () =>
    setVisibleCount((prev) => Math.max(prev - ITEMS_PER_LOAD, INITIAL_ITEMS));

  // Set the sorting logic
  const sortedFTs = [...coinListToShow].sort((a, b) => {
    switch (sortOption) {
      case "availability":
        return (
          Number(b.adjustedMaxSupply - b.adjustedSupply) -
          Number(a.adjustedMaxSupply - a.adjustedSupply)
        );
      case "start":
        return Number(a.startTimestamp) - Number(b.startTimestamp);
      case "price":
        return a.adjustedPrice - b.adjustedPrice;
      case "claimable":
        return (b.isClaimable ? 1 : 0) - (a.isClaimable ? 1 : 0);
      default:
        return Number(a.coinChain) - Number(b.coinChain);
    }
  });

  // Placeholder loader
  if (isLoading) {
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

  // Fallback message for no coinListToShow
  if (error || coinListToShow.length === 0) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error ?? receipt.coinsMessage1}
          message2={receipt.coinsMessage2}
          message3={receipt.nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      {activeAccount?.address && (
        <CheckErc1155
          key={refreshToken}
          activeAddress={activeAccount.address}
          onAccessChange={setHasAccess}
        />
      )}

      <Title title1={receipt.coinsTitle1} title2={receipt.coinsTitle2} />

      <DropDownSorter sortOption={sortOption} setSortOption={setSortOption} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
        {sortedFTs.slice(0, visibleCount).map((coin, index) => (
          <motion.div
            key={`${coin.coinAddress}_${coin.coinChain.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <CoinLister
              hasAccess={hasAccess}
              refreshToken={refreshToken}
              {...coin}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        {coinListToShow.length > INITIAL_ITEMS && (
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
          aria-label={receipt.coinsAria}
          disabled={isRefreshing}
          onClick={async () => {
            setIsRefreshing(true); // ⏳ mulai loading
            await fetchCoinsList(); // 🔄 jalankan ulang semua fetch
            setRefreshToken(Date.now()); // 🔁 trigger CoinLister refresh
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
        {coinListToShow.length > INITIAL_ITEMS && (
          <button
            aria-label={receipt.searchAria3}
            onClick={handleLoadMore}
            disabled={visibleCount >= coinListToShow.length}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorTertiary,
            }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              visibleCount >= coinListToShow.length ? "" : "cursor-pointer"
            }`}>
            {receipt.nftsNext}
          </button>
        )}
      </div>
    </main>
  );
}
