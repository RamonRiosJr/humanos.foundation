import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import LegalLayout from '../components/legal/LegalLayout';

const sections = [
    {
        title: '1. Introduction',
        content: `Humanos Foundation ("we," "us," or "our") operates humanos.foundation (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.\n\nEffective Date: March 1, 2026 | Version 1.0\n\nImportant: This Site does not collect, store, or process any personal health data (PHI). We are an informational and advocacy platform only.`,
    },
    {
        title: '2. Information We Collect',
        content: `We may collect the following information when you interact with our Site:\n\n• Name and email address (when you join the movement, sign up for the newsletter, or contact us)\n• IP address and browser information (via analytics)\n• Cookies and usage data (see our Cookie Policy)\n• Organization name and inquiry type (when contacting us)\n• Voluntary information you provide in forms\n\nWe do NOT collect: health records, medical data, financial data, or any Protected Health Information (PHI).`,
    },
    {
        title: '3. How We Use Your Information',
        content: `We use the information we collect to:\n\n• Send you movement updates and newsletters (with your consent)\n• Respond to your inquiries and contact form submissions\n• Analyze Site usage to improve our content (via privacy-respecting analytics)\n• Communicate about events, partnerships, and movement updates\n• Comply with legal obligations\n\nWe never sell your personal information. We never use your data for advertising.`,
    },
    {
        title: '4. Data Storage & Third Parties',
        content: `Your data may be stored with the following service categories:\n\n• Email service providers (for newsletter delivery)\n• Analytics platforms (privacy-first analytics preferred)\n• Cloud infrastructure providers\n\nAll third-party providers are bound by data processing agreements consistent with GDPR requirements.`,
    },
    {
        title: '5. Your Rights (GDPR & CCPA)',
        content: `You have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data ("right to be forgotten")\n• Withdraw consent at any time\n• Data portability — receive your data in a structured, machine-readable format\n• Lodge a complaint with your supervisory authority\n\nTo exercise any of these rights, contact: privacy@humanos.foundation\n\nWe will respond to all requests within 30 days.`,
    },
    {
        title: '6. Cookies',
        content: `We use essential cookies for Site functionality and, with your consent, analytics cookies. See our full Cookie Policy at /cookies for details and opt-out instructions.`,
    },
    {
        title: '7. Data Retention',
        content: `We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, typically:\n\n• Newsletter subscribers: Until you unsubscribe\n• Contact form submissions: 2 years\n• Analytics data: 12 months (anonymized)`,
    },
    {
        title: '8. Contact',
        content: `For all privacy-related requests:\n\nEmail: privacy@humanos.foundation\nHumanos Foundation\nPuerto Rico, United States`,
    },
];

export default function Privacy() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Privacy Policy — Humanos Foundation" description="How Humanos Foundation collects, uses, and protects your personal data. GDPR and CCPA compliant. We never sell your data." url="https://humanos.foundation/privacy" noindex={false} />
            <Navbar />
            <PageHero badge="Legal" title="Privacy" titleAccent="Policy" subtitle="We believe in radical transparency — including about how we handle your data." />
            <LegalLayout sections={sections} lastUpdated="March 1, 2026" version="1.0" />
            <Footer />
        </div>
    );
}