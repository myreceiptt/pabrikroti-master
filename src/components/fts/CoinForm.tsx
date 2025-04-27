// /src/components/fts/CoinForm.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { Chain } from "thirdweb";
import { ClaimButton, TokenIcon, TokenProvider } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { currencyMap } from "@/config/contracts";
import {
  coinButton,
  coinClaimed,
  coinFormKirim,
  coinFormPerWallet,
  coinFormSukses,
  coinFormSupply,
  coinListerImage,
  coinListerName,
  coinNoAccess,
  coinOf,
  colorBorder,
  colorIcon,
  colorPrimary,
  colorSecondary,
  nftClosed,
  nftFormBy,
  nftFormMax,
  nftFormOwned,
  nftFormPrice,
  nftFormRefresh,
  nftFormTunggu,
  nftInsufficient,
  nftSoon,
} from "@/config/myreceipt";
import { getCountdownString } from "@/config/utils";

// Components libraries
// import CoinDescription from "@/components/fts/CoinDescription";
import Loader from "@/components/sections/ReusableLoader";

interface CoinFormProps {
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
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
  adjustedMaxClaim: number;
  adjustedPerWallet: number;
  hasAccess: boolean | null;
  setRefreshToken: (val: number) => void;
  refreshToken: number;
}

const CoinForm: React.FC<CoinFormProps> = ({
  coinAddress,
  coinChain,
  coinName,
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
  adjustedMaxClaim,
  adjustedPerWallet,
  hasAccess,
  setRefreshToken,
  refreshToken,
}) => {
  const startTime = new Date(Number(startTimestamp) * 1000);

  // Ensure state variables are properly declared
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hasError, setHasError] = useState(false);
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
  let buttonLabel = coinButton;
  let buttonDisabled = false;

  // Belum punya akses
  if (hasAccess === null || hasAccess === false) {
    buttonLabel = coinNoAccess;
    buttonDisabled = true;
  } else {
    if (currentTime < startTime) {
      // Belum waktunya
      buttonLabel = `${nftSoon} ${getCountdownString(startTime, currentTime)}`;
      buttonDisabled = true;
    } else if (adjustedBalance < adjustedPrice) {
      // Tidak cukup saldo
      buttonLabel = nftInsufficient;
      buttonDisabled = true;
    } else if (!isClaimable) {
      // Tidak bisa diklaim karena alasan lain
      const safeReason = (reason ?? "").toLowerCase();
      if (safeReason.includes("dropclaimexceedlimit")) {
        buttonLabel = coinClaimed;
      } else if (safeReason.includes("dropclaimexceedmaxsupply")) {
        buttonLabel = nftClosed;
      } else {
        buttonLabel = nftClosed;
      }
      buttonDisabled = true;
    }
  }

  // Determine the currency symbol
  const tokenCurrency = currencyMap[currency.toLowerCase()] || {
    symbol: "TOKEN",
    name: "Unknown FT",
    icon: "/erc20-icons/nota.png",
  };

  // Format the price
  const formattedPrice = `${adjustedPrice.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  })} ${tokenCurrency.symbol}`;

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

  // Reset hasError state
  useEffect(() => {
    setHasError(false);
  }, [refreshToken]);

  return (
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* MediaRenderer (Left Column) */}
      <div className="rounded-3xl overflow-hidden w-full">
        <TokenProvider
          key={refreshToken}
          address={coinAddress}
          client={client}
          chain={coinChain}>
          {!hasError ? (
            <TokenIcon
              alt={coinName}
              className="rounded-2xl w-full"
              onError={() => setHasError(true)}
            />
          ) : (
            <Image
              src={coinListerImage}
              alt={coinName ?? coinListerName}
              width={755}
              height={545}
              className="rounded-2xl w-full"
            />
          )}
        </TokenProvider>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
        <div className="w-full flex flex-row gap-2 items-start justify-between">
          {/* Title */}
          <h1
            style={{ color: colorSecondary }}
            className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {coinName}
          </h1>
        </div>

        <div className="flex flex-row gap-2">
          <h1
            style={{ color: colorIcon }}
            className="text-left text-sm font-medium">
            {nftFormBy}
          </h1>
          <span style={{ color: colorIcon }} className="text-3xl leading-6">
            &#9673;
          </span>
          <h1
            style={{ color: colorIcon }}
            className="text-left text-sm font-medium">
            <Link href={coinLink} target="_blank">
              {coinBy}
            </Link>
          </h1>
        </div>

        {/* Description with Expand/Collapse */}
        {/* <NFTDescription
          description={nft?.metadata.description ?? ""}
          tokenIdString={tokenIdString}
        /> */}

        {/* Success or Error Messages */}
        {pesanTunggu && <Loader message={pesanTunggu} />}
        {pesanKirim && <Loader message={pesanKirim} />}
        {pesanSukses && <Loader message={pesanSukses} />}
        {pesanGagal && <Loader message={pesanGagal} />}

        {/* FT Info */}
        <div className="w-full grid grid-cols-8">
          <h2
            style={{ color: colorIcon }}
            className="col-span-3 text-left text-xs font-medium">
            {nftFormPrice}
          </h2>
          <h2
            style={{ color: colorIcon }}
            className="col-span-3 text-left text-xs font-medium">
            {nftFormOwned}
          </h2>
          <h2
            style={{ color: colorIcon }}
            className="col-span-2 text-left text-xs font-medium">
            {nftFormRefresh}
          </h2>

          <h2
            style={{ color: colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {formattedPrice}
          </h2>
          <h2
            style={{ color: colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {adjustedCoinOwned}
          </h2>
          <button
            disabled={isRefreshing}
            onClick={async () => {
              setIsRefreshing(true); // ⏳ mulai loading
              setRefreshToken(Date.now()); // 🔁 trigger CoinDetails refresh
              await new Promise((resolve) => setTimeout(resolve, 747)); // ⏳ beri waktu animasi jalan
              setIsRefreshing(false); // ✅ selesai loading
            }}
            style={{ color: colorPrimary, background: colorSecondary }}
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
              <FaRotate className="text-base lg:text-md xl:text-xl font-semibold " />
            </motion.div>
          </button>
        </div>

        <div className="w-full grid grid-cols-8">
          <h2
            style={{ color: colorIcon }}
            className="col-span-8 text-left text-xs font-medium">
            {coinFormSupply}
          </h2>

          <h2
            style={{ color: colorSecondary }}
            className="col-span-8 text-left text-base lg:text-md xl:text-xl font-semibold">
            <span title={`${adjustedSupply} ${coinOf} ${adjustedMaxClaim}`}>
              {formatNumberCompact(adjustedSupply)}/
              {formatNumberCompact(adjustedMaxClaim)}
            </span>
          </h2>
        </div>

        {/* Claim Button */}
        <ClaimButton
          unstyled
          style={{
            color:
              isProcessing || buttonDisabled ? colorSecondary : colorPrimary,
            backgroundColor:
              isProcessing || buttonDisabled ? "transparent" : colorSecondary,
            border: "2px solid",
            borderColor:
              isProcessing || buttonDisabled ? colorBorder : colorSecondary,
          }}
          className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
              ${isProcessing || buttonDisabled ? "" : "cursor-pointer"}
            `}
          contractAddress={coinAddress}
          chain={coinChain}
          client={client}
          claimParams={{
            type: "ERC20",
            quantity: adjustedPerWallet.toString(),
          }}
          disabled={isProcessing || buttonDisabled}
          onClick={() => {
            setIsRefreshing(true); // ⏳ mulai loading
            setIsProcessing(true);
            setPesanTunggu(nftFormTunggu);
            setPesanSukses(null);
            setPesanGagal(null);
          }}
          onTransactionSent={() => {
            setPesanTunggu(null);
            setPesanKirim(coinFormKirim);
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
            setPesanSukses(coinFormSukses);
            setPesanGagal(null);
          }}>
          {buttonLabel}
        </ClaimButton>
        <h4
          style={{ color: colorIcon }}
          className="text-left text-xs font-medium">
          {`${nftFormMax} ${adjustedPerWallet} ${coinFormPerWallet}`}
        </h4>
      </div>
    </div>
  );
};

export default CoinForm;
