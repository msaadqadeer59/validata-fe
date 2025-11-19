import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { SurveyBadge } from "./survey-badge"

export type SurveyItemColor = "blue" | "orange" | "gray" | "green" | "red"

const surveyItemVariants = cva(
  "box-border content-stretch flex gap-1 items-center pl-1 pr-1.5 py-1 relative rounded-[10px] shrink-0 w-full transition-colors hover:bg-gray-50 outline-none cursor-pointer",
  {
    variants: {
      state: {
        default: "",
        hover: "bg-gray-50",
        active: "bg-gray-50",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

interface SurveyItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">,
  VariantProps<typeof surveyItemVariants> {
  title: string
  color?: SurveyItemColor
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SurveyItem = React.forwardRef<HTMLButtonElement, SurveyItemProps>(
  (
    {
      className,
      title,
      color = "gray",
      state = "default",
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState<"default" | "hover">("default")
    const effectiveState = state !== "default" ? state : internalState

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

    // Extract first letter
    const firstLetter = title.charAt(0)

    return (
      <button
        ref={ref}
        className={cn(surveyItemVariants({ state: effectiveState }), className)}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Letter Badge */}
        <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
          <SurveyBadge letter={firstLetter} color={color} />
        </div>

        {/* Title Text */}
        <p className="basis-0 font-sans font-medium grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-sm tracking-[-0.28px] text-left text-gray-950">
          {title}
        </p>
      </button>
    )
  }
)

SurveyItem.displayName = "SurveyItem"

export { SurveyItem, surveyItemVariants }
export type { SurveyItemProps }

