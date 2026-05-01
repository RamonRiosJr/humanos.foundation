import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import BrokenFirstMile from '../components/landing/BrokenFirstMile';
import AboutJourney from '../components/landing/AboutJourney';
import Manifestos from '../components/landing/Manifestos';
import Footer from '../components/landing/Footer';
import SectionDivider from '../components/shared/SectionDivider';
import HomeStats from '../components/landing/HomeStats';
import SEOMeta from '../components/shared/SEOMeta';
import ZeroKnowledgeSimulator from '../components/landing/ZeroKnowledgeSimulator';
import SurvivalBanner from '../components/landing/SurvivalBanner';

export default function Home() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-clip">
            <SEOMeta
                title="Humanos Foundation | Open-Source Health Data Sovereignty"
                description="The Human Operating System (hOS) is a Zero-Knowledge, open-source vault giving patients ultimate sovereign ownership of their medical records to bypass legacy EHR billing machines."
                url="https://humanos.foundation"
                keywords="open source medical records, zero knowledge EHR, FHIR interoperability, HIPAA alternative, FTC HBNR compliance, patient data sovereignty, health tech non-profit, Aura hOS"
                type="website"
            />
            <SurvivalBanner />
            <Navbar />
            <HeroSection />
            <SectionDivider />
            <div id="vision"><BrokenFirstMile /></div>
            <SectionDivider />
            <ZeroKnowledgeSimulator />
            <SectionDivider />
            <div id="stats"><HomeStats /></div>
            <SectionDivider />
            <div id="origin"><AboutJourney /></div>
            <SectionDivider />
            <div id="manifesto"><Manifestos /></div>
            <Footer />
        </div>
    );
}
