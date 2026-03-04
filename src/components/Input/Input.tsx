import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import './Input.css'

export type InputSize = 'small' | 'medium' | 'large'

export type InputState = 'default' | 'error' | 'warning' | 'success'

/** Shape variant from Octuple DS: rounded (12/10/8px radius) or pill (24px capsule) */
export type InputShape = 'rounded' | 'pill'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** small (4px 8px), medium (6px 10px), large (10px 12px) - Octuple DS */
  size?: InputSize
  /** Rounded corner (default) or pill shaped - Figma 14335-55533 */
  shape?: InputShape
  /** Visual state: border/background highlight */
  state?: InputState
  /** Icon before the input: Material Symbol name (e.g. "search") or custom ReactNode */
  leadingIcon?: ReactNode | string
  /** Icon after the input: Material Symbol name (e.g. "close") or custom ReactNode */
  trailingIcon?: ReactNode | string
  /** Called when trailing clear action is used; often used with trailingIcon */
  onClear?: () => void
  /** Optional class for the wrapper */
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'medium',
    shape = 'rounded',
    state = 'default',
    leadingIcon,
    trailingIcon,
    onClear,
    className = '',
    disabled,
    type = 'text',
    ...inputProps
  },
  ref
) {
  const wrapperClass = [
    'input',
    `input--${size}`,
    `input--${shape}`,
    state !== 'default' && `input--${state}`,
    disabled && 'input--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const renderIcon = (icon: ReactNode | string) =>
    typeof icon === 'string' ? (
      <span className="material-symbols-outlined">{icon}</span>
    ) : (
      icon
    )

  return (
    <div className={wrapperClass}>
      {leadingIcon != null && (
        <span className="input__leading-icon" aria-hidden>{renderIcon(leadingIcon)}</span>
      )}
      <input
        ref={ref}
        type={type}
        className="input__field"
        disabled={disabled}
        aria-invalid={state === 'error' ? true : undefined}
        {...inputProps}
      />
      {(trailingIcon != null || onClear) && (
        <span className="input__trailing">
          {onClear ? (
            <button
              type="button"
              className="input__clear"
              onClick={onClear}
              disabled={disabled}
              aria-label="Clear"
            >
              {trailingIcon != null ? renderIcon(trailingIcon) : <span className="material-symbols-outlined">close</span>}
            </button>
          ) : (
            <span className="input__trailing-icon" aria-hidden>{renderIcon(trailingIcon!)}</span>
          )}
        </span>
      )}
    </div>
  )
})
