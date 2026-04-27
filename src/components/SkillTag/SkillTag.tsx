import * as React from 'react'
import { cn } from '@/lib/utils'
import './SkillTag.css'

export type SkillTagSize = 'sm' | 'md' | 'lg'
export type SkillTagVariant = 'default' | 'matched' | 'highlighted'
export type SkillTagAction = 'none' | 'add' | 'save' | 'endorse'
export type SkillTagTrend = 'exceed' | 'meet' | 'below'

export interface SkillTagProps extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children'> {
  children: React.ReactNode
  /** @default 'md' */
  size?: SkillTagSize
  /** @default 'default' */
  variant?: SkillTagVariant
  /** Action button type shown on the right */
  action?: SkillTagAction
  /** Whether the action is in its "after" state (added, saved, endorsed) */
  active?: boolean
  /** Endorse count — shown when action="endorse" */
  endorseCount?: number
  /** Trend indicator shown before the label */
  trend?: SkillTagTrend
  /** Show upskilling arrow alongside trend */
  upskilling?: boolean
  /** Click handler for the action button */
  onAction?: () => void
}

function TrendIcon({ trend, size }: { trend: SkillTagTrend; size: SkillTagSize }) {
  const iconSize = size === 'lg' ? 20 : size === 'md' ? 18 : 14
  const circleSize = size === 'lg' ? 28 : size === 'md' ? 24 : 20
  const icon = trend === 'exceed' ? 'arrow_upward' : trend === 'meet' ? 'remove' : 'arrow_downward'

  return (
    <span
      className={cn('skill-tag__trend', `skill-tag__trend--${trend}`)}
      style={{ width: circleSize, height: circleSize }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: iconSize }} aria-hidden>
        {icon}
      </span>
    </span>
  )
}

function UpskillingIcon({ size }: { size: SkillTagSize }) {
  const iconSize = size === 'lg' ? 20 : size === 'md' ? 18 : 14
  const circleSize = size === 'lg' ? 28 : size === 'md' ? 24 : 20

  return (
    <span
      className="skill-tag__trend skill-tag__trend--upskilling"
      style={{ width: circleSize, height: circleSize }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: iconSize }} aria-hidden>
        trending_up
      </span>
    </span>
  )
}

const SkillTag = React.forwardRef<HTMLSpanElement, SkillTagProps>(
  ({
    className,
    children,
    size = 'md',
    variant = 'default',
    action = 'none',
    active = false,
    endorseCount,
    trend,
    upskilling = false,
    onAction,
    ...props
  }, ref) => {
    const actionIconSize = size === 'lg' ? 20 : size === 'md' ? 18 : 14

    return (
      <span
        ref={ref}
        data-slot="skill-tag"
        className={cn(
          'skill-tag',
          `skill-tag--${size}`,
          `skill-tag--${variant}`,
          active && 'skill-tag--active',
          className
        )}
        {...props}
      >
        {/* Leading icon for variant */}
        {variant === 'matched' && (
          <span className="skill-tag__leading skill-tag__leading--matched">
            <span className="material-symbols-outlined" style={{ fontSize: actionIconSize }} aria-hidden>
              check
            </span>
          </span>
        )}
        {variant === 'highlighted' && (
          <span className="skill-tag__leading skill-tag__leading--highlighted">
            <span className="material-symbols-outlined" style={{ fontSize: actionIconSize }} aria-hidden>
              star
            </span>
          </span>
        )}

        {/* Trend indicators */}
        {trend && <TrendIcon trend={trend} size={size} />}
        {trend && upskilling && <UpskillingIcon size={size} />}

        {/* Label */}
        <span className="skill-tag__label">{children}</span>

        {/* Action: add */}
        {action === 'add' && (
          <button
            type="button"
            className="skill-tag__action-btn"
            onClick={onAction}
            aria-label={active ? 'Remove' : 'Add'}
          >
            <span className="material-symbols-outlined" style={{ fontSize: actionIconSize }} aria-hidden>
              {active ? 'close' : 'add'}
            </span>
          </button>
        )}

        {/* Action: save */}
        {action === 'save' && (
          <button
            type="button"
            className="skill-tag__action-btn"
            onClick={onAction}
            aria-label={active ? 'Unsave' : 'Save'}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: actionIconSize,
                fontVariationSettings: active
                  ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
              aria-hidden
            >
              bookmark
            </span>
          </button>
        )}

        {/* Action: endorse */}
        {action === 'endorse' && (
          <button
            type="button"
            className="skill-tag__action-btn skill-tag__action-btn--endorse"
            onClick={onAction}
            aria-label="Endorse"
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: actionIconSize,
                fontVariationSettings: active
                  ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
              aria-hidden
            >
              thumb_up
            </span>
            {endorseCount != null && (
              <span className="skill-tag__endorse-count">{endorseCount}</span>
            )}
          </button>
        )}
      </span>
    )
  }
)
SkillTag.displayName = 'SkillTag'

export { SkillTag }
