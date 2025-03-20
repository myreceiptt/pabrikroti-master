// /src/components/contents/AccessMessage.tsx

// External libraries
import Image from "next/image";
import React from "react";

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
        Please get your access by collecting any Harmoni X Bukhari Virtual
        Collectibles at least one edition.
      </h3>
    </div>
    <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
      {/* Collect Button */}
      <button
        type="button"
        className="rounded-lg py-4 px-12 text-back-ground bg-hitam-judul-body text-base font-semibold"
        onClick={onRedirect}>
        Collect Virtual Collectibles!
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
);

export default AccessMessage;
