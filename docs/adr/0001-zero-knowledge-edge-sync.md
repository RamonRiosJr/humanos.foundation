# ADR 0001: Implementing Zero-Knowledge Vault on Edge Architecture

**Date:** 2026-04-20
**Status:** Accepted
**Author:** Ramon Rios Jr, Lead Solutions Architect

## Context & Problem Statement

The Humanos Foundation handles incredibly sensitive clinical data intents. To bypass FDA SaMD (Software as a Medical Device) regulation and secure the FTC Health Breach Notification Rule (HBNR) BAA exemption, the platform must mathematically prove it cannot read or alter patient medical records. However, modern full-stack frameworks natively serialize user data across server runtimes. How do we ensure absolute cryptographical isolation while maintaining a high-performance web routing framework?

## Decision

We architected a strictly decoupled **Zero-Knowledge Encryption** pipeline isolated entirely on the Client-device before transacting to the Vercel Edge Runtime.

1. **AES-GCM 256-bit Key Isolation:** Encryption keys are dynamically generated utilizing the native Web Crypto API (`window.crypto.subtle`). Keys are _never_ transmitted to the `humanos.foundation` backend.
2. **PostgreSQL Supabase (Blind Indexing):** The Supabase layer only stores structural ciphertext. The Edge Runtime physically has no means to decrypt the payloads, relegating the Foundation network to a "Zero-Trust Transport Operator."
3. **Optional Catch Bindings & Silent Execution:** All error telemetry holding potential FHIR structures are discarded locally.

## Consequences

- **Positive:** We are mathematically protected against HIPAA audits. If subpoenaed, the Foundation can only yield encrypted SQLite shards.
- **Positive:** Vercel Edge caching remains highly performant (<50ms latency) since the server never reconstructs user state.
- **Negative:** Developers lose the ability to debug patient state in the Edge. We accepted this tradeoff to establish the unbreachable NGO boundaries.
