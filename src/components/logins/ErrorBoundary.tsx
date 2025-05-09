// /src/components/logins/ErrorBoundary.tsx

// External libraries
import React from "react";

// Blockchain configurations
import {
  colorAccent,
  colorPrimary,
  colorSecondary,
  proButton,
  proError,
  proErrorCought,
} from "@/config/myreceipt";

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
    console.error(proErrorCought, error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
          <h2
            style={{ color: colorAccent }}
            className="text-center text-sm font-medium">
            {proError}
          </h2>
          <button
            onClick={this.handleReload}
            style={{
              color: colorPrimary,
              backgroundColor: colorSecondary,
              border: "2px solid",
              borderColor: colorSecondary,
            }}
            className="w-full rounded-lg p-2 text-base sm:text-xs md:text-sm lg:text-base font-semibold transition-all cursor-pointer">
            {proButton}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
