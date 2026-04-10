---
description: Automatically scans the other 3 GitHub repositories for recent commits and updates the Business Plan / Architecture docs accordingly.
---

# Cross-Repo Intelligence Automation

**Use Case:** When the Architect says "Sync across repos" or `/cross-repo-sync`, the AI should not just update the Global Catchup file, but actually scan the physical code commits executed in the other repositories (like the React Application) and use that data to intelligently rewrite the Business Plan and Architecture documentation.

## Execution Steps

1. Run the `run_command` tool to pull the recent Git commit history from the other repositories on this machine.
   
```powershell
$repos = @("..\aura-health-os", "..\humanos.foundation", "..\Aura-hub")
$outText = ""
foreach ($repo in $repos) {
    if (Test-Path $repo) {
        $outText += "`n========== Changes in $repo ==========`n"
        Push-Location $repo
        $outText += (git log --since="2 days ago" --oneline --no-decorate) -join "`n"
        Pop-Location
    }
}
$outText > "\tmp\repo_logs.txt"
```

2. Read `\tmp\repo_logs.txt` using the `view_file` tool to understand exactly what the engineering agents built.
3. Audit the current `aura_hos_docs` Business Plan and Architecture files to see if they are outdated based on the new engineering commits (e.g. if the App added "Two-Factor Clinic ID Routing", ensure the Business Model reflects this).
4. Make the necessary surgical edits using `multi_replace_file_content`.
5. Update `docs/AURA_GLOBAL_CATCHUP.md` with a summary of these dynamic changes.
6. Execute the standard `/global-catchup` power-sync to distribute the updated `.md` files to all other repos.
