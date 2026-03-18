import * as React from 'react'
import type { CareerHubHeaderSize, HeaderVariant } from './header-types'

export type HeaderChromeContextValue = {
  variant: HeaderVariant
  careerHubSize: CareerHubHeaderSize
}

export const HeaderChromeContext = React.createContext<HeaderChromeContextValue>({
  variant: 'career-hub',
  careerHubSize: 'parent',
})

export function useHeaderChrome() {
  return React.useContext(HeaderChromeContext)
}
