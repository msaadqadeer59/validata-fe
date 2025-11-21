import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export type SurveyBadgeColor = "blue" | "orange" | "gray" | "green" | "red"

const surveyBadgeVariants = cva(
  "box-border content-stretch flex flex-col gap-2 items-center justify-center overflow-clip p-[2px] relative rounded-[6px] shrink-0 size-6",
  {
    variants: {
      color: {
        blue: "",
        orange: "",
        gray: "",
        green: "",
        red: "",
      },
    },
    defaultVariants: {
      color: "gray",
    },
  }
)

const badgeBackgroundMap: Record<SurveyBadgeColor, string> = {
  blue: "bg-blue-100",
  orange: "bg-orange-50",
  gray: "bg-gray-100",
  green: "bg-green-50",
  red: "bg-red-50",
}

const badgeTextColorMap: Record<SurveyBadgeColor, string> = {
  blue: "text-blue-700",
  orange: "text-orange-700",
  gray: "text-gray-700",
  green: "text-green-700",
  red: "text-red-700",
}

interface SurveyBadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof surveyBadgeVariants> {
  letter: string
}

const SurveyBadge = React.forwardRef<HTMLDivElement, SurveyBadgeProps>(
  ({ className, color = "gray", letter, ...props }, ref) => {
    const badgeBackground = badgeBackgroundMap[(color || "gray") as SurveyBadgeColor]
    const badgeTextColor = badgeTextColorMap[(color || "gray") as SurveyBadgeColor]

    return (
      <div
        ref={ref}
        className={cn(surveyBadgeVariants({ color }), className)}
        {...props}
      >
        <div
          className={cn(
            "basis-0 box-border content-stretch flex gap-2 grow items-center justify-center min-h-0 min-w-0 pb-0 pt-[0.5px] px-0 relative rounded-[6px] shrink-0 w-full",
            badgeBackground
          )}
        >
          <p
            className={cn(
              "font-sans font-medium leading-4 not-italic relative shrink-0 text-xs text-center tracking-[-0.24px] w-6",
              badgeTextColor
            )}
          >
            {letter.toUpperCase()}
          </p>
        </div>
      </div>
    )
  }
)

SurveyBadge.displayName = "SurveyBadge"

export { SurveyBadge, surveyBadgeVariants }
export type { SurveyBadgeProps }

