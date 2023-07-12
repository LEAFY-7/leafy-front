import React, { ErrorInfo, ReactNode } from 'react';
import Div from 'components/atoms/Div/default-div';

interface ErrorBoundaryProps {
    children?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('에러 바운더리:', error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return <Div id="error_component">에러가 발생했습니다. - {this.state.error?.message}</Div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
