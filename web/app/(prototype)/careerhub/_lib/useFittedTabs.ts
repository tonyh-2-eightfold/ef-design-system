'use client'

import { useEffect, useState } from 'react'
import type { NavbarTab } from '@tonyh-2-eightfold/ef-design-system'

/* Greedy fit-to-width for the Career Hub navbar tabs.
   Measures the window's clientWidth on mount + resize, estimates each
   tab's rendered width from its label length, and collapses trailing
   tabs into a "More" dropdown if they don't fit. When everything fits,
   no "More" tab is emitted at all.

   Estimates are intentionally rough — exact pixel measurement would
   need an invisible render pass, and a prototype gets near-zero benefit
   from that precision. The constants below were calibrated by eye
   against the actual Octuple navbar tab styling (16px medium font,
   16px horizontal padding, 4px chevron gap). */

const TAB_HORIZONTAL_PADDING = 32 // 16px each side
const CHEVRON_WIDTH = 22 // chevron icon + gap
const CHAR_WIDTH = 9 // average px per character at 16px medium
const TAB_GAP = 4 // gap between tabs

/* The navbar's non-tab regions take up a fixed portion of the width.
   Calibrated against the rendered Career Hub navbar:
   - left: ~50px (hamburger button at narrow widths) + 80px logo+divider
     + ~120px product name+icon = ~250px
   - right: ~280px search + ~140px (apps + avatar + chevron + paddings)
     = ~420px
   - plus inner padding / margins = ~60px
   Total non-tab budget ≈ 730px. */
const NON_TAB_BUDGET = 730

function estimateTabWidth(tab: NavbarTab): number {
  const labelChars = typeof tab.label === 'string' ? tab.label.length : 10
  const base = labelChars * CHAR_WIDTH + TAB_HORIZONTAL_PADDING
  const chevron = tab.chevron ? CHEVRON_WIDTH : 0
  return base + chevron + TAB_GAP
}

/** Treat a tab as "non-overflowable" — pinned to the inline list so it
   always shows. "Home" is always reachable; the prototype's "Team" tab
   is the host of all the new screens so we never want it to vanish. */
function isPinned(tab: NavbarTab): boolean {
  return tab.id === 'home' || tab.id === 'team'
}

export function useFittedTabs(allTabs: NavbarTab[]): NavbarTab[] {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    function measure() {
      setWidth(window.innerWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  /* On first render (before mount) width is null — just show everything
     to avoid layout flash. The first effect tick measures and trims. */
  if (width == null) return allTabs

  /* Below the design system's own hamburger breakpoint, the navbar
     collapses everything to a side drawer — no point computing overflow. */
  if (width < 1280) return allTabs

  const available = Math.max(0, width - NON_TAB_BUDGET)

  /* First pass: assume nothing overflows. Sum widths in order. */
  const widths = allTabs.map(estimateTabWidth)
  const totalIfAllShown = widths.reduce((a, b) => a + b, 0)
  if (totalIfAllShown <= available) return allTabs

  /* Need a "More" tab. Re-budget with its estimated width upfront so
     we don't keep tabs that only fit if "More" itself didn't exist. */
  const moreWidth = 4 * CHAR_WIDTH + TAB_HORIZONTAL_PADDING + CHEVRON_WIDTH + TAB_GAP
  let used = moreWidth
  const inline: NavbarTab[] = []
  const overflow: NavbarTab[] = []

  /* First fit all pinned tabs (they always show). */
  for (let i = 0; i < allTabs.length; i++) {
    if (isPinned(allTabs[i])) {
      inline.push(allTabs[i])
      used += widths[i]
    }
  }

  /* Then fit the rest in document order until the budget runs out. */
  for (let i = 0; i < allTabs.length; i++) {
    const tab = allTabs[i]
    if (isPinned(tab)) continue // already added
    if (used + widths[i] <= available) {
      inline.push(tab)
      used += widths[i]
    } else {
      overflow.push(tab)
    }
  }

  /* If nothing actually overflowed, return the original list unchanged
     (and skip the "More" tab). Can happen when pinned tabs alone fit. */
  if (overflow.length === 0) return inline.length === allTabs.length ? allTabs : inline

  /* Restore document order on the inline tabs so pinned items don't
     all jump to the front. */
  const inlineSet = new Set(inline)
  const ordered = allTabs.filter((t) => inlineSet.has(t))

  ordered.push({
    id: 'more',
    label: 'More',
    chevron: true,
    hideViewAll: true,
    subItems: overflow.map((t) => ({
      label: typeof t.label === 'string' ? t.label : t.id,
      path: t.path ?? `#${t.id}`,
    })),
  })

  return ordered
}
