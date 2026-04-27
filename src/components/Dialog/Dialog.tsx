import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import { Stepper } from '@/components/Stepper/Stepper'
import { StepperList } from '@/components/Stepper/StepperList'
import { StepperItem } from '@/components/Stepper/StepperItem'
import { StepperIndicator } from '@/components/Stepper/StepperIndicator'
import { StepperTitle } from '@/components/Stepper/StepperTitle'
import { StepperSeparator } from '@/components/Stepper/StepperSeparator'
import './Dialog.css'

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn('ef-dialog__overlay', className)}
      {...props}
    />
  )
}

export interface DialogStepperStep {
  label: string
}

export interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean
  /** Steps for the built-in compact stepper. Renders a size="sm" stepper below the header. */
  steps?: DialogStepperStep[]
  /** Current step index (0-based). Required when steps is provided. */
  currentStep?: number
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  steps,
  currentStep = 0,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn('ef-dialog__content', className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" className="ef-dialog__close-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden>
              close
            </span>
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('ef-dialog__header', className)}
      {...props}
    />
  )
}

function DialogStepper({ steps, currentStep = 0, className }: { steps: DialogStepperStep[]; currentStep?: number; className?: string }) {
  return (
    <Stepper value={currentStep} size="sm" className={cn('ef-dialog__stepper', className)}>
      <StepperList>
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            {i > 0 && <StepperSeparator />}
            <StepperItem>
              <StepperIndicator />
              <StepperTitle>{step.label}</StepperTitle>
            </StepperItem>
          </React.Fragment>
        ))}
      </StepperList>
    </Stepper>
  )
}

function DialogBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-body"
      className={cn('ef-dialog__body', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('ef-dialog__footer', className)}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('ef-dialog__title', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('ef-dialog__description', className)}
      {...props}
    />
  )
}

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
}
