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
        category: 'About hOS',
        questions: [
            { q: 'What is the Human Operating System (hOS)?', a: 'hOS is a movement and philosophy, not a specific product. We advocate for a world where your health data is owned by you, encrypted by default, and portable across any system you choose to use. Think of it as the operating system layer that puts you — the patient — in control of your biological data.' },
            { q: 'Is humanos.foundation a nonprofit?', a: 'Humanos Foundation is currently on a path toward formal nonprofit status (501(c)(3)). We operate as an advocacy and educational organization committed to patient data sovereignty. Updates on our legal structure will be posted here.' },
            { q: 'Who founded this?', a: 'hOS was founded by Ramon Luis Rios Jr., a patient and technologist who experienced the broken healthcare data system firsthand. The movement grew from a personal necessity into a global advocacy mission. Learn more on the Origin page.' },
        ],
    },
    {
        category: 'Patient Data Rights',
        questions: [
            { q: 'Do I actually own my health data?', a: 'Legally, it\'s complicated — and that\'s the problem. Under HIPAA, you have rights to access your records, but you don\'t have true ownership. Your provider, insurer, and numerous third parties may have rights to your data that supersede yours. This is exactly what hOS is working to change.' },
            { q: 'Can my doctor sell my health data?', a: 'Yes. "De-identified" health data is routinely sold by hospitals, EHR vendors, and data brokers — legally. This is a $250 billion market. The hOS movement advocates for laws requiring explicit, informed consent before any data sale, and patient benefit-sharing from data commercialization.' },
            { q: 'What is HIPAA and does it protect me?', a: 'HIPAA (Health Insurance Portability and Accountability Act) gives you the right to access your medical records and requires healthcare entities to protect your data. However, it has significant gaps: it doesn\'t cover health apps, fitness trackers, or direct-to-consumer services. And "de-identified" data can be sold without your consent.' },
        ],
    },
    {
        category: 'Technology',
        questions: [
            { q: 'What is zero-knowledge architecture?', a: 'Zero-knowledge architecture means that even the service provider cannot read your data. Your data is encrypted before it leaves your device using a key only you control. This is the gold standard for health data privacy — and a core principle we advocate for.' },
            { q: 'What does "local-first" mean?', a: 'Local-first computing means your data is stored and processed on your device, not on a remote server. You retain control even when offline, and your data doesn\'t disappear if a company shuts down. We believe health data should be local-first by default.' },
            { q: 'What is FHIR?', a: 'FHIR (Fast Healthcare Interoperability Resources) is an open standard for representing and exchanging electronic health records. Think of it as a universal language for health data. We advocate for FHIR-based systems that let your data move freely between providers without proprietary lock-in.' },
        ],
    },
    {
        category: 'Getting Involved',
        questions: [
            { q: 'How can I join the movement?', a: 'Visit our Join page to sign up. Whether you\'re a patient, clinician, technologist, researcher, or advocate — there\'s a place for you in this movement. We welcome volunteers, contributors, and partners.' },
            { q: 'How can organizations partner with hOS?', a: 'We partner with healthcare advocacy organizations, academic institutions, open-source health projects, and aligned nonprofits. Contact us at partnerships@humanos.foundation to start the conversation.' },
            { q: 'Can I write for the hOS blog?', a: 'Yes! We welcome contributors who can bring expertise in patient rights, health technology, policy, or personal stories of navigating the healthcare system. Reach out to hello@humanos.foundation with your pitch.' },
        ],
    },
];

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-white/[0.04] rounded-2xl overflow-hidden hover:border-white/[0.07] transition-colors duration-300">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                <span className="text-sm font-medium text-white/65 leading-snug">{question}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-white/25 shrink-0" />
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
                            <p className="text-sm text-white/35 leading-relaxed">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
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
                            <p className="text-xs text-cyan-400/50 uppercase tracking-widest font-medium mb-4">{group.category}</p>
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