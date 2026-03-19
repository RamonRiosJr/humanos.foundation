import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import BrokenFirstMile from '../components/landing/BrokenFirstMile';
<<<<<<< HEAD
=======
import AboutJourney from '../components/landing/AboutJourney';
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
import Manifestos from '../components/landing/Manifestos';
import Footer from '../components/landing/Footer';
import SectionDivider from '../components/shared/SectionDivider';
import HomeStats from '../components/landing/HomeStats';
import SEOMeta from '../components/shared/SEOMeta';

export default function Home() {
    return (
<<<<<<< HEAD
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
=======
        <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
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
<<<<<<< HEAD
            <div id="stats"><HomeStats /></div>
=======
            <HomeStats />
            <SectionDivider />
            <div id="origin"><AboutJourney /></div>
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
            <SectionDivider />
            <div id="manifesto"><Manifestos /></div>
            <Footer />
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
