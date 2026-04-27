# Terms List — Approved Eightfold Product Vocabulary

Use the **Approved** form in all UI strings: labels, headings, button text, tooltips, aria-labels, empty states, and notification messages. If a term appears in the **Avoid** column, replace it.

---

## Core Product Terminology

| Approved | Avoid | Notes |
|----------|-------|-------|
| Skills | Competencies, capabilities, abilities (in data model contexts) | "Competencies" only when customer's own framework uses that term |
| Role | Position, job title, opening | Canonical unit in the Eightfold data model |
| Talent | Employee, worker, headcount, resource, FTE | "People" acceptable in informal conversational contexts |
| Candidate | Applicant, prospect | Use for anyone in a hiring flow |
| Talent pool | Pipeline, bench, candidate database | |
| Hiring manager | Requester | Distinguish recruiter vs hiring manager in UI clearly |
| Requisition | Req (data-dense views only), job opening | "Req" abbreviation acceptable in table headers only |
| Career path | Career ladder, career trajectory | |
| Skill match | Fit score, compatibility score | "Match score" acceptable in table column headers |
| Skill gap | Skill deficit, competency gap | |
| Internal mobility | Internal transfers, internal hiring, redeployment | |
| Succession planning | Replacement planning, bench planning | |
| Workforce planning | Headcount planning, staffing planning | |
| Diversity, equity, and inclusion | D&I, DE&I | Spell out; "DEI" acceptable after first use |
| People analytics | HR analytics, workforce analytics | |

---

## UI Interaction Vocabulary

| Approved | Avoid | Notes |
|----------|-------|-------|
| Search | Find, look up, query | |
| Filter | Narrow, refine, sort (when meaning filter) | "Sort" is for ordering only |
| Sort | Order, arrange, filter (when meaning order) | Keep conceptually distinct |
| Save | Submit, confirm, apply (for persistent changes) | "Apply" acceptable for filter application |
| Cancel | Close (in confirmation dialogs), No | "Close" is for panels/modals, "Cancel" for abandoning actions |
| Close | Dismiss, exit | Icon button: aria-label="Close [context name]" |
| Remove | Delete (for non-permanent associations) | "Remove" = item still exists elsewhere |
| Delete | Remove (for permanent destruction) | "Delete" implies irreversible — use only when true |
| Edit | Modify, update, change (in button labels) | "Updated" acceptable in success messages |
| Add | Create, new (adding to a collection) | "New [item]" acceptable for standalone entity creation |
| View | See, open, show (in link/button labels) | |
| Export | Download (when file goes to user), extract | "Download" acceptable when the user receives a file |
| Archive | Deactivate, hide, soft-delete | Reserve for the specific archive action only |
| Invite | Add (when adding external users via email) | |
| Assign | Allocate, give, delegate | |

---

## Status and State Labels

| Approved | Avoid | Notes |
|----------|-------|-------|
| Active | Enabled, live, on | `variant="success"` |
| Inactive | Disabled, off | |
| Draft | In progress, incomplete, unsaved | `variant="secondary"` |
| In review | Pending review, under review | `variant="warning"` |
| Approved | Accepted, confirmed, validated | `variant="success"` |
| Rejected | Declined, denied, not approved | "Declined" when candidate chose; `variant="destructive"` |
| Completed | Done, finished, closed (for cycles) | `variant="success"` |
| Expired | Ended, closed (time-based) | `variant="destructive"` |
| Matched | Qualified, compatible, fit | Eightfold-specific AI alignment term; `variant="success"` |
| Shortlisted | Starred, favorited, selected | `variant="primary"` |
| Hired | Placed, converted | `variant="success"` |
| Not a fit | Failed, disqualified | Empathetic language for candidate-facing views |
| Overdue | Late, past due | `variant="destructive"` |
| At risk | Flagged, problematic | `variant="warning"` |

---

## People and Persona Labels

| Approved | Avoid | Notes |
|----------|-------|-------|
| Employee | Staff, associate, team member (system contexts) | "Team member" acceptable in informal copy |
| Manager | Supervisor, lead (as role label) | |
| Administrator | Admin (acceptable abbreviation), superuser | |
| Recruiter | TA, talent acquisition (in UI labels) | "TA" acceptable in table headers only |
| Hiring manager | HM (in UI labels) | "HM" acceptable in table headers only |
| HR business partner | HRBP (in UI labels) | "HRBP" acceptable in table headers only |

---

## Data and Metric Labels

| Approved | Avoid | Notes |
|----------|-------|-------|
| Skills count | Number of skills, skill count | |
| Match score | Fit score, compatibility percentage, match % | |
| Profile completeness | Profile strength, profile fill rate | |
| Last active | Last seen, last login, last online | |
| Date added | Created on, added on | |
| Updated | Modified, last edited | |
| Total | Sum, count, all (in aggregate labels) | |

---

## Feature Names (Title Case — branded)

These are branded — always title case, always these exact spellings:

| Canonical | Do Not Use |
|-----------|------------|
| Talent Intelligence | talent intelligence (lowercase), AI matching |
| Career Hub | career hub, career portal, career site |
| Skills Graph | skills graph, skills network, skill map |
| Talent Pool | talent pool (lowercase), candidate pool |
| People Analytics | people analytics (lowercase), HR analytics |
| Workforce Planning | workforce planning (lowercase), headcount planning |
| Internal Mobility | internal mobility (lowercase), internal career |
| Succession Planning | succession planning (lowercase) |

---

## Technical Terms (Plain Language in UI)

| Technical term | Plain language for user-facing copy | When to use technical term |
|----------------|-------------------------------------|---------------------------|
| Algorithm / AI model | "Eightfold's matching technology" or just "AI" | Admin/settings docs only |
| Data ingestion | "Importing your data" | Developer/admin docs only |
| API integration | "Connect [system name]" | Settings page; technical docs |
| SSO | "Single sign-on" / "Sign in with [provider]" | "SSO" acceptable in IT admin settings |
| ATS | "Your applicant tracking system" or name it | Spell out for non-technical users |
| HRIS | "Your HR system" or name it | Spell out for non-technical users |
| JD | "Job description" | "JD" acceptable in table headers only |

---

## Inclusive Language

| Avoid | Approved | Notes |
|-------|----------|-------|
| Blacklist | Block list | |
| Whitelist | Allow list | |
| Master / slave | Primary / secondary | |
| Manpower | Workforce, talent | |
| Guys (mixed group) | Team, everyone, folks | |
| He/she (generic) | They / their | Singular they is standard |
| Handicapped | Disabled, person with a disability | |
| Minority | Underrepresented group | |

---

## Number and Date Formats

| Context | Format | Example |
|---------|--------|---------|
| Counts under 10 in prose | Spelled out | "three candidates" |
| Counts 10+ | Numerals | "24 candidates" |
| Counts in data UI | Always numerals | "3 skills", "1 role" |
| Large numbers | K/M suffix | "1.2K", "23M" |
| Percentages | Numeral + % | "87%" |
| Date in prose | Month D, YYYY | "March 5, 2025" |
| Date in table | MM/DD/YYYY | "03/05/2025" |
| Relative (under 30 days) | "X days ago", "Today", "Yesterday" | |
| Relative (30+ days) | Full date | "Jan 15, 2024" |
| Duration | "X hours" / "X days" | No abbreviations in prose |
| Missing/unknown data | — (em dash) | Never "N/A" |
