import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import LegalLayout from '../components/legal/LegalLayout';

const sections = [
    {
        title: '1. Not Medical Advice',
        content: `ALL CONTENT ON HUMANOS.FOUNDATION IS FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY.\n\nNothing on this Site constitutes medical advice, diagnosis, treatment, or the practice of medicine. Never disregard professional medical advice or delay seeking it because of something you read on this Site. If you have a medical emergency, call your local emergency services immediately.\n\nUsing this Site does not create a doctor-patient relationship of any kind.`,
    },
    {
        title: '2. General Information Only',
        content: `The information provided on this Site is intended to educate patients and the general public about health data rights, healthcare policy, and related technology concepts. It is not intended to substitute for professional advice from a licensed healthcare provider, attorney, or other qualified professional.\n\nFor specific medical, legal, or regulatory guidance, always consult a qualified professional in the relevant field.`,
    },
    {
        title: '3. Third-Party Content',
        content: `This Site may link to, reference, or quote third-party websites, publications, research, and organizations. Humanos Foundation does not control, endorse, or guarantee the accuracy of third-party content. Links are provided for informational purposes only.\n\nWe are not responsible for the privacy practices, content, or availability of external sites.`,
    },
    {
        title: '4. Accuracy of Information',
        content: `We make every effort to ensure the information on this Site is accurate and up to date. However, healthcare regulations, technology standards, and research findings change frequently. We make no representations or warranties about the completeness, accuracy, or timeliness of any content.\n\nAlways verify critical information with primary sources, including official regulatory bodies (HHS, FDA, EU authorities).`,
    },
    {
        title: '5. No Professional Relationship',
        content: `Your use of this Site or any contact with us does not create an attorney-client relationship, doctor-patient relationship, or any other professional relationship. Any information you share with us is not protected by professional privilege.`,
    },
    {
        title: '6. Contact',
        content: `For questions about this Disclaimer:\nEmail: legal@humanos.foundation`,
    },
];

export default function Disclaimer() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <Navbar />
            <PageHero badge="Legal" title="Disclaimer" titleAccent="" subtitle="Important information about the nature and limitations of content on this Site." />
            <LegalLayout sections={sections} lastUpdated="March 1, 2026" version="1.0" />
            <Footer />
        </div>
    );
}
