import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BookOpen, Scale, Shield, Eye, Key, Fingerprint } from 'lucide-react';

const manifestoLines = [
    'We believe your body is yours — every signal, every cell, every byte.',
    'We believe healthcare should serve the human, not the institution.',
    'We believe in radical transparency over bureaucratic obscurity.',
    'We believe data sovereignty is a fundamental human right.',
    'We believe the future of medicine begins with the patient.',
    'We are the revolution. We are hOS.',
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
                    <div className="glass rounded-full p-1 flex">
                        <button
                            onClick={() => setActiveTab('manifesto')}
                            className={`px-5 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeTab === 'manifesto'
                                    ? 'bg-white/10 text-cyan-400 shadow-lg shadow-cyan-500/10'
                                    : 'text-white/30 hover:text-white/50'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-3.5 h-3.5" />
                                The Manifesto
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('laws')}
                            className={`px-5 md:px-8 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeTab === 'laws'
                                    ? 'bg-white/10 text-cyan-400 shadow-lg shadow-cyan-500/10'
                                    : 'text-white/30 hover:text-white/50'
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <Scale className="w-3.5 h-3.5" />
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
                                                        ? 'text-cyan-400 font-semibold text-lg md:text-2xl'
                                                        : 'text-white/50'
                                                    }`}
                                                style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                                            >
                                                {line}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
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
                                                <p className="text-sm text-white/35 leading-relaxed">
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
