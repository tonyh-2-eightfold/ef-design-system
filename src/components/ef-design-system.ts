/**
 * ef-design-system — Barrel export for all Eightfold design system components.
 *
 * Import from: import { Button, Badge, StatCard } from "@/components/ef-design-system"
 *
 * Components are now native to the boilerplate at src/components/{ComponentName}/.
 * This file re-exports them all from a single entry point for convenience.
 */
export { Button } from './Button/Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button/Button'
export { buttonVariants } from './Button/Button'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './DropdownMenu'
export { ButtonDropdown } from './ButtonDropdown'
export type { ButtonDropdownProps } from './ButtonDropdown'

export { Input } from './Input/Input'
export type { InputProps, InputSize, InputState, InputShape } from './Input/Input'

export { Pill } from './Pill/Pill'
export type { PillProps, PillVariant, PillSize } from './Pill/Pill'

export { SkillTag } from './SkillTag/SkillTag'
export type { SkillTagProps, SkillTagVariant, SkillTagSize, SkillTagAction, SkillTagTrend } from './SkillTag/SkillTag'

export { Tag, TagGroup } from './Tag'
export type { TagProps, TagSize, TagVariant, TagColor, TagGroupProps, TagGroupType } from './Tag'

export { Badge, badgeVariants } from './Badge'
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge'

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './Breadcrumb'
export type { BreadcrumbLinkProps } from './Breadcrumb'

export { OpenTo } from './OpenTo/OpenTo'
export type { OpenToProps, OpenToItem } from './OpenTo/OpenTo'

export { InsightCard } from './InsightCard/InsightCard'
export type { InsightCardProps } from './InsightCard/InsightCard'

export { CourseObjectCard } from './CourseObjectCard/CourseObjectCard'
export type {
  CourseObjectCardProps,
  CourseObjectCardFacepileProps,
  CourseObjectCardBottomBar,
} from './CourseObjectCard/CourseObjectCard'

export { ProjectObjectCard } from './ProjectObjectCard/ProjectObjectCard'
export type {
  ProjectObjectCardProps,
  ProjectObjectCardFacepileProps,
} from './ProjectObjectCard/ProjectObjectCard'

export { PeopleObjectCard } from './PeopleObjectCard/PeopleObjectCard'
export type {
  PeopleObjectCardProps,
  PeopleObjectCardAvatarProps,
} from './PeopleObjectCard/PeopleObjectCard'

export { MentorInsightCard } from './MentorInsightCard/MentorInsightCard'
export type { MentorInsightCardProps } from './MentorInsightCard/MentorInsightCard'

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from './NavigationMenu/NavigationMenu'
export type { NavigationMenuVariant } from './NavigationMenu/NavigationMenu'

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants } from './Tabs/Tabs'

export {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableHead,
  DataTableCell,
} from './DataTable/DataTable'

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
} from './Select/Select'

export { Progress } from './Progress'
export type { ProgressProps, ProgressLabelVariant } from './Progress'

export {
  Stepper,
  StepperList,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from './Stepper'
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
} from './Stepper'

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogBody,
  DialogOverlay,
  DialogPortal,
  DialogStepper,
  DialogTitle,
  DialogTrigger,
} from './Dialog/Dialog'
export type { DialogContentProps, DialogStepperStep } from './Dialog/Dialog'

export { NumberBadge } from './NumberBadge/NumberBadge'
export type { NumberBadgeProps, NumberBadgeColor, NumberBadgeSize } from './NumberBadge/NumberBadge'

export { StatCard } from './StatCard/StatCard'
export type { StatCardProps, StatCardColor, StatCardSize, StatCardVariant, StatCardBadge } from './StatCard/StatCard'
export { StatCardGroup } from './StatCard/StatCardGroup'
export type { StatCardGroupProps } from './StatCard/StatCardGroup'

export { Navbar } from './Navbar/Navbar'
export {
  Header,
  HeaderActions,
  HeaderGroup,
  HeaderTitle,
  HeaderToolbar,
  HeaderTextGroup,
  HeaderSecondary,
} from './Navbar/Header'
export type {
  CareerHubHeaderSize,
  HeaderProps,
  HeaderToolbarProps,
  HeaderVariant,
} from './Navbar/Header'

export { ProductBackground } from './ProductBackground'
export type {
  CareerHubChevronsVariant,
  ProductBackgroundProps,
  ProductBackgroundVariant,
} from './ProductBackground'
export type {
  NavbarProps,
  NavbarTab,
  NavbarTabSubItem,
  NavbarAvatarMenuItem,
  NavbarActionButton,
  NavbarSwitchOption,
  NavbarUser,
} from './Navbar/Navbar.types'

export { CareerHubShell } from './CareerHubShell'
export type { CareerHubShellProps } from './CareerHubShell'

export { SPACING_TOKENS, CORNER_RADIUS_TOKENS } from '../tokens'
export type { SpacingKey, CornerRadiusKey } from '../tokens'

export { EmptyIllustration } from './EmptyIllustration'
export type { EmptyIllustrationProps, EmptyIllustrationVariant, EmptyVariant } from './EmptyIllustration'
