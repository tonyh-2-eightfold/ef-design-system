/**
 * formatDate — locale-aware date formatting for all UI display strings.
 *
 * Always use these functions instead of hardcoding date strings.
 * Locale is resolved from: explicit argument → i18next.language → browser navigator.language → 'en'
 *
 * Usage:
 *   import { formatDate, formatDateShort, formatDateRelative } from '@/lib/formatDate'
 *   formatDate(new Date())           // "March 5, 2025"    (en-US)
 *   formatDate(new Date(), 'ja')     // "2025年3月5日"      (ja)
 *   formatDateShort(new Date())      // "Mar 5, 2025"      (en-US)
 *   formatDateRelative(new Date())   // "3 days ago"       (en-US)
 */

import i18n from 'i18next'

// ---------------------------------------------------------------------------
// Locale resolver
// ---------------------------------------------------------------------------

/**
 * Returns the active locale string for Intl APIs.
 * Priority: explicit arg → i18next active language → browser → fallback 'en'
 */
export function resolveLocale(locale?: string): string {
  return (
    locale ??
    (i18n.isInitialized ? i18n.language : undefined) ??
    (typeof navigator !== 'undefined' ? navigator.language : undefined) ??
    'en'
  )
}

// ---------------------------------------------------------------------------
// Prose date  — "March 5, 2025" / "5 March 2025" / "2025年3月5日"
// ---------------------------------------------------------------------------

/**
 * Long-form date for prose, headings, and detail views.
 * Renders as the locale's natural long format.
 *
 * en-US → "March 5, 2025"
 * en-GB → "5 March 2025"
 * ja    → "2025年3月5日"
 * de    → "5. März 2025"
 */
export function formatDate(date: Date | string | number, locale?: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(resolveLocale(locale), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

// ---------------------------------------------------------------------------
// Short date  — "Mar 5, 2025" / "5 Mar 2025" / "5 mars 2025"
// ---------------------------------------------------------------------------

/**
 * Compact date for tables, cards, and data-dense UI.
 * Uses abbreviated month name.
 *
 * en-US → "Mar 5, 2025"
 * en-GB → "5 Mar 2025"
 * fr    → "5 mars 2025"
 */
export function formatDateShort(date: Date | string | number, locale?: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(resolveLocale(locale), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d)
}

// ---------------------------------------------------------------------------
// Numeric date  — "03/05/2025" (US) / "05/03/2025" (EU) / "2025/03/05" (JP)
// ---------------------------------------------------------------------------

/**
 * Numeric date for dense data tables and exports.
 * The separator and ordering are locale-determined automatically.
 *
 * en-US → "3/5/2025"
 * en-GB → "05/03/2025"
 * ja    → "2025/3/5"
 */
export function formatDateNumeric(date: Date | string | number, locale?: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(resolveLocale(locale), {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(d)
}

// ---------------------------------------------------------------------------
// Date + time  — "March 5, 2025, 2:30 PM" / "5 March 2025 at 14:30"
// ---------------------------------------------------------------------------

/**
 * Full date with time for timestamps, audit logs, and activity feeds.
 *
 * en-US → "March 5, 2025 at 2:30 PM"
 * en-GB → "5 March 2025 at 14:30"
 * de    → "5. März 2025 um 14:30"
 */
export function formatDateTime(date: Date | string | number, locale?: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(resolveLocale(locale), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d)
}

// ---------------------------------------------------------------------------
// Relative date  — "3 days ago" / "just now" / "in 2 months"
// ---------------------------------------------------------------------------

/**
 * Human-relative time for feeds, notifications, and "last updated" labels.
 * Automatically switches to formatDateShort() when the gap exceeds 30 days
 * (configurable via the `absoluteThresholdDays` option).
 *
 * en-US → "3 days ago" / "just now" / "yesterday" / "in 2 hours"
 * fr    → "il y a 3 jours" / "à l'instant"
 * ja    → "3日前"
 *
 * @param absoluteThresholdDays  Switch to absolute format after this many days (default: 30)
 */
export function formatDateRelative(
  date: Date | string | number,
  locale?: string,
  { absoluteThresholdDays = 30 }: { absoluteThresholdDays?: number } = {},
): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''

  const resolvedLocale = resolveLocale(locale)
  const diffMs = d.getTime() - Date.now()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)

  if (Math.abs(diffDays) > absoluteThresholdDays) {
    return formatDateShort(d, resolvedLocale)
  }

  // Intl.RelativeTimeFormat picks the most natural unit automatically
  const rtf = new Intl.RelativeTimeFormat(resolvedLocale, { numeric: 'auto' })

  const absDiffSecs = Math.abs(diffMs) / 1000
  if (absDiffSecs < 60) return rtf.format(Math.round(diffMs / 1000), 'second')
  if (absDiffSecs < 3600) return rtf.format(Math.round(diffMs / 60000), 'minute')
  if (absDiffSecs < 86400) return rtf.format(Math.round(diffMs / 3600000), 'hour')
  return rtf.format(Math.round(diffMs / 86400000), 'day')
}

// ---------------------------------------------------------------------------
// Month + year only  — "March 2025" / "März 2025" / "2025年3月"
// ---------------------------------------------------------------------------

/**
 * Month and year without a day — for period headers, chart axes, filters.
 *
 * en-US → "March 2025"
 * de    → "März 2025"
 * ja    → "2025年3月"
 */
export function formatMonthYear(date: Date | string | number, locale?: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(resolveLocale(locale), {
    year: 'numeric',
    month: 'long',
  }).format(d)
}

// ---------------------------------------------------------------------------
// Year only  — "2025"
// ---------------------------------------------------------------------------

export function formatYear(date: Date | string | number, locale?: string): string {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat(resolveLocale(locale), { year: 'numeric' }).format(d)
}
