import type { ReactNode } from 'react'
import './SkillTag.css'

export type SkillTagVariant = 'selected' | 'addable'

export interface SkillTagProps {
  children: ReactNode
  variant?: SkillTagVariant
  onRemove?: () => void
  onAdd?: () => void
  className?: string
}

export function SkillTag({ children, variant = 'selected', onRemove, onAdd, className = '' }: SkillTagProps) {
  const baseClass = `skill-tag skill-tag--${variant} ${className}`.trim()

  if (variant === 'addable') {
    return (
      <button type="button" className={baseClass} onClick={onAdd}>
        {children}
        <span className="material-symbols-outlined skill-tag__action">add</span>
      </button>
    )
  }

  return (
    <span className={baseClass}>
      {children}
      {onRemove && (
        <button
          type="button"
          className="skill-tag__remove"
          onClick={onRemove}
          aria-label={`Remove ${children}`}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </span>
  )
}
