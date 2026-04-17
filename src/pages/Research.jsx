import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import HighlightShare from '../components/shared/HighlightShare';
import NativeShareWidget from '../components/shared/NativeShareWidget';
import { Network, LineChart, TestTube2, ShieldCheck, Activity, Users, Clock } from 'lucide-react';

export default function Research() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Clinical Research & Federal Outcomes — Humanos Foundation" 
                description="Review the active clinical hypotheses and federal health equity directives investigating health data sovereignty." 
                url="https://humanos.foundation/research" 
            />
            <Navbar />
            <HighlightShare />
            
            <PageHero 
                badge="Clinical Hypotheses" 
                title="Outcomes" 
                titleAccent="Evidence" 
                subtitle="The Humanos Foundation is actively deploying open-source architecture to test the physiological impact of Health Data Sovereignty on neurodivergent and marginalized patient cohorts." 
            />

            <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
                
                {/* Hypothesis 1 (Federal Grant Core) */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 opacity-pointer-events-none">
                        <Network className="w-64 h-64" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                            Active Pipeline / Federal Phase 1 Pilot
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold font-outfit text-white">Neurodivergent UI Sovereignty vs. Adherence Rates</h2>
                            <NativeShareWidget 
                                title="Clinical Hypotheses — Humanos Foundation"
                                text="Review the active clinical hypotheses investigating health data sovereignty at the Humanos Foundation."
                                url="https://humanos.foundation/research"
                            />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 border-b border-white/5 pb-2">The Control Paradigm</h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Current EHR portals (e.g., MyChart) are the digital manifestations of the 15-20 page clipboard penalty. For neurodivergent populations (ADHD/Autism spectrums), this clinical friction and the resulting compressed 5-minute clinical documentation trigger severe executive dysfunction, directly resulting in an average 40% medication non-adherence rate.
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

                {/* Federal Protocol Documentation Section */}
                <div className="mt-12 border-t border-white/10 pt-12">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-xl md:text-2xl font-bold font-outfit text-white">Full Clinical Protocol & Methodology</h3>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Column 1: Aims & Methodology */}
                        <div className="space-y-8">
                            <div className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                                    <Activity className="w-4 h-4 text-cyan-400" /> Specific Aims & Mechanics
                                </h4>
                                <ul className="space-y-3 text-sm text-white/60">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                                        <p><strong className="text-white/80">Objective:</strong> Quantify the mathematical lift in pharmacological adherence (Rx fills) when compliance-driven UI barriers (2FA resets, generic notifications) are removed via localized FHIR interception.</p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                                        <p><strong className="text-white/80">Data Capture Mechanics:</strong> Real-time Rx refill rates are ingested securely via encrypted e-prescribing webhooks locally. There is NO reliance on unreliable patient self-reporting.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                                    <Users className="w-4 h-4 text-purple-400" /> Inclusion & Exclusion Cohorts
                                </h4>
                                <ul className="space-y-3 text-sm text-white/60">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                                        <p><strong className="text-white/80">Criteria:</strong> Patients aged 8-17, formally navigating ASD/ADHD neurodivergence, currently requiring daily pharmacological intervention (e.g., Stimulants, SSRIs).</p>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/80 mt-1.5 shrink-0" />
                                        <p><strong className="text-white/80">Exclusions:</strong> Patients requiring active inpatient psychiatric monitoring or severe acute intervention, to maintain pure outpatient executive function logging.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Governance & Timeline */}
                        <div className="space-y-8">
                            <div className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Zero-Knowledge IRB Defense
                                </h4>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    Because the Aura hOS environment processes all FHIR payloads natively on the sterile client device (AES-GCM 256 encryption), the cloud architecture is mathematically blinded to the patient's Protected Health Information (PHI). This directly legally insulates the study structure, bypassing standard HIPAA BAA and FDA SaMD liabilities entirely, allowing for accelerated Safe Harbor pilot executions.
                                </p>
                            </div>

                            <div className="glass p-6 rounded-2xl border border-white/5">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                                    <Clock className="w-4 h-4 text-amber-400" /> Clinical Phase Timeline
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                                            <div className="w-px h-8 bg-white/10 my-1" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Phase I (Months 1-3)</p>
                                            <p className="text-xs text-white/50">Baseline UI friction logging and cohort onboarding via NGO routes.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                            <div className="w-px h-8 bg-white/10 my-1" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Phase II (Months 4-6)</p>
                                            <p className="text-xs text-white/50">Aura hOS continuous zero-friction Rx routing deployment.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Phase III (Months 7-12)</p>
                                            <p className="text-xs text-white/50">Quantitative evaluation of adherence lift and Federal Grant reporting.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20 rounded-2xl flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div>
                            <h4 className="text-sm font-bold text-red-400 mb-2">Institutional Advisory Mandate</h4>
                            <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
                                While specifically engineered as open-source technical architecture, federal compliance mandates require rigorous medical oversight. The Foundation is actively securing a <strong>Chief Medical Information Officer (CMIO)</strong> or <strong>Principal Investigator</strong> to permanently anchor the institutional validity of this protocol.
                            </p>
                        </div>
                        <a href="mailto:hello@humanos.foundation" className="shrink-0 px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 whitespace-nowrap">
                            Apply for PI Role
                        </a>
                    </div>
                </div>

            </section>
            
            <Footer />
        </div>
    );
}
