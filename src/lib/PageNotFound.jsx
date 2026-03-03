import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PageNotFound() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-[11px] text-red-400/80 font-medium tracking-[0.2em] uppercase">404 — Signal Lost</span>
                    </div>

                    <p className="text-8xl md:text-[140px] font-bold text-white/[0.04] mb-0 leading-none" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>404</p>

                    <h1 className="text-2xl md:text-4xl font-bold -mt-4 mb-4 tracking-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        Page Not Found
                    </h1>

                    <p className="text-sm text-white/30 max-w-md mx-auto mb-10 leading-relaxed">
                        The page you're looking for doesn't exist — but your right to health data sovereignty does. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to={createPageUrl('Home')}
                            className="glow-btn px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-medium text-sm"
                        >
                            Return Home →
                        </Link>
                        <Link
                            to={createPageUrl('Manifesto')}
                            className="px-6 py-3 rounded-xl glass border border-white/[0.06] text-white/40 hover:text-white/60 text-sm transition-colors"
                        >
                            Read the Manifesto
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
