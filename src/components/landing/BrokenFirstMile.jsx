import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Sparkles, FileX, Wifi, Clock, ShieldCheck, Scan, Database } from 'lucide-react';

const brokenItems = [
    { icon: FileX, text: 'The 15-20 page clipboard penalty in the waiting room' },
    { icon: Clock, text: 'The rushed 5-minute clinical documentation' },
    { icon: AlertTriangle, text: 'The Prescriptive Spiral' },
    { icon: Wifi, text: 'Logging symptoms, missing causes' },
];

const hosItems = [
    { icon: Scan, text: 'Continuous lived-experience capture' },
    { icon: Database, text: 'Unignorable longitudinal data' },
    { icon: ShieldCheck, text: 'Forcing case-by-case analysis' },
    { icon: Sparkles, text: 'Personalized root-cause care' },
];

export default function BrokenFirstMile() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
            {/* Dividing line glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-xs md:text-sm text-cyan-400/60 font-medium tracking-[0.2em] uppercase">
                        The Narrative Flip
                    </span>
                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight"
                        style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                    >
                        The Broken{' '}
                        <span className="text-white/30">First Mile</span>
                    </h2>
                </motion.div>

                {/* Split screen */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-0">
                    {/* Left - Status Quo */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative rounded-2xl md:rounded-r-none md:rounded-l-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
                        {/* Grain overlay */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
                        }} />

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5">
                                <AlertTriangle className="w-3 h-3 text-red-400" />
                                <span className="text-[10px] text-red-400 tracking-widest uppercase font-medium">
                                    The Status Quo
                                </span>
                            </div>

                            <h3
                                className="text-2xl md:text-3xl font-bold text-[#ffffff]/90 mb-2"
                                style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                            >
                                Assembly-Line Medicine
                            </h3>
                            <p className="text-sm text-[#ffffff]/50 mb-8 leading-relaxed">
                                You are not a standard deviation. The 15-20 page clipboard penalty followed by a rushed 5-minute documentation cannot capture your truth.
                            </p>

                            <div className="space-y-4">
                                {brokenItems.map((item, i) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[#ffffff]/[0.02] border border-[#ffffff]/[0.06]"
                                    >
                                        <item.icon className="w-4 h-4 text-red-400/60 shrink-0" />
                                        <span className="text-sm text-[#ffffff]/60">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Flickering light effect */}
                            <motion.div
                                className="absolute top-4 right-4 w-1 h-1 rounded-full bg-yellow-200"
                                animate={{ opacity: [0.2, 0.8, 0.1, 0.6, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* Right - hOS Light */}
                    <motion.div
                        initial={{ opacity: 1, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative rounded-2xl md:rounded-l-none md:rounded-r-3xl overflow-hidden bg-[#0d0d15] text-white group shadow-2xl border-y border-r border-cyan-500/10"
                    >
                        {/* Radiant background patterns for 'Light' effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d15] via-cyan-900/40 to-[#10101a] z-0" />

                        {/* Radiant glow highlights */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-sm backdrop-blur-sm">
                                <Sparkles className="w-3 h-3 text-[#22d3ee]" />
                                <span className="text-[10px] text-[#22d3ee] tracking-widest uppercase font-bold drop-shadow-md">
                                    The hOS Light
                                </span>
                            </div>

                            <h3
                                className="text-2xl md:text-3xl font-bold text-[#ffffff] mb-2 drop-shadow-md"
                                style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                            >
                                Individualized Clarity
                            </h3>
                            <p className="text-sm text-[#ffffff]/80 mb-8 leading-relaxed font-medium">
                                Your data, structured so perfectly that the system is <span className="text-[#22d3ee] font-bold">forced to listen.</span>
                            </p>

                            <div className="space-y-4">
                                {hosItems.map((item, i) => (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[#22d3ee]/10 border border-[#22d3ee]/20 shadow-lg backdrop-blur-sm transition-all hover:bg-[#22d3ee] hover:-translate-y-0.5 group/item cursor-default"
                                    >
                                        <item.icon className="w-4 h-4 text-[#22d3ee] shrink-0 group-hover/item:text-[#000000] transition-colors" />
                                        <span className="text-sm text-[#ffffff]/90 font-semibold group-hover/item:text-[#000000] transition-colors">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


