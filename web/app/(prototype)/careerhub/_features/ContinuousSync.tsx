'use client'

import NextLink from 'next/link'
import { useState } from 'react'
import { Button, Input, Tag, TagGroup } from '@tonyh-2-eightfold/ef-design-system'
import { usePrototype } from '../_lib/PrototypeContext'
import { MOCK_DATA } from '../_lib/mock-data'
import { formatDateLong, formatRelativeFromNow, formatTime } from '../_lib/format'
import { PersonAvatar } from '../_components/PersonAvatar'
import type { PastMeeting, SyncSubjectId } from '../_lib/types'

export interface ContinuousSyncProps {
  /** Whose 1-on-1 are we viewing? */
  subjectId: SyncSubjectId
  /** Base path for the "Open canvas" CTA — varies per drill-down route. */
  basePath: string
}

export function ContinuousSync({ subjectId, basePath }: ContinuousSyncProps) {
  const { dataState } = usePrototype()
  const subject = MOCK_DATA.syncSubjects[subjectId]

  if (dataState === 'loading') return <SyncSkeleton />
  if (dataState === 'error') return <SyncError />
  if (dataState === 'empty') return <SyncEmpty />

  return (
    <main className="mx-auto max-w-7xl px-6 pb-8 pt-4">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <UpcomingCard subject={subject} basePath={basePath} />
          <TimelineCard meetings={MOCK_DATA.pastMeetings} />
        </div>
        <aside className="space-y-6">
          <IntegrationsWidget />
        </aside>
      </div>
    </main>
  )
}

function UpcomingCard({
  subject,
  basePath,
}: {
  subject: ReturnType<typeof getSubject>
  basePath: string
}) {
  const { agendaItems, addAgendaItem } = usePrototype()
  const [draft, setDraft] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addAgendaItem(draft)
    setDraft('')
  }

  return (
    <section
      aria-label="Upcoming 1-on-1"
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="flex items-center gap-3">
        <PersonAvatar
          identity={subject.id + ':' + subject.counterpartName}
          initials={subject.counterpartInitials}
          size="lg"
        />
        <div className="flex-1">
          <h2 className="text-base font-semibold text-foreground">
            Upcoming 1-on-1 with {subject.counterpartName.split(' ')[0]}
          </h2>
          <p className="text-xs text-muted-foreground">
            {subject.counterpartRole} · {formatDateLong(subject.nextOneOnOne)} at{' '}
            {formatTime(subject.nextOneOnOne)} · 30 min
          </p>
        </div>
        <Button asChild variant="primary" size="sm">
          <NextLink href={`${basePath}/meeting`}>Open canvas</NextLink>
        </Button>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Agenda
          </h3>
          <span className="text-[11px] text-muted-foreground">
            {agendaItems.length} {agendaItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {agendaItems.length === 0 ? (
          <p className="rounded-md border border-dashed border-border bg-background p-3 text-xs text-muted-foreground">
            No items yet. Add one below — it&rsquo;ll carry into the meeting canvas.
          </p>
        ) : (
          <ul className="space-y-1">
            {agendaItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm text-foreground"
              >
                <span
                  className="material-symbols-outlined text-muted-foreground"
                  style={{ fontSize: 16 }}
                  aria-hidden
                >
                  drag_indicator
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <Input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add an agenda item…"
            aria-label="New agenda item"
            className="flex-1"
          />
          <Button type="submit" variant="secondary" size="sm" disabled={!draft.trim()}>
            Add
          </Button>
        </form>
      </div>
    </section>
  )
}

function TimelineCard({ meetings }: { meetings: PastMeeting[] }) {
  return (
    <section
      aria-label="Past 1-on-1s"
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">Recent 1-on-1s</h2>
        <Button variant="secondary" size="sm">
          View all
        </Button>
      </div>

      <ol className="relative space-y-5 border-l-2 border-border pl-6">
        {meetings.map((m) => (
          <li key={m.id} className="relative">
            <span
              className="absolute -left-[33px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-border bg-card"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <div className="rounded-lg bg-background p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground">
                    {formatDateLong(m.date)}
                  </h3>
                  <Tag
                    size="24"
                    color="violet"
                    leadingIcon={
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 12 }}
                        aria-hidden
                      >
                        auto_awesome
                      </span>
                    }
                  >
                    AI summary
                  </Tag>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {m.actionItems.length}{' '}
                  {m.actionItems.length === 1 ? 'action item' : 'action items'}
                </span>
              </div>

              <TagGroup className="mb-2">
                {m.keywords.map((kw) => (
                  <Tag key={kw} size="24" color="grey">
                    {kw}
                  </Tag>
                ))}
              </TagGroup>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {m.aiSummary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

const INTEGRATION_META: Record<
  'Jira' | 'GitHub' | 'Slack',
  { icon: string; bg: string; fg: string }
> = {
  Jira: { icon: 'task_alt', bg: 'bg-info/10', fg: 'text-info' },
  GitHub: { icon: 'code', bg: 'bg-foreground/5', fg: 'text-foreground' },
  Slack: { icon: 'chat', bg: 'bg-warning/10', fg: 'text-warning' },
}

function IntegrationsWidget() {
  return (
    <section
      aria-label="Connected integrations"
      className="rounded-xl border border-border bg-card p-5"
    >
      <h2 className="mb-3 text-sm font-semibold text-foreground">Integrations</h2>
      <ul className="space-y-2">
        {MOCK_DATA.integrations.map((it) => {
          const meta = INTEGRATION_META[it.type]
          return (
            <li
              key={it.type}
              className="flex items-center gap-3 rounded-lg bg-background p-2.5"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-md ${meta.bg} ${meta.fg}`}
                aria-hidden
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 18 }}
                >
                  {meta.icon}
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-foreground">{it.type}</div>
                <div className="truncate text-[11px] text-muted-foreground">
                  {it.account}
                </div>
              </div>
              <Tag
                color={it.connected ? 'green' : 'grey'}
                size="24"
                leadingIcon={
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 12 }}
                    aria-hidden
                  >
                    {it.connected ? 'check_circle' : 'remove_circle'}
                  </span>
                }
              >
                {it.connected ? 'Connected' : 'Off'}
              </Tag>
            </li>
          )
        })}
      </ul>
      <Button variant="outline" size="sm" className="mt-3 w-full">
        Manage integrations
      </Button>
    </section>
  )
}

function SyncSkeleton() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse px-6 pb-8 pt-4">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="h-32 rounded-xl bg-muted" />
          <div className="h-64 rounded-xl bg-muted" />
        </div>
        <div className="h-48 rounded-xl bg-muted" />
      </div>
    </main>
  )
}

function SyncError() {
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
        Couldn&rsquo;t load your continuous sync
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        We hit a snag pulling integrations. Try again — or check your integration
        settings if it keeps happening.
      </p>
      <Button variant="primary" className="mt-5">
        Retry
      </Button>
    </main>
  )
}

function SyncEmpty() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <span
        className="material-symbols-outlined mx-auto block text-muted-foreground"
        style={{ fontSize: 56 }}
        aria-hidden
      >
        event_available
      </span>
      <h2 className="mt-3 text-xl font-semibold text-foreground">No 1-on-1s yet</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Schedule your first sync to start tracking momentum.
      </p>
      <Button variant="primary" className="mt-5">
        Schedule a 1-on-1
      </Button>
    </main>
  )
}

/* Tiny helper just to give the prop a typed shape for inline use. */
function getSubject(id: SyncSubjectId) {
  return MOCK_DATA.syncSubjects[id]
}
