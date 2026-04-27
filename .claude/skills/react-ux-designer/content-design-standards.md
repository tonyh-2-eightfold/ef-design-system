# Content Design Standards

Eightfold writing voice, tone, grammar rules, and UI copy patterns. Apply these standards to every label, heading, placeholder, error message, empty state, tooltip, and CTA rendered in a React screen.

---

## 1. Voice and Tone

### Voice (constant)
Eightfold's voice is **clear, direct, and human**. It respects the user's intelligence without being technical for its own sake.

| Attribute | What it means in practice |
|-----------|--------------------------|
| Clear | Use the simplest word that carries the meaning. No jargon unless the user's role demands it. |
| Direct | Lead with the action or outcome. Don't bury the key information. |
| Human | Write like a knowledgeable colleague, not a manual or a chatbot. |
| Confident | State things as facts, not suggestions. Avoid "you may want to…" |
| Respectful | Never condescending, never alarmist. Trust the user to handle information. |

### Tone (context-sensitive)
Tone shifts with the situation while voice stays constant.

| Situation | Tone | Example |
|-----------|------|---------|
| Onboarding / empty states | Warm, encouraging | "You haven't added any skills yet. Start building your profile." |
| Success states | Brief, celebratory | "Profile updated." |
| Errors | Calm, actionable | "We couldn't save your changes. Try again or contact support." |
| Destructive actions | Serious, clear | "Deleting this role is permanent and cannot be undone." |
| Data-heavy views (tables, reports) | Neutral, precise | Column headers, data labels — no marketing language |

---

## 2. Grammar and Mechanics

### Capitalization
- **Sentence case everywhere in UI** — headings, labels, CTAs, tooltips, placeholder text, error messages
  - ✅ "Add a new role"
  - ❌ "Add A New Role"
- **Proper nouns** always capitalized: Eightfold, React, JavaScript, Skills Graph
- **Product feature names**: title case only when they are branded features (e.g., "Talent Intelligence", "Career Hub")
- **Navigation items**: sentence case, not title case

### Punctuation
- **Oxford comma** in all lists: "skills, roles, and competencies"
- **No trailing periods** on UI labels, button text, headings, or single-line helper text
- **Periods required** in multi-sentence helper text, tooltips explaining a concept, and instructional copy
- **Em dash (—)** not en dash or hyphen for ranges in prose
- **No exclamation marks** in product UI — reserved for onboarding celebrations only, and use sparingly
- **Ellipsis (…)** only for truncation or ongoing actions ("Saving…"), never to trail off mid-sentence

### Numbers
- Spell out one through nine; use numerals for 10 and above
- Exception: always use numerals for counts in data UI — "3 skills", "1 match"
- Use K/M suffixes for large numbers in data displays: "1.2K applicants", "23M data points"
- Dates: **always locale-aware** — never hardcode a format. Use `formatDate()` helpers from `@/lib/formatDate` (see below). The displayed format is determined by the user's locale automatically (e.g. "March 5, 2025" for en-US, "5 March 2025" for en-GB, "2025年3月5日" for ja).

| Context | Helper to use | en-US example |
|---------|--------------|---------------|
| Prose, detail views | `formatDate(date)` | "March 5, 2025" |
| Tables, cards | `formatDateShort(date)` | "Mar 5, 2025" |
| Dense data / exports | `formatDateNumeric(date)` | "3/5/2025" |
| With time (timestamps) | `formatDateTime(date)` | "March 5, 2025 at 2:30 PM" |
| Feeds, "last updated" | `formatDateRelative(date)` | "3 days ago" → "Mar 5, 2025" after 30 days |
| Period headers, chart axes | `formatMonthYear(date)` | "March 2025" |

### Contractions
Allowed and encouraged — they make the product feel human:
- ✅ "You haven't completed your profile" 
- ❌ "You have not completed your profile"
Exception: legal or compliance copy — no contractions.

---

## 3. UI Copy Patterns

### Button Labels
- **Verb + noun** for primary actions: "Add skill", "Save changes", "Export report"
- **Verb only** when context is obvious: "Save", "Delete", "Cancel" 
- Never use: "Click here", "Submit", "OK", "Yes/No" — always be specific
- Destructive buttons name the action explicitly: "Delete role", "Remove candidate", not just "Delete"
- Loading state: append "…" to the verb — "Saving…", "Exporting…"

### Headings and Page Titles
- Sentence case
- Describe what the page is, not what to do on it: "Candidate profile" not "Review this candidate"
- Avoid "My" prefix — "My skills" → "Skills", "My profile" → "Profile" (the product is already personalized by auth)

### Labels and Form Fields
- Sentence case
- No trailing colons on labels inside the form component (the component renders them)
- Add colons when label is inline prose before an input: "Filter by: [dropdown]"
- Placeholder text: brief hint, not a repeated label — "e.g. Software Engineer", "Search by name"
- Never use placeholder as the only label — always have a visible label above or beside the field

### Helper / Hint Text
- One sentence below the field, not above
- Sentence case, no period for single sentences, period for multi-sentence
- Explain **why** the field matters when it's not obvious: "Used to match you with relevant roles"

### Error Messages
Follow this three-part structure:
1. **What happened**: "We couldn't save your changes."
2. **Why (if helpful)**: "Your session may have expired."  
3. **What to do**: "Try again, or contact support if the problem continues."

Single-field validation errors are shorter: "Enter a valid email address." (imperative, no "Please")

| Anti-pattern | Better |
|---|---|
| "Error 404" | "We couldn't find that page." |
| "Invalid input" | "Enter a valid email address." |
| "Something went wrong" (alone) | "We couldn't load the data. Refresh the page." |
| "Please enter your name" | "Enter your name." |
| "Username is required" | "Enter a username." |

### Empty States
Three components: illustration/icon + heading + body + optional CTA.

| Element | Rule |
|---------|------|
| Heading | What is missing, not an error: "No skills added yet" |
| Body | Brief explanation + invitation to act: "Add skills to get matched with relevant roles." |
| CTA | If actionable: "Add skills". If readonly: omit CTA. |
| Tone | Encouraging, not apologetic. Never "Unfortunately, there is nothing here." |

### Loading States
- Skeleton screens for content-heavy areas (tables, card grids, profiles)
- Spinner with label for targeted actions: "Loading roles…"
- Never leave a loading state without visual feedback
- Label text: present progressive — "Loading…", "Saving…", "Exporting…"

### Success States
- Inline where possible (near the triggered action, not full-page)
- Toast for background operations: "Skills updated." "Export ready."
- Keep confirmation messages brief — "Saved." is enough after a form save
- Don't repeat what the user just did at length

### Tooltips
- Sentence case, period only if multi-sentence
- Max 2 sentences — if more explanation is needed, use a help article link
- Describe the feature or data, not the interaction: "Skill match score based on JD analysis" not "Hover to see the score"

---

## 4. Accessibility Writing

### Alternative Text
- Informative images: describe the content and function — "Bar chart showing skill gap by department"
- Decorative images: empty alt (`alt=""`) — do not describe purely decorative icons
- Icon buttons: always aria-label on the button, not on the icon — `<button aria-label="Delete skill">`
- Avoid redundant alt: if a caption already describes the image, alt can be empty

### ARIA Labels
- Required on all interactive elements that lack visible text: icon-only buttons, close buttons, toggle switches
- Match the visible label exactly when both exist — don't paraphrase
- `aria-label` takes precedence over `aria-labelledby`; pick one

### Screen Reader Patterns
- Status messages (success/error after async operations): use `role="status"` or `aria-live="polite"`
- Destructive/irreversible alerts: use `role="alert"` (assertive) 
- Dynamic region updates: wrap in `aria-live="polite"` container
- Form errors: use `aria-describedby` to link the error to the field, not just a color change
- Required fields: `aria-required="true"` on the input, "(required)" or asterisk (*) with legend in visible text

### Color and Contrast
- Never convey information by color alone — pair with icon, label, or pattern
- Status indicators must have both color AND text/icon: ✅ "Active" badge (green + label), not just a green dot
- All text must meet WCAG 2.1 AA contrast (4.5:1 for body, 3:1 for large text and UI components)

### Interactive Element Labels
- All focusable elements must have accessible names
- Link text must describe the destination: "View candidate profile" not "click here" or "read more"
- Duplicate link text on a page must be disambiguated: "View profile (Sarah Chen)", not "View profile" ×3

---

## 5. Microcopy Quick Reference

| Context | Pattern | Example |
|---------|---------|---------|
| Confirm dialog title | "[Action] [object]?" | "Delete this role?" |
| Confirm dialog body | Consequence statement | "This will permanently remove the role and all associated data." |
| Cancel action | Always "Cancel" not "No" | — |
| Confirm destructive | Name the destruction | "Delete role" not "Yes, delete" |
| Badge / status label | Sentence case, noun or adj | "Active", "In review", "Expired" |
| Column headers | Sentence case, noun phrase | "Match score", "Last active", "Skills count" |
| Pagination | "1–25 of 312 results" | — |
| Zero-results search | "No results for '[query]'" | "No results for 'data engineer'" |
| Filter chip / active filter | Label + value | "Location: Remote" |
| Date distance | `formatDateRelative(date)` — relative ≤30 days, then short absolute | "3 days ago" → "Mar 5, 2025" |

---

## 6. Anti-patterns to Avoid

| Anti-pattern | Problem | Fix |
|---|---|---|
| "Click here" / "Read more" | Non-descriptive, fails accessibility | Use descriptive link text |
| "Please" on error messages | Feels apologetic, adds noise | Drop "Please", use imperative |
| Title Case For Every Heading | Inconsistent, harder to scan | Sentence case always |
| "Successfully saved!" | Exclamation is unnecessary | "Saved." |
| Truncated labels without tooltip | User can't see full text | Add title or tooltip to truncated text |
| "N/A" in data cells | Ambiguous — not available? not applicable? | Use "—" (em dash) for unknown/missing data |
| "Loading, please wait…" | Verbose | "Loading…" |
| Passive voice in errors | "Changes could not be saved" | Active: "We couldn't save your changes." |
| Abbreviations without definition | "LTI", "ATS", "JD" cold | Spell out on first use in context |
| ALL CAPS for emphasis | Reads as shouting | Use bold or semantic hierarchy |
