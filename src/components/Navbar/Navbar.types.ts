/** Tab shown in the navbar */
export interface NavbarTab {
  id: string
  label: string
  path?: string
  chevron?: boolean
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

/** Current user info for avatar display */
export interface NavbarUser {
  name: string
  avatarType: 'photo' | 'initials'
  avatarPhotoSrc?: string
  avatarInitials?: string
  avatarColor?: string
}

export interface NavbarProps {
  /** Nav tabs; path = link, no path = trigger (e.g. dropdown) */
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
  /** Product name (e.g. "Career Hub") */
  productName?: string
  /** Product icon image src */
  productIconSrc?: string
  /** Search placeholder */
  searchPlaceholder?: string
  /** Called when search input changes */
  onSearchChange?: (value: string) => void
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
