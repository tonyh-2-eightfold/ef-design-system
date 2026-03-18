/**
 * Octuple DS Theme 2 — Breadcrumb
 * @see https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-?node-id=10130-66481
 * Body3-semibold links (#146DA6), slash separators (tertiary grey, 20px), current page Body3 + default text.
 */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/utils'

const listClass =
  'm-0 flex list-none flex-wrap items-center gap-1 p-0 break-words sm:gap-1'

const itemClass = 'inline-flex items-center gap-1'

/** Body3-semibold + link primary (Figma Link Colors / $link-primary) */
const linkClass =
  'rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[var(--color-blue-70)] no-underline transition-colors hover:text-[var(--color-blue-80)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/** Body3 + default text (current page) */
const pageClass =
  'text-[length:14px] font-medium leading-[1.43] text-[var(--foreground)]'

const separatorClass =
  'inline-flex size-5 shrink-0 select-none items-center justify-center text-center text-[20px] font-normal leading-none text-[var(--color-grey-60)] [&>svg]:size-5 [&>svg]:shrink-0'

function Breadcrumb({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return <ol data-slot="breadcrumb-list" className={cn(listClass, className)} {...props} />
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="breadcrumb-item" className={cn(itemClass, className)} {...props} />
}

export interface BreadcrumbLinkProps extends React.ComponentProps<'a'> {
  asChild?: boolean
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp data-slot="breadcrumb-link" className={cn(linkClass, className)} {...props} />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(pageClass, className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(separatorClass, className)}
      {...props}
    >
      {children ?? '/'}
    </li>
  )
}

/** Figma truncated: Body3-semibold, link primary (often paired with dropdown). */
function BreadcrumbEllipsis({ className, children, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      className={cn(linkClass, className)}
      {...props}
    >
      {children ?? '…'}
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
