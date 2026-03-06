import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Heart, Users, Code, DollarSign, ExternalLink } from 'lucide-react';

const supportWays = [
    { icon: Heart, title: 'Spread the Word', desc: 'Share our manifesto. Talk about patient data rights. Refer journalists, researchers, and advocates to us. The movement grows through people.', cta: 'Read the Manifesto', href: '/manifesto' },
    { icon: Users, title: 'Volunteer', desc: 'Give your time and skills. We need developers, writers, translators, and community organizers. Every contribution matters.', cta: 'Volunteer Now', href: '/volunteer' },
    { icon: Code, title: 'Contribute Code', desc: 'Help build open-source tools for the movement. Whether it\'s documentation, design, or development — we welcome all contributors.', cta: 'Visit Coqui Cloud', href: 'https://coqui.cloud' },
    { icon: DollarSign, title: 'Financial Support', desc: 'We are on the path to 501(c)(3) status. Financial support options including GitHub Sponsors will be available soon. Get notified when donations open.', cta: 'Join to Get Notified', href: '/join' },
];

export default function Support() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Support the Movement — Donate & Contribute to hOS" description="Support Humanos Foundation's mission for patient data sovereignty. Volunteer, contribute code, spread the word, or donate via Buy Me a Coffee. Every contribution fuels the revolution." url="https://humanos.foundation/support" />
            <Navbar />
            <PageHero badge="Support the Mission" title="Fuel the" titleAccent="Revolution" subtitle="The hOS movement depends on people who believe health data sovereignty is worth fighting for. Here's how you can help." />
            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {supportWays.map((way, i) => (
                            <motion.div key={way.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="glass rounded-3xl p-7 md:p-9 border border-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 group flex flex-col">
                                <div className="w-12 h-12 rounded-2xl glass border border-white/[0.06] flex items-center justify-center mb-5">
                                    <way.icon className="w-5 h-5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white/90 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{way.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1 font-medium">{way.desc}</p>
                                <a href={way.href} className="inline-flex items-center gap-2 text-sm text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                                    {way.cta} <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* 501c3 notice */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 glass rounded-2xl p-6 border border-amber-500/20 text-center">
                        <p className="text-sm text-white/60 leading-relaxed">
                            <span className="text-amber-400 font-bold">501(c)(3) Status:</span>{' '}
                            Humanos Foundation is currently pursuing formal nonprofit status. Tax-deductible donations will be enabled once status is confirmed. We'll announce this milestone to everyone who has joined the movement.
                        </p>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
