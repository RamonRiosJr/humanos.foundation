import React, { useRef } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Key, Eye, Shield, Scale, BookOpen } from 'lucide-react';
import { createPageUrl } from '@/utils';

const declarations = [
    <span>We, the patients of the world, declare that the <span className="text-cyan-400/90 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">"First Mile"</span> of care is fundamentally broken. Our <span className="text-cyan-400/80 font-bold">continuous lived experience</span> cannot be compressed into a five-minute visit or a standard deviation.</span>,
    <span>We declare that forcing vulnerable populations—rural patients, non-native speakers, and those battling severe chronic illness—to communicate complex histories under <span className="text-cyan-400/80 font-bold">intense time pressure</span> is an act of systemic negligence.</span>,
    <span>We declare that the current medical architecture is a <span className="text-cyan-400/80 font-bold">billing machine</span>, designed to rapidly process bodies rather than investigate complex, <span className="text-cyan-400/80 font-bold">root-cause suffering</span>.</span>,
    <span key="d3">We declare an end to the "medication gallery" — the systemic practice of <Link to={createPageUrl('TheProblem')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors font-medium">drugging symptoms out of administrative convenience</Link> rather than healing the human.</span>,
    <span key="d4">We refuse to spend 20 minutes filling out 15 pages of archaic paper clipboards, only for our profound physical and mental realities to be ignored in a <Link to={createPageUrl('Principles')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors font-medium">rushed 5-minute review</Link>.</span>,
    <span>We demand systems that capture our <span className="text-cyan-400/80 font-medium">continuous, longitudinal truth</span> — bridging the First Mile with irrefutable data before we ever step foot in a clinic.</span>,
    <span>We declare that <span className="text-cyan-400/80 font-medium">health data sovereignty</span> is not just about privacy. It is about wielding power to hold the system accountable and demand individualized care. Sovereignty ends where the clinic begins.</span>,
    'We call on technologists, clinicians who refuse the status quo, and fellow patients to build the infrastructure of personalized, root-cause medicine.',
    <span key="d9">The revolution against assembly-line medicine is not coming. It is here. And it starts with you <Link to={createPageUrl('Join')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors font-medium">taking command of your story</Link>.</span>,
];

const fourLaws = [
    { icon: Eye, number: 'I', title: 'The Law of Lived Experience', color: 'text-blue-400', description: <span>Your health history is <span className="text-cyan-400/80 font-medium">continuous, not episodic</span>. The system must adapt to your continuous reality, rather than forcing you to compress your suffering into 15 pages of arbitrary paperwork and a <span className="text-cyan-400/80 font-medium">rushed 5-minute doctor review</span>.</span> },
    { icon: Shield, number: 'II', title: 'The Law of Root Cause', color: 'text-purple-400', description: <span>You have the right to <span className="text-cyan-400/80 font-medium">diagnostic diligence</span>. Treating symptoms with an ever-expanding gallery of medications while ignoring the root cause is a failure of care that cannot be tolerated.</span> },
    { icon: Key, number: 'III', title: 'The Law of Sovereignty', color: 'text-amber-500', description: <span>Your data belongs to you. By controlling the <span className="text-cyan-400/80 font-medium">highest fidelity, most unignorable health graph</span> of your own life, you force the system to treat you as an individual. Be warned: sovereignty ends where the clinic begins.</span> },
    { icon: Scale, number: 'IV', title: 'The Law of Independence', color: 'text-emerald-400', description: <span>Technology must <span className="text-cyan-400/80 font-medium">serve the patient first</span>—not the billing machine, not the insurance quota, and not institutional convenience. We build tools that make you the undeniable center of your care.</span> },
];

function DeclarationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <section ref={ref} className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-10">
                    <BookOpen className="w-5 h-5 text-cyan-400/60" />
                    <span className="text-xs text-cyan-400/60 tracking-[0.2em] uppercase font-medium">The Declaration</span>
                </motion.div>
                <div className="space-y-0 relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian to-obsidian border border-white/[0.03] rounded-3xl" />
                    <div className="relative z-10 p-8 md:p-14">
                        {declarations.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                                className={`py-5 md:py-6 border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors rounded-xl px-4 -mx-4 ${i === declarations.length - 1 ? 'pt-8' : ''}`}
                            >
                                <p className={`leading-relaxed flex items-start ${i === declarations.length - 1 ? 'text-cyan-400 font-bold text-lg md:text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-white/80 text-sm md:text-base font-medium group-hover:text-white transition-colors'}`} style={{ fontFamily: i === declarations.length - 1 ? 'Outfit, Inter, sans-serif' : 'Inter, sans-serif' }}>
                                    {i < declarations.length - 1 && <span className="text-cyan-400/60 font-mono text-xs mr-4 mt-1 shrink-0">{String(i + 1).padStart(2, '0')}</span>}
                                    <span className="flex-1">{line}</span>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FourLawsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <section ref={ref} className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-10">
                    <Scale className="w-5 h-5 text-cyan-400/60" />
                    <span className="text-xs text-cyan-400/60 tracking-[0.2em] uppercase font-medium">The Four Laws of hOS</span>
                </motion.div>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {fourLaws.map((law, i) => (
                        <motion.div
                            key={law.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="relative group"
                        >
                            <div className="relative rounded-2xl overflow-hidden glass border border-white/[0.06] hover:border-cyan-500/20 transition-colors duration-500 p-7 md:p-9">
                                <motion.div
                                    className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                                />
                                <div className="flex items-start justify-between mb-5">
                                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}>
                                        <law.icon className={`w-8 h-8 ${law.color} group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`} />
                                    </motion.div>
                                    <span className="text-4xl font-bold text-white/[0.08] group-hover:text-white/[0.15] transition-colors" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{law.number}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white/80 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{law.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed font-medium">{law.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Manifesto() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="The hOS Manifesto — Demanding Individualized Care"
                description="A formal declaration against assembly-line medicine. We believe in rooting out the causes of suffering, not medicating symptoms in a 5-minute review. Join the movement."
                url="https://humanos.foundation/manifesto"
                type="article"
                article={{ publishedTime: '2026-03-01', author: 'Ramon Luis Rios Jr.', section: 'Movement' }}
            />
            <Navbar />
            <PageHero
                badge="The Declaration"
                title="The hOS"
                titleAccent="Manifesto"
                subtitle="A formal declaration of patient data rights. Read it. Share it. Sign it with your presence in this movement."
            />
            <DeclarationSection />
            <FourLawsSection />
            <PageCTA
                title="Stand With the Movement"
                subtitle="The manifesto means nothing without the people willing to live it."
                cta="Sign the Manifesto"
                ctaHref={createPageUrl('Join')}
            />
            <Footer />
        </div>
    );
}
