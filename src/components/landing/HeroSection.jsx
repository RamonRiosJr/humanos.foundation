import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import NeuralMap from "./NeuralMap";
import HeroDashboard from "./HeroDashboard";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center px-4 md:px-8 overflow-hidden noise-overlay pt-32 md:pt-40 lg:pt-48 pb-20">
            <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
                <img
                    src="/images/data-sovereignty-hero.png"
                    alt="Health Data Sovereignty"
                    className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 via-[#0a0a0f]/80 to-[#0a0a0f]" />
            </div>

            <NeuralMap />

            <div className="relative z-10 w-full text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 md:mb-8"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] md:text-xs text-cyan-400/80 font-medium tracking-[0.2em] uppercase">
                        Aura hOS™ v0.9.1
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-outfit text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-800 leading-[0.95] tracking-tight mb-4 md:mb-6"
                    // @ts-ignore — fontFamily is valid in MotionStyle at runtime
                    style={{ fontFamily: "Outfit, Inter, sans-serif" }}
                >
                    <span className="text-white">You Are Not</span>
                    <br />
                    <span className="text-white/70">A </span>
                    <span className="gradient-text">5-Minute</span>
                    <br />
                    <span className="text-white">Story.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium"
                >
                    The "First Mile" of clinical care is catastrophically broken
                    for neurodivergent populations. Engineered by the Humanos
                    NGO, Aura hOS™ will Kill the Clipboard, replacing the 15-20
                    page physical penalty with a mathematically secure
                    Zero-Knowledge FHIR Vault and Edge Intake Routing. We
                    strictly eradicate clinical intake liability for healthcare
                    organizations while returning seamless data sovereignty
                    directly to the patient.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <Link
                        to="/Join"
                        className="glow-btn relative inline-flex px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white font-bold text-sm md:text-base tracking-wide group hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Take Command of Your Story
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </Link>
                </motion.div>

                {/* Dashboard */}
                <HeroDashboard />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-5 h-5 text-white/20" />
                </motion.div>
            </motion.div>
        </section>
    );
}
