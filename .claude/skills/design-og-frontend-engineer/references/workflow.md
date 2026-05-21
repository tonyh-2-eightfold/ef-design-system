# AI Coding Agent Workflow

This document defines the workflow for AI coding agents working with the Octuple Design System. Follow this process to ensure consistent, high-quality code generation and continuous improvement.

---

## Session Workflow

### 1. Session Start Checklist

Before writing any code, complete these steps:

```
□ Read docs/ai-learnings.md for recent lessons and quirks
□ Check docs/IMPORTANT-AI-RULES.md for critical mistakes to avoid
□ Review docs/ai-quick-reference.md for component decision trees
□ Identify which product line the work belongs to (see folder structure)
```

### 2. Before Generating Code

For each component or feature:

1. **Check if Octuple has it**: Search `docs/components/` for existing components
2. **Verify props**: Run `npm run check-props ComponentName` 
3. **Find verified examples**: Check `docs/verified-octuple-examples.md`
4. **Check learnings**: Review `docs/ai-learnings.md` for relevant quirks

### 3. After Fixing a Mistake

When you fix a bug or mistake in your generated code:

1. **Identify the root cause**: Why did this happen?
2. **Document in ai-learnings.md**: Add an entry with:
   - Context: What you were trying to do
   - Problem: What went wrong
   - Solution: The correct approach
   - Code example: Before/after if helpful
3. **Check if it's a pattern**: Should this be in IMPORTANT-AI-RULES.md?

### 4. When User Says "Remember This"

Trigger phrases that should prompt documentation:
- "remember this"
- "save this for next time"
- "don't forget this"
- "add this to your learnings"
- "this is important for the future"

Action: Add a detailed entry to `docs/ai-learnings.md` in the appropriate section.

---

## Learning Entry Format

### For Lessons Learned

```markdown
### [Brief Descriptive Title]
**Date:** YYYY-MM-DD
**Context:** What task or feature were you building?
**Problem:** What went wrong or was unexpected?
**Solution:** What's the correct approach?
**Code Example:**
\`\`\`typescript
// ✅ Correct
<CorrectCode />

// ❌ Wrong
<WrongCode />
\`\`\`
```

### For Component Quirks

```markdown
### [Component Name] - [Quirk Description]
**Discovered:** YYYY-MM-DD
**Behavior:** What unexpected behavior occurs?
**Workaround:** How to handle it correctly
**Code Example:** (if applicable)
```

### For Successful Patterns

```markdown
### [Pattern Name]
**Use Case:** When to use this pattern
**Why It Works:** Brief explanation
**Pattern:**
\`\`\`typescript
// Full code example
\`\`\`
```

---

## Product Line Organization

All example pages should be organized by Eightfold product line:

| Product Line | Folder | Description |
|-------------|--------|-------------|
| Talent Management | `src/pages/TalentManagement/` | Employee profiles, people search, org charts |
| Talent Acquisition | `src/pages/TalentAcquisition/` | Candidate details, job postings, applications |
| Personal Career Site | `src/pages/PersonalCareerSite/` | Career pages, job search, applications |
| Workforce Exchange | `src/pages/WorkforceExchange/` | Marketplace features |
| AI Agents | `src/pages/AIAgents/` | AI-powered features and interfaces |
| Resource Management | `src/pages/ResourceManagement/` | Resource allocation, project staffing |

When creating new pages:
1. Identify the appropriate product line
2. Create files in the correct folder
3. Follow existing patterns in that folder
4. Update routing in `App.tsx`

---

## Quality Checklist

Before considering a task complete:

```
□ All imports are from @eightfold.ai/octuple
□ No raw HTML elements where Octuple components exist
□ No external CSS frameworks (Tailwind, Bootstrap, etc.)
□ TypeScript types are properly defined
□ MDI icons used (no emojis)
□ Verified example patterns followed exactly
□ Code tested in browser
□ Any lessons learned documented
```

---

## Continuous Improvement Cycle

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   1. READ         2. BUILD        3. FIX         4. LEARN  │
│   ───────         ───────         ─────          ───────   │
│   ai-learnings    Generate        Debug and      Update    │
│   quick-ref       code using      correct        learnings │
│   verified-ex     patterns        mistakes       file      │
│                                                             │
│        ↑                                              │     │
│        └──────────────────────────────────────────────┘     │
│                    (Next Session)                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run check-props ComponentName` | View TypeScript interface for a component |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |

---

*This workflow applies to all AI coding agents (Cursor, Claude, GPT, Antigravity, etc.) working with this codebase.*

