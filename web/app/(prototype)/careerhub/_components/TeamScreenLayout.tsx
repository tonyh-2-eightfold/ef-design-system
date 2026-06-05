'use client'

/* Shared layout for the 3 sub-tab screens.
   Renders the CareerHubShell with a subject-aware title, the sub-tab nav,
   then the page content. Used by every route under /careerhub/team that
   isn't the team list itself. */

import type { ReactNode } from 'react'
import { PrototypeShell } from './PrototypeShell'
import { TeamSubTabs } from './TeamSubTabs'
import { MOCK_DATA } from '../_lib/mock-data'
import { formatRelativeFromNow, formatTime } from '../_lib/format'
import type { SyncSubjectId } from '../_lib/types'

export interface TeamScreenLayoutProps {
  subjectId: SyncSubjectId
  basePath: string
  /** Optional page-level header actions (e.g., "End & save" on Meeting canvas). */
  actions?: ReactNode
  /** Title override when the default counterpart-name title isn't a fit. */
  titleOverride?: ReactNode
  /** Secondary override (defaults to "next 1-on-1 …"). */
  secondaryOverride?: ReactNode
  children: ReactNode
}

export function TeamScreenLayout({
  subjectId,
  basePath,
  actions,
  titleOverride,
  secondaryOverride,
  children,
}: TeamScreenLayoutProps) {
  const subject = MOCK_DATA.syncSubjects[subjectId]
  const title = titleOverride ?? subject.counterpartName
  const secondary =
    secondaryOverride ??
    `${subject.counterpartRole} · next 1-on-1 ${formatRelativeFromNow(
      subject.nextOneOnOne
    )} at ${formatTime(subject.nextOneOnOne)}`

  return (
    <PrototypeShell title={title} secondary={secondary} actions={actions}>
      <TeamSubTabs basePath={basePath} />
      {children}
    </PrototypeShell>
  )
}
