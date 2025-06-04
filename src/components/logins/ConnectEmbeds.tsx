// /src/components/logins/ConnectEmbeds.tsx

// External libraries
import React from "react";
import { ConnectEmbed, lightTheme } from "thirdweb/react";

// Blockchain configurations
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";
import { getActiveReceipt } from "@/config/receipts";
import { chain, chains } from "@/config/rantais";

export default function ConnectEmbeds() {
  const { receipt, factoryAddress } = getActiveReceipt();

  const embedStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
  };

  return (
    <div
      id="logins"
      className="w-full h-auto flex flex-col justify-center items-center">
      <ConnectEmbed
        client={client}
        modalSize="compact"
        header={{
          title: " ",
        }}
        appMetadata={{
          name: receipt.proTitle,
          url: receipt.proUrl,
          description: receipt.proDescription,
          logoUrl: receipt.proLogo,
        }}
        wallets={dompets}
        accountAbstraction={{
          factoryAddress: factoryAddress,
          chain: chain,
          sponsorGas: true,
        }}
        chains={chains}
        showThirdwebBranding={false}
        theme={lightTheme({
          colors: {
            accentButtonBg: receipt.colorSecondary, // Button for Retry & Try Again
            accentButtonText: receipt.colorSekunder, // Button for Retry & Try Again
            accentText: receipt.colorSecondary, // Hyperlink text for Terms & Privacy
            borderColor: receipt.colorTertiary, // All border color
            // connectedButtonBg: string;
            // connectedButtonBgHover: string;
            // danger: string;
            // inputAutofillBg: string;
            // modalBg: string;
            // modalOverlayBg: string;
            // primaryButtonBg: string;
            // primaryButtonText: string;
            primaryText: receipt.colorSekunder, // Passkey & Connect a Wallet text
            // scrollbarBg: string;
            // secondaryButtonBg: string;
            // secondaryButtonHoverBg: string;
            secondaryButtonText: receipt.colorSekunder, // Google & Apple text
            // secondaryIconColor: string;
            // secondaryIconHoverBg: string;
            // secondaryIconHoverColor: string;
            // secondaryText: string;
            selectedTextBg: receipt.colorSekunder,
            selectedTextColor: receipt.colorPrimary,
            // separatorLine: string;
            // skeletonBg: string;
            // success: string;
            // tertiaryBg: string;
            // tooltipBg: string;
            // tooltipText: "#707070",
          },
        })}
        style={embedStyle}
      />
    </div>
  );
}
