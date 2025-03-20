// /src/components/contents/FeaturedCards.tsx

// External libraries
import Link from "next/link";
import Image from "next/image";

export default function FeaturedCards() {
  return (
    <main className="grid gap-4 place-items-center">
      <div className="w-full flex flex-col gap-2 sm:items-start items-center px-0 sm:px-4">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          Bukhari Islamic:
        </h1>
        <h2 className="text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-hitam-judul-body">
          Art Virtual Gallery
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {[
          {
            href: "/paid",
            // src: "/images/bukhari-fa-paid.png",
            src: "/images/bukhari-fa-login-02-17.png",
            alt: "Affordable Exclusive Digital Souvenir",
          },
          {
            href: "/free",
            src: "/images/bukhari-fa-free.png",
            alt: "Free Exclusive Digital Souvenir",
          },
          {
            href: "/redeem",
            src: "/images/bukhari-fa-redeem.png",
            alt: "Redeem Priceless Coins Reward",
          },
        ].map(({ href, src, alt }, index) => (
          <Link href={href} key={index}>
            <button
              type="button"
              className="w-full p-2 rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out relative group">
              {/* Main image */}
              <Image
                src={src}
                width={828}
                height={916}
                alt={alt}
                priority
                className="rounded-3xl"
              />
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
