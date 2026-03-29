import React, { useState, useEffect } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { odooClient } from '../api/odooClient';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

import PageHero from '../components/shared/PageHero';
import { 
    Briefcase,
    MessageSquare,
    ExternalLink,
    Rocket
} from 'lucide-react';


export default function Team() {
    const [activeProjects, setActiveProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);

    useEffect(() => {
        // Fetch live projects from Odoo if available
        const fetchProjects = async () => {
            try {
                const projects = await odooClient.getProjects();
                if (projects) {
                    setActiveProjects(projects.slice(0, 3));
                }
            } catch (e) {
                console.error('Failed to fetch projects', e);
            } finally {
                setLoadingProjects(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta 
                title="Join the Team — Humanos Foundation" 
                description="Collaborate with a global team of developers, researchers, and advocates building the future of health data sovereignty." 
                url="https://humanos.foundation/team" 
            />
            <Navbar />
            
            <PageHero 
                badge="Foundation Core" 
                title="Join the" 
                titleAccent="Guardian Network" 
                subtitle="We are looking for builders, thinkers, and advocates to help us reclaim clinical sovereignty. Whether you're a developer or a patient advocate, your voice matters." 
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-12">
                    
                    {/* Centered Column: Context & Projects */}
                    <div className="w-full space-y-12">
                        <div className="glass-strong rounded-3xl p-8 border border-white/[0.05]">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                                <Rocket className="w-5 h-5 text-cyan-400" />
                                Active Missions
                            </h2>
                            
                            {loadingProjects ? (
                                <div className="space-y-4">
                                    {[1, 2].map(i => (
                                        <div key={i} className="h-24 bg-white/5 rounded-2xl animate-pulse" />
                                    ))}
                                </div>
                            ) : activeProjects.length > 0 ? (
                                <div className="space-y-4">
                                    {activeProjects.map((project, i) => (
                                        <div key={i} className="glass rounded-2xl p-5 border border-white/[0.03] hover:border-cyan-500/20 transition-all group">
                                            <h3 className="text-sm font-semibold mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{project.name}</h3>
                                            <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{project.description || 'Ongoing foundation mission to secure health data sovereignty.'}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="glass rounded-2xl p-8 border border-dashed border-white/10 text-center">
                                    <p className="text-sm text-white/30 italic">Live project feed currently syncing with the Sovereign Brain...</p>
                                    <p className="text-[10px] text-white/20 mt-2 uppercase tracking-widest font-bold">V0.5 ALPHA</p>
                                </div>
                            )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass rounded-3xl p-8 border border-white/[0.05]">
                                <MessageSquare className="w-6 h-6 text-blue-400 mb-4" />
                                <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">Volunteer Channel</h3>
                                <p className="text-xs text-white/40 mb-6 leading-relaxed">Join our Discord community where developers and advocates coordinate the movement daily.</p>
                                <a href="https://discord.gg/humanos" className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest">
                                    Enter Discord <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="glass rounded-3xl p-8 border border-white/[0.05]">
                                <Briefcase className="w-6 h-6 text-purple-400 mb-4" />
                                <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">Open Roles</h3>
                                <p className="text-xs text-white/40 mb-6 leading-relaxed">We are currently self-funded but always looking for key partners and dedicated full-time builders.</p>
                                <a href="https://team.humanos.foundation/jobs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest">
                                    Apply via Odoo Jobs <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
