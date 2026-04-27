# Content Design Standards — Frontend Reference

Eightfold writing voice, grammar, UI copy patterns, and accessibility writing requirements. Apply to every string rendered in a React component: labels, headings, placeholders, error messages, empty states, tooltips, aria-labels, button text, and status badges.

---

## 1. Voice and Tone

### Voice (constant across all UI)

| Attribute | Implementation rule |
|-----------|-------------------|
| Clear | Simplest word that carries the meaning. No jargon unless the user's role requires it. |
| Direct | Action/outcome first. No preamble. |
| Human | Knowledgeable colleague tone, not a system message. |
| Confident | State facts. Avoid "you may want to…", "it seems like…" |
| Respectful | Never condescending. No alarmist language. Trust the user. |

### Tone (shift by context)

| Situation | Tone | Copy example |
|-----------|------|-------------|
| Empty states / onboarding | Warm, encouraging | "You haven't added any skills yet. Start building your profile." |
| Success feedback | Brief, affirming | "Profile updated." |
| Errors | Calm, actionable | "We couldn't save your changes. Try again or contact support." |
| Destructive confirmations | Serious, clear | "Deleting this role is permanent and cannot be undone." |
| Data tables / reports | Neutral, precise | No marketing language in column headers or data labels |

---

## 2. Grammar Rules (apply in all component copy)

### Capitalization
- **Sentence case everywhere**: headings, labels, button text, tooltips, placeholders, error messages, badge text
  - ✅ `"Add a new role"` ❌ `"Add A New Role"`
- Proper nouns always capitalized: Eightfold, Skills Graph, Career Hub
- Branded feature names: Title Case only for named product features

### Punctuation
- **No trailing periods** on single-line labels, button text, headings, or badges
- **Periods required** in multi-sentence helper text or explanatory tooltips
- **Oxford comma** in all lists: `"skills, roles, and competencies"`
- **No exclamation marks** except sparingly in onboarding celebration states
- **Ellipsis (…)** only for truncation or ongoing state: `"Saving…"` — never trailing off in sentences
- **Em dash (—)** not en dash or hyphen for ranges in prose

### Numbers
- Spell out one through nine in prose; numerals for 10+
- Data UI: always numerals — `"3 skills"`, `"1 match"` (never "three skills" in a table)
- Large numbers: K/M suffix — `"1.2K"`, `"23M"`
- Percentages: `"87%"` (numeral + %)
- Dates: **always locale-aware — never hardcode a format string.** Use helpers from `@/lib/formatDate`. The format is automatically correct for every locale (en-US, en-GB, ja, de, fr, etc.)

| Context | Helper | en-US output |
|---------|--------|-------------|
| Prose, detail views | `formatDate(date)` | "March 5, 2025" |
| Tables, cards | `formatDateShort(date)` | "Mar 5, 2025" |
| Dense data / exports | `formatDateNumeric(date)` | "3/5/2025" |
| Timestamps, audit logs | `formatDateTime(date)` | "March 5, 2025 at 2:30 PM" |
| Feeds, "last updated" | `formatDateRelative(date)` | "3 days ago" → "Mar 5, 2025" after 30 days |
| Period headers, chart axes | `formatMonthYear(date)` | "March 2025" |

### Contractions
Allowed and encouraged for human tone:
- ✅ `"You haven't completed your profile"` ❌ `"You have not completed your profile"`
- Exception: legal/compliance copy — no contractions

---

## 3. Component Copy Patterns

### Button Labels

```tsx
// ✅ Correct patterns
<Button>Add skill</Button>               // verb + noun
<Button>Save changes</Button>
<Button>Export report</Button>
<Button variant="destructive">Delete role</Button>  // name the destruction

// ❌ Anti-patterns
<Button>Submit</Button>                  // too generic
<Button>OK</Button>                      // never OK
<Button>Click here</Button>              // never "click here"
<Button>Yes</Button>                     // non-descriptive in dialogs
```

Loading state: append `"…"` — `"Saving…"`, `"Exporting…"`, `"Loading…"`

### Headings and Page Titles

```tsx
// ✅ Describe what the page IS
<h1>Candidate profile</h1>
<h1>Role requirements</h1>
<h1>Skills gap analysis</h1>

// ❌ Anti-patterns
<h1>Review this candidate</h1>   // instructional
<h1>My Skills</h1>               // "My" prefix — product is already personalized
<h1>Manage Your Roles</h1>       // Title Case + instructional
```

### Form Labels and Placeholders

```tsx
// ✅ Always a visible label + optional placeholder hint
<Label>Job title</Label>
<Input placeholder="e.g. Software Engineer" />

// Placeholder as hint, not label repeat:
<Label>Search candidates</Label>
<Input placeholder="Name, email, or skills" />

// ❌ Anti-patterns
<Input placeholder="Enter your job title" />  // placeholder as only label
<Label>Job Title:</Label>                      // no trailing colon on labels
```

### Helper/Hint Text

```tsx
// One sentence below the field, no period for single-sentence
<p className="text-muted-foreground text-sm">Used to match you with relevant roles</p>

// Period required for multi-sentence
<p className="text-muted-foreground text-sm">
  Enter skills you use in your current role. These will be compared against open positions.
</p>
```

### Error Messages

Three-part structure for system errors:
```tsx
// 1. What happened + 2. Why (if helpful) + 3. What to do
"We couldn't save your changes. Your session may have expired. Try again, or contact support if the problem continues."

// Single-field validation: imperative, no "Please"
"Enter a valid email address."        // ✅
"Please enter your email address."    // ❌
"Email is required."                  // ❌ (rephrase as action)
"Enter your email address."           // ✅
```

| Anti-pattern | Better copy |
|---|---|
| `"Error 404"` | `"We couldn't find that page."` |
| `"Invalid input"` | `"Enter a valid email address."` |
| `"Something went wrong"` alone | `"We couldn't load the data. Refresh the page."` |
| `"Username is required"` | `"Enter a username."` |
| `"Please fill in all fields"` | `"Complete all required fields to continue."` |

### Empty States

Three elements: heading + body + optional CTA.

```tsx
// ✅ Encouraging, specific
<EmptyState
  heading="No skills added yet"
  body="Add skills to get matched with relevant roles."
  action={<Button>Add skills</Button>}
/>

// ❌ Anti-patterns
heading="Unfortunately, there is nothing here."   // apologetic
heading="No data found"                            // vague
body="Please add some skills."                    // "Please" + instructional
```

- Heading: what is missing (not an error)
- Body: brief explanation + invitation to act
- CTA: only if the user can take action; omit for read-only views

### Success / Toast Notifications

```tsx
// ✅ Brief, no exclamation
toast("Profile updated.")
toast("Skills saved.")
toast("Export ready. Download will start shortly.")

// ❌ Anti-patterns
toast("Profile successfully updated!")      // "successfully" is redundant; no "!"
toast("Great! Your changes have been saved.")  // "Great!"
```

### Status Badges

```tsx
// Sentence case, no periods
<Badge variant="success">Active</Badge>
<Badge variant="warning">In review</Badge>
<Badge variant="destructive">Expired</Badge>
<Badge variant="secondary">Draft</Badge>

// ❌ ALL CAPS — reads as shouting
<Badge>ACTIVE</Badge>
// ❌ Title Case inconsistency
<Badge>In Review</Badge>
```

### Tooltips

```tsx
// ≤2 sentences. Describe the feature, not the interaction.
title="Skill match score based on job description analysis"   // ✅
title="Hover to see this candidate's score"                  // ❌ describes interaction

// Period only if multi-sentence
title="Match score. Calculated from your skills vs. the role requirements."
```

### Confirmation Dialogs

```tsx
// ✅ Pattern
<DialogTitle>Delete this role?</DialogTitle>
<DialogDescription>
  This will permanently remove the role and all associated data.
</DialogDescription>
<DialogFooter>
  <Button variant="outline">Cancel</Button>
  <Button variant="destructive">Delete role</Button>
</DialogFooter>

// ❌ Anti-patterns
title="Are you sure?"                    // too vague
confirm button="Yes, delete it"          // not specific
confirm button="OK"                      // never OK
cancel button="No"                       // always "Cancel"
```

### Column Headers (Tables)

```tsx
// Sentence case, noun phrases, no trailing punctuation
"Match score"     ✅
"Last active"     ✅
"Skills count"    ✅
"Match Score"     ❌
"Last Active:"    ❌
```

### Pagination

```tsx
// Standard format
"1–25 of 312 results"   // ✅ en dash for range
"Showing 1-25 of 312"   // ❌ hyphen, verbose
```

### Zero Results

```tsx
// Name the query
`No results for "${query}"`   // ✅
"No results found"            // ❌ vague
"Nothing here"                // ❌
```

### Date Formatting (locale-aware)

**Never** use `toLocaleDateString('en-US', ...)`, hardcoded format strings, or raw `date-fns`/`dayjs` format patterns. Always use helpers from `@/lib/formatDate` — they resolve the locale from i18next automatically.

```tsx
import {
  formatDate,
  formatDateShort,
  formatDateNumeric,
  formatDateTime,
  formatDateRelative,
  formatMonthYear,
} from '@/lib/formatDate'

// ✅ Prose / detail view — "March 5, 2025" (en-US) | "5 March 2025" (en-GB) | "2025年3月5日" (ja)
<p>Applied on {formatDate(candidate.appliedAt)}</p>

// ✅ Table cell / card — "Mar 5, 2025"
<TableCell>{formatDateShort(role.createdAt)}</TableCell>

// ✅ Dense data / export — "3/5/2025" (en-US) | "05/03/2025" (en-GB)
<span>{formatDateNumeric(row.date)}</span>

// ✅ Timestamp / audit log — "March 5, 2025 at 2:30 PM"
<TimelineItem time={formatDateTime(event.timestamp)} />

// ✅ Feed / "last updated" — "3 days ago" under 30 days, then "Mar 5, 2025"
<p className="text-sm text-muted-foreground">{formatDateRelative(post.updatedAt)}</p>

// ✅ Period header / chart axis — "March 2025"
<ChartAxisLabel>{formatMonthYear(period.start)}</ChartAxisLabel>

// ❌ Anti-patterns — NEVER do any of these
new Date(x).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
format(date, 'MMMM d, yyyy')   // date-fns without locale
dayjs(date).format('MMM D, YYYY')  // dayjs without locale
"March 5, 2025"  // hardcoded string
```

Pass an explicit locale string only when overriding the active locale (e.g. previewing a translated UI):
```tsx
formatDate(date, 'ja')  // forces Japanese regardless of active locale
```

---

## 4. Accessibility Writing Requirements

### aria-label Rules

Every interactive element without visible text MUST have an `aria-label`:

```tsx
// Icon-only button
<button aria-label="Delete skill">
  <TrashIcon />
</button>

// Close button
<button aria-label="Close dialog">
  <XIcon />
</button>

// Ambiguous repeat links
<a href="/candidates/1" aria-label="View profile — Sarah Chen">View profile</a>
<a href="/candidates/2" aria-label="View profile — James Liu">View profile</a>
```

Rules:
- Match visible label exactly when both exist — don't paraphrase
- `aria-label` on the button, not on the SVG icon
- Disambiguate duplicate interactive labels on the same page

### Form Accessibility

```tsx
// Link error message to field
<Input
  id="email"
  aria-describedby="email-error"
  aria-required="true"
  aria-invalid={hasError}
/>
<p id="email-error" role="alert">Enter a valid email address.</p>

// Required field indicator
<Label>
  Email address <span aria-hidden>*</span>
</Label>
// And add visible legend: "* Required"
```

### Live Regions (async feedback)

```tsx
// Success/info — polite (doesn't interrupt)
<div aria-live="polite" aria-atomic="true">
  {saved && "Profile updated."}
</div>

// Error — assertive (interrupts for urgent info)
<div role="alert">
  {error && "We couldn't save your changes. Try again."}
</div>
```

### Alt Text

```tsx
// Informative image — describe content and function
<img alt="Bar chart showing skill gap by department" src="..." />

// Decorative icon — empty alt
<img alt="" src="decorative-pattern.svg" aria-hidden />

// Icon in a button with label — icon is hidden from AT
<button>
  <CheckIcon aria-hidden />
  Approve candidate
</button>
```

### Color — Never Convey Alone

```tsx
// ✅ Color + label
<Badge variant="success" className="bg-success text-success-foreground">
  Active
</Badge>

// ❌ Color only — invisible to colorblind users
<span className="bg-green-500 size-3 rounded-full" />
```

---

## 5. Theming and Token Alignment

Content copy and design tokens must align:

| Copy context | Required token | Never use |
|---|---|---|
| Error copy + field border | `text-destructive`, `border-destructive` | `text-red-500`, `border-red-*` |
| Success toast | `text-success` | `text-green-*` |
| Warning state + text | `text-warning` | `text-yellow-*`, `text-amber-*` |
| Info tooltip | `text-info` | `text-blue-*`, `text-sky-*` |
| Muted hint text | `text-muted-foreground` | `text-gray-400`, `text-slate-500` |
| Disabled copy | `opacity-50` on element | custom color values |

---

## 6. Anti-pattern Checklist (run before handoff)

- [ ] No "Click here" or "Read more" link text
- [ ] No "Please" in error messages  
- [ ] No Title Case headings (sentence case only)
- [ ] No "Successfully [action]!" — drop "successfully" and "!"
- [ ] No truncated labels without visible tooltip/title
- [ ] No "N/A" in data cells — use "—" (em dash)
- [ ] No "Loading, please wait…" — use "Loading…"
- [ ] No passive voice in errors — "We couldn't save" not "Changes could not be saved"
- [ ] No ALL CAPS for emphasis
- [ ] All icon-only buttons have aria-label
- [ ] All form errors linked with aria-describedby
- [ ] All async success/error feedback uses aria-live or role="alert"
- [ ] All status indicators use both color and text/icon
- [ ] No raw color classes — semantic tokens only
