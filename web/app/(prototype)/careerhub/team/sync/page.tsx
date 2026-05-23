'use client'

import { usePrototype } from '../../_lib/PrototypeContext'
import { getDefaultTeamSubject } from '../../_lib/subject'
import { ContinuousSync } from '../../_features/ContinuousSync'
import { TeamScreenLayout } from '../../_components/TeamScreenLayout'

export default function TeamSyncPage() {
  const { persona } = usePrototype()
  const subjectId = getDefaultTeamSubject(persona)
  return (
    <TeamScreenLayout subjectId={subjectId} basePath="/careerhub/team">
      <ContinuousSync subjectId={subjectId} basePath="/careerhub/team" />
    </TeamScreenLayout>
  )
}
