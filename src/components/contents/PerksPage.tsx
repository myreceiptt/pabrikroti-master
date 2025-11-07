// /src/components/contents/PerksPage.tsx

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import { CheckErc1155, CheckErc20 } from "@/config/checker";
import Title from "@/components/sections/ReusableTitle";

export default function PerksPage() {
  const { receipt } = getActiveReceipt();
  const activeAccount = useActiveAccount();

  const accessMode = receipt.contentAccessMode;

  // === Checker result states ===
  const [hasErc1155, setHasErc1155] = useState<boolean | null>(null);
  const [hasErc20, setHasErc20] = useState<boolean | null>(null);

  // Determine access based on selected mode
  let hasAccess = false;
  if (accessMode === "AND") {
    hasAccess = hasErc1155 === true && hasErc20 === true;
  } else if (accessMode === "OR") {
    hasAccess = hasErc1155 === true || hasErc20 === true;
  } else if (accessMode === "RELAXED") {
    hasAccess = !(hasErc1155 === false && hasErc20 === false);
  }

  // === Determine Button ===
  let buttonLabel = receipt.coinNoAccess;
  let buttonDisabled = true;

  if (hasAccess === true) {
    buttonLabel = receipt.contentButtonLabel;
    buttonDisabled = true; // Tetap disabled karena belum tersedia
  }

  // === Content Data ===
  const imageLinks = [
    {
      image: receipt.contentImage1, // Perk Image 1
      name: receipt.contentName1, // Perk Name 1
      text: receipt.contentText1, // Perk Text 1
    },
    {
      image: receipt.contentImage2, // Perk Image 2
      name: receipt.contentName2, // Perk Name 2
      text: receipt.contentText2, // Perk Text 2
    },
    {
      image: receipt.contentImage3, // Perk Image 3
      name: receipt.contentName3, // Perk Name 3
      text: receipt.contentText3, // Perk Text 3
    },
  ];

  return (
    <main className="grid gap-4 lg:gap-7 place-items-center">
      {/* Checker Components */}
      {activeAccount?.address && (
        <>
          <CheckErc1155
            activeAddress={activeAccount.address}
            onAccessChange={setHasErc1155}
            shouldCheck={receipt.contentNFTGated}
          />
          <CheckErc20
            activeAddress={activeAccount.address}
            onAccessChange={setHasErc20}
            shouldCheck={receipt.contentFTGated}
          />
        </>
      )}

      {/* Title */}
      <Title title1={receipt.contentTitle1} title2={receipt.contentTitle2} />

      {/* Grid of Perks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {imageLinks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div
              style={{
                borderColor: receipt.colorTertiary,
                background: receipt.colorSecondary,
              }}
              className="w-full grid grid-cols-1 gap-4 p-4 border rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl"
            >
              <Image
                src={hasAccess ? item.image : receipt.contentNoAccess}
                alt={`Perk Image ${index + 1}`}
                width={755}
                height={545}
                className="rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl w-full hover:scale-95 transition-transform duration-300 ease-in-out"
              />

              <div className="grid grid-cols-1 gap-2">
                <h2
                  style={{ color: receipt.colorPrimer }}
                  className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold line-clamp-1"
                >
                  {item.name}
                </h2>
                <h3 className="text-left text-base sm:text-xs md:text-sm lg:text-base line-clamp-1">
                  {item.text}
                </h3>
              </div>

              <button
                title={buttonLabel}
                disabled={buttonDisabled}
                style={{
                  color: receipt.colorSecondary,
                  border: "2px solid",
                  borderColor: receipt.colorTertiary,
                  backgroundColor: receipt.colorSekunder,
                  opacity: 0.5,
                }}
                className="w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all cursor-default"
              >
                {buttonLabel}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
