import React from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import HOSLogo from '../components/shared/HOSLogo';
import GenericIntakeForm from '../components/shared/GenericIntakeForm';

export default function Join() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Join the hOS Movement — Health Data Sovereignty for All"
                description="Join patients, clinicians, technologists, researchers, and advocates fighting for health data sovereignty. This is not a product waitlist — it's a movement. Sign up at Humanos Foundation."
                url="https://humanos.foundation/join"
            />
            <Navbar />
            <PageHero
                badge="The Movement"
                title="Join the"
                titleAccent="hOS Revolution"
                subtitle="This is not a product waitlist. This is a movement. Join thousands of patients, clinicians, and technologists who believe health data sovereignty is a human right."
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
                        <GenericIntakeForm type="Join" subtitle="Join the open-source movement. Contribute as a patient advocate, researcher, or engineer." />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
