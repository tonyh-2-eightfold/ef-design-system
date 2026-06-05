'use client'

/* Bottom-left floating action button for switching persona + data state.
   Replaces the top DevBars — keeps the page chrome clean and lets the
   CareerHubShell + nav read like real product UI.

   Interaction: click FAB → primary menu lists personas. Hover/click a
   persona → reveals a submenu with the 4 data states. */

import { useEffect, useRef, useState } from 'react'
import { FloatingActionButton } from '@tonyh-2-eightfold/ef-design-system'
import { usePrototype } from '../_lib/PrototypeContext'
import type { DataState, PersonaId } from '../_lib/types'

const PERSONAS: { id: PersonaId; label: string; sublabel: string }[] = [
  { id: 'alex', label: 'Alex Park', sublabel: 'Employee · Software Engineer' },
  { id: 'sam', label: 'Sam Chen', sublabel: 'Manager · Engineering Manager' },
]

const STATES: { id: DataState; label: string; icon: string }[] = [
  { id: 'populated', label: 'Populated', icon: 'database' },
  { id: 'empty', label: 'Empty', icon: 'inbox' },
  { id: 'loading', label: 'Loading', icon: 'autorenew' },
  { id: 'error', label: 'Error', icon: 'error' },
]

export function ScreensFAB() {
  const { persona, setPersona, dataState, setDataState } = usePrototype()
  const [open, setOpen] = useState(false)
  const [hoveredPersona, setHoveredPersona] = useState<PersonaId | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  /* Close popover when clicking outside. */
  useEffect(() => {
    if (!open) return
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
        setHoveredPersona(null)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const activePersona =
    PERSONAS.find((p) => p.id === persona)?.label.split(' ')[0] ?? ''
  const activeState = STATES.find((s) => s.id === dataState)?.label ?? ''

  return (
    <div ref={rootRef} className="fixed bottom-6 left-6 z-[9998]">
      {open && (
        <div className="absolute bottom-full left-0 mb-3 flex gap-2">
          {/* Persona column */}
          <div className="min-w-[220px] rounded-xl border border-border bg-card p-2 shadow-lg">
            <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Persona
            </div>
            {PERSONAS.map((p) => {
              const active = p.id === persona
              const isHovered = p.id === hoveredPersona
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setPersona(p.id)
                    setHoveredPersona(p.id)
                  }}
                  onMouseEnter={() => setHoveredPersona(p.id)}
                  className={
                    'flex w-full items-center justify-between gap-2 rounded-md px-2 py-2 text-left transition-colors ' +
                    (active || isHovered
                      ? 'bg-muted text-foreground'
                      : 'text-foreground hover:bg-muted')
                  }
                >
                  <div className="min-w-0">
                    <div className="text-sm font-medium leading-tight">{p.label}</div>
                    <div className="text-[11px] leading-tight text-muted-foreground">
                      {p.sublabel}
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-muted-foreground"
                    style={{ fontSize: 18 }}
                    aria-hidden
                  >
                    chevron_right
                  </span>
                </button>
              )
            })}
          </div>

          {/* State column — shown when a persona is hovered/active */}
          {hoveredPersona && (
            <div
              className="min-w-[180px] rounded-xl border border-border bg-card p-2 shadow-lg"
              onMouseEnter={() => {
                /* keep state column open while pointer is on it */
              }}
            >
              <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                State
              </div>
              {STATES.map((s) => {
                const active = s.id === dataState
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setDataState(s.id)
                      setOpen(false)
                      setHoveredPersona(null)
                    }}
                    className={
                      'flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors ' +
                      (active
                        ? 'bg-muted font-medium text-foreground'
                        : 'text-foreground hover:bg-muted')
                    }
                  >
                    <span
                      className="material-symbols-outlined text-muted-foreground"
                      style={{ fontSize: 16 }}
                      aria-hidden
                    >
                      {s.icon}
                    </span>
                    {s.label}
                    {active && (
                      <span
                        className="material-symbols-outlined ml-auto text-foreground"
                        style={{ fontSize: 16 }}
                        aria-hidden
                      >
                        check
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}

      <FloatingActionButton
        icon={
          <span className="material-symbols-outlined" style={{ fontSize: 22 }} aria-hidden>
            layers
          </span>
        }
        label="Screens"
        variant="primary"
        onClick={() => {
          setOpen((v) => !v)
          if (!open) setHoveredPersona(persona)
        }}
        aria-label="Open prototype screens menu"
      />

      {/* Subtle indicator of current state — visible without opening the menu */}
      {open === false && dataState !== 'populated' && (
        <div className="absolute -top-2 -right-1 rounded-full bg-warning px-2 py-0.5 text-[10px] font-semibold text-warning-foreground shadow-sm">
          {activeState}
        </div>
      )}
      {/* Accessibility-friendly status read for screen readers */}
      <span className="sr-only">
        Active prototype state: {activePersona}, {activeState}
      </span>
    </div>
  )
}
