import * as React from 'react'
import { cn } from '@/lib/utils'

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
        className={cn('w-full border-collapse text-sm', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
  if (!bordered) return table
  return (
    <div data-slot="data-table-bordered" className="rounded-xl border border-[#e5e7eb] bg-white overflow-hidden">
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
        'border-b border-[#f1f5f9] transition-colors',
        variant === 'warn' && '',
        onClick && 'cursor-pointer hover:bg-[#fafbff]',
        !onClick && 'hover:bg-muted/50',
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
  /** Marks the column as sortable. Renders the header content as a clickable button and adds aria-sort. */
  sortable?: boolean
  /** Current sort direction for this column. `false` = not sorted. */
  sorted?: 'asc' | 'desc' | false
  /** Click handler when the user toggles sort on this column. Required when sortable. */
  onSort?: () => void
}) {
  const resolvedAlign = align ?? (numeric ? 'right' : 'left')
  const ariaSort = sortable
    ? sorted === 'asc'
      ? 'ascending'
      : sorted === 'desc'
        ? 'descending'
        : 'none'
    : undefined
  return (
    <th
      data-slot="data-table-head"
      aria-sort={ariaSort}
      className={cn(
        'px-5 py-2.5 text-left font-[var(--typography-caption-semibold)] text-[color:#64748b] uppercase tracking-[0.05em] text-xs font-semibold bg-[#f8fafc] whitespace-nowrap',
        resolvedAlign === 'right' && 'text-right',
        metric && 'min-w-[108px]',
        shrink && 'w-[1%] pl-3 pr-5',
        className,
      )}
      {...props}
    >
      {sortable ? (
        <button
          type="button"
          onClick={onSort}
          className={cn(
            'inline-flex items-center gap-1 select-none cursor-pointer bg-transparent border-0 p-0 m-0 font-inherit color-inherit text-inherit uppercase tracking-inherit',
            resolvedAlign === 'right' && 'flex-row-reverse',
          )}
          aria-label={
            sorted === 'asc'
              ? 'Sorted ascending; click to sort descending'
              : sorted === 'desc'
                ? 'Sorted descending; click to clear sort'
                : 'Not sorted; click to sort ascending'
          }
        >
          {children}
          <span aria-hidden className="opacity-60 text-[10px]">
            {sorted === 'asc' ? '▲' : sorted === 'desc' ? '▼' : '↕'}
          </span>
        </button>
      ) : (
        children
      )}
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
        'px-5 py-3 align-middle whitespace-nowrap text-sm text-[#0f172a]',
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
