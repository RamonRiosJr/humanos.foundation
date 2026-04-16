import React from 'react';
import { AlertCircle } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service natively here
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render the fallback UI instead of the White Screen of Death
            return (
                <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center bg-transparent border border-red-500/20 rounded-xl bg-red-500/5 my-12 mx-auto max-w-2xl backdrop-blur-sm">
                    <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2 font-outfit">Component Degradation Detected</h2>
                    <p className="text-sm text-slate-300 mb-6">
                        A critical rendering failure occurred within this visual component. The rest of the page remains isolated and functional.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-full border border-slate-700 transition"
                    >
                        Reload Interface
                    </button>
                    {import.meta.env.DEV && (
                        <div className="mt-8 p-4 bg-black/50 rounded text-left overflow-x-auto text-xs font-mono text-red-300 w-full border border-red-900/50">
                            {this.state.error?.toString()}
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
