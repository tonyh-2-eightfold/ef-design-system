---
name: ui-builder
description: >
  Upgrades React mock screens (produced by react-ux-designer) into production-ready frontend code.
  Replaces mock data with TanStack Query API hooks, adds form validation (React Hook Form + Zod),
  wires real JWT authentication, removes dev tooling, and adds unit tests.
  Use this skill when the user wants to build the production UI, wire up APIs, implement the frontend,
  add form validation, or connect the React screens to the backend.
  Always trigger after architect produces an approved architecture (including API spec) and after
  react-ux-designer produces approved mock screens.
  Also triggers when the user says "build the UI", "wire up the APIs", "implement the frontend",
  "connect to the backend", "add validation", or "make it production-ready".
---

# UI Builder (Upgrade Mode)

Upgrades existing React mock screens into production-ready frontend code. The mock screens — built by react-ux-designer with shadcn/ui, TanStack Router, Tailwind, and Octuple tokens — already contain all layouts, navigation, shared components, and data states. This skill adds the production layer: real API integration, form validation, authentication, and tests.

## Pre-conditions

Confirm via forger:
- ✅ React mock screens approved (from react-ux-designer — code exists in `frontend/src/`)
- ✅ API spec approved (from architect — endpoints, schemas, RBAC defined)
- ✅ Personas confirmed

If any are missing, stop and ask the user to complete the prior stage first.

---

## What Already Exists (from react-ux-designer)

The mock screens provide a complete visual foundation:

| What Exists | Location |
|-------------|----------|
| Shared components (StatusBadge, EmptyState, ProgressBar, etc.) | `src/components/shared/` |
| Layout shell (AppShell, Sidebar, TopNav) | `src/components/layout/` |
| Dev tooling (PersonaSwitcher, StateDebugBar) | `src/components/dev/` |
| Feature components with mock data | `src/features/*/components/` |
| Feature pages with state handling | `src/features/*/pages/` |
| File-based routes | `src/routes/` |
| Mock data and types | `src/mocks/` |
| Octuple design tokens CSS | `src/styles/octuple-tokens.css` |

**Do NOT rebuild these from scratch.** Upgrade them in place.

---

## Output Path

All frontend code stays under `frontend/`. This skill modifies existing files and adds new ones (API hooks, stores, validation schemas, tests).

## Tech Stack

Same as mock screens, plus production additions:

| Layer | Choice | Status |
|-------|--------|--------|
| Framework | React 19 + TypeScript 5.9 (strict) | Already set up |
| Build | Vite 7 | Already set up |
| UI Components | shadcn/ui + Radix UI | Already in use |
| Styling | Tailwind CSS 4 + Octuple tokens | Already in use |
| Routing | TanStack Router (file-based) | Already in use |
| Icons | Lucide React | Already in use |
| **Data Fetching** | **TanStack Query v5** | **NEW — add now** |
| **Client State** | **Zustand** | **NEW — add now** |
| **Forms** | **React Hook Form + Zod** | **NEW — add now** |
| **HTTP Client** | **axios** | **NEW — add now** |
| **Charts** | **Recharts** | **NEW — add where needed** |

---

## Upgrade Sequence

### Phase 0: API Layer Foundation

Before upgrading any feature, set up the production infrastructure:

1. **Create axios instance** at `src/lib/axios.ts` — single shared instance with auth header injection
2. **Create QueryClient config** at `src/lib/queryClient.ts` — 5-minute staleTime default
3. **Create auth store** at `src/store/auth.ts` — Zustand store for JWT token + user profile
4. **Wire providers** — Add `QueryClientProvider` in `src/App.tsx` or root layout
5. **Create shared API types** at `src/types/api.ts` — response wrappers, pagination, error shapes (derived from architect's API spec)

```tsx
// src/lib/axios.ts
import axios from 'axios'
import { useAuthStore } from '@/store/auth'

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1'

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
```

### Phase 1-N: Feature-by-Feature Upgrade

For each feature cluster (in the same order react-ux-designer built them):

#### Step 1: Create API hooks

Create `src/features/{feature}/api.ts` with TanStack Query hooks:

```tsx
// src/features/goals/api.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import type { Goal, CreateGoalPayload } from './types'

export const goalKeys = {
  all: ['goals'] as const,
  lists: () => [...goalKeys.all, 'list'] as const,
  list: (filters: GoalFilters) => [...goalKeys.all, 'list', filters] as const,
  detail: (id: string) => [...goalKeys.all, 'detail', id] as const,
}

export function useGoals(filters: GoalFilters = {}) {
  return useQuery({
    queryKey: goalKeys.list(filters),
    queryFn: async (): Promise<Array<Goal>> => {
      const { data } = await api.get('/goals', { params: filters })
      return data
    },
    staleTime: 1000 * 60 * 5,
  })
}

export function useCreateGoal() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: CreateGoalPayload): Promise<Goal> => {
      const { data } = await api.post('/goals', payload)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: goalKeys.lists() })
    },
  })
}
```

#### Step 2: Replace mock data imports in page components

Change each page from reading DevToolbarProvider state + mock data to using TanStack Query hooks:

**Before (mock):**
```tsx
const { currentState } = useDevToolbar()
if (currentState === 'loading') return <GoalsLoadingSkeleton />
if (currentState === 'error') return <ErrorBanner ... />
if (currentState === 'empty') return <EmptyState ... />
return <GoalsList goals={mockGoals.ic} />
```

**After (production):**
```tsx
const { data: goals, isLoading, isError, error, refetch } = useGoals()
if (isLoading) return <GoalsLoadingSkeleton />
if (isError) return <ErrorBanner message={error.message} onRetry={() => refetch()} />
if (!goals?.length) return <EmptyState ... />
return <GoalsList goals={goals} />
```

The skeleton, empty state, and error components are **already built** — just swap the data source.

#### Step 3: Add form validation

Replace placeholder forms with React Hook Form + Zod:

```tsx
// src/features/goals/components/GoalForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const goalSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Please provide more detail'),
  dueDate: z.string().min(1, 'Due date is required'),
})

type GoalFormValues = z.infer<typeof goalSchema>

export function GoalForm({ onSubmit }: { onSubmit: (data: GoalFormValues) => void }) {
  const form = useForm<GoalFormValues>({ resolver: zodResolver(goalSchema) })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      {/* ... form fields with error display ... */}
    </form>
  )
}
```

#### Step 4: Wire real route guards

Replace mock persona-based guards with real JWT role checks:

**Before (mock):**
```tsx
beforeLoad: () => {
  const persona = getCurrentPersona()
  if (persona !== 'hr-admin') throw redirect({ to: '/' })
}
```

**After (production):**
```tsx
beforeLoad: () => {
  const user = useAuthStore.getState().user
  if (!user || user.role !== 'HR_ADMIN') throw redirect({ to: '/unauthorized' })
}
```

### Final Phase: Cleanup

After all features are upgraded:

1. **Remove dev tooling**: Delete `src/components/dev/` (PersonaSwitcher, StateDebugBar, DevToolbarProvider)
2. **Remove mock data**: Delete `src/mocks/` directory
3. **Remove dev toolbar from root layout**: Update `src/routes/__root.tsx` to remove DevToolbarProvider wrapper and fixed-position offset
4. **Update route guards**: Ensure all routes use real auth checks
5. **Add unit tests**: For shared components, API hooks, and critical feature components
6. **Run lint + type check**: `pnpm run lint && pnpm run build` to catch any issues

---

## Build Order

Since layouts, shared components, and routes already exist, the build order focuses on **API wiring**:

| Phase | Name | What Happens |
|-------|------|-------------|
| 0 | **API Foundation** | axios instance, QueryClient, auth store, API types, providers |
| 1 | **Most-used persona features** | IC goals, IC dashboard — validate the API pattern works |
| 2 | **Cross-persona features** | Reviews, feedback — data flows between personas |
| 3 | **Admin features** | Cycle management, user admin — complex forms, CRUD |
| 4 | **Analytics/dashboards** | Charts, reports — read-only, last priority |
| 5 | **Cleanup** | Remove dev tooling, mock data, add tests |

Each phase should be approved before proceeding to the next.

---

## Cross-Cutting Rules

1. **Incremental delivery** — Present work feature by feature. Get user feedback before proceeding to the next.
2. **Don't break what works** — The mock screens render correctly. Upgrades should preserve visual fidelity.
3. **Research awareness** — Check for the market research brief (`docs/market-research.md`) and use competitor insights to inform UX decisions.
4. **Enterprise depth** — All outputs should be production-grade for enterprise scale.
5. **No emoji in production artifacts** — Use text labels and SVG icons.
6. **State boundary (hard rule)** — API data in TanStack Query. UI-only state in Zustand. Form state in React Hook Form. No fourth category.
7. **Design system compliance** — All styling continues to use Octuple tokens via `var()` — never raw hex or `@theme` utilities.

---

## After Building UI

1. Present a screen inventory with route list
2. Show key API integration patterns
3. Highlight any UX decisions made during upgrade
4. Hand off to **forger** for approval
5. After approval, update **forger**
