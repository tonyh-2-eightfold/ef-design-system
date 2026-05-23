/* Deterministic avatar color picker.
   Hashes a stable input (id or initials) to one of Octuple's -70 colors
   so each person gets a recognizable but distinct fill. We render the
   foreground as the matching -10 (very light) shade for legible contrast.

   Used wherever an avatar shows initials so the team list reads as
   "many people" instead of a wall of identical primary-blue circles. */

const PALETTE: { bg: string; fg: string }[] = [
  { bg: 'var(--color-blue-70)', fg: 'var(--color-blue-10)' },
  { bg: 'var(--color-violet-70)', fg: 'var(--color-violet-10)' },
  { bg: 'var(--color-red-70)', fg: 'var(--color-red-10)' },
  { bg: 'var(--color-orange-70)', fg: 'var(--color-orange-10)' },
  { bg: 'var(--color-green-70)', fg: 'var(--color-green-10)' },
  { bg: 'var(--color-blue-green-70)', fg: 'var(--color-blue-green-10)' },
  { bg: 'var(--color-grey-70)', fg: 'var(--color-grey-10)' },
]

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

export function avatarColor(key: string): { bg: string; fg: string } {
  return PALETTE[hash(key) % PALETTE.length]
}

/* Style object for inline application on the AvatarFallback. */
export function avatarColorStyle(key: string): {
  backgroundColor: string
  color: string
} {
  const c = avatarColor(key)
  return { backgroundColor: c.bg, color: c.fg }
}
