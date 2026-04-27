'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'
import './DateTimePicker.css'

export type DateTimePickerSize = 'medium' | 'large'

export interface DateTimePickerProps {
  value?: Date | null
  onChange?: (date: Date | null) => void
  /** Show time columns alongside date (default: false) */
  showTime?: boolean
  /** 'medium' (default) | 'large' */
  size?: DateTimePickerSize
  placeholder?: string
  disabled?: boolean
  /** Disables dates before this date */
  minDate?: Date
  /** Disables dates after this date */
  maxDate?: Date
  className?: string
  id?: string
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function formatDisplay(date: Date | null | undefined, showTime: boolean): string {
  if (!date) return ''
  const d = `${MONTHS[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`
  if (!showTime) return d
  const h = date.getHours()
  const m = date.getMinutes()
  const ampm = h >= 12 ? 'PM' : 'AM'
  const h12 = h % 12 || 12
  return `${d} ${h12}:${String(m).padStart(2, '0')} ${ampm}`
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
}

function isToday(d: Date): boolean {
  return isSameDay(d, new Date())
}

export function DateTimePicker({
  value,
  onChange,
  showTime = false,
  size = 'medium',
  placeholder = 'Select date',
  disabled = false,
  minDate,
  maxDate,
  className,
  id,
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [viewYear, setViewYear] = React.useState(() =>
    value ? value.getFullYear() : new Date().getFullYear()
  )
  const [viewMonth, setViewMonth] = React.useState(() =>
    value ? value.getMonth() : new Date().getMonth()
  )
  const [hour, setHour] = React.useState(() =>
    value ? value.getHours() % 12 || 12 : 12
  )
  const [minute, setMinute] = React.useState(() =>
    value ? value.getMinutes() : 0
  )
  const [ampm, setAmpm] = React.useState<'AM' | 'PM'>(() =>
    value ? (value.getHours() >= 12 ? 'PM' : 'AM') : 'AM'
  )

  // Sync view when value changes externally
  React.useEffect(() => {
    if (value) {
      setViewYear(value.getFullYear())
      setViewMonth(value.getMonth())
      setHour(value.getHours() % 12 || 12)
      setMinute(value.getMinutes())
      setAmpm(value.getHours() >= 12 ? 'PM' : 'AM')
    }
  }, [value])

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay()

  function selectDate(day: number) {
    const h24 = ampm === 'PM' ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour)
    const d = new Date(viewYear, viewMonth, day, h24, minute, 0, 0)
    onChange?.(d)
    if (!showTime) setOpen(false)
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
  }

  function isDayDisabled(day: number): boolean {
    const d = new Date(viewYear, viewMonth, day)
    if (minDate && d < minDate) return true
    if (maxDate && d > maxDate) return true
    return false
  }

  const hours = Array.from({ length: 12 }, (_, i) => i + 1)
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5)

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={disabled ? undefined : setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          id={id}
          type="button"
          disabled={disabled}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={cn(
            'ef-dtp__trigger',
            `ef-dtp__trigger--${size}`,
            !value && 'ef-dtp__trigger--placeholder',
            className
          )}
        >
          <span className="material-symbols-outlined ef-dtp__cal-icon" aria-hidden>
            calendar_today
          </span>
          <span className="ef-dtp__trigger-text">
            {value ? formatDisplay(value, showTime) : placeholder}
          </span>
          {value && (
            <button
              type="button"
              className="ef-dtp__clear"
              aria-label="Clear date"
              onClick={(e) => { e.stopPropagation(); onChange?.(null) }}
            >
              <span className="material-symbols-outlined" aria-hidden>close</span>
            </button>
          )}
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          className="ef-dtp__popover"
        >
          <div className="ef-dtp__calendar">
            {/* Month nav */}
            <div className="ef-dtp__nav">
              <button
                type="button"
                className="ef-dtp__nav-btn"
                onClick={prevMonth}
                aria-label="Previous month"
              >
                <span className="material-symbols-outlined" aria-hidden>chevron_left</span>
              </button>
              <span className="ef-dtp__month-label">
                {MONTHS[viewMonth]} {viewYear}
              </span>
              <button
                type="button"
                className="ef-dtp__nav-btn"
                onClick={nextMonth}
                aria-label="Next month"
              >
                <span className="material-symbols-outlined" aria-hidden>chevron_right</span>
              </button>
            </div>

            {/* Day headers */}
            <div className="ef-dtp__grid">
              {DAYS.map(d => (
                <span key={d} className="ef-dtp__day-header">{d}</span>
              ))}
              {/* Empty cells for offset */}
              {Array.from({ length: firstDayOfWeek }, (_, i) => (
                <span key={`e-${i}`} />
              ))}
              {/* Day cells */}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1
                const date = new Date(viewYear, viewMonth, day)
                const selected = value ? isSameDay(date, value) : false
                const today = isToday(date)
                const disabled2 = isDayDisabled(day)
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={disabled2}
                    aria-pressed={selected}
                    aria-label={`${MONTHS[viewMonth]} ${day}, ${viewYear}`}
                    className={cn(
                      'ef-dtp__day',
                      selected && 'ef-dtp__day--selected',
                      today && !selected && 'ef-dtp__day--today',
                      disabled2 && 'ef-dtp__day--disabled'
                    )}
                    onClick={() => !disabled2 && selectDate(day)}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time columns */}
          {showTime && (
            <div className="ef-dtp__time">
              <div className="ef-dtp__time-label">Time</div>
              <div className="ef-dtp__time-cols">
                {/* Hours */}
                <div className="ef-dtp__time-col">
                  {hours.map(h => (
                    <button
                      key={h}
                      type="button"
                      className={cn('ef-dtp__time-cell', h === hour && 'ef-dtp__time-cell--selected')}
                      onClick={() => setHour(h)}
                    >
                      {String(h).padStart(2, '0')}
                    </button>
                  ))}
                </div>
                <span className="ef-dtp__time-sep">:</span>
                {/* Minutes */}
                <div className="ef-dtp__time-col">
                  {minutes.map(m => (
                    <button
                      key={m}
                      type="button"
                      className={cn('ef-dtp__time-cell', m === minute && 'ef-dtp__time-cell--selected')}
                      onClick={() => setMinute(m)}
                    >
                      {String(m).padStart(2, '0')}
                    </button>
                  ))}
                </div>
                {/* AM/PM */}
                <div className="ef-dtp__time-col ef-dtp__time-col--ampm">
                  {(['AM', 'PM'] as const).map(a => (
                    <button
                      key={a}
                      type="button"
                      className={cn('ef-dtp__time-cell', a === ampm && 'ef-dtp__time-cell--selected')}
                      onClick={() => setAmpm(a)}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
