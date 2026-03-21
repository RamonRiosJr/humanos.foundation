import React, { useState, useEffect } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/humanosClient';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

import PageHero from '../components/shared/PageHero';
import { 
    CheckCircle2, 
    Code, 
    PenTool, 
    Globe, 
    Megaphone, 
    BookOpen, 
    Users, 
    Briefcase,
    Mail,
    MessageSquare,
    ExternalLink,
    Rocket
} from 'lucide-react';

const roles = [
    { icon: Code, title: 'Developer', desc: 'Build open-source tools for the movement' },
    { icon: PenTool, title: 'Writer / Editor', desc: 'Create content and thought leadership' },
    { icon: Globe, title: 'Translator', desc: 'Make the movement globally accessible' },
    { icon: Megaphone, title: 'Advocate', desc: 'Spread the message in your community' },
    { icon: BookOpen, title: 'Researcher', desc: 'Contribute data and policy research' },
    { icon: Users, title: 'Community Lead', desc: 'Organize local chapters and events' },
];

export default function Team() {
    const [form, setForm] = useState({ name: '', email: '', role: 'volunteer', reason: '', newsletter: true, volunteer: true });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');

    const [activeProjects, setActiveProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);

    useEffect(() => {
        // Fetch live projects from Odoo if available
        const fetchProjects = async () => {
            try {
                const projects = await base44.entities.Project?.list();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await base44.entities.JoinRequest.create({ 
            ...form, 
            reason: selectedRole ? `Role interest: ${selectedRole}. ${form.reason}` : form.reason
        });
        
        setSubmitted(true);
        setLoading(false);
    };

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
                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
                    
                    {/* Left Column: Context & Projects */}
                    <div className="lg:col-span-7 space-y-12">
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
                                <a href="mailto:careers@humanos.foundation" className="inline-flex items-center gap-2 text-[10px] font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest">
                                    Inquire via Email <Mail className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Enrollment Form */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-strong rounded-3xl p-12 text-center border border-cyan-500/20">
                                        <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto mb-5" />
                                        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Application Received</h2>
                                        <p className="text-white/60 text-sm leading-relaxed mb-4">You've taken the first step toward reclaiming clinical sovereignty. We'll be in touch with next steps.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 border border-white/[0.05] space-y-5">
                                        <div className="border-b border-white/[0.05] pb-4 mb-4">
                                            <h3 className="text-base font-semibold text-white/80" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Apply for the Network</h3>
                                            <p className="text-[11px] text-white/30 uppercase tracking-widest mt-1">Select your expertise</p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 mb-6">
                                            {roles.map((role) => (
                                                <button key={role.title} type="button" onClick={() => setSelectedRole(role.title)}
                                                    className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 border ${selectedRole === role.title ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'glass border-white/[0.05] text-white/20 hover:text-white/40 hover:border-white/10'}`}
                                                >
                                                    <role.icon className="w-4 h-4" />
                                                </button>
                                            ))}
                                        </div>

                                        {selectedRole && (
                                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest text-center mb-4">
                                                Selected Role: {selectedRole}
                                            </motion.p>
                                        )}

                                        {[{ key: 'name', label: 'Full Name', type: 'text', required: true },
                                        { key: 'email', label: 'Email Address', type: 'email', required: true }].map(f => (
                                            <div key={f.key}>
                                                <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 block font-bold">{f.label} *</label>
                                                <input required={f.required} type={f.type} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                                                    className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent shadow-inner" />
                                            </div>
                                        ))}

                                        <div>
                                            <label className="text-[10px] text-white/40 uppercase tracking-widest mb-2 block font-bold">Contribution Intent</label>
                                            <textarea value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} rows={4}
                                                placeholder="Tell us about your background and how you want to contribute to the hOS movement..."
                                                className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent resize-none" />
                                        </div>

                                        <div className="flex justify-center mt-2">
                                            {/* Turnstile Bypassed for Testing */}
                                        </div>

                                        <button type="submit" disabled={loading} className="w-full glow-btn py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-bold text-xs uppercase tracking-widest disabled:opacity-50">
                                            {loading ? 'Submitting...' : 'Join the Guardian Network →'}
                                        </button>
                                        
                                        <p className="text-[9px] text-white/10 text-center uppercase tracking-tighter">By joining, you agree to the Foundation's Code of Conduct and Mission.</p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
