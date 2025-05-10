// /src/components/fts/CoinDetails.tsx

"use client";

// External libraries
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Chain, getContract } from "thirdweb";
import {
  canClaim,
  decimals,
  getActiveClaimCondition,
} from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { CheckErc1155 } from "@/config/checker";
import { erc20ContractsLaunched } from "@/config/contracts";
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import CoinAccess from "@/components/fts/CoinAccess";
import CoinForm from "@/components/fts/CoinForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

const {
  coinAccessTitle,
  coinMessage1,
  coinMessage2,
  coinSetError,
  coinsConsoleWarn,
  loaderChecking,
  nftsError,
  nftsFailReason,
  nftsMessage3,
  nftsUknownError,
} = getActiveReceipt();

interface CoinData {
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
}

function getCoinAddressFromParams(
  params: ReturnType<typeof useParams>
): string {
  const val = params.coinAddress;
  return Array.isArray(val)
    ? val[0]
    : val ?? "0x0000000000000000000000000000000000000000";
}

export default function CoinDetails() {
  const activeAccount = useActiveAccount();
  const params = useParams();
  const router = useRouter();
  const coinAddress = getCoinAddressFromParams(params);

  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [coin, setCoin] = useState<CoinData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoinDetails = useCallback(async () => {
    if (!coinAddress || !activeAccount?.address) return;

    const erc20ContractLaunched = erc20ContractsLaunched.find(
      (c) => c.address.toLowerCase() === coinAddress.toLowerCase()
    );

    if (!erc20ContractLaunched) {
      setError(coinMessage1);
      setLoading(false);
      return;
    }

    try {
      const erc20Contract = getContract({
        client: erc20ContractLaunched.client,
        address: erc20ContractLaunched.address,
        chain: erc20ContractLaunched.chain,
      });

      const coinDecimals = await decimals({ contract: erc20Contract });

      const coinOwned = await getWalletBalance({
        address: activeAccount.address,
        chain: erc20ContractLaunched.chain,
        client: erc20ContractLaunched.client,
        tokenAddress: erc20ContractLaunched.address,
      });

      const coinOwnedRaw = coinOwned.value ?? 0n;
      const adjustedCoinOwned = Number(coinOwnedRaw) / 10 ** coinDecimals;

      const claimCondition = await getActiveClaimCondition({
        contract: erc20Contract,
      });

      if (!claimCondition || claimCondition.pricePerToken === undefined) {
        setError(coinSetError);
        setLoading(false);
        return;
      }

      const adjustedSupply =
        Number(claimCondition.supplyClaimed) / 10 ** coinDecimals;
      const adjustedMaxClaim =
        Number(claimCondition.maxClaimableSupply) / 10 ** coinDecimals;
      const adjustedPerWallet =
        Number(claimCondition.quantityLimitPerWallet) / 10 ** coinDecimals;

      let currencyDecimals = 18;
      let balanceRaw = 0n;
      const nativeETH = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

      if (claimCondition.currency.toLowerCase() !== nativeETH) {
        const currencyContract = getContract({
          client: erc20ContractLaunched.client,
          address: claimCondition.currency,
          chain: erc20ContractLaunched.chain,
        });

        currencyDecimals = await decimals({ contract: currencyContract });

        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc20ContractLaunched.chain,
          client: erc20ContractLaunched.client,
          tokenAddress: claimCondition.currency,
        });

        balanceRaw = balanceResult.value ?? 0n;
      } else {
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc20ContractLaunched.chain,
          client: erc20ContractLaunched.client,
        });

        currencyDecimals = balanceResult.decimals ?? 18;
        balanceRaw = balanceResult.value ?? 0n;
      }

      const adjustedPrice =
        Number(claimCondition.pricePerToken) / 10 ** currencyDecimals;
      const adjustedBalance = Number(balanceRaw) / 10 ** currencyDecimals;

      let isClaimable = false;
      let reason: string | null = null;

      try {
        const claimStatus = await canClaim({
          contract: erc20Contract,
          quantity: adjustedPerWallet.toString(),
          claimer: activeAccount?.address || "",
        });

        isClaimable = claimStatus.result;
        reason = claimStatus.reason ?? null;
      } catch (innerErr) {
        isClaimable = false;
        reason = nftsFailReason;
        console.warn(
          `${coinsConsoleWarn} ${erc20ContractLaunched.address}`,
          innerErr
        );
      }

      setCoin({
        coinAddress: erc20ContractLaunched.address,
        coinChain: erc20ContractLaunched.chain,
        coinName: erc20ContractLaunched.name,
        coinBy: erc20ContractLaunched.by,
        coinLink: erc20ContractLaunched.link,
        adjustedPrice,
        currency: claimCondition.currency,
        startTimestamp: claimCondition.startTimestamp,
        isClaimable,
        reason,
        adjustedBalance,
        adjustedCoinOwned,
        adjustedSupply,
        adjustedMaxClaim,
        adjustedPerWallet,
      });

      setError(null);
    } catch (err: unknown) {
      setError(coinSetError);
      if (err instanceof Error) {
        console.error(nftsError, err.message);
      } else {
        console.error(nftsUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [coinAddress, activeAccount?.address]);

  useEffect(() => {
    if (coinAddress !== "") fetchCoinDetails();
  }, [refreshToken, fetchCoinDetails, coinAddress]);

  useEffect(() => {
    if (params.coinAddress == null) router.push("/");
  }, [params.coinAddress, router]);

  if (loading || coinAddress === "") {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={loaderChecking} />
      </main>
    );
  }

  if (error) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error}
          message2={coinMessage2}
          message3={nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      {activeAccount?.address && (
        <CheckErc1155
          key={refreshToken}
          activeAddress={activeAccount.address}
          onAccessChange={setHasAccess}
        />
      )}
      {hasAccess === null && <Loader message={loaderChecking} />}
      {hasAccess === false && (
        <CoinAccess
          onRedirect={() => router.push("/")}
          message={coinAccessTitle}
        />
      )}
      {hasAccess === true && coin && (
        <CoinForm
          hasAccess={hasAccess}
          setRefreshToken={setRefreshToken}
          refreshToken={refreshToken}
          {...coin}
        />
      )}
    </main>
  );
}
