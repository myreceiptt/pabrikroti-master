/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Fix: Turbopack requires an object, not just `true`
  experimental: {
    turbo: {
      rules: {}, // Enables default Turbopack configuration
    },
  },

  // ✅ Keeps Webpack fixes (if needed)
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
