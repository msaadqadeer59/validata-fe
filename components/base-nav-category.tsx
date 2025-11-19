import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronRight, ChevronDown } from "lucide-react"
import { NavCategoryContent, type NavCategoryItemData } from "./nav-category-content"

const baseNavCategoryVariants = cva(
  "box-border content-stretch flex gap-1 items-center h-6 p-1 rounded-md transition-colors outline-none cursor-pointer",
  {
    variants: {
      active: {
        true: "",
        false: "",
      },
      state: {
        default: "",
        hover: "bg-gray-50",
      },
    },
    compoundVariants: [
      {
        active: true,
        state: "hover",
        className: "bg-gray-50",
      },
    ],
    defaultVariants: {
      active: false,
      state: "default",
    },
  }
)

interface BaseNavCategoryProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">,
    VariantProps<typeof baseNavCategoryVariants> {
  text: string
  showNumber?: boolean
  number?: string | number
  items?: NavCategoryItemData[]
  defaultExpanded?: boolean
  onToggle?: (expanded: boolean) => void
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const BaseNavCategory = React.forwardRef<HTMLDivElement, BaseNavCategoryProps>(
  (
    {
      className,
      active: controlledActive,
      state = "default",
      text,
      showNumber = true,
      number,
      items = [],
      defaultExpanded = false,
      onToggle,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [internalExpanded, setInternalExpanded] = React.useState(defaultExpanded)
    const [internalState, setInternalState] = React.useState<"default" | "hover">("default")

    // Use controlled active if provided, otherwise use internal state
    const isExpanded = controlledActive !== undefined ? controlledActive : internalExpanded
    const effectiveState = state !== "default" ? state : internalState

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const newExpanded = !isExpanded
      if (controlledActive === undefined) {
        setInternalExpanded(newExpanded)
      }
      onToggle?.(newExpanded)
      onClick?.(e)
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (state === "default") {
        setInternalState("hover")
      }
      onMouseEnter?.(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (state === "default") {
        setInternalState("default")
      }
      onMouseLeave?.(e)
    }

    const isHoverOrActive = effectiveState === "hover" || isExpanded
    const textColor = isHoverOrActive ? "text-gray-700" : "text-gray-500"
    const chevronColor = isHoverOrActive ? "text-gray-600" : "text-gray-500"

    return (
      <div ref={ref} className={cn("content-stretch flex flex-col gap-1 items-start relative size-full", className)}>
        <button
          className={cn(
            baseNavCategoryVariants({
              active: isExpanded,
              state: effectiveState,
            }),
            "w-full"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          {...props}
        >
          {isExpanded ? (
            <ChevronDown className={cn("size-3 shrink-0", chevronColor)} />
          ) : (
            <ChevronRight className={cn("size-3 shrink-0", chevronColor)} />
          )}
          <p
            className={cn(
              "basis-0 font-sans font-medium grow leading-4 min-h-px min-w-px not-italic relative shrink-0 text-xs tracking-tight text-left",
              textColor
            )}
          >
            {text}
          </p>
          {showNumber && number !== undefined && (
            <div className="content-stretch flex flex-col gap-2 items-center justify-center min-w-4 relative shrink-0 w-4">
              <p
                className={cn(
                  "font-sans font-medium leading-4 not-italic relative shrink-0 text-xs text-center text-nowrap tracking-tight whitespace-pre",
                  textColor
                )}
              >
                {number}
              </p>
            </div>
          )}
        </button>
        {isExpanded && items.length > 0 && <NavCategoryContent items={items} />}
      </div>
    )
  }
)

BaseNavCategory.displayName = "BaseNavCategory"

export { BaseNavCategory, baseNavCategoryVariants }
export type { BaseNavCategoryProps }

