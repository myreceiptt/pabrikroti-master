// /src/components/fts/ClaimFreeCoin.tsx

"use client";

// External libraries
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import CheckErc1155 from "@/config/checker";
import {
  loginFirst,
  loaderChecking,
  accessMessage1,
  colorAccent,
} from "@/config/myreceipt";

// Components libraries
import AccessMessage from "@/components/fts/AccessMessage";
import FreeCoinForm from "@/components/fts/FreeCoinForm";
import Loader from "@/components/sections/ReusableLoader";

const ClaimFreeCoin: React.FC = () => {
  const router = useRouter();
  const activeAccount = useActiveAccount();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  if (!activeAccount?.address) {
    return (
      <main className="grid gap-4 place-items-center">
        <h2
          style={{ color: colorAccent }}
          className="text-left text-sm font-medium">
          {loginFirst}
        </h2>
      </main>
    );
  }

  return (
    <main className="grid gap-4 place-items-center">
      <CheckErc1155
        activeAddress={activeAccount.address}
        onAccessChange={setHasAccess}
      />
      {hasAccess === null && <Loader message={loaderChecking} />}
      {hasAccess === false && (
        <AccessMessage
          onRedirect={() => router.push("/")}
          message={accessMessage1}
        />
      )}
      {hasAccess && <FreeCoinForm />}
    </main>
  );
};

export default ClaimFreeCoin;
