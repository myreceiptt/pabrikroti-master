// /src/components/fts/CoinLister.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Chain } from "thirdweb";
import { TokenProvider, TokenIcon } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { chainNames } from "@/config/rantais";
import { getActiveReceipt } from "@/config/receipts";
import { getCountdownString, MAX_UINT256 } from "@/config/utils";

// Components libraries
import { SmartGIFImage } from "@/components/contents/SmartImage";
import Loader from "@/components/sections/ReusableLoader";

interface CoinListerProps {
  hasAccess: boolean | null;
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  adjustedSupply: number;
  maxClaim: bigint;
  adjustedMaxSupply: number;
  adjustedPrice: number;
  adjustedBalance: number;
  refreshToken: number;
}

export default function CoinLister({
  hasAccess,
  coinAddress,
  coinChain,
  coinName,
  startTimestamp,
  isClaimable,
  reason,
  adjustedSupply,
  maxClaim,
  adjustedMaxSupply,
  adjustedPrice,
  adjustedBalance,
  refreshToken,
}: CoinListerProps) {
  const { receipt } = getActiveReceipt();
  const router = useRouter();
  const chainName = chainNames[coinChain.id] ?? "Unknown Chain";
  const startTime = new Date(Number(startTimestamp) * 1000);

  // Ensure state variables are properly declared
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hasError, setHasError] = useState(false);

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  // Determine button status
  let buttonLabel = receipt.coinButton;
  let buttonDisabled = false;

  const safeReason = (reason ?? "").toLowerCase();

  if (hasAccess === null || hasAccess === false) {
    // Belum punya akses
    buttonLabel = receipt.coinNoAccess;
    buttonDisabled = true;
  } else if (currentTime < startTime) {
    // Belum waktunya
    buttonLabel = `${receipt.nftSoon} ${getCountdownString(
      startTime,
      currentTime,
    )}`;
    buttonDisabled = true;
  } else if (!isClaimable) {
    // Tidak bisa diklaim karena alasan teknis lainnya
    if (safeReason.includes("dropclaimexceedlimit")) {
      buttonLabel = receipt.coinClaimed;
    } else if (safeReason.includes("dropclaimexceedmaxsupply")) {
      buttonLabel = receipt.nftClosed;
    } else {
      buttonLabel = receipt.nftClosed; // fallback
    }
    buttonDisabled = true;
  } else if (adjustedBalance < adjustedPrice) {
    // Saldo tidak cukup
    buttonLabel = receipt.nftInsufficient;
    buttonDisabled = true;
  }
  // else: semua aman, button tetap aktif dengan label default

  return (
    <div
      style={{
        borderColor: receipt.colorTertiary,
        background: receipt.colorSecondary,
      }}
      className="w-full grid grid-cols-1 gap-4 p-4 border rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl"
    >
      {hasAccess === null ? (
        <Loader message={receipt.loaderChecking} />
      ) : (
        <>
          <Link href={`/address/${coinAddress}`}>
            <TokenProvider
              key={refreshToken}
              address={coinAddress}
              client={client}
              chain={coinChain}
            >
              {!hasError ? (
                <TokenIcon
                  alt={coinName}
                  className="rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl w-full hover:scale-95 transition-transform duration-300 ease-in-out"
                  onError={() => setHasError(true)}
                />
              ) : (
                <SmartGIFImage
                  src={receipt.coinListerImage}
                  alt={coinName ?? receipt.coinListerName}
                  width={755}
                  height={545}
                  className="rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl w-full hover:scale-95 transition-transform duration-300 ease-in-out"
                />
              )}
            </TokenProvider>
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <h2
              style={{ color: receipt.colorPrimer }}
              className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold line-clamp-1"
            >
              {coinName}
            </h2>
            <div
              style={{ color: receipt.colorPrimer }}
              className="flex items-center gap-2 text-sm sm:text-xs xl:text-sm font-medium"
            >
              <span>{receipt.coinListerSupply}</span>
              <span
                title={`${adjustedSupply} ${receipt.coinListerOf} ${adjustedMaxSupply}`}
              >
                {formatNumberCompact(adjustedSupply)}/
                {maxClaim === MAX_UINT256 ? (
                  <span className="">&#8734;</span>
                ) : (
                  formatNumberCompact(adjustedMaxSupply)
                )}
              </span>
            </div>
            <h2
              style={{ color: receipt.colorPrimer }}
              className="flex items-center gap-2 text-sm sm:text-xs xl:text-sm font-medium"
            >
              <span>
                {receipt.coinFormOnChain} {chainName}
              </span>
            </h2>
          </div>

          <button
            title={buttonLabel}
            disabled={buttonDisabled}
            onClick={() => {
              if (!buttonDisabled) {
                router.push(`/address/${coinAddress}`);
              }
            }}
            style={{
              color: receipt.colorSecondary,
              border: "2px solid",
              borderColor: buttonDisabled
                ? receipt.colorTertiary
                : "transparent",
              backgroundColor: receipt.colorSekunder,
              opacity: buttonDisabled ? 0.5 : 1,
            }}
            className={`w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all ${
              !buttonDisabled ? "cursor-pointer" : ""
            }`}
          >
            {buttonLabel}
          </button>
        </>
      )}
    </div>
  );
}
