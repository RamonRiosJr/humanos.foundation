import React from 'react';
import { motion } from 'framer-motion';

export default function HeroDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl mx-auto mt-12 md:mt-20"
        >
            <div className="relative rounded-2xl md:rounded-3xl p-2 md:p-3 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_80px_rgba(34,211,238,0.15)] group overflow-hidden">
                
                {/* Header bar to keep the UI feel active */}
                <div className="absolute top-4 left-6 z-20 flex items-center gap-2">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] md:text-xs text-cyan-400 font-bold tracking-widest uppercase drop-shadow-md">
                        Provider Terminal — Prototype
                    </span>
                </div>

                {/* Embedded Dashboard Image */}
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-[#0d0d15] border border-white/10 shadow-2xl">
                    <img 
                        src="/content/provider-terminal-prototype.jpg" 
                        alt="Aura hOS Enterprise Provider Terminal Prototype" 
                        className="w-full h-auto object-cover transform object-top transition-transform duration-1000 ease-out group-hover:scale-[1.01]" 
                    />
                    
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
                </div>
            </div>

            {/* Massive floating reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        </motion.div>
    );
}
