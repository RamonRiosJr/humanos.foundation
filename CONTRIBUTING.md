<<<<<<< HEAD
# Contributing to humanos.foundation
=======
# Contributing to gh-repo-bootstrap
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

Thank you for your interest in contributing! This document provides guidelines to help you contribute effectively.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Message Convention](#commit-message-convention)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Script Standards](#script-standards)
- [Testing](#testing)

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

---

## Getting Started

### Prerequisites

- **PowerShell 7+** — [Install](https://github.com/PowerShell/PowerShell/releases)
- **curl** and **jq** (for Bash scripts)
- A GitHub Personal Access Token with `repo` and `project` scopes

### Fork and Clone

```bash
<<<<<<< HEAD
git clone https://github.com/YOUR_FORK/humanos.foundation.git
cd humanos.foundation
=======
git clone https://github.com/YOUR_FORK/gh-repo-bootstrap.git
cd gh-repo-bootstrap
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
```

---

## Development Workflow

1. **Create a feature branch** from `main`:

   ```bash
   git checkout -b feat/my-improvement
   ```

2. **Make your changes** following the [Script Standards](#script-standards) below.

3. **Test your changes** (see [Testing](#testing)).

4. **Commit** using [Conventional Commits](#commit-message-convention).

5. **Push** and open a Pull Request using the provided template.

---

## Commit Message Convention

We use [Conventional Commits](https://conventionalcommits.org):

```
<type>(<scope>): <short summary>

[optional body]
[optional footer]
```

**Types:**

<<<<<<< HEAD
| Type       | Description                        |
| ---------- | ---------------------------------- |
| `feat`     | New feature                        |
| `fix`      | Bug fix                            |
| `chore`    | Maintenance, no user-facing change |
| `docs`     | Documentation only                 |
| `ci`       | CI/CD pipeline changes             |
| `test`     | Adding or fixing tests             |
| `refactor` | Code restructuring                 |
| `security` | Security fix                       |
=======
| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `chore` | Maintenance, no user-facing change |
| `docs` | Documentation only |
| `ci` | CI/CD pipeline changes |
| `test` | Adding or fixing tests |
| `refactor` | Code restructuring |
| `security` | Security fix |
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

**Examples:**

```
feat(labels): add healthcare-specific label taxonomy
fix(board): handle pagination for repos with >100 items
chore(deps): update actions/checkout to v4
docs(readme): clarify PAT scope requirements
```

---

## Pull Request Guidelines

- **One concern per PR** — keep PRs focused and reviewable
- **Fill out the PR template** completely
- **Link related issues** using `Closes #<issue-number>`
- **All checks must pass** before merge
- **Squash merge** preferred for clean history

---

## Script Standards

All scripts in this repository must adhere to the following standards:

<<<<<<< HEAD
### PowerShell (\*.ps1)
=======
### PowerShell (*.ps1)
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

```powershell
#Requires -Version 7
```

- **Zero external dependencies** — use only `Invoke-RestMethod` for API calls
- **Never use `$PID`** as a variable name — it is reserved by PowerShell. Use `$PROJ_ID`, `$REPO_ID`, etc.
- **Never use backtick interpolation in GraphQL strings** — use string concatenation:

  ```powershell
  # ❌ Wrong — fragile with double-quoted field names
  $mut = "mutation { createProjectV2(input: { title: `"$title`" }) { ... } }"
<<<<<<< HEAD

=======
  
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
  # ✅ Correct — safe and explicit
  $mut = 'mutation { createProjectV2(input: { title: "' + $title + '" }) { ... } }'
  ```

- **Credentials via env vars OR `Read-Host -AsSecureString`**
- **Idempotent** — check before create, skip if exists
- **Summary at end** — always print `✅ Created`, `⏭️ Skipped`, `❌ Errors` counts

<<<<<<< HEAD
### Bash (\*.sh)
=======
### Bash (*.sh)
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

```bash
#!/usr/bin/env bash
set -euo pipefail
```

- **Check for `curl` and `jq`** at startup — exit with clear error if missing
- **Same idempotency requirement** as PowerShell
- **Accept credentials via env vars** (`GITHUB_TOKEN`, `GITHUB_OWNER`)

---

## Testing

### Dry-run your scripts

Before pointing scripts at a real repository, test against a throwaway repo:

```powershell
$env:GITHUB_TOKEN  = "ghp_yourtoken"
$env:GITHUB_OWNER  = "your-username"
$env:REPO_NAME     = "test-bootstrap-$(Get-Random)"

# Create and immediately clean up
pwsh scripts/01_create_repo/create_repo.ps1
```

### Validate workflow YAML

```bash
# Install actionlint
brew install actionlint  # macOS
# or: go install github.com/rhysd/actionlint/cmd/actionlint@latest

actionlint templates/ci/*.yml
```

### PowerShell script analysis

```powershell
Install-Module PSScriptAnalyzer -Scope CurrentUser -Force
Invoke-ScriptAnalyzer -Path scripts/ -Recurse
```

---

## Releasing

Maintainers tag releases using semantic versioning:

```bash
git tag -a v1.1.0 -m "release: v1.1.0"
git push origin v1.1.0
```

---

<<<<<<< HEAD
_Thank you for making humanos.foundation better for everyone!_ 🚀
=======
*Thank you for making gh-repo-bootstrap better for everyone!* 🚀
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

---

**GitHub:** [github.com/RamonRiosJr](https://github.com/RamonRiosJr) &nbsp;|&nbsp;
**LinkedIn:** [linkedin.com/in/ramon-rios-a8ba3035](https://www.linkedin.com/in/ramon-rios-a8ba3035) &nbsp;|&nbsp;
**Blog:** [ramonrios.net](https://ramonrios.net) &nbsp;|&nbsp;
**Coqui Cloud Dev Co.:** [coqui.cloud](https://coqui.cloud)

