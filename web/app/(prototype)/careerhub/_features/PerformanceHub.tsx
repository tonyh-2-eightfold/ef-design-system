'use client'

import NextLink from 'next/link'
import { useState } from 'react'
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Snackbar,
  Tag,
} from '@tonyh-2-eightfold/ef-design-system'
import { usePrototype } from '../_lib/PrototypeContext'
import { MOCK_DATA } from '../_lib/mock-data'
import { PersonAvatar } from '../_components/PersonAvatar'
import type { Citation, SuggestedPeer, SyncSubjectId } from '../_lib/types'

const SOURCE_META: Record<
  Citation['source'],
  { icon: string; bg: string; fg: string; label: string }
> = {
  'one-on-one': {
    icon: 'forum',
    bg: 'bg-primary/10',
    fg: 'text-primary',
    label: '1-on-1 notes',
  },
  jira: { icon: 'task_alt', bg: 'bg-info/10', fg: 'text-info', label: 'Jira' },
  github: {
    icon: 'code',
    bg: 'bg-foreground/5',
    fg: 'text-foreground',
    label: 'GitHub',
  },
  slack: { icon: 'chat', bg: 'bg-warning/10', fg: 'text-warning', label: 'Slack' },
}

export interface PerformanceHubProps {
  subjectId: SyncSubjectId
}

export function PerformanceHub({ subjectId: _subjectId }: PerformanceHubProps) {
  const {
    persona,
    dataState,
    currentReviewDraft,
    isRegenerating,
    regenerate,
    isAltTone,
    toggleTone,
  } = usePrototype()

  if (dataState === 'loading') return <HubSkeleton />
  if (dataState === 'error') return <HubError />
  if (dataState === 'empty') return <HubEmpty persona={persona} />

  return (
    <main className="mx-auto max-w-7xl px-6 pb-8 pt-4">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <DraftCard
            isRegenerating={isRegenerating}
            isAltTone={isAltTone}
            onRegenerate={regenerate}
            onToggleTone={toggleTone}
            summary={currentReviewDraft.summary}
          />
          <PeerReviewSuggestions
            peers={currentReviewDraft.suggestedPeers}
            persona={persona}
          />
        </div>
        <SourceContextPanel citations={currentReviewDraft.citations} />
      </div>
    </main>
  )
}

function DraftCard({
  isRegenerating,
  isAltTone,
  onRegenerate,
  onToggleTone,
  summary,
}: {
  isRegenerating: boolean
  isAltTone: boolean
  onRegenerate: () => void
  onToggleTone: () => void
  summary: string
}) {
  const [editedSummary, setEditedSummary] = useState(summary)
  const [acceptedSuggestion, setAcceptedSuggestion] = useState(false)

  return (
    <section
      aria-label="AI draft"
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-foreground">Draft summary</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={onToggleTone}
            aria-pressed={isAltTone}
            leadingIcon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 14 }}
                aria-hidden
              >
                tune
              </span>
            }
          >
            {isAltTone ? 'Tone: Concise' : 'Adjust tone'}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onRegenerate}
            disabled={isRegenerating}
            leadingIcon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 14 }}
                aria-hidden
              >
                {isRegenerating ? 'autorenew' : 'refresh'}
              </span>
            }
          >
            {isRegenerating ? 'Generating…' : 'Generate new draft'}
          </Button>
        </div>
      </div>

      <textarea
        key={summary}
        defaultValue={summary}
        onChange={(e) => setEditedSummary(e.target.value)}
        rows={9}
        className="w-full resize-y rounded-md border border-input bg-background p-4 text-sm leading-relaxed text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 14 }}
            aria-hidden
          >
            verified
          </span>
          Grounded in {MOCK_DATA.pastMeetings.length} weekly 1-on-1s, 42 PRs, and 6
          Slack threads
        </span>
        {acceptedSuggestion && (
          <Tag
            size="24"
            color="green"
            leadingIcon={
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 12 }}
                aria-hidden
              >
                check_circle
              </span>
            }
          >
            Suggestion applied
          </Tag>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
        <div className="text-xs text-muted-foreground">
          {editedSummary.length} characters · auto-saved
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => setAcceptedSuggestion(true)}>
            Accept draft
          </Button>
          <Button variant="primary" size="sm">
            Submit for review
          </Button>
        </div>
      </div>
    </section>
  )
}

function PeerReviewSuggestions({
  peers,
  persona,
}: {
  peers: SuggestedPeer[]
  persona: 'alex' | 'sam'
}) {
  const { feedbackSentTo, sendFeedbackRequest } = usePrototype()
  const [lastSentName, setLastSentName] = useState<string | null>(null)

  return (
    <section
      aria-label="Suggested peers"
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            AI suggests requesting feedback from
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Peers ranked by collaboration frequency over the past 6 months
            {persona === 'sam' && ' (Alex’s collaborators)'}.
          </p>
        </div>
      </div>

      <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {peers.map((p) => {
          const sent = feedbackSentTo.has(p.id)
          return (
            <li
              key={p.id}
              className={
                'rounded-lg bg-background p-4 transition-colors ' +
                (sent ? 'ring-1 ring-success/30' : '')
              }
            >
              <div className="mb-2 flex items-center gap-3">
                <PersonAvatar identity={p.id + ':' + p.name} initials={p.avatarInitials} size="lg" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-foreground">
                    {p.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                {p.reason}
              </p>

              <Button
                variant={sent ? 'outline' : 'secondary'}
                size="sm"
                disabled={sent}
                onClick={() => {
                  sendFeedbackRequest(p.id)
                  setLastSentName(p.name)
                }}
                className="mt-3 w-full"
                leadingIcon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 14 }}
                    aria-hidden
                  >
                    {sent ? 'check_circle' : 'send'}
                  </span>
                }
              >
                {sent ? 'Request sent' : 'Send feedback request'}
              </Button>
            </li>
          )
        })}
      </ul>

      {lastSentName && (
        <div className="mt-4">
          <Snackbar
            variant="success"
            size="small"
            message={`Feedback request sent to ${lastSentName}.`}
            actionLabel="Undo"
            onAction={() => setLastSentName(null)}
            onClose={() => setLastSentName(null)}
          />
        </div>
      )}
    </section>
  )
}

function SourceContextPanel({ citations }: { citations: Citation[] }) {
  return (
    <aside
      aria-label="Source context"
      className="rounded-xl border border-border bg-card p-5 lg:sticky lg:top-32"
    >
      <h2 className="mb-3 text-base font-semibold text-foreground">Sources</h2>
      <p className="mb-3 text-xs text-muted-foreground">
        Click a citation to see the underlying evidence.
      </p>

      <ul className="space-y-2">
        {citations.map((c) => {
          const meta = SOURCE_META[c.source]
          return (
            <li key={c.id}>
              <button
                type="button"
                className="group flex w-full items-start gap-3 rounded-lg bg-background p-3 text-left hover:bg-primary/5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${meta.bg} ${meta.fg}`}
                  aria-hidden
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                    {meta.icon}
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {meta.label}
                    </span>
                    {c.count != null && (
                      <Tag size="24" color="grey">
                        {c.count}
                      </Tag>
                    )}
                  </div>
                  <div className="mt-1 text-sm text-foreground group-hover:text-primary">
                    {c.label}
                  </div>
                </div>
                <span
                  className="material-symbols-outlined text-muted-foreground group-hover:text-primary"
                  style={{ fontSize: 16 }}
                  aria-hidden
                >
                  open_in_new
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="mt-4 rounded-lg border border-dashed border-border bg-background p-3 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Why these sources?</span> The
        draft only pulls from data the subject already had access to — no
        anonymized peer feedback is summarized without consent.
      </div>
    </aside>
  )
}

function HubSkeleton() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-6 pb-8 pt-4">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <div className="h-72 rounded-xl bg-muted" />
          <div className="h-56 rounded-xl bg-muted" />
        </div>
        <div className="h-96 rounded-xl bg-muted" />
      </div>
    </main>
  )
}

function HubError() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <span
        className="material-symbols-outlined mx-auto block text-destructive"
        style={{ fontSize: 56 }}
        aria-hidden
      >
        error
      </span>
      <h2 className="mt-3 text-xl font-semibold text-foreground">
        Couldn&rsquo;t generate the review draft
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Our AI service is briefly unavailable. Your underlying 1-on-1 data is
        safe — try again in a moment.
      </p>
      <Button variant="primary" className="mt-5">
        Retry
      </Button>
    </main>
  )
}

function HubEmpty({ persona }: { persona: 'alex' | 'sam' }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <span
        className="material-symbols-outlined mx-auto block text-muted-foreground"
        style={{ fontSize: 56 }}
        aria-hidden
      >
        rate_review
      </span>
      <h2 className="mt-3 text-xl font-semibold text-foreground">
        Not enough 1-on-1 history yet
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {persona === 'alex'
          ? 'Keep holding weekly 1-on-1s — once you have 4 weeks of history, we can draft a mid-year review.'
          : 'You need at least 4 weeks of 1-on-1s with each report before a draft becomes available.'}
      </p>
      <Button asChild variant="primary" className="mt-5">
        <NextLink href="/careerhub/team/meeting">Go to canvas</NextLink>
      </Button>
    </main>
  )
}
