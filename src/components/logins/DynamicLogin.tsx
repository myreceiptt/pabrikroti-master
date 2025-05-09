// /src/components/logins/DynamicLogin.tsx

// External libraries
import React from "react";
import { useActiveAccount } from "thirdweb/react";

// Components libraries
import ConnectEmbeds from "@/components/logins/ConnectEmbeds";
import { ErrorBoundary } from "@/components/logins/ErrorBoundary";
import LoginLayout from "@/components/logins/LoginLayout";
import Footer from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";

interface DynamicLoginPageProps {
  ContentComponent: React.FC;
}

export default function DynamicLoginPage({
  ContentComponent,
}: DynamicLoginPageProps) {
  const activeAccount = useActiveAccount();

  if (activeAccount) {
    return (
      <>
        {/* Headersss */}
        <Header />
        <div className="flex flex-col gap-4 content-normal md:px-20 py-4 px-4 lg:my-12 md:my-8 my-4">
          <ContentComponent />
        </div>
        {/* Footersss */}
        <Footer />
      </>
    );
  }

  return (
    <ErrorBoundary>
      <LoginLayout>
        <ConnectEmbeds />
      </LoginLayout>
    </ErrorBoundary>
  );
}
