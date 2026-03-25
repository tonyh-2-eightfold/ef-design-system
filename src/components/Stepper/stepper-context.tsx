import * as React from 'react'

export type StepperSize = 'default' | 'sm'

export type StepperContextValue = {
  /** 0-based index of the active step */
  value: number
  onValueChange?: (step: number) => void
  size: StepperSize
}

export const StepperContext = React.createContext<StepperContextValue | null>(null)

export function useStepper() {
  const ctx = React.useContext(StepperContext)
  if (!ctx) throw new Error('Stepper components must be used within <Stepper>')
  return ctx
}

/** Set by StepperList per separator so segment index works even with duplicate module instances. */
export const StepperConnectorSegmentContext = React.createContext<number | null>(null)

export const ItemStepContext = React.createContext<number | null>(null)

export function useItemStep() {
  const s = React.useContext(ItemStepContext)
  if (s == null) throw new Error('StepperItem subcomponents must be inside <StepperItem>')
  return s
}
