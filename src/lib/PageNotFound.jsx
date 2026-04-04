import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PageNotFound() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl transition-colors duration-1000" />
            </div>

            <div className="relative z-10 text-center w-full max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse drop-shadow-[0_0_4px_rgba(248,113,113,0.8)]" />
                        <span className="text-[11px] text-red-400/80 font-medium tracking-[0.2em] uppercase">404 — Signal Lost</span>
                    </div>

                    {/* Heartbeat Going Dead Animation */}
                    <div className="relative w-full h-20 md:h-24 mb-6 mt-4">
                        <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full">
                            {/* Dim Background Track */}
                            <path
                                d="M 0 50 L 40 50 L 50 30 L 60 70 L 70 50 L 120 50 L 130 10 L 140 90 L 150 50 L 400 50"
                                fill="none"
                                stroke="#f87171"
                                strokeWidth="1"
                                strokeOpacity="0.15"
                                vectorEffect="non-scaling-stroke"
                            />
                            {/* Animated Tracer */}
                            <motion.path
                                d="M 0 50 L 40 50 L 50 30 L 60 70 L 70 50 L 120 50 L 130 10 L 140 90 L 150 50 L 400 50"
                                fill="none"
                                stroke="#f87171"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                                initial={{ pathLength: 0.15, pathOffset: 0 }}
                                animate={{ pathOffset: [0, 1] }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    filter: "drop-shadow(0 0 8px rgba(248,113,113,0.8))"
                                }}
                            />
                        </svg>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        Patient Not Found
                    </h1>

                    <p className="text-sm md:text-base text-white/40 max-w-lg mx-auto mb-10 leading-relaxed font-medium">
                        The transmission flatlined. The page you're searching for doesn't exist — but your right to health data sovereignty still does.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to={createPageUrl('Home')}
                            className="glow-btn px-6 py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-red-500/20 hover:border-cyan-500/30 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_15px_rgba(248,113,113,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        >
                            Resuscitate Connection →
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
