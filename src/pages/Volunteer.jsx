import React, { useState } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/humanosClient';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { Turnstile } from '@marsidev/react-turnstile';
import PageHero from '../components/shared/PageHero';
import { CheckCircle2, Code, PenTool, Globe, Megaphone, BookOpen, Users } from 'lucide-react';

const roles = [
    { icon: Code, title: 'Developer', desc: 'Build open-source tools for the movement' },
    { icon: PenTool, title: 'Writer / Editor', desc: 'Create content and thought leadership' },
    { icon: Globe, title: 'Translator', desc: 'Make the movement globally accessible' },
    { icon: Megaphone, title: 'Advocate', desc: 'Spread the message in your community' },
    { icon: BookOpen, title: 'Researcher', desc: 'Contribute data and policy research' },
    { icon: Users, title: 'Community Lead', desc: 'Organize local chapters and events' },
];

export default function Volunteer() {
    const [form, setForm] = useState({ name: '', email: '', role: 'volunteer', reason: '', newsletter: true, volunteer: true });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [turnstileToken, setTurnstileToken] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!turnstileToken) {
            alert('Please verify you are human by completing the captcha.');
            setLoading(false);
            return;
        }

        await base44.entities.JoinRequest.create({ ...form, reason: selectedRole ? `Role interest: ${selectedRole}. ${form.reason}` : form.reason, turnstile_token: turnstileToken });
        setSubmitted(true);
        setLoading(false);
    };

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Volunteer for the hOS Movement — Humanos Foundation" description="Contribute to the health data sovereignty movement as a developer, writer, translator, advocate, researcher, or community leader. Volunteer with Humanos Foundation." url="https://humanos.foundation/volunteer" />
            <Navbar />
            <PageHero badge="Get Involved" title="Volunteer for" titleAccent="the Movement" subtitle="The hOS movement is built by volunteers who believe health data sovereignty is worth fighting for. Find your role." />
            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
                        {roles.map((role, i) => (
                            <motion.button key={role.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                                onClick={() => setSelectedRole(role.title)}
                                className={`glass rounded-2xl p-6 border text-left transition-all duration-300 group ${selectedRole === role.title ? 'border-cyan-500/40 bg-cyan-500/5' : 'border-white/[0.04] hover:border-cyan-500/15'}`}
                            >
                                <role.icon className={`w-5 h-5 mb-3 transition-colors ${selectedRole === role.title ? 'text-cyan-400' : 'text-white/30 group-hover:text-cyan-400/50'}`} />
                                <h3 className="text-sm font-semibold text-white/70 mb-1" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{role.title}</h3>
                                <p className="text-xs text-white/60 font-medium group-hover:text-white/80 transition-colors">{role.desc}</p>
                            </motion.button>
                        ))}
                    </div>

                    <div className="max-w-xl mx-auto">
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-strong rounded-3xl p-12 text-center border border-cyan-500/20">
                                    <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto mb-5" />
                                    <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Welcome, Volunteer</h2>
                                    <p className="text-white/60 text-sm leading-relaxed mb-4">We'll be in touch with next steps. Thank you for believing in the mission.</p>
                                </motion.div>
                            ) : (
                                <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 border border-white/[0.05] space-y-5">
                                    <h3 className="text-base font-semibold text-white/60 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                                        {selectedRole ? `Applying as: ${selectedRole}` : 'Tell us about yourself'}
                                    </h3>
                                    {[{ key: 'name', label: 'Full Name', type: 'text', required: true },
                                    { key: 'email', label: 'Email', type: 'email', required: true }].map(f => (
                                        <div key={f.key}>
                                            <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">{f.label} {f.required && '*'}</label>
                                            <input required={f.required} type={f.type} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                                                className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent" />
                                        </div>
                                    ))}
                                    <div>
                                        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Why do you want to volunteer?</label>
                                        <textarea value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} rows={3}
                                            placeholder="Your motivation, skills, or experience..."
                                            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent resize-none" />
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <Turnstile
                                            siteKey="1x00000000000000000000AA"
                                            onSuccess={(token) => setTurnstileToken(token)}
                                            options={{ theme: 'dark' }}
                                        />
                                    </div>

                                    <button type="submit" disabled={loading} className="w-full glow-btn py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-semibold text-sm tracking-wide disabled:opacity-50">
                                        {loading ? 'Submitting...' : 'Join the Volunteer Network →'}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
