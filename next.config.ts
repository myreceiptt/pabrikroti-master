import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Turbopack is now stable — official config
  turbopack: {
    // Tambahkan custom rules di sini kalau diperlukan nanti
  },

  // ✅ Webpack workaround (masih dibutuhkan oleh WalletConnect, dll.)
  // ✅ Keeps Webpack fixes (if needed)
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  // webpack: (config) => {
  //   config.externals.push("pino-pretty", "lokijs", "encoding");
  //   return config;
  // },
};

export default nextConfig;
