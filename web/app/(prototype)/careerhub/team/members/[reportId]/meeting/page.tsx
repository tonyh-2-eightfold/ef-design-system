'use client'

import { use } from 'react'
import { Button, Tag } from '@tonyh-2-eightfold/ef-design-system'
import { MeetingCanvas } from '../../../../_features/MeetingCanvas'
import { TeamScreenLayout } from '../../../../_components/TeamScreenLayout'
import { resolveReportSubject } from '../../../../_lib/subject'

export default function ReportMeetingPage({
  params,
}: {
  params: Promise<{ reportId: string }>
}) {
  const { reportId } = use(params)
  const subjectId = resolveReportSubject(reportId)
  const basePath = `/careerhub/team/members/${reportId}`

  const actions = (
    <div className="flex items-center gap-2">
      <Tag
        size="30"
        color="green"
        leadingIcon={
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 14 }}
            aria-hidden
          >
            circle
          </span>
        }
      >
        Live canvas
      </Tag>
      <Button variant="secondary" size="sm">
        Share notes
      </Button>
      <Button variant="primary" size="sm">
        End and save
      </Button>
    </div>
  )

  return (
    <TeamScreenLayout subjectId={subjectId} basePath={basePath} actions={actions}>
      <MeetingCanvas subjectId={subjectId} />
    </TeamScreenLayout>
  )
}
