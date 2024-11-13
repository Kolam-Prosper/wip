'use client'

import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-screen bg-gray-900">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Oops! Something went wrong.</h1>
                        <p className="text-gray-300 mb-8">We're sorry for the inconvenience. Please try refreshing the page.</p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary