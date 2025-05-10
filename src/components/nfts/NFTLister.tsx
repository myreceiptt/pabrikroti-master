// /src/components/nfts/NFTLister.tsx

"use client";

// External libraries
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThirdwebContract } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc1155";
import { MediaRenderer, useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { getActiveReceipt } from "@/config/receipts";
import { getCountdownString } from "@/config/utils";

// Components libraries
import Loader from "@/components/sections/ReusableLoader";

const {
  colorBorder,
  colorIcon,
  colorPrimary,
  colorSecondary,
  loaderChecking,
  nftButton,
  nftClaimed,
  nftClosed,
  nftEditions,
  nftInsufficient,
  nftListerImage,
  nftListerName,
  nftNoData,
  nftSoon,
} = getActiveReceipt();

interface NFTListerProps {
  dropContract: ThirdwebContract;
  nftId: bigint;
  nftIdString: string;
  adjustedPrice: number;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxClaim: bigint;
  adjustedBalance: number;
  refreshToken: number;
}

export default function NFTLister({
  dropContract,
  nftId,
  nftIdString,
  adjustedPrice,
  startTimestamp,
  isClaimable,
  reason,
  supply,
  maxClaim,
  adjustedBalance,
  refreshToken,
}: NFTListerProps) {
  const router = useRouter();
  const startTime = new Date(Number(startTimestamp) * 1000);

  // Ensure state variables are properly declared
  const [currentTime, setCurrentTime] = useState(new Date());

  // Fetch NFT metadata
  const {
    data: nft,
    isLoading,
    refetch,
  } = useReadContract(getNFT, {
    contract: dropContract,
    tokenId: nftId,
  });

  // Refetch NFT metadata
  useEffect(() => {
    refetch();
  }, [refreshToken, refetch]);

  // Destructuring NFT metadata
  const nftMetadata = nft?.metadata;
  const nftImage = nftMetadata?.image || nftListerImage;
  const nftName = nftMetadata?.name || nftListerName;

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Determine button status
  let buttonLabel = nftButton;
  let buttonDisabled = false;

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
      buttonLabel = nftClaimed;
    } else if (safeReason.includes("dropclaimexceedmaxsupply")) {
      buttonLabel = nftClosed;
    } else {
      buttonLabel = nftClosed; // fallback
    }
    buttonDisabled = true;
  }

  return (
    <div
      style={{ borderColor: colorBorder }}
      className="w-full grid grid-cols-1 gap-4 p-4 border rounded-3xl">
      {isLoading ? (
        <Loader message={loaderChecking} />
      ) : nft ? (
        <>
          <Link href={`/token/${nftIdString}`}>
            <MediaRenderer
              client={client}
              src={nftImage}
              alt={nftName}
              className="rounded-2xl w-full hover:scale-95 transition-transform duration-300 ease-in-out"
            />
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <h2
              style={{ color: colorSecondary }}
              className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold">
              {nftName}
            </h2>
            <div
              style={{ color: colorIcon }}
              className="flex items-center gap-2 text-sm sm:text-xs lg:text-sm font-medium">
              <span>{nftEditions}</span>
              {supply.toString()}/{maxClaim.toString()}
            </div>
          </div>

          <button
            title={buttonLabel}
            disabled={buttonDisabled}
            onClick={() => {
              if (!buttonDisabled) {
                router.push(`/token/${nftIdString}`);
              }
            }}
            style={{
              color: buttonDisabled ? colorSecondary : colorPrimary,
              backgroundColor: buttonDisabled ? "transparent" : colorSecondary,
              border: "2px solid",
              borderColor: buttonDisabled ? colorBorder : colorSecondary,
            }}
            className={`w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all ${
              !buttonDisabled ? "cursor-pointer" : ""
            }`}>
            {buttonLabel}
          </button>
        </>
      ) : (
        <h2
          style={{ color: colorIcon }}
          className="text-left text-sm font-medium">
          {nftNoData}
        </h2>
      )}
    </div>
  );
}
