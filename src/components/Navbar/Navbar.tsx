import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { NavbarProps } from './Navbar.types'
import { Input } from '../Input/Input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../NavigationMenu/NavigationMenu'
import './Navbar.css'

function DefaultLink({
  to,
  children,
  className,
  onClick,
}: {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export function Navbar({
  tabs,
  avatarMenuItems,
  user,
  switchOptions = [],
  onSwitchUser,
  activePath = '',
  homePath = '/',
  logoSrc = '/eightfold-logo.svg',
  productName = 'Career Hub',
  productIconSrc = '/career-hub-icon.svg',
  hideProductIcon = false,
  searchPlaceholder = 'Type to search',
  onSearchChange,
  onSearchIconClick,
  actionButtons = [],
  LinkComponent = DefaultLink,
  NavLinkComponent,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [avatarError, setAvatarError] = useState(false)
  const Link = LinkComponent
  const isOnProfile = activePath === '/profile'

  const avatarSrc = user.avatarType === 'photo' && user.avatarPhotoSrc
    ? user.avatarPhotoSrc.replace('w=200&h=200', 'w=80&h=80')
    : null

  const renderDesktopTab = (tab: (typeof tabs)[0]) => {
    const hasSubmenu = tab.chevron && tab.subItems && tab.subItems.length > 0
    if (tab.path && hasSubmenu) {
      const isActive = activePath === tab.path || tab.subItems!.some((s) => s.path === activePath)
      return (
        <NavigationMenuItem key={tab.id}>
          <NavigationMenuTrigger className={`navbar__tab navbar__tab--dropdown ${isActive ? 'navbar__tab--active' : ''}`}>
            <span className="navbar__tab-label">{tab.label}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="navbar__tab-menu">
            <div className="navbar__tab-menu-inner">
              {tab.subItems!.map((item) => (
                <NavigationMenuLink key={item.path} asChild>
                  <Link to={item.path} className="navbar__tab-menu-item">
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              ))}
              {tab.path && !tab.hideViewAll && (
                <>
                  <div className="navbar__tab-menu-divider" />
                  <NavigationMenuLink asChild>
                    <Link to={tab.path} className="navbar__tab-menu-item navbar__tab-menu-item--view-all">
                      View all
                    </Link>
                  </NavigationMenuLink>
                </>
              )}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    }
    if (tab.path) {
      const isNavLink = NavLinkComponent && NavLinkComponent !== LinkComponent
      const active = activePath === tab.path || (tab.path === '/' && !activePath)
      if (isNavLink) {
        const NavLinkComp = NavLinkComponent
        return (
          <NavigationMenuItem key={tab.id}>
            <NavigationMenuLink asChild active={active}>
              <NavLinkComp to={tab.path} className="navbar__tab navbar__tab--link">
                <span className="navbar__tab-label">
                  {tab.label}
                  {tab.chevron && (
                    <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
                      expand_more
                    </span>
                  )}
                </span>
              </NavLinkComp>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )
      }
      return (
        <NavigationMenuItem key={tab.id}>
          <NavigationMenuLink asChild active={active}>
            <Link to={tab.path} className="navbar__tab navbar__tab--link">
              <span className="navbar__tab-label">
                {tab.label}
                {tab.chevron && (
                  <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
                    expand_more
                  </span>
                )}
              </span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      )
    }
    return (
      <NavigationMenuItem key={tab.id}>
        <NavigationMenuLink href="#" className="navbar__tab">
          <span className="navbar__tab-label">
            {tab.label}
            {tab.chevron && (
              <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
                expand_more
              </span>
            )}
          </span>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }

  const renderMobileTab = (tab: (typeof tabs)[0]) => {
    if (tab.path) {
      const hasSubmenu = tab.chevron && tab.subItems && tab.subItems.length > 0
      if (hasSubmenu) {
        return (
          <div key={tab.id} className="navbar__menu-group">
            <Link to={tab.path} className="navbar__menu-link navbar__menu-link--parent" onClick={() => setMobileMenuOpen(false)}>
              {tab.label}
            </Link>
            <div className="navbar__menu-sublinks">
              {tab.subItems!.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="navbar__menu-link navbar__menu-link--sub"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )
      }
      return (
        <Link
          key={tab.id}
          to={tab.path}
          className="navbar__menu-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          {tab.label}
          {tab.chevron && (
            <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
              expand_more
            </span>
          )}
        </Link>
      )
    }
    return (
      <a
        key={tab.id}
        href="#"
        className="navbar__menu-link"
        onClick={(e) => {
          e.preventDefault()
          tab.onClick?.()
          setMobileMenuOpen(false)
        }}
      >
        {tab.label}
        {tab.chevron && (
          <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
            expand_more
          </span>
        )}
      </a>
    )
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <button
            type="button"
            className="navbar__menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined navbar__menu-btn-icon">menu</span>
          </button>
          <Link to={homePath} className="navbar__branding">
            <img src={logoSrc} alt="" className="navbar__logo" />
            <div className="navbar__divider" />
            <div className="navbar__product">
              {!hideProductIcon && (
                <img src={productIconSrc} alt="" className="navbar__product-icon" width={40} height={40} />
              )}
              <span
                className={`navbar__product-name ${productName.trim().split(/\s+/).length > 1 ? 'navbar__product-name--two-lines' : ''}`}
              >
                {(() => {
                  const words = productName.trim().split(/\s+/)
                  if (words.length <= 1) return productName
                  return (
                    <>
                      <span className="navbar__product-name__line">{words[0]}</span>
                      <span className="navbar__product-name__line">{words.slice(1).join(' ')}</span>
                    </>
                  )
                })()}
              </span>
            </div>
          </Link>
          <NavigationMenu viewport={false} variant="underline" className="navbar__tabs" delayDuration={400} skipDelayDuration={200}>
            <NavigationMenuList className="navbar__tabs-list">
              {tabs.map(renderDesktopTab)}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="navbar__right">
          <div className="navbar__search-wrap">
            <div className="navbar__search">
              <span className="navbar__search-input">
                <Input
                  size="small"
                  shape="pill"
                  leadingIcon="search"
                  placeholder={searchPlaceholder}
                  aria-label="Search"
                  onChange={(e) => onSearchChange?.(e.target.value)}
                />
              </span>
              <button
                type="button"
                className="navbar__search-icon-btn navbar__btn"
                aria-label="Search"
                onClick={() => onSearchIconClick?.()}
              >
                <span className="material-symbols-outlined navbar__btn-icon">search</span>
              </button>
            </div>
            <div className="navbar__divider navbar__divider--vertical" />
          </div>
          <div className="navbar__right-icons">
            {actionButtons.map((btn, i) => (
              <button
                key={i}
                type="button"
                className="navbar__btn navbar__btn--action"
                aria-label={btn.ariaLabel}
                onClick={btn.onClick}
              >
                {btn.iconSrc ? (
                  <img src={btn.iconSrc} alt="" className="navbar__btn-icon-img" width={20} height={20} />
                ) : (
                  <span className="material-symbols-outlined navbar__btn-icon">{btn.icon ?? 'circle'}</span>
                )}
              </button>
            ))}
            <button type="button" className="navbar__btn navbar__btn--menu" aria-label="App switcher">
              <span className="material-symbols-outlined navbar__btn-icon">apps</span>
            </button>
          </div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button" className="navbar__avatar" aria-label="Open profile menu">
                <span
                  className={`navbar__avatar-inner ${user.avatarColor ? 'navbar__avatar-inner--colored' : ''}`}
                  style={user.avatarColor ? { backgroundColor: user.avatarColor } : undefined}
                >
                  {avatarError || !avatarSrc ? (
                    <span className="navbar__avatar-initials">{user.avatarInitials ?? '?'}</span>
                  ) : (
                    <img
                      src={avatarSrc}
                      alt=""
                      className="navbar__avatar-img"
                      onError={() => setAvatarError(true)}
                    />
                  )}
                </span>
                <span className="material-symbols-outlined navbar__avatar-caret" aria-hidden>
                  expand_more
                </span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="navbar__avatar-menu" align="end" sideOffset={8}>
                <div className="navbar__avatar-menu-inner">
                  {avatarMenuItems.map((item) => (
                    <DropdownMenu.Item key={item.label} asChild>
                      <Link
                        to={item.path}
                        className={`navbar__avatar-menu-item ${item.label === 'My Profile' && isOnProfile ? 'navbar__avatar-menu-item--active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                  {switchOptions.length > 0 && onSwitchUser && (
                    <>
                      <div className="navbar__avatar-menu-divider" />
                      <div className="navbar__avatar-menu-switch">
                        <input
                          type="text"
                          placeholder="Switch To..."
                          className="navbar__avatar-menu-input"
                          aria-label="Switch to"
                        />
                        {switchOptions.map((opt) => (
                          <DropdownMenu.Item key={opt.userId} asChild>
                            <button
                              type="button"
                              className="navbar__avatar-menu-option"
                              onClick={() => onSwitchUser(opt.userId)}
                            >
                              {opt.label}
                            </button>
                          </DropdownMenu.Item>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="navbar__menu-overlay" />
          <Dialog.Content className="navbar__menu-drawer" aria-describedby={undefined}>
            <div className="navbar__menu-header">
              <span
                className={`navbar__product-name ${productName.trim().split(/\s+/).length > 1 ? 'navbar__product-name--two-lines' : ''}`}
              >
                {(() => {
                  const words = productName.trim().split(/\s+/)
                  if (words.length <= 1) return productName
                  return (
                    <>
                      <span className="navbar__product-name__line">{words[0]}</span>
                      <span className="navbar__product-name__line">{words.slice(1).join(' ')}</span>
                    </>
                  )
                })()}
              </span>
              <Dialog.Close asChild>
                <button type="button" className="navbar__menu-close" aria-label="Close menu">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </Dialog.Close>
            </div>
            <nav className="navbar__menu-nav">
              {tabs.map(renderMobileTab)}
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  )
}
