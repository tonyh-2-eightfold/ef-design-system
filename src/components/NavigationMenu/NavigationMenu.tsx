import * as React from 'react'
import { createPortal } from 'react-dom'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'
import './NavigationMenu.css'

export type NavigationMenuVariant = 'underline' | 'pill'

const ViewportContext = React.createContext<boolean>(true)

function NavigationMenu({
  className,
  children,
  viewport = true,
  variant = 'underline',
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
  /** underline = bottom line indicator (tab style); pill = rounded background */
  variant?: NavigationMenuVariant
}) {
  return (
    <ViewportContext.Provider value={viewport}>
      <NavigationMenuPrimitive.Root
        data-slot="navigation-menu"
        data-viewport={viewport}
        data-variant={variant}
        className={cn('nav-menu', `nav-menu--${variant}`, className)}
        {...props}
      >
        {children}
        {viewport && <NavigationMenuViewport />}
      </NavigationMenuPrimitive.Root>
    </ViewportContext.Provider>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn('nav-menu__list', className)}
      {...props}
    />
  )
}

const TriggerRefContextForItem = React.createContext<React.MutableRefObject<HTMLElement | null> | null>(null)

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  const triggerRef = React.useRef<HTMLElement | null>(null)
  return (
    <TriggerRefContextForItem.Provider value={triggerRef}>
      <NavigationMenuPrimitive.Item
        data-slot="navigation-menu-item"
        className={cn('nav-menu__item', className)}
        {...props}
      />
    </TriggerRefContextForItem.Provider>
  )
}

/* Prevent Radix from opening on hover (capture phase so we run first); trigger still receives events so :hover works. */
function preventOpenOnHover(e: React.PointerEvent<Element>) {
  e.preventDefault()
}

function NavigationMenuTrigger({
  className,
  children,
  onPointerMove,
  onPointerLeave,
  onPointerEnter,
  onPointerMoveCapture,
  ref: refProp,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  const triggerRefFromItem = React.useContext(TriggerRefContextForItem)
  const mergedRef = React.useCallback(
    (el: HTMLButtonElement | null) => {
      if (triggerRefFromItem) triggerRefFromItem.current = el
      if (typeof refProp === 'function') refProp(el)
      else if (refProp) (refProp as React.MutableRefObject<HTMLButtonElement | null>).current = el
    },
    [refProp, triggerRefFromItem]
  )
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn('nav-menu__trigger', className)}
      ref={mergedRef}
      onPointerMoveCapture={(e) => {
        preventOpenOnHover(e)
        onPointerMoveCapture?.(e)
      }}
      onPointerLeave={(e) => {
        preventOpenOnHover(e)
        onPointerLeave?.(e)
      }}
      onPointerEnter={(e) => {
        preventOpenOnHover(e)
        onPointerEnter?.(e)
      }}
      onPointerMove={onPointerMove}
      {...props}
    >
      <span className="nav-menu__trigger-label">
        {children}
        <span className="material-symbols-outlined nav-menu__chevron" aria-hidden>
          expand_more
        </span>
      </span>
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  children,
  forceMount,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  const viewport = React.useContext(ViewportContext)
  const triggerRef = React.useContext(TriggerRefContextForItem)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const [portalStyle, setPortalStyle] = React.useState<React.CSSProperties>({})
  const [isOpen, setIsOpen] = React.useState(false)

  const updatePosition = React.useCallback(() => {
    const trigger = triggerRef?.current
    if (!trigger) return
    const rect = trigger.getBoundingClientRect()
    const navbar = trigger.closest?.('.navbar') as HTMLElement | null
    const topPx = navbar
      ? (navbar.getBoundingClientRect().bottom + 2)
      : rect.bottom + 2
    setPortalStyle({
      position: 'fixed',
      top: topPx,
      left: rect.left,
      minWidth: 200,
      zIndex: 1100,
      transform: 'translateZ(0)',
    })
  }, [triggerRef])

  React.useLayoutEffect(() => {
    if (viewport || !triggerRef) return
    const wrapperEl = contentRef.current
    const triggerEl = triggerRef.current
    const checkOpen = () => {
      const fromTrigger = triggerEl?.getAttribute?.('aria-expanded') === 'true'
      const fromContent =
        wrapperEl?.querySelector?.('[data-state="open"]') != null ||
        (wrapperEl?.firstElementChild as HTMLElement)?.getAttribute?.('data-state') === 'open'
      const open = fromTrigger || fromContent
      setIsOpen(open)
      if (open) updatePosition()
    }
    checkOpen()
    if (!triggerEl && !wrapperEl) return
    const observer = new MutationObserver(checkOpen)
    if (triggerEl) observer.observe(triggerEl, { attributes: true, attributeFilter: ['aria-expanded'] })
    if (wrapperEl) observer.observe(wrapperEl, { attributes: true, attributeFilter: ['data-state'], subtree: true })
    return () => observer.disconnect()
  }, [viewport, triggerRef, updatePosition])

  React.useEffect(() => {
    if (!isOpen || viewport) return
    updatePosition()
    const raf = requestAnimationFrame(() => updatePosition())
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen, viewport, updatePosition])

  if (viewport) {
    return (
      <NavigationMenuPrimitive.Content
        data-slot="navigation-menu-content"
        className={cn('nav-menu__content', className)}
        {...props}
      />
    )
  }

  return (
    <>
      <div ref={contentRef} style={{ display: 'contents' }} aria-hidden>
        <NavigationMenuPrimitive.Content
          data-slot="navigation-menu-content"
          className={cn('nav-menu__content', className)}
          forceMount
          style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', top: 0, left: 0, minWidth: 0 }}
          {...props}
        >
          <span aria-hidden style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }} />
        </NavigationMenuPrimitive.Content>
      </div>
      {typeof document !== 'undefined' &&
        isOpen &&
        createPortal(
          <div
            className={cn('nav-menu__content--portal', className)}
            data-slot="navigation-menu-content"
            style={{
              ...portalStyle,
              padding: 0,
              boxSizing: 'border-box',
              overflow: 'visible',
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="nav-menu__viewport-wrap">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn('nav-menu__viewport', className)}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  active,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link> & {
  /** When true, shows selected state (underline blue line or pill background) */
  active?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      data-active={active ? 'true' : undefined}
      className={cn('nav-menu__link', className)}
      {...props}
    >
      {props.asChild ? children : <span className="nav-menu__link-label">{children}</span>}
    </NavigationMenuPrimitive.Link>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
}
