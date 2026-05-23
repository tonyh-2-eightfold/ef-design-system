'use client'

import NextLink from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Tag } from '@tonyh-2-eightfold/ef-design-system'
import { PrototypeShell } from '../_components/PrototypeShell'
import { PersonAvatar } from '../_components/PersonAvatar'
import { usePrototype } from '../_lib/PrototypeContext'
import { MOCK_DATA } from '../_lib/mock-data'
import { formatRelativeFromNow } from '../_lib/format'

/* /careerhub/team — the "Team" landing page.
   - For Sam (manager): lists his direct reports as a roster. Clicking one
     deep-links into that report's continuous sync.
   - For Alex (no reports): she shouldn't normally land here (her Team tab
     points directly to /careerhub/team/sync), but if she does we redirect
     to keep things consistent. Redirect is in useEffect so it waits for
     localStorage hydration to settle the persona. */

export default function TeamLandingPage() {
  const { persona, hydrated } = usePrototype()
  const router = useRouter()

  useEffect(() => {
    if (hydrated && persona === 'alex') {
      router.replace('/careerhub/team/sync')
    }
  }, [hydrated, persona, router])

  if (!hydrated || persona === 'alex') {
    return null
  }

  return (
    <PrototypeShell
      title="My team"
      secondary={`${MOCK_DATA.directReports.length} direct reports · click into a report to see their continuous sync, meeting canvas, and review hub.`}
    >
      <main className="mx-auto max-w-7xl px-6 py-8">
        <section
          aria-label="Direct reports"
          className="rounded-xl border border-border bg-card p-5"
        >
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_DATA.directReports.map((dr) => {
              const tagColor =
                dr.status === 'on-track'
                  ? 'green'
                  : dr.status === 'attention'
                  ? 'orange'
                  : 'red'
              const statusLabel =
                dr.status === 'on-track'
                  ? 'On track'
                  : dr.status === 'attention'
                  ? 'Attention'
                  : 'Blocked'
              return (
                <li key={dr.id} className="rounded-lg bg-background p-4">
                  <div className="flex items-center gap-3">
                    <PersonAvatar
                      identity={dr.id + ':' + dr.name}
                      initials={dr.avatarInitials}
                      size="lg"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium text-foreground">
                        {dr.name}
                      </div>
                      <div className="truncate text-xs text-muted-foreground">
                        {dr.role}
                      </div>
                    </div>
                    <Tag color={tagColor} size="24">
                      {statusLabel}
                    </Tag>
                  </div>

                  <dl className="mt-3 space-y-1 text-[11px] text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <dt>Next 1-on-1</dt>
                      <dd className="font-medium text-foreground">
                        {formatRelativeFromNow(dr.nextOneOnOne)}
                      </dd>
                    </div>
                    {dr.pendingActionItems > 0 && (
                      <div className="flex items-center justify-between">
                        <dt>Pending action items</dt>
                        <dd className="font-medium text-foreground">
                          {dr.pendingActionItems}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <Button asChild variant="secondary" size="sm" className="mt-4 w-full">
                    <NextLink href={`/careerhub/team/members/${dr.id}/sync`}>
                      Open sync
                    </NextLink>
                  </Button>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </PrototypeShell>
  )
}
