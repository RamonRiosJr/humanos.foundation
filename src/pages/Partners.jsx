import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';



const partnerBenefits = [
    'Mutual amplification of your mission and ours',
    'Co-authored thought leadership and blog content',
    'Event and webinar collaboration opportunities',
    'Recognition on our Partners page and in press materials',
    'Access to our growing community of patients, clinicians, and technologists',
];

export default function Partners() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Partners — Organizations Aligned with Health Data Sovereignty" description="Humanos Foundation partners with healthcare advocacy organizations, academic institutions, and open-source health projects committed to patient data rights." url="https://humanos.foundation/partners" />
            <Navbar />
            <PageHero badge="Collaboration" title="Partners in" titleAccent="Sovereignty" subtitle="We are stronger together. We partner with organizations that share our commitment to patient data rights and health equity." />
            <section className="pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* Become a partner */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-strong rounded-3xl p-8 md:p-12 border border-cyan-500/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Handshake className="w-6 h-6 text-cyan-400/60" />
                            <h2 className="text-xl font-bold text-white/70" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Become a Partner</h2>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-2xl">
                            We welcome partnerships with healthcare advocacy organizations, academic institutions, open-source health projects, patient communities, NGOs, and mission-aligned companies. We <span className="text-cyan-400 font-bold">don't partner</span> with organizations that <Link to={createPageUrl('TheProblem')} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 font-medium">profit from selling patient data</Link>.
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
}


