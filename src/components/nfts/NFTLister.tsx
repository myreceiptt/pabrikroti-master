// /src/components/nfts/NFTLister.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThirdwebContract } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc1155";
import { MediaRenderer, useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { currencyMap } from "@/config/contracts";
import {
  colorBorder,
  colorIcon,
  colorPrimary,
  colorSecondary,
  listerButton,
  listerClaimed,
  listerClosed,
  listerImage,
  listerInsufficient,
  listerName,
  listerNoData,
  listerPrice,
  listerSoon,
  loaderChecking,
} from "@/config/myreceipt";
import { getCountdownString } from "@/config/utils";

// Components libraries
import Loader from "@/components/sections/ReusableLoader";

type NFTListerProps = {
  dropContract: ThirdwebContract;
  tokenId: bigint;
  tokenIdString: string;
  price: bigint;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  balanceRaw: bigint;
  adjustedBalance: number;
  refreshToken: number;
};

const NFTLister: React.FC<NFTListerProps> = ({
  dropContract,
  tokenId,
  tokenIdString,
  price,
  adjustedPrice,
  currency,
  startTimestamp,
  isClaimable,
  reason,
  balanceRaw,
  adjustedBalance,
  refreshToken,
}) => {
  const router = useRouter();
  const startTime = new Date(Number(startTimestamp) * 1000);

  // Ensure state variables are properly declared
  const [currentTime, setCurrentTime] = useState(new Date());

  console.log(
    `Token #${tokenIdString} | Start: ${startTime} | Price: ${price} | The Price ${adjustedPrice} | Claimable: ${isClaimable} | Reason: ${reason} | Balance ${balanceRaw} | The Balance ${adjustedBalance}`
  );

  // Fetch NFT metadata
  const {
    data: nft,
    isLoading,
    refetch,
  } = useReadContract(getNFT, {
    contract: dropContract,
    tokenId: tokenId,
  });

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Refetch NFT metadata
  useEffect(() => {
    refetch();
  }, [refreshToken, refetch]);

  // Determine button status
  let buttonLabel = listerButton;
  let buttonDisabled = false;

  if (currentTime < startTime) {
    buttonLabel = `${listerSoon} ${getCountdownString(startTime, currentTime)}`;
    buttonDisabled = true;
  }
  if (adjustedBalance < adjustedPrice) {
    buttonLabel = listerInsufficient;
    buttonDisabled = true;
  } else if (!isClaimable) {
    const safeReason = reason ?? "";
    if (safeReason.includes("DropClaimExceedLimit")) {
      buttonLabel = listerClaimed;
    } else if (safeReason.includes("DropClaimExceedMaxSupply")) {
      buttonLabel = listerClosed;
    } else {
      buttonLabel = listerClosed;
    }
    buttonDisabled = true;
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

  return (
    <div
      style={{ borderColor: colorBorder }}
      className="w-full grid grid-cols-1 gap-4 p-4 border rounded-3xl">
      {isLoading ? (
        <Loader message={loaderChecking} />
      ) : nft ? (
        <>
          <Link href={`/token/${tokenIdString}`}>
            <MediaRenderer
              client={client}
              src={nft?.metadata?.image || listerImage}
              alt={nft?.metadata?.name || listerName}
              className="rounded-2xl w-full"
            />
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <h2
              style={{ color: colorSecondary }}
              className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold">
              {nft?.metadata?.name || listerName}
            </h2>
            <div
              style={{ color: colorIcon }}
              className="flex items-center gap-2 text-sm sm:text-xs lg:text-sm font-medium">
              <span>{listerPrice}</span>
              <Image
                src={tokenCurrency.icon}
                alt={tokenCurrency.symbol}
                width={16}
                height={16}
              />
              <span>{formattedPrice}</span>
            </div>
          </div>

          <button
            disabled={buttonDisabled}
            onClick={() => {
              if (!buttonDisabled) {
                router.push(`/token/${tokenIdString}`);
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
          {listerNoData}
        </h2>
      )}
    </div>
  );
};

export default NFTLister;
