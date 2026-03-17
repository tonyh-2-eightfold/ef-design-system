/** Submenu item under a navbar tab with chevron */
export interface NavbarTabSubItem {
  label: string
  path: string
}

/**
 * Tab shown in the navbar.
 * Tabs are determined by user/persona: pass the tab set appropriate for the current user's product and permissions.
 */
export interface NavbarTab {
  id: string
  label: string
  path?: string
  chevron?: boolean
  /** When set with chevron, shows a dropdown submenu (navigation menu style). Ignored if no chevron. */
  subItems?: NavbarTabSubItem[]
  /** When true, omit the "View all" link at the bottom of the dropdown. */
  hideViewAll?: boolean
  /** For tabs without path (dropdowns); onClick closes mobile menu when provided */
  onClick?: () => void
}

/** Avatar menu item (e.g. My Profile, Settings) */
export interface NavbarAvatarMenuItem {
  label: string
  path: string
}

/** User to switch to in avatar dropdown */
export interface NavbarSwitchOption {
  label: string
  userId: string
}

/** Icon button in the navbar right section (e.g. AI Agent, Talent, Notifications for Talent Acquisition) */
export interface NavbarActionButton {
  /** Material symbol name (e.g. "notifications_outlined", "work_outline") */
  icon?: string
  /** Image src for custom icon (e.g. AI Agent logo); use when icon is not set */
  iconSrc?: string
  ariaLabel: string
  onClick?: () => void
}

/** Current user info for avatar display */
export interface NavbarUser {
  name: string
  avatarType: 'photo' | 'initials'
  avatarPhotoSrc?: string
  avatarInitials?: string
  avatarColor?: string
}

export interface NavbarProps {
  /** Nav tabs for this user/persona; path = link, no path = trigger (e.g. dropdown). Determined by user/persona. */
  tabs: NavbarTab[]
  /** Avatar dropdown menu items */
  avatarMenuItems: NavbarAvatarMenuItem[]
  /** Current user for avatar */
  user: NavbarUser
  /** Optional "Switch to" section in avatar menu */
  switchOptions?: NavbarSwitchOption[]
  onSwitchUser?: (userId: string) => void
  /** Path considered "active" for profile menu item highlight */
  activePath?: string
  /** Home/logo link path */
  homePath?: string
  /** Logo image src */
  logoSrc?: string
  /** Current product name (e.g. "Career Hub"). One of multiple products; set from user/persona. */
  productName?: string
  /** Current product icon src. Use getNavbarProductConfig(productId) for design system assets. */
  productIconSrc?: string
  /** When true, hide the product icon (EF logo remains visible). */
  hideProductIcon?: boolean
  /** Search placeholder */
  searchPlaceholder?: string
  /** Called when search input changes */
  onSearchChange?: (value: string) => void
  /** Called when search icon is clicked (compact mode when search bar doesn't fit); use to open search overlay */
  onSearchIconClick?: () => void
  /** Optional icon buttons in the right section (e.g. AI Agent, Talent, Notifications for Talent Acquisition) */
  actionButtons?: NavbarActionButton[]
  /** Link component for navigation; defaults to <a href={to}> */
  LinkComponent?: React.ComponentType<{
    to: string
    children: React.ReactNode
    className?: string
    onClick?: () => void
  }>
  /** NavLink for tabs with active state; receives className as function (isActive) => string */
  NavLinkComponent?: React.ComponentType<{
    to: string
    children: React.ReactNode
    className?: string | ((props: { isActive: boolean }) => string)
  }>
}
