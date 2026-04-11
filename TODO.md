# Humanos Foundation TODO

## Phase 17: Eradicate Mock Architecture (API Defrosting)
- [ ] **Blog Post CMS Generation:** Replace the hardcoded JSON 18-post `CORNERSTONE_POSTS` list in `humanos-mock-sdk.js` with a scalable Headless CMS pipeline or actual Supabase Edge query.
- [x] **[LOCALLY EXTRICATED] - Active Missions Feed:** Removed the 800ms `setTimeout` fake loader in `Team.jsx` and `humanosClient.js`. Locked the UI completely until genuine backend data is ready.
- [x] **[LOCALLY EXTRICATED] - Foundation Chatbot:** Decoupled `ChatbotWidget.jsx` from its random string cycling logic. Set the AI permanently to an honest `Offline` state pending LLM deployment.
- [ ] **Contact & Join Data API Wireup:** Replace the local `humanosClient.js` cache array with genuine Supabase `insert` queries.
- [x] **[LOCALLY EXTRICATED] - Status History:** Removed the "Incident History Placeholder" empty array illusion in `Status.jsx` and updated the UI to reflect a pending migration.
- [ ] **PostHog Analytics Enforcement:** Enforce the `VITE_POSTHOG_KEY` error boundaries so that edge telemetry doesn't fail silently.
- [x] **[LOCALLY EXTRICATED] - Movement Discussion Trap:** The comment `<textarea>` block in `BlogPost.jsx` simulating an Odoo ERP link has been completely stripped and honestly re-routed to Discord.
