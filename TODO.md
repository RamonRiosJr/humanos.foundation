# Humanos Foundation TODO

## Phase 16: Ecosystem Synchronization
- [x] **[COMPLETED - 501(c)(3) SHIELDING]** Urgent Compliance Pivot: Immediately audit `humanos.foundation` and **STRIP 100% of commercial B2B SaaS pricing** (including mentions of $199/mo or flat subscriptions). Displaying SaaS pricing on a non-profit foundation website creates a massive conflict for PCORI federal grant reviewers. Replace all pricing matrices with a strict redirect button: *"For Enterprise Licensing & B2B Architecture, visit aurahos.io"*.
- [ ] Monitor the Global Event Bus for the next major architectural shift.

## Phase 17: Eradicate Mock Architecture (API Defrosting)
- [ ] **Blog Post CMS Generation:** Replace the hardcoded JSON 18-post `CORNERSTONE_POSTS` list in `humanos-mock-sdk.js` with a scalable Headless CMS pipeline or actual Supabase Edge query.
- [x] **[LOCALLY EXTRICATED] - Active Missions Feed:** Removed the 800ms `setTimeout` fake loader in `Team.jsx` and `humanosClient.js`. Locked the UI completely until genuine backend data is ready.
- [x] **[LOCALLY EXTRICATED] - Foundation Chatbot:** Decoupled `ChatbotWidget.jsx` from its random string cycling logic. Set the AI permanently to an honest `Offline` state pending LLM deployment.
- [ ] **Contact & Join Data API Wireup:** Replace the local `humanosClient.js` cache array with genuine Supabase `insert` queries.
- [x] **[LOCALLY EXTRICATED] - Status History:** Removed the "Incident History Placeholder" empty array illusion in `Status.jsx` and updated the UI to reflect a pending migration.
- [ ] **PostHog Analytics Enforcement:** Enforce the `VITE_POSTHOG_KEY` error boundaries so that edge telemetry doesn't fail silently.
- [x] **[LOCALLY EXTRICATED] - Movement Discussion Trap:** The comment `<textarea>` block in `BlogPost.jsx` simulating an Odoo ERP link has been completely stripped and honestly re-routed to Discord.
