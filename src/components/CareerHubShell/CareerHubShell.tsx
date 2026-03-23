import * as React from 'react'
import { Navbar } from '../Navbar/Navbar'
import {
  Header,
  HeaderToolbar,
  HeaderTextGroup,
  HeaderTitle,
  HeaderSecondary,
} from '../Navbar/Header'
import { ProductBackground } from '../ProductBackground'
import type { NavbarProps } from '../Navbar/Navbar.types'
import type { CareerHubHeaderSize } from '../Navbar/header-types'
import type { CareerHubChevronsVariant } from '../ProductBackground'
import './CareerHubShell.css'

export interface CareerHubShellProps {
  /** Header size: **parent** (160px section header), **child** (116px nested), **profile** (408px hero). */
  chSize?: CareerHubHeaderSize
  /** Page title rendered in HeaderTitle. */
  title: React.ReactNode
  /** Optional subtitle rendered in HeaderSecondary. */
  secondary?: React.ReactNode
  /** Optional actions (buttons, etc.) rendered top-right in the header toolbar. */
  actions?: React.ReactNode
  /** Navbar props — tabs, user, product config, etc. */
  navbarProps: NavbarProps
  /** Override chevrons variant. Defaults based on chSize: profile → 'profile', others → 'default'. */
  chevronsVariant?: CareerHubChevronsVariant
  /** Page content rendered below the header. */
  children?: React.ReactNode
}

/**
 * Pre-assembled Career Hub page shell.
 *
 * Composes `ProductBackground` (chevron art) + `Navbar` + `Header` into a single
 * consistent layout. Every Career Hub page should wrap its content with this shell.
 *
 * ```tsx
 * <CareerHubShell
 *   chSize="parent"
 *   title="Workforce Readiness"
 *   navbarProps={{ tabs, user, avatarMenuItems, ... }}
 * >
 *   <main>Page content here</main>
 * </CareerHubShell>
 * ```
 */
export function CareerHubShell({
  chSize = 'parent',
  title,
  secondary,
  actions,
  navbarProps,
  chevronsVariant,
  children,
}: CareerHubShellProps) {
  const resolvedChevrons: CareerHubChevronsVariant =
    chevronsVariant ?? (chSize === 'profile' ? 'profile' : 'default')

  return (
    <>
      <ProductBackground variant="career-hub" chevronsVariant={resolvedChevrons}>
        <div className="career-hub-shell">
          <Navbar {...navbarProps} />
          <Header variant="career-hub" chSize={chSize} overlayBackground>
            <HeaderToolbar actions={actions}>
              <HeaderTextGroup>
                <HeaderTitle>{title}</HeaderTitle>
                {secondary && <HeaderSecondary>{secondary}</HeaderSecondary>}
              </HeaderTextGroup>
            </HeaderToolbar>
          </Header>
        </div>
      </ProductBackground>
      {children}
    </>
  )
}
