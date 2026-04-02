import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { createPageUrl } from '@/utils';

export default function Blog() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <div className="fixed bottom-6 left-6 z-[60] transition-all duration-300"></div>
            <SEOMeta
                title="Blog — Health Data Rights & Sovereign Stories | Humanos Foundation"
                description="Insights, manifestos, and patient stories from the health data sovereignty movement."
                url="https://humanos.foundation/blog"
                type="website"
            />
            <Navbar />
            <PageHero
                badge="V0.5 ALPHA — SOVEREIGN LIBRARY"
                title="The Movement"
                titleAccent="Insights"
                subtitle="Exposing the 5-minute hustle and architecting a future where you own your full story."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Native Fallback Pipeline (CORS/API Bypass) */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-2 bg-gradient-to-tr from-blue-500/10 via-white/10 to-transparent rounded-[2rem] blur-xl pointer-events-none"
                        />
                        <div className="w-full relative rounded-3xl overflow-hidden glass-strong border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 bg-obsidian" style={{ height: '80vh', minHeight: '800px' }}>
                            <iframe
                                src="https://team.humanos.foundation/blog/our-blog-1"
                                className="w-full absolute"
                                style={{ 
                                    height: 'calc(100% + 150px)', 
                                    top: '-70px', 
                                    border: '0',
                                    backgroundColor: 'transparent'
                                }}
                                title="Movement Library"
                                scrolling="yes"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <PageCTA
                title="The system robs you of your nuance."
                subtitle="We build the architecture that brings it back. Join thousands of patients demanding their data sovereignty."
                cta="Enlist Today"
                ctaHref={createPageUrl('Join')}
            />
            <Footer />
        </div>
    );
}


