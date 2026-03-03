import React, { useState, useEffect } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { createPageUrl } from '@/utils';

const categories = ['All', 'Patient Rights', 'Technology', 'Policy & Regulation', 'Movement Stories', 'Research & Data', 'Community'];

const categoryColors = {
    'Patient Rights': 'text-rose-400/70 bg-rose-500/10 border-rose-500/20',
    'Technology': 'text-blue-400/70 bg-blue-500/10 border-blue-500/20',
    'Policy & Regulation': 'text-amber-400/70 bg-amber-500/10 border-amber-500/20',
    'Movement Stories': 'text-cyan-400/70 bg-cyan-500/10 border-cyan-500/20',
    'Research & Data': 'text-purple-400/70 bg-purple-500/10 border-purple-500/20',
    'Community': 'text-green-400/70 bg-green-500/10 border-green-500/20',
};

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        base44.entities.BlogPost.filter({ published: true }, '-created_date').then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Blog — Health Data Rights, Patient Sovereignty & Policy | Humanos Foundation"
                description="Thought leadership on patient data ownership, health privacy, HIPAA, zero-knowledge architecture, and the movement for health data sovereignty. Written for patients, advocates, and technologists."
                url="https://humanos.foundation/blog"
                type="website"
            />
            <Navbar />
            <PageHero
                badge="Insights & Thought Leadership"
                title="The Movement"
                titleAccent="Blog"
                subtitle="Education, advocacy, and critical thinking on patient data sovereignty, health equity, and the future of medicine."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Category filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-14">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400'
                                        : 'glass border-white/[0.05] text-white/30 hover:text-white/50 hover:border-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="glass rounded-2xl p-6 animate-pulse border border-white/[0.04]">
                                    <div className="h-3 bg-white/5 rounded mb-4 w-1/3" />
                                    <div className="h-5 bg-white/5 rounded mb-3" />
                                    <div className="h-5 bg-white/5 rounded mb-3 w-2/3" />
                                    <div className="h-16 bg-white/5 rounded mt-4" />
                                </div>
                            ))}
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-white/25 text-sm">No posts yet in this category.</p>
                            <p className="text-xs text-white/15 mt-2">Check back soon — the movement is growing.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filtered.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.07 }}
                                    className="glass rounded-2xl p-6 border border-white/[0.04] hover:border-cyan-500/20 transition-all duration-500 group flex flex-col"
                                >
                                    {post.category && (
                                        <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-full border w-fit mb-4 ${categoryColors[post.category] || 'text-white/30 bg-white/5 border-white/10'}`}>
                                            <Tag className="w-2.5 h-2.5" />
                                            {post.category}
                                        </span>
                                    )}
                                    <h3 className="text-base font-semibold text-white/80 mb-2 flex-1 leading-snug group-hover:text-white transition-colors" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                                        {post.title}
                                    </h3>
                                    {post.excerpt && <p className="text-xs text-white/30 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.04]">
                                        {post.read_time_minutes && (
                                            <span className="flex items-center gap-1 text-[10px] text-white/20">
                                                <Clock className="w-3 h-3" />
                                                {post.read_time_minutes} min read
                                            </span>
                                        )}
                                        <span className="text-[10px] text-cyan-400/40 flex items-center gap-1 group-hover:text-cyan-400/70 transition-colors ml-auto">
                                            Read more <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <PageCTA title="Have a Story to Share?" subtitle="We welcome contributors from across the movement. Clinicians, patients, technologists, advocates." cta="Contact Us" ctaHref={createPageUrl('Contact')} />
            <Footer />
        </div>
    );
}