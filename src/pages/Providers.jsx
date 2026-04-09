import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import SurvivalBanner from '../components/landing/SurvivalBanner';
import { motion } from 'framer-motion';
import { DatabaseZap, ShieldCheck, ActivitySquare, Ban, CheckCircle2, ChevronRight } from 'lucide-react';

const valueProps = [
    {
        icon: <Ban className="w-6 h-6 text-red-400" />,
        title: 'Drop the BAA Nightmare',
        desc: 'Most enterprise healthcare software requires a 12-month procurement cycle and massive HIPAA Business Associate Agreements (BAA). We do not hold keys to patient data. We mathematically qualify for the FTC HBNR Exemption, allowing you to deploy in 24 hours.'
    },
    {
        icon: <DatabaseZap className="w-6 h-6 text-cyan-400" />,
        title: '$0.25 Micro-Transaction SaaS',
        desc: 'Escape the $500k legacy vendor contracts. Aura hOS operates purely on usage. Every time a patient dynamically grants access to their local vault via your Clinic ID, we invoice $0.25. If there are no patients, your SaaS cost is exactly $0.00.'
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
        title: 'Zero-SSN Triaging',
        desc: 'Eliminate toxic data liability sitting on your reception servers. Because the patient holds the encryption footprint, clinical onboarding removes identifying friction. No unencrypted records sitting on hospital iPads.'
    }
];

export default function Providers() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Aura hOS for Enterprise Providers" 
                description="Drop the HIPAA BAA liability nightmare. Aura hOS delivers a Zero-Knowledge clinical pipeline with a $0.25 micro-transaction business model." 
                url="https://humanos.foundation/providers" 
            />
            <SurvivalBanner />
            <Navbar />
            
            <PageHero 
                badge="B2B Enterprise Portal" 
                title="Bypass the IT" 
                titleAccent="Procurement Floor" 
                subtitle="The mathematically irrefutable Zero-Knowledge architecture that destroys HIPAA liability, speeds up ingestion, and operates strictly on a $0.25 execution basis." 
            />

            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Value Metrics Section */}
                    <div className="space-y-12">
                        <div className="glass-strong p-8 rounded-3xl border border-blue-500/10">
                            <h2 className="text-2xl font-bold mb-6 font-outfit text-white/90">The FTC HBNR BAA Exemption Advantage</h2>
                            <p className="text-sm text-white/70 leading-relaxed mb-6">
                                The traditional clinical SaaS model forces hospitals to absorb massive risk by signing BAAs and retaining central databases of EHR data. 
                                Aura hOS completely breaks this model. The patient holds the master key on their mobile OS. As a provider, you merely access a transient, ephemeral data bridge.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-white/60">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                    <span>$250,000 average compliance savings per clinic</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/60">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                    <span>Instant FHIR R4 interoperability via secure Webhooks</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/60">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                    <span>Completely agnostic native React-built Provider Terminal</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {valueProps.map((prop, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 p-5 rounded-2xl glass hover:bg-white/[0.02] transition-colors border border-white/[0.04]"
                                >
                                    <div className="shrink-0 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                        {prop.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-2">{prop.title}</h4>
                                        <p className="text-xs text-white/60 leading-relaxed">{prop.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sales / Onboarding Intake Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-strong rounded-3xl p-8 border border-cyan-500/20 sticky top-24"
                    >
                        <div className="flex items-center gap-3 justify-center mb-8">
                            <ActivitySquare className="w-6 h-6 text-cyan-400" />
                            <h3 className="text-xl font-bold text-center font-outfit text-white">Claim Clinic Routing ID</h3>
                        </div>
                        
                        <p className="text-xs text-center text-white/50 mb-8 max-w-sm mx-auto">
                            Submit your practice information to provision a Zero-Knowledge Routing ID on our public registry and open your OAuth B2B pipeline.
                        </p>

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                            <input type="hidden" name="subject" value="New B2B Enterprise Lead - Aura hOS" />
                            <input type="hidden" name="redirect" value="https://humanos.foundation/providers?success=true" />

                            <div>
                                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Clinic / Hospital System</label>
                                <input required type="text" name="clinic_name" placeholder="e.g. River Valley Health" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/20" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Director Name</label>
                                    <input required type="text" name="name" placeholder="Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/20" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Work Email</label>
                                    <input required type="email" name="email" placeholder="CTO@clinic.org" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/20" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">EHR Matrix</label>
                                <select required name="ehr_system" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none">
                                    <option value="" disabled selected>Select Current EHR System</option>
                                    <option value="Epic">Epic</option>
                                    <option value="Cerner">Oracle Cerner</option>
                                    <option value="Athenahealth">Athenahealth</option>
                                    <option value="eClinicalWorks">eClinicalWorks</option>
                                    <option value="Other">Other / Paper</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full mt-6 group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300">
                                <span className="relative z-10 text-sm font-bold text-cyan-100">Provision Ledger ID</span>
                                <ChevronRight className="relative z-10 w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
            
            <Footer />
        </div>
    );
}
