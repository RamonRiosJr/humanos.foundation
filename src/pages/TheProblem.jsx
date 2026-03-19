import React, { useRef } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, useInView } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
<<<<<<< HEAD
import { AlertTriangle, Database, DollarSign, Lock, Eye, FileX, Clock } from 'lucide-react';
import { createPageUrl } from '@/utils';

const problems = [
    { icon: Clock, title: 'The 5-Minute Clinical Documentation', description: <span>After filling out <span className="text-cyan-400/80 font-bold">15 pages of arbitrary clipboards</span>, your profound physical and mental reality is compressed into a rushed <span className="text-cyan-400/80 font-bold">5-minute clinical documentation</span> by a doctor staring at a screen.</span>, stat: '5 MIN', statLabel: 'average time spent understanding you' },
    { icon: AlertTriangle, title: 'The Medication Gallery', description: <span>Instead of <span className="text-cyan-400/80 font-bold">documenting root causes</span>, the easiest administrative path is to drug the symptom. When side effects hit, they add another pill. You become a <span className="text-cyan-400/80 font-bold">gallery of meds</span>.</span>, stat: '∞', statLabel: 'pills to treat the side effects of pills' },
    { icon: DollarSign, title: 'A Billing Machine, Not Healthcare', description: <span>The current architecture incentivizes <span className="text-cyan-400/80 font-bold">rapid turnover</span> and over-prescription. The system steals from insurance and patients by prioritizing volume over healing.</span>, stat: 'VOLUME', statLabel: 'prioritized over your actual health' },
    { icon: FileX, title: 'Standardizing Suffering', description: <span>Your lived experience is continuous, but the system treats you as a <span className="text-cyan-400/80 font-bold">standardized deviation</span>. Complex cases (ADHD, ASD, Bipolar) are shoved into one-size-fits-all boxes.</span>, stat: '1 SIZE', statLabel: 'fits no one' },
    { icon: Eye, title: 'Forced Disability', description: <span>Mis-categorization and over-medication strip patients of their true selves, alter their thoughts, and sentence them to lives of <span className="text-cyan-400/80 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">forced disability</span> and despair.</span>, stat: 'LOSS', statLabel: 'of your true self and potential' },
    { icon: Database, title: 'Data Without Context', description: <span>A list of your prescriptions and lab values tells the system nothing about how you actually feel. We have petabytes of data, but <span className="text-cyan-400/80 font-bold">zero institutional clarity</span>.</span>, stat: '0', statLabel: 'understanding of your daily reality' },
    { icon: Lock, title: 'Legacy Leaks', description: <span>Once your data enters an <span className="text-cyan-400/80 font-bold">institutional silo</span>, you lose all control. Hospitals sell "de-identified" data to brokers, and legacy security leads to inevitable hacks.</span>, stat: '0%', statLabel: 'control over institutional sharing' },
=======
import { AlertTriangle, Database, DollarSign, Lock, Eye, FileX, TrendingDown, Globe } from 'lucide-react';

const problems = [
    { icon: FileX, title: 'Your Records Are Fragmented', description: 'The average American has medical records spread across 14+ different systems. No single source of truth exists for your own health history.', stat: '14+', statLabel: 'disconnected systems per patient' },
    { icon: DollarSign, title: 'Your Data Is Being Sold', description: 'Your de-identified health data is bought and sold in a $250 billion market. Hospitals, insurers, and data brokers profit. You receive nothing.', stat: '$250B', statLabel: 'annual health data market' },
    { icon: Lock, title: 'You Don\'t Have Access', description: 'Despite legal rights (HIPAA, 21st Century Cures Act), 60% of patients report difficulty accessing their own complete medical records.', stat: '60%', statLabel: 'patients can\'t access their records' },
    { icon: Eye, title: 'No Visibility Into Who Sees Your Data', description: 'Hundreds of third parties may have accessed your health data. You have no audit trail, no notification, and no control.', stat: '100s', statLabel: 'unknown third-party accesses' },
    { icon: Database, title: 'Catastrophic Breach Risk', description: 'Healthcare is the #1 most breached industry. 1 in 3 Americans has had their health data exposed in a breach.', stat: '1 in 3', statLabel: 'Americans breached' },
    { icon: Globe, title: 'Global Health Inequity', description: 'Communities in low-income countries and underserved populations have even less access to their own health records, widening the global health equity gap.', stat: '4B+', statLabel: 'people without health data access' },
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
];

export default function TheProblem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
<<<<<<< HEAD
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="The Problem — Assembly-Line Medicine & Over-Medication"
                description="The healthcare system is a billing machine. 15 pages of arbitrary paperwork and a 5-minute clinical documentation lead directly to the medication gallery."
=======
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="The Health Data Crisis — Why the System is Broken"
                description="1 in 3 Americans has had health data breached. Your EHR is worth $250 on the open market — you get $0. Here's why the health data system is fundamentally broken and what we're doing about it."
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                url="https://humanos.foundation/the-problem"
            />
            <Navbar />
            <PageHero
                badge="The Crisis"
<<<<<<< HEAD
                title="Assembly-Line"
                titleAccent="Medicine"
                subtitle={<span key="st">The healthcare system is fundamentally broken — <Link to={createPageUrl('Origin')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors font-medium">not by accident</Link>, but by design. It is a billing machine that prioritizes drugging symptoms over documenting root causes.</span>}
=======
                title="The Health Data"
                titleAccent="Crisis"
                subtitle="The healthcare data system is fundamentally broken — not by accident, but by design. Here's what patients are up against."
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
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
<<<<<<< HEAD
                        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-obsidian to-obsidian border border-red-900/20 rounded-3xl" />
                        <div className="relative z-10">
                            <AlertTriangle className="w-10 h-10 text-red-400/60 mx-auto mb-5" />
                            <p className="text-4xl md:text-6xl font-bold text-red-400/80 mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>The Human Cost</p>
                            <p className="text-sm text-white/70 max-w-lg mx-auto font-medium">
                                The system does not suffer when it gets it wrong. Patients do. The cost is paid in side effects, altered thoughts, and stolen potential.
=======
                        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-[#0a0a0f] to-[#0a0a0f] border border-red-900/20 rounded-3xl" />
                        <div className="relative z-10">
                            <AlertTriangle className="w-10 h-10 text-red-400/60 mx-auto mb-5" />
                            <p className="text-4xl md:text-6xl font-bold text-red-400/80 mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>$6.2B</p>
                            <p className="text-sm text-white/40 max-w-lg mx-auto">
                                Lost annually due to healthcare data inefficiencies. Meanwhile, patients bear the cost — in money, time, and health outcomes.
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
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
<<<<<<< HEAD
                                        <p className="text-[9px] text-white/50 max-w-[100px] leading-tight font-medium uppercase tracking-tighter">{problem.statLabel}</p>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-white/90 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{problem.title}</h3>
                                <p className="text-xs text-white/70 leading-relaxed font-medium">{problem.description}</p>
=======
                                        <p className="text-[9px] text-white/20 max-w-[100px] leading-tight">{problem.statLabel}</p>
                                    </div>
                                </div>
                                <h3 className="text-sm font-semibold text-white/70 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{problem.title}</h3>
                                <p className="text-xs text-white/30 leading-relaxed">{problem.description}</p>
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PageCTA
                title="There Is a Better Way"
                subtitle="hOS is building the alternative. Join the movement that's fighting back."
                cta="See Our Principles"
<<<<<<< HEAD
                ctaHref={createPageUrl('Principles')}
=======
                ctaHref="/principles"
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
            />
            <Footer />
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
