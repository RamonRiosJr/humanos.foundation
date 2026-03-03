import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Code, Heart, Shield } from 'lucide-react';

export default function AboutJourney() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <section ref={ref} className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
            {/* Background grain */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#0d0d15] to-obsidian" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-xs md:text-sm text-cyan-400/60 font-medium tracking-[0.2em] uppercase">
                        The Origin Story
                    </span>
                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight"
                        style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                    >
                        Forged in the{' '}
                        <span className="gradient-text">Trenches</span>
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                    {/* Image / Motel Scene */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="md:col-span-3 relative"
                    >
                        <motion.div style={{ y }} className="relative">
                            {/* The motel scene - stylized */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-[#151520] to-[#0a0a15]" />

                                {/* Motel atmosphere */}
                                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                                    {/* Dim window light */}
                                    <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-amber-900/10 to-transparent" />

                                    {/* Code on screen glow */}
                                    <motion.div
                                        className="absolute top-6 left-6 right-6 md:top-8 md:left-10 md:right-1/3"
                                        animate={{ opacity: [0.6, 0.9, 0.6] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <div className="glass rounded-lg p-4 border border-cyan-500/10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                                                <div className="w-2 h-2 rounded-full bg-green-400/60" />
                                                <span className="text-[9px] text-[#ffffff]/50 ml-2 font-mono">
                                                    hOS-core.ts
                                                </span>
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="flex gap-2">
                                                    <span className="text-[10px] text-[#c084fc]/80 font-mono">const</span>
                                                    <span className="text-[10px] text-[#22d3ee]/90 font-mono">sovereignty</span>
                                                    <span className="text-[10px] text-white/50 font-mono">=</span>
                                                    <span className="text-[10px] text-[#4ade80]/80 font-mono">"absolute"</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-[10px] text-[#c084fc]/80 font-mono">const</span>
                                                    <span className="text-[10px] text-[#22d3ee]/90 font-mono">patient</span>
                                                    <span className="text-[10px] text-white/50 font-mono">=</span>
                                                    <span className="text-[10px] text-[#4ade80]/80 font-mono">"first"</span>
                                                </div>
                                                <div className="h-1" />
                                                <div className="flex gap-2">
                                                    <span className="text-[10px] text-[#facc15]/80 font-mono">// Built by a patient,</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-[10px] text-[#facc15]/80 font-mono">// for patients.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Dogs silhouette indicator */}
                                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 flex items-center gap-3">
                                        <motion.div
                                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                            className="flex items-center gap-2"
                                        >
                                            <Heart className="w-3 h-3 text-rose-400/50" />
                                            <span className="text-[10px] text-[#ffffff]/50 font-light italic">
                                                River & Brownie, always by his side
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Caption */}
                            <div className="mt-4 flex items-center gap-2">
                                <div className="w-8 h-px bg-cyan-500/30" />
                                <p className="text-[11px] text-white/50 italic">
                                    The Motel Room Prototype — Where hOS was born
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="space-y-4">
                            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                hOS wasn't born in a boardroom or a venture capital pitch meeting.
                                It was born in a dimly lit motel room, powered by necessity and
                                an unshakable belief that{' '}
                                <span className="text-cyan-400/80">patients deserve better</span>.
                            </p>
                            <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                Ramon Luis Rios Jr., the founder, was a patient first — navigating a broken
                                healthcare system, drowning in paperwork, locked out of his own medical records.
                                With raw code and relentless determination, he built the first prototype
                                of what would become the Human Operating System.
                            </p>
                            <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                No team. No funding. Just a laptop, two loyal dogs, and a vision
                                that healthcare should serve the human — not the institution.
                            </p>
                        </div>

                        {/* Principles */}
                        <div className="space-y-3 pt-4 border-t border-white/10">
                            {[
                                { icon: Code, text: 'Built by a patient' },
                                { icon: Heart, text: 'Forged in survival' },
                                { icon: Shield, text: 'Designed for sovereignty' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <item.icon className="w-3.5 h-3.5 text-cyan-400/50" />
                                    <span className="text-xs text-white/60">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
