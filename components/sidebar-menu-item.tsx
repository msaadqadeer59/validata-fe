import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Count } from "./count"
import { Badge } from "./badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { LucideIcon } from "lucide-react"

const sidebarMenuItemVariants = cva(
  "box-border content-stretch flex gap-1 items-center justify-start h-8 rounded-[10px] transition-colors outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
  {
    variants: {
      active: {
        true: "bg-gray-50",
        false: "",
      },
      state: {
        default: "",
        hover: "",
        focus: "overflow-clip shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
        disabled: "opacity-30 cursor-not-allowed",
      },
      collapsed: {
        true: "justify-center p-1 size-8",
        false: "pl-1 pr-1.5 py-1 w-[253px]",
      },
    },
    compoundVariants: [
      {
        active: true,
        state: "hover",
        className: "bg-gray-100",
      },
      {
        active: true,
        state: "focus",
        className: "bg-gray-50",
      },
      {
        active: false,
        state: "hover",
        className: "bg-gray-50",
      },
      {
        active: false,
        state: "focus",
        className: "bg-gray-50",
      },
    ],
    defaultVariants: {
      active: false,
      state: "default",
      collapsed: false,
    },
  }
)

interface SidebarMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof sidebarMenuItemVariants> {
  icon: LucideIcon | React.ComponentType<{ className?: string }>
  label: string
  count?: number | string
  badge?: string
  tooltipText?: string
  asChild?: boolean
}

const SidebarMenuItem = React.forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  (
    {
      className,
      active = false,
      state = "default",
      collapsed = false,
      icon: Icon,
      label,
      count,
      badge,
      tooltipText,
      disabled,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState<"default" | "hover" | "focus">("default")
    const effectiveState = disabled ? "disabled" : (state !== "default" ? state : internalState)
    const effectiveActive = disabled ? active : active

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && state === "default") {
        setInternalState("hover")
      }
      onMouseEnter?.(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && state === "default") {
        setInternalState("default")
      }
      onMouseLeave?.(e)
    }

    const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
      if (!disabled && state === "default") {
        setInternalState("focus")
      }
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
      if (!disabled && state === "default") {
        setInternalState("default")
      }
      onBlur?.(e)
    }

    const iconColor = React.useMemo(() => {
      if (effectiveState === "disabled") {
        return "text-gray-500"
      }
      if (effectiveActive || effectiveState === "hover" || effectiveState === "focus") {
        return "text-gray-950"
      }
      return "text-gray-500"
    }, [effectiveActive, effectiveState])

    const textColor = React.useMemo(() => {
      if (effectiveState === "disabled") {
        return "text-gray-600"
      }
      if (effectiveActive || effectiveState === "hover" || effectiveState === "focus") {
        return "text-gray-950"
      }
      return "text-gray-600"
    }, [effectiveActive, effectiveState])

    const content = (
      <>
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-6">
          <div className="overflow-clip relative shrink-0 size-4">
            <Icon className={cn("size-4", iconColor)} />
          </div>
        </div>
        {!collapsed && (
          <>
            <p
              className={cn(
                "basis-0 font-sans font-medium grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-sm tracking-[-0.28px] text-left",
                textColor
              )}
            >
              {label}
            </p>
            {count !== undefined && (
              <Count
                count={count}
                className="bg-white border border-gray-200 min-w-[20px] relative rounded-[6px] shrink-0  "
              />
            )}
            {badge && (
              <Badge variant="green" className="rounded-[6px] px-1">
                {badge}
              </Badge>
            )}
          </>
        )}
        {collapsed && (
          <p className="absolute font-sans font-medium leading-5 left-8 not-italic opacity-0 text-gray-600 text-sm top-1.5 tracking-tight w-[215px] pointer-events-none">
            {label}
          </p>
        )}
      </>
    )

    const button = (
      <button
        ref={ref}
        className={cn(
          sidebarMenuItemVariants({
            active: effectiveActive,
            state: effectiveState,
            collapsed,
          }),
          className
        )}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {content}
      </button>
    )

    if (collapsed && tooltipText) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {button}
          </TooltipTrigger>
          <TooltipContent side="right" arrowPlacement="middle">
            {tooltipText}
          </TooltipContent>
        </Tooltip>
      )
    }

    return button
  }
)

SidebarMenuItem.displayName = "SidebarMenuItem"

export { SidebarMenuItem, sidebarMenuItemVariants }
export type { SidebarMenuItemProps }

