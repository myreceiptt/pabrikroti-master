// /src/components/contents/CoinRedeem.tsx

"use client";

// External libraries
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useActiveAccount } from "thirdweb/react";

// Components libraries
import AccessMessage from "./AccessMessage";
import ClaimForm from "./RedeemForm";
import Loader from "./ReusableLoader";

// Blockchain configurations
import TokenCheck from "@/config/checker";

const CoinRedeem: React.FC = () => {
  const router = useRouter();
  const smartAccount = useActiveAccount();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  if (!smartAccount?.address) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-left text-sm font-medium text-icon-wording">
          Please log in first.
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <TokenCheck
        userAddress={smartAccount.address}
        onAccessChange={setHasAccess}
      />
      {hasAccess === null && <Loader message="Checking..." />}
      {hasAccess === false && (
        <AccessMessage
          onRedirect={() => router.push("/")}
          message="You don't have access!"
        />
      )}
      {hasAccess && <ClaimForm />}
    </main>
  );
};

export default CoinRedeem;
