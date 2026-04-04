import React from 'react';
import SEOMeta from '../components/shared/SEOMeta';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PageHero from '../components/shared/PageHero';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const whitepaperContent = `
# Aura hOS: Data Security & Privacy Whitepaper

## Executive Summary

Aura hOS provides a revolutionary "Zero-Knowledge" approach to health data management, specifically engineered to eliminate the systemic vulnerabilities inherent in traditional cloud-based healthcare applications and eradicate the catastrophic 15-20 page physical clipboard packet bottleneck. By ensuring that Protected Health Information (PHI) is rigorously encrypted continuously before it syncs to our managed backend, Aura hOS fundamentally mitigates data breach risks for healthcare providers and patients alike.

## 1. Zero-Knowledge, Edge-First Architecture

Unlike legacy platforms that continuously sync raw, sensitive health telemetry to central cloud servers, Aura hOS operates on a Zero-Knowledge paradigm.

- **Native SQLite Storage Engine:** All patient-generated health data (seizure event logs, heart rate readings, temperature, sleep, activity) is processed and stored locally on the user's hardware utilizing an encrypted SQLite database managed by the Native App Shell.
- **Air-Gapped Operation:** The core operating system remains fully functional without an internet connection, guaranteeing uninterrupted patient access to their health data even in infrastructure-degraded environments.
- **Data At Rest Encryption:** We explicitly utilize **Native Hardware-Accelerated APIs (AES-256-GCM)** to encrypt the local SQLite database at rest. The decryption key is generated and tied to the device's hardware Secure Enclave/Keystore (FaceID/TouchID) or a strong secure PIN, ensuring data remains mathematically locked even if the device is stolen or the file system is ripped.
- **Zero-Knowledge by Default:** Aura hOS does not possess the decryption keys to access user data.
- **Zero-Knowledge Backend (Math over Infrastructure):** Because all health telemetry is aggressively encrypted (AES-256-GCM) exclusively on the patient's edge OS (iOS/Android) prior to transit, the backend infrastructure itself is legally moot. Aura's database stores only mathematically unbreakable ciphertext. We hold zero decryption keys. Therefore, even under a catastrophic systemic cloud breach or cross-tenant leakage scenario, zero Protected Health Information (PHI) is exposed, cementing our BAA Exemption.

## 2. FTC HBNR & BAA Exemption

Aura’s architecture inherently simplifies compliance because it legally operates under the FTC Health Breach Notification Rule (HBNR) as a Personal Health Record, rather than acting as a HIPAA Business Associate for integrating institutions.

- **Data Minimization & Structural BAA Prohibition:** By acting on behalf of the patient (not the hospital) and holding only mathematically locked (AES-256) ciphertext on centralized servers, Aura operates under FTC HBNR as a consumer PHR. HIPAA BAA execution is strictly prohibited as a matter of legal policy — signing one would immediately convert Aura into a Covered Entity/Business Associate and destroy this structural cost advantage.
- **Patient-Controlled Access (MDDS Safe Harbor):** Patients maintain cryptographic ownership of their telemetry. Generating a report for a neurologist involves creating a one-time, locally encrypted PDF or generating native **HL7 FHIR R4 JSON bundles** delivered via the Browser-Based Decryption Sandbox. This explicitly secures our FDA SaMD (MDDS) formatting safe harbor by transferring standardized data without proprietary diagnosis.
- **Tamper-Evident Auditable Logs:** Medical telemetry logs incorporate **Cryptographic Hashing**. This ensures that logged seizure or medication events have not been back-dated or altered by the patient or malicious actors, preserving the authentic chain of custody for clinical or legal reliance.

## 3. Emergency Context & Bypass Protocols

While privacy is paramount, emergency scenarios require immediate data access.

- **SOS Mode Lock Bypass:** Aura features a highly specialized continuous audio LFO siren and local notification system that operates unconditionally during critical seizure events, breaking through standard OS "Do Not Disturb" barriers strictly for emergency notification.
- **Unencrypted EMT Medical ID Bypass (Vial of Life):** Because the medical vault is purely Zero-Knowledge, a fully locked phone creates a life-safety paradox for treating an unconscious patient. Aura solves this by allowing patients to explicitly push a small, unencrypted subset of data (Blood Type, Current Meds, Severe Allergies) directly to the native iOS/Android "Medical ID" lock screen layer. First responders can access this critical emergency reference data strictly without needing the Aura app PIN.

## 4. Mitigation of Associated Risks

For healthcare institutions, adopting third-party software introduces vendor risk. Aura's architecture is the antidote to vendor liability.

- **No Third-Party Trackers:** The codebase is stripped of silent analytics engines, marketing trackers, or third-party behavioral cookies.
- **Open-Source Transparency:** The core OS is open-source, allowing institutional cyber-security teams to independently audit the codebase for vulnerabilities before deployment, rather than relying on proprietary "black box" claims.

## 5. Third-Party Audits & ADA Compliance

To definitively prove our security posture as a Sovereign B2C Personal Health Record (thereby strictly avoiding B2B vendor BAA traps), Aura hOS commits to:

- **Independent Grey-Box Penetration Testing:** Focused strictly on our iOS Secure Enclave / Android Keystore key derivation implementation and Supabase Row-Level Security (RLS) policies. We do not "grade our own homework."
- **WCAG 2.1 AA (EAA / ADA) Compliance:** Implementing strict "High Contrast" UI toggles alongside our standard Glassmorphism engine to ensure visually impaired patients maintain absolute, safe control over their medical telemetry.
\`;

export default function Whitepaper() {
    return (
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden">
            <SEOMeta
                title="Data Security & Privacy Whitepaper | Humanos Foundation"
                description="Read the Aura hOS Zero-Knowledge architecture and FTC HBNR compliance documentation. Our structural approach to eradicating data breaches and preserving patient privacy."
                url="https://humanos.foundation/whitepaper"
            />
            <Navbar />
            <PageHero
                badge="Compliance & Architecture"
                title="Data Security &"
                titleAccent="Privacy Whitepaper"
                subtitle="The formal documentation of our Zero-Knowledge architecture, edge-first cryptography, and FTC HBNR BAA Exemption strategy."
            />
            
            <section className="pb-28 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-6 md:p-12 border border-white/[0.04]">
                        <article className="prose prose-invert prose-cyan max-w-none prose-headings:font-outfit prose-h1:text-3xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2 prose-h2:mt-10 prose-h2:mb-6 prose-p:text-white/70 prose-p:leading-relaxed prose-li:text-white/70 prose-strong:text-white/90">
                            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                                {whitepaperContent}
                            </ReactMarkdown>
                        </article>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
