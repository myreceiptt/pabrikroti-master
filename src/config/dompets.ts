// /src/config/dompets.ts

// External libraries
import { createWallet, inAppWallet } from "thirdweb/wallets";

export const dompets = [
  inAppWallet({
    auth: {
      options: ["email", "passkey", "google", "apple", "phone"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.okex.wallet"),
  createWallet("com.coinbase.wallet"),
];
