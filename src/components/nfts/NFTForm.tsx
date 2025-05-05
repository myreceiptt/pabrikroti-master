// /src/components/nfts/NFTForm.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { ThirdwebContract } from "thirdweb";
import { balanceOf, getNFT } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { currencyMap } from "@/config/contracts";
import {
  colorBorder,
  colorIcon,
  colorPrimary,
  colorSecondary,
  nftButton,
  nftClaimed,
  nftClosed,
  nftFormBy,
  nftFormByLink,
  nftFormByName,
  nftFormEdition,
  nftFormKirim,
  nftFormMax,
  nftFormOwned,
  nftFormPerWallet,
  nftFormPrice,
  nftFormRefresh,
  nftFormSukses,
  nftFormTunggu,
  nftInsufficient,
  nftListerImage,
  nftListerName,
  nftSoon,
} from "@/config/myreceipt";
import { getCountdownString } from "@/config/utils";

// Components libraries
import NFTDescription from "@/components/nfts/NFTDescription";
import Loader from "@/components/sections/ReusableLoader";

interface NFTFormProps {
  dropContract: ThirdwebContract;
  nftId: bigint;
  nftIdString: string;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxClaim: bigint;
  perWallet: bigint;
  adjustedBalance: number;
  setRefreshToken: (val: number) => void;
}

const NFTForm: React.FC<NFTFormProps> = ({
  dropContract,
  nftId,
  nftIdString,
  adjustedPrice,
  currency,
  startTimestamp,
  isClaimable,
  reason,
  supply,
  maxClaim,
  perWallet,
  adjustedBalance,
  setRefreshToken,
}) => {
  const activeAccount = useActiveAccount();
  const startTime = new Date(Number(startTimestamp) * 1000);

  // Ensure state variables are properly declared
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isProcessing, setIsProcessing] = useState(false);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  // Fetch NFT metadata
  const { data: nft, refetch: refetchNFT } = useReadContract(getNFT, {
    contract: dropContract,
    tokenId: nftId,
  });

  // Destructuring NFT metadata
  const nftMetadata = nft?.metadata;
  const nftImage = nftMetadata?.image || nftListerImage;
  const nftName = nftMetadata?.name || nftListerName;
  const nftDescription = nft?.metadata.description ?? "";

  console.log(`OiOi: ${nftDescription}`);

  // Fetch user's owned NFTs
  const { data: ownedNFTs, refetch: refetchOwnedNFTs } = useReadContract(
    balanceOf,
    {
      contract: dropContract,
      owner: activeAccount?.address ?? "",
      tokenId: nftId,
      queryOptions: { enabled: !!activeAccount?.address && !!nftIdString },
    }
  );

  // Refetch NFT metadata
  useEffect(() => {
    refetchNFT();
    refetchOwnedNFTs();
  }, [refetchNFT, refetchOwnedNFTs]);

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
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* MediaRenderer (Left Column) */}
      <div className="rounded-3xl overflow-hidden w-full">
        <MediaRenderer
          client={client}
          src={nftImage}
          alt={nftName}
          className="rounded-3xl w-full"
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
        <div className="w-full flex flex-row gap-2 items-start justify-between">
          {/* Title */}
          <h1
            style={{ color: colorSecondary }}
            className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {nftName}
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
            <Link href={nftFormByLink} target="_blank">
              {nftFormByName}
            </Link>
          </h1>
        </div>

        {/* Description with Expand/Collapse */}
        <NFTDescription description={nftDescription} id={nftIdString} />

        {/* Success or Error Messages */}
        {pesanTunggu && <Loader message={pesanTunggu} />}
        {pesanKirim && <Loader message={pesanKirim} />}
        {pesanSukses && <Loader message={pesanSukses} />}
        {pesanGagal && <Loader message={pesanGagal} />}

        {/* NFT Info */}
        <div className="w-full grid grid-cols-12">
          <h2
            style={{ color: colorIcon }}
            className="col-span-4 text-left text-xs font-medium">
            {nftFormPrice}
          </h2>
          <h2
            style={{ color: colorIcon }}
            className="col-span-3 text-left text-xs font-medium">
            {nftFormEdition}
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
            className="col-span-4 text-left text-base lg:text-md xl:text-xl font-semibold">
            {formattedPrice}
          </h2>
          <h2
            style={{ color: colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {supply.toString()}/{maxClaim.toString()}
          </h2>
          <h2
            style={{ color: colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {ownedNFTs ? ownedNFTs.toString() : "0"}
          </h2>
          <button
            disabled={isRefreshing}
            onClick={async () => {
              setIsRefreshing(true); // ⏳ mulai loading
              setRefreshToken(Date.now()); // 🔁 trigger NFTDetails refresh
              await refetchNFT(); // 🔄 jalankan ulang fetch NFT metadata
              await refetchOwnedNFTs(); // 🔄 jalankan ulang fetch owned NFT
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
          contractAddress={dropContract.address}
          chain={dropContract.chain}
          client={client}
          claimParams={{
            type: "ERC1155",
            quantity: 1n,
            tokenId: nftId,
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
            setPesanKirim(nftFormKirim);
          }}
          onError={(error) => {
            setRefreshToken(Date.now()); // 🔁 trigger NFTDetails refresh
            setIsRefreshing(false); // ✅ selesai loading
            setIsProcessing(false);
            setPesanTunggu(null);
            setPesanKirim(null);
            setPesanGagal(`${error.message}`);
          }}
          onTransactionConfirmed={async () => {
            setRefreshToken(Date.now()); // 🔁 trigger NFTDetails refresh
            setIsRefreshing(false); // ✅ selesai loading
            setIsProcessing(false);
            setPesanKirim(null);
            setPesanSukses(nftFormSukses);
            setPesanGagal(null);
          }}>
          {buttonLabel}
        </ClaimButton>
        <h4
          style={{ color: colorIcon }}
          className="text-left text-xs font-medium">
          {`${nftFormMax} ${perWallet} ${nftFormPerWallet}`}
        </h4>
      </div>
    </div>
  );
};

export default NFTForm;
