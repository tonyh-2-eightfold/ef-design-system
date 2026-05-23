'use client'

import { Button, Tag } from '@tonyh-2-eightfold/ef-design-system'
import { usePrototype } from '../../_lib/PrototypeContext'
import { getDefaultTeamSubject } from '../../_lib/subject'
import { MeetingCanvas } from '../../_features/MeetingCanvas'
import { TeamScreenLayout } from '../../_components/TeamScreenLayout'

export default function TeamMeetingPage() {
  const { persona } = usePrototype()
  const subjectId = getDefaultTeamSubject(persona)

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
    <TeamScreenLayout
      subjectId={subjectId}
      basePath="/careerhub/team"
      actions={actions}
    >
      <MeetingCanvas subjectId={subjectId} />
    </TeamScreenLayout>
  )
}
