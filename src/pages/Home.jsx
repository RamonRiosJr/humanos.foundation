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

export default function Home() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Humanos Foundation — Health Data Sovereignty Movement"
                description="The Human Operating System (hOS) is a global movement to return health data sovereignty to every patient. Own your health record, control who sees it, and benefit from it. Founded by Ramon Luis Rios Jr."
                url="https://humanos.foundation"
                type="website"
            />
            <Navbar />
            <HeroSection />
            <SectionDivider />
            <div id="vision"><BrokenFirstMile /></div>
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
