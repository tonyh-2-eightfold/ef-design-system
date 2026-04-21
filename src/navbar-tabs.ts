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

/**
 * Shared "My activity" submenu across employee / manager / HRBP personas.
 * Apps may extend or override these paths to map to their own routes.
 */
export const MY_ACTIVITY_SUBITEMS = [
  { label: 'My Jobs', path: '/my-activity/jobs' },
  { label: 'My Experts', path: '/my-activity/experts' },
  { label: 'My Projects', path: '/my-activity/projects' },
  { label: 'My Courses', path: '/my-activity/courses' },
  { label: 'My Referrals', path: '/my-activity/referrals' },
  { label: 'My skill assessment requests', path: '/my-activity/skill-assessments' },
  { label: 'Development Plan Templates', path: '/my-activity/dev-plan-templates' },
] as const

/**
 * Shared "Marketplace" submenu across employee / manager / HRBP personas.
 * Apps may extend or override these paths to map to their own routes.
 */
export const MARKETPLACE_SUBITEMS = [
  { label: 'Projects', path: '/marketplace/projects' },
  { label: 'Jobs', path: '/marketplace/jobs' },
  { label: 'Courses', path: '/marketplace/courses' },
  { label: 'Development Plans', path: '/marketplace/development-plans' },
  { label: 'Nectar', path: '/marketplace/nectar' },
  { label: 'Google Drive', path: '/marketplace/google-drive' },
] as const

/**
 * Shared "My career" submenu. Not included in the default tab sets below
 * (which use Goals / Career navigator as top-level tabs instead); exported
 * for apps that expose a "My career" dropdown.
 */
export const MY_CAREER_SUBITEMS = [
  { label: 'Career Interests', path: '/profile?tab=career' },
  { label: 'Career Navigator', path: '/career-navigator' },
  { label: 'Resume Coach', path: '/resume-coach' },
] as const

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
    subItems: [...MARKETPLACE_SUBITEMS],
  },
  {
    id: 'my-activity',
    label: 'My activity',
    path: '/my-activity',
    chevron: true,
    subItems: [...MY_ACTIVITY_SUBITEMS],
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
    subItems: [...MARKETPLACE_SUBITEMS],
  },
  {
    id: 'my-activity',
    label: 'My activity',
    path: '/my-activity',
    chevron: true,
    subItems: [...MY_ACTIVITY_SUBITEMS],
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
    subItems: [...MARKETPLACE_SUBITEMS],
  },
  {
    id: 'my-activity',
    label: 'My activity',
    path: '/my-activity',
    chevron: true,
    subItems: [...MY_ACTIVITY_SUBITEMS],
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
