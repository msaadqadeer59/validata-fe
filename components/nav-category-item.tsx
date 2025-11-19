import * as React from "react"
import { cn } from "@/lib/utils"
import { ReportColor } from "./report-color"

export type NavCategoryItemColor = "blue" | "orange" | "gray" | "green" | "red"

interface NavCategoryItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color?: NavCategoryItemColor
}

const NavCategoryItem = React.forwardRef<HTMLButtonElement, NavCategoryItemProps>(
  ({ className, label, color = "gray", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "box-border content-stretch flex gap-1 items-center p-1 relative rounded-button shrink-0 w-full transition-colors hover:bg-gray-50 outline-none",
          className
        )}
        {...props}
      >
        <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
          <ReportColor color={color} />
        </div>
        <p className="basis-0 font-sans font-medium grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-sm tracking-tight text-left text-gray-600">
          {label}
        </p>
      </button>
    )
  }
)

NavCategoryItem.displayName = "NavCategoryItem"

export { NavCategoryItem }
export type { NavCategoryItemProps }

