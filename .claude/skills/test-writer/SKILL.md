---
name: test-writer
description: Writes unit tests, integration tests, and end-to-end test scripts based on approved user stories, acceptance criteria, API spec, and backend business logic. Use this skill when the user wants to write tests, verify business logic, check API behaviour, or validate end-to-end user flows. Always trigger after backend-writer and ui-builder produce approved outputs. Check forger for accepted stories and API spec before writing. Also triggers when the user says "write tests", "add test coverage", "verify the logic", "write acceptance tests", or "test the PIP workflow".
---

# Test Writer

Generates a full test suite — unit, integration, and E2E — from approved acceptance criteria and business logic.

## Pre-conditions

Confirm via forger:
- User stories + acceptance criteria approved
- API spec approved
- Backend implementation approved

---

## Test Stack

| Test Type | Tool | Location |
|---|---|---|
| Backend unit tests | pytest + pytest-asyncio | `backend/tests/services/` |
| Backend integration tests | pytest + httpx (FastAPI TestClient) | `backend/tests/api/` |
| Frontend unit tests | Vitest + React Testing Library | `frontend/src/**/*.test.ts(x)` (co-located) |
| E2E tests | Playwright | `frontend/e2e/` |
| Test data / factories | pytest fixtures + factory functions | `backend/tests/conftest.py` |
| Backend coverage | pytest-cov | via `bash scripts/test.sh` |
| Frontend coverage | Vitest coverage (Istanbul) | via `pnpm run test:unit:coverage` |

---

## Test Categories

### 1. Backend Unit Tests — Business Logic (pytest)

Focus on service layer methods. Test every business rule explicitly.

#### Review Cycle Tests

```python
# backend/tests/services/test_review_cycle.py
import pytest
from uuid import uuid4
from unittest.mock import AsyncMock, MagicMock
from app.services.review_cycle import ReviewCycleService
from app.models.review_cycle import CycleStatus

class TestReviewCycleService:

    @pytest.mark.asyncio
    async def test_launch_cycle_creates_participant_records(self, db_session, mock_employees):
        """Should create participant records for all active employees."""
        cycle = await create_test_cycle(db_session, status=CycleStatus.DRAFT)
        await ReviewCycleService.launch_cycle(db_session, cycle.id, admin_id)

        participants = await get_participants(db_session, cycle.id)
        assert len(participants) == len(mock_employees) * 2  # SELF + MANAGER per employee

    @pytest.mark.asyncio
    async def test_launch_cycle_rejects_non_draft(self, db_session):
        """Should throw if cycle is not in DRAFT status."""
        cycle = await create_test_cycle(db_session, status=CycleStatus.ACTIVE)
        with pytest.raises(ValueError, match="Cycle must be in DRAFT status"):
            await ReviewCycleService.launch_cycle(db_session, cycle.id, admin_id)

    @pytest.mark.asyncio
    async def test_launch_excludes_inactive_employees(self, db_session):
        """Should not create participants for inactive employees."""
        active = await create_test_user(db_session, is_active=True)
        inactive = await create_test_user(db_session, is_active=False)
        cycle = await create_test_cycle(db_session, status=CycleStatus.DRAFT)

        await ReviewCycleService.launch_cycle(db_session, cycle.id, admin_id)

        participants = await get_participants(db_session, cycle.id)
        reviewee_ids = [p.reviewee_id for p in participants]
        assert active.id in reviewee_ids
        assert inactive.id not in reviewee_ids
```

---

#### Calibration Tests

```python
# backend/tests/services/test_calibration.py
class TestCalibrationService:

    @pytest.mark.asyncio
    async def test_flags_distribution_violation(self, db_session):
        """Should flag when >20% rated Exceeds."""
        # Create 10 reviews, 3 with rating 5 (30% Exceeds)
        result = await CalibrationService.get_rating_distribution(db_session, dept_id, cycle_id)
        assert "EXCEEDS_ABOVE_THRESHOLD" in result["flags"]

    @pytest.mark.asyncio
    async def test_prevents_adjustment_after_lock(self, db_session):
        """Should prevent rating adjustment after session is locked."""
        session = await create_calibration_session(db_session, status="LOCKED")
        with pytest.raises(ValueError, match="Calibration session is locked"):
            await CalibrationService.adjust_rating(db_session, participant_id, 4, mgr_id, "reason")
```

---

#### Goal Alignment Tests

```python
# backend/tests/services/test_goal.py
class TestGoalService:

    @pytest.mark.asyncio
    async def test_ic_cannot_create_team_goals(self, db_session):
        """IC should only be able to create INDIVIDUAL goals."""
        with pytest.raises(ValueError, match="ICs can only create INDIVIDUAL goals"):
            await GoalService.create_goal(
                db_session,
                CreateGoalDto(level="TEAM", title="Team goal"),
                created_by_id=ic_user.id,
                role="IC",
            )

    @pytest.mark.asyncio
    async def test_ic_goals_set_to_pending_approval(self, db_session):
        """IC goals should start in PENDING_APPROVAL status."""
        goal = await GoalService.create_goal(
            db_session,
            CreateGoalDto(level="INDIVIDUAL", title="My goal"),
            created_by_id=ic_user.id,
            role="IC",
        )
        assert goal.status == "PENDING_APPROVAL"
```

---

#### PIP Workflow Tests

```python
# backend/tests/services/test_pip.py
class TestPIPService:

    @pytest.mark.asyncio
    async def test_pip_starts_as_draft(self, db_session):
        """PIP should require HR BP approval before going active."""
        pip = await PIPService.initiate_pip(db_session, dto, manager_id)
        assert pip.status == "DRAFT"

    @pytest.mark.asyncio
    async def test_only_direct_manager_can_initiate(self, db_session):
        """Only direct manager can initiate a PIP."""
        with pytest.raises(ValueError, match="only initiate PIPs for your direct reports"):
            await PIPService.initiate_pip(db_session, dto, other_manager_id)

    @pytest.mark.asyncio
    async def test_never_hard_deletes_pip(self, db_session):
        """Closing a PIP should archive it, not delete."""
        pip = await create_active_pip(db_session)
        closed = await PIPService.close_pip(db_session, pip.id, "SUCCESS", manager_id)
        assert closed.status == "COMPLETED_SUCCESS"
        # Verify record still exists in DB
        assert await get_pip(db_session, pip.id) is not None
```

---

### 2. Backend Integration Tests — API Endpoints (httpx + FastAPI TestClient)

Test each API route with a real test database:

```python
# backend/tests/api/test_goals.py
import pytest
from httpx import AsyncClient

class TestGoalsAPI:

    @pytest.mark.asyncio
    async def test_ic_cannot_create_team_goal(self, client: AsyncClient, ic_token: str):
        """POST /api/v1/goals should return 403 for IC creating TEAM goal."""
        res = await client.post(
            "/api/v1/goals",
            headers={"Authorization": f"Bearer {ic_token}"},
            json={"title": "Team goal", "level": "TEAM"},
        )
        assert res.status_code == 403

    @pytest.mark.asyncio
    async def test_ic_creates_individual_goal(self, client: AsyncClient, ic_token: str):
        """POST /api/v1/goals should return 201 with PENDING_APPROVAL status."""
        res = await client.post(
            "/api/v1/goals",
            headers={"Authorization": f"Bearer {ic_token}"},
            json={"title": "My goal", "level": "INDIVIDUAL"},
        )
        assert res.status_code == 201
        assert res.json()["status"] == "PENDING_APPROVAL"

    @pytest.mark.asyncio
    async def test_manager_approves_goal(self, client: AsyncClient, manager_token: str, pending_goal):
        """PATCH /api/v1/goals/:id/status should allow manager to approve."""
        res = await client.patch(
            f"/api/v1/goals/{pending_goal.id}/status",
            headers={"Authorization": f"Bearer {manager_token}"},
            json={"status": "ACTIVE"},
        )
        assert res.status_code == 200
        assert res.json()["status"] == "ACTIVE"
```

---

### 3. E2E Tests — Full User Journeys (Playwright)

Cover complete flows per persona:

```typescript
// frontend/e2e/review-cycle.spec.ts
import { test, expect } from '@playwright/test'
import { loginAs, seedCycle } from './helpers'

test.describe('Annual Review Cycle — Full Flow', () => {

  test('IC completes self-assessment', async ({ page }) => {
    await loginAs(page, 'ic@example.com')
    await page.goto('/reviews')
    await expect(page.getByText('Annual Review 2025')).toBeVisible()
    await page.getByRole('button', { name: 'Start Self Assessment' }).click()

    // Fill out form
    await page.getByLabel('Overall Rating').selectOption('4')
    await page.getByLabel('Key Strengths').fill('Delivered all Q3 OKRs...')
    await page.getByLabel('Areas for Development').fill('Want to improve...')
    await page.getByRole('button', { name: 'Submit Assessment' }).click()

    await expect(page.getByText('Assessment submitted')).toBeVisible()
    await expect(page.getByTestId('review-status')).toHaveText('Submitted')
  })

  test('Manager reviews team and submits', async ({ page }) => {
    await loginAs(page, 'manager@example.com')
    await page.goto('/team/reviews')
    await expect(page.getByText('2 pending reviews')).toBeVisible()

    await page.getByTestId('reviewee-card').first().click()
    await page.getByLabel('Overall Performance Rating').selectOption('4')
    await page.getByLabel('Key Strengths').fill('Consistently delivered...')
    await page.getByLabel('Areas for Development').fill('Should develop...')
    await page.getByRole('button', { name: 'Submit Review' }).click()

    await expect(page.getByText('Review submitted successfully')).toBeVisible()
  })

  test('HR Admin can view cycle completion rate', async ({ page }) => {
    await loginAs(page, 'hradmin@example.com')
    await page.goto('/admin/cycles')
    await expect(page.getByTestId('completion-rate')).toContainText('%')
  })
})
```

---

### 4. E2E Smoke Tests -- API Endpoint Coverage (stdlib only)

The phase-verifier requires `backend/scripts/e2e_smoke.py` with a `run_phase_N()` function per phase. These use **stdlib only** (urllib + json, no external deps) so they run without installing test dependencies.

#### Helpers

Provide reusable `_get`, `_post`, `_put`, `_patch`, `_login` functions using `urllib.request` and `urllib.error`. Each returns `(status_code, parsed_json_or_none)`. The `_login` function takes an email and password, POSTs to `/login/access-token`, and returns the token string.

#### Per-Endpoint Test Matrix

For EACH endpoint in the phase, test:

| Check | Method | Expected | Purpose |
|---|---|---|---|
| Happy path | Correct role + valid data | 200/201 | Feature works |
| No auth | No token | 401 | Auth enforced |
| Wrong role | Token for unauthorized role | 403 | RBAC enforced |
| Bad input | Invalid request body | 422 | Validation works |
| Bad state | Valid request but invalid business state | 400 | Business rules enforced |

#### Multi-Role Testing

Login as at least 3 roles per phase using credentials from the seed script:
- **HR_ADMIN** -- for admin endpoints
- **EMPLOYEE** -- for employee endpoints + 403 on admin
- **MANAGER** -- for team view endpoints

#### Output Format

```
[PASS] GET /review-cycles/ as HR_ADMIN -> 200
[PASS] GET /review-cycles/ as EMPLOYEE -> 403
[FAIL] POST /review-cycles/{id}/launch/ as HR_ADMIN -> expected 200, got 500
---
Phase 2: 35/37 checks passed
```

Exit 0 if all pass, exit 1 if any fail. The `main()` function routes `--phase N` to `run_phase_N()`.

---

## Test Coverage Targets

| Module | Unit | Integration | E2E |
|---|---|---|---|
| Auth / RBAC | 95% | Yes | Yes |
| Goals | 90% | Yes | Yes |
| Review Cycles | 95% | Yes | Yes |
| Calibration | 90% | Yes | -- |
| PIP | 95% | Yes | Yes |
| Notifications | 80% | Yes | -- |
| Analytics | 70% | Yes | -- |
| E2E smoke (per phase) | -- | -- | All phase endpoints x 4+ checks, exit 0 |

---

## Test Data Factories (pytest fixtures)

```python
# backend/tests/conftest.py
import pytest
from uuid import uuid4
from datetime import datetime, timedelta
from sqlmodel import Session
from app.models.user import User, Role
from app.models.review_cycle import ReviewCycle, CycleType, CycleStatus

@pytest.fixture
def test_user(db_session: Session) -> User:
    user = User(
        id=uuid4(),
        email="test@example.com",
        name="Test User",
        hashed_password="hashed",
        role=Role.IC,
        is_active=True,
    )
    db_session.add(user)
    db_session.commit()
    return user

@pytest.fixture
def test_cycle(db_session: Session, test_user: User) -> ReviewCycle:
    cycle = ReviewCycle(
        id=uuid4(),
        name="Test Cycle Q1 2025",
        type=CycleType.ANNUAL,
        status=CycleStatus.DRAFT,
        self_open_at=datetime.utcnow(),
        self_close_at=datetime.utcnow() + timedelta(days=14),
        manager_open_at=datetime.utcnow() + timedelta(days=15),
        manager_close_at=datetime.utcnow() + timedelta(days=30),
        created_by_id=test_user.id,
    )
    db_session.add(cycle)
    db_session.commit()
    return cycle
```

---

## Cross-Cutting Rules

1. **Incremental delivery** — Present work unit by unit inline in the conversation. Get user feedback before proceeding to the next unit. Don't batch everything and dump file paths.
2. **Research awareness** — Check for the market research brief (`docs/market-research.md`) before starting. Use competitor insights and UX patterns from it to inform your output.
3. **Enterprise depth** — All outputs should be spec-level, not summary-level. Think about what an enterprise customer at a 5,000-person company would need.
4. **No emoji in production artifacts** — Use text labels and SVG icons, not emoji, in any artifacts that will be used downstream.

---

## After Writing Tests

1. Show test coverage summary per module
2. Run all new Playwright tests against a live backend+frontend to verify they pass. Fix any test that fails due to test code issues (not app bugs). If tests fail due to app bugs, hand the bug list to the appropriate builder skill.
3. Highlight any acceptance criteria that couldn't be automated (manual test cases)
4. Generate phase gate test file (`frontend/e2e/gates/phase-N.gate.spec.ts`) that the phase-verifier will run as a pre-check before manual verification
5. Hand off to **forger** for approval
6. After approval, update **forger**

---

### 5. Frontend Smoke Tests -- Page Load and Data Rendering (Playwright)

**Purpose:** Catch bugs where a page "loads" but renders no real content -- missing layouts, placeholder forms, blank data areas, 403 errors on dependent API calls.

**Location:** `frontend/e2e/smoke/`

**Pattern:** Each test logs in through the actual login page, navigates to the target route, and asserts basic rendering:

```typescript
// frontend/e2e/smoke/ic-dashboard.smoke.spec.ts
import { test, expect } from '@playwright/test'
import { loginViaUI } from '../helpers'

test('IC dashboard loads with navigation and real data', async ({ page }) => {
  await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');
  await page.waitForURL('/');

  // Layout present
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByText('Emily Nguyen')).toBeVisible();

  // No errors
  await expect(page.getByText(/error|not found|403|500/i)).toHaveCount(0);

  // Real content (not blank)
  await expect(page.getByRole('main').locator('> *')).not.toHaveCount(0);

  // No persistent loading skeletons
  await page.waitForTimeout(3000);
  await expect(page.locator('[data-slot="skeleton"]')).toHaveCount(0);
});
```

**Standard checks for every smoke test:**
1. Login via the actual login page (use `loginViaUI` helper, NEVER localStorage)
2. Navigate to the target route
3. Assert: no error messages visible
4. Assert: main content area has child elements (not blank)
5. Assert: no loading skeletons after 5 seconds
6. Assert: navigation bar/sidebar is present
7. Assert: user name is displayed
8. For data pages: assert at least one real data element (table row, card, list item)
9. For form pages: assert form fields are present

---

### 6. Cross-Layer Integration Tests -- API-to-UI Data Flow (Playwright)

**Purpose:** Catch bugs where the backend works but the frontend cannot consume the data -- wrong RBAC on dependent endpoints, response shape mismatches, broken fetch chains.

**Location:** `frontend/e2e/integration/`

**Key test patterns:**

**Data fetch chain test:**
```typescript
// frontend/e2e/integration/assessment-data-flow.spec.ts
test('IC can load assessment form with real questions from template', async ({ page }) => {
  await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');

  // Navigate to self-reflection
  await page.getByText(/self-reflection/i).click();

  // Verify form sections render (from the template)
  await expect(page.locator('h3, [data-slot="card-title"]')).not.toHaveCount(0);

  // Verify form fields render
  const formFields = page.locator('textarea, input[type="text"], input[type="radio"], select');
  await expect(formFields.first()).toBeVisible();
});
```

**Auth persistence test:**
```typescript
test('User name persists after page reload', async ({ page }) => {
  await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');
  await expect(page.getByText('Emily Nguyen')).toBeVisible();

  await page.reload();
  await page.waitForTimeout(2000);

  // User should still be shown after reload (fetchUser on mount)
  await expect(page.getByText('Emily Nguyen')).toBeVisible();
});
```

**RBAC dependency chain test:**
```typescript
test('IC assessment form can fetch form template (indirect RBAC)', async ({ page }) => {
  await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');
  await page.getByText(/self-reflection/i).click();

  // Monitor network -- form-templates should return 200, not 403
  const response = page.waitForResponse(resp =>
    resp.url().includes('/form-templates/') && resp.status() === 200
  );
  await expect(response).resolves.toBeTruthy();
});
```

---

### 7. RBAC Frontend Tests -- Role Access from the UI (Playwright)

**Purpose:** Verify that each persona can access what they need and cannot access what they shouldn't -- from the UI's perspective, including indirect API dependencies.

**Location:** `frontend/e2e/rbac/`

**For each persona, define and test:**
- **Positive access:** Routes and screens the persona should see with real data
- **Negative access:** Routes the persona should NOT reach (redirect or unauthorized)
- **Indirect dependencies:** API calls the frontend makes that the persona needs (even if not listed as "their" endpoint)

**Example:**
```typescript
// frontend/e2e/rbac/ic-access.spec.ts
test('IC can access dashboard and assessment form', async ({ page }) => {
  await loginViaUI(page, 'alex.johnson@acme.corp', 'password123');
  await expect(page).toHaveURL('/');
  await expect(page.getByRole('main')).toBeVisible();
});

test('IC cannot access admin pages', async ({ page }) => {
  await loginViaUI(page, 'alex.johnson@acme.corp', 'password123');
  await page.goto('/admin');
  // Should redirect to unauthorized or home
  await expect(page).not.toHaveURL('/admin');
});
```

**Indirect dependency tracing:** For each screen, identify ALL API calls it makes (via network tab or code reading), and verify RBAC allows each one for the intended persona. If an IC screen calls `GET /form-templates/{id}`, the RBAC test must verify ICs get 200 (not 403).

---

### 8. Form Submission E2E Tests -- Full Round-Trip (Playwright)

**Purpose:** Verify the core product flow -- filling out a form and persisting data -- works end to end.

**Location:** `frontend/e2e/flows/`

**Pattern:**
```typescript
// frontend/e2e/flows/assessment-submission.flow.spec.ts
test('IC completes self-reflection form end to end', async ({ page }) => {
  await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');

  // Navigate to self-reflection form
  await page.getByText(/continue|start/i).first().click();

  // Fill at least one field of each type
  // Free text
  await page.locator('textarea').first().fill('I achieved my goals this period.');

  // Rating scale (click a radio button)
  await page.locator('input[type="radio"]').first().check();

  // Save draft
  await page.getByRole('button', { name: /save draft/i }).click();
  await expect(page.getByText(/saved/i)).toBeVisible();

  // Reload and verify draft persisted
  await page.reload();
  await page.waitForTimeout(2000);
  await expect(page.locator('textarea').first()).toHaveValue('I achieved my goals this period.');

  // Fill remaining required fields and submit
  // ... (fill all required fields)
  await page.getByRole('button', { name: /submit/i }).click();

  // Confirm dialog
  await page.getByRole('button', { name: /ok|proceed|confirm/i }).click();

  // Verify submission
  await expect(page.getByText(/submitted/i)).toBeVisible();
});
```

---

### 9. Phase Gate Tests -- Automated Pre-Check for Phase Verifier (Playwright)

**Purpose:** Create an automated safety net that the phase-verifier runs BEFORE manual verification. Catches obvious structural bugs (missing layouts, broken forms, 403s) without needing human judgment.

**Location:** `frontend/e2e/gates/phase-N.gate.spec.ts`

**Each phase gate test file covers:**
1. All persona logins work through the actual login page
2. All new screens load without errors
3. All new forms render their fields
4. Navigation bar/sidebar is present on every screen
5. Critical journey happy path can be started (first 3 steps)

**Example:**
```typescript
// frontend/e2e/gates/phase-2.gate.spec.ts
import { test, expect } from '@playwright/test'
import { loginViaUI } from '../helpers'

test.describe('@phase-2-gate', () => {
  test('IC can login and see dashboard with tasks', async ({ page }) => {
    await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText(/my tasks|dashboard/i)).toBeVisible();
  });

  test('IC can open assessment form and see real questions', async ({ page }) => {
    await loginViaUI(page, 'emily.nguyen@acme.corp', 'password123');
    await page.getByText(/continue|start/i).first().click();
    await page.waitForTimeout(3000);
    // Form must render actual fields, not placeholder
    const fields = page.locator('textarea, input[type="radio"], select');
    await expect(fields.first()).toBeVisible();
  });

  test('Manager can login and see review queue', async ({ page }) => {
    await loginViaUI(page, 'david.park@acme.corp', 'password123');
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText(/review queue|team/i)).toBeVisible();
  });

  test('Admin can login and see cycles list', async ({ page }) => {
    await loginViaUI(page, 'admin@acme.corp', 'password123');
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByText(/review cycles/i)).toBeVisible();
  });
});
```

**The phase-verifier MUST run gate tests before manual verification:**
```bash
cd frontend && pnpm run test:e2e -- --grep @phase-N-gate
```

**If gate tests fail, the phase automatically FAILS** without needing manual walkthrough.

---

## Playwright Configuration Requirements

The `frontend/playwright.config.ts` MUST include:

```typescript
export default defineConfig({
  testDir: './e2e',
  baseURL: 'http://localhost:5173',
  webServer: [
    {
      command: 'cd ../backend && .venv/bin/fastapi run app/main.py --port 8000',
      port: 8000,
      reuseExistingServer: true,
    },
    {
      command: 'pnpm run dev',
      port: 5173,
      reuseExistingServer: true,
    },
  ],
});
```

### loginViaUI Helper (MANDATORY)

All E2E tests MUST use `loginViaUI` from `frontend/e2e/helpers.ts`. This helper MUST:
1. Navigate to `/login`
2. Fill the email input field
3. Fill the password input field
4. Click the Login/Submit button
5. Wait for redirect away from `/login`

**NEVER use `localStorage.setItem` or `page.evaluate` to inject tokens.** This hides auth bugs.

```typescript
// frontend/e2e/helpers.ts
import { expect, type Page } from '@playwright/test';

export async function loginViaUI(page: Page, email: string, password: string): Promise<void> {
  await page.goto('/login');
  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password/i).fill(password);
  await page.getByRole('button', { name: /sign in|login|submit/i }).click();
  await page.waitForURL((url) => !url.pathname.includes('/login'), { timeout: 10000 });
}
```

---

## Updated Test Coverage Targets

| Module | Unit | Integration | E2E | Smoke | Gate |
|---|---|---|---|---|---|
| Auth / RBAC | 95% | Yes | Yes | Login per persona | All logins |
| Review Cycles | 95% | Yes | Yes | Cycle list + dashboard load | Admin sees cycles |
| Assessments | 90% | Yes | Yes | Form renders questions | IC opens form with fields |
| Forms | 90% | Yes | Yes | Fill + save + submit | Fields render |
| Navigation / Layout | -- | -- | -- | Every persona has nav after login | Nav present |
| Phase gate | -- | -- | Yes | -- | All personas + all screens |
| Goals | 90% | Yes | Yes | -- | -- |
| Calibration | 90% | Yes | -- | -- | -- |
| PIP | 95% | Yes | Yes | -- | -- |
| Notifications | 80% | Yes | -- | -- | -- |
| Analytics | 70% | Yes | -- | -- | -- |