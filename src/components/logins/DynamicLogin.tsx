// /src/components/logins/DynamicLogin.tsx

// External libraries
import React from "react";
import { useActiveAccount } from "thirdweb/react";

// Components libraries
import ConnectEmbeds from "./ConnectEmbeds";
import { ErrorBoundary } from "./ErrorBoundary";
import Footer from "./FooterSection";
import Header from "./HeaderSection";
import LoginLayout from "./LoginLayout";

interface DynamicLoginPageProps {
  ContentComponent: React.FC;
}

const DynamicLoginPage: React.FC<DynamicLoginPageProps> = ({
  ContentComponent,
}) => {
  const account = useActiveAccount();

  if (account) {
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
};

export default DynamicLoginPage;
