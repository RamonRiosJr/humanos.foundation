---
description: Activates the global synchronization protocol to log and distribute changes across all 4 Aura ecosystem repositories simultaneously.
---

# Global Catchup & Multi-Repo Sync Workflow

**Use Case:** When the Architect types `/global-catchup`, they want to take a snapshot of what was built today, log the work strictly into `AURA_GLOBAL_CATCHUP.md` (which tracks 4 distinct repos), and automatically distribute this new file to the other 3 repos so all AI agents across all workspaces have the exact same context tomorrow morning.

## Prerequisites

- Read `docs/AURA_GLOBAL_CATCHUP.md` to see the current master state of the 4 repositories.
- These repos are hardcoded to exist in the `C:\Users\localadmin\OneDrive - Coqui Cloud Dev CO\Documents\GitHub\` root directory.

## Execution Steps

1. **AUTONOMOUS REVIEW:** You must autonomously deduce what was accomplished today by consulting your conversation history, recent conversation summaries, and recent file changes. **DO NOT** ask the Architect what was accomplished; deduce the summary yourself. 
2. Intelligently rewrite/append your findings under the correct `Repository 1, 2, 3, or 4` section in `docs/AURA_GLOBAL_CATCHUP.md` using the `replace_file_content` tool.
3. Update the `Last Synced:` timestamp inside the markdown file for the repos that were active.
4. Auto-run the distribution sync to force-copy this file into ALL ecosystem repositories so the other agents have identical context for tomorrow.

// turbo-all 5. Run the Power-Sync command to physically copy the file across the user's hard drive:

```powershell
Copy-Item -Path "docs\AURA_GLOBAL_CATCHUP.md" -Destination "..\aura_hos_docs\Aura-hos\docs\AURA_GLOBAL_CATCHUP.md" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "docs\AURA_GLOBAL_CATCHUP.md" -Destination "..\humanos.foundation\docs\AURA_GLOBAL_CATCHUP.md" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "docs\AURA_GLOBAL_CATCHUP.md" -Destination "..\AurahOS_Docs_Portal_&_Tech_Support_AuraBot\docs\AURA_GLOBAL_CATCHUP.md" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "docs\AURA_GLOBAL_CATCHUP.md" -Destination "..\odoo_rest_api_coquicloud\docs\AURA_GLOBAL_CATCHUP.md" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "docs\AURA_GLOBAL_CATCHUP.md" -Destination "..\aura-health-os\docs\AURA_GLOBAL_CATCHUP.md" -Force -ErrorAction SilentlyContinue
```

_(Note: If the `docs` folder doesn't exist in one of the repos yet, the script might fail, or the AI should handle directory creation if necessary)._

6. Respond to the user: "Global Catchup complete. `AURA_GLOBAL_CATCHUP.md` has been updated and physically injected into the other repositories. The other AI windows are now primed with the latest sync data."
