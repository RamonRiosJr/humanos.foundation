import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Calendar, MapPin, Video, ArrowRight } from 'lucide-react';
import { createPageUrl } from '@/utils';

const upcomingTypes = [
    { icon: Video, label: 'Webinars', desc: 'Monthly deep dives on patient rights, health tech, and policy. Free and open to all.' },
    { icon: Calendar, label: 'Conferences', desc: 'We speak at and attend health innovation and patient advocacy conferences worldwide.' },
    { icon: MapPin, label: 'Community Events', desc: 'Local chapter meetups and community conversations about health data rights.' },
];

export default function Events() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <Navbar />
            <PageHero badge="Events" title="Join the" titleAccent="Conversation" subtitle="Webinars, conferences, and community events where the movement comes alive." />
            <section className="pb-20 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-14">
                    {/* Event types */}
                    <div className="grid sm:grid-cols-3 gap-5">
                        {upcomingTypes.map((type, i) => (
                            <motion.div key={type.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass rounded-2xl p-7 border border-white/[0.04] hover:border-cyan-500/20 transition-all">
                                <type.icon className="w-6 h-6 text-cyan-400/50 mb-4" />
                                <h3 className="text-base font-semibold text-white/70 mb-2" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{type.label}</h3>
                                <p className="text-xs text-white/35 leading-relaxed">{type.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Coming soon */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center glass-strong rounded-3xl p-12 md:p-16 border border-white/[0.04]">
                        <Calendar className="w-12 h-12 text-white/20 mx-auto mb-5" />
                        <h2 className="text-xl font-semibold text-white/50 mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Events Calendar Coming Soon</h2>
                        <p className="text-sm text-white/25 max-w-md mx-auto mb-7">
                            We're building the events calendar. Join the movement to be first notified when we announce webinars, conferences, and community events.
                        </p>
                        <a href={createPageUrl('Join')} className="inline-flex items-center gap-2 text-sm text-cyan-400/60 hover:text-cyan-400 transition-colors">
                            Get notified <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>
            <PageCTA title="Speak at an hOS Event?" subtitle="We welcome patient advocates, clinicians, researchers, and technologists as speakers." cta="Contact Us" ctaHref={createPageUrl('Contact')} />
            <Footer />
        </div>
    );
}
