import React from 'react';
import { Heart, ExternalLink, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import HOSLogo from '../shared/HOSLogo';

const footerLinks = {
    Movement: [
        { label: 'Origin', page: 'Origin' },
        { label: 'Manifesto', page: 'Manifesto' },
        { label: 'The Problem', page: 'TheProblem' },
        { label: 'Our Principles', page: 'Principles' },
        { label: 'Join the Movement', page: 'Join' },
    ],
    Resources: [
        { label: 'Blog & Insights', page: 'Blog' },
        { label: 'Press & Media', page: 'Press' },
        { label: 'FAQ', page: 'FAQ' },
        { label: 'Glossary', page: 'Glossary' },
        { label: 'Open Source', page: 'OpenSource' },
    ],
    Legal: [
        { label: 'Privacy Policy', page: 'Privacy' },
        { label: 'Terms of Use', page: 'Terms' },
        { label: 'Cookie Policy', page: 'Cookies' },
        { label: 'Accessibility', page: 'Accessibility' },
        { label: 'Disclaimer', page: 'Disclaimer' },
    ],
    Connect: [
        { label: 'Contact', page: 'Contact' },
        { label: 'Partners', page: 'Partners' },
        { label: 'Volunteer', page: 'Volunteer' },
        { label: 'Security', page: 'Security' },
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
                            <p className="text-[10px] text-white/15">By Ramon Luis Rios Jr.</p>
                            <a href="https://ramonrios.net" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/20 hover:text-cyan-400/60 transition-colors block">ramonrios.net</a>
                            <a href="https://coqui.cloud" target="_blank" rel="noopener noreferrer" className="text-[10px] text-white/20 hover:text-cyan-400/60 transition-colors block">Coqui Cloud Dev Co.</a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-4">{section}</p>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link to={createPageUrl(link.page)} className="text-xs text-white/25 hover:text-cyan-400/70 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] text-white/15">
                        © 2026 Humanos Foundation. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-white/10">
                        <span>Built with</span>
                        <Heart className="w-2.5 h-2.5 text-rose-400/30 inline mx-0.5" />
                        <span>for the movement</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="mailto:hello@humanos.foundation" className="text-[10px] text-white/15 hover:text-cyan-400/60 transition-colors">
                            hello@humanos.foundation
                        </a>
                        <a href="https://buymeacoffee.com/ramonriosjr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-yellow-400/40 hover:text-yellow-400/70 transition-colors border border-yellow-500/10 hover:border-yellow-500/30 px-3 py-1.5 rounded-lg">
                            <Coffee className="w-3 h-3" /> Support the movement
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}