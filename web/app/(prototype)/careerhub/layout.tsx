import type { ReactNode } from 'react'
import { PrototypeProvider } from './_lib/PrototypeContext'
import { ScreensFAB } from './_components/ScreensFAB'

/* CareerHub prototype layout — wraps the screens with the PrototypeProvider
   and the bottom-left "Screens" FAB (persona + data-state switcher).
   The per-page shell (Navbar + Header + ProductBackground) is rendered by
   the design system's CareerHubShell inside each page. */
export default function CareerHubLayout({ children }: { children: ReactNode }) {
  return (
    <PrototypeProvider>
      {children}
      <ScreensFAB />
    </PrototypeProvider>
  )
}
