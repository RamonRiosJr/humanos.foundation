import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageCTA from '../components/shared/PageCTA';
import { humanosMockClient } from '../lib/humanos-mock-sdk';
import { ArrowLeft, Clock, CalendarDays, Tag, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import { createPageUrl } from '@/utils';

export default function BlogPost() {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get('id');
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!postId) {
            setLoading(false);
            return;
        }

        humanosMockClient.entities.BlogPost.get(postId).then(data => {
            setPost(data);
            setLoading(false);
        });
    }, [postId]);

    const formatDate = (isoString) => {
        if (!isoString) return '';
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(new Date(isoString));
    };

    if (loading) {
        return (
            <div className="bg-obsidian min-h-screen text-white flex flex-col pt-32 px-4 items-center">
                <Navbar />
                <div className="w-8 h-8 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!postId || !post) {
        return (
            <div className="bg-obsidian min-h-screen text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32">
                    <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
                    <p className="text-white/50 mb-8">The article you are looking for does not exist or has been removed.</p>
                    <Link to={createPageUrl('Blog')} className="glow-btn px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-obsidian min-h-screen text-white">
            <SEOMeta
                title={`${post.title} | Humanos Foundation`}
                description={post.excerpt}
                url={`https://humanos.foundation/blog/${post.id}`}
                type="article"
                article={{
                    publishedTime: post.created_date,
                    section: post.category || 'Movement Stories',
                    author: 'Humanos Foundation'
                }}
            />
            <Navbar />

            <article className="pt-40 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
                <Link to={createPageUrl('Blog')} className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                    {post.category && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                            <Tag className="w-3 h-3 text-cyan-400" />
                            {post.category}
                        </span>
                    )}
                    <span className="flex items-center gap-1.5 text-xs text-white/60 font-medium">
                        <CalendarDays className="w-3.5 h-3.5 text-cyan-400/50" />
                        {formatDate(post.created_date)}
                    </span>
                    {post.read_time_minutes && (
                        <span className="flex items-center gap-1.5 text-xs text-white/60 font-medium ml-2">
                            <Clock className="w-3.5 h-3.5 text-cyan-400/50" />
                            {post.read_time_minutes} min read
                        </span>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                    {post.title}
                </h1>

                <div className="prose dark:prose-invert prose-cyan max-w-none prose-p:text-white/70 prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-white/90 prose-a:text-cyan-400">
                    <ReactMarkdown
                        rehypePlugins={[rehypeSanitize]}
                        components={{
                            a: ({ _node, ...props }) => {
                                if (props.href && props.href.startsWith('/')) {
                                    return <Link to={props.href} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors" {...props}>{props.children}</Link>;
                                }
                                return <a target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors" {...props}>{props.children}</a>;
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Discussion & Comments Interface */}
                <div className="mt-16 pt-12 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-8">
                        <MessageSquare className="w-6 h-6 text-cyan-400" />
                        <h3 className="text-2xl font-bold" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Movement Discussion</h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold ml-2 shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                            Beta
                        </span>
                    </div>
                    
                    <div className="glass p-5 md:p-6 rounded-2xl mb-8 relative group overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-500">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-obsidian-light border border-cyan-500/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                                <span className="text-cyan-400 font-bold text-sm">You</span>
                            </div>
                            <div className="w-full">
                                <textarea 
                                    className="w-full bg-obsidian-light/50 border border-white/10 rounded-xl p-4 text-white/90 placeholder:text-white/30 focus:outline-none focus:border-cyan-500/50 resize-none h-24 mb-3 transition-colors" 
                                    placeholder="Add your voice to the movement..."
                                ></textarea>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] uppercase tracking-wider text-white/30 font-medium">Connecting securely to Odoo ERP</span>
                                    <Link to={createPageUrl('Join')} className="glow-btn px-6 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-bold text-sm hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all flex items-center gap-2">
                                        Post & Join <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <PageCTA
                title="Are You Ready to Demand Better?"
                subtitle="Do not let your health be reduced to a 5-minute clinical documentation. Join the movement and help us build the infrastructure of personalized care."
                cta="Join the Waitlist"
                ctaHref={createPageUrl('Join')}
            />
            <Footer />
        </div>
    );
}
