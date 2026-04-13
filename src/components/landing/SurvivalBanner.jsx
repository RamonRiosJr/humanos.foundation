import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function SurvivalBanner() {
    const location = useLocation();
    
    // Architect Assessor: Detect if we are on a B2B or Compliance route
    const isEnterpriseRoute = ['/providers', '/clinics', '/sandbox', '/developers'].some(p => location.pathname.toLowerCase().includes(p)) || location.search.includes('context=enterprise');

    if (isEnterpriseRoute) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full relative z-[100] bg-gradient-to-r from-blue-900/90 via-slate-900 to-cyan-900/90 border-b border-cyan-500/30 overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                     <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <polyline fill="none" stroke="#06b6d4" strokeWidth="1" points="0,50 100,50" />
                     </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-center sm:text-left">
                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <ShieldCheck className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-sm md:text-base font-bold text-white mb-0.5 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                                <span className="text-cyan-400 uppercase tracking-widest text-[10px] sm:text-xs">Supported Infrastructure</span>
                                <span className="hidden sm:inline text-white/30">•</span>
                                <span>Securing the $825k Federal Pipeline</span>
                            </h3>
                            <p className="text-xs md:text-sm text-white/70 leading-snug">
                                Aura hOS relies on mathematical integrity. Sovereign payload routes are heavily encrypted and directly utilize the Zero-Knowledge Vault architecture.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full relative z-[100] bg-gradient-to-r from-red-900/90 via-slate-900 to-cyan-900/90 border-b border-red-500/30 overflow-hidden"
        >
            {/* Background SVG flatline pulse effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polyline fill="none" stroke="#ef4444" strokeWidth="1" points="0,50 20,50 25,20 35,80 40,50 100,50">
                        <animate attributeName="points" dur="3s" repeatCount="indefinite"
                            values="0,50 20,50 25,20 35,80 40,50 100,50; 0,50 40,50 45,20 55,80 60,50 100,50; 0,50 80,50 85,20 95,80 100,50 100,50" />
                    </polyline>
                 </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Text Section */}
                <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        <Activity className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                        <h3 className="text-sm md:text-base font-bold text-white mb-0.5 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                            <span className="text-red-400 uppercase tracking-widest text-[10px] sm:text-xs">Federal Health Equity</span>
                            <span className="hidden sm:inline text-white/30">•</span>
                            <span>Advocacy Secured by PCORI / AHRQ Pilot</span>
                        </h3>
                        <p className="text-xs md:text-sm text-white/70 leading-snug">
                            Our primary advocacy roadmap is driven by the $825k PCORI / AHRQ non-dilutive federal trajectory, serving as a direct mandate to permanently protect the Zero-Knowledge patient architectural standard.
                        </p>
                    </div>
                </div>

                {/* Call To Action */}
                <a 
                    href="/research"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 group relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-500/10 border border-red-500/30 hover:border-red-400 hover:bg-red-500/20 transition-all duration-300"
                >
                    <span className="relative z-10 text-sm font-bold text-red-100 flex items-center gap-2">
                        <HeartPulse className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                        View Federal Strategy
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-red-400 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 pointer-events-none -skew-x-12" />
                </a>

            </div>
        </motion.div>
    );
}
