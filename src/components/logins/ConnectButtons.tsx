// /src/components/logins/ConnectButtons.tsx

// External libraries
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { ConnectButton } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import {
  displayedTekeks,
  tekeks,
  theAccountFactory,
  tokeks,
} from "@/config/contracts";
import { dompets } from "@/config/dompets";
import {
  colorBoxIcon,
  colorIcon,
  proDescription,
  proLogo,
  proTitle,
  proUrl,
} from "@/config/myreceipt";
import { chain, chains } from "@/config/rantais";

export default function ConnectButtons() {
  return (
    <div id="connected">
      <ConnectButton
        client={client}
        appMetadata={{
          name: proTitle,
          url: proUrl,
          description: proDescription,
          logoUrl: proLogo,
        }}
        connectButton={{
          className: " ",
          label: <FaUserLarge />,
          style: {
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            borderRadius: "0.5rem",
            backgroundColor: colorBoxIcon,
            color: colorIcon,
          },
        }}
        connectModal={{
          showThirdwebBranding: false,
          title: "Log In",
        }}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: theAccountFactory,
          chain: chain,
          sponsorGas: true,
        }}
        chains={chains}
        supportedTokens={tokeks}
        supportedNFTs={tekeks}
        detailsButton={{
          displayBalanceToken: displayedTekeks,
          render: () => (
            <button
              style={{ color: colorIcon, backgroundColor: colorBoxIcon }}
              className="w-10 h-10 flex items-center justify-center text-xl rounded-lg">
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
