import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Navbar } from '../components/Navbar/Navbar'
import { getNavbarProductConfig } from '../product-logos'
import {
  EMPLOYEE_NON_MANAGER_TABS,
  EMPLOYEE_AVATAR_MENU_ITEMS,
  MANAGER_TABS,
  TALENT_ACQUISITION_RECRUITER_TABS,
  TALENT_ACQUISITION_ACTION_BUTTONS,
  TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
} from '../navbar-tabs'

/** Example tabs for Career Hub persona */
const careerHubTabs = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'Skills', path: '/skills' },
  { id: '3', label: 'Careers', path: '/careers' },
]

/** Example user with custom avatar color */
const defaultUser = {
  name: 'Jane Doe',
  avatarType: 'initials' as const,
  avatarInitials: 'JD',
  avatarColor: '#0066cc',
}

/** User with no avatarColor: uses EF palette default (red #993838, white initials) - Figma 14312-85602 */
const userEFDefaultInitials = {
  name: 'Alex Smith',
  avatarType: 'initials' as const,
  avatarInitials: 'AS',
}

const meta = {
  title: 'EF Design System/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Navbar supports multiple products (Career Hub, Campaigns, Talent Acquisition, etc.). The **current product** and **nav tabs** are determined by user/persona: pass `productName`, `productIconSrc`, and `tabs` from your app based on the active user\'s product and permissions. Use `getNavbarProductConfig(productId)` for product branding.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onSearchChange: fn(),
    onSwitchUser: fn(),
    ...getNavbarProductConfig('career-hub'),
  },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

/** Default: Career Hub persona (current product = Career Hub, tabs for Career Hub). */
export const Default: Story = {
  args: {
    tabs: careerHubTabs,
    avatarMenuItems: EMPLOYEE_AVATAR_MENU_ITEMS,
    user: defaultUser,
    activePath: '/',
  },
}

export const WithActiveTab: Story = {
  args: {
    tabs: careerHubTabs,
    avatarMenuItems: EMPLOYEE_AVATAR_MENU_ITEMS,
    user: defaultUser,
    activePath: '/skills',
  },
}

/** Talent Acquisition – Recruiter (default) persona: Positions, Talent (chevron), Engage (chevron), Insights, More (chevron); AI Agent, Talent, Notifications icon buttons. */
export const TalentAcquisitionRecruiter: Story = {
  args: {
    tabs: TALENT_ACQUISITION_RECRUITER_TABS,
    avatarMenuItems: EMPLOYEE_AVATAR_MENU_ITEMS,
    user: defaultUser,
    activePath: '/positions',
    actionButtons: TALENT_ACQUISITION_ACTION_BUTTONS,
    searchPlaceholder: TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
    ...getNavbarProductConfig('talent-acquisition'),
  },
}

/** Alias for TalentAcquisitionRecruiter – keeps story id 'talent-acquisition-persona' for existing links. */
export const TalentAcquisitionPersona: Story = {
  ...TalentAcquisitionRecruiter,
}

/** Employee, non-manager: Home, Goals, Career navigator, Marketplace, My activity, People. */
export const EmployeeNonManager: Story = {
  args: {
    tabs: EMPLOYEE_NON_MANAGER_TABS,
    avatarMenuItems: EMPLOYEE_AVATAR_MENU_ITEMS,
    user: defaultUser,
    activePath: '/',
    ...getNavbarProductConfig('career-hub'),
  },
}

/** Manager: Home, Goals, Career navigator, Marketplace, My activity, People, My team. */
export const Manager: Story = {
  args: {
    tabs: MANAGER_TABS,
    avatarMenuItems: EMPLOYEE_AVATAR_MENU_ITEMS,
    user: defaultUser,
    activePath: '/',
    ...getNavbarProductConfig('career-hub'),
  },
}

/** Default initials avatar using EF palette (no avatarColor): red bg #993838, white text - Figma 14312-85602. */
export const DefaultInitialsEFPalette: Story = {
  args: {
    tabs: careerHubTabs,
    avatarMenuItems: EMPLOYEE_AVATAR_MENU_ITEMS,
    user: userEFDefaultInitials,
    activePath: '/',
    ...getNavbarProductConfig('career-hub'),
  },
}
