import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { HeaderChromeContext, useHeaderChrome } from './header-context'
import './HeaderTitle.css'
import type { CareerHubHeaderSize } from './header-types'

export type { CareerHubHeaderSize, HeaderVariant } from './header-types'

const headerRootVariants = cva(
  'w-full shrink-0 border-b border-[transparent] transition-colors',
  {
    variants: {
      variant: {
        'talent-acquisition':
          'border-b-[var(--color-blue-70)] bg-[var(--background)] [border-bottom-width:2px]',
        'career-hub':
          'border-b-[var(--border)] bg-[var(--color-background1-grey)]/60',
      },
    },
    defaultVariants: {
      variant: 'career-hub',
    },
  }
)

export interface HeaderProps
  extends React.ComponentPropsWithoutRef<'header'>,
    VariantProps<typeof headerRootVariants> {
  /** Pin below the viewport top (e.g. under a fixed Navbar). */
  sticky?: boolean
  /**
   * Career Hub only. Toolbar height: **parent** 160px, **child** 116px (width = 100% of container).
   * **profile** uses `--header-career-hub-profile-height` (default 408px). Ignored for Talent Acquisition.
   */
  chSize?: CareerHubHeaderSize
}

/**
 * Page header below the Navbar.
 * - **talent-acquisition**: blue bottom rule.
 * - **career-hub**: muted bar; use **chSize** `profile` | `parent` | `child`.
 */
const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, chSize = 'parent', sticky = false, ...props }, ref) => {
    const v = variant ?? 'career-hub'
    const chrome: React.ContextType<typeof HeaderChromeContext> = {
      variant: v,
      careerHubSize: v === 'career-hub' ? chSize : 'parent',
    }
    return (
      <HeaderChromeContext.Provider value={chrome}>
        <header
          ref={ref}
          data-slot="header"
          data-variant={v}
          data-ch-size={v === 'career-hub' ? chSize : undefined}
          className={cn(
            headerRootVariants({ variant: v }),
            sticky &&
              'sticky top-0 z-30 backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--background)]/95',
            v === 'career-hub' &&
              sticky &&
              'supports-[backdrop-filter]:bg-[var(--color-background1-grey)]/80',
            className
          )}
          {...props}
        />
      </HeaderChromeContext.Provider>
    )
  }
)
Header.displayName = 'Header'

/** Career Hub toolbar: fixed height, `w-full` (variable width = container). */
const toolbarCareerHub = {
  profile:
    'h-[var(--header-career-hub-profile-height)] min-h-[var(--header-career-hub-profile-height)] flex-wrap content-center gap-y-3 py-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:py-6 md:gap-5',
  parent:
    'h-[var(--header-career-hub-parent-height)] min-h-[var(--header-career-hub-parent-height)] gap-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)]',
  child:
    'h-[var(--header-career-hub-child-height)] min-h-[var(--header-career-hub-child-height)] gap-3 py-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)]',
} as const

const HeaderToolbar = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { variant, careerHubSize } = useHeaderChrome()
    const ta =
      'flex min-h-12 w-full max-w-[100vw] items-center gap-3 py-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:h-[var(--navbar-height,3.75rem)] md:gap-4 md:py-0'
    const ch = cn(
      'flex w-full max-w-[100vw] items-center',
      toolbarCareerHub[careerHubSize]
    )
    return (
      <div
        ref={ref}
        data-slot="header-toolbar"
        className={cn(variant === 'talent-acquisition' ? ta : ch, className)}
        {...props}
      />
    )
  }
)
HeaderToolbar.displayName = 'HeaderToolbar'

const HeaderGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="header-group"
      className={cn('flex min-w-0 items-center gap-2 md:gap-3', className)}
      {...props}
    />
  )
)
HeaderGroup.displayName = 'HeaderGroup'

/** Typography from HeaderTitle.css (--typography-header2, 32px). */
const HeaderTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h1'>>(
  ({ className, ...props }, ref) => (
    <h1 ref={ref} data-slot="header-title" className={cn(className)} {...props} />
  )
)
HeaderTitle.displayName = 'HeaderTitle'

const HeaderTextGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-slot="header-text-group" className={cn(className)} {...props} />
  )
)
HeaderTextGroup.displayName = 'HeaderTextGroup'

/** 16px supporting line (`--typography-body2`). Use `data-lines="2"` for up to two lines. */
const HeaderSecondary = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'p'>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} data-slot="header-secondary" className={cn(className)} {...props} />
  )
)
HeaderSecondary.displayName = 'HeaderSecondary'

export { Header, HeaderGroup, HeaderTitle, HeaderToolbar, HeaderTextGroup, HeaderSecondary }
