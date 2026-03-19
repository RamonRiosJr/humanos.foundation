import React, { useRef } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Cpu, User, Globe, Lock, Eye, Heart } from 'lucide-react';
import { createPageUrl } from '@/utils';

const principles = [
    {
        icon: User,
        title: 'Patient-First Architecture',
        tagline: 'The patient is not the product.',
        description: <span>Every design decision, every technical tradeoff, every business decision begins with one question: <span className="text-cyan-400/80 font-medium">does this serve the patient?</span> Not the hospital. Not the insurer. Not the investor. The patient.</span>,
        color: 'from-cyan-500/10 to-cyan-500/5',
        border: 'hover:border-cyan-500/20',
    },
    {
        icon: Lock,
        title: 'Zero-Knowledge by Default',
        tagline: 'We cannot see what we are not meant to see.',
        description: <span key="p2"><Link to={createPageUrl('Glossary')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors">Zero-knowledge architecture</Link> means your health data is <span className="text-cyan-400/80 font-medium">encrypted before it ever leaves your device</span>. The systems we advocate for have no ability to read your health records — even if compelled.</span>,
        color: 'from-purple-500/10 to-purple-500/5',
        border: 'hover:border-purple-500/20',
    },
    {
        icon: Cpu,
        title: 'Local-First Computing',
        tagline: 'Your device. Your data. Your cloud.',
        description: <span key="p3">Health data should live on the device you own, <span className="text-cyan-400/80 font-medium">not on a server you don't control</span>. <Link to={createPageUrl('Glossary')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors">Local-first architecture</Link> means you stay in control even when you're offline, even when companies shut down.</span>,
        color: 'from-blue-500/10 to-blue-500/5',
        border: 'hover:border-blue-500/20',
    },
    {
        icon: Eye,
        title: 'Radical Transparency',
        tagline: 'No hidden access. No silent sharing.',
        description: <span>Every read of your data is logged inside the hOS boundary. However, once you grant a clinician temporary access to your records, they may ingest that data into their own legacy systems. hOS does not control the <span className="text-cyan-400/80 font-medium">institutional silos</span> where your data is subsequently stored or shared; our mission is to ensure you know exactly what left your vault and when.</span>,
        color: 'from-amber-500/10 to-amber-500/5',
        border: 'hover:border-amber-500/20',
    },
    {
        icon: Globe,
        title: 'Open Standards',
        tagline: 'Built on FHIR, not proprietary silos.',
        description: <span key="p5"><Link to={createPageUrl('Origin')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors">We advocate for open health data standards</Link> (FHIR, HL7) that allow your data to <span className="text-cyan-400/80 font-medium">move freely between systems</span>. No lock-in. No proprietary format that holds your health record hostage.</span>,
        color: 'from-green-500/10 to-green-500/5',
        border: 'hover:border-green-500/20',
    },
    {
        icon: Heart,
        title: 'Health Equity by Design',
        tagline: 'Data sovereignty for everyone, not just the privileged.',
        description: <span>The benefits of <span className="text-cyan-400/80 font-medium">health data sovereignty</span> must reach underserved communities, low-income populations, and the Global South. Health equity is a design requirement, not an afterthought.</span>,
        color: 'from-rose-500/10 to-rose-500/5',
        border: 'hover:border-rose-500/20',
    },
];

export default function Principles() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Our Principles — Zero-Knowledge, Local-First, Patient-First | Humanos Foundation"
                description="The non-negotiable principles behind the hOS movement: patient-first architecture, zero-knowledge encryption, local-first computing, radical transparency, open standards, and health equity by design."
                url="https://humanos.foundation/principles"
            />
            <Navbar />
            <PageHero
                badge="Our Commitments"
                title="Principles We"
                titleAccent="Never Compromise"
                subtitle="These are not aspirations. They are hard commitments that guide every decision in the hOS movement."
            />
            <section ref={ref} className="pb-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto space-y-5">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className={`relative rounded-2xl p-6 md:p-9 border border-white/[0.04] ${p.border} transition-all duration-500 overflow-hidden group`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-2xl glass border border-white/[0.06] flex items-center justify-center">
                                        <p.icon className="w-5 h-5 text-cyan-400/60" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-white/80" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{p.title}</h3>
                                        <span className="text-xs text-cyan-400/40 md:before:content-['—'] md:before:mr-2 italic">{p.tagline}</span>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed font-medium">{p.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <PageCTA
                title="Build on These Principles"
                subtitle="Join a movement that refuses to compromise on what matters most."
                cta="Join the Movement"
                ctaHref={createPageUrl('Join')}
            />
            <Footer />
        </div>
    );
}



