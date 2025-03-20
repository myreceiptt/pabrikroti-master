// /src/components/contents/FeaturedCards.tsx

// External libraries
import Link from "next/link";
import Image from "next/image";

// Blockchain configurations
import {
  featuredTitle1,
  featuredTitle2,
  featuredPaid,
  paidTitle,
  featuredFree,
  freeTitle,
  featuredCoin,
  coinTitle,
} from "@/config/osloid";

export default function FeaturedCards() {
  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-full flex flex-col gap-2 sm:items-start items-center">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          {featuredTitle1}
        </h1>
        <h2 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          {featuredTitle2}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            href: "/paid",
            src: featuredPaid,
            alt: paidTitle,
          },
          {
            href: "/free",
            src: featuredFree,
            alt: freeTitle,
          },
          {
            href: "/redeem",
            src: featuredCoin,
            alt: coinTitle,
          },
        ].map(({ href, src, alt }, index) => (
          <Link href={href} key={index}>
            <button
              type="button"
              className="w-full hover:scale-105 transition-transform duration-300 ease-in-out relative group">
              {/* Main image */}
              <Image
                src={src}
                width={640}
                height={725}
                alt={alt}
                priority
              />
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
