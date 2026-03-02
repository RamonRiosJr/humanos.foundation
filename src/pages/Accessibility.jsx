import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import LegalLayout from '../components/legal/LegalLayout';

const sections = [
    {
        title: '1. Our Commitment',
        content: `Humanos Foundation is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.\n\nConformance Status: We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.`,
    },
    {
        title: '2. Measures Taken',
        content: `To support accessibility, Humanos Foundation has taken the following measures:\n\n• Semantic HTML structure throughout the Site\n• Sufficient color contrast ratios (minimum 4.5:1 for normal text)\n• Keyboard navigation support\n• Descriptive alt text for all meaningful images\n• Focus indicators visible on all interactive elements\n• Responsive design that works at all zoom levels up to 400%\n• No content that flashes more than 3 times per second`,
    },
    {
        title: '3. Known Limitations',
        content: `While we strive for full WCAG 2.1 AA compliance, some areas are still in progress:\n\n• Some complex interactive components (animated neural map) may not be fully accessible to screen readers. We are working on providing text alternatives.\n• Some older blog content may not have full alt text coverage. We are auditing and remediating.\n\nWe are committed to remediating all known issues. Last full accessibility audit: March 2026.`,
    },
    {
        title: '4. Feedback & Contact',
        content: `We welcome feedback on the accessibility of humanos.foundation. If you experience barriers:\n\nEmail: accessibility@humanos.foundation\nResponse time: Within 5 business days\n\nWe take accessibility feedback seriously and will work to address issues promptly. If you need an alternative format for any content on this Site, please contact us and we will accommodate your request.`,
    },
    {
        title: '5. Formal Complaints',
        content: `If you are not satisfied with our response, you may contact the relevant enforcement body in your jurisdiction. In the US, this may include the Department of Justice or the US Access Board. In the EU, this may include your national authority.`,
    },
];

export default function Accessibility() {
    return (
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
            <Navbar />
            <PageHero badge="Legal" title="Accessibility" titleAccent="Statement" subtitle="Health data sovereignty must be accessible to everyone — including people with disabilities." />
            <LegalLayout sections={sections} lastUpdated="March 1, 2026" version="1.0" />
            <Footer />
        </div>
    );
}