import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Code, PenTool, Globe, Megaphone, BookOpen, Users } from 'lucide-react';

const roles = [
    { icon: Code, title: 'Developer', desc: 'Build open-source tools for the movement' },
    { icon: PenTool, title: 'Writer / Editor', desc: 'Create content and thought leadership' },
    { icon: Globe, title: 'Translator', desc: 'Make the movement globally accessible' },
    { icon: Megaphone, title: 'Advocate', desc: 'Spread the message in your community' },
    { icon: BookOpen, title: 'Researcher', desc: 'Contribute data and policy research' },
    { icon: Users, title: 'Community Lead', desc: 'Organize local chapters and events' },
];

export default function Volunteer() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Volunteer for the hOS movement — Humanos Foundation" description="Contribute to the health data sovereignty movement as a developer, writer, translator, advocate, researcher, or community leader. Volunteer with Humanos Foundation." url="https://humanos.foundation/volunteer" />
            <Navbar />
            <PageHero badge="Get Involved" title="Volunteer for" titleAccent="the Movement" subtitle="The hOS movement is built by volunteers who believe health data sovereignty is worth fighting for. Find your role." />
            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
                        {roles.map((role, i) => (
                            <motion.button key={role.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                                className={`glass rounded-2xl p-6 border text-left transition-all duration-300 group border-white/[0.04] hover:border-cyan-500/15`}
                            >
                                <role.icon className={`w-5 h-5 mb-3 transition-colors text-white/30 group-hover:text-cyan-400/50`} />
                                <h3 className="text-sm font-semibold text-white/70 mb-1" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{role.title}</h3>
                                <p className="text-xs text-white/60 font-medium group-hover:text-white/80 transition-colors">{role.desc}</p>
                            </motion.button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full">
                            {/* Animated Soft Smoke Halo */}
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/5 via-white/10 to-transparent rounded-[2rem] blur-xl pointer-events-none"
                            />
                            <div className="w-full relative rounded-3xl overflow-hidden glass-strong border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 bg-obsidian" style={{ height: '820px' }}>
                                <iframe
                                    src="https://team.humanos.foundation/contactus"
                                    className="w-full absolute"
                                    style={{ 
                                        height: 'calc(100% + 200px)', 
                                        top: '-75px', 
                                        border: '0',
                                        backgroundColor: 'transparent'
                                    }}
                                    title="Volunteer"
                                    scrolling="yes"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
