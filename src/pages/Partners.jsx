import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
<<<<<<< HEAD
import { ExternalLink, Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import PageCTA from '../components/shared/PageCTA';
import { ExternalLink, Handshake, CheckCircle2 } from 'lucide-react';
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
import { createPageUrl } from '@/utils';

const alignedOrgs = [
    { name: 'Patient Privacy Rights', url: 'https://patientprivacyrights.org', desc: 'Medical privacy advocacy' },
    { name: 'Patient Advocacy Foundation', url: 'https://www.patientadvocate.org', desc: 'Patient support & case management' },
    { name: 'OpenNotes', url: 'https://www.opennotes.org', desc: 'Open notes in healthcare' },
    { name: 'CommonWell Health Alliance', url: 'https://www.commonwellalliance.org', desc: 'Health data interoperability' },
    { name: 'Health Data Research UK', url: 'https://www.hdruk.ac.uk', desc: 'Health data research' },
    { name: 'OpenMRS', url: 'https://openmrs.org', desc: 'Open-source medical records' },
];

const partnerBenefits = [
    'Mutual amplification of your mission and ours',
    'Co-authored thought leadership and blog content',
    'Event and webinar collaboration opportunities',
    'Recognition on our Partners page and in press materials',
    'Access to our growing community of patients, clinicians, and technologists',
];

export default function Partners() {
    return (
<<<<<<< HEAD
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
=======
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
            <SEOMeta title="Partners — Organizations Aligned with Health Data Sovereignty" description="Humanos Foundation partners with healthcare advocacy organizations, academic institutions, and open-source health projects committed to patient data rights." url="https://humanos.foundation/partners" />
            <Navbar />
            <PageHero badge="Collaboration" title="Partners in" titleAccent="Sovereignty" subtitle="We are stronger together. We partner with organizations that share our commitment to patient data rights and health equity." />
            <section className="pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-16">
                    {/* Aligned orgs */}
                    <div>
                        <p className="text-xs text-cyan-400/50 uppercase tracking-widest font-medium mb-6">Organizations Aligned With Our Mission</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {alignedOrgs.map((org, i) => (
                                <motion.a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass rounded-2xl p-5 border border-white/[0.04] hover:border-cyan-500/20 transition-all group flex items-start gap-3">
                                    <div className="flex-1">
<<<<<<< HEAD
                                        <div className="flex items-start justify-between mb-2">
                                            <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">{org.name}</p>
                                            <ExternalLink className="w-3 h-3 text-white/15 group-hover:text-cyan-400/60 transition-colors shrink-0 ml-2 mt-0.5" />
                                        </div>
                                        <p className="text-xs text-white/60 leading-relaxed font-medium">{org.desc}</p>
=======
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">{org.name}</p>
                                            <ExternalLink className="w-3 h-3 text-white/15 group-hover:text-cyan-400/60 transition-colors" />
                                        </div>
                                        <p className="text-xs text-white/25">{org.desc}</p>
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Become a partner */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-3xl p-8 md:p-12 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Handshake className="w-6 h-6 text-cyan-400/60" />
                            <h2 className="text-xl font-bold text-white/70" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Become a Partner</h2>
                        </div>
<<<<<<< HEAD
                        <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-2xl">
                            We welcome partnerships with healthcare advocacy organizations, academic institutions, open-source health projects, patient communities, NGOs, and mission-aligned companies. We <span className="text-cyan-400 font-bold">don't partner</span> with organizations that <Link to={createPageUrl('TheProblem')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 font-medium">profit from selling patient data</Link>.
=======
                        <p className="text-sm text-white/35 leading-relaxed mb-8 max-w-2xl">
                            We welcome partnerships with healthcare advocacy organizations, academic institutions, open-source health projects, patient communities, NGOs, and mission-aligned companies. We don't partner with organizations that profit from selling patient data.
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                            {partnerBenefits.map((b, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/50 shrink-0 mt-0.5" />
                                    <p className="text-xs text-white/40">{b}</p>
                                </div>
                            ))}
                        </div>
                        <a href="mailto:partnerships@humanos.foundation" className="inline-flex items-center gap-2 glow-btn px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-sm text-white font-medium">
                            partnerships@humanos.foundation →
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
