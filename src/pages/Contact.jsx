import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOMeta from '../components/shared/SEOMeta';
import { base44 } from '@/api/humanosClient';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { CheckCircle2, Newspaper, Handshake, Coins, Users, HelpCircle } from 'lucide-react';

const inquiryTypes = [
    { value: 'press', label: 'Press & Media', icon: Newspaper, email: 'press@humanos.foundation' },
    { value: 'partnership', label: 'Partnership', icon: Handshake, email: 'partnerships@humanos.foundation' },
    { value: 'grants', label: 'Grants & Funding', icon: Coins, email: 'grants@humanos.foundation' },
    { value: 'volunteer', label: 'Volunteer', icon: Users, email: 'hello@humanos.foundation' },
    { value: 'general', label: 'General', icon: HelpCircle, email: 'hello@humanos.foundation' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', organization: '', inquiry_type: '', subject: '', message: '', honeypot: '' });
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
        const lastSubmit = localStorage.getItem('last_contact_submit');
        const now = Date.now();
        if (lastSubmit && (now - parseInt(lastSubmit, 10)) < 60000) {
            alert('You are submitting messages too fast. Please wait a minute before trying again.');
            setLoading(false);
            return;
        }
        localStorage.setItem('last_contact_submit', now.toString());

        const payload = { ...form };
        delete payload.honeypot;

        await base44.entities.ContactMessage.create(payload);
        setSubmitted(true);
        setLoading(false);
    };

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Contact Humanos Foundation — Press, Partnerships & General Inquiries"
                description="Contact Humanos Foundation for press inquiries, partnership opportunities, grant applications, and general questions about the hOS patient data sovereignty movement."
                url="https://humanos.foundation/contact"
            />
            <Navbar />
            <PageHero
                badge="Get In Touch"
                title="Let's Build"
                titleAccent="Together"
                subtitle="Whether you're press, a potential partner, a researcher, or just curious — we want to hear from you."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-16">
                    {/* Sidebar */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-white/60 mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Contact Channels</h3>
                            <div className="space-y-3">
                                {inquiryTypes.map((t) => (
                                    <div key={t.value} className="flex items-center gap-3 glass rounded-xl p-3 border border-white/[0.04]">
                                        <t.icon className="w-4 h-4 text-cyan-400/50 shrink-0" />
                                        <div>
                                            <p className="text-xs font-medium text-white/50">{t.label}</p>
                                            <a href={`mailto:${t.email}`} className="text-[11px] text-white/25 hover:text-cyan-400/60 transition-colors">{t.email}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glass rounded-xl p-5 border border-white/[0.04]">
                            <p className="text-xs text-white/60 leading-relaxed">
                                <span className="text-cyan-400 font-bold">Response time:</span>{' '}
                                We aim to respond to all inquiries within <span className="text-cyan-400/80 font-medium">48 hours</span>. Press inquiries are prioritized.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3">
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-strong rounded-3xl p-12 text-center border border-cyan-500/20">
                                    <CheckCircle2 className="w-14 h-14 text-cyan-400 mx-auto mb-5" />
                                    <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Message Received</h2>
                                    <p className="text-white/35 text-sm">We'll be in touch within 48 hours.</p>
                                </motion.div>
                            ) : (
                                <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 md:p-10 border border-white/[0.05] space-y-5">
                                    {/* Spam Protection Honeypot */}
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
                                        {[{ key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
                                        { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
                                        { key: 'organization', label: 'Organization', type: 'text', placeholder: 'Optional', required: false },
                                        { key: 'subject', label: 'Subject', type: 'text', placeholder: 'Brief subject', required: false },
                                        ].map((field) => (
                                            <div key={field.key}>
                                                <label className="text-xs text-white/60 font-bold uppercase tracking-wider mb-2 block">{field.label}{field.required ? ' *' : ''}</label>
                                                <input
                                                    required={field.required}
                                                    type={field.type}
                                                    value={form[field.key]}
                                                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                                                    placeholder={field.placeholder}
                                                    className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.1] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/40 uppercase tracking-wider mb-3 block">Type of Inquiry</label>
                                        <div className="flex flex-wrap gap-2">
                                            {inquiryTypes.map((t) => (
                                                <button 
                                                    key={t.value} 
                                                    type="button" 
                                                    onClick={() => setForm(prev => ({ ...prev, inquiry_type: t.value }))}
                                                    className={`px-4 py-2 rounded-xl text-xs transition-all duration-300 border ${form.inquiry_type === t.value 
                                                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] scale-[1.02]' 
                                                        : 'glass border-white/[0.05] text-white/30 hover:text-white/50 hover:scale-[1.01]'}`}
                                                >
                                                    {t.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Message *</label>
                                        <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} placeholder="Tell us what's on your mind..." className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent resize-none" />
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        {/* Turnstile Bypassed for Testing */}
                                    </div>

                                    <button type="submit" disabled={loading} className="w-full glow-btn py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white font-semibold text-sm tracking-wide disabled:opacity-50">
                                        {loading ? 'Sending...' : 'Send Message →'}
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
 
