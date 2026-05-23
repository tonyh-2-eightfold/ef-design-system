/* CareerHub Continuous Sync — prototype mock data types.
   Shapes follow PRD section 5; extended minimally to power both
   Employee (Alex) and Manager (Sam) views. */

export type PersonaId = 'alex' | 'sam'

export type DataState = 'populated' | 'empty' | 'loading' | 'error'

export interface User {
  id: string
  name: string
  role: string
  department?: string
  avatarInitials: string
}

export interface PastMeeting {
  id: string
  date: string // ISO 8601 yyyy-mm-dd
  keywords: string[] // top-3 chips, e.g., ["API Refactor", "Tech Debt"]
  aiSummary: string
  actionItems: ActionItem[]
}

export interface ActionItem {
  id: string
  label: string
  /** Who the action item belongs to. */
  owner: PersonaId
  /** Carries over from last week into the current meeting. */
  carriedOver?: boolean
  /** Unblocking lane — manager-specific. */
  unblocking?: boolean
}

export interface IntegrationItem {
  id: string
  type: 'Jira' | 'GitHub' | 'Slack'
  item: string
  status: 'In Progress' | 'Merged' | 'Open' | 'Closed' | 'Active'
  /** ISO timestamp for "Recent Activity" feed ordering. */
  updatedAt: string
}

export interface IntegrationConnection {
  type: 'Jira' | 'GitHub' | 'Slack'
  connected: boolean
  account?: string
}

export interface SuggestedPeer {
  id: string
  name: string
  role: string
  reason: string
  avatarInitials: string
  /** PR/review activity count surfaced as a citation. */
  reviewCount?: number
}

export interface Citation {
  id: string
  label: string
  source: 'one-on-one' | 'jira' | 'github' | 'slack'
  count?: number
}

export interface ReviewDraft {
  timeframe: 'q1' | 'mid-year' | 'annual'
  tone: 'balanced' | 'concise' | 'enthusiastic'
  summary: string
  citations: Citation[]
  suggestedPeers: SuggestedPeer[]
}

export interface DirectReport {
  id: string
  name: string
  role: string
  avatarInitials: string
  nextOneOnOne: string // ISO date
  pendingActionItems: number
  status: 'on-track' | 'attention' | 'blocked'
}

/* Drives the "subject" of a 1-on-1 view — whose relationship we're looking at.
   - 'alex-with-sam'     : Alex's view of her sync with Sam (employee → manager)
   - 'sam-with-pat'      : Sam's view of his sync with HIS manager Pat (manager → manager)
   - 'sam-with-{report}' : Sam's view of his sync with a direct report */
export type SyncSubjectId =
  | 'alex-with-sam'
  | 'sam-with-pat'
  | 'sam-with-alex'
  | 'sam-with-jordan'
  | 'sam-with-casey'

export interface SyncSubject {
  id: SyncSubjectId
  /** Who's the meeting "with" from the viewer's perspective. */
  counterpartName: string
  counterpartRole: string
  counterpartInitials: string
  /** ISO datetime for next 1-on-1. */
  nextOneOnOne: string
  /** Short summary of the most recent meeting — used by lower-fidelity views. */
  recentHighlight: string
}

export interface PrototypeData {
  currentUser: User
  manager: User
  /** Sam's manager (so the manager persona also has a 1-on-1 to view). */
  samsManager: User
  /** Direct reports — used only on the Manager (Sam) view. */
  directReports: DirectReport[]
  /** Per-subject sync state (next 1-on-1 + headline). */
  syncSubjects: Record<SyncSubjectId, SyncSubject>
  /** Upcoming 1-on-1 (always the next one). */
  upcoming: {
    withName: string
    withRole: string
    /** ISO datetime. */
    when: string
    durationMinutes: number
  }
  pastMeetings: PastMeeting[]
  integrations: IntegrationConnection[]
  /** Items pulled into the meeting canvas (recent Jira tickets, PRs, Slack threads). */
  recentActivity: IntegrationItem[]
  /** AI-generated review draft. Two variants keyed by perspective (self vs manager-of-Alex). */
  aiReviewDraft: Record<PersonaId, ReviewDraft>
  /** Alt-tone variant pre-canned for the "Adjust Tone" button. */
  aiReviewDraftAltTone: Record<PersonaId, ReviewDraft>
}
