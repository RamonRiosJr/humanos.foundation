import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/humanosClient';
import { useQuery } from '@tanstack/react-query';
import {
    Users, MessageSquare, BookOpen, Mail,
    ChevronRight, Database, Zap, Globe
} from 'lucide-react';
import SEOMeta from '../components/shared/SEOMeta';
import HOSLogo from '../components/shared/HOSLogo';

function StatCard({ icon: Icon, label, value, sub, color = 'cyan' }) {
    const colors = {
        cyan: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400',
        green: 'from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-400',
        yellow: 'from-yellow-500/10 to-amber-500/10 border-yellow-500/20 text-yellow-400',
        purple: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400',
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-br ${colors[color]} border rounded-2xl p-5`}
        >
            <Icon className={`w-5 h-5 mb-3 ${colors[color].split(' ').pop()}`} />
            <div className="text-2xl font-bold text-foreground mb-0.5">{value ?? '—'}</div>
            <div className="text-xs text-foreground/50 font-medium">{label}</div>
            {sub && <div className="text-[10px] text-foreground/25 mt-1">{sub}</div>}
        </motion.div>
    );
}

function SectionHeader({ title, sub }) {
    return (
        <div className="mb-5">
            <h2 className="text-base font-bold text-foreground/80" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
            {sub && <p className="text-xs text-foreground/30 mt-0.5">{sub}</p>}
        </div>
    );
}

export default function Admin() {
    const [authed, setAuthed] = useState(null);

    useEffect(() => {
        base44.auth.me().then(u => setAuthed(u?.role === 'admin' ? u : null)).catch(() => setAuthed(false));
    }, []);

    const { data: joinRequests = [] } = useQuery({
        queryKey: ['join-requests'],
        queryFn: () => base44.entities.JoinRequest.list('-created_date', 200),
        enabled: !!authed,
    });

    const { data: contacts = [] } = useQuery({
        queryKey: ['contacts'],
        queryFn: () => base44.entities.ContactMessage.list('-created_date', 200),
        enabled: !!authed,
    });

    const { data: posts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: () => base44.entities.BlogPost.list('-created_date', 200),
        enabled: !!authed,
    });

    if (authed === null) {
        return (
            <div className="bg-obsidian min-h-screen flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
            </div>
        );
    }

    if (authed === false) {
        return (
            <div className="bg-obsidian min-h-screen flex items-center justify-center px-4">
                <div className="glass-strong rounded-3xl p-10 text-center max-w-sm">
                    <HOSLogo size={48} wordmarkSize="lg" variant="full" asLink={false} className="justify-center mb-6" />
                    <p className="text-foreground/40 text-sm mb-6">Admin access required.</p>
                    <button
                        onClick={() => base44.auth.redirectToLogin(window.location.href)}
                        className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium w-full"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        );
    }

    const byRole = joinRequests.reduce((acc, r) => { acc[r.role] = (acc[r.role] || 0) + 1; return acc; }, {});
    const byInquiry = contacts.reduce((acc, c) => { acc[c.inquiry_type] = (acc[c.inquiry_type] || 0) + 1; return acc; }, {});
    const volunteers = joinRequests.filter(r => r.volunteer).length;
    const newsletterSubs = joinRequests.filter(r => r.newsletter).length;

    return (
        <div className="bg-obsidian min-h-screen text-foreground">
            <SEOMeta title="hOS Admin Dashboard" description="" url="" noindex />

            {/* Top bar */}
            <div className="sticky top-0 z-40 border-b border-foreground/[0.05] bg-obsidian/90 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <HOSLogo size={28} wordmarkSize="sm" variant="full" asLink />
                    <span className="text-[10px] text-foreground/20 uppercase tracking-widest font-medium border-l border-foreground/10 pl-4">Admin</span>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://humanos.foundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[11px] text-foreground/30 hover:text-cyan-400 transition-colors"
                    >
                        <Globe className="w-3.5 h-3.5" /> View Site
                    </a>
                    <button
                        onClick={() => base44.auth.logout()}
                        className="text-[11px] text-foreground/20 hover:text-foreground/50 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10 space-y-14">

                {/* Stats Overview */}
                <section>
                    <SectionHeader title="Overview" sub="Live data from the movement" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard icon={Users} label="Movement Signups" value={joinRequests.length} sub="All time" color="cyan" />
                        <StatCard icon={Users} label="Newsletter Subs" value={newsletterSubs} sub={`${Math.round(newsletterSubs / Math.max(joinRequests.length, 1) * 100)}% of signups`} color="green" />
                        <StatCard icon={Zap} label="Volunteers" value={volunteers} sub="Ready to help" color="purple" />
                        <StatCard icon={MessageSquare} label="Contact Messages" value={contacts.length} sub="Unfiltered inbox" color="yellow" />
                    </div>
                </section>

                {/* Join Requests */}
                <section>
                    <SectionHeader title="Movement Signups" sub="Recent join requests + role breakdown" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Role breakdown */}
                        <div className="glass rounded-2xl p-5 border border-foreground/[0.04]">
                            <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-4">By Role</p>
                            {Object.entries(byRole).sort(([, a], [, b]) => b - a).map(([role, count]) => (
                                <div key={role} className="flex items-center justify-between py-2 border-b border-foreground/[0.03] last:border-0">
                                    <span className="text-xs text-foreground/50 capitalize">{role}</span>
                                    <span className="text-xs font-bold text-cyan-400">{count}</span>
                                </div>
                            ))}
                        </div>

                        {/* Recent signups */}
                        <div className="md:col-span-2 glass rounded-2xl border border-foreground/[0.04] overflow-hidden">
                            <div className="px-5 py-4 border-b border-foreground/[0.04]">
                                <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium">Recent Signups</p>
                            </div>
                            <div className="divide-y divide-white/[0.03] max-h-80 overflow-y-auto">
                                {joinRequests.slice(0, 20).map((r) => (
                                    <div key={r.id} className="px-5 py-3 flex items-start gap-3">
                                        <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-[9px] text-cyan-400 font-bold uppercase">{r.name?.[0] || '?'}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs text-foreground/70 font-medium truncate">{r.name}</div>
                                            <div className="text-[10px] text-foreground/25 truncate">{r.email}</div>
                                        </div>
                                        <div className="text-[10px] text-cyan-400/50 capitalize whitespace-nowrap">{r.role}</div>
                                    </div>
                                ))}
                                {joinRequests.length === 0 && (
                                    <div className="px-5 py-8 text-center text-xs text-foreground/20">No signups yet.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Messages */}
                <section>
                    <SectionHeader title="Contact Inbox" sub="Inquiries by type + recent messages" />
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass rounded-2xl p-5 border border-foreground/[0.04]">
                            <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-4">By Inquiry Type</p>
                            {Object.entries(byInquiry).sort(([, a], [, b]) => b - a).map(([type, count]) => (
                                <div key={type} className="flex items-center justify-between py-2 border-b border-foreground/[0.03] last:border-0">
                                    <span className="text-xs text-foreground/50 capitalize">{type}</span>
                                    <span className="text-xs font-bold text-yellow-400">{count}</span>
                                </div>
                            ))}
                            {contacts.length === 0 && <p className="text-xs text-foreground/20 mt-2">No messages yet.</p>}
                        </div>
                        <div className="md:col-span-2 glass rounded-2xl border border-foreground/[0.04] overflow-hidden">
                            <div className="px-5 py-4 border-b border-foreground/[0.04]">
                                <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium">Recent Messages</p>
                            </div>
                            <div className="divide-y divide-white/[0.03] max-h-80 overflow-y-auto">
                                {contacts.slice(0, 15).map((c) => (
                                    <div key={c.id} className="px-5 py-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-foreground/70 font-medium">{c.name}</span>
                                            <span className="text-[10px] text-yellow-400/50 capitalize">{c.inquiry_type}</span>
                                        </div>
                                        <div className="text-[10px] text-foreground/35 truncate">{c.subject || c.message}</div>
                                        <a href={`mailto:${c.email}`} className="text-[10px] text-cyan-400/40 hover:text-cyan-400 transition-colors flex items-center gap-1 mt-1">
                                            <Mail className="w-2.5 h-2.5" /> {c.email}
                                        </a>
                                    </div>
                                ))}
                                {contacts.length === 0 && (
                                    <div className="px-5 py-8 text-center text-xs text-foreground/20">No messages yet.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Posts */}
                <section>
                    <SectionHeader title="Blog Posts" sub={`${posts.filter(p => p.published).length} published · ${posts.filter(p => !p.published).length} drafts`} />
                    <div className="glass rounded-2xl border border-foreground/[0.04] overflow-hidden">
                        <div className="divide-y divide-white/[0.03]">
                            {posts.slice(0, 10).map((p) => (
                                <div key={p.id} className="px-5 py-3.5 flex items-center gap-4">
                                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.published ? 'bg-green-400' : 'bg-foreground/20'}`} />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-foreground/70 font-medium truncate">{p.title}</div>
                                        <div className="text-[10px] text-foreground/25">{p.category} · {p.read_time_minutes || '?'} min read</div>
                                    </div>
                                    {p.featured && <span className="text-[9px] text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full">Featured</span>}
                                    <span className={`text-[9px] px-2 py-0.5 rounded-full ${p.published ? 'bg-green-500/10 text-green-400' : 'bg-foreground/5 text-foreground/25'}`}>
                                        {p.published ? 'Live' : 'Draft'}
                                    </span>
                                </div>
                            ))}
                            {posts.length === 0 && <div className="px-5 py-8 text-center text-xs text-foreground/20">No posts yet.</div>}
                        </div>
                    </div>
                </section>

                {/* Odoo Integration Panel */}
                <section>
                    <SectionHeader title="Odoo Integration" sub="Sync movement data with your existing Odoo CRM & ERP" />
                    <div className="grid md:grid-cols-2 gap-5">

                        {[
                            {
                                icon: Users,
                                title: 'CRM Sync — Join Requests → Leads',
                                desc: 'Every movement signup becomes an Odoo CRM lead with role, reason, newsletter/volunteer flags. Use Odoo automation rules to assign follow-up tasks.',
                                status: 'Recommended',
                                color: 'cyan',
                                steps: [
                                    'Export JoinRequest records as CSV or JSON',
                                    'Import to Odoo CRM as Leads with custom tags per role',
                                    'Or use Odoo webhook + Zapier/Make to auto-sync in real-time',
                                ]
                            },
                            {
                                icon: MessageSquare,
                                title: 'Helpdesk — Contact Messages → Tickets',
                                desc: 'Route press, partnership, and grant inquiries into Odoo Helpdesk with auto-assignment by inquiry type.',
                                status: 'Recommended',
                                color: 'yellow',
                                steps: [
                                    'Map inquiry_type → Odoo helpdesk team',
                                    'Use Odoo\'s email alias (press@humanos.foundation → ticket)',
                                    'Or POST to Odoo REST API from this app\'s Contact form',
                                ]
                            },
                            {
                                icon: BookOpen,
                                title: 'Newsletter → Odoo Email Marketing',
                                desc: 'Push newsletter subscribers directly to Odoo Mailing Lists. Segment by role for targeted campaigns.',
                                status: 'Quick Win',
                                color: 'green',
                                steps: [
                                    'Filter JoinRequest where newsletter=true',
                                    'Bulk import to Odoo Mailing List',
                                    'Use tags: patient, clinician, technologist, etc.',
                                ]
                            },
                            {
                                icon: Database,
                                title: 'REST API / Webhook Bridge',
                                desc: 'Build a lightweight webhook bridge so this site posts directly to Odoo XML-RPC or REST API on every form submission.',
                                status: 'Technical',
                                color: 'purple',
                                steps: [
                                    'Odoo exposes XML-RPC + REST (v16+) out of the box',
                                    'This app can POST to a proxy endpoint or use Zapier',
                                    'Upgrade to Builder+ to add a backend function bridge',
                                ]
                            },
                        ].map(({ icon: Icon, title, desc, status, color, steps }) => {
                            const colors = {
                                cyan: 'border-cyan-500/15 bg-cyan-500/[0.04] text-cyan-400',
                                yellow: 'border-yellow-500/15 bg-yellow-500/[0.04] text-yellow-400',
                                green: 'border-green-500/15 bg-green-500/[0.04] text-green-400',
                                purple: 'border-purple-500/15 bg-purple-500/[0.04] text-purple-400',
                            };
                            return (
                                <div key={title} className={`rounded-2xl border p-5 ${colors[color].split(' ').slice(0, 2).join(' ')}`}>
                                    <div className="flex items-start gap-3 mb-3">
                                        <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors[color].split(' ').pop()}`} />
                                        <div>
                                            <div className="text-xs font-semibold text-foreground/80 leading-tight">{title}</div>
                                            <span className={`text-[9px] ${colors[color].split(' ').pop()} mt-0.5 inline-block`}>{status}</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-foreground/35 mb-3 leading-relaxed">{desc}</p>
                                    <ul className="space-y-1.5">
                                        {steps.map((s, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <ChevronRight className={`w-3 h-3 mt-0.5 flex-shrink-0 ${colors[color].split(' ').pop()} opacity-50`} />
                                                <span className="text-[10px] text-foreground/30">{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-5 glass rounded-2xl p-5 border border-foreground/[0.04] flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-foreground/60 mb-1">Quick Data Export</p>
                            <p className="text-[11px] text-foreground/25">Download all movement signups and contact messages as JSON — paste directly into Odoo import wizard or feed into your automation tool.</p>
                        </div>
                        <div className="flex gap-3 flex-shrink-0">
                            <button
                                onClick={() => {
                                    const blob = new Blob([JSON.stringify(joinRequests, null, 2)], { type: 'application/json' });
                                    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'hos_signups.json'; a.click();
                                }}
                                className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                Export Signups
                            </button>
                            <button
                                onClick={() => {
                                    const blob = new Blob([JSON.stringify(contacts, null, 2)], { type: 'application/json' });
                                    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'hos_contacts.json'; a.click();
                                }}
                                className="px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                                Export Contacts
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
