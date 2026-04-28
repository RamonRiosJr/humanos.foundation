import React from 'react';
import { Heart, ExternalLink, Zap, Facebook, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import HOSLogo from '../shared/HOSLogo';

const footerLinks = {
    Movement: [
        { label: 'Origin', page: 'Origin' },
        { label: 'Manifesto', page: 'Manifesto' },
        { label: 'The Problem', page: 'TheProblem' },
        { label: 'The Solution', page: 'TheSolution' },
        { label: 'Our Principles', page: 'Principles' },
        { label: 'Team', page: 'Team' },
        { label: 'Events', page: 'Events' },
        { label: 'Join the Movement', page: 'Join' },
    ],
    Resources: [
        { label: 'Architecture Whitepaper', href: 'https://aurahos.io/whitepaper', isExternal: true, disclaimer: 'Aura hOS proudly donates its Sovereign Technology to our patients.' },
        { label: 'Developer Portal (API)', page: 'Developers' },
        { label: 'Interactive Sandbox', href: 'https://aurahos.io/demo', isExternal: true },
        { label: 'Clinical Research', page: 'Research' },
        { label: 'Ecosystem Resources', page: 'Resources' },
        { label: 'Blog & Insights', page: 'Blog' },
        { label: 'Press & Media', page: 'Press' },
        { label: 'FAQ', page: 'FAQ' },
        { label: 'Glossary', page: 'Glossary' },
        { label: 'Open Source Bounties', page: 'Bounties' },
        { label: 'Open Source', page: 'OpenSource' },
    ],
    Legal: [
        { label: 'Institutional Governance', page: 'Governance' },
        { label: 'Privacy Policy', page: 'Privacy' },
        { label: 'Terms of Use', page: 'Terms' },
        { label: 'Cookie Policy', page: 'Cookies' },
        { label: 'Accessibility', page: 'Accessibility' },
        { label: 'Disclaimer', page: 'Disclaimer' },
    ],
    Connect: [
        { label: 'Contact', page: 'Contact' },
        { label: 'Help & Support', page: 'Support' },
        { label: 'Partners', page: 'Partners' },
        { label: 'Volunteer', page: 'Volunteer' },
        { label: 'Security', page: 'Security' },
        { label: 'System Status', page: 'Status' },
        { label: 'Clinical Directory', page: 'Clinics' },
        { label: 'Federated Onboarding', href: 'https://aurahos.io', isExternal: true },
    ],
};

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-10 px-4 md:px-8 border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-4">
                            <HOSLogo size={44} wordmarkSize="sm" variant="full" asLink={false} />
                        </div>
                        <p className="text-xs text-white/20 leading-relaxed mb-4">
                            Returning health data sovereignty to the individual.
                        </p>
                        <a href="https://humanos.foundation" target="_blank" rel="noopener noreferrer" className="text-[11px] text-cyan-500/40 hover:text-cyan-400 transition-colors flex items-center gap-1">
                            humanos.foundation <ExternalLink className="w-3 h-3" />
                        </a>
                        <div className="mt-3 space-y-1">
                            <p className="text-[10px] text-white/15">By Systems Architect Ramon Luis Rios Jr.</p>
                            <a href="https://ramonrios.net" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/20 hover:text-cyan-400/60 transition-colors block">ramonrios.net</a>
                            <a href="https://ramonrios.net" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/20 hover:text-cyan-400/60 transition-colors block">RamonRios.Net</a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 border-b border-white/10 pb-1">{section}</p>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        {link.isExternal ? (
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-bold flex items-center gap-1">
                                                {link.label} <ExternalLink className="w-2 h-2 opacity-70" />
                                            </a>
                                        ) : (
                                            <Link to={createPageUrl(link.page)} className="text-xs text-white/50 hover:text-cyan-400 transition-colors font-medium">
                                                {link.label}
                                            </Link>
                                        )}
                                        {link.disclaimer && (
                                            <p className="text-[9px] text-zinc-500 italic mt-1.5 leading-tight pr-4">{link.disclaimer}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 pb-4 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
                    <p className="text-[10px] text-white/15">
                        © 2026 Humanos Foundation. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-white/10">
                        <span>Built with</span>
                        <Heart className="w-2.5 h-2.5 text-rose-400/30 inline mx-0.5" />
                        <span>for the movement</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border-r border-white/10 pr-4 mr-1">
                            <a href="https://www.facebook.com/HumanosFoundation" target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/20 hover:text-blue-500 hover:bg-blue-500/10 rounded-md transition-all" aria-label="Facebook">
                                <Facebook className="w-3.5 h-3.5" />
                            </a>
                            <a href="https://github.com/RamonRiosJr/humanos.foundation" target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/20 hover:text-white hover:bg-white/10 rounded-md transition-all" aria-label="GitHub">
                                <Github className="w-3.5 h-3.5" />
                            </a>
                            <a href="https://www.youtube.com/@HumanosFoundation" target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-all" aria-label="YouTube">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                        <a href="mailto:hello@humanos.foundation" className="text-[10px] text-white/15 hover:text-cyan-400/60 transition-colors">
                            hello@humanos.foundation
                        </a>
                        <a href="https://www.gofundme.com/f/help-build-aura-hos-bridge-to-health-data-freedom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-yellow-300 hover:text-yellow-200 transition-colors border border-yellow-400/30 hover:border-yellow-400/60 bg-yellow-400/5 hover:bg-yellow-400/10 shadow-[0_0_10px_rgba(250,204,21,0.1)] hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] px-4 py-2 rounded-lg font-medium tracking-wide">
                            <Zap className="w-3.5 h-3.5" /> Support the Mission
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


