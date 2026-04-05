import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import LegalLayout from '../components/legal/LegalLayout';

const sections = [
    {
        title: '1. Acceptance of Terms',
        content: `By accessing humanos.foundation (the "Site"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Site.\n\nEffective Date: March 1, 2026`,
    },
    {
        title: '2. Formatting-Only Platform (Non-SaMD Exemption)',
        content: `Aura hOS and the Humanos Foundation platforms are strictly administrative and formatting engines. The platform does NOT diagnose, treat, mitigate, or cure any disease. It does not perform clinical analytics or interpret medical results. It strictly formats user-provided data into a clean, legible user interface.\n\nTherefore, the platform is explicitly excluded from the FDA Software as a Medical Device (SaMD) classifications under the 21st Century Cures Act. The user is entirely responsible for the data they enter and decisions they make based upon it.`,
    },
    {
        title: '3. Not Medical Advice',
        content: `THE CONTENT ON THIS SITE IS FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY. NOTHING ON THIS SITE CONSTITUTES MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.\n\nAlways seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice because of something you read on this Site. Using this Site does not create a doctor-patient relationship of any kind.`,
    },
    {
        title: '4. Intellectual Property',
        content: `All content on this Site — including text, graphics, logos, and the hOS movement materials — is the property of Humanos Foundation and Coqui Cloud Dev Co. and is protected by applicable intellectual property laws.\n\nYou may share and reference our content for educational and advocacy purposes with attribution to "Humanos Foundation / humanos.foundation."`,
    },
    {
        title: '5. User Conduct',
        content: `You agree not to:\n\n• Use the Site for any unlawful purpose\n• Attempt to gain unauthorized access to any portion of the Site\n• Transmit spam, malware, or harmful code\n• Misrepresent your affiliation with Humanos Foundation\n• Use Site content for commercial purposes without explicit written permission`,
    },
    {
        title: '6. Third-Party Links',
        content: `Our Site contains links to third-party websites. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them. We do not guarantee the accuracy of information on linked sites.`,
    },
    {
        title: '7. Limitation of Liability',
        content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, HUMANOS FOUNDATION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THIS SITE OR RELIANCE ON ITS CONTENT.\n\nOur total liability for any claims relating to the Site shall not exceed $100 USD.`,
    },
    {
        title: '8. Governing Law',
        content: `These Terms are governed by the laws of the Commonwealth of Puerto Rico and the United States of America, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Puerto Rico.`,
    },
    {
        title: '9. Changes to Terms',
        content: `We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the new Terms.`,
    },
    {
        title: '10. Contact',
        content: `To report violations or for legal inquiries:\nEmail: legal@humanos.foundation`,
    },
];

export default function Terms() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Terms of Use — Humanos Foundation" description="Terms governing use of humanos.foundation. Informational site only — not medical advice. Governing law: Puerto Rico / United States." url="https://humanos.foundation/terms" />
            <Navbar />
            <PageHero badge="Legal" title="Terms of" titleAccent="Use" subtitle="Plain language terms governing your use of this Site." />
            <LegalLayout sections={sections} lastUpdated="March 1, 2026" version="1.0" />
            <Footer />
        </div>
    );
}
