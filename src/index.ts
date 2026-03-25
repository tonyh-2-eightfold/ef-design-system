import './styles/index.css'

export { Button } from './components/Button/Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button'
export { buttonVariants } from './components/Button/Button'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './components/DropdownMenu'
export { ButtonDropdown } from './components/ButtonDropdown'
export type { ButtonDropdownProps } from './components/ButtonDropdown'

export { Input } from './components/Input/Input'
export type { InputProps, InputSize, InputState, InputShape } from './components/Input/Input'

export { Pill } from './components/Pill/Pill'
export type { PillProps, PillVariant, PillSize } from './components/Pill/Pill'

export { SkillTag } from './components/SkillTag/SkillTag'
export type { SkillTagProps, SkillTagVariant, SkillTagSize, SkillTagAction, SkillTagTrend } from './components/SkillTag/SkillTag'

export { Tag, TagGroup } from './components/Tag'
export type { TagProps, TagSize, TagVariant, TagGroupProps, TagGroupType } from './components/Tag'

export { Badge, badgeVariants } from './components/Badge'
export type { BadgeProps, BadgeVariant, BadgeSize } from './components/Badge'

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/Breadcrumb'
export type { BreadcrumbLinkProps } from './components/Breadcrumb'

export { OpenTo } from './components/OpenTo/OpenTo'
export type { OpenToProps, OpenToItem } from './components/OpenTo/OpenTo'

export { InsightCard } from './components/InsightCard/InsightCard'
export type { InsightCardProps } from './components/InsightCard/InsightCard'

export { CourseObjectCard } from './components/CourseObjectCard/CourseObjectCard'
export type {
  CourseObjectCardProps,
  CourseObjectCardFacepileProps,
  CourseObjectCardBottomBar,
} from './components/CourseObjectCard/CourseObjectCard'

export { ProjectObjectCard } from './components/ProjectObjectCard/ProjectObjectCard'
export type {
  ProjectObjectCardProps,
  ProjectObjectCardFacepileProps,
} from './components/ProjectObjectCard/ProjectObjectCard'

export { PeopleObjectCard } from './components/PeopleObjectCard/PeopleObjectCard'
export type {
  PeopleObjectCardProps,
  PeopleObjectCardAvatarProps,
} from './components/PeopleObjectCard/PeopleObjectCard'

export { MentorInsightCard } from './components/MentorInsightCard/MentorInsightCard'
export type { MentorInsightCardProps } from './components/MentorInsightCard/MentorInsightCard'

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from './components/NavigationMenu/NavigationMenu'
export type { NavigationMenuVariant } from './components/NavigationMenu/NavigationMenu'

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants } from './components/Tabs/Tabs'

export {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableHead,
  DataTableCell,
} from './components/DataTable/DataTable'

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './components/Select/Select'

export { Progress } from './components/Progress'
export type { ProgressProps, ProgressLabelVariant } from './components/Progress'

export {
  Stepper,
  StepperList,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from './components/Stepper'
export type {
  StepperProps,
  StepperListProps,
  StepperItemProps,
  StepperTriggerProps,
  StepperIndicatorProps,
  StepperIndicatorState,
  StepperTitleProps,
  StepperDescriptionProps,
  StepperSeparatorProps,
} from './components/Stepper'

export { NumberBadge } from './components/NumberBadge/NumberBadge'
export type { NumberBadgeProps, NumberBadgeColor, NumberBadgeSize } from './components/NumberBadge/NumberBadge'

export { StatCard } from './components/StatCard/StatCard'
export type { StatCardProps, StatCardColor, StatCardSize, StatCardVariant, StatCardBadge } from './components/StatCard/StatCard'
export { StatCardGroup } from './components/StatCard/StatCardGroup'
export type { StatCardGroupProps } from './components/StatCard/StatCardGroup'

export { Navbar } from './components/Navbar/Navbar'
export {
  Header,
  HeaderActions,
  HeaderGroup,
  HeaderTitle,
  HeaderToolbar,
  HeaderTextGroup,
  HeaderSecondary,
} from './components/Navbar/Header'
export type {
  CareerHubHeaderSize,
  HeaderProps,
  HeaderToolbarProps,
  HeaderVariant,
} from './components/Navbar/Header'

export { ProductBackground } from './components/ProductBackground'
export type {
  CareerHubChevronsVariant,
  ProductBackgroundProps,
  ProductBackgroundVariant,
} from './components/ProductBackground'
export type {
  NavbarProps,
  NavbarTab,
  NavbarTabSubItem,
  NavbarAvatarMenuItem,
  NavbarActionButton,
  NavbarSwitchOption,
  NavbarUser,
} from './components/Navbar/Navbar.types'

export {
  productLogos,
  PRODUCT_NAMES,
  PRIMARY_NAVBAR_PRODUCT_IDS,
  getProductLogoPath,
  getNavbarProductConfig,
  EIGHTFOLD_LOGO_PATH,
  AI_AGENT_LOGO_PATH,
  COPILOT_LOGO_PATH,
} from './product-logos'
export type {
  ProductLogoId,
  ProductLogoSize,
  NavbarProductConfig,
  PrimaryNavbarProductId,
} from './product-logos'

export {
  EMPLOYEE_NON_MANAGER_TABS,
  EMPLOYEE_AVATAR_MENU_ITEMS,
  MANAGER_TABS,
  CAREER_HUB_CHRO_TABS,
  CAREER_HUB_HRBP_TABS,
  TALENT_ACQUISITION_RECRUITER_TABS,
  TALENT_ACQUISITION_ACTION_BUTTONS,
  TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
} from './navbar-tabs'

export { CareerHubShell } from './components/CareerHubShell'
export type { CareerHubShellProps } from './components/CareerHubShell'

export { SPACING_TOKENS, CORNER_RADIUS_TOKENS } from './tokens'
export type { SpacingKey, CornerRadiusKey } from './tokens'
