import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOMeta from '../components/shared/SEOMeta';
import { odooClient } from '../api/odooClient';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { CheckCircle2, Users, Heart, Code, Stethoscope, BookOpen, Megaphone, HelpCircle } from 'lucide-react';
import HOSLogo from '../components/shared/HOSLogo';

const roles = [
    { value: 'patient', label: 'Patient / Advocate', icon: Heart },
    { value: 'clinician', label: 'Clinician / Provider', icon: Stethoscope },
    { value: 'technologist', label: 'Technologist / Developer', icon: Code },
    { value: 'researcher', label: 'Researcher', icon: BookOpen },
    { value: 'journalist', label: 'Journalist / Media', icon: Megaphone },
    { value: 'advocate', label: 'Policy Advocate', icon: Users },
    { value: 'other', label: 'Other', icon: HelpCircle },
];

export default function Join() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', role: '', reason: '', newsletter: true, volunteer: false, honeypot: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Security: Honeypot check
        if (form.honeypot.trim() !== '') {
            console.warn('Spam submission intercepted.');
            setSubmitted(true); // Fail silently by showing success state to bots
            setLoading(false);
            return;
        }

        // Security: Rate limiting (60 seconds)
        const lastSubmit = localStorage.getItem('last_join_submit');
        const now = Date.now();
        if (lastSubmit && (now - parseInt(lastSubmit, 10)) < 60000) {
            alert('You are submitting too fast. Please wait a minute before trying again.');
            setLoading(false);
            return;
        }
        localStorage.setItem('last_join_submit', now.toString());

        const payload = { ...form };
        delete payload.honeypot;

        try {
            await odooClient.createLead(payload);
            
            // Re-route implicitly verified newsletter opt-ins natively to the Mass Mailing module 
            if (payload.newsletter) {
                try {
                    await odooClient.createMailingContact({ name: payload.name, email: payload.email });
                } catch (mailErr) {
                    console.log("Mailing list tag error, strictly soft fail:", mailErr);
                }
            }
            setSubmitted(true);
        } catch (err) {
            console.error('Waitlist Submission Failed:', err);
            alert(`Error: The Odoo server actively rejected the Lead creation.\nReason: ${err.message}`);
        }
        setLoading(false);
    };

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Join the hOS Movement — Health Data Sovereignty for All"
                description="Join patients, clinicians, technologists, researchers, and advocates fighting for health data sovereignty. This is not a product waitlist — it's a movement. Sign up at Humanos Foundation."
                url="https://humanos.foundation/join"
            />
            <Navbar />
            <PageHero
                badge="The Movement"
                title="Join the"
                titleAccent="hOS Revolution"
                subtitle="This is not a product waitlist. This is a movement. Join thousands of patients, clinicians, and technologists who believe health data sovereignty is a human right."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-2xl mx-auto">
                    {/* Logo above form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex justify-center mb-10"
                    >
                        <HOSLogo size={144} wordmarkSize="xl" variant="full" asLink={false} className="flex-col text-center gap-6" />
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-strong rounded-3xl p-12 text-center border border-cyan-500/20"
                            >
                                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                    <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                                </motion.div>
                                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Welcome to the Movement</h2>
                                <p className="text-white/60 text-sm leading-relaxed mb-4">
                                    You're now part of something much larger than any single app or product. We'll be in touch.
                                </p>
                                <p className="text-xs text-cyan-400/50">Watch for an email from hello@humanos.foundation</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                onSubmit={handleSubmit}
                                className="glass-strong rounded-3xl p-8 md:p-12 border border-white/[0.05] space-y-6"
                            >
                                {/* Spam Protection Honeypot - Invisible to users, filled by bots */}
                                <input
                                    type="text"
                                    name="website_url"
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={form.honeypot}
                                    onChange={e => setForm({ ...form, honeypot: e.target.value })}
                                />
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-white/50 font-bold uppercase tracking-wider mb-2 block">Full Name *</label>
                                        <input
                                            required
                                            type="text"
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your name"
                                            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.1] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white/50 font-bold uppercase tracking-wider mb-2 block">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.1] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white/50 font-bold uppercase tracking-wider mb-2 block">Phone (Optional)</label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            placeholder="(555) 123-4567"
                                            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.1] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white/50 font-bold uppercase tracking-wider mb-2 block">Zip Code</label>
                                        <input
                                            type="text"
                                            value={form.zip}
                                            onChange={e => setForm({ ...form, zip: e.target.value })}
                                            placeholder="Ex: 90210"
                                            className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.1] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs text-white/40 uppercase tracking-wider mb-3 block">I am a...</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                        {roles.map((role) => (
                                            <button
                                                key={role.value}
                                                type="button"
                                                onClick={() => setForm(prev => ({ ...prev, role: role.value }))}
                                                className={`flex flex-col items-center gap-2 p-3 rounded-xl text-xs transition-all duration-300 border ${form.role === role.value
                                                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] scale-[1.02]'
                                                    : 'glass border-white/[0.05] text-white/30 hover:text-white/50 hover:border-white/10 hover:scale-[1.01]'
                                                    }`}
                                            >
                                                <role.icon className="w-4 h-4" />
                                                <span className="text-center leading-tight">{role.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Why does this matter to you? (optional)</label>
                                    <textarea
                                        value={form.reason}
                                        onChange={e => setForm({ ...form, reason: e.target.value })}
                                        rows={3}
                                        placeholder="Share your story or reason for joining..."
                                        className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent resize-none"
                                    />
                                </div>

                                <div className="space-y-3 pt-2 border-t border-white/[0.04]">
                                    {[
                                        { key: 'newsletter', label: 'Keep me informed — send me the movement newsletter' },
                                        { key: 'volunteer', label: 'I want to volunteer / contribute to the movement' },
                                    ].map((opt) => (
                                        <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                onClick={() => setForm({ ...form, [opt.key]: !form[opt.key] })}
                                                className={`w-5 h-5 rounded-md border transition-all duration-300 flex items-center justify-center shrink-0 ${form[opt.key] ? 'bg-cyan-500/20 border-cyan-500/50' : 'border-white/10 group-hover:border-white/20'
                                                    }`}
                                            >
                                                {form[opt.key] && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
                                            </div>
                                            <span className="text-sm text-white/35 group-hover:text-white/50 transition-colors">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="flex justify-center mt-6">
                                    {/* Turnstile Bypassed for Testing */}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full glow-btn py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-semibold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    {loading ? 'Joining...' : 'Join the Movement →'}
                                </button>

                                <p className="text-[11px] text-white/15 text-center leading-relaxed">
                                    No spam. No product pitches. Just the movement. Unsubscribe anytime.
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>
            <Footer />
        </div>
    );
}
