// /src/components/contents/CustomCards.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Title from "@/components/sections/ReusableTitle";

export default function CustomCards() {
  const { receipt } = getActiveReceipt();

  return (
    <main className="grid gap-4 lg:gap-7 place-items-center">
      <Title title1={receipt.featuredTitle1} title2={receipt.featuredTitle2} />
      <div className="w-full grid grid-cols-1 sm:[grid-template-columns:repeat(auto-fit,minmax(0,1fr))] gap-4 sm:gap-8">
        {[
          {
            href: receipt.freeLink,
            src: receipt.featuredFree,
            alt: receipt.freeTitle,
          },
          {
            href: receipt.paidLink,
            src: receipt.featuredPaid,
            alt: receipt.paidTitle,
          },
          {
            href: receipt.coinLink,
            src: receipt.featuredCoin,
            alt: receipt.coinTitle,
          },
        ].map(({ href, src, alt }, index) =>
          alt ? (
            <Link href={href} key={index}>
              <button
                type="button"
                aria-label={`${receipt.featuredAria} ${alt}`}
                className="w-full hover:scale-95 transition-transform duration-300 ease-in-out relative group cursor-pointer"
              >
                {/* Main image */}
                <Image
                  src={src}
                  width={1080}
                  height={1225}
                  alt={alt}
                  priority
                  className="rounded-2xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl"
                />
              </button>
            </Link>
          ) : null,
        )}
      </div>
    </main>
  );
}
