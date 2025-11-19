import * as React from "react"
import { cn } from "@/lib/utils"
import { NavCategoryItem, type NavCategoryItemColor } from "./nav-category-item"

export interface NavCategoryItemData {
  id: string
  label: string
  color?: NavCategoryItemColor
  onClick?: () => void
}

interface NavCategoryContentProps {
  items: NavCategoryItemData[]
  className?: string
}

const NavCategoryContent = React.forwardRef<HTMLDivElement, NavCategoryContentProps>(
  ({ items, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "content-stretch flex flex-col gap-1 items-start relative size-full",
          className
        )}
      >
        {items.map((item) => (
          <NavCategoryItem
            key={item.id}
            label={item.label}
            color={item.color}
            onClick={item.onClick}
          />
        ))}
      </div>
    )
  }
)

NavCategoryContent.displayName = "NavCategoryContent"

export { NavCategoryContent }
export type { NavCategoryContentProps }

