// /src/components/logins/ConnectButtons.tsx

// External libraries
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { ConnectButton } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { getActiveReceipt } from "@/config/receipts";
import { chain, chains } from "@/config/rantais";
import { hexToRgba } from "@/config/utils";

export default function ConnectButtons() {
  const {
    receipt,
    factoryAddress,
    supportedNFTs,
    supportedFTs,
    displayedTokeks,
  } = getActiveReceipt();

  return (
    <div id="connected">
      <ConnectButton
        client={client}
        appMetadata={{
          name: receipt.proTitle,
          url: receipt.proUrl,
          description: receipt.proDescription,
          logoUrl: receipt.proLogo,
        }}
        connectButton={{
          label: <FaUserLarge />,
          style: {
            minWidth: "2.5rem",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            borderRadius: "0.5rem",
            border: "1px solid",
            color: receipt.colorSecondary,
            borderColor: receipt.colorTertiary,
            backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
          },
        }}
        connectModal={{
          showThirdwebBranding: false,
          title: "Log In",
        }}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: factoryAddress,
          chain: chain,
          sponsorGas: true,
        }}
        chains={chains}
        supportedTokens={supportedFTs}
        supportedNFTs={supportedNFTs}
        detailsButton={{
          displayBalanceToken: displayedTokeks,
          render: () => (
            <button
              style={{
                color: receipt.colorSecondary,
                borderColor: receipt.colorTertiary,
                backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
              }}
              className="w-10 h-10 flex items-center justify-center text-xl border rounded-lg cursor-pointer">
              <FaUserLarge />
            </button>
          ),
        }}
        detailsModal={{
          assetTabs: ["token", "nft"],
        }}
        theme="light"
      />
    </div>
  );
}
