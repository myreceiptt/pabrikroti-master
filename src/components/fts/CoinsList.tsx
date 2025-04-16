// /src/components/fts/CoinsList.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaRotate } from "react-icons/fa6";
import { getContract } from "thirdweb";
import {
  canClaim,
  decimals,
  getClaimConditionById,
} from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { erc20ContractsLaunched } from "@/config/contracts";
import {
  listTitle1Paid,
  listTitle2Paid,
  loaderChecking,
  listMessage1,
  listMessage2,
  listMessage3,
  colorPrimary,
  colorSecondary,
  listPrevious,
  listNext,
} from "@/config/myreceipt";

// Components libraries
import CoinLister from "@/components/fts/CoinLister";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";
import Title from "@/components/sections/ReusableTitle";

type CoinData = {
  tokenAddress: string;
  symbol: string;
  name: string;
  icon: string;
  price: bigint;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  balanceRaw: bigint;
  adjustedBalance: number;
};

const INITIAL_ITEMS = 6;
const ITEMS_PER_LOAD = 3;

const CoinsList: React.FC = () => {
  const activeAccount = useActiveAccount();
  const listRef = useRef<HTMLDivElement>(null);

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const [coinDataList, setCoinDataList] = useState<CoinData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch claim condition for any data
  const fetchAll = useCallback(async () => {
    if (!activeAccount?.address) return;

    try {
      const results = await Promise.allSettled(
        erc20ContractsLaunched.map(async (erc20ContractLaunched) => {
          const erc20Contract = getContract({
            client: erc20ContractLaunched.client,
            address: erc20ContractLaunched.address,
            chain: erc20ContractLaunched.chain,
          });

          const claimCondition = await getClaimConditionById({
            contract: erc20Contract,
            conditionId: 0n,
          });

          // Fetch currency, price, and decimals
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

            // Fetch wallet balance
            const balanceResult = await getWalletBalance({
              address: activeAccount?.address || "",
              chain: erc20ContractLaunched.chain,
              client: erc20ContractLaunched.client,
              tokenAddress: claimCondition.currency,
            });

            balanceRaw = balanceResult.value ?? 0n;
          } else {
            // Native token balance
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

          let isClaimable = false;
          let reason: string | null = null;

          // Fetch can claim status
          try {
            const claimStatus = await canClaim({
              contract: erc20Contract,
              quantity: "1",
              claimer: activeAccount?.address || "",
            });

            isClaimable = claimStatus.result;
            reason = claimStatus.reason ?? null;
          } catch (e) {
            // Continue if check failed
            isClaimable = false;
            reason = "Eligibility check failed";
            console.warn("canClaim failed:", e);
          }

          return {
            tokenAddress: erc20ContractLaunched.address,
            symbol: erc20ContractLaunched.symbol,
            name: erc20ContractLaunched.name,
            icon: erc20ContractLaunched.icon,
            price: claimCondition.pricePerToken,
            adjustedPrice,
            currency: claimCondition.currency,
            startTimestamp: claimCondition.startTimestamp,
            isClaimable,
            reason,
            balanceRaw,
            adjustedBalance,
          };
        })
      );

      const coins: CoinData[] = [];

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          coins.push(result.value);
        }
      });

      setCoinDataList(coins);
      setError(null);
    } catch (err) {
      console.error("FetchAll Error:", err);
      setError("Gagal mengambil data token.");
    } finally {
      setIsLoading(false);
    }
  }, [activeAccount?.address]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

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
        <Loader message={loaderChecking} />
      </main>
    );
  }

  if (error || coinDataList.length === 0) {
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
      <Title title1={listTitle1Paid} title2={listTitle2Paid} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
        {coinDataList.slice(0, visibleCount).map((coin, index) => (
          <motion.div
            key={coin.tokenAddress}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <CoinLister refreshToken={refreshToken} {...coin} />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        {coinDataList.length > INITIAL_ITEMS && (
          <button
            onClick={handleUnload}
            disabled={visibleCount === INITIAL_ITEMS}
            style={{ color: colorPrimary, background: colorSecondary }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95 ${
              visibleCount === INITIAL_ITEMS ? "" : "cursor-pointer"
            }`}>
            {listPrevious}
          </button>
        )}
        <button
          disabled={isRefreshing}
          onClick={async () => {
            setIsRefreshing(true); // ⏳ mulai loading
            await fetchAll(); // 🔄 jalankan ulang semua fetch
            setRefreshToken(Date.now()); // 🔁 trigger CoinLister refresh
            setIsRefreshing(false); // ✅ selesai loading
          }}
          style={{ color: colorPrimary, background: colorSecondary }}
          className={`px-4 py-3 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95 ${
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
        {coinDataList.length > INITIAL_ITEMS && (
          <button
            onClick={handleLoadMore}
            disabled={visibleCount >= coinDataList.length}
            style={{ color: colorPrimary, background: colorSecondary }}
            className={`px-4 py-2 text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95 ${
              visibleCount >= coinDataList.length ? "" : "cursor-pointer"
            }`}>
            {listNext}
          </button>
        )}
      </div>
    </main>
  );
};

export default CoinsList;
