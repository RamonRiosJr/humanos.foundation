---
description: HOS_SYNC Documentation and Workflow. This file manages the synchronization of all core documents, audits, and business plans between session starts and shutdowns.
---

# HOS_SYNC: Session Synchronization Protocol

This protocol ensures that all strategic documentation and audit findings are synchronized across the repository every time a session starts or concludes.

## 🔄 Startup Workflow
1. **Repository Pull:** Ensure the latest changes from the remote repository are fetched and merged.
2. **Task Alignment:** Read the `HOS_ACTION_PLAN.md` to identify the current priority for the day.
3. **Audit State Check:** Verify the latest reports in `audit_reports/` to ensure no regression in "ruthless" standards.
4. **Environment Check:** Confirm that the `.agents/workflows` and folder structure (`Aura-hos`, `humanos.foundation`) are intact.

## 💾 Shutdown Workflow
1. **Final Audit:** Run the `/ruthless-audit` workflow on any modified documents to ensure compliance before commit.
2. **Action Plan Update:** Mark completed actions in `HOS_ACTION_PLAN.md`.
3. **Documentation Freeze:** Ensure all scratch files or temporary logs are moved to archives or deleted.
4. **Boundary Enforcement:** Verify that NO legal, compliance, or heavy business documentation is being synced, copied, or pushed back into the `aura-health-os` engineering repository. The software repo is strictly for codebase changes and basic `README` updates. All operational files must stay contained in `aura_hos_docs`.
5. **Repository Push:** Stage, commit, and push all changes with clear, strategic commit messages.

## 🛠️ Sync Commands
- **Start Session:** `git pull ; read HOS_ACTION_PLAN.md`
- **End Session:** `git add . ; git commit -m "Strategic update: Phase X complete" ; git push`
