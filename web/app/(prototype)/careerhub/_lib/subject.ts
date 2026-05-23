import type { PersonaId, SyncSubjectId } from './types'

/* Pick the right "subject" for /careerhub/team/{tab} (the non-drill-down
   routes). Alex always sees her 1-on-1 with Sam; Sam in this scope sees
   his 1-on-1 with HIS manager Pat (the "My manager" subitem path). */
export function getDefaultTeamSubject(persona: PersonaId): SyncSubjectId {
  return persona === 'alex' ? 'alex-with-sam' : 'sam-with-pat'
}

/* The four valid report IDs in the manager drill-down route segment.
   Anything else falls back to Alex (Sam's first report) so the prototype
   doesn't 404. */
export function resolveReportSubject(reportId: string): SyncSubjectId {
  if (reportId === 'jordan') return 'sam-with-jordan'
  if (reportId === 'casey') return 'sam-with-casey'
  return 'sam-with-alex'
}
