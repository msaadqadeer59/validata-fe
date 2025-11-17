"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

const tooltipContentVariants = cva(
  "backdrop-blur-sm backdrop-filter bg-[var(--color-tooltip-bg)] flex items-center justify-center overflow-clip px-[var(--spacing-tooltip-padding-x)] py-[var(--spacing-tooltip-padding-y)] rounded-[var(--radius-tooltip)] z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      arrowPlacement: {
        left: "",
        middle: "",
        right: "",
      },
    },
    defaultVariants: {
      arrowPlacement: "middle",
    },
  }
)

// Arrow SVG path - simple triangle pointing down
const arrowPath = "M5 5L0 0H10L5 5Z"

// Custom Arrow Component matching Figma design exactly
const TooltipArrow = React.forwardRef<
  HTMLDivElement,
  {
    side?: "top" | "right" | "bottom" | "left"
    arrowPlacement?: "left" | "middle" | "right"
    className?: string
  }
>(({ side = "top", arrowPlacement = "middle", className }, ref) => {
  const isMiddle = arrowPlacement === "middle"
  const arrowWidth = isMiddle ? "10.001px" : "30.001px"

  // Top arrow (Form upper) - arrow above content
  if (side === "top") {
    return (
      <div
        ref={ref}
        className={cn("h-[5px] relative shrink-0", className)}
        style={{ width: arrowWidth }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-[8.28%]">
          <svg
            width={isMiddle ? 10 : 30}
            height={5}
            viewBox={isMiddle ? "0 0 10 5" : "0 0 30 5"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block max-w-none size-full"
          >
            <path
              d={isMiddle ? "M5 5L0 0H10L5 5Z" : "M15 5L0 0H30L15 5Z"}
              fill="var(--color-tooltip-arrow)"
            />
          </svg>
        </div>
      </div>
    )
  }

  // Bottom arrow (From bottom) - arrow below content
  if (side === "bottom") {
    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center relative shrink-0", className)}
      >
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[5px] relative" style={{ width: arrowWidth }}>
            <div className="absolute bottom-0 left-0 right-0 top-[8.28%]">
              <svg
                width={isMiddle ? 10 : 30}
                height={5}
                viewBox={isMiddle ? "0 0 10 5" : "0 0 30 5"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block max-w-none size-full"
              >
                <path
                  d={isMiddle ? "M5 5L0 0H10L5 5Z" : "M15 5L0 0H30L15 5Z"}
                  fill="var(--color-tooltip-arrow)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Left arrow (From left) - arrow to the left of content
  if (side === "left") {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center relative shrink-0",
          className
        )}
        style={{
          width: "5px",
          height: "10.001px",
        }}
      >
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <div className="h-[5px] relative w-[10.001px]">
            <div className="absolute bottom-0 left-0 right-0 top-[8.28%]">
              <svg
                width={10}
                height={5}
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block max-w-none size-full"
              >
                <path d={arrowPath} fill="var(--color-tooltip-arrow)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Right arrow (From right) - arrow to the right of content
  if (side === "right") {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center relative shrink-0",
          className
        )}
        style={{
          width: "5px",
          height: "10.001px",
        }}
      >
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="h-[5px] relative w-[10.001px]">
            <div className="absolute bottom-0 left-0 right-0 top-[8.28%]">
              <svg
                width={10}
                height={5}
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block max-w-none size-full"
              >
                <path d={arrowPath} fill="var(--color-tooltip-arrow)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
})

TooltipArrow.displayName = "TooltipArrow"

interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content>,
  VariantProps<typeof tooltipContentVariants> {
  arrowPlacement?: "left" | "middle" | "right"
}

function TooltipContent({
  className,
  sideOffset = 8,
  children,
  arrowPlacement = "middle",
  side = "top",
  ...props
}: TooltipContentProps & { side?: "top" | "right" | "bottom" | "left" }) {
  const contentElement = (
    <p className="font-sans font-medium leading-[20px] max-w-[400px] text-[12px] text-[var(--color-tooltip-text)] tracking-[-0.24px] whitespace-pre">
      {children}
    </p>
  )

  const containerClasses = cn(
    tooltipContentVariants({ arrowPlacement }),
    side === "top" || side === "bottom"
      ? "flex flex-col"
      : "flex items-center",
    arrowPlacement === "left" && (side === "top" || side === "bottom") && "items-start",
    arrowPlacement === "right" && (side === "top" || side === "bottom") && "items-end",
    arrowPlacement === "middle" && (side === "top" || side === "bottom") && "items-center",
    className
  )

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        side={side}
        className={containerClasses}
        {...props}
      >
        {side === "top" && (
          <>
            <TooltipArrow side={side} arrowPlacement={arrowPlacement} />
            {contentElement}
          </>
        )}
        {side === "bottom" && (
          <>
            {contentElement}
            <TooltipArrow side={side} arrowPlacement={arrowPlacement} />
          </>
        )}
        {side === "left" && (
          <>
            <TooltipArrow side={side} arrowPlacement={arrowPlacement} />
            {contentElement}
          </>
        )}
        {side === "right" && (
          <>
            {contentElement}
            <TooltipArrow side={side} arrowPlacement={arrowPlacement} />
          </>
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipArrow }
export type { TooltipContentProps }
