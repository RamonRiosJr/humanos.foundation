import React from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import HOSLogo from '../components/shared/HOSLogo';

export default function Contact() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Contact the Foundation — Humanos Foundation"
                description="Reach out to the core team building health data sovereignty. Contact patients, clinicians, technologists, and advocates."
                url="https://humanos.foundation/contact"
            />
            <Navbar />
            <PageHero
                badge="Reach Out"
                title="Contact the"
                titleAccent="Foundation Core"
                subtitle="Whether you have questions, press inquiries, or partnership opportunities, reach out directly. We are building health data sovereignty together."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Logo above form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex justify-center mb-10"
                    >
                        <HOSLogo size={144} wordmarkSize="xl" variant="full" asLink={false} className="flex-col text-center gap-6" />
                    </motion.div>
                    
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
                                title="Contact"
                                scrolling="yes"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
