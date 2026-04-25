import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { motion } from 'framer-motion';
import { Scale, FileText, Landmark, ShieldAlert, FileSignature } from 'lucide-react';

const governanceDocs = [
    { title: 'Articles of Incorporation', date: '2026', status: 'Filed - State of Utah', icon: <Landmark className="w-4 h-4" /> },
    { title: '501(c)(3) IRS Determination', date: 'Pending', status: 'Awaiting Form 1023', icon: <Scale className="w-4 h-4" /> },
    { title: 'Conflict of Interest Policy', date: '2026', status: 'Adopted internally', icon: <ShieldAlert className="w-4 h-4" /> },
    { title: 'Form 990 Public Disclosures', date: '---', status: 'First filing due 2027', icon: <FileText className="w-4 h-4" /> },
];

export default function Governance() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Governance & Transparency — Humanos Foundation" 
                description="The Humanos Foundation is structurally committed to absolute transparency. Review our Board structure and financial compliance." 
                url="https://humanos.foundation/governance" 
            />
            <Navbar />
            
            <PageHero 
                badge="Institutional Armor" 
                title="Structural" 
                titleAccent="Governance" 
                subtitle="True privacy cannot exist without architectural transparency. The Humanos Foundation is a Utah Non-Profit governed by strict anti-corruption parameters." 
            />

            <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
                
                {/* Board Structure */}
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
                    <h2 className="text-2xl font-bold font-outfit text-white mb-6">Board of Directors & Independence</h2>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                        The Humanos Foundation software architecture governs the most sensitive telemetry of the human condition. To prevent corporate capture and aggressive data monetization, the Foundation utilizes an independent Board of Directors.
                    </p>
                    <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 mb-8">
                        <div className="flex items-start gap-4">
                            <ShieldAlert className="w-6 h-6 text-rose-400 mt-1 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-white mb-2">Zero-Compromise Conflict of Interest (COI) Policy</h4>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    No member of the Humanos Foundation Board of Directors, executive staff, or primary engineering team may hold concurrent equity in any entity that profits from the unauthorized sale, brokerage, or aggregation of patient de-identified data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Financial Open Ledger */}
                <div>
                    <h3 className="text-xl font-bold font-outfit text-white mb-6">Compliance Ledger</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {governanceDocs.map((doc, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl glass hover:bg-white/[0.02] border border-white/10 flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/[0.03] rounded-xl text-cyan-400">
                                        {doc.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white mb-1">{doc.title}</p>
                                        <p className="text-[10px] uppercase tracking-wider text-white/40">{doc.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-cyan-400/80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                                        {doc.status}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Federal Grant Oversight */}
                <div className="p-8 rounded-3xl bg-blue-900/20 border border-blue-500/20 text-center">
                    <FileSignature className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-3">Federal Accountability Standards</h3>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
                        To maintain strict institutional independence, any future funds rendered by Federal Health Equity mandates are required to be ring-fenced entirely for the open-source clinical engineering of Aura hOS. Operating bylaws strictly dictate that no foundational funds may be allocated to marketing, lobbying, or external corporate contracting.
                    </p>
                </div>

            </section>
            
            <Footer />
        </div>
    );
}
