import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tabs from '@radix-ui/react-tabs'
import type { NavbarProps } from './Navbar.types'
import { Input } from '../Input/Input'
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
  logoSrc = '/eightfold-logo.svg', // use EIGHTFOLD_LOGO_PATH from design system when serving public/
  productName = 'Career Hub',
  productIconSrc = '/career-hub-icon.svg',
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
    if (tab.path) {
      const isNavLink = NavLinkComponent && NavLinkComponent !== LinkComponent
      if (isNavLink) {
        const NavLinkComp = NavLinkComponent
        return (
          <NavLinkComp
            key={tab.id}
            to={tab.path}
            className={({ isActive }: { isActive: boolean }) =>
              `navbar__tab navbar__tab--link ${isActive ? 'navbar__tab--active' : ''}`
            }
          >
            <span className="navbar__tab-label">
              {tab.label}
              {tab.chevron && (
                <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
                  expand_more
                </span>
              )}
            </span>
          </NavLinkComp>
        )
      }
      const active = activePath === tab.path || (tab.path === '/' && !activePath)
      return (
        <Link key={tab.id} to={tab.path} className={`navbar__tab navbar__tab--link ${active ? 'navbar__tab--active' : ''}`}>
          <span className="navbar__tab-label">
            {tab.label}
            {tab.chevron && (
              <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
                expand_more
              </span>
            )}
          </span>
        </Link>
      )
    }
    return (
      <Tabs.Trigger key={tab.id} value={tab.id} className="navbar__tab">
        <span className="navbar__tab-label">
          {tab.label}
          {tab.chevron && (
            <span className="material-symbols-outlined navbar__tab-chevron" aria-hidden>
              expand_more
            </span>
          )}
        </span>
      </Tabs.Trigger>
    )
  }

  const renderMobileTab = (tab: (typeof tabs)[0]) => {
    if (tab.path) {
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
              <img src={productIconSrc} alt="" className="navbar__product-icon" width={40} height={40} />
              <span className="navbar__product-name">{productName}</span>
            </div>
          </Link>
          <Tabs.Root defaultValue={tabs[0]?.id ?? 'home'} className="navbar__tabs">
            <Tabs.List className="navbar__tabs-list">
              {tabs.map(renderDesktopTab)}
            </Tabs.List>
          </Tabs.Root>
        </div>
        <div className="navbar__right">
          <div className="navbar__search">
            <span className="navbar__search-input">
              <Input
                size="medium"
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
              <span className="navbar__product-name">{productName}</span>
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
