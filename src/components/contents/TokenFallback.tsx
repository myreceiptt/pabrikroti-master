// /src/components/contents/TokenFallback.tsx

"use client";

// External libraries
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useActiveAccount } from "thirdweb/react";

const TokenFallback: React.FC = () => {
  const router = useRouter();
  const smartAccount = useActiveAccount();

  if (!smartAccount?.address) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Please log in first.
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      {/* Top Section - Content Box */}
      <div className="w-full flex flex-col gap-2 items-center justify-center text-center px-0 sm:px-4">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-hitam-judul-body">
          Invalid token page!
        </h2>
        <h3 className="text-center text-sm font-medium text-icon-wording">
          Please enter a valid token ID in the URL or go back to the home page
          and start over.
        </h3>
      </div>
      <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
        {/* Collect Button */}
        <button
          type="button"
          className="rounded-lg py-4 px-12 text-back-ground bg-hitam-judul-body text-base font-semibold"
          onClick={() => router.push("/")}>
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
    </main>
  );
};

export default TokenFallback;
