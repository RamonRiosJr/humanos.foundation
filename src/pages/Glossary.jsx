import React, { useState } from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';

const terms = [
    { term: 'FHIR', full: 'Fast Healthcare Interoperability Resources', definition: 'An open international standard for exchanging electronic health records. FHIR enables health data to move between different systems using modern web technologies (APIs). It\'s the foundation for interoperable, patient-controlled health records.' },
    { term: 'HIPAA', full: 'Health Insurance Portability and Accountability Act', definition: 'US federal law (1996) that establishes standards for protecting sensitive patient health information. Gives patients rights to access their records but has significant gaps in covering modern health apps and data brokers.' },
    { term: 'PHI', full: 'Protected Health Information', definition: 'Any health information that can be used to identify an individual. Includes medical records, test results, prescriptions, and insurance information. PHI is protected under HIPAA when held by covered entities.' },
    { term: 'EHR', full: 'Electronic Health Record', definition: 'A digital version of a patient\'s medical history maintained over time by a healthcare provider. Despite being "electronic," EHRs are notoriously fragmented and difficult for patients to access or transfer.' },
    { term: 'Zero-Knowledge', full: 'Zero-Knowledge Architecture', definition: 'A cryptographic approach where a service provider can verify data without being able to read it. In health data context, this means the platform holding your data cannot decrypt or access your health records — only you can. This architecture mathematically removes us from the data access path, ensuring your sovereignty.' },
    { term: 'Open Source', full: 'Open Source Software', definition: 'Open source means no lock-in — your data and the tools to read it must be freely accessible. It allows you to verify that our system is mathematically incapable of seeing your data.' },
    { term: 'Local-First', full: 'Local-First Software', definition: 'Software that stores your data on your own device and works offline, with optional sync. Prioritizes user ownership and availability over cloud convenience. A key principle for true health data sovereignty.' },
    { term: 'GDPR', full: 'General Data Protection Regulation', definition: 'EU regulation (2018) giving individuals control over their personal data. Establishes rights to access, correct, delete, and port personal data. Sets the global standard for data privacy rights.' },
    { term: 'CCPA', full: 'California Consumer Privacy Act', definition: 'California law giving residents the right to know what personal data is collected, to delete it, and to opt out of its sale. One of the strongest US state privacy laws.' },
    { term: 'Interoperability', full: 'Health Data Interoperability', definition: 'The ability of different healthcare IT systems to exchange, interpret, and use data seamlessly. True interoperability means your health record follows you, not your provider.' },
    { term: 'Decentralized ID', full: 'Decentralized Identifier (DID)', definition: 'A type of digital identity that is controlled by the individual, not a central authority. DIDs enable self-sovereign identity — you control your health identity without depending on any single institution.' },
    { term: 'E2EE', full: 'End-to-End Encryption', definition: 'Encryption where only the communicating parties can read the data. In health data: only you and parties you explicitly authorize can decrypt your records. However, once shared with a clinician, hOS loses control over how that clinician chooses to store or share the decrypted data within their institution.' },
    { term: 'SaMD', full: 'Software as a Medical Device', definition: 'Software intended to be used for medical purposes — diagnosis, prevention, monitoring, or treatment — without being part of a hardware medical device. Subject to FDA regulation in the US and CE marking in the EU.' },
    { term: 'TEFCA', full: 'Trusted Exchange Framework and Common Agreement', definition: 'A US framework to enable nationwide health information exchange across different networks. Part of the 21st Century Cures Act implementation aiming for better patient data access.' },
    { term: 'Patient Sovereignty', full: 'Patient Data Sovereignty', definition: 'The principle that patients have absolute rights over their biological data—including the choice of whom to trust. It is not about "protecting" data behind a corporate wall; it is about mathematically ensuring the patient is the sole gatekeeper of their own history.' },
    { term: 'Information Blocking', full: 'Information Blocking', definition: 'A practice by a healthcare provider, IT developer, or health exchange that unreasonably limits the access, exchange, or use of electronic health information (EHI). This anti-competitive practice is banned under the 21st Century Cures Act.' },
    { term: 'Data Broker', full: 'Health Data Broker', definition: 'A commercial entity that collects information on consumers from multiple sources, analyzes it, and sells it to third parties. In healthcare, stripped or "anonymized" data escapes HIPAA and fuels this billion-dollar shadow industry.' },
    { term: 'MDDS', full: 'Medical Device Data System', definition: 'Software that transfers, stores, or formats medical data without modifying it or controlling medical devices. Properly structured systems can qualify as MDDS, legally bypassing strict Class II FDA diagnostic regulations.' },
    { term: 'BAA', full: 'Business Associate Agreement', definition: 'A mandatory contract required by HIPAA between a medical clinic and a third-party software vendor. Implementing a Zero-Knowledge encryption architecture mathematically bypasses the need for BAAs because the software vendor can never read the data.' },
    { term: 'Triage Process', full: 'Hospital Triage', definition: 'The administrative and clinical process of determining the priority of patients\' treatments in the emergency room. Often the primary point of failure and delay for patients experiencing neurodivergent overloads or complex communication barriers.' },
    { term: 'Clinical Baseline', full: 'Verified Medical Baseline', definition: 'The foundational snapshot of a patient\'s vital signs, active medications, and chronic conditions upon entry to a medical facility. Establishing this instantly without a clipboard prevents diagnostic errors.' },
    { term: 'FTC HBNR', full: 'Health Breach Notification Rule', definition: 'A primary Federal Trade Commission regulation requiring vendors of personal health records (PHRs) to notify consumers following a breach. Platforms that do not possess decryption keys possess a powerful legal defense against these catastrophic liability vectors.' },
];

const alphabet = [...new Set(terms.map(t => t.term[0]))].sort();

export default function Glossary() {
    const [filter, setFilter] = useState('');

    const filtered = terms.filter(t =>
        filter === '' ||
        t.term.toLowerCase().includes(filter.toLowerCase()) ||
        t.full.toLowerCase().includes(filter.toLowerCase()) ||
        t.definition.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Health Data Glossary — FHIR, HIPAA, PHI, Zero-Knowledge & More"
                description="Plain-language definitions for FHIR, HIPAA, PHI, EHR, zero-knowledge architecture, GDPR, CCPA, patient sovereignty, and other key terms in the health data rights movement."
                url="https://humanos.foundation/glossary"
            />
            <Navbar />
            <PageHero badge="Reference" title="Health Data" titleAccent="Glossary" subtitle="Plain-language definitions for the terms that matter most in the patient data sovereignty movement." />
            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <input
                        type="text"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        placeholder="Search terms..."
                        className="w-full glass rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/20 border border-white/[0.06] focus:border-cyan-500/40 focus:outline-none transition-colors bg-transparent mb-10"
                    />
                    <div className="space-y-4">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.term}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                className="glass rounded-2xl p-6 border border-white/[0.04] hover:border-cyan-500/15 transition-all duration-400"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 flex items-center justify-center">
                                        <span className="text-xs font-bold text-cyan-400/70 font-mono">{item.term.slice(0, 4)}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-cyan-400 mb-0.5" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>{item.term}</h3>
                                        <p className="text-xs text-cyan-400/60 mb-2">{item.full}</p>
                                        <p className="text-sm text-white/80 leading-relaxed">{item.definition}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}


