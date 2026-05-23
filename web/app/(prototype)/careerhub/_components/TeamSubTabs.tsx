'use client'

/* Sub-tab navigation that appears below the CareerHubShell hero.
   The 3 prototype screens live as sub-tabs under the "Team" page (and
   under each individual report when a manager drills in). Uses the
   design system's Tabs component so it matches the production line
   variant exactly. */

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@tonyh-2-eightfold/ef-design-system'

export interface TeamSubTabsProps {
  /** Base route that the 3 sub-tabs are nested under. */
  basePath: string
}

const SUB_TABS = [
  { id: 'sync', label: 'Continuous sync' },
  { id: 'meeting', label: 'Meeting canvas' },
  { id: 'review', label: 'Performance hub' },
] as const

export function TeamSubTabs({ basePath }: TeamSubTabsProps) {
  const pathname = usePathname() ?? ''
  const active =
    SUB_TABS.find((t) => pathname.endsWith(`/${t.id}`))?.id ?? 'sync'

  return (
    <div className="mx-auto max-w-7xl px-6 pt-6">
      <Tabs value={active}>
        <TabsList variant="line">
          {SUB_TABS.map((t) => (
            <NextLink
              key={t.id}
              href={`${basePath}/${t.id}`}
              className="contents"
            >
              <TabsTrigger value={t.id}>{t.label}</TabsTrigger>
            </NextLink>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}
