import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { TerminalSquare, CircleDollarSign, ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const activeBounties = [
    {
        title: 'Build Athenahealth JSON to FHIR R4 Parser',
        repo: 'aura-hub',
        reward: '$500 USD',
        status: 'Open',
        labels: ['Deno', 'TypeScript', 'Healthcare'],
        link: 'https://github.com/RamonRiosJr/aura-hub'
    },
    {
        title: 'Optimize React Native AES-256 Decryption Loop',
        repo: 'aura-health-os',
        reward: '$750 USD',
        status: 'Open',
        labels: ['React Native', 'Cryptography', 'C++'],
        link: 'https://github.com/RamonRiosJr/aura-health-os'
    },
    {
        title: 'Implement Vercel ISR Fallback for Odoo Blog',
        repo: 'humanos.foundation',
        reward: '$250 USD',
        status: 'Claimed',
        labels: ['Next.js', 'React', 'Caching'],
        link: 'https://github.com/RamonRiosJr/humanos.foundation'
    }
];

export default function Bounties() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Open Source Developer Bounties | FHIR Engineering Grants" 
                description="Contribute to the open-source Aura hOS clinical routing matrix. Claim USD bounties for merged Pull Requests in React Native, Deno, and FHIR architecture." 
                url="https://humanos.foundation/bounties" 
                keywords="open source bounties, FHIR parsing development, Deno edge functions jobs, React Native health tech, GitHub engineering grants, health tech developer bounties, healthcare API developer, open source software contributions"
            />
            <Navbar />
            
            <PageHero 
                badge="Decentralized Engineering" 
                title="Deferred Impact" 
                titleAccent="Grants" 
                subtitle="The Humanos Foundation relies on a decentralized, global engineering base. We formally escrow USD impact grants for critical FHIR parsers, routing optimizations, and cryptographic audits to be paid upon institutional capitalization." 
            />

            <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
                
                {/* How It Works */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden">
                        <TerminalSquare className="w-8 h-8 text-cyan-400 mb-4" />
                        <h4 className="text-sm font-bold text-white mb-2">1. Claim the Issue</h4>
                        <p className="text-xs text-white/50 leading-relaxed">
                            Navigate to our GitHub repositories and comment on an Issue tagged with `bounty-open` to request assignment. You must be formally assigned to secure the commit lock and prevent collision.
                        </p>
                    </div>
                    <div className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden">
                        <Code2 className="w-8 h-8 text-purple-400 mb-4" />
                        <h4 className="text-sm font-bold text-white mb-2">2. Submit Pull Request</h4>
                        <p className="text-xs text-white/50 leading-relaxed">
                            Engineer the feature or parser. Your PR must pass all CI/CD mathematical checks and maintain absolute Zero-Knowledge integrity.
                        </p>
                    </div>
                    <div className="glass p-6 rounded-3xl border border-white/5 relative overflow-hidden">
                        <CircleDollarSign className="w-8 h-8 text-emerald-400 mb-4" />
                        <h4 className="text-sm font-bold text-white mb-2">3. Merge & Payout</h4>
                        <p className="text-xs text-white/50 leading-relaxed">
                            Once your code is successfully squashed and merged into `main`, the USD impact grant is securely escrowed. Payouts are executed strictly upon Institutional Endowment or Federal Grant disbursement.
                        </p>
                    </div>
                </div>

                {/* Active Ledger */}
                <div>
                    <h3 className="text-xl font-bold font-outfit text-white mb-6">Active Engineering Contracts</h3>
                    <div className="space-y-4">
                        {activeBounties.map((bounty, idx) => (
                            <motion.a 
                                href={bounty.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="block p-6 rounded-2xl glass hover:bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all group"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="hidden sm:flex p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:border-cyan-500/30 transition-colors">
                                            <TerminalSquare className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{bounty.title}</h4>
                                            <p className="text-[10px] uppercase tracking-widest text-white/40">Repo: {bounty.repo}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-4 min-w-max">
                                        <p className="text-emerald-400 font-mono font-bold">{bounty.reward}</p>
                                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${bounty.status === 'Open' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-white/5 text-white/40 border-white/10'}`}>
                                            {bounty.status}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {bounty.labels.map(label => (
                                        <span key={label} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white/50">
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <a href="https://github.com/pulls?q=user%3ARamonRiosJr+is%3Aissue+is%3Aopen+label%3Abounty-open" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 font-bold text-sm tracking-wider uppercase transition-all glow-btn">
                        Explore Open Grants <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

            </section>
            
            <Footer />
        </div>
    );
}
