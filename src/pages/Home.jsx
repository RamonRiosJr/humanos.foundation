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
import SurvivalBanner from '../components/landing/SurvivalBanner';
import DataManifestoImage from '../components/landing/DataManifestoImage';

export default function Home() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-clip">
            <SEOMeta
                title="Aura hOS™ — A HumanOS Foundation Initiative | Health Data Sovereignty"
                description="The Humanos Foundation enforces Zero-Knowledge FHIR and Edge Intake Routing to solve the CMS Kill the Clipboard mandate. Own your health data sovereignty with Aura hOS™."
                url="https://humanos.foundation"
                keywords="Aura hOS, HumanOS Foundation, CMS Kill the Clipboard, Zero-Knowledge FHIR, health data sovereignty"
                type="website"
            />
            <SurvivalBanner />
            <Navbar />
            <HeroSection />
            <SectionDivider />
            <div id="vision"><BrokenFirstMile /></div>
            <SectionDivider />
            <div id="stats"><HomeStats /></div>
            <SectionDivider />
            <div id="origin"><AboutJourney /></div>
            <SectionDivider />
            <DataManifestoImage />
            <SectionDivider />
            <div id="manifesto"><Manifestos /></div>
            <Footer />
        </div>
    );
}
