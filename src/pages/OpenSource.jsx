import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Github, ExternalLink, Code, Globe, Database, Zap } from 'lucide-react';
import { createPageUrl } from '@/utils';

const projects = [
    { name: 'OpenMRS', desc: 'Open-source medical record system for resource-constrained environments. Used in 40+ countries.', url: 'https://openmrs.org', icon: Database },
    { name: 'GNU Health', desc: 'Free health and hospital information system advocating for freedom in healthcare.', url: 'https://www.gnuhealth.org', icon: Globe },
    { name: 'FHIR Community', desc: 'The open standard for health data exchange. HL7 FHIR enables true interoperability.', url: 'https://www.hl7.org/fhir', icon: Code },
    { name: 'Blue Button 2.0', desc: 'CMS initiative giving Medicare beneficiaries access to their own claims data.', url: 'https://bluebutton.cms.gov', icon: Zap },
];

const principles = [
    'Open source means no lock-in — your data and the tools to read it must be freely accessible.',
    <span key="pr2">Transparency in code is <Link to="/Manifesto" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30">transparency in intent</Link>. We cannot trust what we cannot inspect.</span>,
    'Community-built software serves the community, not a board of directors.',
    'Open standards (FHIR, HL7, DICOM) are the foundation of true interoperability.',
];

export default function OpenSource() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Open Source Health Technology — Humanos Foundation" description="We believe in open source as a philosophy. Explore open-source health projects, FHIR standards, and the Coqui Cloud Dev Co. technical infrastructure behind the hOS movement." url="https://humanos.foundation/open-source" />
            <Navbar />
            <PageHero badge="Open Source" title="Open by" titleAccent="Default" subtitle="We believe in open source as a philosophy, not just a development model. Transparency, collaboration, and freedom are how we build trust." />
            <section className="pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-16">
                    {/* Philosophy */}
                    <div>
                        <p className="text-xs text-cyan-400/50 uppercase tracking-widest font-medium mb-6">Our Philosophy</p>
                        <div className="space-y-4">
                            {principles.map((p, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 glass rounded-2xl p-5 border border-white/[0.04]">
                                    <span className="text-cyan-500/30 font-mono text-sm shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                                    <p className="text-sm text-white/50 leading-relaxed">{p}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Peer projects */}
                    <div>
                        <p className="text-xs text-cyan-400/50 uppercase tracking-widest font-medium mb-6">Open Source Health Projects We Respect</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {projects.map((proj, i) => (
                                <motion.a key={proj.name} href={proj.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass rounded-2xl p-6 border border-white/[0.04] hover:border-cyan-500/20 transition-all duration-400 group flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl glass border border-white/[0.06] flex items-center justify-center shrink-0">
                                        <proj.icon className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400/80 transition-colors" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors">{proj.name}</h3>
                                            <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-cyan-400/60 transition-colors" />
                                        </div>
                                        <p className="text-xs text-white/30 leading-relaxed">{proj.desc}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* GitHub CTA */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-3xl p-8 md:p-10 border border-cyan-500/10 text-center">
                        <Github className="w-10 h-10 text-white/30 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white/70 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Coqui Cloud Dev Co.</h3>
                        <p className="text-sm text-white/30 mb-6 max-w-md mx-auto">The technical home of the hOS movement. Open source, community-driven, patient-first.</p>
                        <a href="https://coqui.cloud" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/[0.08] text-sm text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                            Visit Coqui Cloud <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </motion.div>
                </div>
            </section>
            <PageCTA
                title="Contribute to the Movement"
                subtitle="Code, content, advocacy — every contribution moves the needle."
                cta="Get Involved"
                ctaHref={createPageUrl('Volunteer')}
            />
            <Footer />
        </div>
    );
}
