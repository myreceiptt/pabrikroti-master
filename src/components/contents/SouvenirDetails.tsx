// /src/components/contents/SouvenirDetails.tsx

"use client";

// External libraries
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getNFT, balanceOf } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariOpenDoor } from "@/config/contracts";
import { base } from "@/config/rantais";

const SouvenirDetails: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const smartAccount = useActiveAccount();

  const tokenId = params.tokenId;
  const tokenIdString = Array.isArray(tokenId) ? tokenId[0] : tokenId ?? "0";
  const tokenIdBigInt = BigInt(tokenIdString);
  const tokenIdNumber = parseInt(tokenIdString, 10);

  // Ensure state variables are properly declared
  const [isProcessing, setIsProcessing] = useState(false);
  const [pesanTunggu, setPesanTunggu] = useState<string | null>(null);
  const [pesanSukses, setPesanSukses] = useState<string | null>(null);
  const [pesanGagal, setPesanGagal] = useState<string | null>(null);

  // Fetch NFT metadata
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: bukhariOpenDoor,
    tokenId: tokenIdBigInt,
  });

  // Fetch user's owned NFTs
  const { data: ownedNfts } = useReadContract(balanceOf, {
    contract: bukhariOpenDoor,
    owner: smartAccount?.address ?? "",
    tokenId: tokenIdBigInt,
    queryOptions: { enabled: !!smartAccount?.address && !!tokenId },
  });

  // Calculate price (fixed values: 0.00 for 0-22, 4.74 for 23+)
  const calculatePrice = () => {
    if (isNaN(tokenIdNumber)) return "0.00";

    return tokenIdNumber >= 23 ? "x.xx" : "0.00";
  };

  // Ensure tokenId exists, otherwise redirect
  useEffect(() => {
    if (!tokenId) {
      router.push("/");
    }
  }, [tokenId, router]);

  if (!tokenId || isNftLoading) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Loading...
        </h2>
      </main>
    );
  }

  // Configure `payModal` to accept USDC
  const payModalConfig = {
    supportedTokens: {
      [base.id]: [
        {
          address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          name: "USD Coin",
          symbol: "USDC",
          icon: "/erc20-icons/usdc.png",
        },
      ],
    },
  };

  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start">
        {/* MediaRenderer (Left Column) */}
        <div className="rounded-3xl overflow-hidden w-full">
          {nft ? (
            <MediaRenderer
              client={client}
              src={
                nft?.metadata?.image ||
                "/images/bukhari-virtual-collectibles.gif"
              }
              alt={
                nft?.metadata?.name ? `${nft.metadata.name} NFT` : "NFT Image"
              }
              className="rounded-3xl w-full"
            />
          ) : (
            <h2 className="text-left text-sm font-medium text-icon-wording">
              No data available.
            </h2>
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 lg:gap-4 items-start justify-center h-full">
          {/* Title */}
          <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
            {nft?.metadata.name || "Souvenir Details"}
          </h1>

          <div className="flex flex-row gap-2">
            <h1 className="text-left text-sm font-medium text-icon-wording">
              by
            </h1>
            <span className="text-3xl leading-6 text-icon-wording">
              &#9673;
            </span>
            <h1 className="text-left text-sm font-medium text-icon-wording">
              <Link href="https://bukharicreative.group/" target="_blank">
                Bukhari Creative Group
              </Link>
            </h1>
          </div>

          {/* Description with Expand/Collapse */}
          <NFTDescription
            description={nft?.metadata.description ?? ""}
            tokenIdNumber={tokenIdNumber}
          />

          {/* Success or Error Messages */}
          {pesanTunggu && (
            <h4 className="text-left text-sm font-medium text-icon-wording">
              {pesanTunggu}
            </h4>
          )}
          {pesanSukses && (
            <h4 className="text-left text-sm font-medium text-icon-wording">
              {pesanSukses}
            </h4>
          )}
          {pesanGagal && (
            <h4 className="text-left text-sm font-medium text-icon-wording">
              {pesanGagal}
            </h4>
          )}

          {/* NFT Info */}
          <div className="w-full grid grid-cols-3">
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Price
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Edition
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Owned
            </h2>

            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              ${calculatePrice()}
            </h2>
            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              1899
            </h2>
            <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-hitam-judul-body">
              {ownedNfts ? ownedNfts.toString() : "0"}
            </h2>
          </div>

          {/* Claim Button */}
          <ClaimButton
            unstyled
            className={`w-full rounded-lg p-2 text-base font-semibold transition-colors duration-300 ease-in-out
              ${
                isProcessing || (ownedNfts && Number(ownedNfts) >= 2)
                  ? "border-2 border-solid border-border-tombol bg-back-ground text-hitam-judul-body"
                  : "border-2 border-solid border-back-ground text-back-ground bg-hitam-judul-body"
              }
            `}
            contractAddress={bukhariOpenDoor.address}
            payModal={payModalConfig}
            chain={bukhariOpenDoor.chain}
            client={client}
            claimParams={{
              type: "ERC1155",
              quantity: 1n,
              tokenId: tokenIdBigInt,
            }}
            // disabled={Boolean(
            //   isProcessing || (ownedNfts && Number(ownedNfts) >= 2)
            // )}
            disabled={Boolean(
              isProcessing ||
                (ownedNfts && Number(ownedNfts) >= 2) ||
                // Number(calculatePrice()) > 0 // 🔥 Disable if price is greater than 0
                Number(calculatePrice()) !== 0 // 🔥 Disable if price is greater than 0
            )}
            onClick={() => {
              setIsProcessing(true);
              setPesanTunggu("Bismillah! Be patient and wait.");
              setPesanSukses(null);
              setPesanGagal(null);
            }}
            onTransactionSent={() => {
              setIsProcessing(true);
              setPesanTunggu("Bismillah! Be patient and wait.");
              setPesanSukses(null);
              setPesanGagal(null);
            }}
            onError={(error) => {
              setPesanGagal(`${error.message}`);
              setPesanSukses(null);
              setIsProcessing(false);
              setPesanTunggu(null);
            }}
            onTransactionConfirmed={async () => {
              setPesanSukses("Alhamdulillah! Successful!");
              setPesanGagal(null);
              setIsProcessing(false);
              setPesanTunggu(null);
            }}>
            {/* {Number(calculatePrice()) > 0 ? "Coming Soon" : "Collect Now"} */}
            {Number(calculatePrice()) !== 0 ? "Coming Soon" : "Collect Now"}
          </ClaimButton>
          <h4 className="text-left text-xs font-medium text-icon-wording">
            &#42;Maximum 2 editions per owner.
          </h4>
        </div>
      </div>
    </main>
  );
};

/** Handles NFT Description Expand/Collapse */
const NFTDescription: React.FC<{
  description: string;
  tokenIdNumber: number;
}> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = description
    .split("\n")
    .filter((line) => line.trim() !== "");
  const words = description.split(" ");
  const limitedText = words.slice(0, 27).join(" ");
  const limitedParagraphs = limitedText
    .split("\n")
    .filter((line) => line.trim() !== "");

  const isLongDescription = words.length > 27;

  return (
    <div className="text-left text-sm font-medium text-icon-wording">
      {isExpanded
        ? paragraphs.map((line, index) => (
            <p key={index} className="mb-4">
              {line}
            </p>
          ))
        : limitedParagraphs.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
              {index === limitedParagraphs.length - 1 &&
                isLongDescription &&
                " ... "}
            </p>
          ))}
      {isLongDescription && (
        <div className="flex justify-end items-center gap-4 pt-2 mb-2">
          {isExpanded && (
            <>
              {/* <Link
                href={`https://opensea.io/assets/base/0xc226653e9c043674a48c6b7be33526771c34389a/${tokenIdNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-hitam-judul-body hover:underline cursor-pointer">
                View on OpenSea
              </Link> */}

              {/* <Link
                href={`https://rarible.com/token/base/0xc226653e9c043674a48c6b7be33526771c34389a:${tokenIdNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-hitam-judul-body hover:underline cursor-pointer">
                View on Rarible
              </Link> */}
            </>
          )}

          {/* Read More / Read Less */}
          <p
            className="text-xs font-medium text-hitam-judul-body hover:underline cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Read Less" : "Read More"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SouvenirDetails;
