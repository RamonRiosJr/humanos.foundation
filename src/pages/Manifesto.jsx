import React, { useRef } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Key, Eye, Shield, Fingerprint, Scale, BookOpen } from 'lucide-react';

const declarations = [
    'We, the patients of the world, declare that our biological data is an extension of our bodies — and therefore, an extension of our selves.',
    'We declare that no corporation, institution, or government has the right to own, sell, or profit from our health data without our explicit, informed, and revocable consent.',
    'We declare that the current healthcare data system — built on opacity, fragmentation, and institutional convenience — is fundamentally broken and must be reimagined from the ground up.',
    'We declare that every person, regardless of geography, income, or technical literacy, has the right to access their complete health record in a human-readable format.',
    'We declare that the future of healthcare is patient-sovereign: where individuals hold the keys to their own biological data vault.',
    'We declare that technology must serve the patient first — not the insurer, not the hospital system, not the data broker.',
    'We declare that health data privacy is not a premium feature. It is a basic human right.',
    'We call on technologists, clinicians, policymakers, and advocates to join us in building systems worthy of human trust.',
    'The revolution is not coming. It is here. And it starts with you taking command of your health.',
];

const fourLaws = [
    { icon: Key, number: 'I', title: 'The Law of Ownership', description: 'Your biological data belongs to you. Not your provider. Not your insurer. Not a tech company. You are the sole sovereign of your health record.' },
    { icon: Eye, number: 'II', title: 'The Law of Transparency', description: 'Every access to your data — who read it, when, and why — must be logged, visible, and auditable by you at any time.' },
    { icon: Shield, number: 'III', title: 'The Law of Sovereignty', description: 'Your health data must be encrypted end-to-end. No backdoors. No silent sharing. No compromise. Sovereignty is absolute or it is nothing.' },
    { icon: Fingerprint, number: 'IV', title: 'The Law of Identity', description: 'Your health identity is self-sovereign — portable across systems, interoperable by design, and yours to carry for the duration of your life.' },
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#06060a] via-[#0a0a12] to-[#06060a] border border-white/[0.03] rounded-3xl" />
                    <div className="relative z-10 p-8 md:p-14">
                        {declarations.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
                                className={`py-5 md:py-6 border-b border-white/[0.03] last:border-0 ${i === declarations.length - 1 ? 'pt-8' : ''}`}
                            >
                                <p className={`leading-relaxed ${i === declarations.length - 1 ? 'text-cyan-400 font-semibold text-lg md:text-2xl' : 'text-white/50 text-sm md:text-base'}`} style={{ fontFamily: i === declarations.length - 1 ? 'Outfit, Inter, sans-serif' : 'Inter, sans-serif' }}>
                                    {i < declarations.length - 1 && <span className="text-cyan-500/30 font-mono text-xs mr-3">{String(i + 1).padStart(2, '0')}</span>}
                                    {line}
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
                                    <law.icon className="w-6 h-6 text-cyan-400/70" />
                                    <span className="text-4xl font-bold text-white/[0.05]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{law.number}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white/80 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{law.title}</h3>
                                <p className="text-sm text-white/35 leading-relaxed">{law.description}</p>
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
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="The hOS Manifesto — Patient Data Rights Declaration"
                description="A formal declaration of patient data rights. We believe your biological data is yours — not your hospital's, not your insurer's. Read and share the hOS Manifesto by Humanos Foundation."
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
                cta="Sign the Movement"
            />
            <Footer />
        </div>
    );
}