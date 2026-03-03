import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import LegalLayout from '../components/legal/LegalLayout';

const sections = [
    {
        title: '1. What Are Cookies',
        content: `Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently and to provide information to site owners. This policy explains how humanos.foundation uses cookies and your choices regarding them.\n\nEffective Date: March 1, 2026`,
    },
    {
        title: '2. Types of Cookies We Use',
        content: `Essential Cookies (always active)\nThese are necessary for the Site to function. They include session management and security cookies. You cannot opt out of these.\n\nAnalytics Cookies (with consent)\nWe use privacy-respecting analytics to understand how visitors use our Site — page views, referral sources, and session duration. We prefer tools like Plausible Analytics that do not use tracking cookies or collect personal data.\n\nPreference Cookies (with consent)\nThese remember your preferences such as cookie consent status.\n\nWe do NOT use advertising or third-party tracking cookies.`,
    },
    {
        title: '3. How to Control Cookies',
        content: `You can control cookies through:\n\n• Our cookie consent banner (shown on first visit)\n• Your browser settings — most browsers allow you to refuse or delete cookies\n• Browser extensions designed for privacy (uBlock Origin, Privacy Badger)\n\nNote: disabling essential cookies may affect Site functionality.`,
    },
    {
        title: '4. GDPR & CCPA Compliance',
        content: `For EU visitors (GDPR): Non-essential cookies are only placed after you provide explicit consent via our cookie banner. You may withdraw consent at any time.\n\nFor California residents (CCPA): We do not sell personal information collected via cookies. You have the right to opt out of any data collection associated with your use of the Site.`,
    },
    {
        title: '5. Contact',
        content: `For cookie-related questions:\nEmail: privacy@humanos.foundation`,
    },
];

export default function Cookies() {
    return (
        <div className="bg-obsidian min-h-screen text-foreground overflow-x-hidden">
            <Navbar />
            <PageHero badge="Legal" title="Cookie" titleAccent="Policy" subtitle="We keep cookie use to an absolute minimum — consistent with our values on data sovereignty." />
            <LegalLayout sections={sections} lastUpdated="March 1, 2026" version="1.0" />
            <Footer />
        </div>
    );
}
