// /src/components/fts/CoinPopUp.tsx

// External libraries
import Image from "next/image";
import React from "react";
import { FaXmark } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { hexToRgba } from "@/config/utils";

const {
  colorBoxIcon,
  colorIcon,
  colorPrimary,
  colorSecondary,
  popUpImage,
  popUpImageAlt,
  popUpP1,
  popUpP2,
  popUpP3,
  popUpP4,
  popUpP5,
  popUpP6,
  popUpP7,
  popUpP8,
  popUpP9,
  popUpP10,
  popUpP11,
  popUpP12,
  popUpTitle,
  popUpUlLi1,
  popUpUlLi2,
  popUpUlLi3,
  popUpUlLi4,
  popUpUlLi5,
  popUpUlLi6,
} = getActiveReceipt();

interface CoinPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoinPopUp({ isOpen, onClose }: CoinPopUpProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        backgroundColor: hexToRgba(colorSecondary, 0.5),
      }}
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
      {/* Pop-up Box */}
      <div
        style={{
          backgroundColor: colorPrimary,
        }}
        className="rounded-2xl shadow-lg relative w-[89vw] h-[89vh] sm:w-[74vw] sm:h-[74vh] lg:w-[47vw] lg:h-[47vh] flex flex-col">
        {/* Close Button */}
        <button
          style={{
            color: colorIcon,
            backgroundColor: colorBoxIcon,
          }}
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer"
          onClick={onClose}>
          <FaXmark />
        </button>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <h2
            style={{
              color: colorSecondary,
            }}
            className="text-xl font-semibold text-left mb-2">
            {popUpTitle}
          </h2>
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP1}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP2}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP3}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP4}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP5}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP6}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP7}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP8}
          </p>
          <br />
          <ul
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            <li>{popUpUlLi1}</li>
            <li>{popUpUlLi2}</li>
            <li>{popUpUlLi3}</li>
            <li>{popUpUlLi4}</li>
            <li>{popUpUlLi5}</li>
            <li>{popUpUlLi6}</li>
          </ul>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP9}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP10}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP11}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {popUpP12}
          </p>
          <br />
          <Image
            src={popUpImage}
            alt={popUpImageAlt}
            width={747}
            height={747}
            className="rounded-3xl w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
