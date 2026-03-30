import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';

export default function JoinEmbedded() {
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

            <section className="pb-28 px-4 md:px-8 flex justify-center">
                <div className="w-full max-w-2xl glass-strong rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:border-cyan-500/20">
                    
                    {/* Native Odoo CRM Form Embed */}
                    {/* Bypasses all REST API routing requirements to strictly guarantee Lead ingestion for Launch */}
                    <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: '850px', background: 'transparent' }}>
                        <iframe 
                            src="https://team.humanos.foundation/contactus" 
                            width="100%" 
                            height="850" 
                            frameBorder="0" 
                            scrolling="yes"
                            className="w-full h-full border-none bg-transparent"
                            title="Odoo Native Lead Intake Form"
                        ></iframe>
                    </div>

                    <p className="text-xs text-white/20 text-center mt-6">
                        Secured natively by Odoo CRM Core.
                    </p>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
