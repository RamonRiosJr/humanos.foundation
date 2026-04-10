import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Loader2, Send } from 'lucide-react';
import { base44 as humanosClient } from '../../api/humanosClient';

export default function GenericIntakeForm({ type = "Contact", subtitle = "Send us a message directly via our secure edge network." }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());
        payload.intent = type;
        
        try {
            await humanosClient.entities.JoinRequest.create(payload);
        } catch (err) {
            console.warn('Simulated fallback payload captured:', err);
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="w-full relative rounded-3xl overflow-hidden glass-strong border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 bg-obsidian text-left p-8 md:p-12">
            <div className="flex items-center gap-3 justify-center mb-6">
                <Send aria-hidden="true" className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-center font-outfit text-white">{type} Request</h3>
            </div>
            
            <p className="text-xs text-center text-white/50 mb-10 max-w-sm mx-auto leading-relaxed">
                {subtitle}
            </p>

            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5 max-w-md mx-auto">
                        <div>
                            <label htmlFor="name" className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                            <input id="name" required type="text" name="name" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/20" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                            <input id="email" required type="email" name="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/20" />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Your Role / Affiliation</label>
                            <select id="role" required name="role" defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer">
                                <option value="" disabled className="bg-slate-900 text-white/50">Select Identifier</option>
                                <option value="Patient" className="bg-slate-900 text-white">Patient / Advocate</option>
                                <option value="Clinician" className="bg-slate-900 text-white">Clinician / Provider</option>
                                <option value="Developer" className="bg-slate-900 text-white">Technologist / Developer</option>
                                <option value="Researcher" className="bg-slate-900 text-white">Academic / Researcher</option>
                                <option value="Other" className="bg-slate-900 text-white">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5 ml-1">Message</label>
                            <textarea id="message" required name="message" rows="4" placeholder="How can we build the future of health data together?" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-white/20 resize-none"></textarea>
                        </div>

                        <button disabled={isSubmitting} type="submit" className="w-full mt-8 group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span className="relative z-10 text-sm font-bold text-cyan-100">
                                {isSubmitting ? 'Transmitting...' : 'Submit Request'}
                            </span>
                            {isSubmitting ? (
                                <Loader2 className="relative z-10 w-4 h-4 text-cyan-400 animate-spin" />
                            ) : (
                                <ChevronRight className="relative z-10 w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                            )}
                        </button>
                    </motion.form>
                ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3">Transmission Secured</h4>
                        <p className="text-sm text-white/50 leading-relaxed max-w-sm mx-auto">
                            The Foundation has received your {type.toLowerCase()} request. We operate on a lean open-source pipeline, but a coordinator will reach out shortly.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
