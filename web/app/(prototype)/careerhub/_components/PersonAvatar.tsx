'use client'

/* Small wrapper around the shadcn/Octuple Avatar primitive that applies
   a deterministic per-identity color. Replaces ad-hoc `<div class="bg-primary
   …">{initials}</div>` patterns and ensures a list of avatars reads as
   "many distinct people" instead of a wall of identical primary-blue circles. */

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { avatarColorStyle } from '../_lib/avatar-colors'

export interface PersonAvatarProps {
  /** Stable identity key — id, full name, or email. Drives the color. */
  identity: string
  /** Two-letter fallback shown when no image is available. */
  initials: string
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

export function PersonAvatar({
  identity,
  initials,
  size = 'default',
  className,
}: PersonAvatarProps) {
  return (
    <Avatar size={size} className={className}>
      <AvatarFallback
        style={avatarColorStyle(identity)}
        className="font-semibold"
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
