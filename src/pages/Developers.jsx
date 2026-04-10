import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import SurvivalBanner from '../components/landing/SurvivalBanner';
import { Terminal, Github, Webhook } from 'lucide-react';

export default function Developers() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Aura hOS Developer API — FHIR R4 Interoperability" 
                description="Technical documentation for integrating Epic/Cerner endpoints with the Aura hOS Zero-Knowledge architecture." 
                url="https://humanos.foundation/developers" 
            />
            <SurvivalBanner />
            <Navbar />
            
            <PageHero 
                badge="API & Architecture" 
                title="Developer" 
                titleAccent="Portal" 
                subtitle="Aura hOS is fully open-source. Build integrations directly against our Zero-Knowledge OAuth Webhook API using standard FHIR R4 schemas." 
            />

            <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
                
                {/* Integration Architecture */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.05]">
                        <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
                            <Webhook className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold font-outfit text-white">The Handshake Webhook</h2>
                            <p className="text-xs text-white/50">Strict HTTP/REST stateless execution over Supabase Edge Functions</p>
                        </div>
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                        Unlike traditional clinical software, you do not need to install local databases or secure HIPAA pipelines. You simply format the patient's EHR into a <code className="text-cyan-300 font-mono text-[10px] bg-cyan-500/10 px-1 rounded">JSON FHIR R4</code> standard and `POST` it to our ephemeral edge proxy along with your <code>Clinic Routing ID</code>. 
                    </p>

                    <div className="bg-[#0a0a0f] rounded-xl border border-white/5 overflow-hidden">
                        <div className="bg-white/[0.02] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                            <span className="text-[10px] text-white/30 ml-2 font-mono uppercase tracking-wider">api.humanos.foundation/v1/fhir/ingest</span>
                        </div>
                        <div className="p-6 overflow-x-auto text-xs font-mono text-cyan-300/80 leading-relaxed">
                            <span className="text-purple-400">POST</span> <span className="text-white/60">/v1/fhir/ingest</span><br />
                            <span className="text-blue-400">Authorization:</span> Bearer {'<'}YOUR_AURA_SECRET{'>'}<br />
                            <span className="text-blue-400">Content-Type:</span> application/json<br />
                            <span className="text-blue-400">X-Aura-Clinic-ID:</span> RVFHC-CO-825<br /><br />
                            
                            <span className="text-white/40">{'{'}</span><br />
                            <span className="text-rose-300">  "resourceType"</span><span className="text-white/40">:</span> <span className="text-emerald-300">"Patient"</span><span className="text-white/40">,</span><br />
                            <span className="text-rose-300">  "identifier"</span><span className="text-white/40">: [{'{'}</span><br />
                            <span className="text-rose-300">    "system"</span><span className="text-white/40">:</span> <span className="text-emerald-300">"urn:oid:Aura-hOS-Secure-Vault"</span><span className="text-white/40">,</span><br />
                            <span className="text-rose-300">    "value"</span><span className="text-white/40">:</span> <span className="text-emerald-300">"02934-x82A"</span><br />
                            <span className="text-white/40">  {'}'}],</span><br />
                            <span className="text-rose-300">  "active"</span><span className="text-white/40">:</span> <span className="text-purple-400">true</span><br />
                            <span className="text-white/40">{'}'}</span>
                        </div>
                    </div>
                </div>

                {/* Open Source Modules */}
                <div className="grid md:grid-cols-2 gap-6">
                    <a href="https://github.com/Humanos-OS/aura-health-os" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group">
                        <div className="p-3 bg-white/[0.03] w-max rounded-xl mb-4 group-hover:bg-cyan-500/10 transition-colors">
                            <Github className="w-6 h-6 text-white/50 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Aura Health OS (Mobile App)</h3>
                        <p className="text-sm text-white/50 leading-relaxed">The React Native logic running natively on the patient's device, handling the AES-256 decryption and biometrics.</p>
                    </a>

                    <a href="https://github.com/Humanos-OS/aura-hub" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group">
                        <div className="p-3 bg-white/[0.03] w-max rounded-xl mb-4 group-hover:bg-cyan-500/10 transition-colors">
                            <Terminal className="w-6 h-6 text-white/50 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Aura Hub (Backend & Edges)</h3>
                        <p className="text-sm text-white/50 leading-relaxed">The Supabase Deno Edge functions managing the secure webhook routes and processing the core $199/month Clinic Gateway base alongside $0.25 API micro-transactions per FHIR payload pull.</p>
                    </a>
                </div>

            </section>
            
            <Footer />
        </div>
    );
}
