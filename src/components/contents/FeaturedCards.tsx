// /src/components/contents/FeaturedCards.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import {
  coinTitle,
  featuredCoin,
  featuredFree,
  featuredPaid,
  featuredTitle1,
  featuredTitle2,
  freeTitle,
  paidTitle,
} from "@/config/myreceipt";

// Components libraries
import Title from "@/components/sections/ReusableTitle";

export default function FeaturedCards() {
  return (
    <main className="grid gap-4 place-items-center">
      <Title title1={featuredTitle1} title2={featuredTitle2} />
      <div className="w-full grid grid-cols-1 sm:[grid-template-columns:repeat(auto-fit,minmax(0,1fr))] gap-4 sm:gap-8">
        {[
          {
            href: "/free",
            src: featuredFree,
            alt: freeTitle,
          },
          {
            href: "/paid",
            src: featuredPaid,
            alt: paidTitle,
          },
          {
            href: "/coins",
            src: featuredCoin,
            alt: coinTitle,
          },
        ].map(({ href, src, alt }, index) =>
          alt ? (
            <Link href={href} key={index}>
              <button
                type="button"
                className="w-full hover:scale-95 transition-transform duration-300 ease-in-out relative group cursor-pointer">
                {/* Main image */}
                <Image
                  src={src}
                  width={1080}
                  height={1225}
                  alt={alt}
                  priority
                  className="rounded-3xl"
                />
              </button>
            </Link>
          ) : null
        )}
      </div>
    </main>
  );
}
