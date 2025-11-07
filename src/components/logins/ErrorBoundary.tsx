// /src/components/logins/ErrorBoundary.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

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
  private receipt: ReturnType<typeof getActiveReceipt>["receipt"];

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };

    this.receipt = getActiveReceipt().receipt;
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(this.receipt.proErrorCought, error, errorInfo);
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
            style={{ color: this.receipt.colorPrimer }}
            className="text-center text-sm font-medium"
          >
            {this.receipt.proError}
          </h2>
          <button
            onClick={this.handleReload}
            style={{
              color: this.receipt.colorSecondary,
              border: "2px solid",
              borderColor: this.receipt.colorTertiary,
              backgroundColor: this.receipt.colorSekunder,
            }}
            className="w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all cursor-pointer"
          >
            {this.receipt.proButton}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
