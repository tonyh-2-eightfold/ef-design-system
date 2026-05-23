'use client'

import { use } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tag,
} from '@tonyh-2-eightfold/ef-design-system'
import { PerformanceHub } from '../../../../_features/PerformanceHub'
import { TeamScreenLayout } from '../../../../_components/TeamScreenLayout'
import { resolveReportSubject } from '../../../../_lib/subject'
import { usePrototype } from '../../../../_lib/PrototypeContext'

export default function ReportReviewPage({
  params,
}: {
  params: Promise<{ reportId: string }>
}) {
  const { reportId } = use(params)
  const subjectId = resolveReportSubject(reportId)
  const basePath = `/careerhub/team/members/${reportId}`
  const { timeframe, setTimeframe } = usePrototype()

  const actions = (
    <div className="flex items-center gap-3">
      <Tag
        size="30"
        color="violet"
        leadingIcon={
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 14 }}
            aria-hidden
          >
            auto_awesome
          </span>
        }
      >
        AI-drafted from 12 weeks of 1-on-1s
      </Tag>
      <Select
        value={timeframe}
        onValueChange={(v) => setTimeframe(v as 'q1' | 'mid-year' | 'annual')}
      >
        <SelectTrigger
          size="sm"
          variant="outline"
          aria-label="Timeframe"
          className="bg-white hover:bg-white/90"
        >
          <SelectValue placeholder="Pick a timeframe" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="q1">Q1 check-in</SelectItem>
          <SelectItem value="mid-year">Mid-year review</SelectItem>
          <SelectItem value="annual">Annual review</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )

  return (
    <TeamScreenLayout subjectId={subjectId} basePath={basePath} actions={actions}>
      <PerformanceHub subjectId={subjectId} />
    </TeamScreenLayout>
  )
}
