---
name: backend-writer
description: >
  Writes backend business logic, service layer, and API route handlers based on approved API spec, database
  design, and domain doc. Use this skill when the user wants to implement backend code — business logic,
  service layer, route handlers, or any server-side rules. Always trigger after architect, db-architect, and
  api-architect produce approved artifacts. Never write backend code without approved architecture, db design,
  api spec, and build phases — check forger first. Also triggers when the user says "implement the backend",
  "write the service layer", "code the business logic", or "build the routes".
---

# Backend Writer

Implements backend service layer, business logic, and API route handlers from approved API spec and database schema.

## Pre-conditions

Confirm via forger:
- Domain doc approved
- User stories approved
- Architecture approved (`docs/architecture.md` — Sections 3 and 4: boilerplate integration notes + migration concerns)
- DB design approved (`docs/db-design.md` — SQLModel definitions, relationships, indexes from db-architect)
- API spec approved (`docs/api-spec.md` — endpoint specs, RBAC matrix from api-architect)
- Build phases approved (from architect Pass 2)

---

## Step 0 — Read Before You Write (MANDATORY)

Before writing ANY code, the backend-writer MUST read and understand the existing codebase it is extending. This prevents the most common class of bugs: writing new code that conflicts with existing patterns.

### 0.1 Read and List Every File You Will Modify

For each file you plan to create or modify, read the current version first. Output a summary:

```
FILES I WILL MODIFY:
  app/models/user.py        -- Currently has: UserBase with role enum (values: USER), is_superuser field
  app/schemas/user.py       -- Currently has: UserRole enum, UserCreate, UserPublic schemas
  app/api/deps.py           -- Currently has: get_current_active_superuser using is_superuser
  app/core/db.py            -- Currently has: init_db() creates superuser with UserCreate defaults
  app/api/main.py           -- Currently has: login, users, items, utils, private routers

FILES I WILL CREATE:
  app/models/department.py  -- New model, FK from User
  app/core/rbac.py          -- New RBAC middleware
  ...
```

### 0.2 Trace All Code Paths for Modified Models

When changing a model (e.g., User), find EVERY file that imports or uses it:
- Where is it created? (init_db, seed scripts, test fixtures, route handlers)
- Where is it queried? (deps.py, service layer, other routes)
- What depends on its fields? (schemas, serializers, frontend types)

Update ALL of them, not just the model definition.

### 0.3 Read All Approved Design Artifacts

Read these files before writing any code:

1. **`docs/architecture.md`** — Section 3 (Boilerplate Integration Notes) and Section 4 (Migration Concerns). These flag known risks like enum changes, is_superuser bridging, and FK ordering.
2. **`docs/db-design.md`** — SQLModel definitions, table relationships, and index strategy from db-architect. Use these as the source of truth for model definitions — do not reinvent the schema.
3. **`docs/api-spec.md`** — Endpoint specifications, request/response bodies, and RBAC matrix from api-architect. Use these as the source of truth for route handlers — match endpoint paths, methods, and response shapes exactly.

---

## Code Structure

All backend code is written under `backend/app/` following FastAPI conventions:

```
backend/app/
├── api/
│   ├── main.py                    # Router registration
│   ├── deps.py                    # Dependency injection (SessionDep, CurrentUser, etc.)
│   └── routes/
│       └── [module].py            # FastAPI route handlers
├── models/
│   └── [module].py                # SQLModel DB table models
├── schemas/
│   └── [module].py                # Pydantic request/response schemas
├── services/
│   └── [module].py                # Business logic
└── core/
    ├── config.py                  # Pydantic Settings
    ├── security.py                # JWT + password hashing
    └── db.py                      # Database engine + session

backend/tests/
├── api/
│   └── test_[module].py           # API route tests
└── services/
    └── test_[module].py           # Service unit tests
```

---

## Implementation Guide by Module

### 1. Review Cycle Service
The most complex module. Key business rules:

```python
# services/review_cycle.py
from uuid import UUID
from sqlmodel import Session, select
from app.models.review_cycle import ReviewCycle, ReviewParticipant, CycleStatus, ReviewType
from app.models.user import User

class ReviewCycleService:

    @staticmethod
    async def launch_cycle(session: Session, cycle_id: UUID, launched_by: UUID) -> ReviewCycle:
        """Launch a cycle: validate dates, create ReviewParticipant records for all eligible employees."""
        # 1. Validate cycle is in DRAFT status
        # 2. Validate date windows are logical (self close < manager open, etc.)
        # 3. Fetch all active employees in scope
        # 4. Create SELF review participant for each employee
        # 5. Create MANAGER review for each employee -> their manager
        # 6. If 360 in scope: create PEER nominations placeholder
        # 7. Update cycle status to ACTIVE
        # 8. Trigger notification task: notify all participants
        # 9. Log audit event
        ...

    @staticmethod
    async def check_self_assessment_deadline(session: Session, cycle_id: UUID) -> None:
        """Run as a scheduled job to auto-close self-assessment window."""
        # 1. Find cycles where self_close_at < now and status = ACTIVE
        # 2. Lock all PENDING self assessments
        # 3. Trigger manager window open notifications
        ...
```

---

### 2. Calibration Service
Core calibration logic with rating normalization:

```python
# services/calibration.py
from uuid import UUID
from sqlmodel import Session

class CalibrationService:

    @staticmethod
    async def get_rating_distribution(session: Session, scope_id: UUID, cycle_id: UUID) -> dict:
        """Get rating distribution for a team/department."""
        # 1. Fetch all submitted manager reviews in scope
        # 2. Group by rating value
        # 3. Calculate percentages
        # 4. Flag if distribution violates configured curve (e.g. >20% Exceeds)
        # 5. Return distribution + flags
        ...

    @staticmethod
    async def adjust_rating(
        session: Session,
        participant_id: UUID,
        new_rating: int,
        adjusted_by: UUID,
        reason: str,
    ) -> None:
        """Adjust a rating during calibration."""
        # 1. Verify calibration session is OPEN (not locked)
        # 2. Verify adjuster has calibration rights (MANAGER/HR_BP)
        # 3. Store previous rating in audit log
        # 4. Update rating
        # 5. Record calibration note with reason
        ...

    @staticmethod
    async def lock_session(session: Session, session_id: UUID, locked_by: UUID) -> None:
        """Lock calibration session — only HR_ADMIN can lock."""
        # 1. Only HR_ADMIN can lock
        # 2. Validate all participants have been reviewed
        # 3. Set session status to LOCKED
        # 4. Prevent further edits
        # 5. Trigger notifications to managers
        ...
```

---

### 3. Goal Alignment Service

```python
# services/goal.py
from uuid import UUID
from sqlmodel import Session
from app.models.goal import Goal, GoalLevel, GoalStatus
from app.schemas.goal import CreateGoalDto

class GoalService:

    @staticmethod
    async def create_goal(session: Session, dto: CreateGoalDto, created_by_id: UUID, role: str) -> Goal:
        """Validate goal alignment on creation."""
        # 1. If parent_goal_id provided, validate level hierarchy:
        #    COMPANY -> DEPARTMENT -> TEAM -> INDIVIDUAL
        # 2. IC can only create INDIVIDUAL goals
        # 3. MANAGER can create TEAM and INDIVIDUAL goals
        # 4. Validate due_date is within parent goal's due_date
        # 5. Set status to DRAFT for IC (pending approval), ACTIVE for manager-created
        # 6. If IC goal: trigger approval notification to manager
        ...

    @staticmethod
    async def get_goal_tree(session: Session, user_id: UUID) -> list[dict]:
        """Build goal tree for a user."""
        # 1. Fetch user's individual goals
        # 2. Traverse up to parent goals (team -> dept -> company)
        # 3. Return nested tree structure
        # 4. Include progress % at each level
        ...
```

---

### 4. PIP Workflow Service

```python
# services/pip.py
from uuid import UUID
from sqlmodel import Session
from app.models.pip import PIP, PIPStatus, PIPMilestone
from app.schemas.pip import CreatePIPDto

class PIPService:

    @staticmethod
    async def initiate_pip(session: Session, dto: CreatePIPDto, manager_id: UUID) -> PIP:
        """Initiate PIP — requires HR BP approval."""
        # 1. Validate manager is the employee's direct manager
        # 2. Create PIP in DRAFT status
        # 3. Add milestones with due dates
        # 4. Notify HR BP for review
        ...

    @staticmethod
    async def approve_pip(session: Session, pip_id: UUID, hr_bp_id: UUID) -> PIP:
        """HR BP approves a PIP."""
        # 1. Validate approver is HR_BP
        # 2. Update status to ACTIVE
        # 3. Notify employee (IC) — they must acknowledge
        # 4. Notify manager
        # 5. Log approval in audit trail
        ...

    @staticmethod
    async def record_check_in(
        session: Session, pip_id: UUID, manager_id: UUID, notes: str
    ) -> None:
        """Record a PIP check-in."""
        # 1. Validate PIP is ACTIVE
        # 2. Validate manager owns this PIP
        # 3. Record check-in with timestamp + notes
        # 4. Notify IC that check-in notes are available
        ...

    @staticmethod
    async def close_pip(
        session: Session, pip_id: UUID, outcome: str, closed_by: UUID
    ) -> PIP:
        """Close a PIP — never hard delete."""
        # 1. Requires both MANAGER and HR_BP sign-off
        # 2. Update status to COMPLETED_SUCCESS or COMPLETED_FAIL
        # 3. Archive PIP — never delete (legal requirement)
        # 4. Notify IC of outcome
        # 5. If FAIL: flag to HR_ADMIN for offboarding process
        ...
```

---

### 5. Notification Service

```python
# services/notification.py
from uuid import UUID

# All notification triggers — use Celery or ARQ for async processing
NOTIFICATION_EVENTS = {
    "CYCLE_LAUNCHED":           "Notify all participants cycle is open",
    "SELF_ASSESSMENT_DUE":      "Reminder 3 days before deadline",
    "MANAGER_REVIEW_OPEN":      "Notify managers self window closed",
    "REVIEW_SUBMITTED":         "Notify manager when IC submits self-assessment",
    "CALIBRATION_OPEN":         "Notify managers calibration session is ready",
    "PIP_CREATED":              "Notify HR BP of new PIP for approval",
    "PIP_APPROVED":             "Notify IC and manager PIP is active",
    "PIP_CHECKIN_DUE":          "Remind manager of upcoming check-in",
    "FEEDBACK_RECEIVED":        "Notify IC of new feedback",
    "GOAL_APPROVAL_REQUIRED":   "Notify manager of pending goal approval",
}

class NotificationService:

    @staticmethod
    async def queue_notification(
        event: str, recipient_ids: list[UUID], payload: dict
    ) -> None:
        """Push to Celery/ARQ queue. Worker handles email + in-app notification."""
        ...
```

---

### 6. RBAC — FastAPI Dependencies

```python
# api/deps.py
from typing import Annotated
from fastapi import Depends, HTTPException, status
from sqlmodel import Session
from app.core.security import verify_token
from app.models.user import User, Role

# Existing deps from boilerplate: SessionDep, CurrentUser, etc.
# Add role-based access control:

def require_role(*roles: Role):
    """FastAPI dependency that enforces role-based access."""
    async def _check(current_user: CurrentUser) -> User:
        if current_user.role not in roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions",
            )
        return current_user
    return Depends(_check)

def scope_to_user(current_user: CurrentUser) -> dict:
    """Scope data to what the user is allowed to see."""
    match current_user.role:
        case Role.IC:
            return {"owner_id": current_user.id}
        case Role.MANAGER:
            report_ids = [r.id for r in current_user.reports]
            return {"owner_id__in": [current_user.id, *report_ids]}
        case Role.HR_BP:
            return {"department_id": current_user.department_id}
        case Role.HR_ADMIN | Role.EXECUTIVE:
            return {}  # no filter — sees all
```

---

## Implementation Order

Build modules in this sequence (each depends on the previous):

1. `auth` → RBAC dependencies
2. `users` → org hierarchy
3. `goals` → alignment logic
4. `review_cycles` → cycle orchestration
5. `assessments` → form submission
6. `feedback` → 360 flow
7. `calibration` → rating normalization
8. `pip` → approval workflow
9. `notifications` → async tasks
10. `analytics` → read-only aggregations

---

## Code Quality Rules

- All service methods must be **async** — use `async def` throughout
- All DB queries go through **SQLModel** — no raw SQL unless for analytics aggregations
- All writes must create an **audit log entry**
- All external calls (HRIS sync, email) must be **wrapped in try/except**
- **Never hard delete** any performance data — use `is_active: bool = False` or `archived_at: datetime | None`
- **mypy strict mode** enabled — proper type hints on all functions
- **ruff** for linting — no print statements, consistent imports

---

## Migration Rules (B3, B5, B6)

### After Running `alembic revision --autogenerate`:

1. **READ the generated migration file.** Do not blindly trust autogenerate.
2. **Check for enum changes.** Alembic autogenerate does NOT detect changes to PostgreSQL enum values. If you changed a `str, Enum` class (e.g., added new role values), you must MANUALLY add `ALTER TYPE` SQL to the migration:
   ```python
   # Autogenerate misses this -- add manually:
   op.execute('ALTER TABLE "user" ALTER COLUMN role DROP DEFAULT')
   op.execute("ALTER TYPE userrole RENAME TO userrole_old")
   op.execute("CREATE TYPE userrole AS ENUM ('EMPLOYEE', 'MANAGER', ...)")
   op.execute('ALTER TABLE "user" ALTER COLUMN role TYPE userrole USING ...')
   op.execute("DROP TYPE userrole_old")
   ```
3. **Check FK ordering.** If migration creates table A with a FK to table B, table B must be created first.
4. **Check default values.** If changing a column's default, the old default must be dropped before the type change.

### Before Declaring Backend Done:

The backend-writer's final step for each phase MUST be:

1. **Run migrations** against a real DB (not just generate them):
   ```bash
   alembic upgrade head
   ```
2. **Start the server** and hit the health check:
   ```bash
   fastapi run app/main.py --port 8000 &
   curl http://localhost:8000/api/v1/utils/health-check/
   ```
3. **Try one authenticated endpoint** to verify auth + RBAC works:
   ```bash
   TOKEN=$(curl -s -X POST .../login/access-token -d "username=...&password=...")
   curl -H "Authorization: Bearer $TOKEN" .../api/v1/users/
   ```

If any of these fail, fix the code before handing off. Do not hand off code that hasn't been runtime-verified.

---

## FastAPI Gotchas Checklist (B4)

Before handing off, verify none of these apply:

- [ ] **Trailing slash 307 redirects**: Routes defined with `/users/` will 307-redirect requests to `/users`, stripping the Authorization header. Either set `redirect_slashes=False` on FastAPI or ensure all clients use trailing slashes.
- [ ] **Alembic enum blindness**: `alembic revision --autogenerate` does not detect enum value changes. Always manually check.
- [ ] **init_db consistency**: If you changed the User model (new fields, new enum values), update `init_db()` in `app/core/db.py` to match. The superuser it creates must use the new schema.
- [ ] **is_superuser bridging**: If you added role-based RBAC, make sure `is_superuser=True` users bypass role checks. The boilerplate uses `is_superuser` for admin access.
- [ ] **Model registration**: New models must be imported in `app/models/__init__.py` for Alembic to detect them.
- [ ] **Router registration**: New route files must be added to `app/api/main.py` with `include_router()`.
- [ ] **Session commit ordering**: When creating records with FKs to other new records, use `session.flush()` between them to populate IDs before `session.commit()`.

---

## Seed Script (Per Phase)

Each phase MUST produce a `seed_phase_N()` function in `backend/scripts/seed.py`. The seed script is a first-class deliverable, not an afterthought.

### Template

The boilerplate provides `boilerplate/backend/scripts/seed.py` with a ready-made framework: `PHASE_SEEDERS` dict, `_get_or_create()` helper, composable `seed()` function, and CLI with `--phase` argument. At project start this is copied to `backend/scripts/seed.py`. **Extend the existing template** -- add your `seed_phase_N()` function and register it in `PHASE_SEEDERS`. Do NOT rewrite the framework or create a separate seed file. The same applies to `backend/scripts/e2e_smoke.py` (extend `PHASE_RUNNERS`, don't rewrite).

### Rules

1. **Match prototype data** -- Use the same names, departments, and sample data from the React mock screens in `frontend/src/`. If the prototype shows "Sarah Chen" as an engineer, the seed creates Sarah Chen as an engineer.
2. **Idempotent** -- Safe to run multiple times. Check-before-create pattern: query for existing record by unique field (email, name), skip if found.
3. **Composable** -- Phase 2 seed calls Phase 1 seed first. Each phase function can assume prior phases' data exists.
4. **Cover all roles** -- Create at least one user per RBAC role (EMPLOYEE, MANAGER, HRBP, HR_ADMIN, EXECUTIVE) so smoke tests can authenticate as each.
5. **Exercise every new model** -- If this phase adds ReviewCycle and Assessment models, the seed must create instances of both with realistic relationships.
6. **Print summary** -- Output what was created vs. skipped so the verifier can confirm.
7. **Call from `__main__`** -- Update the `if __name__ == "__main__"` block to call `seed_phase_N()`.

### Pattern

```python
def seed_phase_2() -> None:
    """Seed Phase 2: Review cycles + assessments."""
    with Session(engine) as session:
        existing = session.exec(
            select(ReviewCycle).where(ReviewCycle.name == "Q1 2026 Review")
        ).first()
        if existing:
            print("Phase 2: already seeded (skipped)")  # noqa: T201
            return
        # Create cycle, participants, assessments...
        session.commit()
        print(f"Phase 2: created cycle with {n} participants")  # noqa: T201
```

---

## Cross-Cutting Rules

1. **Incremental delivery** -- Present work unit by unit inline in the conversation. Get user feedback before proceeding to the next unit. Don't batch everything and dump file paths.
2. **Research awareness** -- Check for the market research brief (`docs/market-research.md`) before starting. Use competitor insights and UX patterns from it to inform your output.
3. **Enterprise depth** -- All outputs should be spec-level, not summary-level. Think about what an enterprise customer at a 5,000-person company would need.
4. **No emoji in production artifacts** -- Use text labels and SVG icons, not emoji, in any artifacts that will be used downstream.

---

## After Writing Backend Code

1. Present a module-by-module summary of what was implemented
2. Highlight any business rule decisions that assumed defaults
3. **Verify seed script creates correct data**: run `python scripts/seed.py` and confirm output
4. Hand off to **forger** for approval
5. After approval, update **forger**
6. Flag any items for **test-writer** to cover
