import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ExternalLink, Loader2 } from 'lucide-react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function Whitepaper() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://aurahos.io/whitepaper';
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-obsidian min-h-screen text-white flex flex-col overflow-x-hidden">
            <SEOMeta
                title="Whitepaper Relocation | Humanos Foundation"
                description="The Aura hOS Architecture Whitepaper has been securely moved to the enterprise domain."
                url="https://humanos.foundation/whitepaper"
                type="website"
            />
            
            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center p-6 text-center relative py-32">
                {/* Background Grain */}
                <div className="absolute inset-0 bg-[#0a0a0f] z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-lg w-full"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                        <ShieldAlert className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        Secure Enterprise Handoff
                    </h1>
                    
                    <p className="text-white/70 mb-8 leading-relaxed font-medium">
                        To maintain strict non-profit compliance boundaries, the Data Security & Privacy Whitepaper is now hosted securely on our commercial enterprise domain.
                    </p>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm relative overflow-hidden group">
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12"
                        />
                        <a href="https://aurahos.io/whitepaper" className="text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium tracking-wide flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" /> Routing to aurahos.io
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-5 h-5 text-cyan-500 animate-spin opacity-80" />
                        <noscript>
                            <a href="https://aurahos.io/whitepaper" className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded mt-2 block hover:bg-rose-500/20 transition-colors">
                                If you are not redirected automatically, click here.
                            </a>
                        </noscript>
                        <p className="text-[11px] text-zinc-500 italic font-normal tracking-wide bg-black/40 px-4 py-2 mt-4 rounded-lg border border-white/5 shadow-inner">
                            Aura hOS proudly donates its Enterprise Architecture to our patients.
                        </p>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
