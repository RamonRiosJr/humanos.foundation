<div align="center">

# Humanos Foundation
### The Advocacy Kernel & Human Operations Layer

[![License: MIT](https://img.shields.io/badge/License-MIT-00d4ff.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-10b981.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18.x-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)

**[Visit the Foundation](https://humanos.foundation)** • **[Read the Manifesto](https://humanos.foundation/manifesto)** • **[Join the Revolution](https://humanos.foundation/join)**

---

*"The system only listens when the truth is structurally robust. We are engineering the Zero-Knowledge Vault to make your clinical narrative undeniable."*

</div>

## 🌍 The Mission

The **Humanos Foundation** is the 501(c)(3) Enterprise advocacy wing of the **Aura hOS™ (Human Operating System)**. We are a global network of patients, clinicians, and technologists dedicated to dismantling the 15-20 page clinical clipboard penalty. 

This repository powers our digital advocacy platform—an enterprise-grade engine designed to drive our $3.0M Enterprise Capitalization, manage donor pathways, host our sovereign education library, and facilitate recruiting via our CRM.

---

## 🏗️ Architectural Boundaries

To protect both our capital roadmap and regulatory standing, the ecosystem is strictly divided into two distinct perimeters:

### 1. The Human Operations Layer (This Repository)
Powers `humanos.foundation`. This is the administrative surface area of the NGO.
- **Frontend:** React 18 SPA, deployed via Vercel Edge.
- **Backend (CRM):** Bound directly to Odoo (`teams.humanos.foundation`) via internal iframes and webhooks.
- **Use Case:** Recruiting, Helpdesk, GoFundMe routing, and Federal Grant (PCORI/AHRQ) validation.
- **Design System:** Custom Glassmorphism, Tailwind CSS, and Framer Motion.

### 2. The Machine Layer (External Repository)
Powers `aurahos.io` and the Clinical Patient Vault. For engineering the core software, please see the `aura-health-os` repository.
- **Frontend:** Capacitor / React Native.
- **Backend:** Local-First IndexedDB and Supabase Edge Functions.
- **Use Case:** The $199/mo B2B Clinic Route, Zero-SSN Registrations, and AES-GCM encrypted vaults.

---

## 🚀 Presentation & Quick Start

### 1. Prerequisites
- **Node.js**: v20 or higher
- **Git**

### 2. Deployment
```bash
git clone https://github.com/RamonRiosJr/humanos.foundation.git
cd humanos.foundation
npm install
```

### 3. Launching the Advocacy Kernel
Start the local Vite development server to test the UI or prepare for Enterprise Demonstrations:

```bash
npm run dev
```

> **Access Portal**: [http://localhost:7200](http://localhost:7200)

---

## 🔒 Security & FTC HBNR BAA Exemption

We believe **Privacy is a request, but Sovereignty is mathematics.** 

By utilizing strict Edge-First Encryption on the Machine Layer, Aura hOS operates distinctly under the **FTC Health Breach Notification Rule (HBNR)** as a Personal Health Record. Although this repository strictly handles Human Operations, we enforce the same Zero-Trust standard:

- **Ethical Integrity:** Contact and Waitlist nodes strictly utilize our dedicated Odoo CRM. We do not sell analytics.
- **Zero Third-Party Trackers**: We have purged all unauthorized Google/Meta marketing tracking scopes. 
- **Privacy Handshake**: Optional telemetry (PostHog) is loaded dynamically and strictly respects Edge rendering constraints.

For more information on how we bypass FDA SaMD and HIPAA BAA traps, please see our [Zero-Knowledge Whitepaper](/whitepaper).

---

## 🤝 The Contributor's Path

We are scaling an enterprise-grade contributor network to protect the $3.0M Enterprise Capitalization.

- **Data Scientists/Engineers**: Help us harden the Zero-Knowledge architecture and optimize the Supabase edge vectors on our core product.
- **Clinicians**: Validate our UX logic against "Root-Cause" workflows to optimize our B2B integration metrics.
- **Advocates**: Help us scale the 501(c)(3) pipeline by driving awareness to our structural narrative.

1. Review the [Code of Conduct](CODE_OF_CONDUCT.md).
2. Read the [Contributor Guidelines](CONTRIBUTING.md).
3. Check the [Project Board](https://github.com/RamonRiosJr/humanos.foundation/projects) for active capitalization tasks.

---

<div align="center">

**Built by patients, for patients.** 
*Data Sovereignty is a Human Right.*

[**Developed by Ramon Luis Rios Jr @ Coqui Cloud Dev Co.**](https://coqui.cloud)

</div>
