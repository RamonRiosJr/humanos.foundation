<div align="center">

# Humanos Foundation

**The Advocacy Engine for Health Data Sovereignty**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple.svg)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Visit humanos.foundation](https://humanos.foundation) · [Read the Manifesto](https://humanos.foundation/manifesto) · [Join the Movement](https://humanos.foundation/join)

</div>

---

## 🌍 The Movement

The Humanos Foundation is the public-facing advocacy entity for the **hOS (Human Operating System)** movement. Our mission is to fundamentally reform how health data is managed, returning sovereignty to the patient through local-first computing, zero-knowledge architecture, and radical transparency.

This repository powers our advocacy platform. It serves as both a high-fidelity digital presence for the movement and a community-driven open-source project.

## 🏗️ Architecture

This project is built for performance, modularity, and security, utilizing an enterprise-grade stack:

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized builds
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Glassmorphism UX design systems
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Tailwind)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data SDK**: Local-First `humanosClient` (Zero external tracking, sovereign by design)
- **Routing**: [React Router v6](https://reactrouter.com/)

---

## 🚀 Local Development

We welcome contributors from all backgrounds—developers, advocates, clinicians, and patients. Here is how to run the environment locally:

### 1. Prerequisites

- **Node.js**: v20+ recommended
- **Git**

### 2. Quick Start

Clone the repository and install dependencies:

```bash
git clone https://github.com/RamonRiosJr/humanos.foundation.git
cd humanos.foundation
npm install
```

### 3. Launching the Environment

You can start the environment using our custom CLI launcher, which provides an integrated development experience:

**Windows**:

```cmd
humanos-dev-launcher.bat
```

**Cross-Platform (CLI)**:

```bash
npm run dev
```

The application will be running locally at `http://localhost:5173`.

---

## 🔒 Security & Privacy (Sovereign-First)

Unlike traditional platforms, this advocacy site is built with **Privacy by Design**:

- **Zero Third-Party Tracking**: We have stripped out all unauthorized external analytics tokens.
- **Local-First Mock SDK**: For local development, form submissions (Join, Contact) are stored securely in browser `localStorage`. No data is exfiltrated to external CDNs or databases unexpectedly without configured backend environments.

For more details on how to report security vulnerabilities, read our [SECURITY.md](SECURITY.md).

---

## 🤝 Contributing

We rely on the community to build the future of patient data rights. Whether it's submitting PRs, raising issues, or writing for our blog, your contribution matters.

1. Review the [Code of Conduct](CODE_OF_CONDUCT.md).
2. Read the [Contributor Guidelines](CONTRIBUTING.md).
3. Check our [Project Board](https://github.com/users/RamonRiosJr/projects/YOUR_PROJECT_ID) for active tasks (P1, P2 priorities).
4. Fork the repository, create a branch, and submit a Pull Request!

---

## ⚖️ License

This project operates under the **MIT License**. See [LICENSE](LICENSE) for the full terms.

<div align="center">
Built by patients, for patients. <br>
<strong>Data Sovereignty is a Human Right.</strong>
</div>
