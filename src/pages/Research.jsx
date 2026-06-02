import React from "react";
import { motion } from "framer-motion";
import SEOMeta from "../components/shared/SEOMeta";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import PageHero from "../components/shared/PageHero";
import HighlightShare from "../components/shared/HighlightShare";
import NativeShareWidget from "../components/shared/NativeShareWidget";
import HeartbeatStream from "../components/shared/HeartbeatStream";
import {
    Network,
    LineChart,
    TestTube2,
    ShieldCheck,
    Activity,
    Users,
    Clock,
    Database,
    Lock,
    Fingerprint,
    Zap,
    ServerOff,
    Cpu,
} from "lucide-react";

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Research() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden selection:bg-cyan-500/30">
            <SEOMeta
                title="Clinical Research & Federal Outcomes | Neurosociological Hypotheses"
                description="Review the active clinical hypotheses and federal health equity directives investigating health data sovereignty, pharmacological adherence, and neurodivergent care."
                url="https://humanos.foundation/research"
                keywords="health equity research, clinical outcomes hypotheses, neurodivergent medication adherence, FDA SaMD bypass, IRB research safe harbor, FHIR clinical trials, physiological data sovereignity, health equity federal grants"
            />
            <Navbar />
            <HighlightShare />

            <PageHero
                badge="Clinical Hypotheses & Telemetry"
                title="Outcomes"
                titleAccent="Evidence"
                subtitle="The Humanos Foundation is actively deploying open-source architecture to test the physiological impact of Health Data Sovereignty on neurodivergent and marginalized patient cohorts."
            />

            <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto space-y-24">
                {/* Active Telemetry Dashboard */}
                <div className="space-y-8">
                    <div className="flex items-center justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                            Simulated Telemetry / Phase 1 Projection
                        </div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={FADE_UP}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {[
                        {
                            label: "Active Cohort Size",
                            value: "2,841",
                            icon: Users,
                            color: "text-blue-400",
                            bg: "bg-blue-500/10",
                            border: "border-blue-500/20",
                        },
                        {
                            label: "Zero-Knowledge Packets",
                            value: "1.2M+",
                            icon: Lock,
                            color: "text-emerald-400",
                            bg: "bg-emerald-500/10",
                            border: "border-emerald-500/20",
                        },
                        {
                            label: "Avg. Adherence Lift",
                            value: "+38.4%",
                            icon: LineChart,
                            color: "text-purple-400",
                            bg: "bg-purple-500/10",
                            border: "border-purple-500/20",
                        },
                        {
                            label: "Current Network Latency",
                            value: "< 12ms",
                            icon: Zap,
                            color: "text-amber-400",
                            bg: "bg-amber-500/10",
                            border: "border-amber-500/20",
                        },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className={`p-6 rounded-3xl border ${stat.border} ${stat.bg} backdrop-blur-md relative overflow-hidden group`}
                        >
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <stat.icon
                                    className={`w-24 h-24 ${stat.color}`}
                                />
                            </div>
                            <stat.icon
                                className={`w-6 h-6 ${stat.color} mb-4`}
                            />
                            <p className="text-3xl md:text-4xl font-bold font-outfit text-white mb-1">
                                {stat.value}
                            </p>
                            <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
                </div>

                <div className="space-y-16">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-gradient-to-r from-transparent to-white/20 flex-1" />
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white/50 text-center">
                            Active Pipeline Protocols
                        </h2>
                        <div className="h-px bg-gradient-to-l from-transparent to-white/20 flex-1" />
                    </div>

                    {/* Hypothesis 1 (Federal Grant Core) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <Network className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                                Protocol 01 / Federal Phase 1 Pilot
                            </div>

                            <div className="flex items-start md:items-center justify-between mb-6 flex-col md:flex-row gap-4">
                                <h2 className="text-2xl md:text-4xl font-bold font-outfit text-white">
                                    Neurodivergent UI Sovereignty vs. Adherence
                                    Rates
                                </h2>
                                <NativeShareWidget
                                    title="Protocol 01: Neurodivergent Adherence — Humanos Foundation"
                                    text="Review the active clinical hypothesis investigating UI Sovereignty vs Adherence Rates."
                                    url="https://humanos.foundation/research#protocol-1"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                    <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4 border-b border-white/5 pb-3">
                                        The Control Paradigm
                                    </h4>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Current EHR portals (e.g., MyChart) are
                                        digital manifestations of the 15-20 page
                                        clipboard penalty. For neurodivergent
                                        populations (ADHD/Autism spectrums),
                                        this clinical friction and the resulting
                                        compressed 5-minute clinical
                                        documentation trigger severe executive
                                        dysfunction, directly resulting in an
                                        average{" "}
                                        <strong className="text-red-400">
                                            40% medication non-adherence rate
                                        </strong>
                                        .
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                                    <h4 className="text-xs font-bold text-cyan-400/80 uppercase tracking-widest mb-4 border-b border-cyan-500/20 pb-3">
                                        The Experimental Paradigm
                                    </h4>
                                    <p className="text-sm text-cyan-50/80 leading-relaxed">
                                        Aura hOS drops the portal liability. By
                                        ingesting FHIR payloads locally, the
                                        patient gains total sovereign control
                                        over the UX, notification frequency, and
                                        cognitive styling of their medical data.
                                        We hypothesize that removing
                                        compliance-driven UI barriers will lift
                                        neurodivergent adherence outcomes by a
                                        mathematically significant margin.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 rounded-2xl bg-[#0a0a0f] border border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                        <TestTube2 className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">
                                            Target Enrollment
                                        </p>
                                        <p className="text-[10px] text-white/50 uppercase tracking-wider">
                                            2,500 Pediatric Handshakes
                                        </p>
                                    </div>
                                </div>
                                <div className="h-px sm:h-8 w-full sm:w-px bg-white/10" />
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                        <LineChart className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white">
                                            Primary Endpoint
                                        </p>
                                        <p className="text-[10px] text-white/50 uppercase tracking-wider">
                                            90-Day Rx Adherence Lift
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hypothesis 2: Offline-First Rural Health */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <ServerOff className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                                Protocol 02 / Rural Health Equity
                            </div>

                            <div className="flex items-start md:items-center justify-between mb-6 flex-col md:flex-row gap-4">
                                <h2 className="text-2xl md:text-4xl font-bold font-outfit text-white">
                                    Zero-Knowledge SQLite vs Cloud Latency in
                                    Rural Geographies
                                </h2>
                                <NativeShareWidget
                                    title="Protocol 02: Rural Health Equity — Humanos Foundation"
                                    text="Review the active clinical hypothesis investigating Offline-First Data Architectures."
                                    url="https://humanos.foundation/research#protocol-2"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-10">
                                <div className="space-y-4">
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Vast geographic swaths of marginalized
                                        populations suffer from{" "}
                                        <strong>"Broadband Redlining."</strong>{" "}
                                        Cloud-native EHR systems fundamentally
                                        fail in these environments, severing
                                        maternal and pediatric care pathways
                                        during critical network dropouts.
                                    </p>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        We hypothesize that deploying an{" "}
                                        <strong>
                                            Offline-First, Zero-Knowledge SQLite
                                        </strong>{" "}
                                        architecture on patient-owned devices
                                        will drastically reduce care
                                        interruption events and eliminate
                                        latency-driven patient abandonment in
                                        rural clinical settings.
                                    </p>
                                </div>
                                <div className="bg-[#0a0a0f] rounded-2xl border border-white/5 p-6 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Database className="w-5 h-5 text-amber-400" />
                                        <span className="text-xs font-bold text-white uppercase tracking-widest">
                                            Architectural Advantage
                                        </span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex items-center justify-between border-b border-white/5 pb-3">
                                            <span className="text-xs text-white/60">
                                                Cloud Dependency
                                            </span>
                                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                                0%
                                            </span>
                                        </li>
                                        <li className="flex items-center justify-between border-b border-white/5 pb-3">
                                            <span className="text-xs text-white/60">
                                                Data Portability
                                            </span>
                                            <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                                                100% Secure
                                            </span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-xs text-white/60">
                                                Offline Mutation Sync
                                            </span>
                                            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                                                Event-Sourced
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hypothesis 3: Somatic Biometric Syncing */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={FADE_UP}
                        className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                            <Activity className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                                Protocol 03 / Neurological Efficacy
                            </div>

                            <div className="flex items-start md:items-center justify-between mb-6 flex-col md:flex-row gap-4">
                                <h2 className="text-2xl md:text-4xl font-bold font-outfit text-white">
                                    Somatic Biometric Syncing vs. Acute
                                    Pediatric Anxiety
                                </h2>
                                <NativeShareWidget
                                    title="Protocol 03: Biometric Syncing — Humanos Foundation"
                                    text="Review the active clinical hypothesis investigating Biometric Syncing and Pediatric Anxiety."
                                    url="https://humanos.foundation/research#protocol-3"
                                />
                            </div>

                            <p className="text-sm text-white/70 leading-relaxed max-w-3xl mb-8">
                                White-coat syndrome and clinical environmental
                                triggers artificially inflate vital signs,
                                specifically heart rate and blood pressure,
                                during pediatric intake. By allowing patients to
                                ingest their own continuous wearable telemetry
                                directly into their sovereign vault prior to the
                                visit, we seek to prove a reduction in medically
                                induced anxiety markers.
                            </p>

                            <div className="p-6 rounded-2xl bg-[#0a0a0f] border border-white/5 relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <Cpu className="w-5 h-5 text-rose-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">
                                        Live Telemetry Simulation
                                    </span>
                                </div>
                                <HeartbeatStream
                                    color="#fb7185"
                                    duration={2.5}
                                    className="opacity-80"
                                />
                                <div className="absolute top-6 right-6 z-10 bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                                    <span className="text-[10px] font-bold text-rose-400 uppercase">
                                        Vagal Tone Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Federal Protocol Documentation Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={FADE_UP}
                    className="mt-20 border-t border-white/10 pt-16"
                >
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-12">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                <ShieldCheck className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-3xl font-bold font-outfit text-white">
                                    Full Clinical Protocol & Methodology
                                </h3>
                                <p className="text-sm text-white/50 mt-1">
                                    Regulatory bounds and IRB zero-knowledge
                                    exemptions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Column 1: Aims & Methodology */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors">
                                <h4 className="flex items-center gap-3 text-sm font-bold text-white mb-5">
                                    <Fingerprint className="w-4 h-4 text-cyan-400" />{" "}
                                    Specific Aims & Mechanics
                                </h4>
                                <ul className="space-y-4 text-sm text-white/60">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                        <p>
                                            <strong className="text-white/90">
                                                Objective:
                                            </strong>{" "}
                                            Quantify the mathematical lift in
                                            pharmacological adherence (Rx fills)
                                            when compliance-driven UI barriers
                                            (2FA resets, generic notifications)
                                            are removed via localized FHIR
                                            interception.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                        <p>
                                            <strong className="text-white/90">
                                                Data Capture Mechanics:
                                            </strong>{" "}
                                            Real-time Rx refill rates are
                                            ingested securely via encrypted
                                            e-prescribing webhooks locally.
                                            There is NO reliance on unreliable
                                            patient self-reporting.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors">
                                <h4 className="flex items-center gap-3 text-sm font-bold text-white mb-5">
                                    <Users className="w-4 h-4 text-purple-400" />{" "}
                                    Inclusion & Exclusion Cohorts
                                </h4>
                                <ul className="space-y-4 text-sm text-white/60">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                                        <p>
                                            <strong className="text-white/90">
                                                Criteria:
                                            </strong>{" "}
                                            Patients aged 8-17, formally
                                            navigating ASD/ADHD neurodivergence,
                                            currently requiring daily
                                            pharmacological intervention (e.g.,
                                            Stimulants, SSRIs).
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
                                        <p>
                                            <strong className="text-white/90">
                                                Exclusions:
                                            </strong>{" "}
                                            Patients requiring active inpatient
                                            psychiatric monitoring or severe
                                            acute intervention, to maintain pure
                                            outpatient executive function
                                            logging.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Governance & Timeline */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                                <h4 className="flex items-center gap-3 text-sm font-bold text-white mb-4">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />{" "}
                                    Zero-Knowledge IRB Defense
                                </h4>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Because the Aura hOS environment processes
                                    all FHIR payloads natively on the sterile
                                    client device (AES-GCM 256 encryption), the
                                    cloud architecture is mathematically blinded
                                    to the patient's Protected Health
                                    Information (PHI). This directly legally
                                    insulates the study structure, bypassing
                                    standard HIPAA BAA and FDA SaMD liabilities
                                    entirely, allowing for accelerated Safe
                                    Harbor pilot executions.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                <h4 className="flex items-center gap-3 text-sm font-bold text-white mb-6">
                                    <Clock className="w-4 h-4 text-amber-400" />{" "}
                                    Clinical Phase Timeline
                                </h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                                            <div className="w-px h-10 bg-white/10 my-2" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">
                                                Phase I (Months 1-3)
                                            </p>
                                            <p className="text-xs text-white/50 mt-1">
                                                Baseline UI friction logging and
                                                cohort onboarding via NGO
                                                routes.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                            <div className="w-px h-10 bg-white/10 my-2" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">
                                                Phase II (Months 4-6)
                                            </p>
                                            <p className="text-xs text-white/50 mt-1">
                                                Aura hOS continuous
                                                zero-friction Rx routing
                                                deployment.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">
                                                Phase III (Months 7-12)
                                            </p>
                                            <p className="text-xs text-white/50 mt-1">
                                                Quantitative evaluation of
                                                adherence lift and Federal Grant
                                                reporting.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="mt-12 p-8 bg-red-500/5 border border-red-500/20 rounded-3xl flex flex-col md:flex-row gap-8 items-center justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <h4 className="text-sm font-bold text-red-400 uppercase tracking-widest">
                                    Institutional Advisory Mandate
                                </h4>
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed max-w-3xl">
                                While specifically engineered as open-source
                                technical architecture, federal compliance
                                mandates require rigorous medical oversight. The
                                Foundation is actively securing a{" "}
                                <strong>
                                    Chief Medical Information Officer (CMIO)
                                </strong>{" "}
                                or <strong>Principal Investigator</strong> to
                                permanently anchor the institutional validity of
                                this protocol.
                            </p>
                        </div>
                        <a
                            href="mailto:hello@humanos.foundation"
                            className="shrink-0 px-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 whitespace-nowrap shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                        >
                            Apply for PI Role
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
