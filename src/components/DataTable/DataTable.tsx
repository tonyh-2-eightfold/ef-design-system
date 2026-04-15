import * as React from 'react'
import { cn } from '../../lib/utils'

/* ─── Sort icons (inline SVG, no external deps) ─── */

function IconUnsorted() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />
    </svg>
  )
}

function IconAsc() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

function IconDesc() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/* ─── DataTable (scroll wrapper + table) ─── */

function DataTable({
  className,
  bordered,
  children,
  ...props
}: React.ComponentProps<'table'> & {
  /** Wrap in a rounded border container */
  bordered?: boolean
}) {
  const table = (
    <div data-slot="data-table-scroll" className="relative w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
      <table
        data-slot="data-table"
        className={cn('min-w-full border-collapse text-sm', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
  if (!bordered) return table
  return (
    <div data-slot="data-table-bordered" className="rounded-xl border border-border bg-card overflow-hidden">
      {table}
    </div>
  )
}

/* ─── Header (thead) ─── */

function DataTableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="data-table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  )
}

/* ─── Body (tbody) ─── */

function DataTableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="data-table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

/* ─── Row (tr) ─── */

function DataTableRow({
  className,
  variant = 'default',
  onClick,
  ...props
}: React.ComponentProps<'tr'> & {
  variant?: 'default' | 'warn'
  onClick?: React.MouseEventHandler<HTMLTableRowElement>
}) {
  return (
    <tr
      data-slot="data-table-row"
      className={cn(
        'border-b transition-colors',
        variant === 'warn' && 'bg-amber-50/60 hover:bg-amber-50',
        variant === 'default' && 'hover:bg-muted/50',
        onClick && 'cursor-pointer',
        className,
      )}
      onClick={onClick}
      {...props}
    />
  )
}

/* ─── Head cell (th) ─── */

function DataTableHead({
  className,
  align,
  numeric,
  metric,
  shrink,
  sortable,
  sorted,
  onSort,
  children,
  ...props
}: React.ComponentProps<'th'> & {
  /** Column alignment. Defaults to 'left'; numeric columns default to 'right'. */
  align?: 'left' | 'right'
  /** Right-aligns header (shorthand for align="right") */
  numeric?: boolean
  /** Min-width for metric/progress bar columns */
  metric?: boolean
  /** Collapse width for action columns */
  shrink?: boolean
  /** Show sort indicator and make header clickable */
  sortable?: boolean
  /** Current sort direction; false or undefined = unsorted */
  sorted?: 'asc' | 'desc' | false
  /** Called when the header is clicked to toggle sort */
  onSort?: () => void
}) {
  const resolvedAlign = align ?? (numeric ? 'right' : 'left')
  const inner = sortable ? (
    <button
      type="button"
      onClick={onSort}
      className={cn(
        'inline-flex items-center gap-1.5 hover:text-foreground transition-colors',
        sorted && 'text-foreground',
      )}
    >
      {children}
      {sorted === 'asc' ? <IconAsc /> : sorted === 'desc' ? <IconDesc /> : <IconUnsorted />}
    </button>
  ) : children
  return (
    <th
      data-slot="data-table-head"
      className={cn(
        'px-5 py-2.5 text-left text-xs font-semibold text-muted-foreground uppercase tracking-[0.05em] bg-muted/50 whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        resolvedAlign === 'right' && 'text-right',
        metric && 'min-w-[108px]',
        shrink && 'w-[1%] pl-3 pr-5',
        className,
      )}
      {...props}
    >
      {inner}
    </th>
  )
}

/* ─── Cell (td) ─── */

function DataTableCell({
  className,
  align = 'left',
  metric,
  numeric,
  ...props
}: React.ComponentProps<'td'> & {
  align?: 'left' | 'right'
  /** Min-width for metric/progress bar columns */
  metric?: boolean
  /** Tabular-nums for numeric values */
  numeric?: boolean
}) {
  return (
    <td
      data-slot="data-table-cell"
      className={cn(
        'px-5 py-3 align-middle whitespace-nowrap text-sm text-foreground [&:has([role=checkbox])]:pr-0',
        align === 'right' && 'text-right',
        metric && 'min-w-[108px]',
        numeric && 'tabular-nums',
        className,
      )}
      {...props}
    />
  )
}

export {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableHead,
  DataTableCell,
}
