// /src/components/logins/ErrorBoundary.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(receipt.proErrorCought, error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
          <h2
            role="alert"
            style={{ color: receipt.colorAccent }}
            className="text-center text-sm font-medium">
            {receipt.proError}
          </h2>
          <button
            onClick={this.handleReload}
            style={{
              color: receipt.colorPrimary,
              backgroundColor: receipt.colorSecondary,
              border: "2px solid",
              borderColor: receipt.colorSecondary,
            }}
            className="w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all cursor-pointer">
            {receipt.proButton}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
