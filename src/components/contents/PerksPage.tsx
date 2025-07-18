// /src/components/contents/PerksPage.tsx

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Title from "@/components/sections/ReusableTitle";

export default function PerksPage() {
  const { receipt } = getActiveReceipt();

  // Daftar image dan link
  const imageLinks = [
    {
      image: "/medias/card perks-1.png",
      name: "Book Smart. Sage Big.",
      text: "Get instant discount for your next journey.",
    },
    {
      image: "/medias/card perks-2.png",
      name: "Escape in Style.",
      text: "Unbeatable packages for top destinations.",
    },
    {
      image: "/medias/card perks-3.png",
      name: "Group Tour Deals.",
      text: "Travel together, save more.",
    },
    // Tambahkan lebih banyak image-link pair di sini...
  ];

  return (
    <main className="grid gap-4 lg:gap-6 place-items-center">
      <Title title1="Deep Dive:" title2="NFTs Research Hub" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {imageLinks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>
            <div
              style={{
                borderColor: receipt.colorTertiary,
                background: receipt.colorSecondary,
              }}
              className="w-full grid grid-cols-1 gap-4 p-4 border rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl">
              <Image
                src={item.image}
                alt={`Image ${index + 1}`}
                width={755}
                height={545}
                className="rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl w-full hover:scale-95 transition-transform duration-300 ease-in-out"
              />

              <div className="grid grid-cols-1 gap-2">
                <h2
                  style={{ color: receipt.colorPrimer }}
                  className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold line-clamp-2">
                  {item.name}
                </h2>
                <h3>{item.text}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
