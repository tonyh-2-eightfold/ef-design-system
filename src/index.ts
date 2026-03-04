import './styles/index.css'

export { Button } from './components/Button/Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button'
export { buttonVariants } from './components/Button/Button'

export { Input } from './components/Input/Input'
export type { InputProps, InputSize, InputState, InputShape } from './components/Input/Input'

export { Pill } from './components/Pill/Pill'
export type { PillProps, PillVariant, PillSize } from './components/Pill/Pill'

export { SkillTag } from './components/SkillTag/SkillTag'
export type { SkillTagProps, SkillTagVariant } from './components/SkillTag/SkillTag'

export { Tag, TagGroup } from './components/Tag'
export type { TagProps, TagSize, TagVariant, TagGroupProps, TagGroupType } from './components/Tag'

export { OpenTo } from './components/OpenTo/OpenTo'
export type { OpenToProps, OpenToItem } from './components/OpenTo/OpenTo'

export { ObjectCard } from './components/ObjectCard/ObjectCard'
export type { ObjectCardProps } from './components/ObjectCard/ObjectCard'

export { CourseObjectCard } from './components/CourseObjectCard/CourseObjectCard'
export type { CourseObjectCardProps } from './components/CourseObjectCard/CourseObjectCard'

export { PeopleObjectCard } from './components/PeopleObjectCard/PeopleObjectCard'
export type { PeopleObjectCardProps } from './components/PeopleObjectCard/PeopleObjectCard'

export { MentorObjectCard } from './components/MentorObjectCard/MentorObjectCard'
export type { MentorObjectCardProps } from './components/MentorObjectCard/MentorObjectCard'

export { Navbar } from './components/Navbar/Navbar'
export type {
  NavbarProps,
  NavbarTab,
  NavbarAvatarMenuItem,
  NavbarActionButton,
  NavbarSwitchOption,
  NavbarUser,
} from './components/Navbar/Navbar.types'

export {
  productLogos,
  PRODUCT_NAMES,
  getProductLogoPath,
  getNavbarProductConfig,
  EIGHTFOLD_LOGO_PATH,
  AI_AGENT_LOGO_PATH,
  COPILOT_LOGO_PATH,
} from './product-logos'
export type { ProductLogoId, ProductLogoSize, NavbarProductConfig } from './product-logos'

export {
  EMPLOYEE_NON_MANAGER_TABS,
  EMPLOYEE_AVATAR_MENU_ITEMS,
  MANAGER_TABS,
  TALENT_ACQUISITION_RECRUITER_TABS,
  TALENT_ACQUISITION_ACTION_BUTTONS,
  TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
} from './navbar-tabs'

export { SPACING_TOKENS, CORNER_RADIUS_TOKENS } from './tokens'
export type { SpacingKey, CornerRadiusKey } from './tokens'
