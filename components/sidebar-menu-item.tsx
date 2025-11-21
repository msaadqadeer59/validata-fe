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
        true: "bg-gray-50 hover:bg-gray-100 focus-visible:bg-gray-50",
        false: "hover:bg-gray-50 focus-visible:bg-gray-50",
      },
      collapsed: {
        true: "justify-center p-1 size-8",
        false: "pl-1 pr-1.5 py-1 w-[253px]",
      },
      disabled: {
        true: "opacity-30 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
      collapsed: false,
      disabled: false,
    },
  }
)

interface SidebarMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  Omit<VariantProps<typeof sidebarMenuItemVariants>, "disabled"> {
  icon: LucideIcon | React.ComponentType<{ className?: string }>
  label: string
  count?: number | string
  badge?: string
  tooltipText?: string
}

const SidebarMenuItem = React.forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  (
    {
      className,
      active = false,
      collapsed = false,
      disabled,
      icon: Icon,
      label,
      count,
      badge,
      tooltipText,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled ?? false

    const content = (
      <>
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-6">
          <div className="overflow-clip relative shrink-0 size-4">
            <Icon className={cn(
              "size-4 transition-colors",
              isDisabled
                ? "text-gray-500"
                : active
                  ? "text-gray-950 group-hover:text-gray-950 group-focus-visible:text-gray-950"
                  : "text-gray-500 group-hover:text-gray-950 group-focus-visible:text-gray-950"
            )} />
          </div>
        </div>
        {!collapsed && (
          <>
            <p
              className={cn(
                "basis-0 font-sans font-medium grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-sm tracking-[-0.28px] text-left transition-colors",
                isDisabled
                  ? "text-[#6A6A7E] opacity-30"
                  : active
                    ? "text-[#6A6A7E]"
                    : "text-[#6A6A7E]"
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
          <p className="absolute font-sans font-medium leading-5 left-8 not-italic opacity-0 text-[#6A6A7E] text-sm top-1.5 tracking-tight w-[215px] pointer-events-none">
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
            active,
            collapsed,
            disabled: isDisabled,
          }),
          "group focus-visible:overflow-clip focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
          className
        )}
        disabled={isDisabled}
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
          <TooltipContent side="right">
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

