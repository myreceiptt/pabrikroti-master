import type { NextConfig } from "next";
const isTurbopack = process.env.NEXT_RUNTIME === "edge"; // Atau pakai flag custom
const nextConfig: NextConfig = {
  // ✅ Tambahkan matcher di sini jika pakai middleware.ts
  matcher: [
    "/merchandise",
    "/perpustakaan",
    "/bukabersama",
    "/kolektibel",
    "/kolektibel/8",
  ],

  // ✅ Turbopack is now stable — official config
  turbopack: {
    // Tambahkan custom rules di sini kalau diperlukan nanti
  },

  ...(isTurbopack
    ? {}
    : {
        // ✅ Webpack workaround (masih dibutuhkan oleh WalletConnect, dll.)
        // ✅ Keeps Webpack fixes (if needed)
        // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
        webpack: (config) => {
          config.externals.push("pino-pretty", "lokijs", "encoding");
          return config;
        },
      }),
};

export default nextConfig;
