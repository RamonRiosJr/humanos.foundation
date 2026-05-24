import React from "react";
import { ShieldAlert } from "lucide-react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an anomaly:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-4 font-sans">
                    <div className="w-full max-w-xl p-8 rounded-3xl bg-[#0a0a0f]/95 backdrop-blur-xl border border-red-500/30 text-center shadow-[0_0_80px_rgba(239,68,68,0.1)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/5 blur-3xl pointer-events-none" />
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
                                <ShieldAlert className="w-16 h-16 text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)]" />
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-300 mb-4 tracking-tight">
                            Critical Render Fault
                        </h1>
                        <p className="text-zinc-400 leading-relaxed mb-8 text-sm md:text-base">
                            A localized structural error prevented this module
                            from loading successfully. This is typically caused
                            by internal exception faults or parsing errors. Your
                            structural environment remains secure.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/30 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-red-500/30 hover:border-red-400/60 shadow-[0_0_15px_rgba(248,113,113,0.15)] glow-btn"
                        >
                            Execute Hard Reset
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
