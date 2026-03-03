import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Newspaper, Download, Mail, ExternalLink, Quote } from 'lucide-react';

const pressLinks = [
    { label: 'Patient Privacy Rights', url: 'https://patientprivacyrights.org', desc: 'Leading advocacy for medical privacy' },
    { label: 'OpenNotes', url: 'https://www.opennotes.org', desc: 'Open notes movement in healthcare' },
    { label: 'CommonWell Health Alliance', url: 'https://www.commonwellalliance.org', desc: 'Health data interoperability' },
    { label: 'ONC Health IT', url: 'https://www.healthit.gov', desc: 'Federal health IT standards' },
    { label: 'NEJM Catalyst', url: 'https://catalyst.nejm.org', desc: 'Healthcare innovation research' },
];

const boilerplate = `Humanos Foundation is a movement dedicated to returning health data sovereignty to the individual. Founded by Ramon Luis Rios Jr. and supported by Coqui Cloud Dev Co., the Foundation advocates for patient-owned health records, zero-knowledge architecture, and universal health data rights. The Human Operating System (hOS) movement believes that every person deserves to own their health record, control who sees it, and benefit from it. Learn more at humanos.foundation.`;

export default function Press() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Press & Media Kit — Humanos Foundation"
                description="Press resources for journalists covering patient data rights, health data sovereignty, and the hOS movement. Boilerplate, story angles, founder contact, and credible external references."
                url="https://humanos.foundation/press"
            />
            <Navbar />
            <PageHero
                badge="Media & Press"
                title="Press"
                titleAccent="& Media"
                subtitle="Resources for journalists, researchers, and media professionals covering health data rights and patient sovereignty."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-10">
                    {/* Press contact */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-3xl p-8 md:p-12 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-5">
                            <Mail className="w-5 h-5 text-cyan-400/60" />
                            <h2 className="text-xl font-bold text-white/80" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Press Contact</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm text-white/50 mb-1">Media Inquiries</p>
                                <a href="mailto:press@humanos.foundation" className="text-cyan-400/70 hover:text-cyan-400 transition-colors text-sm">press@humanos.foundation</a>
                            </div>
                            <div>
                                <p className="text-sm text-white/50 mb-1">Founder</p>
                                <a href="https://ramonrios.net" target="_blank" rel="noopener noreferrer" className="text-cyan-400/70 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1">
                                    Ramon Luis Rios Jr. <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-white/50 mb-1">Response Time</p>
                                <p className="text-sm text-white/35">Within 24 hours for press inquiries</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/50 mb-1">Organization</p>
                                <a href="https://coqui.cloud" target="_blank" rel="noopener noreferrer" className="text-cyan-400/70 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1">
                                    Coqui Cloud Dev Co. <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Boilerplate */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass rounded-3xl p-8 md:p-10 border border-white/[0.04]">
                        <div className="flex items-center gap-3 mb-5">
                            <Quote className="w-5 h-5 text-cyan-400/60" />
                            <h2 className="text-lg font-bold text-white/70" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Official Boilerplate</h2>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed italic border-l-2 border-cyan-500/20 pl-5">{boilerplate}</p>
                        <button
                            onClick={() => navigator.clipboard.writeText(boilerplate)}
                            className="mt-5 px-4 py-2 rounded-xl glass border border-white/[0.06] text-xs text-white/30 hover:text-cyan-400 hover:border-cyan-500/20 transition-all flex items-center gap-2"
                        >
                            <Download className="w-3 h-3" /> Copy to Clipboard
                        </button>
                    </motion.div>

                    {/* Key topics */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="glass rounded-3xl p-8 md:p-10 border border-white/[0.04]">
                        <div className="flex items-center gap-3 mb-6">
                            <Newspaper className="w-5 h-5 text-cyan-400/60" />
                            <h2 className="text-lg font-bold text-white/70" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Story Angles We Support</h2>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Patient data ownership and the right to health record portability',
                                'The $250 billion health data market and who profits from it',
                                'Zero-knowledge architecture in consumer health technology',
                                'The hOS movement: from motel room prototype to global advocacy',
                                'Health data equity in underserved and Global South communities',
                                'Regulatory landscape: HIPAA, GDPR, 21st Century Cures Act',
                            ].map((angle, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/40">
                                    <span className="text-cyan-500/40 font-mono text-xs mt-0.5">—</span>
                                    {angle}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* External resources */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <h2 className="text-lg font-bold text-white/60 mb-5" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Credible External Resources</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {pressLinks.map((link) => (
                                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 border border-white/[0.04] hover:border-cyan-500/20 transition-all group">
                                    <div className="flex items-start justify-between">
                                        <p className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">{link.label}</p>
                                        <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-cyan-400/60 transition-colors shrink-0 mt-0.5" />
                                    </div>
                                    <p className="text-xs text-white/25 mt-1">{link.desc}</p>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}