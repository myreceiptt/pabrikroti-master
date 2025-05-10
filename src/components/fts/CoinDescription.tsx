// /src/components/fts/CoinDescription.tsx

// External libraries
import Link from "next/link";
import React, { useState } from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const {
  colorIcon,
  colorSecondary,
  nftEndhonesa,
  nftMeMoRa,
  nftReadLess,
  nftReadMore,
} = getActiveReceipt();

interface CoinDescriptionProps {
  description: string;
  address: string;
}

export default function CoinDescription({
  description,
  address,
}: CoinDescriptionProps) {
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
    <>
      <div
        style={{
          color: colorIcon,
        }}
        className="w-full flex flex-col items-start gap-2">
        {isExpanded
          ? paragraphs.map((line, index) => (
              <p key={index} className="text-left text-sm font-medium">
                {line}
              </p>
            ))
          : limitedParagraphs.map((line, index) => (
              <p key={index} className="text-left text-sm font-medium">
                {line}
                {index === limitedParagraphs.length - 1 &&
                  isLongDescription &&
                  " ... "}
              </p>
            ))}
      </div>

      {isLongDescription && (
        <div className="w-full flex flex-col items-end gap-2 mb-4">
          {isExpanded && (
            <>
              <Link
                href="#"
                title={`https://memora.voyage.co.id/[chain-name]/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colorSecondary,
                }}
                className="text-xs font-medium hover:underline cursor-pointer">
                {nftMeMoRa}
              </Link>
              <Link
                href="#"
                title={`https://store.endhonesa.com/digital/[chain-name]/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: colorSecondary,
                }}
                className="text-xs font-medium hover:underline cursor-pointer">
                {nftEndhonesa}
              </Link>
            </>
          )}

          {/* Read More / Read Less */}
          <p
            style={{
              color: colorSecondary,
            }}
            className="text-xs font-medium hover:underline cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? nftReadLess : nftReadMore}
          </p>
        </div>
      )}
    </>
  );
}
