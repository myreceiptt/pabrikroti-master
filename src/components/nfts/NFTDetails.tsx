// /src/components/nfts/NFTDetails.tsx

"use client";

// External libraries
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { getContract } from "thirdweb";
import {
  canClaim,
  getClaimConditionById,
  nextTokenIdToMint,
  totalSupply,
} from "thirdweb/extensions/erc1155";
import { decimals } from "thirdweb/extensions/erc20";
import { useActiveAccount, useReadContract } from "thirdweb/react";
import { getWalletBalance } from "thirdweb/wallets";

// Blockchain configurations
import { erc1155Launched } from "@/config/contracts";
import {
  loaderChecking,
  nftMessage1,
  nftMessage2,
  nftSetError,
  nftsConsoleWarn,
  nftsError,
  nftsFailReason,
  nftsMessage3,
  nftsUknownError,
} from "@/config/myreceipt";

// Components libraries
import NFTForm from "@/components/nfts/NFTForm";
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

type NFTData = {
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
};

function getNFTIdFromParams(params: ReturnType<typeof useParams>): bigint {
  const val = params.idNFT;
  return BigInt(Array.isArray(val) ? val[0] : val ?? "0");
}

const NFTDetails: React.FC = () => {
  const activeAccount = useActiveAccount();
  const params = useParams();
  const router = useRouter();
  const nftId = getNFTIdFromParams(params);

  // Ensure state variables are properly declared
  const [refreshToken, setRefreshToken] = useState(Date.now());
  const [nft, setNFT] = useState<NFTData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch next token ID to mint
  const { data: nextNFTId } = useReadContract(nextTokenIdToMint, {
    contract: erc1155Launched,
  });

  // Fetch any data
  const fetchNFTDetails = useCallback(async () => {
    if (!activeAccount?.address) return;

    // Check nftId exist based on nextNFTId
    if (nextNFTId !== undefined && nftId >= nextNFTId) {
      setError(nftMessage1);
      setLoading(false);
      return;
    }

    try {
      // Fetch total supply
      const nftSupply = await totalSupply({
        contract: erc1155Launched,
        id: nftId,
      });

      // Fetch claim condition
      const claimCondition = await getClaimConditionById({
        contract: erc1155Launched,
        tokenId: nftId,
        conditionId: 0n,
      });

      // Fetch currency and decimals
      let currencyDecimals = 18;
      let balanceRaw = 0n;
      const nativeETH = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

      if (claimCondition.currency.toLowerCase() !== nativeETH) {
        const currencyContract = getContract({
          client: erc1155Launched.client,
          address: claimCondition.currency,
          chain: erc1155Launched.chain,
        });

        currencyDecimals = await decimals({ contract: currencyContract });

        // Fetch currency balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc1155Launched.chain,
          client: erc1155Launched.client,
          tokenAddress: claimCondition.currency,
        });

        balanceRaw = balanceResult.value ?? 0n;
      } else {
        // Native currency balance
        const balanceResult = await getWalletBalance({
          address: activeAccount.address,
          chain: erc1155Launched.chain,
          client: erc1155Launched.client,
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
          contract: erc1155Launched,
          tokenId: nftId,
          quantity: 1n,
          claimer: activeAccount.address,
        });

        isClaimable = claimStatus.result;
        reason = claimStatus.reason ?? null;
      } catch (innerErr) {
        // Continue if check failed
        isClaimable = false;
        reason = nftsFailReason;
        console.warn(`${nftsConsoleWarn} ${nftId}`, innerErr);
      }

      setNFT({
        nftId,
        nftIdString: nftId.toString(),
        adjustedPrice,
        currency: claimCondition.currency,
        startTimestamp: claimCondition.startTimestamp,
        isClaimable,
        reason,
        supply: nftSupply,
        maxClaim: claimCondition.maxClaimableSupply,
        perWallet: claimCondition.quantityLimitPerWallet,
        adjustedBalance,
      });
    } catch (err: unknown) {
      setError(nftSetError);
      if (err instanceof Error) {
        console.error(nftsError, err.message);
      } else {
        console.error(nftsUknownError, err);
      }
    } finally {
      setLoading(false);
    }
  }, [nextNFTId, nftId, activeAccount?.address]);

  // Refetch NFT details
  useEffect(() => {
    if (nextNFTId !== undefined) {
      fetchNFTDetails();
    }
  }, [refreshToken, fetchNFTDetails, nextNFTId]);

  // Ensure tokenId exists, otherwise redirect
  useEffect(() => {
    if (params.idNFT == null) {
      router.push("/");
    }
  }, [params.idNFT, router]);

  // Placeholder loader
  if (loading) {
    return (
      <main className="grid gap-4 place-items-center">
        <Loader message={loaderChecking} />
      </main>
    );
  }

  // Fallback message nftId not found
  if (error) {
    return (
      <main className="grid gap-4 place-items-center">
        <Message
          message1={error}
          message2={nftMessage2}
          message3={nftsMessage3}
        />
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      {nft && (
        <NFTForm
          dropContract={erc1155Launched}
          setRefreshToken={setRefreshToken}
          {...nft}
        />
      )}
    </main>
  );
};

export default NFTDetails;
