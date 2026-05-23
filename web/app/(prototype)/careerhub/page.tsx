import { redirect } from 'next/navigation'

/* /careerhub → /careerhub/team/sync so the bare URL lands somewhere useful. */
export default function CareerHubIndex() {
  redirect('/careerhub/team/sync')
}
