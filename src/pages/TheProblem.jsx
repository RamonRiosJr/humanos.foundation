import React, { useRef } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { AlertTriangle, Database, DollarSign, Lock, Eye, FileX, Clock } from 'lucide-react';
import { createPageUrl } from '@/utils';

const problems = [
    { icon: Clock, title: 'The 5-Minute Clinical Documentation', description: <span>After suffering the <span className="text-cyan-400/80 font-bold">15-20 page clipboard penalty</span> in the waiting room, your profound physical and mental reality is compressed into a rushed <span className="text-cyan-400/80 font-bold">5-minute clinical documentation</span> by a provider restricted by legacy software.</span>, stat: '5 MIN', statLabel: 'average time spent understanding you' },
    { icon: AlertTriangle, title: 'The Prescriptive Spiral', description: <span>Because providers lack immediate access to <span className="text-cyan-400/80 font-bold">pre-compiled root-cause data</span>, current workflows often default to treating isolated symptoms. When side effects arrive, more medications follow, creating a burdensome <span className="text-cyan-400/80 font-bold">prescriptive loop</span>.</span>, stat: '∞', statLabel: 'pills to treat the side effects of pills' },
    { icon: DollarSign, title: 'Volume-Driven Architecture', description: <span>The current infrastructure economically rewards <span className="text-cyan-400/80 font-bold">rapid patient turnover</span>. The system inadvertently prioritizes processing volume over providing the necessary time for deep, investigative healing.</span>, stat: 'VOLUME', statLabel: 'prioritized over clinical diligence' },
    { icon: FileX, title: 'Standardizing Sickness', description: <span>Your lived experience is continuous, but legacy tools treat you as a <span className="text-cyan-400/80 font-bold">standardized deviation</span>. Complex neurodivergent or chronic cases are forced into rigid, one-size-fits-all clinical brackets.</span>, stat: '1 SIZE', statLabel: 'fits no one' },
    { icon: Eye, title: 'Iatrogenic Cascades', description: <span>Mis-categorization resulting from blind spots in initial intake data leads to <span className="text-cyan-400/80 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">prescribing cascades</span>, which can artificially induce impairment and profoundly alter patients' lives.</span>, stat: 'LOSS', statLabel: 'of baseline health and potential' },
    { icon: Database, title: 'Data Without Context', description: <span>A list of your prescriptions and lab values tells the system nothing about how you actually feel. We have petabytes of data, but <span className="text-cyan-400/80 font-bold">zero institutional clarity</span>.</span>, stat: '0', statLabel: 'understanding of your daily reality' },
    { icon: Lock, title: 'Legacy Leaks', description: <span>Once your data enters an <span className="text-cyan-400/80 font-bold">institutional silo</span>, you lose all control. Hospitals sell "de-identified" data to brokers, and legacy security leads to inevitable hacks.</span>, stat: '0%', statLabel: 'control over institutional sharing' },
];

export default function TheProblem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="The Problem — Assembly-Line Medicine & Over-Medication"
                description="The healthcare system is a billing machine. 15 pages of arbitrary paperwork and a 5-minute clinical documentation lead directly to the medication gallery."
                url="https://humanos.foundation/the-problem"
            />
            <Navbar />
            <PageHero
                badge="The Architectural Crisis"
                title="Systemic Overload"
                titleAccent="Medicine"
                subtitle={<span key="st">The healthcare intake system is fundamentally broken — overwhelmed by <Link to={createPageUrl('Origin')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors font-medium">legacy data silos</Link>. It operates on volume-driven constraints that prioritize isolated symptom management over compiling longitudinal root causes.</span>}
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
                            <p className="text-4xl md:text-6xl font-bold text-red-300/80 mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>The Human Cost</p>
                            <p className="text-sm text-white/70 max-w-lg mx-auto font-medium">
                                The system struggles when its data flows are broken. Patients absorb the impact. The cost is paid in compounding side effects, diagnostic delays, and compromised quality of life.
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
                                        <p className="text-[9px] text-white/50 max-w-[100px] leading-tight font-medium uppercase tracking-tighter">{problem.statLabel}</p>
                                    </div>
                                </div>
                                <h3 className="text-sm font-bold text-white/90 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{problem.title}</h3>
                                <p className="text-xs text-white/70 leading-relaxed font-medium">{problem.description}</p>
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
