// /src/components/fts/CoinPopUp.tsx

// External libraries
import Image from "next/image";
import React from "react";
import { FaXmark } from "react-icons/fa6";

// Blockchain configurations
import hexToRgba, {
  bonImage,
  bonImageAlt,
  bonP1,
  bonP10,
  bonP2,
  bonP3,
  bonP4,
  bonP5,
  bonP6,
  bonP7,
  bonP8,
  bonP9,
  bonTitle,
  bonUlLi1,
  bonUlLi2,
  bonUlLi3,
  bonUlLi4,
  colorBoxIcon,
  colorIcon,
  colorPrimary,
  colorSecondary,
} from "@/config/myreceipt";

interface CoinPopUpProps {
  isOpen: boolean;
  onClose: () => void;
}

const CoinPopUp: React.FC<CoinPopUpProps> = ({ isOpen, onClose }) => {
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
            {bonTitle}
          </h2>
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP1}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP2}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP3}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP4}
          </p>
          <br />
          <ul
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            <li>{bonUlLi1}</li>
            <li>{bonUlLi2}</li>
            <li>{bonUlLi3}</li>
            <li>{bonUlLi4}</li>
          </ul>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP5}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP6}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP7}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP8}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP9}
          </p>
          <br />
          <p
            style={{
              color: colorIcon,
            }}
            className="text-sm font-medium">
            {bonP10}
          </p>
          <br />
          <Image
            src={bonImage}
            alt={bonImageAlt}
            width={747}
            height={747}
            className="rounded-3xl w-full"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default CoinPopUp;
