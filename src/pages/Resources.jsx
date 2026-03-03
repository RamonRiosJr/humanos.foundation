import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import { ExternalLink, BookOpen, Scale, Globe, Cpu } from 'lucide-react';

const resourceGroups = [
    {
        icon: Scale,
        title: 'Regulatory & Legal',
        resources: [
            { name: 'HHS HIPAA for Individuals', url: 'https://www.hhs.gov/hipaa/for-individuals', desc: 'Official HIPAA patient rights information' },
            { name: 'CMS Blue Button 2.0', url: 'https://bluebutton.cms.gov', desc: 'Medicare data access API' },
            { name: 'ONC Health IT', url: 'https://www.healthit.gov', desc: 'US federal health IT standards' },
            { name: 'EU GDPR Full Text', url: 'https://gdpr.eu', desc: 'Complete GDPR regulation' },
            { name: 'FDA Digital Health Center', url: 'https://www.fda.gov/medical-devices/digital-health-center-excellence', desc: 'FDA digital health regulation' },
        ],
    },
    {
        icon: Globe,
        title: 'Patient Advocacy',
        resources: [
            { name: 'Patient Privacy Rights', url: 'https://patientprivacyrights.org', desc: 'Medical privacy advocacy organization' },
            { name: 'Patient Advocacy Foundation', url: 'https://www.patientadvocate.org', desc: 'Patient support and case management' },
            { name: 'OpenNotes', url: 'https://www.opennotes.org', desc: 'Open notes movement in healthcare' },
            { name: 'CommonWell Health Alliance', url: 'https://www.commonwellalliance.org', desc: 'Health data interoperability' },
            { name: 'Health Data Research UK', url: 'https://www.hdruk.ac.uk', desc: 'Health data research' },
        ],
    },
    {
        icon: BookOpen,
        title: 'Academic & Research',
        resources: [
            { name: 'JAMA Network Open', url: 'https://jamanetwork.com/journals/jamanetworkopen', desc: 'Open-access medical research' },
            { name: 'NEJM Catalyst', url: 'https://catalyst.nejm.org', desc: 'Healthcare innovation research' },
            { name: 'PubMed — Patient Data', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=patient+data+ownership', desc: 'Patient data ownership research' },
        ],
    },
    {
        icon: Cpu,
        title: 'Open Source Health',
        resources: [
            { name: 'OpenMRS', url: 'https://openmrs.org', desc: 'Open-source medical records system' },
            { name: 'GNU Health', url: 'https://www.gnuhealth.org', desc: 'Free health information system' },
            { name: 'FHIR Community', url: 'https://www.hl7.org/fhir', desc: 'Health data interoperability standard' },
        ],
    },
];

export default function Resources() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta title="Research & Resources — Health Data Rights, HIPAA, GDPR | Humanos Foundation" description="Curated resources for patients, advocates, researchers, and technologists: regulatory references, patient advocacy organizations, academic research, and open-source health projects." url="https://humanos.foundation/resources" />
            <Navbar />
            <PageHero badge="Knowledge Base" title="Research &" titleAccent="Resources" subtitle="Curated resources for patients, advocates, researchers, and technologists building toward health data sovereignty." />
            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-5xl mx-auto space-y-14">
                    {resourceGroups.map((group, gi) => (
                        <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: gi * 0.1 }}>
                            <div className="flex items-center gap-3 mb-6">
                                <group.icon className="w-4 h-4 text-cyan-400/50" />
                                <p className="text-xs text-cyan-400/50 uppercase tracking-widest font-medium">{group.title}</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {group.resources.map((res, i) => (
                                    <motion.a key={res.name} href={res.url} target="_blank" rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                                        className="glass rounded-2xl p-5 border border-white/[0.04] hover:border-cyan-500/20 transition-all group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <p className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors leading-snug">{res.name}</p>
                                            <ExternalLink className="w-3 h-3 text-white/15 group-hover:text-cyan-400/60 transition-colors shrink-0 ml-2 mt-0.5" />
                                        </div>
                                        <p className="text-xs text-white/25">{res.desc}</p>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
