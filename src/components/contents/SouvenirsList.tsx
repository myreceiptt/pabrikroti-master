// /src/components/contents/SouvenirList.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { ThirdwebContract } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc1155";
import { MediaRenderer, useReadContract } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { bukhariOpenDoor } from "@/config/contracts";

type SouvenirsListProps = {
  title1: string;
  title2: string;
  tokenIds: string[];
};

const INITIAL_ITEMS = 6; // Initial NFTs displayed
const ITEMS_PER_LOAD = 3; // NFTs to load/unload per button click

const SouvenirsList: React.FC<SouvenirsListProps> = ({
  title1,
  title2,
  tokenIds,
}) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const listRef = useRef<HTMLDivElement>(null);

  // Scrolls smoothly when new NFTs are loaded
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [visibleCount]);

  // Load more NFTs
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, tokenIds.length));
  };

  // Unload NFTs
  const handleUnload = () => {
    setVisibleCount((prev) => Math.max(prev - ITEMS_PER_LOAD, INITIAL_ITEMS));
  };

  return (
    <main className="grid gap-4 place-items-center">
      {tokenIds.length > 0 ? (
        <>
          <div className="w-full flex flex-col gap-2 sm:items-start items-center px-0 sm:px-4">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
              {title1}
            </h1>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
              {title2}
            </h2>
          </div>

          {/* NFT List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" ref={listRef}>
            {tokenIds.slice(0, visibleCount).map((tokenId, index) => (
              <motion.div
                key={tokenId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}>
                <NFTLister dropContract={bukhariOpenDoor} tokenId={tokenId} />
              </motion.div>
            ))}
          </div>

          {/* Lazy Load Controls */}
          {tokenIds.length > INITIAL_ITEMS ? (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={handleUnload}
                disabled={visibleCount === INITIAL_ITEMS}
                className="px-4 py-2 text-back-ground bg-hitam-judul-body text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95">
                Previous
              </button>

              <button
                onClick={handleLoadMore}
                disabled={visibleCount >= tokenIds.length}
                className="px-4 py-2 text-back-ground bg-hitam-judul-body text-base font-semibold rounded-lg disabled:opacity-50 transition-all hover:scale-105 active:scale-95">
                Next
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          {/* Top Section - Content Box */}
          <div className="w-full flex flex-col gap-2 items-center justify-center text-center px-0 sm:px-4">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-hitam-judul-body">
              No data available.
            </h2>
            <h3 className="text-center text-sm font-medium text-icon-wording">
              There is no data available. Please try using the search form or go
              back to the home page and start over.
            </h3>
          </div>
          <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
            {/* Home Page Button */}
            <button
              type="button"
              className="rounded-lg py-4 px-12 text-back-ground bg-hitam-judul-body text-base font-semibold">
              Go Back to Home Page!
            </button>
          </div>

          {/* Bottom Section - Background Image */}
          <div className="bottom-0 left-0 w-full h-full">
            <Image
              src="/images/bukhari-fa-login-02-12.png"
              alt="Background Image"
              width={1430}
              height={541}
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
        </>
      )}
    </main>
  );
};

type NFTListerProps = {
  dropContract: ThirdwebContract;
  tokenId: string;
};

const NFTLister: React.FC<NFTListerProps> = ({ dropContract, tokenId }) => {
  const tokenIdNumber = parseInt(tokenId, 10);
  const tokenIdBigInt = BigInt(tokenId);

  const { data: nft, isLoading } = useReadContract(getNFT, {
    contract: dropContract,
    tokenId: tokenIdBigInt,
  });

  // Calculate Price: 0 for 0-22, $4.74 for others
  const price = tokenIdNumber >= 23 ? "x.xx" : "0.00";

  return (
    <div className="w-full grid grid-cols-1 gap-4 p-4 border border-solid border-border-tombol rounded-3xl">
      {isLoading ? (
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Loading...
        </h2>
      ) : nft ? (
        <>
          <Link href={`/token/${tokenId}`}>
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
          </Link>
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-left text-base font-semibold text-hitam-judul-body">
              {nft?.metadata?.name || "Unknown NFT"}
            </h2>
            <h2 className="text-left text-sm font-medium text-icon-wording">
              Price ${price}
            </h2>
          </div>
          <Link href={`/token/${tokenId}`}>
            <button className="w-full rounded-lg p-2 text-back-ground bg-hitam-judul-body text-base font-semibold">
              {/* {Number(price) > 0 ? "Coming Soon" : "Collect Now"} */}
              {Number(price) !== 0 ? "Coming Soon" : "Collect Now"}
            </button>
          </Link>
        </>
      ) : (
        <h2 className="text-left text-sm font-medium text-icon-wording">
          No data available.
        </h2>
      )}
    </div>
  );
};

export default SouvenirsList;
