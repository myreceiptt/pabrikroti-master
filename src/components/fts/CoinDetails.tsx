// /src/components/fts/CoinDetails.tsx

"use client";

// External libraries
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Chain, getContract, readContract } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import {
  canClaim,
  decimals,
  getActiveClaimCondition,
  getActiveClaimConditionId,
  totalSupply,
} from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { download } from "thirdweb/storage";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { CheckErc1155 } from "@/config/checker";
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import { SmartGIFImage } from "@/components/contents/SmartImage";
import CoinAccess from "@/components/fts/CoinAccess";
import CoinForm from "@/components/fts/CoinForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

interface CoinData {
  coinAddress: string;
  coinChain: Chain;
  coinName: string;
  coinSymbol: string;
  coinDescription: string;
  coinImage: string;
  coinBy: string;
  coinLink: string;
  startTimestamp: bigint;
  isClaimable: boolean;
  reason: string | null;
  perWallet: bigint;
  adjustedPerWallet: number;
  adjustedCoinOwned: number;
  claimRemaining: number;
  adjustedSupply: number;
  maxClaim: bigint;
  adjustedMaxSupply: number;
  currency: string;
  adjustedPrice: number;
  adjustedBalance: number;
}

interface SnapshotEntry {
  address: string;
  maxClaimable?: string;
  price?: string;
  currency?: string;
}

function getCoinAddressFromParams(
  params: ReturnType<typeof useParams>,
): string {
  const val = params.coinAddress;
  return Array.isArray(val)
    ? val[0]
    : (val ?? "0x0000000000000000000000000000000000000000");
}

export default function CoinDetails() {
  const { receipt, erc20sLaunched } = getActiveReceipt();
  const activeAccount = useActiveAccount();
  const params = useParams();
  const router = useRouter();
  const coinAddress = getCoinAddressFromParams(params);

  // Ensure state variables are properly declared
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [coin, setCoin] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch any data
  const fetchCoinDetails = useCallback(async () => {
    if (!coinAddress || !activeAccount?.address) return;

    const erc20ContractLaunched = erc20sLaunched.find(
      (c) => c.address.toLowerCase() === coinAddress.toLowerCase(),
    );

    if (!erc20ContractLaunched) {
      setError(receipt.coinMessage1);
      setLoading(false);
      return;
    }

    try {
      const erc20Contract = getContract({
        client: erc20ContractLaunched.client,
        address: erc20ContractLaunched.address,
        chain: erc20ContractLaunched.chain,
      });

      // Fetch coin metadata
      const coinMetaData = await getContractMetadata({
        contract: erc20Contract,
      });

      // Fetch claim condition
      const claimCondition = await getActiveClaimCondition({
        contract: erc20Contract,
      });

      if (!claimCondition || claimCondition.pricePerToken === undefined) {
        setError(receipt.coinSetError);
        setLoading(false);
        return;
      }

      // Fetch can claim status
      let isClaimable = false;
      let reason: string | null = null;

      try {
        const claimStatus = await canClaim({
          contract: erc20Contract,
          quantity: "1",
          claimer: activeAccount?.address || "",
        });

        isClaimable = claimStatus.result;
        reason = claimStatus.reason ?? null;
      } catch (innerErr) {
        // Continue if check failed
        isClaimable = false;
        reason = receipt.nftsFailReason;
        console.warn(
          `${receipt.coinsConsoleWarn} ${erc20ContractLaunched.address}`,
          innerErr,
        );
      }

      // Fetch coin decimals
      const coinDecimals = await decimals({ contract: erc20Contract });

      // Fetch limit per wallet
      let perWallet = claimCondition.quantityLimitPerWallet;

      // Fetch and adjust limit per wallet
      let adjustedPerWallet = Number(perWallet) / 10 ** coinDecimals;

      // Fetch coin owned
      const coinOwned = await getWalletBalance({
        address: activeAccount.address,
        chain: erc20ContractLaunched.chain,
        client: erc20ContractLaunched.client,
        tokenAddress: erc20ContractLaunched.address,
      });

      // Adjust coin owned
      const adjustedCoinOwned =
        Number(coinOwned.value ?? 0n) / 10 ** coinDecimals;

      // Fetch currency and decimals
      const nativeCurrency = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
      let currencyDecimals = 18;
      let balanceRaw = 0n;

      if (claimCondition.currency.toLowerCase() !== nativeCurrency) {
        const currencyContract = getContract({
          client: erc20ContractLaunched.client,
          address: claimCondition.currency,
          chain: erc20ContractLaunched.chain,
        });

        currencyDecimals = await decimals({ contract: currencyContract });

        // Fetch currency balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc20ContractLaunched.chain,
          client: erc20ContractLaunched.client,
          tokenAddress: claimCondition.currency,
        });

        balanceRaw = balanceResult.value ?? 0n;
      } else {
        // Native currency balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc20ContractLaunched.chain,
          client: erc20ContractLaunched.client,
        });

        currencyDecimals = balanceResult.decimals ?? 18;
        balanceRaw = balanceResult.value ?? 0n;
      }

      // Adjust balance
      const adjustedBalance = Number(balanceRaw) / 10 ** currencyDecimals;

      // Adjust price
      let adjustedPrice =
        Number(claimCondition.pricePerToken) / 10 ** currencyDecimals;

      // Merkle root map from coin metadata
      const merkleMap = coinMetaData?.merkle as
        | Record<string, string>
        | undefined;

      // Fetch override price
      const currentMerkleRoot = claimCondition.merkleRoot?.toLowerCase();
      const snapshotUri = merkleMap?.[currentMerkleRoot ?? ""];

      if (snapshotUri && activeAccount?.address) {
        try {
          const merkleMetadataRes = await download({
            client: erc20Contract.client,
            uri: snapshotUri,
          });

          const merkleMetadata = await merkleMetadataRes.json();

          const originalEntriesUri = merkleMetadata.originalEntriesUri;

          if (originalEntriesUri) {
            const entriesRes = await download({
              client: erc20Contract.client,
              uri: originalEntriesUri,
            });

            const entries: SnapshotEntry[] = await entriesRes.json();

            const entry = entries.find(
              (e) =>
                e.address?.toLowerCase() ===
                activeAccount.address.toLowerCase(),
            );

            if (entry?.maxClaimable) {
              const parsedPerWallet = parseFloat(entry.maxClaimable);
              if (!isNaN(parsedPerWallet)) {
                perWallet = BigInt(parsedPerWallet * 10 ** coinDecimals);
                adjustedPerWallet = parsedPerWallet;
              }
            }

            if (entry?.price) {
              const parsedPrice = parseFloat(entry.price);
              if (!isNaN(parsedPrice)) {
                adjustedPrice = parsedPrice;
              }
            }
          }
        } catch (e) {
          console.warn(receipt.fetchAllowList, e);
        }
      }

      // Fetch claim condition id
      const claimConditionId = await getActiveClaimConditionId({
        contract: erc20Contract,
      });

      // Fetch supply claimed by wallet
      const claimedRaw = await readContract({
        contract: erc20Contract,
        method:
          "function getSupplyClaimedByWallet(uint256 _conditionId, address _claimer) view returns (uint256 supplyClaimedByWallet)",
        params: [claimConditionId, activeAccount.address],
      });

      // Calculate claim remaining
      const claimRemaining =
        adjustedPerWallet - Number(claimedRaw) / 10 ** coinDecimals;

      // Fetch coin current supply
      const coinTotalSupply = await totalSupply({
        contract: erc20Contract,
      });

      // Adjust coin current supply
      const adjustedSupply = Number(coinTotalSupply) / 10 ** coinDecimals;

      // Fetch and adjust coin supply based on claim condition
      const adjustedClaimed =
        Number(claimCondition.supplyClaimed) / 10 ** coinDecimals;

      // Fetch max. claim based on claim condition
      const maxClaim = claimCondition.maxClaimableSupply;

      // Adjust max. claim based on claim condition
      const adjustedMaxClaim = Number(maxClaim) / 10 ** coinDecimals;

      // Calculate and adjust max. supply
      const adjustedMaxSupply =
        adjustedMaxClaim + (adjustedSupply - adjustedClaimed);

      setCoin({
        coinAddress: erc20ContractLaunched.address,
        coinChain: erc20ContractLaunched.chain,
        // coinName: coinMetaData.name,
        coinName: coinMetaData.name ?? "",
        // coinSymbol: coinMetaData.symbol,
        coinSymbol: coinMetaData.symbol ?? "",
        // coinDescription: coinMetaData.description,
        coinDescription:
          typeof coinMetaData.description === "string"
            ? coinMetaData.description
            : String(coinMetaData.description ?? ""),
        // coinImage: coinMetaData.image,
        coinImage:
          typeof coinMetaData.image === "string"
            ? coinMetaData.image
            : String(coinMetaData.image ?? ""),
        coinBy: erc20ContractLaunched.by,
        coinLink: erc20ContractLaunched.link,
        startTimestamp: claimCondition.startTimestamp,
        isClaimable,
        reason,
        perWallet,
        adjustedPerWallet,
        adjustedCoinOwned,
        claimRemaining,
        adjustedSupply,
        maxClaim,
        adjustedMaxSupply,
        currency: claimCondition.currency,
        adjustedPrice,
        adjustedBalance,
      });

      setError(null);
    } catch (err: unknown) {
      setError(receipt.coinSetError);
      if (err instanceof Error) {
        console.error(receipt.nftsError, err.message);
      } else {
        console.error(receipt.nftsUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [
    coinAddress,
    activeAccount?.address,
    erc20sLaunched,
    receipt.coinMessage1,
    receipt.coinSetError,
    receipt.coinsConsoleWarn,
    receipt.fetchAllowList,
    receipt.nftsError,
    receipt.nftsFailReason,
    receipt.nftsUknownError,
  ]);

  // Refetch FT details
  useEffect(() => {
    if (coinAddress !== "") fetchCoinDetails();
  }, [refreshToken, fetchCoinDetails, coinAddress]);

  // Ensure coinAddress exists, otherwise redirect
  useEffect(() => {
    if (params.coinAddress == null) router.push("/");
  }, [params.coinAddress, router]);

  // Placeholder loader
  if (loading || coinAddress === "") {
    return (
      <main className="grid gap-4 lg:gap-7 place-items-center">
        <Loader message={receipt.loaderChecking} />

        {/* Bottom Section - Background Image */}
        <div className="bottom-0 left-0 w-full h-full mt-4 md:mt-8 lg:mt-12">
          <SmartGIFImage
            src={receipt.coinAccessBanner}
            alt={receipt.proTitle}
            width={4096}
            height={1109}
            className="rounded-xl md:rounded-2xl lg:rounded-3xl"
            objectFit="cover"
            objectPosition="top"
            priority
          />
        </div>
      </main>
    );
  }

  // Fallback message coinAddress not found
  if (error) {
    return (
      <main className="grid gap-4 lg:gap-7 place-items-center">
        <Loader message={receipt.contentFallLoader} />

        <Message
          message1={error}
          message2={receipt.coinMessage2}
          message3={receipt.nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 lg:gap-7 place-items-center">
      {activeAccount?.address && (
        <CheckErc1155
          key={refreshToken}
          activeAddress={activeAccount.address}
          onAccessChange={setHasAccess}
          shouldCheck={receipt.coinsNFTGated}
        />
      )}
      {hasAccess === null && (
        <>
          <Loader message={receipt.loaderChecking} />

          {/* Bottom Section - Background Image */}
          <div className="bottom-0 left-0 w-full h-full mt-4 md:mt-8 lg:mt-12">
            <SmartGIFImage
              src={receipt.coinAccessBanner}
              alt={receipt.proTitle}
              width={4096}
              height={1109}
              className="rounded-xl md:rounded-2xl lg:rounded-3xl"
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
        </>
      )}
      {hasAccess === false && (
        <CoinAccess
          onRedirect={() => router.push(receipt.coinAccessRedirect)}
          message={receipt.coinAccessTitle}
        />
      )}
      {hasAccess === true && coin && (
        <CoinForm
          hasAccess={hasAccess}
          {...coin}
          setRefreshToken={setRefreshToken}
        />
      )}
    </main>
  );
}
