// /src/components/fts/CoinPopUp.tsx

// External libraries
import Image from "next/image";
import React from "react";
import { FaXmark } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { hexToRgba } from "@/config/utils";

interface CoinPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoinPopUp({ isOpen, onClose }: CoinPopUpProps) {
  const { receipt } = getActiveReceipt();

  if (!isOpen) return null;

  return (
    <div
      style={{
        backgroundColor: hexToRgba(receipt.colorSekunder, 0.5),
      }}
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
      {/* Pop-up Box */}
      <div
        style={{
          backgroundColor: receipt.colorSecondary,
        }}
        className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg relative w-[89vw] h-[89vh] sm:w-[74vw] sm:h-[74vh] lg:w-[47vw] lg:h-[47vh] flex flex-col">
        {/* Close Button */}
        <button
          style={{
            color: receipt.colorSecondary,
            backgroundColor: receipt.colorSekunder,
          }}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer"
          onClick={onClose}>
          <FaXmark />
        </button>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <h2
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-xl font-semibold text-left mb-2">
            {receipt.popUpTitle}
          </h2>
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP1}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP2}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP3}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP4}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP5}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP6}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP7}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP8}
          </p>
          <br />
          <ul
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            <li>{receipt.popUpUlLi1}</li>
            <li>{receipt.popUpUlLi2}</li>
            <li>{receipt.popUpUlLi3}</li>
            <li>{receipt.popUpUlLi4}</li>
            <li>{receipt.popUpUlLi5}</li>
            <li>{receipt.popUpUlLi6}</li>
          </ul>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP9}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP10}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP11}
          </p>
          <br />
          <p
            style={{
              color: receipt.colorPrimer,
            }}
            className="text-sm font-medium">
            {receipt.popUpP12}
          </p>
          <br />
          <Image
            src={receipt.popUpImage}
            alt={receipt.popUpImageAlt}
            width={747}
            height={747}
            className="rounded-xl md:rounded-2xl lg:rounded-3xl w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
