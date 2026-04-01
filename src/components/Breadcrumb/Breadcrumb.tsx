/**
 * Octuple DS Theme 2 — Breadcrumb
 * @see https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-?node-id=10130-66481
 * Body3-semibold links, chevron separators, current page in bold.
 */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/utils'

const listClass =
  'm-0 flex list-none flex-wrap items-center gap-0 p-0 break-words'

const itemClass = 'inline-flex items-center'

/** Body3-semibold link — neutral gray with hover underline */
const linkClass =
  'rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[#4f5666] bg-transparent border-none cursor-pointer p-0 no-underline transition-colors hover:text-[#1a212e] hover:underline hover:[text-underline-offset:2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background'

/** Current page — bold dark text, non-interactive */
const pageClass =
  'text-[length:14px] font-bold leading-[1.43] text-[#1a212e]'

const separatorClass =
  'inline-flex shrink-0 select-none items-center justify-center text-[#94a3b8] mx-1.5 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:shrink-0'

function Breadcrumb({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn('flex h-14 w-full items-center', className)}
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

export interface BreadcrumbLinkProps extends React.ComponentProps<'button'> {
  asChild?: boolean
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="breadcrumb-link"
      type={asChild ? undefined : 'button'}
      className={cn(linkClass, className)}
      {...props}
    />
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
      {children ?? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
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
