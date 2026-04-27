import * as React from 'react'
import { cn } from '@/lib/utils'
import './Timeline.css'

/* ─── TimelineItem ─────────────────────────────────────────────────────── */

export type TimelineItemStatus = 'completed' | 'current' | 'upcoming' | 'error'

export interface TimelineItemProps {
  title: React.ReactNode
  description?: React.ReactNode
  /** Timestamp / date string shown at right */
  timestamp?: React.ReactNode
  status?: TimelineItemStatus
  /** Custom icon inside the node dot (Material Symbol name) */
  icon?: string
  /** Override the node with a custom element */
  nodeContent?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

const STATUS_ICONS: Record<TimelineItemStatus, string> = {
  completed: 'check',
  current: 'radio_button_checked',
  upcoming: 'radio_button_unchecked',
  error: 'close',
}

export function TimelineItem({
  title,
  description,
  timestamp,
  status = 'upcoming',
  icon,
  nodeContent,
  className,
  children,
}: TimelineItemProps) {
  return (
    <li
      data-status={status}
      className={cn('ef-timeline-item', `ef-timeline-item--${status}`, className)}
    >
      {/* Node column */}
      <div className="ef-timeline-item__node-col" aria-hidden>
        <div className="ef-timeline-item__node">
          {nodeContent ?? (
            <span className="material-symbols-outlined ef-timeline-item__node-icon">
              {icon ?? STATUS_ICONS[status]}
            </span>
          )}
        </div>
        <div className="ef-timeline-item__connector" />
      </div>

      {/* Content column */}
      <div className="ef-timeline-item__content">
        <div className="ef-timeline-item__header">
          <span className="ef-timeline-item__title">{title}</span>
          {timestamp && (
            <span className="ef-timeline-item__timestamp">{timestamp}</span>
          )}
        </div>
        {description && (
          <p className="ef-timeline-item__description">{description}</p>
        )}
        {children && (
          <div className="ef-timeline-item__body">{children}</div>
        )}
      </div>
    </li>
  )
}

/* ─── Timeline ─────────────────────────────────────────────────────────── */

export interface TimelineProps {
  children: React.ReactNode
  className?: string
  /** aria-label for the list */
  label?: string
}

export function Timeline({ children, className, label = 'Activity timeline' }: TimelineProps) {
  return (
    <ol
      aria-label={label}
      className={cn('ef-timeline', className)}
    >
      {children}
    </ol>
  )
}
