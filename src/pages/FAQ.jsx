import React, { useState } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import PageCTA from '../components/shared/PageCTA';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        category: 'About Aura hOS™',
        questions: [
            { q: 'What is Aura hOS™?', a: 'Aura hOS™ is a sovereign clinical utility engineered by the Humanos Foundation. It acts as a Zero-Knowledge architectural bridge designed to solve the clinical \'First Mile\' crisis, eliminating the 15-20 page clipboard penalty for neurodivergent and medically complex populations via deterministic formatting and biometrics.' },
            { q: 'Is the Humanos Foundation a registered nonprofit?', a: 'The Humanos Foundation operates exactly as a 501(c)(3) open-source technology steward. Our formal 501(c)(3) nonprofit designation and tax exemption status is pending final determination from the IRS. We operate purely to engineer public-benefit, open-source technology for marginalized patient populations, fully aligning with state and federal grant compliance.' },
            { q: 'Who engineered Aura hOS™?', a: 'Aura hOS™ was architected by systems engineer and patient Ramon Luis Rios Jr., driven by the sheer necessity to survive a fragmented healthcare system. It was built from the ground up as a defensive, cryptographically sealed medical toolset. Learn more on the Origin page.' },
        ],
    },
    {
        category: 'Data Sovereignty & Legal Frameworks',
        questions: [
            { q: 'How does Aura hOS™ protect my data from being sold?', a: 'Unlike standard EHRs where "de-identified" data is legally sold, Aura hOS™ runs on a Zero-Knowledge local-first architecture. We mathematically cannot read, see, or sell your clinical data because the encryption keys are tied to your device biometrics, not our servers.' },
            { q: 'Are you a HIPAA Covered Entity?', a: 'No. Because Aura hOS™ structurally cannot access your decrypted medical data, the foundation falls under the strict FTC Health Breach Notification Rule (HBNR) \'Zero-Knowledge\' exemption. This creates a definitive mathematical boundary where true data sovereignty is enforced prior to physician ingestion.' },
            { q: 'What does "Formatting-Only Engine" mean?', a: 'The local client utilizes deterministic algorithms purely to synthesize and format complex patient narratives into clinical FHIR-compliant outputs entirely on-device. The server acts strictly as a blind ciphertext pipeline and intentionally does not diagnose, read, or process data, allowing it to mathematically guarantee the patient retains absolute sovereign control over their records.' },
        ],
    },
    {
        category: 'Sovereign Architecture',
        questions: [
            { q: 'What is Zero-Knowledge architecture?', a: 'Zero-knowledge architecture inside Aura hOS™ means that even the platform infrastructure cannot read your data. Your clinical state is protected via 256-bit AES-GCM Local Encryption before it touches our Edge servers, secured by a cryptographic key derived solely from your local device PIN or hash-fragment URL logic that never hits the server.' },
            { q: 'What does "local-first" deployment mean?', a: 'Local-first computing ensures your health data is stored and processed on your native device (iOS/Android). You retain absolute control even when completely offline. Your health records will not vanish if our servers experience downtime.' },
            { q: 'How does the Zero-Knowledge Handshake work?', a: 'Aura hOS™ utilizes an automated Zero-SSN registration flow. We generate Unique Patient Identifiers (UPIs) and Clinic Routing IDs to securely link patient health records directly into the provider\'s terminal without exposing the patient\'s Social Security Number across insecure channels.' },
        ],
    },
    {
        category: 'Grants & Pilot Programs',
        questions: [
            { q: 'How do clinics pilot Aura hOS™?', a: 'We partner with federally qualified health centers (FQHCs) and institutional partners. Our current pilot programs act as real-world benchmarks designed to unconditionally eliminate the 15-20 page clipboard penalty. If you represent a front-range clinic, contact partnerships@humanos.foundation.' },
            { q: 'How is the platform funded?', a: 'The Humanos Foundation architecture is primarily backed by a strategic federal roadmap, targeting prestigious federal health-equity funding vectors, ensuring the core platform remains free for the neurodivergent community.' },
            { q: 'Can developers audit the codebase?', a: 'Yes. Aura hOS™ is an open-source movement. We invite security auditors, developers, and systems architects to review our Zero-Knowledge protocols directly. Reach out to hello@humanos.foundation.' },
        ],
    },
];

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-white/[0.04] rounded-2xl overflow-hidden hover:border-white/[0.07] transition-colors duration-300">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                <span className="text-sm font-semibold text-white/80 leading-snug">{question}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-cyan-400/40 shrink-0" />
                </motion.div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="px-6 pb-5 border-t border-white/[0.04] pt-4">
                            <p className="text-sm text-white/70 leading-relaxed font-medium">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="FAQ — Patient Data Rights, hOS Movement & Health Sovereignty"
                description="Answers to common questions about the hOS movement, patient data ownership, HIPAA, zero-knowledge architecture, FHIR, and how to get involved with Humanos Foundation."
                url="https://humanos.foundation/faq"
            />
            <Navbar />
            <PageHero badge="Common Questions" title="Frequently Asked" titleAccent="Questions" subtitle="Everything you need to know about the hOS movement, patient data rights, and how to get involved." />
            <section className="pb-20 px-4 md:px-8">
                <div className="max-w-3xl mx-auto space-y-12">
                    {faqs.map((group, i) => (
                        <motion.div key={group.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                            <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">{group.category}</p>
                            <div className="space-y-2">
                                {group.questions.map((item) => (
                                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <PageCTA title="Still Have Questions?" subtitle="Our team is happy to help. Reach out directly." cta="Contact Us" ctaHref="/contact" />
            <Footer />
        </div>
    );
}


