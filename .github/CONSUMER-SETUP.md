# Keeping consumer projects updated

Use **Dependabot** in each app that depends on this design system. It will open PRs when you publish new versions (or when the repo changes, if they depend on it via git). No workflow or token is needed in this repo.

## In each consumer repo

Create **`.github/dependabot.yml`**:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

Dependabot will then open PRs for any npm dependency, including `@tonyh-2-eightfold/ef-design-system`, when a new version is available. If the app depends on this repo via a **git** URL (e.g. `"@tonyh-2-eightfold/ef-design-system": "github:owner/ef-design-system"`), Dependabot will still propose updates when this repo gets new commits or tags.

To only watch this package (and not every dependency), you can use a **group** or rely on Dependabot’s default behavior of one PR per update.

## This repo

Just push and tag or release when you want consumers to see an update. No extra setup here.
