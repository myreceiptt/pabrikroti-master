// /src/components/contents/FeaturedCards.tsx

// External libraries
import Link from "next/link";
import Image from "next/image";

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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
        {[
          {
            href: "/free",
            src: featuredFree,
            alt: freeTitle,
          },
          {
            // href: "/paid",
            href: "/paid",
            src: featuredPaid,
            alt: paidTitle,
          },
          {
            href: "/coins",
            src: featuredCoin,
            alt: coinTitle,
          },
        ].map(({ href, src, alt }, index) => (
          <Link href={href} key={index}>
            <button
              type="button"
              className="w-full hover:scale-105 transition-transform duration-300 ease-in-out relative group cursor-pointer">
              {/* Main image */}
              <Image src={src} width={1080} height={1225} alt={alt} priority />
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
