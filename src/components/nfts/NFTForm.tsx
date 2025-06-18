// /src/components/nfts/NFTForm.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRotate } from "react-icons/fa6";
import { Chain, ThirdwebContract } from "thirdweb";
import { balanceOf, getNFT } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

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
import { getCountdownString, MAX_UINT256 } from "@/config/utils";

// Components libraries
import NFTDescription from "@/components/nfts/NFTDescription";
import Loader from "@/components/sections/ReusableLoader";

interface NFTFormProps {
  dropContract: ThirdwebContract;
  nftChain: Chain;
  nftId: bigint;
  nftIdString: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  perWallet: bigint;
  claimRemaining: bigint;
  supply: bigint;
  maxClaim: bigint;
  maxSupply: bigint;
  currency: string;
  adjustedPrice: number;
  adjustedBalance: number;
  setRefreshToken: (val: number) => void;
}

export default function NFTForm({
  dropContract,
  nftChain,
  nftId,
  nftIdString,
  startTimestamp,
  isClaimable,
  reason,
  perWallet,
  claimRemaining,
  supply,
  maxClaim,
  maxSupply,
  currency,
  adjustedPrice,
  adjustedBalance,
  setRefreshToken,
}: NFTFormProps) {
  const { receipt } = getActiveReceipt();
  const activeAccount = useActiveAccount();
  const chainName = chainNames[dropContract.chain.id] ?? "Unknown Chain";
  const startTime = new Date(Number(startTimestamp) * 1000);
  const currencyMap = useCurrencyMap();

  // Ensure state variables are properly declared
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

  // Fetch NFT metadata
  const { data: nft, refetch: refetchNFT } = useReadContract(getNFT, {
    contract: dropContract,
    tokenId: nftId,
  });

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

  // Refetch NFT metadata and owned NFTs
  useEffect(() => {
    refetchNFT();
    refetchOwnedNFTs();
  }, [refetchNFT, refetchOwnedNFTs]);

  // Destructuring NFT metadata
  const nftMetadata = nft?.metadata;
  const nftImage = nftMetadata?.image || receipt.nftListerImage;
  const nftName = nftMetadata?.name || receipt.nftListerName;
  const nftDescription = nft?.metadata.description ?? "";

  // Determine the currency symbol
  const nativeCurrency = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
  const isNative = currency.toLowerCase() === nativeCurrency;
  let tokenCurrency;
  if (isNative) {
    if (
      nftChain === baseMainnet ||
      nftChain === baseSepolia ||
      nftChain === opMainnet ||
      nftChain === shapeNetwork
    ) {
      tokenCurrency = {
        symbol: "ETH",
        name: "Ether",
        icon: "/erc20-icons/eth.png",
      };
    } else if (nftChain === monadTestnet) {
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

  // Determine button status
  let buttonLabel = receipt.nftButton;
  let buttonDisabled = false;

  if (currentTime < startTime) {
    // Belum waktunya
    buttonLabel = `${receipt.nftSoon} ${getCountdownString(
      startTime,
      currentTime
    )}`;
    buttonDisabled = true;
  } else {
    if (!isClaimable) {
      // Tidak bisa diklaim karena alasan teknis lainnya
      const safeReason = (reason ?? "").toLowerCase();
      if (safeReason.includes("dropclaimexceedlimit")) {
        buttonLabel = receipt.nftClaimed;
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
  }

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
            style={{ color: receipt.colorSecondary }}
            className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {nftName}
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
            <Link href={receipt.nftFormByLink} target="_blank">
              {receipt.nftFormByName}
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
        <div className="w-full grid grid-cols-8">
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.nftFormPrice}
          </h2>
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.nftFormOwned}
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
            style={{
              color: receipt.colorSecondary,
              background: receipt.colorTertiary,
            }}
            className={`col-span-2 aspect-auto rounded-lg disabled:opacity-50 transition-all hover:scale-95 active:scale-95 ${
              !isRefreshing ? "cursor-pointer" : ""
            } flex items-center justify-center`}>
            <motion.div
              animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
              transition={{
                repeat: isRefreshing ? Infinity : 0,
                duration: 0.74,
                ease: "linear",
              }}>
              <FaRotate className="text-base lg:text-lg font-semibold" />
            </motion.div>
          </button>
        </div>

        <div className="w-full grid grid-cols-8">
          <h2
            style={{ color: receipt.colorSekunder }}
            className="col-span-3 text-left text-xs font-medium">
            {receipt.nftFormEdition}
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
            {supply.toString()}/
            {maxClaim === MAX_UINT256 ? (
              <span className="">&#8734;</span>
            ) : (
              maxSupply.toString()
            )}
          </h2>
          <h2
            style={{ color: receipt.colorSecondary }}
            className="col-span-3 text-left text-base lg:text-md xl:text-xl font-semibold">
            {chainName}
          </h2>
          <input
            type="number"
            min={1}
            max={Math.floor(Number(claimRemaining))}
            value={buttonDisabled ? 0 : claimQuantity}
            readOnly={buttonDisabled}
            onChange={(e) => {
              const val = Math.floor(Number(e.target.value));
              if (
                !isNaN(val) &&
                val >= 1 &&
                val <= Math.floor(Number(claimRemaining))
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
          contractAddress={dropContract.address}
          chain={dropContract.chain}
          client={client}
          claimParams={{
            type: "ERC1155",
            quantity: BigInt(claimQuantity),
            tokenId: nftId,
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
            setPesanKirim(receipt.nftFormKirim);
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
            setPesanSukses(receipt.nftFormSukses);
            setPesanGagal(null);
          }}>
          {buttonLabel}
        </ClaimButton>
        <h4
          style={{ color: receipt.colorSekunder }}
          className="text-left text-xs font-medium">
          {receipt.nftFormMax}{" "}
          {perWallet === MAX_UINT256 ? (
            <span className="">&#8734;</span>
          ) : (
            perWallet.toString()
          )}{" "}
          {receipt.nftFormPerWallet}
        </h4>
      </div>
    </div>
  );
}
