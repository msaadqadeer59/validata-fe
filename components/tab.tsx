import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Count } from "@/components/count"
import { ChartIcon } from "@/assets"
import Image from "next/image"

const tabVariants = cva(
  "box-border border-red-400 content-stretch flex items-center justify-center relative cursor-pointer",
  {
    variants: {
      type: {
        buttons: "",
        "underline-border": "px-0 py-4",
        default: "",
      },
      size: {
        sm: "",
        md: "",
      },
      active: {
        true: "",
        false: "",
      },
      state: {
        default: "",
        hover: "",
        focus: "",
        disabled: "opacity-30",
      },
    },
    compoundVariants: [
      // Buttons type - sm size
      {
        type: "buttons",
        size: "sm",
        active: true,
        state: "default",
        class: "bg-gray-50 p-1 rounded-lg",
      },
      {
        type: "buttons",
        size: "sm",
        active: true,
        state: "hover",
        class: "bg-gray-100 px-1.5 py-1 rounded-lg",
      },
      {
        type: "buttons",
        size: "sm",
        active: true,
        state: "focus",
        class: "bg-gray-50 p-1 rounded-lg shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        type: "buttons",
        size: "sm",
        active: true,
        state: "disabled",
        class: "bg-gray-50 p-1 rounded-lg",
      },
      {
        type: "buttons",
        size: "sm",
        active: false,
        state: "default",
        class: "p-1 rounded-lg",
      },
      {
        type: "buttons",
        size: "sm",
        active: false,
        state: "hover",
        class: "bg-gray-50 p-1 rounded-lg",
      },
      {
        type: "buttons",
        size: "sm",
        active: false,
        state: "focus",
        class: "bg-white p-1 rounded-lg shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        type: "buttons",
        size: "sm",
        active: false,
        state: "disabled",
        class: "p-1 rounded-lg",
      },
      // Buttons type - md size
      {
        type: "buttons",
        size: "md",
        active: true,
        state: "default",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "buttons",
        size: "md",
        active: true,
        state: "hover",
        class: "bg-gray-50 border border-gray-200 rounded-[10px]",
      },
      {
        type: "buttons",
        size: "md",
        active: true,
        state: "focus",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "buttons",
        size: "md",
        active: true,
        state: "disabled",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "buttons",
        size: "md",
        active: false,
        state: "default",
        class: "rounded-[10px]",
      },
      {
        type: "buttons",
        size: "md",
        active: false,
        state: "hover",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "buttons",
        size: "md",
        active: false,
        state: "focus",
        class: "bg-white/5 rounded-[10px] shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        type: "buttons",
        size: "md",
        active: false,
        state: "disabled",
        class: "rounded-[10px]",
      },
      // Default type - md size
      {
        type: "default",
        size: "md",
        active: true,
        state: "default",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "default",
        size: "md",
        active: true,
        state: "hover",
        class: "bg-gray-50 border border-gray-200 rounded-[10px]",
      },
      {
        type: "default",
        size: "md",
        active: true,
        state: "focus",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "default",
        size: "md",
        active: true,
        state: "disabled",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "default",
        size: "md",
        active: false,
        state: "default",
        class: "rounded-[10px]",
      },
      {
        type: "default",
        size: "md",
        active: false,
        state: "hover",
        class: "bg-white border border-gray-200 rounded-[10px]",
      },
      {
        type: "default",
        size: "md",
        active: false,
        state: "focus",
        class: "bg-white/5 rounded-[10px] shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        type: "default",
        size: "md",
        active: false,
        state: "disabled",
        class: "rounded-[10px]",
      },
      // Underline border type - sm size
      {
        type: "underline-border",
        size: "sm",
        active: true,
        state: "default",
        class: "border-b border-blue-600 border-solid",
      },
      {
        type: "underline-border",
        size: "sm",
        active: true,
        state: "hover",
        class: "border-b border-blue-600 border-solid",
      },
      {
        type: "underline-border",
        size: "sm",
        active: true,
        state: "focus",
        class: "border-b border-blue-600 border-solid",
      },
      {
        type: "underline-border",
        size: "sm",
        active: true,
        state: "disabled",
        class: "border-b border-blue-600 border-solid",
      },
      {
        type: "underline-border",
        size: "sm",
        active: false,
        state: "default",
        class: "",
      },
      {
        type: "underline-border",
        size: "sm",
        active: false,
        state: "hover",
        class: "",
      },
      {
        type: "underline-border",
        size: "sm",
        active: false,
        state: "focus",
        class: "",
      },
      {
        type: "underline-border",
        size: "sm",
        active: false,
        state: "disabled",
        class: "",
      },
      // Underline border type - md size
      {
        type: "underline-border",
        size: "md",
        active: true,
        state: "default",
        class: "border-b border-[#060510] border-solid",
      },
      {
        type: "underline-border",
        size: "md",
        active: true,
        state: "hover",
        class: "border-b border-[#060510] border-solid",
      },
      {
        type: "underline-border",
        size: "md",
        active: true,
        state: "focus",
        class: "border-b border-[#060510] border-solid",
      },
      {
        type: "underline-border",
        size: "md",
        active: true,
        state: "disabled",
        class: "border-b border-[#060510] border-solid",
      },
      {
        type: "underline-border",
        size: "md",
        active: false,
        state: "default",
        class: "",
      },
      {
        type: "underline-border",
        size: "md",
        active: false,
        state: "hover",
        class: "",
      },
      {
        type: "underline-border",
        size: "md",
        active: false,
        state: "focus",
        class: "",
      },
      {
        type: "underline-border",
        size: "md",
        active: false,
        state: "disabled",
        class: "",
      },
    ],
    defaultVariants: {
      type: "buttons",
      size: "sm",
      active: true,
      state: "default",
    },
  }
)

const tabContentVariants = cva(
  "box-border content-stretch flex items-center justify-center relative shrink-0",
  {
    variants: {
      type: {
        buttons: "",
        "underline-border": "",
        default: "",
      },
      size: {
        sm: "",
        md: "",
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        type: "buttons",
        size: "sm",
        class: "gap-1 p-1",
      },
      {
        type: "buttons",
        size: "md",
        class: "gap-1.5 pl-2 pr-1.5 py-1.5",
      },
      {
        type: "default",
        size: "md",
        class: "gap-1.5 pl-2 pr-1.5 py-1.5",
      },
      {
        type: "underline-border",
        size: "sm",
        active: true,
        class: "gap-1 p-1 bg-gray-50 rounded-lg",
      },
      {
        type: "underline-border",
        size: "sm",
        active: false,
        class: "gap-1 p-1 rounded-lg",
      },
      {
        type: "underline-border",
        size: "md",
        active: true,
        class: "gap-1.5 pl-2 pr-1.5 py-1.5 bg-gray-50 rounded-[10px]",
      },
      {
        type: "underline-border",
        size: "md",
        active: false,
        class: "gap-1.5 pl-2 pr-1.5 py-1.5 rounded-[10px]",
      },
    ],
    defaultVariants: {
      type: "buttons",
      size: "sm",
      active: true,
    },
  }
)

interface TabProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tabVariants> {
  text?: string
  showCount?: boolean
  count?: number | string
  icon?: React.ReactNode
  showIcon?: boolean
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      className,
      type = "buttons",
      size = "sm",
      active = true,
      state = "default",
      text = "General",
      showCount = true,
      count = 3,
      icon,
      showIcon = false,
      ...props
    },
    ref
  ) => {
    const defaultIcon = showIcon && !icon ? (
      <Image src={ChartIcon} alt="Chart" width={16} height={16} />
    ) : null
    const displayIcon = showIcon ? (icon || defaultIcon) : null

    // Handle focus and hover states for underline-border type content
    const getContentClasses = () => {
      const baseClasses = tabContentVariants({ type, size, active })
      if (type === "underline-border") {
        if (state === "hover") {
          return cn(baseClasses, "bg-gray-50")
        }
        if (state === "focus") {
          const focusShadow = "shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]"
          return cn(baseClasses, active ? "bg-gray-50" : "bg-white", focusShadow)
        }
      }
      return baseClasses
    }

    return (
      <div
        ref={ref}
        className={cn(tabVariants({ type, size, active, state }), className)}
        {...props}
      >
        <div className={getContentClasses()}>
          {displayIcon && size === "md" && (
            <div className="shrink-0 size-4 overflow-clip relative">
              {displayIcon}
            </div>
          )}
          <div className="box-border content-stretch flex gap-2 items-center justify-center px-0.5 py-0 relative shrink-0">
            <p
              className={cn(
                "font-sans font-medium leading-5 relative shrink-0 text-sm text-nowrap tracking-tight whitespace-pre",
                active ? "text-gray-950" : "text-gray-600"
              )}
            >
              {text}
            </p>
          </div>
          {showCount && (
            <Count
              className="bg-white border border-gray-200 min-w-[20px] relative rounded-md shrink-0"
              count={count}
            />
          )}
        </div>
      </div>
    )
  }
)

Tab.displayName = "Tab"

export { Tab, tabVariants }
export type { TabProps }

