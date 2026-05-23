'use client'

import { use } from 'react'
import { ContinuousSync } from '../../../../_features/ContinuousSync'
import { TeamScreenLayout } from '../../../../_components/TeamScreenLayout'
import { resolveReportSubject } from '../../../../_lib/subject'

export default function ReportSyncPage({
  params,
}: {
  params: Promise<{ reportId: string }>
}) {
  const { reportId } = use(params)
  const subjectId = resolveReportSubject(reportId)
  const basePath = `/careerhub/team/members/${reportId}`
  return (
    <TeamScreenLayout subjectId={subjectId} basePath={basePath}>
      <ContinuousSync subjectId={subjectId} basePath={basePath} />
    </TeamScreenLayout>
  )
}
