import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { NavCategoryContent, type NavCategoryItemData } from "./nav-category-content"

const expandableNavCategoryVariants = cva(
  "box-border content-stretch flex gap-1 items-center p-1 h-6 rounded-[6px] transition-colors outline-none cursor-pointer",
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

interface ExpandableNavCategoryProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">,
  VariantProps<typeof expandableNavCategoryVariants> {
  text: string
  showNumber?: boolean
  number?: string | number
  items?: NavCategoryItemData[]
  itemType?: "nav" | "survey"
  defaultExpanded?: boolean
  onToggle?: (expanded: boolean) => void
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ExpandableNavCategory = React.forwardRef<HTMLDivElement, ExpandableNavCategoryProps>(
  (
    {
      className,
      active: controlledActive,
      state = "default",
      text,
      showNumber = true,
      number,
      items = [],
      itemType = "nav",
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

    // Text color always gray-500 per Figma design
    const textColor = "text-gray-500"
    const chevronColor = "text-gray-500"

    return (
      <div ref={ref} className={cn("content-stretch flex flex-col gap-1 items-start relative size-full", className)}>
        <button
          className={cn(
            expandableNavCategoryVariants({
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
          <div className={cn(
            "shrink-0 size-3 transition-transform duration-200 ease-in-out",
            isExpanded ? "rotate-90" : "rotate-0"
          )}>
            <ChevronRight className={cn("size-full", chevronColor)} />
          </div>
          <p
            className={cn(
              "basis-0 font-sans font-medium grow leading-4 min-h-px min-w-px not-italic relative shrink-0 text-xs tracking-[-0.24px] text-left",
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
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out w-full",
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {items.length > 0 && <NavCategoryContent items={items} itemType={itemType} />}
        </div>
      </div>
    )
  }
)

ExpandableNavCategory.displayName = "ExpandableNavCategory"

export { ExpandableNavCategory, expandableNavCategoryVariants }
export type { ExpandableNavCategoryProps }

