// /src/components/contents/CoinRedeem.tsx

"use client";

// External libraries
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useActiveAccount } from "thirdweb/react";

// Components libraries
import AccessMessage from "./AccessMessage";
import RedeemForm from "./RedeemForm";
import Loader from "./ReusableLoader";

// Blockchain configurations
import TokenCheck from "@/config/checker";
import { loginFirst, loaderChecking, accessMessage1 } from "@/config/osloid";

const CoinRedeem: React.FC = () => {
  const router = useRouter();
  const activeAccount = useActiveAccount();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  if (!activeAccount?.address) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2 className="text-left text-sm font-medium text-icon-wording">
          {loginFirst}
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <TokenCheck
        userAddress={activeAccount.address}
        onAccessChange={setHasAccess}
      />
      {hasAccess === null && <Loader message={loaderChecking} />}
      {hasAccess === false && (
        <AccessMessage
          onRedirect={() => router.push("/")}
          message={accessMessage1}
        />
      )}
      {hasAccess && <RedeemForm />}
    </main>
  );
};

export default CoinRedeem;
