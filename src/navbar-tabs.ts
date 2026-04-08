import type { NavbarTab, NavbarAvatarMenuItem, NavbarActionButton } from './components/Navbar/Navbar.types'
import { COPILOT_LOGO_PATH } from './product-logos'

/**
 * Example navbar tab sets by persona. Apps can use these as-is or override paths/labels.
 * Tabs are determined by user/persona (e.g. employee non-manager vs manager).
 */

/** Avatar menu options for employee persona (profile, settings, etc.) */
export const EMPLOYEE_AVATAR_MENU_ITEMS: NavbarAvatarMenuItem[] = [
  { label: 'My Profile', path: '/profile' },
  { label: 'Settings', path: '/settings' },
  { label: 'Help', path: '/help' },
  { label: 'Sign out', path: '/sign-out' },
]

/** Employee, non-manager: Home, Goals, Career navigator, Marketplace, My activity, People */
export const EMPLOYEE_NON_MANAGER_TABS: NavbarTab[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'goals', label: 'Goals', path: '/goals' },
  { id: 'career-navigator', label: 'Career navigator', path: '/career-navigator' },
  {
    id: 'marketplace',
    label: 'Marketplace',
    path: '/marketplace',
    chevron: true,
    subItems: [
      { label: 'Learning', path: '/marketplace/learning' },
      { label: 'Projects', path: '/marketplace/projects' },
      { label: 'Mentorship', path: '/marketplace/mentorship' },
    ],
  },
  {
    id: 'my-activity',
    label: 'My activity',
    path: '/my-activity',
    chevron: true,
    subItems: [
      { label: 'Goals', path: '/my-activity/goals' },
      { label: 'Learning', path: '/my-activity/learning' },
      { label: 'Contributions', path: '/my-activity/contributions' },
    ],
  },
  { id: 'people', label: 'People', path: '/people' },
]

/** Manager: Home, Goals, Career navigator, Marketplace, My activity, People, My team */
export const MANAGER_TABS: NavbarTab[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'goals', label: 'Goals', path: '/goals' },
  { id: 'career-navigator', label: 'Career navigator', path: '/career-navigator' },
  {
    id: 'marketplace',
    label: 'Marketplace',
    path: '/marketplace',
    chevron: true,
    subItems: [
      { label: 'Learning', path: '/marketplace/learning' },
      { label: 'Projects', path: '/marketplace/projects' },
      { label: 'Mentorship', path: '/marketplace/mentorship' },
    ],
  },
  {
    id: 'my-activity',
    label: 'My activity',
    path: '/my-activity',
    chevron: true,
    subItems: [
      { label: 'Goals', path: '/my-activity/goals' },
      { label: 'Learning', path: '/my-activity/learning' },
      { label: 'Contributions', path: '/my-activity/contributions' },
    ],
  },
  { id: 'people', label: 'People', path: '/people' },
  { id: 'my-team', label: 'My team', path: '/my-team' },
  { id: 'workforce', label: 'Workforce Readiness', path: '/workforce' },
]

/** Career Hub – CHRO persona: Home, My activity, People, My team, Workforce Readiness, Insights, More (Goals, Career navigator, Marketplace) */
export const CAREER_HUB_CHRO_TABS: NavbarTab[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'my-activity', label: 'My activity', path: '/my-activity' },
  { id: 'people', label: 'People', path: '/people' },
  { id: 'my-team', label: 'My team', path: '/my-team' },
  { id: 'workforce', label: 'Workforce Readiness', path: '/workforce' },
  { id: 'insights', label: 'Insights', path: '/insights' },
  {
    id: 'more',
    label: 'More',
    path: '/more',
    chevron: true,
    hideViewAll: true,
    subItems: [
      { label: 'Goals', path: '/goals' },
      { label: 'Career navigator', path: '/career-navigator' },
      { label: 'Marketplace', path: '/marketplace' },
    ],
  },
]

/** Career Hub – HRBP persona: Home, My goals, Career navigator, Marketplace, My activity, People, My team, Workforce Readiness */
export const CAREER_HUB_HRBP_TABS: NavbarTab[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'my-goals', label: 'My goals', path: '/goals' },
  { id: 'career-navigator', label: 'Career navigator', path: '/career-navigator' },
  {
    id: 'marketplace',
    label: 'Marketplace',
    path: '/marketplace',
    chevron: true,
    subItems: [
      { label: 'Learning', path: '/marketplace/learning' },
      { label: 'Projects', path: '/marketplace/projects' },
      { label: 'Mentorship', path: '/marketplace/mentorship' },
    ],
  },
  {
    id: 'my-activity',
    label: 'My activity',
    path: '/my-activity',
    chevron: true,
    subItems: [
      { label: 'Goals', path: '/my-activity/goals' },
      { label: 'Learning', path: '/my-activity/learning' },
      { label: 'Contributions', path: '/my-activity/contributions' },
    ],
  },
  { id: 'people', label: 'People', path: '/people' },
  { id: 'my-team', label: 'My team', path: '/my-team' },
  { id: 'workforce', label: 'Workforce Readiness', path: '/workforce' },
]

/** Talent Acquisition – Recruiter (default) persona: Positions, Talent, Engage, Insights, More */
export const TALENT_ACQUISITION_RECRUITER_TABS: NavbarTab[] = [
  { id: 'positions', label: 'Positions', path: '/positions' },
  {
    id: 'talent',
    label: 'Talent',
    path: '/talent',
    chevron: true,
    subItems: [
      { label: 'Pipeline', path: '/talent/pipeline' },
      { label: 'Candidates', path: '/talent/candidates' },
      { label: 'Search', path: '/talent/search' },
    ],
  },
  {
    id: 'engage',
    label: 'Engage',
    path: '/engage',
    chevron: true,
    subItems: [
      { label: 'Campaigns', path: '/engage/campaigns' },
      { label: 'Emails', path: '/engage/emails' },
      { label: 'Events', path: '/engage/events' },
    ],
  },
  { id: 'insights', label: 'Insights', path: '/insights' },
  {
    id: 'more',
    label: 'More',
    path: '/more',
    chevron: true,
    subItems: [
      { label: 'Settings', path: '/more/settings' },
      { label: 'Integrations', path: '/more/integrations' },
      { label: 'Help', path: '/more/help' },
    ],
  },
]

/** Talent Acquisition search input hint text */
export const TALENT_ACQUISITION_SEARCH_PLACEHOLDER = 'Search for positions or candidates'

/** Talent Acquisition header icon buttons: Copilot, Talent (briefcase), Notifications */
export const TALENT_ACQUISITION_ACTION_BUTTONS: NavbarActionButton[] = [
  { iconSrc: COPILOT_LOGO_PATH, ariaLabel: 'Copilot' },
  { icon: 'work_outline', ariaLabel: 'Talent' },
  { icon: 'notifications', ariaLabel: 'Notifications' },
]
