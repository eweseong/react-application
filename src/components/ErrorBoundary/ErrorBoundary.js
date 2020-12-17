import React, { Component } from 'react';

// handles synchronous errors, class component is mandatory over here
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // trigger during "render" phase
  static getDerivedStateFromError(error) {
    // run some very long computation
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // console.error(error);
    // sending email to customer service
    // sending error to report
    // sending notification to developers saying website si down
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <button
            type="button"
            className="btn"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Reload
          </button>
        </>
      );
    }

    return this.props.children;
  }
}
