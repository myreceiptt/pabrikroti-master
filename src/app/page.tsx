// /src/app/page.tsx

"use client";

// External libraries
import { useActiveAccount } from "thirdweb/react";

// Components libraries
import ConnectButtons from "@/components/logins/ConnectButtons";

export default function Home() {
  const activeAccount = useActiveAccount();

  if (activeAccount) {
    return (
      <main className="relative w-screen h-screen overflow-hidden bg-black">
        {/* Halaman IPFS atau HTML legacy */}
        <iframe
          src="/medias/cursor.html"
          title="MyReceipt IPFS"
          className="w-full h-full border-none"></iframe>

        {/* Tombol Connect di kanan bawah */}
        <div className="absolute bottom-4 right-4 z-50">
          <ConnectButtons />
        </div>
      </main>
    );
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Halaman IPFS atau HTML legacy */}
      <iframe
        src="/medias/cursor.html"
        title="MyReceipt IPFS"
        className="w-full h-full border-none"></iframe>

      {/* Tombol Connect di kanan bawah */}
      <div className="absolute bottom-4 right-4 z-50">
        <ConnectButtons />
      </div>
    </main>
  );
}
