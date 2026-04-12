import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { Network, LineChart, TestTube2, ArrowRight } from 'lucide-react';

export default function Research() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Clinical Research & PCORI Outcomes — Humanos Foundation" 
                description="Review the active clinical hypotheses structurally aligned with Patient-Centered Outcomes Research Institute (PCORI) research priorities investigating health data sovereignty." 
                url="https://humanos.foundation/research" 
            />
            <Navbar />
            
            <PageHero 
                badge="Clinical Hypotheses" 
                title="Outcomes" 
                titleAccent="Evidence" 
                subtitle="The Humanos Foundation is actively deploying open-source architecture to test the physiological impact of Health Data Sovereignty on neurodivergent and marginalized patient cohorts." 
            />

            <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
                
                {/* Hypothesis 1 (PCORI Core) */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 opacity-pointer-events-none">
                        <Network className="w-64 h-64" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                            Federal Grant Strategy / PCORI Alignment
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-6">Neurodivergent UI Sovereignty vs. Adherence Rates</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 border-b border-white/5 pb-2">The Control Paradigm</h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Current EHR portals (e.g., MyChart) enforce rigid UX protocols required by HIPAA compliance. For neurodivergent populations (ADHD/Autism spectrums), these 2FA friction walls, rigid notification cadences, and clinical jargon trigger severe executive dysfunction, directly resulting in an average 40% medication non-adherence rate.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-cyan-400/70 uppercase tracking-widest mb-3 border-b border-cyan-500/10 pb-2">The Experimental Paradigm</h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Aura hOS drops the portal liability. By ingesting FHIR payloads locally, the patient gains total sovereign control over the UX, notification frequency, and cognitive styling of their medical data. We hypothesize that removing compliance-driven UI barriers will lift neurodivergent adherence outcomes by a mathematically significant margin.
                                </p>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#0a0a0f] border border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-between">
                            <div className="flex items-center gap-3">
                                <TestTube2 className="w-5 h-5 text-purple-400" />
                                <div>
                                    <p className="text-xs font-bold text-white">Target Enrollment</p>
                                    <p className="text-[10px] text-white/50 uppercase">2,500 Pediatric Handshakes</p>
                                </div>
                            </div>
                            <div className="h-px sm:h-8 w-full sm:w-px bg-white/10" />
                            <div className="flex items-center gap-3">
                                <LineChart className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <p className="text-xs font-bold text-white">Primary Endpoint</p>
                                    <p className="text-[10px] text-white/50 uppercase">90-Day Rx Adherence Lift</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PCORI Framework Callout */}
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-lg font-bold text-white mb-4">Patient-Centered Outcomes Research Institute (PCORI) Alignment</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                        This architecture and subsequent clinical triaging logic has been designed specifically to investigate disparities in healthcare delivery models for individuals with Autism Spectrum Disorder (ASD), directly aligning with PCORI’s mandated priority populations regarding executive malfunction in chronic care management.
                    </p>
                    <a href="mailto:hello@humanos.foundation" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors">
                        Request Full Protocol Documentation <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </section>
            
            <Footer />
        </div>
    );
}
