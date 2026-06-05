import type { PrototypeData } from './types'

/* Mock data for the CareerHub Continuous Sync prototype.
   The Alex-centric shape is from the PRD section 5; Sam's view and the
   alt-tone draft variant are minimal extensions to power the Manager
   perspective and the "Adjust Tone" button. */

export const MOCK_DATA: PrototypeData = {
  currentUser: {
    id: 'alex',
    name: 'Alex',
    role: 'Software Engineer',
    department: 'Core Platform',
    avatarInitials: 'AL',
  },
  manager: {
    id: 'sam',
    name: 'Sam',
    role: 'Engineering Manager',
    department: 'Core Platform',
    avatarInitials: 'SM',
  },
  samsManager: {
    id: 'pat',
    name: 'Pat Wagner',
    role: 'Director of Engineering',
    department: 'Core Platform',
    avatarInitials: 'PW',
  },
  syncSubjects: {
    'alex-with-sam': {
      id: 'alex-with-sam',
      counterpartName: 'Sam Chen',
      counterpartRole: 'Engineering Manager',
      counterpartInitials: 'SM',
      nextOneOnOne: '2026-05-22T15:00:00Z',
      recentHighlight: 'OAuth2 refresh rollout, IDP unblocking, Q3 mentorship pairing.',
    },
    'sam-with-pat': {
      id: 'sam-with-pat',
      counterpartName: 'Pat Wagner',
      counterpartRole: 'Director of Engineering',
      counterpartInitials: 'PW',
      nextOneOnOne: '2026-05-23T17:00:00Z',
      recentHighlight: 'Org-level planning for Q3, headcount asks, platform reliability targets.',
    },
    'sam-with-alex': {
      id: 'sam-with-alex',
      counterpartName: 'Alex Park',
      counterpartRole: 'Software Engineer',
      counterpartInitials: 'AL',
      nextOneOnOne: '2026-05-22T15:00:00Z',
      recentHighlight: 'OAuth2 refresh rollout, IDP unblocking, Q3 mentorship pairing.',
    },
    'sam-with-jordan': {
      id: 'sam-with-jordan',
      counterpartName: 'Jordan Lee',
      counterpartRole: 'Senior DevOps Engineer',
      counterpartInitials: 'JL',
      nextOneOnOne: '2026-05-23T14:30:00Z',
      recentHighlight: 'CI/CD pipeline cleanup, on-call rotation rebalancing, AWS spend review.',
    },
    'sam-with-casey': {
      id: 'sam-with-casey',
      counterpartName: 'Casey Rivera',
      counterpartRole: 'Backend Lead',
      counterpartInitials: 'CR',
      nextOneOnOne: '2026-05-26T16:00:00Z',
      recentHighlight: 'Mentoring two new hires, owning the payments service migration, RFC review backlog.',
    },
  },
  directReports: [
    {
      id: 'alex',
      name: 'Alex Park',
      role: 'Software Engineer',
      avatarInitials: 'AL',
      nextOneOnOne: '2026-05-22T15:00:00Z',
      pendingActionItems: 2,
      status: 'on-track',
    },
    {
      id: 'jordan',
      name: 'Jordan Lee',
      role: 'Senior DevOps Engineer',
      avatarInitials: 'JL',
      nextOneOnOne: '2026-05-23T14:30:00Z',
      pendingActionItems: 1,
      status: 'attention',
    },
    {
      id: 'casey',
      name: 'Casey Rivera',
      role: 'Backend Lead',
      avatarInitials: 'CR',
      nextOneOnOne: '2026-05-26T16:00:00Z',
      pendingActionItems: 0,
      status: 'on-track',
    },
  ],
  upcoming: {
    withName: 'Sam',
    withRole: 'Engineering Manager',
    when: '2026-05-22T15:00:00Z',
    durationMinutes: 30,
  },
  pastMeetings: [
    {
      id: 'm5',
      date: '2026-05-15',
      keywords: ['API Refactor', 'Auth Migration', 'Tech Debt'],
      aiSummary:
        'Discussed the Core API migration. Alex highlighted blockers with the legacy authentication middleware and proposed a phased rollout.',
      actionItems: [
        { id: 'a1', label: 'Draft RFC for Auth Middleware', owner: 'alex' },
        { id: 'a2', label: 'Review PR #442 for Sam', owner: 'alex' },
      ],
    },
    {
      id: 'm4',
      date: '2026-05-08',
      keywords: ['OAuth2', 'Token Refresh', 'Code Review'],
      aiSummary:
        'Walked through the OAuth2 token refresh design. Sam suggested aligning with the platform team on the refresh window; Alex agreed to sync with Jordan.',
      actionItems: [
        { id: 'a3', label: 'Sync with Jordan on refresh window', owner: 'alex' },
      ],
    },
    {
      id: 'm3',
      date: '2026-05-01',
      keywords: ['Sprint Planning', 'PLAT-902', 'Capacity'],
      aiSummary:
        'Capacity check-in for the Auth epic. Alex flagged a one-week risk on PLAT-902 due to a dependency on the IDP team; Sam offered to unblock.',
      actionItems: [
        { id: 'a4', label: 'Sam to ping IDP lead about PLAT-902 dependency', owner: 'sam', unblocking: true },
      ],
    },
    {
      id: 'm2',
      date: '2026-04-24',
      keywords: ['Career Growth', 'Mentorship', 'Junior Reviews'],
      aiSummary:
        'Career growth conversation. Alex expressed interest in mentoring a junior engineer next quarter and in driving the auth RFC end-to-end.',
      actionItems: [
        { id: 'a5', label: 'Identify a junior engineer for mentorship pairing', owner: 'sam' },
      ],
    },
    {
      id: 'm1',
      date: '2026-04-17',
      keywords: ['Q2 Goals', 'Architecture Review', 'Bandwidth'],
      aiSummary:
        'Set Q2 goals: ship OAuth2 refresh, lead one architecture review, and improve PR review turnaround. Discussed bandwidth and current load.',
      actionItems: [
        { id: 'a6', label: 'Document Q2 goals in Career Hub Goals tab', owner: 'alex' },
      ],
    },
  ],
  integrations: [
    { type: 'Jira', connected: true, account: 'core-platform' },
    { type: 'GitHub', connected: true, account: 'eightfold-ai/platform' },
    { type: 'Slack', connected: true, account: '#core-platform' },
  ],
  recentActivity: [
    {
      id: 'r1',
      type: 'Jira',
      item: 'PLAT-902 — Refactor Legacy Auth',
      status: 'In Progress',
      updatedAt: '2026-05-21T18:42:00Z',
    },
    {
      id: 'r2',
      type: 'GitHub',
      item: 'PR #442 — Added OAuth2 Token Refresh',
      status: 'Merged',
      updatedAt: '2026-05-21T16:11:00Z',
    },
    {
      id: 'r3',
      type: 'GitHub',
      item: 'PR #438 — Auth middleware: handle null session edge case',
      status: 'Merged',
      updatedAt: '2026-05-20T22:05:00Z',
    },
    {
      id: 'r4',
      type: 'Jira',
      item: 'PLAT-915 — Migrate /v1/login endpoints to OAuth2',
      status: 'Open',
      updatedAt: '2026-05-20T15:30:00Z',
    },
    {
      id: 'r5',
      type: 'Slack',
      item: '#core-platform: thread on IDP dependency timeline',
      status: 'Active',
      updatedAt: '2026-05-19T20:15:00Z',
    },
    {
      id: 'r6',
      type: 'GitHub',
      item: 'Code review on PR #451 (Jordan) — CI/CD pipeline cleanup',
      status: 'Open',
      updatedAt: '2026-05-19T14:50:00Z',
    },
  ],
  aiReviewDraft: {
    alex: {
      timeframe: 'mid-year',
      tone: 'balanced',
      summary:
        "Over the past 6 months, I've been instrumental in the platform modernization effort. I successfully drove the legacy authentication migration, authoring the core RFC and delivering the OAuth2 token refresh feature ahead of schedule. I consistently shipped clean, well-tested code — evidenced by 42 merged PRs and active participation in code reviews for junior team members. Looking ahead, I want to expand my scope into cross-team architecture and grow my mentorship footprint.",
      citations: [
        { id: 'c1', label: 'Based on 14 mentions in weekly 1-on-1s', source: 'one-on-one', count: 14 },
        { id: 'c2', label: 'Sourced from Jira Epic #899 (Auth Migration)', source: 'jira' },
        { id: 'c3', label: '42 merged PRs in eightfold-ai/platform', source: 'github', count: 42 },
        { id: 'c4', label: '18 code reviews completed', source: 'github', count: 18 },
        { id: 'c5', label: '6 mentions in #core-platform Slack', source: 'slack', count: 6 },
      ],
      suggestedPeers: [
        {
          id: 'p1',
          name: 'Casey Rivera',
          role: 'Backend Lead',
          reason: 'Approved 15 of your PRs and collaborated on the Auth RFC.',
          avatarInitials: 'CR',
          reviewCount: 15,
        },
        {
          id: 'p2',
          name: 'Jordan Lee',
          role: 'Senior DevOps Engineer',
          reason: 'Mentioned in 4 recent 1-on-1s regarding CI/CD pipeline optimizations.',
          avatarInitials: 'JL',
          reviewCount: 4,
        },
        {
          id: 'p3',
          name: 'Riley Tran',
          role: 'Staff Engineer',
          reason: 'Reviewed your RFC and partnered on the IDP dependency unblocking.',
          avatarInitials: 'RT',
          reviewCount: 9,
        },
      ],
    },
    sam: {
      timeframe: 'mid-year',
      tone: 'balanced',
      summary:
        "Alex has been a core driver of the platform modernization effort this half. They led the legacy authentication migration end-to-end — owning the RFC, securing cross-team alignment, and shipping the OAuth2 token refresh ahead of plan. Their code quality is consistently strong (42 merged PRs, low revert rate) and they've stepped up as an informal mentor on PR reviews for junior engineers. Growth area: more proactive surfacing of cross-team blockers earlier in the sprint, which we've discussed in our recent 1-on-1s.",
      citations: [
        { id: 'c1', label: 'Based on 14 mentions in weekly 1-on-1s', source: 'one-on-one', count: 14 },
        { id: 'c2', label: 'Sourced from Jira Epic #899 (Auth Migration)', source: 'jira' },
        { id: 'c3', label: '42 merged PRs in eightfold-ai/platform', source: 'github', count: 42 },
        { id: 'c4', label: 'Peer feedback from 3 collaborators', source: 'one-on-one', count: 3 },
      ],
      suggestedPeers: [
        {
          id: 'p1',
          name: 'Casey Rivera',
          role: 'Backend Lead',
          reason: 'Approved 15 of Alex’s PRs and co-authored the Auth RFC.',
          avatarInitials: 'CR',
          reviewCount: 15,
        },
        {
          id: 'p2',
          name: 'Jordan Lee',
          role: 'Senior DevOps Engineer',
          reason: 'Partnered on CI/CD work; mentioned in 4 recent 1-on-1s.',
          avatarInitials: 'JL',
          reviewCount: 4,
        },
      ],
    },
  },
  aiReviewDraftAltTone: {
    alex: {
      timeframe: 'mid-year',
      tone: 'concise',
      summary:
        'Shipped OAuth2 token refresh ahead of schedule. Authored the auth-migration RFC. 42 merged PRs, 18 reviews. Next: cross-team architecture scope, formal mentorship pairing.',
      citations: [
        { id: 'c1', label: 'Based on 14 mentions in weekly 1-on-1s', source: 'one-on-one', count: 14 },
        { id: 'c2', label: 'Sourced from Jira Epic #899', source: 'jira' },
        { id: 'c3', label: '42 merged PRs', source: 'github', count: 42 },
      ],
      suggestedPeers: [
        {
          id: 'p1',
          name: 'Casey Rivera',
          role: 'Backend Lead',
          reason: 'Approved 15 of your PRs and collaborated on the Auth RFC.',
          avatarInitials: 'CR',
          reviewCount: 15,
        },
        {
          id: 'p2',
          name: 'Jordan Lee',
          role: 'Senior DevOps Engineer',
          reason: 'Mentioned in 4 recent 1-on-1s regarding CI/CD pipeline optimizations.',
          avatarInitials: 'JL',
          reviewCount: 4,
        },
      ],
    },
    sam: {
      timeframe: 'mid-year',
      tone: 'concise',
      summary:
        'Alex led the auth migration: RFC, OAuth2 refresh, on-time delivery. 42 PRs, mentoring juniors via reviews. Growth area: surface cross-team blockers earlier in the sprint.',
      citations: [
        { id: 'c1', label: 'Based on 14 mentions in weekly 1-on-1s', source: 'one-on-one', count: 14 },
        { id: 'c2', label: 'Sourced from Jira Epic #899', source: 'jira' },
        { id: 'c3', label: '42 merged PRs', source: 'github', count: 42 },
      ],
      suggestedPeers: [
        {
          id: 'p1',
          name: 'Casey Rivera',
          role: 'Backend Lead',
          reason: 'Approved 15 of Alex’s PRs and co-authored the Auth RFC.',
          avatarInitials: 'CR',
          reviewCount: 15,
        },
        {
          id: 'p2',
          name: 'Jordan Lee',
          role: 'Senior DevOps Engineer',
          reason: 'Partnered on CI/CD work; mentioned in 4 recent 1-on-1s.',
          avatarInitials: 'JL',
          reviewCount: 4,
        },
      ],
    },
  },
}

/* AI-generated action item suggestions used by the "Generate Action Items"
   button in the meeting canvas. */
export const AI_SUGGESTED_ACTION_ITEMS: ReadonlyArray<{ label: string; owner: 'alex' | 'sam' }> = [
  { label: 'Schedule a sync with the IDP team about PLAT-902 dependency timing', owner: 'sam' },
  { label: 'Open follow-up PR to add OAuth2 refresh telemetry', owner: 'alex' },
  { label: 'Draft mentorship pairing proposal for next quarter', owner: 'sam' },
]
