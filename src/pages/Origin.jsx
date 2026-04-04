import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import AboutJourney from '../components/landing/AboutJourney';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Heart, Code, Zap, Shield, Users } from 'lucide-react';
import { createPageUrl } from '@/utils';
import HeartbeatStream from '../components/shared/HeartbeatStream';

const values = [
    { icon: Heart, title: 'Patient First', color: 'text-rose-400', description: <span>Every decision starts with one question: does this <span className="text-cyan-400/80 font-bold">serve the patient?</span></span> },
    { icon: Shield, title: 'Sovereignty by Design', color: 'text-purple-400', description: <span key="v2"><Link to={createPageUrl('Manifesto')} className="text-cyan-400 font-bold hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/40 drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">Data ownership is not a feature</Link> — it's the foundation.</span> },
    { icon: Code, title: 'Open by Default', color: 'text-blue-400', description: <span key="v3"><Link to={createPageUrl('OpenSource')} className="text-cyan-400 font-bold hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/40">Transparency in code</Link>, governance, and intention.</span> },
    { icon: Globe, title: 'Global Equity', color: 'text-emerald-400', description: <span>Health data rights belong to <span className="text-cyan-400/80 font-bold">every human, everywhere</span>, regardless of income.</span> },
    { icon: Zap, title: 'Radical Clarity', color: 'text-yellow-400', description: <span>No jargon. No obscurity. Your health record should be <span className="text-cyan-400/80 font-bold">readable by you</span>.</span> },
    { icon: Users, title: 'Community Driven', color: 'text-amber-500', description: <span>This is a <span className="text-cyan-400/80 font-bold">movement</span>, not a startup. We grow through <span className="text-cyan-400/80 font-bold">people</span>, not press releases.</span> },
];

function ValuesGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <section ref={ref} className="py-20 md:py-28 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
                    <span className="text-xs text-cyan-400 font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">What We Stand For</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Our Values</h2>
                </motion.div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="glass rounded-2xl p-6 md:p-7 border border-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 group"
                        >
                            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}>
                                <v.icon className={`w-5 h-5 ${v.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                            </motion.div>
                            <h3 className="text-base font-bold text-white/90 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{v.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed font-medium">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Origin() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Origin Story — Ramon Luis Rios Jr. & the hOS Movement"
                description="hOS was engineered on the front lines of the healthcare crisis by Ramon Luis Rios Jr., a patient who refused to accept a broken healthcare system. The origin story of Humanos Foundation and the health data sovereignty movement."
                url="https://humanos.foundation/origin"
            />
            <Navbar />
            <PageHero
                badge="The Origin Story"
                title="Not Built in a Boardroom."
                titleAccent="Built in the Trenches."
                subtitle="hOS was born from necessity — a patient navigating a broken system, who decided to build the alternative. This is that story."
            />
            {/* The heartbeat sits directly in the negative space between sections */}
            <div className="relative h-0 flex items-center justify-center opacity-70 pointer-events-none z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="absolute w-full max-w-xs mx-auto"
                >
                    <HeartbeatStream color="#22d3ee" className="h-12 md:h-16 w-full" duration={2.5} segmentLength={100} />
                </motion.div>
            </div>
            <AboutJourney />
            <ValuesGrid />
            <PageCTA
                title="Be Part of the Story"
                subtitle="The movement grows one person at a time. Join us."
                cta="Join the Movement"
                ctaHref={createPageUrl('Join')}
            />
            <Footer />
        </div>
    );
}


