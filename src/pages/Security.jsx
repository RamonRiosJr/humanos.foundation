import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Shield, AlertTriangle, CheckCircle2, Mail } from 'lucide-react';

const commitments = [
    'We will acknowledge your report within 48 hours',
    'We will provide an update on our assessment within 7 days',
    'We will not take legal action against researchers acting in good faith',
    'We will publicly credit researchers who responsibly disclose vulnerabilities (with their permission)',
    'We will work to remediate confirmed issues as quickly as possible',
];

const inScope = [
    'humanos.foundation website and subdomains',
    'Any publicly accessible APIs or services',
    'Authentication and authorization mechanisms',
    'Data handling and storage systems',
];

const outOfScope = [
    'Attacks requiring physical access to devices',
    'Social engineering attacks against our team',
    'Denial of service attacks',
    'Issues in third-party services we depend on (report to them directly)',
];

export default function Security() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Security & Responsible Disclosure — Humanos Foundation" description="Report vulnerabilities responsibly to Humanos Foundation. We commit to acknowledging security reports within 48 hours and never pursuing legal action against good-faith researchers." url="https://humanos.foundation/security" />
            <Navbar />
            <PageHero badge="Security" title="Responsible" titleAccent="Disclosure" subtitle="We take security seriously. If you've found a vulnerability, we want to know — and we'll treat you with respect." />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Report CTA */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-3xl p-8 md:p-12 border border-cyan-500/10 text-center">
                        <Shield className="w-12 h-12 text-cyan-400/60 mx-auto mb-5" />
                        <h2 className="text-xl font-bold text-white/70 mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Found a Vulnerability?</h2>
                        <p className="text-sm text-white/60 mb-6 max-w-md mx-auto">Please report it responsibly. We appreciate the security community's work in keeping our <span className="text-cyan-400 font-bold">systems safe.</span></p>
                        <a href="mailto:security@humanos.foundation" className="inline-flex items-center gap-2 glow-btn px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-sm text-white font-medium">
                            <Mail className="w-4 h-4" /> security@humanos.foundation
                        </a>
                    </motion.div>

                    {/* Our commitments */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass rounded-3xl p-8 border border-white/[0.04]">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-green-400/60" />
                            <h3 className="text-base font-semibold text-white/60" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Our Commitments to You</h3>
                        </div>
                        <ul className="space-y-3">
                            {commitments.map((c, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400/40 shrink-0 mt-0.5" />
                                    <p className="text-sm text-white/60">{c}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* In scope */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-6 border border-white/[0.04]">
                            <p className="text-xs text-cyan-400/50 uppercase tracking-widest mb-4">In Scope</p>
                            <ul className="space-y-2">
                                {inScope.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-white/40">
                                        <span className="text-cyan-500/30 mt-0.5">·</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Out of scope */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-6 border border-white/[0.04]">
                            <p className="text-xs text-amber-400/50 uppercase tracking-widest mb-4">Out of Scope</p>
                            <ul className="space-y-2">
                                {outOfScope.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-white/40">
                                        <AlertTriangle className="w-3 h-3 text-amber-400/30 shrink-0 mt-0.5" />{item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Philosophy */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-6 border border-white/[0.04]">
                        <p className="text-sm text-white/60 leading-relaxed">
                            <span className="text-cyan-400 font-bold">Our philosophy:</span>{' '}
                            Security researchers act in the <span className="text-cyan-400/80 font-medium">public interest.</span> We will never sue, threaten, or take action against someone who follows responsible disclosure practices. We believe security research is a <span className="text-cyan-400/80 font-medium">public good</span>, and we treat it that way.
                        </p>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}




