import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageCTA from '../components/shared/PageCTA';
import SEOMeta from '../components/shared/SEOMeta';
import { Lock, Workflow, Key } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TheSolution() {
    return (
        <div className="bg-obsidian min-h-screen text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
            <SEOMeta
                title="The Solution | Humanos Foundation"
                description="Zero-Knowledge architecture. Absolute patient sovereignty. Discover how the Human Operating System terminates the 15-page clipboard penalty."
                url="https://humanos.foundation/thesolution"
            />
            <Navbar />

            {/* Header */}
            <header className="pt-40 pb-20 px-4 flex flex-col items-center justify-center min-h-[50vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(0,212,255,0.1),transparent_50%)] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl text-center relative z-10"
                >
                    <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The First Mile Architecture</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                        The Zero-Knowledge Vault.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed">
                        We don't just "protect" your data. We ensure that our own servers cannot even read it. The architecture is mathematically locked exclusively to you.
                    </p>
                </motion.div>
            </header>

            {/* Core Features Matrix */}
            <section className="py-20 px-4 md:px-8 border-t border-white/5 bg-obsidian-light/50 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Open Source Patient Infrastructure</h2>
                        <p className="text-white/50 max-w-2xl mx-auto">The Humanos Foundation donates this core structural ledger back to the human race. It is not licensed, it is not monetized. It is your inherent right.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all group">
                            <Lock className="w-8 h-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3 text-white">Client-Side Encryption</h3>
                            <p className="text-white/60 text-sm leading-relaxed">All medical payloads are encrypted in your browser before they ever touch the network. We store mathematical noise. Only your local private key can resolve the clinical payload.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                            <Key className="w-8 h-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3 text-white">Self-Custodial Keys</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Unlike B2B SaaS EHRs that act as a middleman to your own body, you hold the definitive cryptovalue. If we are subpoenaed for your records, we literally have nothing to orchestrate but encrypted shards.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                            <Workflow className="w-8 h-8 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3 text-white">Universal Form Interoperability</h3>
                            <p className="text-white/60 text-sm leading-relaxed">The First Mile mapping logic automatically writes your continuous narrative into whatever PDF, HL7, or proprietary webhook the clinic demands, stripping the 15-page clipboard tax entirely.</p>
                        </div>
                    </div>
                </div>
            </section>

            <PageCTA
                title="Your Body. Your Logic."
                subtitle="Join the movement that maps health data sovereignty back to its origin."
                cta="Access Patient Portal"
                ctaHref="https://app.aurahos.io"
                secondaryCta="Review the Codebase"
                secondaryCtaHref="/opensource"
            />
            <Footer />
        </div>
    );
}
