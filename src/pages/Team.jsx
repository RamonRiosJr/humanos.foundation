import React from "react";
import SEOMeta from "../components/shared/SEOMeta";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import PageHero from "../components/shared/PageHero";
import { Briefcase, MessageSquare, ExternalLink, Rocket } from "lucide-react";

export default function Team() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Join The Clinical Core | Health Data Sovereignty Operators"
                description="Collaborate with a global team of developers, researchers, and advocates building the future of health data sovereignty."
                url="https://humanos.foundation/team"
                keywords="healthcare open source team, medical software developers, health equity advocates, clinical infrastructure roles, health tech non profit jobs"
            />
            <Navbar />

            <PageHero
                badge="Foundation Core"
                title="Join the"
                titleAccent="Guardian Network"
                subtitle="We are looking for builders, thinkers, and advocates to help us reclaim clinical sovereignty. Whether you're a developer or a patient advocate, your voice matters."
            />

            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-12">
                    {/* Centered Column: Context & Projects */}
                    <div className="w-full space-y-12">
                        <div className="glass-strong rounded-3xl p-8 border border-white/[0.05]">
                            <h2
                                className="text-xl font-bold mb-6 flex items-center gap-3"
                                style={{
                                    fontFamily: "Outfit, Inter, sans-serif",
                                }}
                            >
                                <Rocket className="w-5 h-5 text-cyan-400" />
                                Active Missions
                            </h2>

                            <div className="relative overflow-hidden glass rounded-2xl p-8 border border-white/5 text-center">
                                <p className="text-sm text-white/70 font-medium leading-relaxed">
                                    All core engineering nodes are currently
                                    assigned to the Phase 17 Architecture Lock.
                                </p>
                                <p className="text-xs text-white/40 mt-4">
                                    There are currently no unallocated public
                                    bounties. Please join the Discord to shadow
                                    ongoing operations.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass rounded-3xl p-8 border border-white/[0.05]">
                                <MessageSquare className="w-6 h-6 text-blue-400 mb-4" />
                                <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">
                                    Volunteer Channel
                                </h3>
                                <p className="text-xs text-white/40 mb-6 leading-relaxed">
                                    Join our Discord community where developers
                                    and advocates coordinate the movement daily.
                                </p>
                                <a
                                    href="https://discord.gg/humanos"
                                    className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
                                >
                                    Enter Discord{" "}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="glass rounded-3xl p-8 border border-white/[0.05]">
                                <Briefcase className="w-6 h-6 text-purple-400 mb-4" />
                                <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">
                                    Open Roles
                                </h3>
                                <p className="text-xs text-white/40 mb-6 leading-relaxed">
                                    We are currently self-funded but always
                                    looking for key partners and dedicated
                                    full-time builders.
                                </p>
                                <a
                                    href="mailto:careers@humanos.foundation"
                                    className="inline-flex items-center gap-2 text-[10px] font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest"
                                >
                                    Apply via Email{" "}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
