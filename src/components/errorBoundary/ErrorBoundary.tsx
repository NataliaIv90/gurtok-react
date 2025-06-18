import React from 'react';
import { Link } from 'react-router-dom';

type State = { hasError: boolean };

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Щось пішло не так.</h2>
          <Link to="/">Go back home</Link>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
