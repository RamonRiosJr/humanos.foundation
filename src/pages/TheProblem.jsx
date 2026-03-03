import React, { useRef } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { AlertTriangle, Database, DollarSign, Lock, Eye, FileX, Globe, Clock } from 'lucide-react';
import { createPageUrl } from '@/utils';

const problems = [
    { icon: Clock, title: 'The 5-Minute Diagnosis', description: 'After filling out 20 pages of clipboards, your profound physical and mental reality is compressed into a rushed 5-minute review by a doctor staring at a screen.', stat: '5 MIN', statLabel: 'average time spent understanding you' },
    { icon: AlertTriangle, title: 'The Medication Gallery', description: 'Instead of investigating root causes, the easiest administrative path is to drug the symptom. When side effects hit, they add another pill. You become a gallery of meds.', stat: '∞', statLabel: 'pills to treat the side effects of pills' },
    { icon: DollarSign, title: 'A Billing Machine, Not Healthcare', description: 'The current architecture incentivizes rapid turnover and over-prescription. The system steals from insurance and patients by prioritizing volume over healing.', stat: 'VOLUME', statLabel: 'prioritized over your actual health' },
    { icon: FileX, title: 'Standardizing Suffering', description: 'Your lived experience is continuous, but the system treats you as a standardized deviation. Complex cases (ADHD, ASD, Bipolar) are shoved into one-size-fits-all boxes.', stat: '1 SIZE', statLabel: 'fits no one' },
    { icon: Eye, title: 'Forced Disability', description: 'Misdiagnosis and over-medication strip patients of their true selves, alter their thoughts, and sentence them to lives of forced disability and despair.', stat: 'LOSS', statLabel: 'of your true self and potential' },
    { icon: Database, title: 'Data Without Context', description: 'A list of your prescriptions and lab values tells the system nothing about how you actually feel. We have petabytes of data, but zero clinical clarity.', stat: '0', statLabel: 'understanding of your daily reality' },
];

export default function TheProblem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="The Problem — Assembly-Line Medicine & Over-Medication"
                description="The healthcare system is a billing machine. The 5-minute diagnosis leads to the medication gallery. Here is why we are fighting back."
                url="https://humanos.foundation/the-problem"
            />
            <Navbar />
            <PageHero
                badge="The Crisis"
                title="Assembly-Line"
                titleAccent="Medicine"
                subtitle={<span key="st">The healthcare system is fundamentally broken — <Link to="/Origin" className="text-white hover:text-white/80 underline underline-offset-4 decoration-white/30">not by accident</Link>, but by design. It is a billing machine that prioritizes drugging symptoms over finding root causes.</span>}
            />

            <section ref={ref} className="pb-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero stat */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-3xl overflow-hidden mb-12 p-8 md:p-14 text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-obsidian to-obsidian border border-red-900/20 rounded-3xl" />
                        <div className="relative z-10">
                            <AlertTriangle className="w-10 h-10 text-red-400/60 mx-auto mb-5" />
                            <p className="text-4xl md:text-6xl font-bold text-red-400/80 mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>The Human Cost</p>
                            <p className="text-sm text-white/40 max-w-lg mx-auto">
                                The system does not suffer when it gets it wrong. Patients do. The cost is paid in side effects, altered thoughts, and stolen potential.
                            </p>
                        </div>
                    </motion.div>

                    {/* Problems grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {problems.map((problem, i) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 md:p-7 border border-white/[0.04] hover:border-red-500/15 transition-all duration-500 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <problem.icon className="w-5 h-5 text-red-400/50 group-hover:text-red-400/70 transition-colors" />
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-red-400/70" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{problem.stat}</p>
                                        <p className="text-[9px] text-white/20 max-w-[100px] leading-tight">{problem.statLabel}</p>
                                    </div>
                                </div>
                                <h3 className="text-sm font-semibold text-white/70 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{problem.title}</h3>
                                <p className="text-xs text-white/30 leading-relaxed">{problem.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PageCTA
                title="There Is a Better Way"
                subtitle="hOS is building the alternative. Join the movement that's fighting back."
                cta="See Our Principles"
                ctaHref={createPageUrl('Principles')}
            />
            <Footer />
        </div>
    );
}
