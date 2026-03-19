import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NeuralMap from './NeuralMap';
import HeroDashboard from './HeroDashboard';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex flex-col items-center px-4 md:px-8 overflow-hidden noise-overlay pt-32 md:pt-40 lg:pt-48 pb-20">
            <NeuralMap />

            <div className="relative z-10 w-full text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center">
=======
import { ChevronDown } from 'lucide-react';
import NeuralMap from './NeuralMap';
import HeroDashboard from './HeroDashboard';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden noise-overlay">
            <NeuralMap />

            <div className="relative z-10 text-center max-w-5xl mx-auto pt-20 md:pt-0">
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 md:mb-8"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] md:text-xs text-cyan-400/80 font-medium tracking-[0.2em] uppercase">
<<<<<<< HEAD
                        {t('hero.badge')}
=======
                        The Human Operating System
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-outfit text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-800 leading-[0.95] tracking-tight mb-4 md:mb-6"
<<<<<<< HEAD
                    // @ts-ignore — fontFamily is valid in MotionStyle at runtime
                    style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                >
                    <span className="text-white">{t('hero.title_part1')}</span>
                    <br />
                    <span className="text-white/70">{t('hero.title_part2')} </span>
                    <span className="gradient-text">{t('hero.title_part3')}</span>
                    <br />
                    <span className="text-white">{t('hero.title_part4')}</span>
=======
                    style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
                >
                    <span className="text-white">Your Body.</span>
                    <br />
                    <span className="gradient-text">Your Data.</span>
                    <br />
                    <span className="text-white/60">Your</span>{' '}
                    <span className="text-white">Sovereignty.</span>
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
<<<<<<< HEAD
                    className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium"
                >
                    {t('hero.subtitle')}
=======
                    className="text-sm md:text-lg text-white/40 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light"
                >
                    hOS is the revolution in patient data sovereignty — a human-first operating
                    system that puts you in command of every signal your body generates.
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
<<<<<<< HEAD
                    <Link
                        to="/Join"
                        className="glow-btn relative inline-flex px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white font-bold text-sm md:text-base tracking-wide group hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {t('hero.cta_main')}
=======
                    <button className="glow-btn relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-semibold text-sm md:text-base tracking-wide group">
                        <span className="relative z-10 flex items-center gap-2">
                            Take Command of Your Health
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
<<<<<<< HEAD
                    </Link>
=======
                    </button>
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
