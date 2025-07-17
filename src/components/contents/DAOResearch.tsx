// /src/components/contents/DAOResearch.tsx

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Title from "@/components/sections/ReusableTitle";

export default function DAOResearch() {
  const { receipt } = getActiveReceipt();

  // Daftar image dan link
  const imageLinks = [
    {
      image: "/medias/dao-card-1.png",
      name: "Simulating an Educational DAO: Building Decentralized Governance in the iBLOOMING Ecosystem",
      link: "/medias/dao-pdf-1.pdf",
    },
    {
      image: "/medias/dao-card-2.png",
      name: "Governance Begins with Identity: Exploring DAO Models with ERC-725/735 Identity Layers",
      link: "/medias/dao-pdf-2.pdf",
    },
    {
      image: "/medias/dao-card-3.png",
      name: "Modular Governance: Structuring DAO Infrastructure with the Web3 Stack Protocol",
      link: "/medias/dao-pdf-3.pdf",
    },
    // Tambahkan lebih banyak image-link pair di sini...
  ];

  return (
    <main className="grid gap-4 place-items-center">
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
              <Link href={item.link} target="_blank">
                <Image
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  width={755}
                  height={545}
                  className="rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl w-full hover:scale-95 transition-transform duration-300 ease-in-out"
                />
              </Link>
              <div className="grid grid-cols-1 gap-2">
                <h2
                  style={{ color: receipt.colorPrimer }}
                  className="text-left text-base sm:text-xs md:text-sm lg:text-base font-semibold line-clamp-2">
                  {item.name}
                </h2>
              </div>

              <Link href={item.link} target="_blank">
                <button
                  style={{
                    color: receipt.colorSecondary,
                    border: "2px solid",
                    borderColor: receipt.colorTertiary,
                    backgroundColor: receipt.colorSekunder,
                  }}
                  className="w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold hover:opacity-80 transition-all cursor-pointer">
                  Download PDF
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
