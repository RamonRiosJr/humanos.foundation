import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageCTA from '../components/shared/PageCTA';
import { base44 } from '@/api/humanosClient';
import { ArrowLeft, Clock, CalendarDays, Tag } from 'lucide-react';
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

        base44.entities.BlogPost.get(postId).then(data => {
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
                    <Link to="/Blog" className="glow-btn px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium flex items-center gap-2">
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
            />
            <Navbar />

            <article className="pt-40 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
                <Link to="/Blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                    {post.category && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                            <Tag className="w-3 h-3 text-cyan-400" />
                            {post.category}
                        </span>
                    )}
                    <span className="flex items-center gap-1.5 text-xs text-white/40">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {formatDate(post.created_date)}
                    </span>
                    {post.read_time_minutes && (
                        <span className="flex items-center gap-1.5 text-xs text-white/40">
                            <Clock className="w-3.5 h-3.5" />
                            {post.read_time_minutes} min read
                        </span>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-tight" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                    {post.title}
                </h1>

                <div className="prose prose-invert prose-cyan max-w-none prose-p:text-white/70 prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-white/90 prose-a:text-cyan-400">
                    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>

            <PageCTA
                title="Join the Conversation"
                subtitle="We need independent thinkers to help shape the future of sovereign health data."
                cta="Read the Manifesto"
                ctaHref={createPageUrl('Manifesto')}
            />
            <Footer />
        </div>
    );
}
