// /src/components/logins/ErrorBoundary.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { colorAccent, proError, proErrorCought } from "@/config/myreceipt";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

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

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center h-screen">
          <h2
            style={{ color: colorAccent }}
            className="text-left text-sm font-medium">
            {proError}
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}
