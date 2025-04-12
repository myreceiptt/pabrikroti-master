// /src/components/contents/NFTForm.tsx

"use client";

// External libraries
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  listerButton,
  listerClaimed,
  listerClosed,
  listerImage,
  listerInsufficient,
  listerName,
  listerPrice,
  listerSoon,
  nftFormBy,
  nftFormByLink,
  nftFormByName,
  nftFormEdition,
  nftFormKirim,
  nftFormMax,
  nftFormOwned,
  nftFormPerWallet,
  nftFormRefresh,
  nftFormSukses,
  nftFormTunggu,
} from "@/config/myreceipt";
import { getCountdownString } from "@/config/utils";

// Components libraries
import NFTDescription from "@/components/nfts/NFTDescription";
import Loader from "@/components/sections/ReusableLoader";
import { motion } from "framer-motion";
import { FaRotate } from "react-icons/fa6";

interface NFTFormProps {
  dropContract: ThirdwebContract;
  tokenId: bigint;
  tokenIdString: string;
  price: bigint;
  adjustedPrice: number;
  currency: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  supply: bigint;
  maxClaim: bigint;
  perWallet: bigint;
  balanceRaw: bigint;
  adjustedBalance: number;
  setRefreshToken: (val: number) => void;
}

const NFTForm: React.FC<NFTFormProps> = ({
  dropContract,
  tokenId,
  tokenIdString,
  price,
  adjustedPrice,
  currency,
  startTimestamp,
  isClaimable,
  reason,
  supply,
  maxClaim,
  perWallet,
  balanceRaw,
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

  console.log(
    `Token #${tokenIdString} | Price: ${price} | Claimable: ${isClaimable} | Reason: ${reason} | Balance ${balanceRaw} | Supply ${supply} | Max. Claim ${maxClaim} | Per Wallet ${perWallet}`
  );

  // Fetch NFT metadata
  const { data: nft, refetch } = useReadContract(getNFT, {
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
  }, [refetch]);

  // Fetch user's owned NFTs
  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: dropContract,
    owner: activeAccount?.address ?? "",
    tokenId,
    queryOptions: { enabled: !!activeAccount?.address && !!tokenIdString },
  });

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
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* MediaRenderer (Left Column) */}
      <div className="rounded-3xl overflow-hidden w-full">
        <MediaRenderer
          client={client}
          src={nft?.metadata?.image || listerImage}
          alt={nft?.metadata?.name || listerName}
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
            {nft?.metadata.name || listerName}
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
        <NFTDescription
          description={nft?.metadata.description ?? ""}
          tokenIdString={tokenIdString}
        />

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
            {listerPrice}
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
            {ownedNfts ? ownedNfts.toString() : "0"}
          </h2>
          <button
            disabled={isRefreshing}
            onClick={async () => {
              setIsRefreshing(true); // ⏳ mulai loading
              await refetch(); // 🔄 jalankan ulang fetch NFT metadata
              setRefreshToken(Date.now()); // 🔁 trigger NFTDetails refresh
              setIsRefreshing(false); // ✅ selesai loading
            }}
            style={{ color: colorPrimary, background: colorSecondary }}
            className={`col-span-2 aspect-auto rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95 ${
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
            tokenId,
          }}
          disabled={isProcessing || buttonDisabled}
          onClick={() => {
            setIsProcessing(true);
            setPesanTunggu(nftFormTunggu);
            setPesanSukses(null);
            setPesanGagal(null);
            setIsRefreshing(true); // ⏳ mulai loading
          }}
          onTransactionSent={() => {
            setPesanTunggu(null);
            setPesanKirim(nftFormKirim);
          }}
          onError={(error) => {
            setIsProcessing(false);
            setPesanTunggu(null);
            setPesanKirim(null);
            setPesanGagal(`${error.message}`);
            setRefreshToken(Date.now()); // 🔁 trigger NFTDetails refresh
            setIsRefreshing(false); // ✅ selesai loading
          }}
          onTransactionConfirmed={async () => {
            setIsProcessing(false);
            setPesanKirim(null);
            setPesanSukses(nftFormSukses);
            setPesanGagal(null);
            setRefreshToken(Date.now()); // 🔁 trigger NFTDetails refresh
            setIsRefreshing(false); // ✅ selesai loading
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
