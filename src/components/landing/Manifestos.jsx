import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BookOpen, Scale, Shield, Eye, Key, Fingerprint } from 'lucide-react';

const manifestoLines = [
    'We believe the "First Mile" of care is fundamentally broken — forcing complex lived experiences into a 15-page paper intake and a 5-minute clinical documentation is an act of institutional violence against the vulnerable.',
    'We believe treating symptoms with endless new medications while ignoring the root cause is unacceptable.',
    'We believe the "Medication Gallery" must be dismantled. You are not a trial-and-error experiment for pharmacology.',
    'We believe healthcare must serve the human, not the volume-driven billing machine.',
    'We believe that bridging the First Mile requires patient data sovereignty, equipping individuals with their unassailable truth before they ever enter the clinic.',
    'We are the revolution against assembly-line medicine. We are hOS.',
];

const fourLaws = [
    {
        icon: Key,
        title: 'The Law of Ownership',
        description: 'Your biological data belongs to you. Not your provider. Not your insurer. You.',
        number: 'I',
    },
    {
        icon: Eye,
        title: 'The Law of Transparency',
        description: 'Every access to your data is logged, visible, and under your control.',
        number: 'II',
    },
    {
        icon: Shield,
        title: 'The Law of Sovereignty',
        description: 'Your health data is encrypted end-to-end. No backdoors. No compromises.',
        number: 'III',
    },
    {
        icon: Fingerprint,
        title: 'The Law of Identity',
        description: 'Your health identity is self-sovereign — portable, interoperable, and yours forever.',
        number: 'IV',
    },
];

export default function Manifestos() {
    const [activeTab, setActiveTab] = useState('manifesto');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#080810] to-obsidian" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-xs md:text-sm text-cyan-400/60 font-medium tracking-[0.2em] uppercase">
                        The Foundation
                    </span>
                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight"
                        style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                    >
                        Our{' '}
                        <span className="gradient-text">Manifestos</span>
                    </h2>
                </motion.div>

                {/* Tab Switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-10 md:mb-14"
                >
                    <div className="glass rounded-full p-1.5 flex gap-2">
                        <button
                            onClick={() => setActiveTab('manifesto')}
                            className={`px-6 md:px-10 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'manifesto'
                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                                : 'border border-transparent text-white/40 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <BookOpen className={`w-4 h-4 ${activeTab === 'manifesto' ? 'text-cyan-400' : ''}`} />
                                The Manifesto
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('laws')}
                            className={`px-6 md:px-10 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'laws'
                                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                                : 'border border-transparent text-white/40 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <Scale className={`w-4 h-4 ${activeTab === 'laws' ? 'text-cyan-400' : ''}`} />
                                The Four Laws
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'manifesto' ? (
                        <motion.div
                            key="manifesto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-3xl overflow-hidden"
                        >
                            {/* Deep obsidian background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian to-obsidian" />
                            <div className="absolute inset-0 border border-white/[0.03] rounded-3xl" />

                            <div className="relative z-10 p-8 md:p-16">
                                <div className="max-w-3xl mx-auto space-y-0">
                                    {manifestoLines.map((line, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                                            className="py-5 md:py-6 border-b border-white/[0.03] last:border-0"
                                        >
                                            <p
                                                className={`text-base md:text-xl leading-relaxed ${i === manifestoLines.length - 1
                                                    ? 'text-cyan-400 font-bold text-lg md:text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                                                    : 'text-white/70 font-medium'
                                                    }`}
                                                style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                                            >
                                                {line}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                {/* Patient Terminal Showcase */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    className="mt-12 md:mt-16 max-w-4xl mx-auto rounded-xl md:rounded-2xl overflow-hidden border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)] relative group"
                                >
                                    <div className="absolute top-0 left-0 w-full h-8 bg-[#0d0d15] flex items-center px-4 border-b border-white/5 z-10">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                            <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                        </div>
                                        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                                            <Shield className="w-3 h-3 text-emerald-400" />
                                            <span className="text-[9px] md:text-[10px] text-emerald-400/80 font-bold tracking-widest uppercase">
                                                Zero-Knowledge Patient Vault — Active
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-[#0d0d15] pt-8 overflow-hidden relative">
                                        {/* Image */}
                                        <img 
                                            src="/patient-terminal-sandbox.png" 
                                            alt="Aura hOS Patient Terminal Sandbox" 
                                            className="w-full h-auto object-cover transform transition-transform duration-1000 ease-out group-hover:scale-[1.02]" 
                                        />
                                        {/* Glossy overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
                                    </div>
                                </motion.div>

                                {/* Builder Dedication */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    className="mt-12 md:mt-16 max-w-4xl mx-auto"
                                >
                                    <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-700" />
                                        <h3 className="text-xl font-bold mb-6 text-white tracking-wide" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>The Architect's Thesis</h3>
                                        <div className="space-y-5">
                                            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                                                Dedicating 25 years of technology architecture and process engineering back to patients. Over <span className="text-cyan-400 font-bold">3,000 engineering hours</span> have brought this open-source infrastructure into reality. I built this alone because waiting for government agencies and institutional bureaucracy is a death sentence. 
                                            </p>
                                            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                                                Instead of pitching theoretical proofs-of-concept, I spent hundreds of hours sitting silently in clinical waiting rooms—documenting the catastrophic failure of the modern intake process. I watched sick, vulnerable people forced to sit in contaminated rooms, jeopardizing their health to manually type 15-20 pages of redundant medical history into "shiny new iPads." Digitizing a fundamentally broken process is not innovation. It is institutional negligence that cross-contaminates waiting rooms and penalizes the sick.
                                            </p>
                                            <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                                                My ultimate goal is that the Human Operating System becomes the definitive biological data vault for humanity. If an emergency strikes on the other side of the planet, your cryptographic payload unlocks your continuous care narrative to save your life. Legacy EHRs optimize for corporate billing schemas. We optimize for survival. 
                                            </p>
                                            <p className="text-sm md:text-base text-white/90 font-medium pt-2">
                                                Let's build the change ourselves.<span className="text-blue-400 font-bold ml-2">With 💙 RamonRios.NET</span>
                                            </p>
                                        </div>
                                        
                                        <div className="mt-8 flex justify-start">
                                            <a
                                                href="https://www.gofundme.com/f/help-build-aura-hos-bridge-to-health-data-freedom"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-cyan-900/40 hover:border-cyan-400/60 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                                            >
                                                ⚡ Support the Open Source Bridge
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="laws"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Ethereal white glassmorphism */}
                            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                {fourLaws.map((law, i) => (
                                    <motion.div
                                        key={law.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.12 }}
                                        className="relative group"
                                    >
                                        <div className="relative rounded-2xl overflow-hidden">
                                            {/* Light ethereal bg */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
                                            <div className="absolute inset-0 border border-white/[0.06] rounded-2xl group-hover:border-cyan-500/20 transition-colors duration-500" />

                                            {/* Pulsing icon glow */}
                                            <motion.div
                                                className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl"
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                                transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                                            />

                                            <div className="relative z-10 p-6 md:p-8">
                                                <div className="flex items-start justify-between mb-4">
                                                    <law.icon className="w-6 h-6 text-cyan-400/70" />
                                                    <span
                                                        className="text-3xl md:text-4xl font-bold text-white/[0.06]"
                                                        style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                                                    >
                                                        {law.number}
                                                    </span>
                                                </div>
                                                <h3
                                                    className="text-lg md:text-xl font-semibold text-white/80 mb-2"
                                                    style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                                                >
                                                    {law.title}
                                                </h3>
                                                <p className="text-sm text-white/60 leading-relaxed font-medium">
                                                    {law.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}


