// /src/components/contents/AccessMessage.tsx

// External libraries
import Image from "next/image";
import React from "react";

import {
  titlePro,
  accessMessage2,
  collectButton,
  bannerContent,
} from "@/config/osloid";

interface AccessMessageProps {
  message: string;
  onRedirect: () => void;
}

const AccessMessage: React.FC<AccessMessageProps> = ({
  message,
  onRedirect,
}) => (
  <>
    {/* Top Section - Content Box */}
    <div className="w-full flex flex-col gap-2 items-center justify-center text-center px-0 sm:px-4">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-hitam-judul-body">
        {message}
      </h2>
      <h3 className="text-center text-sm font-medium text-icon-wording">
        {accessMessage2}
      </h3>
    </div>
    <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
      {/* Collect Button */}
      <button
        type="button"
        className="rounded-lg py-4 px-12 text-back-ground bg-hitam-judul-body text-base font-semibold cursor-pointer"
        onClick={onRedirect}>
        {collectButton}
      </button>
    </div>

    {/* Bottom Section - Background Image */}
    <div className="bottom-0 left-0 w-full h-full">
      <Image
        src={bannerContent}
        alt={titlePro}
        width={4096}
        height={1109}
        objectFit="cover"
        objectPosition="top"
        priority
      />
    </div>
  </>
);

export default AccessMessage;
