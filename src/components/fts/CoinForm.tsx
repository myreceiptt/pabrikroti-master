// /src/components/fts/CoinForm.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { Chain } from "thirdweb";
import { ClaimButton, MediaRenderer } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import {
  baseMainnet,
  baseSepolia,
  chainNames,
  monadTestnet,
  opMainnet,
  shapeNetwork,
} from "@/config/rantais";
import { useCurrencyMap } from "@/config/contracts";
import { getActiveReceipt } from "@/config/receipts";
import { getCountdownString } from "@/config/utils";

// Components libraries
import CoinDescription from "@/components/fts/CoinDescription";
import CoinPopUp from "@/components/fts/CoinPopUp";
import Loader from "@/components/sections/ReusableLoader";

interface CoinFormProps {
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
  coinSymbol: string;
  coinDescription: string;
  coinImage: string;
  coinBy: string;
  coinLink: string;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  adjustedBalance: number;
  adjustedCoinOwned: number;
  adjustedSupply: number;
  adjustedMaxSupply: number;
  adjustedPerWallet: number;
  claimRemaining: number;
  hasAccess: boolean | null;
  setRefreshToken: (val: number) => void;
}

export default function CoinForm({
  coinAddress,
  coinChain,
  coinName,
  coinSymbol,
  coinDescription,
  coinImage,
  coinBy,
  coinLink,
  adjustedPrice,
  currency,
  startTimestamp,
  isClaimable,
  reason,
  adjustedBalance,
  adjustedCoinOwned,
  adjustedSupply,
  adjustedMaxSupply,
  adjustedPerWallet,
  claimRemaining,
  hasAccess,
  setRefreshToken,
}: CoinFormProps) {
  const { receipt } = getActiveReceipt();

  const startTime = new Date(Number(startTimestamp) * 1000);
  const chainName = chainNames[coinChain.id] ?? "Unknown Chain";
  const currencyMap = useCurrencyMap();

  // Ensure state variables are properly declared
  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [claimQuantity, setClaimQuantity] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Determine button status
  let buttonLabel = receipt.coinButton;
  let buttonDisabled = false;

  // Belum punya akses
  if (hasAccess === null || hasAccess === false) {
    buttonLabel = receipt.coinNoAccess;
    buttonDisabled = true;
  } else {
    if (currentTime < startTime) {
      // Belum waktunya
      buttonLabel = `${receipt.nftSoon} ${getCountdownString(
        startTime,
        currentTime
      )}`;
      buttonDisabled = true;
    } else if (adjustedBalance < adjustedPrice) {
      // Tidak cukup saldo
      buttonLabel = receipt.nftInsufficient;
      buttonDisabled = true;
    } else if (!isClaimable) {
      // Tidak bisa diklaim karena alasan lain
      const safeReason = (reason ?? "").toLowerCase();
      if (safeReason.includes("dropclaimexceedlimit")) {
        buttonLabel = receipt.coinClaimed;
      } else if (safeReason.includes("dropclaimexceedmaxsupply")) {
        buttonLabel = receipt.nftClosed;
      } else {
        buttonLabel = receipt.nftClosed;
      }
      buttonDisabled = true;
    }
  }

  // Determine the currency symbol
  const nativeCurrency = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
  const isNative = currency.toLowerCase() === nativeCurrency;
  let tokenCurrency;
  if (isNative) {
    if (
      coinChain === baseMainnet ||
      coinChain === baseSepolia ||
      coinChain === opMainnet ||
      coinChain === shapeNetwork
    ) {
      tokenCurrency = {
        symbol: "ETH",
        name: "Ether",
        icon: "/erc20-icons/eth.png",
      };
    } else if (coinChain === monadTestnet) {
      tokenCurrency = {
        symbol: "MON",
        name: "Monad",
        icon: "/erc20-icons/mon.png",
      };
    } else {
      tokenCurrency = {
        symbol: "TOKEN",
        name: "Unknown FT",
        icon: "/erc20-icons/nota.png",
      };
    }
  } else {
    tokenCurrency = currencyMap[currency.toLowerCase()] || {
      symbol: "TOKEN",
      name: "Unknown FT",
      icon: "/erc20-icons/nota.png",
    };
  }

  // Format the price
  const formattedPrice = `${adjustedPrice.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  })} ${tokenCurrency.symbol.toUpperCase()}`;

  // Format the supply, max. claim, owned, and per wallet
  function formatNumberCompact(value: number): string {
    const round = (val: number) =>
      val % 1 === 0 ? val.toFixed(0) : val.toFixed(2);

    if (value >= 1_000_000_000) {
      return `${round(value / 1_000_000_000)}B`;
    } else if (value >= 1_000_000) {
      return `${round(value / 1_000_000)}M`;
    } else if (value >= 1_000) {
      return `${round(value / 1_000)}K`;
    } else {
      return value.toString();
    }
  }

  return (
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* TokenIcon (Left Column) */}
      <div
        onClick={() => setIsOpen(true)}
        className="rounded-3xl overflow-hidden w-full">
        <MediaRenderer
          client={client}
          src={coinImage ?? receipt.coinListerImage}
          alt={coinName ?? receipt.coinListerName}
          className="rounded-2xl w-full cursor-pointer"
        />
      </div>

      {/* Pop-up Modal */}
      <CoinPopUp isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Right Column */}
      <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
        <div className="w-full flex flex-row gap-2 items-start justify-between">
          {/* Title */}
          <h1
            style={{ color: receipt.colorSecondary }}
            className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {coinName}
          </h1>
        </div>

        <div className="flex flex-row gap-2">
          <h1
            style={{ color: receipt.colorSekunder }}
            className="text-left text-sm font-medium">
            {receipt.nftFormBy}
          </h1>
          <span
            style={{ color: receipt.colorSekunder }}
            className="text-3xl leading-6">
            &#9673;
          </span>
          <h1
            style={{ color: receipt.colorSekunder }}
            className="text-left text-sm font-medium">
            <Link href={coinLink} target="_blank">
              {coinBy}
            </Link>
          </h1>
        </div>

        {/* Description with Expand/Collapse */}
        <CoinDescription description={coinDescription} address={coinAddress} />

        {/* Success or Error Messages */}
        {pesanTunggu && <Loader message={pesanTunggu} />}
        {pesanKirim && <Loader message={pesanKirim} />}
        {pesanSukses && <Loader message={pesanSukses} />}
        {pesanGagal && <Loader message={pesanGagal} />}

        {/* FT Info */}
        <div className="w-full grid grid-cols-8">
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.nftFormPrice}
          </h2>
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.coinFormOwned}
          </h2>
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-2 text-left text-xs font-medium">
            {receipt.nftFormRefresh}
          </h2>

          <h2
            style={{ color: receipt.colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {formattedPrice}
          </h2>
          <h2
            style={{ color: receipt.colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {adjustedCoinOwned} {coinSymbol.toUpperCase()}
          </h2>
          <button
            disabled={isRefreshing}
            onClick={async () => {
              setIsRefreshing(true); // ⏳ mulai loading
              setRefreshToken(Date.now()); // 🔁 trigger CoinDetails refresh
              await new Promise((resolve) => setTimeout(resolve, 747)); // ⏳ beri waktu animasi jalan
              setIsRefreshing(false); // ✅ selesai loading
            }}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorTertiary,
            }}
            className={`col-span-2 aspect-auto rounded-lg mt-1 disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              !isRefreshing ? "cursor-pointer" : ""
            } flex items-center justify-center`}>
            <motion.div
              animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
              transition={{
                repeat: isRefreshing ? Infinity : 0,
                duration: 0.74,
                ease: "linear",
              }}>
              <FaRotate className="text-base lg:lg font-semibold " />
            </motion.div>
          </button>
        </div>

        <div className="w-full grid grid-cols-8">
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.coinFormSupply}
          </h2>
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.coinFormOnChain}
          </h2>
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-2 text-left text-xs font-medium">
            {receipt.nftFormAmount}
          </h2>

          <h2
            style={{ color: receipt.colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            <span
              title={`${adjustedSupply} ${receipt.coinListerOf} ${adjustedMaxSupply}`}>
              {formatNumberCompact(adjustedSupply)}/
              {formatNumberCompact(adjustedMaxSupply)}
            </span>
          </h2>
          <h2
            style={{ color: receipt.colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {chainName}
          </h2>
          <input
            type="number"
            min={1}
            max={Math.floor(claimRemaining)}
            value={buttonDisabled ? 0 : claimQuantity}
            readOnly={buttonDisabled}
            onChange={(e) => {
              const val = Math.floor(Number(e.target.value));
              if (
                !isNaN(val) &&
                val >= 1 &&
                val <= Math.floor(claimRemaining)
              ) {
                setClaimQuantity(val);
              }
            }}
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorTertiary,
              opacity: buttonDisabled ? 0.5 : 1,
              cursor: buttonDisabled ? "not-allowed" : "text",
            }}
            className="col-span-2 aspect-auto rounded-lg text-center text-base lg:text-lg font-semibold outline-none"
          />
        </div>

        {/* Claim Button */}
        <ClaimButton
          unstyled
          style={{
            color:
              isProcessing || buttonDisabled
                ? receipt.colorSekunder
                : receipt.colorSecondary,
            backgroundColor:
              isProcessing || buttonDisabled
                ? receipt.colorPrimary
                : receipt.colorTertiary,
            border: "2px solid",
            borderColor:
              isProcessing || buttonDisabled
                ? receipt.colorTertiary
                : "transparent",
          }}
          className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
              ${isProcessing || buttonDisabled ? "" : "cursor-pointer"}
            `}
          contractAddress={coinAddress}
          chain={coinChain}
          client={client}
          claimParams={{
            type: "ERC20",
            quantity: claimQuantity.toString(),
          }}
          disabled={isProcessing || buttonDisabled}
          onClick={() => {
            setIsRefreshing(true); // ⏳ mulai loading
            setIsProcessing(true);
            setPesanTunggu(receipt.nftFormTunggu);
            setPesanSukses(null);
            setPesanGagal(null);
          }}
          onTransactionSent={() => {
            setPesanTunggu(null);
            setPesanKirim(receipt.coinFormKirim);
          }}
          onError={(error) => {
            setRefreshToken(Date.now()); // 🔁 trigger CoinDetails refresh
            setIsRefreshing(false); // ✅ selesai loading
            setIsProcessing(false);
            setPesanTunggu(null);
            setPesanKirim(null);
            setPesanGagal(`${error.message}`);
          }}
          onTransactionConfirmed={async () => {
            setRefreshToken(Date.now()); // 🔁 trigger CoinDetails refresh
            setIsRefreshing(false); // ✅ selesai loading
            setIsProcessing(false);
            setPesanKirim(null);
            setPesanSukses(receipt.coinFormSukses);
            setPesanGagal(null);
          }}>
          {buttonLabel}
        </ClaimButton>
        <h4
          style={{ color: receipt.colorSekunder }}
          className="text-left text-xs font-medium">
          {`${receipt.nftFormMax} ${adjustedPerWallet} ${receipt.coinFormPerWallet}`}
        </h4>
      </div>
    </div>
  );
}
