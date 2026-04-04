---
description: Activates the global synchronization protocol to log and distribute changes across all 7 Aura ecosystem repositories simultaneously.
---

# Global Catchup & Multi-Repo Sync Workflow

**Use Case:** When the Architect types `/global-catchup`, they want to launch the 2-Phase Living Mailbox Protocol to strictly sync their local tasks with the single-source-of-truth `AURA_GLOBAL_CATCHUP.md` file located inside the `aura_hos_docs` repository.

## Prerequisites

- Read `..\aura_hos_docs\docs\AURA_GLOBAL_CATCHUP.md` to see the current master state of all 7 repositories. (Always use the absolute path or relative path to the master file in `aura_hos_docs`).
- **CRITICAL HARD RULE:** You must NEVER physically copy or clone the `AURA_GLOBAL_CATCHUP.md` file into other repositories. It is a single-source-of-truth Living File.

## Execution Steps

1. **AUTONOMOUS REVIEW:** You must autonomously deduce what was accomplished today by consulting your conversation history, recent conversation summaries, and recent file changes. **DO NOT** ask the Architect what was accomplished.
2. **PHASE 1 (CONSUMPTION - CLEARING THE MAILBOX):** Look inside `AURA_GLOBAL_CATCHUP.md` under your current repository's `- _Recent Changes:_` header. If there are tasks there, securely extract them into your local repository's `TODO.md` file. You must then **DELETE** those lines from `AURA_GLOBAL_CATCHUP.md` to clear your inbox and prevent file bloat.
3. **PHASE 2 (BROADCASTING - SENDING MAIL):** Based on the accomplished work you deduced in Step 1, determine exactly *which* other repositories are affected. Go directly into `AURA_GLOBAL_CATCHUP.md` and insert your updates natively under their specific `- _Recent Changes:_` lists. Update their `Last Synced:` timestamp.
4. **SECURITY CHECK:** If your broadcast contains confidential Series-A business/legal strategies, prepend `[TIER 3 RESTRICTED]` to the line.
5. **GIT LOCK STATE:** To prevent cross-repo file corruption, you MUST auto-run the synchronization script to lock the changes into Git.

// turbo
```powershell
..\aura_hos_docs\scripts\sync_event_bus.ps1
```

6. Respond to the user: "Global Catchup complete. I have successfully consumed my pending inbox and broadcasted the day's tasks to the Event Bus. The Git Lock script has successfully synchronized the Master Message Queue."