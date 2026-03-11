import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Badge – Octuple DS Theme 2. Figma: node 21022-227242.
 * Small (24h): 35×24, Tag/Corner radius/Small, Tag/Padding Small, gap 8.
 * Medium (30h): 43×30, Tag/Corner radius/Medium, Tag/Padding Medium, gap 8.
 * Large (44h): 55×44, Tag/Corner radius/Large, Tag/Padding Large, gap 8.
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center overflow-hidden border border-transparent font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] [a&]:hover:bg-[var(--color-button-primary-bg-hover)]",
        primary:
          "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] [a&]:hover:bg-[var(--color-button-primary-bg-hover)]",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
      size: {
        '44': "h-11 min-w-[55px] gap-[var(--spacing-4)] rounded-[var(--radius-2)] py-[var(--spacing-4)] px-[var(--spacing-8)] font-[var(--typography-button3)] text-sm",
        '30': "h-[30px] min-w-[43px] gap-[var(--spacing-4)] rounded-[var(--radius-2)] py-[var(--spacing-3)] px-[var(--spacing-6)] font-[var(--typography-caption)] text-xs",
        '24': "h-6 min-w-[35px] gap-[var(--spacing-4)] rounded-[var(--radius-2)] py-[var(--spacing-1)] px-[var(--spacing-2)] font-[var(--typography-caption)] text-xs",
        none: "rounded-none border-0 bg-transparent px-0 py-0 font-[var(--typography-caption)] text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "24",
    },
  }
)

function Badge({
  className,
  variant = "default",
  size = "24",
  asChild = false,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    leadingIcon?: React.ReactNode
    trailingIcon?: React.ReactNode
  }) {
  const Comp = asChild ? Slot.Root : "span"

  const content = asChild ? (
    children
  ) : (
    <>
      {leadingIcon}
      {children}
      {trailingIcon}
    </>
  )

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {content}
    </Comp>
  )
}

export { Badge, badgeVariants }
