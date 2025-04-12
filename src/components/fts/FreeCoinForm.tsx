// /src/components/fts/FreeCoinForm.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  balanceOf,
  canClaim,
  decimals,
  getActiveClaimCondition,
  totalSupply,
} from "thirdweb/extensions/erc20";
import { ClaimButton, useActiveAccount, useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { erc20BaseMainnet3 } from "@/config/contracts";
import { loaderChecking } from "@/config/myreceipt";

// Components libraries
import BonDoshModal from "@/components/fts/BonDoshModal";
import Loader from "@/components/sections/ReusableLoader";

const FreeCoinForm: React.FC = () => {
  // All useState condition
  const [isOpen, setIsOpen] = useState(false);
  const [erc20Claimed, setErc20Claimed] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount, setAmount] = useState<string>("0");
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanKirim, setPesanKirim] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  // Use active account wallet
  const activeAccount = useActiveAccount();

  // Retrieves the token decimals
  const { data: tokenDecimals } = useReadContract(decimals, {
    contract: erc20BaseMainnet3,
  });

  // Fetch coin total supply
  const { data: coinSupply } = useReadContract(totalSupply, {
    contract: erc20BaseMainnet3,
  });

  // Fetch active claim condition
  const { data: activeClaimCondition } = useReadContract(
    getActiveClaimCondition,
    {
      contract: erc20BaseMainnet3,
    }
  );

  // Log the result on console
  console.log("Active Claim:", activeClaimCondition);

  // Set claim amount
  useEffect(() => {
    if (
      activeClaimCondition?.quantityLimitPerWallet &&
      tokenDecimals !== undefined
    ) {
      setAmount(
        (
          activeClaimCondition?.quantityLimitPerWallet /
          BigInt(10) ** BigInt(tokenDecimals)
        ).toString()
      );
    }
  }, [activeClaimCondition?.quantityLimitPerWallet, tokenDecimals]);

  // Fetch can claim "result"
  const { data: canClaimErc20 } = useReadContract(canClaim, {
    contract: erc20BaseMainnet3,
    claimer: activeAccount?.address ?? "",
    quantity: amount,
  });

  // Set ERC20 claimed
  useEffect(() => {
    if (canClaimErc20 !== undefined) {
      setErc20Claimed(!canClaimErc20.result);
    }
  }, [canClaimErc20]);

  // Fetch user's owned Coins
  const { data: ownedCoins } = useReadContract(balanceOf, {
    contract: erc20BaseMainnet3,
    address: activeAccount?.address ?? "",
  });

  return (
    <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
      {/* Left Column: Image */}
      <div className="relative">
        {/* Clickable Image */}
        <div
          className="rounded-3xl overflow-hidden w-full cursor-pointer"
          onClick={() => setIsOpen(true)}>
          <Image
            src="/medias/bon-voyage.gif"
            alt="BON VOYAGE Token Illustration"
            width={747}
            height={747}
            className="rounded-3xl w-full"
            unoptimized
          />
        </div>

        {/* Pop-up Modal */}
        <BonDoshModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      {/* Right Column: Form */}
      <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          Claim Your $BON Dosh
        </h1>
        <div className="flex flex-row gap-2">
          <h1 className="text-left text-sm font-medium text-icon-wording">
            by
          </h1>
          <span className="text-3xl leading-6 text-icon-wording">&#9673;</span>
          <h1 className="text-left text-sm font-medium text-icon-wording">
            <Link href="https://voyage.co.id/" target="_blank">
              VOYAGE.CO.ID
            </Link>
          </h1>
        </div>
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Redeem your coins rewards by claiming the $BON Dosh, the ERC20 tokens
          on the {erc20BaseMainnet3.chain.name} blockchain using your Smart
          Account wallet.
        </h2>

        {/* Success or Error Messages */}
        {pesanTunggu && <Loader message={pesanTunggu} />}
        {pesanKirim && <Loader message={pesanKirim} />}
        {pesanSukses && <Loader message={pesanSukses} />}
        {pesanGagal && <Loader message={pesanGagal} />}

        {/* NFT Info */}
        <div className="w-full grid grid-cols-3">
          <h2 className="text-left text-sm font-medium text-icon-wording">
            Max. Claim
          </h2>
          <h2 className="text-left text-sm font-medium text-icon-wording">
            Supply
          </h2>
          <h2 className="text-left text-sm font-medium text-icon-wording">
            Owned
          </h2>

          <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
            {amount}
          </h2>
          {coinSupply && tokenDecimals !== undefined ? (
            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              {`${(
                coinSupply /
                BigInt(10) ** BigInt(tokenDecimals)
              ).toString()}`}
            </h2>
          ) : (
            <Loader message={loaderChecking} />
          )}
          {ownedCoins !== undefined && tokenDecimals !== undefined ? (
            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              {(ownedCoins / BigInt(10) ** BigInt(tokenDecimals)).toString()}
            </h2>
          ) : (
            <Loader message={loaderChecking} />
          )}
        </div>

        {/* Claim Button */}
        <ClaimButton
          unstyled
          className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
            ${
              isProcessing || erc20Claimed
                ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body cursor-pointer"
            }
          `}
          contractAddress={erc20BaseMainnet3.address}
          chain={erc20BaseMainnet3.chain}
          client={client}
          claimParams={{
            type: "ERC20",
            quantity: amount,
          }}
          disabled={Boolean(isProcessing || !amount || erc20Claimed)}
          onClick={() => {
            setIsProcessing(true);
            setPesanTunggu("Processing. Be patient and wait.");
            setPesanSukses(null);
            setPesanGagal(null);
          }}
          onTransactionSent={() => {
            setPesanTunggu(null);
            setPesanKirim("Claiming your $BON Dosh.");
          }}
          onError={(error) => {
            setIsProcessing(false);
            setPesanTunggu(null);
            setPesanKirim(null);
            setPesanGagal(`${error.message}`);
          }}
          onTransactionConfirmed={async () => {
            setIsProcessing(false);
            setPesanKirim(null);
            setPesanSukses("Successful! $BON Dosh claimed.");
            try {
              // Refetch claim condition
              const activeCondition20 = await canClaim({
                contract: erc20BaseMainnet3,
                claimer: activeAccount?.address ?? "",
                quantity: "1",
              });

              if (!activeCondition20.result) {
                setErc20Claimed(true);
              } else {
                setErc20Claimed(false);
              }
            } catch (error) {
              console.error("Error refetching claim condition:", error);
            }
          }}>
          {erc20Claimed ? "Already Claimed" : "Claim Now"}
        </ClaimButton>
        <h4 className="text-left text-xs font-medium text-icon-wording">
          &#42;Maximum 11 supply per owner.
        </h4>
      </div>
    </div>
  );
};

export default FreeCoinForm;
