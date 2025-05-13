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
import { chain, chains } from "@/config/rantais";

export default function ConnectButtons() {
  return (
    <div id="connected">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Breads Factory",
          url: "https://pabrikroti.endhonesa.com",
          description:
            "The Breads Factory is a factory that produces Programmed Bread (tokenization) with a Framework of Playing, Learning, and Working or PLW.",
          logoUrl: "/logos/logo.png",
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
            backgroundColor: "#F0F0F0",
            color: "#707070",
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
              style={{ color: "#707070", backgroundColor: "#F0F0F0" }}
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
