// /src/components/fts/CoinDetails.tsx

"use client";

// External libraries
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Chain, getContract } from "thirdweb";
import {
  canClaim,
  getActiveClaimCondition,
  totalSupply,
} from "thirdweb/extensions/erc20";
import { decimals } from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import CheckErc1155 from "@/config/checker";
import { erc20ContractsLaunched } from "@/config/contracts";
import {
  nftsMessage3,
  loaderChecking,
  coinMessage1,
  nftsFailReason,
  coinsConsoleWarn,
  coinSetError,
  nftsError,
  nftsUknownError,
  coinMessage2,
} from "@/config/myreceipt";

// Components libraries
import CoinForm from "@/components/fts/CoinForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

type CoinData = {
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
};

function getCoinAddressFromParams(
  params: ReturnType<typeof useParams>
): string {
  const val = params.coinAddress;
  return Array.isArray(val)
    ? val[0]
    : val ?? "0x0000000000000000000000000000000000000000";
}

const CoinDetails: React.FC = () => {
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

    // Check coinAddress exist based on erc20ContractsLaunched
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

      // Fetch coin decimals
      const coinDecimals = await decimals({ contract: erc20Contract });

      // Fetch coin supply
      const coinSupply = await totalSupply({
        contract: erc20Contract,
      });

      // Adjust coin supply
      const adjustedSupply = Number(coinSupply) / 10 ** coinDecimals;

      // Fetch user's owned coins
      const coinOwned = await getWalletBalance({
        address: activeAccount.address,
        chain: erc20ContractLaunched.chain,
        client: erc20ContractLaunched.client,
        tokenAddress: erc20ContractLaunched.address,
      });

      const coinOwnedRaw = coinOwned.value ?? 0n;
      const adjustedCoinOwned = Number(coinOwnedRaw) / 10 ** coinDecimals;

      // Fetch claim condition
      const claimCondition = await getActiveClaimCondition({
        contract: erc20Contract,
      });

      if (!claimCondition || claimCondition.pricePerToken === undefined) {
        setError(coinSetError);
        setLoading(false);
        return;
      }

      // Fetch and adjust max. claim
      const adjustedMaxClaim =
        Number(claimCondition.maxClaimableSupply) / 10 ** coinDecimals;

      // Fetch and adjust limit per wallet
      const adjustedPerWallet =
        Number(claimCondition.quantityLimitPerWallet) / 10 ** coinDecimals;

      // Fetch currency and decimals
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

        // Fetch wallet balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc20ContractLaunched.chain,
          client: erc20ContractLaunched.client,
          tokenAddress: claimCondition.currency,
        });

        balanceRaw = balanceResult.value ?? 0n;
      } else {
        // Native token balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc20ContractLaunched.chain,
          client: erc20ContractLaunched.client,
        });

        currencyDecimals = balanceResult.decimals ?? 18;
        balanceRaw = balanceResult.value ?? 0n;
      }

      // Adjust price and balance
      const adjustedPrice =
        Number(claimCondition.pricePerToken) / 10 ** currencyDecimals;
      const adjustedBalance = Number(balanceRaw) / 10 ** currencyDecimals;

      // Fetch can claim status
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
        // Continue if check failed
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

  // Refetch coin details
  useEffect(() => {
    if (coinAddress !== "") {
      fetchCoinDetails();
    }
  }, [refreshToken, fetchCoinDetails, coinAddress]);

  // Ensure coinAddress exists, otherwise redirect
  useEffect(() => {
    if (params.coinAddress == null) {
      router.push("/");
    }
  }, [params.coinAddress, router]);

  // Placeholder loader
  if (loading || coinAddress === "") {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={loaderChecking} />
      </main>
    );
  }

  // Fallback message coinAddress not found
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
      {coin && (
        <CoinForm
          hasAccess={hasAccess}
          setRefreshToken={setRefreshToken}
          refreshToken={refreshToken}
          {...coin}
        />
      )}
    </main>
  );
};

export default CoinDetails;
