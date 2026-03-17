# Workflow setup

## Required setup for workflows that push

Workflows that push to the repo (e.g. **Publish**, or any that create commits/tags on `main`) need extra setup.

## 1. Permissions

The workflow already sets:

```yaml
permissions:
  contents: write
```

so the default `GITHUB_TOKEN` can push. No change needed unless you restrict permissions elsewhere.

## 2. Branch protection on `main`

If the repo has **branch protection** on `main` (required status checks, required reviews, etc.), the workflow run may not be allowed to push. Choose one:

### Option A: Allow this workflow to bypass (simplest)

1. Go to **Settings → Branches → Branch protection rules → Edit** for `main`.
2. Under “Do not allow bypassing the above settings”, **uncheck** it, or add a rule that allows the **GITHUB_TOKEN** from this workflow to bypass required status checks (exact wording depends on your GitHub plan).
3. The workflow can then push using the default `GITHUB_TOKEN`.

### Option B: Use a Personal Access Token (PAT)

1. Create a PAT with **repo** (or **contents: read and write**) scope.
2. In the repo: **Settings → Secrets and variables → Actions**, add a secret (e.g. `PAT_TOKEN`) with the PAT value.
3. In the workflow, use that token for the step that pushes, for example:

   ```yaml
   - name: Checkout
     uses: actions/checkout@v4
     with:
       token: ${{ secrets.PAT_TOKEN }}
   ```

   Use the same token for any later step that pushes (e.g. `git push`). Do not use the default `GITHUB_TOKEN` for those steps if you rely on the PAT to bypass branch protection.

Keep the PAT minimal (e.g. only this repo, only needed scopes) and rotate it if it might be exposed.
