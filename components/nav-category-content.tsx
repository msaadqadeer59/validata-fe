import * as React from "react"
import { cn } from "@/lib/utils"
import { NavCategoryItem, type NavCategoryItemColor } from "./nav-category-item"
import { SurveyItem, type SurveyItemColor } from "./survey-item"

export interface NavCategoryItemData {
  id: string
  label: string
  color?: NavCategoryItemColor | SurveyItemColor
  onClick?: () => void
}

interface NavCategoryContentProps {
  items: NavCategoryItemData[]
  className?: string
  itemType?: "nav" | "survey"
}

const NavCategoryContent = React.forwardRef<HTMLDivElement, NavCategoryContentProps>(
  ({ items, className, itemType = "nav" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "content-stretch flex flex-col gap-1 items-start relative size-full",
          className
        )}
      >
        {items.map((item) => {
          if (itemType === "survey") {
            return (
              <SurveyItem
                key={item.id}
                title={item.label}
                color={item.color as SurveyItemColor}
                onClick={item.onClick}
              />
            )
          }
          return (
            <NavCategoryItem
              key={item.id}
              label={item.label}
              color={item.color as NavCategoryItemColor}
              onClick={item.onClick}
            />
          )
        })}
      </div>
    )
  }
)

NavCategoryContent.displayName = "NavCategoryContent"

export { NavCategoryContent }
export type { NavCategoryContentProps }

