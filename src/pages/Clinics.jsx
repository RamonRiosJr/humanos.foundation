import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Key, Info } from 'lucide-react';

const clinicDirectory = [
    {
        id: 'RVFHC-CO-825',
        name: 'River Valley Front Range Clinic',
        region: 'Colorado, USA',
        status: 'Active (Pilot)',
        integrationType: 'Full API Handshake',
    },
    {
        id: 'PRST-EQ-001',
        name: 'PRST Health Equity Initiative',
        region: 'San Juan, PR',
        status: 'Onboarding',
        integrationType: 'Secure Vault Export',
    },
    {
        id: 'AURA-SANDBOX-00',
        name: 'Aura Developer Sandbox',
        region: 'Global',
        status: 'Active',
        integrationType: 'Testing Only',
    }
];

export default function Clinics() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Validated Clinics Directory — Humanos Foundation"
                description="Public directory of validated B2B Clinic Routing IDs for Aura hOS integration."
                url="https://humanos.foundation/clinics"
            />
            <Navbar />
            
            <PageHero 
                badge="B2B Infrastructure" 
                title="Clinic Routing" 
                titleAccent="Directory" 
                subtitle="Use these verified IDs to initiate a Zero-Knowledge clinical handshake with participating providers." 
            />

            <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
                <div className="mb-12 p-6 glass rounded-2xl border border-blue-500/20 bg-blue-500/5 flex gap-4 items-start">
                    <Info className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">How to Use Clinic IDs</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Aura hOS establishes a Zero-Knowledge architectural handshake between your encrypted local vault and a provider. 
                            When you arrive at a participating clinic, input their verified routing ID below into your Aura app to establish a secure, ephemeral data bridge. No SSN required.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clinicDirectory.map((clinic, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={clinic.id} 
                            className="glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.02] transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <Server className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${clinic.status.includes('Active') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                                    {clinic.status}
                                </div>
                            </div>
                            
                            <h4 className="text-xl font-bold text-white mb-1">{clinic.name}</h4>
                            <p className="text-xs text-white/50 mb-6">{clinic.region}</p>
                            
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/40 flex items-center gap-2"><Key className="w-3 h-3" /> Routing ID</span>
                                    <code className="text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded font-mono text-xs border border-cyan-500/20 select-all">
                                        {clinic.id}
                                    </code>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/40 flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Type</span>
                                    <span className="text-white/80 text-xs font-medium">{clinic.integrationType}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
