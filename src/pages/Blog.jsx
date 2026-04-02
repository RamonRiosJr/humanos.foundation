import React, { useState, useEffect } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, AnimatePresence } from 'framer-motion';
import { humanosMockClient } from '../lib/humanos-mock-sdk';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { Clock, ArrowRight, Search, Calendar } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const categories = ['All', 'Patient Rights', 'Technology', 'Policy & Regulation', 'Movement Stories', 'Research & Data', 'Community'];

const categoryColors = {
    'Patient Rights': 'text-rose-400/80 bg-rose-500/10 border-rose-500/20',
    'Technology': 'text-blue-400/80 bg-blue-500/10 border-blue-500/20',
    'Policy & Regulation': 'text-amber-400/80 bg-amber-500/10 border-amber-500/20',
    'Movement Stories': 'text-green-400/80 bg-green-500/10 border-green-500/20',
    'Research & Data': 'text-purple-400/80 bg-purple-500/10 border-purple-500/20',
    'Community': 'text-emerald-400/80 bg-emerald-500/10 border-emerald-500/20',
};

const POSTS_PER_PAGE = 12;

export default function Blog() {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

    useEffect(() => {
        humanosMockClient.entities.BlogPost.list().then(data => {
            if (!data) {
                setPosts([]);
                setLoading(false);
                return;
            }
            // Sort by date descending
            const sorted = [...data].sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime());
            setPosts(sorted);
            setLoading(false);
        }).catch(() => {
            setPosts([]);
            setLoading(false);
        });
    }, []);

    const filtered = posts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const visiblePosts = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <div className="fixed bottom-6 left-6 z-[60] transition-all duration-300"></div>
            <SEOMeta
                title="Blog — Health Data Rights & Sovereign Stories | Humanos Foundation"
                description="Insights, manifestos, and patient stories from the health data sovereignty movement."
                url="https://humanos.foundation/blog"
                type="website"
            />
            <Navbar />
            <PageHero
                badge="Aura hOS v0.8.0-rc.1 — SOVEREIGN LIBRARY"
                title="The Movement"
                titleAccent="Insights"
                subtitle="Exposing the 5-minute hustle and architecting a future where you own your full story."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Filter & Search Bar */}
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 glass p-4 rounded-2xl border border-white/[0.05]">
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setVisibleCount(POSTS_PER_PAGE);
                                    }}
                                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                                        : 'bg-white/5 border-white/10 text-white/40 hover:text-white/60 hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            <input
                                type="text"
                                placeholder="Search the library..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setVisibleCount(POSTS_PER_PAGE);
                                }}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-white/10"
                            />
                        </div>
                    </div>

                    {loading ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="glass rounded-2xl p-6 animate-pulse border border-white/[0.04] h-64">
                                    <div className="h-3 bg-white/5 rounded mb-4 w-1/3" />
                                    <div className="h-6 bg-white/5 rounded mb-3" />
                                    <div className="h-4 bg-white/5 rounded mb-8 w-2/3" />
                                    <div className="mt-auto h-3 bg-white/5 rounded w-1/2" />
                                </div>
                            ))}
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="text-center py-24 glass rounded-3xl border border-dashed border-white/10">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-5 h-5 text-white/20" />
                            </div>
                            <p className="text-white/40 text-sm font-medium">No results found for your search.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                className="mt-4 text-xs text-blue-400 hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence mode="popLayout">
                                    {visiblePosts.map((post, i) => (
                                        <motion.div
                                            key={post.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4, delay: i * 0.05 }}
                                            className="glass group relative overflow-hidden rounded-2xl border border-white/[0.05] hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full"
                                        >
                                            <div className="p-6 flex flex-col h-full">
                                                <div className="flex items-center justify-between mb-4">
                                                    {post.category && (
                                                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${categoryColors[post.category] || 'text-white/30 bg-white/5 border-white/10'}`}>
                                                            {post.category}
                                                        </span>
                                                    )}
                                                    <span className="flex items-center gap-1.5 text-[9px] text-white/20 font-mono">
                                                        <Calendar className="w-3 h-3" />
                                                        {formatDate(post.created_date)}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors leading-tight mb-3" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                                                    {post.title}
                                                </h3>

                                                {post.excerpt && (
                                                    <p className="text-xs text-white/60 leading-relaxed line-clamp-3 mb-6 font-medium">
                                                        {post.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-auto pt-6 border-t border-white/[0.05] flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-[10px] text-white/20">
                                                        <Clock className="w-3 h-3 text-blue-400/40" />
                                                        {post.read_time_minutes} min
                                                    </div>
                                                    <Link
                                                        to={`/BlogPost?id=${post.id}`}
                                                        className="group/link inline-flex items-center gap-1 text-[11px] font-bold text-blue-400/60 group-hover:text-blue-400 transition-colors"
                                                    >
                                                        Read Story
                                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {hasMore && (
                                <div className="mt-16 flex justify-center">
                                    <button
                                        onClick={() => setVisibleCount(prev => prev + POSTS_PER_PAGE)}
                                        className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/50 hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all duration-300"
                                    >
                                        Load More Stories
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <PageCTA
                title="The system robs you of your nuance."
                subtitle="We build the architecture that brings it back. Join thousands of patients demanding their data sovereignty."
                cta="Enlist Today"
                ctaHref={createPageUrl('Join')}
            />
            <Footer />
        </div>
    );
}


