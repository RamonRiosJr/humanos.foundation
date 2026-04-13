import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Activity, CheckCircle2, Server, Globe2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const systems = [
    { name: 'FHIR OAuth Ingestion Networks', status: 'Pending Link', uptime: '--.--%', icon: <Globe2 className="w-4 h-4 text-slate-500" /> },
    { name: 'Zero-Knowledge Edge Relays', status: 'Pending Link', uptime: '--.--%', icon: <Server className="w-4 h-4 text-slate-500" /> },
    { name: 'Biometric Webhook Ledger', status: 'Pending Link', uptime: '--.--%', icon: <ShieldCheck className="w-4 h-4 text-slate-500" /> },
];

export default function Status() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="System Status & SLA — Aura hOS" 
                description="Live operational status of the Aura hOS clinical routing relays and cryptographic edge functions." 
                url="https://humanos.foundation/status" 
            />
            <Navbar />
            
            <PageHero 
                badge="Mathematical Service Level Guaranty" 
                title="Network" 
                titleAccent="Status" 
                subtitle="Aura hOS relies on globally distributed Supabase Edge Functions. We guarantee a 99.9% uptime for the uninterrupted enforcement of the Zero-Knowledge Vault." 
            />

            <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto space-y-12">
                
                {/* Global Status Banner */}
                <div className="p-8 rounded-3xl bg-slate-500/10 border border-slate-500/30 flex items-center gap-6">
                    <div className="p-4 rounded-full bg-slate-500/20 text-slate-400 shrink-0 relative">
                        <Activity className="w-8 h-8 relative z-10" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">Status Monitor Offline</h2>
                        <p className="text-sm text-slate-300/80">Pending Phase 17 connection to the primary Network Matrix.</p>
                    </div>
                </div>

                {/* Granular System Metrics */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold font-outfit text-white px-2">Core Infrastructure</h3>
                    
                    {systems.map((sys, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-5 rounded-2xl glass hover:bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/[0.03] rounded-xl text-cyan-400">
                                    {sys.icon}
                                </div>
                                <h4 className="text-sm font-bold text-white">{sys.name}</h4>
                            </div>
                            
                            <div className="flex items-center gap-6 ml-14 sm:ml-0">
                                <div className="text-right hidden sm:block">
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">90-Day Uptime</p>
                                    <p className="text-sm font-mono text-cyan-300">{sys.uptime}</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    {sys.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Incident History (Defrosted) */}
                <div className="pt-8 border-t border-white/[0.05]">
                    <h3 className="text-lg font-bold font-outfit text-white mb-6 px-2">Past 14 Days</h3>
                    <div className="glass p-8 rounded-2xl border border-white/5 text-center">
                        <p className="text-sm text-white/50 leading-relaxed max-w-md mx-auto">Detailed incident history logs have been temporarily locked pending our migration to the new edge uptime monitor in Phase 17.</p>
                    </div>
                </div>

            </section>
            
            <Footer />
        </div>
    );
}
