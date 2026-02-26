import type { ReactNode } from 'react'
import './Pill.css'

export type PillVariant = 'neutral' | 'critical' | 'empty' | 'orange' | 'blueGreen'
export type PillSize = 'small' | 'medium' | 'large'

export interface PillProps {
  icon?: string
  children: ReactNode
  variant?: PillVariant
  size?: PillSize
  className?: string
}

export function Pill({ icon, children, variant = 'neutral', size = 'medium', className = '' }: PillProps) {
  return (
    <span className={`pill pill--${variant} pill--${size} ${className}`.trim()}>
      {icon && <span className="material-symbols-outlined pill__icon">{icon}</span>}
      {children}
    </span>
  )
}
