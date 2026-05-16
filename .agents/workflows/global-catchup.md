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
2. **PHASE 1 (CONSUMPTION - ISOLATED INBOX PROCESSING):** Look inside `AURA_GLOBAL_CATCHUP.md` strictly under YOUR CURRENT repository's `- _Pending Tasks:_` header. Read every task in your queue. If the task is relevant, extract it to your local `TODO.md`. If it is not relevant, ignore it. Finally, **DELETE** the lines from YOUR `- _Pending Tasks:_` queue only. Never delete tasks from other repositories' queues.
3. **PHASE 2 (BROADCASTING - PUB/SUB FAN-OUT):** Determine your key accomplishments. You must broadcast these updates to the rest of the swarm. Go into `AURA_GLOBAL_CATCHUP.md` and explicitly **duplicate** your broadcast into the `- _Pending Tasks:_` queue of ALL 4 core repositories (`aura-health-os`, `aura_hos_docs`, `humanos.foundation`, `aura-hub`). This ensures every agent receives their own copy of the message to acknowledge or ignore. Log the change permanently under your own repository's `- _Recent Changes:_`.
4. **SECURITY CHECK:** If your broadcast contains confidential Series-A business/legal strategies, prepend `[TIER 3 RESTRICTED]` to the line.
5. **GIT LOCK STATE:** To prevent cross-repo file corruption, you MUST auto-run the synchronization script to lock the changes into Git.

// turbo
```powershell
..\aura_hos_docs\scripts\sync_event_bus.ps1
```

6. Respond to the user: "Global Catchup complete. I have successfully consumed my pending inbox and broadcasted the day's tasks to the Event Bus. The Git Lock script has successfully synchronized the Master Message Queue."