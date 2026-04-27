---
name: story-writer
description: Generates spec-level user stories with numbered workflow steps, acceptance criteria, and per-story UI breakdowns for any software domain, based on an approved domain doc and market research brief. Use this skill whenever the user wants to define what the system should do, mentions user stories, acceptance criteria, product backlog, MVP scope, or feature list. Always trigger after domain-researcher produces an approved domain doc and market research brief. Never write stories without both an approved domain doc and a completed market research brief -- always check forger first.
---

# Story Writer

Generates a prioritised set of spec-level user stories from the approved domain doc and market research brief, organised by persona and workflow. Stories are deep, not wide: fewer stories with full workflow breakdowns rather than a large backlog of shallow tickets.

## Pre-conditions

Before writing stories, confirm via forger:
- Domain doc is approved
- Market research brief is complete (from domain-researcher)
- Personas are defined
- Methodology / domain workflows are confirmed

If any of these are missing, stop and tell the user which inputs are needed and which upstream skill to run first.

---

## Deriving Workflows

Do NOT use a hardcoded list of workflows. Instead, derive the workflow categories from:
1. The approved domain doc (its confirmed methodology, personas, and scope)
2. The market research brief (competitor feature patterns, common workflows in the domain)
3. Any screen designs or architecture docs already approved in forger

For each workflow category you derive, explain in one sentence why it was included and which source (domain doc section, research brief finding, or competitor pattern) informed it.

---

## Story Structure

Every story follows this spec-level format:

```
ID: [WORKFLOW-PREFIX]-[NUMBER] (e.g. GOAL-001, REVIEW-003)

As a [persona]
I want to [action]
So that [business value]

Workflow Breakdown:
  1. [Step the user takes — what they see on screen]
  2. [Next step — what they can configure or select]
  3. [Continue until the workflow is complete]
  ...

UI Details:
  - Screen: [which screen or view this occurs on]
  - Visible to: [which personas/roles can see this]
  - Key fields/columns: [list the data fields, table columns, or form inputs]
  - Filters/sorting: [available filters, sort options, or search capabilities]
  - Configurable options: [what admins or users can customise]

Acceptance Criteria:
  - [ ] [Criterion 1 — specific, testable]
  - [ ] [Criterion 2]
  - [ ] [Criterion 3]
  - [ ] [Additional criteria as needed]

Research Citation: [If this story's design is informed by a specific competitor
  or product pattern from the market research brief, cite it here. e.g.
  "Inspired by Lattice's cascading goal tree view — see Research Brief section 3.2"]

Priority: MVP / Phase 2 / Phase 3
Depends on: [story IDs if any]
```

---

## Story Count Guidelines

Aim for depth over breadth. Each story should be spec-level with a full workflow breakdown, not a one-liner.

| Company Size       | Expected MVP Story Count |
|--------------------|--------------------------|
| < 500 employees    | 8-14 stories             |
| 500-5000 employees | 12-20 stories            |
| 5000+ employees    | 18-28 stories            |

If you find yourself exceeding the upper bound, you are likely writing stories that are too granular. Combine related actions into a single story with a longer workflow breakdown.

---

## Output Format

Write the story backlog to `docs/user-stories.md` and also generate an interactive HTML viewer at `designs/screens/user-stories.html` (see HTML Viewer Generation below).

Organise the markdown output into three sections:
- Section 1 -- MVP Stories
- Section 2 -- Phase 2 Stories
- Section 3 -- Phase 3 / Backlog

### Presentation Rules

1. Present stories inline in chat. Do not just output file paths -- show the full content so the user can review without switching context.
2. Lead with a summary table: ID, persona, one-line description, priority, research citation (if any).
3. Then present full stories grouped by workflow category.
4. After presenting all stories, confirm the file was written to `docs/user-stories.md`.

---

## HTML Viewer & Preview

After writing `docs/user-stories.md`, generate a JSON data file and copy the static HTML viewer for the Preview panel:

1. Write `designs/screens/user-stories.json` containing the story data (see JSON schema below)
2. Copy `.claude/skills/story-writer/story-template.html` to `designs/screens/user-stories.html` — do NOT modify the HTML file in any way
3. Show it in Preview:
   - `preview_start("prototype-server")`
   - `preview_eval(serverId, "window.location.href = '/user-stories.html'")`
   - `preview_screenshot(serverId)`

### JSON Data Schema (`user-stories.json`)

```json
{
  "projectMeta": {
    "name": "Project Name",
    "totalStories": 16,
    "mvpCount": 10,
    "phase2Count": 4,
    "phase3Count": 2,
    "lastUpdated": "YYYY-MM-DD"
  },
  "stories": [
    {
      "id": "WORKFLOW-001",
      "persona": "Role",
      "title": "Short title",
      "asA": "Role",
      "iWantTo": "action",
      "soThat": "business value",
      "workflow": "Workflow Category",
      "workflowBreakdown": ["Step 1", "Step 2"],
      "uiDetails": {
        "screen": "",
        "visibleTo": "",
        "keyFields": "",
        "filters": "",
        "configurableOptions": ""
      },
      "acceptanceCriteria": ["Criterion 1", "Criterion 2"],
      "researchCitation": null,
      "priority": "MVP",
      "dependsOn": []
    }
  ]
}
```

---

## Cross-cutting Rules

### Incremental Delivery
Stories in MVP must form a usable end-to-end slice. Phase 2 adds breadth and configurability. Phase 3 covers advanced, optional, or admin-heavy features. Every MVP story must be independently demoable.

### Research Awareness
When the market research brief identifies a strong pattern across 3+ competitors for a given workflow, the corresponding story should adopt that pattern unless the domain doc explicitly calls for a different approach. Cite the research brief section in the story's Research Citation field.

### Enterprise Depth
Every story must include the Workflow Breakdown and UI Details sections. A story without these sections is incomplete. The goal is that a designer or engineer reading a single story has enough context to build a screen without asking follow-up questions.

### No Emoji
Do not use emoji in any output written to files or presented in chat. Use plain text markers (e.g. `- [ ]` for checkboxes, `--` for dashes).

---

## Interactive Delivery

Use `AskUserQuestion` for all decision points:

**Workflow selection** (after presenting derived workflows from domain doc):
- Multi-select: list each workflow as an option with description (e.g., "Review Cycles — covers cycle setup, self-assessment, manager review, completion tracking")
- The user picks which workflows are in scope for MVP vs later phases

**Story batch review** (after presenting each batch of stories):
- Single-select: "Approve this batch" / "Request changes to this batch" / "Skip to next batch"

**Priority assignment** (for borderline stories):
- Single-select: "MVP (must have for v1)" / "Phase 2 (important but not blocking)" / "Phase 3 (nice to have)"

Never present a checklist as markdown `- [ ]` items — always use `AskUserQuestion` with `multiSelect: true`.

---

## After Writing Stories

1. Write the full backlog to `docs/user-stories.md`
2. Write `designs/screens/user-stories.json` and copy the unmodified `story-template.html` to `designs/screens/user-stories.html`
3. Open the HTML viewer in the Preview panel (see Preview in Chat)
4. Present the summary table and full stories inline in chat
5. Hand off to forger for approval
6. After approval, update forger with approved MVP stories and story count
7. Notify the user that react-ux-designer can use the approved stories as input for UI prototyping
