/**
 * EF product logo paths for Navbar and other components.
 * Serve the `public/` folder from your app (or copy into your public dir)
 * so these paths resolve.
 *
 * **Primary navbar products** (Octuple): **Talent Acquisition** and **Career Hub**.
 * Additional `ProductLogoId` values exist for logos where apps need other products.
 * Pass productName, productIconSrc, and tabs from the active user’s product and persona.
 */

/** Path to the main Eightfold (EF) brand logo for use in Navbar logoSrc. */
export const EIGHTFOLD_LOGO_PATH = '/eightfold-logo.svg'

/** Path to the AI Agent brand logo (full color, hi-fi). */
export const AI_AGENT_LOGO_PATH = '/ai-agent.svg'

/** Path to the Copilot brand logo (full color, hi-fi). */
export const COPILOT_LOGO_PATH = '/copilot.svg'

/** Config for Navbar product branding; resolve from ProductLogoId based on user/persona. */
export interface NavbarProductConfig {
  productName: string
  productIconSrc: string
}

export type ProductLogoSize = 'small' | 'medium'

/** The two primary Navbar product variants. */
export const PRIMARY_NAVBAR_PRODUCT_IDS = ['talent-acquisition', 'career-hub'] as const
export type PrimaryNavbarProductId = (typeof PRIMARY_NAVBAR_PRODUCT_IDS)[number]

export type ProductLogoId =
  | 'campaigns'
  | 'career-exchange'
  | 'career-hub'
  | 'customer-community'
  | 'resource-management'
  | 'talent-acquisition'
  | 'talent-design'
  | 'talent-flex'
  | 'talent-university'

/** Display name for each product (for Navbar productName, etc.) */
export const PRODUCT_NAMES: Record<ProductLogoId, string> = {
  campaigns: 'Campaigns',
  'career-exchange': 'Career Exchange',
  'career-hub': 'Career Hub',
  'customer-community': 'Customer Community',
  'resource-management': 'Resource management',
  'talent-acquisition': 'Talent Acquisition',
  'talent-design': 'Talent Design',
  'talent-flex': 'Talent Flex',
  'talent-university': 'Talent University',
}

const BASE = '/product-logos'

/** Logo filename (no path) per product and size */
const LOGO_FILES: Record<ProductLogoId, Record<ProductLogoSize, string>> = {
  campaigns: { small: 'campaigns-small.svg', medium: 'campaigns-medium.svg' },
  'career-exchange': { small: 'career-exchange-small.svg', medium: 'career-exchange-medium.svg' },
  'career-hub': { small: 'career-hub-small.svg', medium: 'career-hub-medium.svg' },
  'customer-community': { small: 'customer-community-small.svg', medium: 'customer-community-medium.svg' },
  'resource-management': { small: 'resource-management-small.svg', medium: 'resource-management-medium.svg' },
  'talent-acquisition': { small: 'talent-acquisition-small.svg', medium: 'talent-acquisition-medium.svg' },
  'talent-design': { small: 'talent-design-small.svg', medium: 'talent-design-medium.svg' },
  'talent-flex': { small: 'talent-flex-small.svg', medium: 'talent-flex-medium.svg' },
  'talent-university': { small: 'talent-university-small.svg', medium: 'talent-university-medium.svg' },
}

/**
 * Get the URL path for a product logo.
 * Use with your app's base URL if needed (e.g. in SPA: basePath + path).
 */
export function getProductLogoPath(product: ProductLogoId, size: ProductLogoSize = 'medium'): string {
  return `${BASE}/${LOGO_FILES[product][size]}`
}

/**
 * Get Navbar product display config for a product id.
 * Use when the current product is determined by user/persona (e.g. current product is Career Hub).
 * Pass the result to Navbar as productName and productIconSrc, and pass tabs appropriate for that persona.
 */
export function getNavbarProductConfig(productId: ProductLogoId, size: ProductLogoSize = 'medium'): NavbarProductConfig {
  return {
    productName: PRODUCT_NAMES[productId],
    productIconSrc: `${BASE}/${LOGO_FILES[productId][size]}`,
  }
}

/**
 * All product logo paths: productId -> { small, medium }.
 * Useful for Navbar: productIconSrc={productLogos['career-hub'].medium}
 */
export const productLogos: Record<ProductLogoId, Record<ProductLogoSize, string>> = (
  Object.keys(LOGO_FILES) as ProductLogoId[]
).reduce(
  (acc, id) => {
    acc[id] = {
      small: `${BASE}/${LOGO_FILES[id].small}`,
      medium: `${BASE}/${LOGO_FILES[id].medium}`,
    }
    return acc
  },
  {} as Record<ProductLogoId, Record<ProductLogoSize, string>>
)
