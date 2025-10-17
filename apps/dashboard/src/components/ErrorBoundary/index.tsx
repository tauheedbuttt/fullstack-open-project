import React, { Component, ErrorInfo, ReactNode } from "react";
import Button from "../Button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 dark:bg-neutral-900 dark:text-neutral-100">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-7xl font-bold mb-4 text-red-600 dark:text-red-400">
              Oops!
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
              Something went wrong
            </h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              We encountered an unexpected error. Please try refreshing the page
              or contact support if the problem persists.
            </p>

            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
                  View error details
                </summary>
                <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-xs text-red-600 dark:text-red-400 overflow-auto max-h-32 text-wrap">
                  {this.state.error.message}
                  {this.state.error.stack && `\n\n${this.state.error.stack}`}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                text="Try Again"
                onClick={this.handleReset}
                className="!bg-primary-600 !text-white !hover:bg-primary-700 dark:!bg-primary-400 dark:!hover:bg-primary-500"
              />
              <Button
                variant="text"
                text="Reload Page"
                onClick={this.handleReload}
                className="!bg-gray-600 !text-white !hover:bg-gray-700 dark:!bg-gray-400 dark:!hover:bg-gray-500"
              />
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
