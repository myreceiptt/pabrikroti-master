// /src/components/fts/CoinsList.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaRotate } from "react-icons/fa6";
import { Chain, getContract } from "thirdweb";
import {
  canClaim,
  decimals,
  getActiveClaimCondition,
  // totalSupply,
} from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { CheckErc1155 } from "@/config/checker";
import { erc20ContractsLaunched } from "@/config/contractsOld";
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import CoinLister from "@/components/fts/CoinLister";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";
import Title from "@/components/sections/ReusableTitle";

const { receipt } = getActiveReceipt();

interface CoinData {
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
  adjustedPrice: number;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  adjustedSupply: number;
  adjustedMaxClaim: number;
  adjustedBalance: number;
}

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 3;

export default function CoinsList() {
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

  // Fetch any data
  const fetchCoinsList = useCallback(async () => {
    if (!activeAccount?.address) return;

    try {
      const results = await Promise.allSettled(
        erc20ContractsLaunched.map(async (erc20ContractLaunched) => {
          const erc20Contract = getContract({
            client: erc20ContractLaunched.client,
            address: erc20ContractLaunched.address,
            chain: erc20ContractLaunched.chain,
          });

          // Fetch coin decimals
          const coinDecimals = await decimals({ contract: erc20Contract });

          // Fetch coin supply
          // const coinSupply = await totalSupply({
          // contract: erc20Contract,
          // });

          // Adjust coin supply
          // const adjustedSupply = Number(coinSupply) / 10 ** coinDecimals;

          // Fetch claim condition
          const claimCondition = await getActiveClaimCondition({
            contract: erc20Contract,
          });

          if (!claimCondition || claimCondition.pricePerToken === undefined)
            return null;

          // Fetch coin supply based on claim condition
          const adjustedSupply =
            Number(claimCondition.supplyClaimed) / 10 ** coinDecimals;

          // Fetch and adjust max. claim
          const adjustedMaxClaim =
            Number(claimCondition.maxClaimableSupply) / 10 ** coinDecimals;

          // Fetch and adjust limit per wallet
          const adjustedPerWallet =
            Number(claimCondition.quantityLimitPerWallet) / 10 ** coinDecimals;

          // Fetch currency and decimals
          let currencyDecimals = 18;
          let balanceRaw = 0n;
          const nativeETH = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

          if (claimCondition.currency.toLowerCase() !== nativeETH) {
            const currencyContract = getContract({
              client: erc20ContractLaunched.client,
              address: claimCondition.currency,
              chain: erc20ContractLaunched.chain,
            });

            currencyDecimals = await decimals({ contract: currencyContract });

            // Fetch currency balance
            const balanceResult = await getWalletBalance({
              address: activeAccount?.address || "",
              chain: erc20ContractLaunched.chain,
              client: erc20ContractLaunched.client,
              tokenAddress: claimCondition.currency,
            });

            balanceRaw = balanceResult.value ?? 0n;
          } else {
            // Native currency balance
            const balanceResult = await getWalletBalance({
              address: activeAccount?.address || "",
              chain: erc20ContractLaunched.chain,
              client: erc20ContractLaunched.client,
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
              quantity: adjustedPerWallet.toString(),
              claimer: activeAccount?.address || "",
            });

            isClaimable = claimStatus.result;
            reason = claimStatus.reason ?? null;
          } catch (innerErr) {
            // Continue if check failed
            isClaimable = false;
            reason = receipt.nftsFailReason;
            console.warn(
              `${receipt.coinsConsoleWarn} ${erc20ContractLaunched.address}`,
              innerErr
            );
          }

          return {
            coinAddress: erc20ContractLaunched.address,
            coinChain: erc20ContractLaunched.chain,
            coinName: erc20ContractLaunched.name,
            adjustedPrice,
            startTimestamp: claimCondition.startTimestamp,
            isClaimable,
            reason,
            adjustedSupply,
            adjustedMaxClaim,
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
  }, [activeAccount?.address]);

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

  // Placeholder loader
  if (isLoading) {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={receipt.loaderChecking} />
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
        {coinListToShow.slice(0, visibleCount).map((coin, index) => (
          <motion.div
            key={coin.coinAddress}
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
              color: receipt.colorPrimary,
              background: receipt.colorSecondary,
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
            color: receipt.colorPrimary,
            background: receipt.colorSecondary,
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
              color: receipt.colorPrimary,
              background: receipt.colorSecondary,
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
