// /src/components/nfts/NFTViewer.tsx

"use client";

// External libraries
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ThirdwebContract } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc1155";
import { MediaRenderer, useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { chainNames } from "@/config/rantais";
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Loader from "@/components/sections/ReusableLoader";

interface NFTViewerProps {
  dropContract: ThirdwebContract;
  nftId: bigint;
  nftIdString: string;
  supply: bigint;
  maxSupply: bigint;
  buttonLabel: string;
  buttonDisabled: boolean;
  refreshToken: number;
}

export default function NFTViewer({
  dropContract,
  nftId,
  nftIdString,
  supply,
  maxSupply,
  buttonLabel,
  buttonDisabled,
  refreshToken,
}: NFTViewerProps) {
  const { receipt } = getActiveReceipt();
  const router = useRouter();
  const chainName = chainNames[dropContract.chain.id] ?? "Unknown Chain";

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
  const nftImage = nftMetadata?.image || receipt.nftListerImage;
  const nftName = nftMetadata?.name || receipt.nftListerName;

  return (
    <div
      style={{
        borderColor: receipt.colorTertiary,
        background: receipt.colorPrimary,
      }}
      className="w-full grid grid-cols-1 gap-4 p-4 border rounded-3xl">
      {isLoading ? (
        <Loader message={receipt.loaderChecking} />
      ) : nft ? (
        <>
          <Link href={`/token/${nftIdString}`}>
            <MediaRenderer
              style={{ objectFit: "cover" }}
              height="747px"
              width="747px"
              client={client}
              src={nftImage}
              alt={nftName}
              className="w-full aspect-square rounded-2xl hover:scale-95 transition-transform duration-300 ease-in-out"
            />
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <h2
              style={{ color: receipt.colorSekunder }}
              className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold line-clamp-1">
              {nftName}
            </h2>
            <div
              style={{ color: receipt.colorSekunder }}
              className="flex items-center gap-2 text-sm sm:text-xs lg:text-sm font-medium">
              <span>{receipt.nftEditions}</span>
              {supply.toString()}/{maxSupply.toString()}
            </div>
            <h2
              style={{ color: receipt.colorSekunder }}
              className="flex items-center gap-2 text-sm sm:text-xs lg:text-sm font-medium">
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
                router.push(`/token/${nftIdString}`);
              }
            }}
            style={{
              color: buttonDisabled
                ? receipt.colorSekunder
                : receipt.colorSecondary,
              backgroundColor: buttonDisabled
                ? "transparent"
                : receipt.colorTertiary,
              border: "2px solid",
              borderColor: buttonDisabled
                ? receipt.colorTertiary
                : "transparent",
            }}
            className={`w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all ${
              !buttonDisabled ? "cursor-pointer" : ""
            }`}>
            {buttonLabel}
          </button>
        </>
      ) : (
        <h2
          style={{ color: receipt.colorSekunder }}
          className="text-left text-sm font-medium">
          {receipt.nftNoData}
        </h2>
      )}
    </div>
  );
}
