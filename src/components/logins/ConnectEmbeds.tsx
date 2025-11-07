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
    background: "white",
  };

  return (
    <div
      id="logins"
      className="w-full h-auto flex flex-col justify-center items-center"
    >
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
            accentButtonBg: receipt.colorSekunder, // Button for Retry & Try Again
            accentButtonText: receipt.colorSecondary, // Button for Retry & Try Again
            accentText: receipt.colorPrimer, // Hyperlink text for Terms & Privacy
            borderColor: receipt.colorTertiary, // All border color
            // connectedButtonBg: string;
            // connectedButtonBgHover: string;
            danger: receipt.colorTersier,
            // inputAutofillBg: string;
            // modalBg: receipt.colorSecondary,
            // modalOverlayBg: string;
            // primaryButtonBg: string;
            // primaryButtonText: string;
            primaryText: receipt.colorPrimer, // Phone number, Passkey & Connect a Wallet
            // scrollbarBg: string;
            // secondaryButtonBg: string;
            // secondaryButtonHoverBg: string;
            secondaryButtonText: receipt.colorPrimer, // Google & Apple text
            // secondaryIconColor: string;
            // secondaryIconHoverBg: string;
            // secondaryIconHoverColor: string;
            secondaryText: receipt.colorPrimer,
            selectedTextBg: receipt.colorSekunder,
            selectedTextColor: receipt.colorSecondary,
            separatorLine: receipt.colorTertiary,
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
