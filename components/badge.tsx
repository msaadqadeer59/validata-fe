import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "green"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const baseClasses = "box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-1 py-0 relative rounded-md shrink-0"
    
    const variantClasses = {
      default: "",
      green: "bg-green-50 border border-[rgba(0,130,53,0.1)]",
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        <p className="font-sans font-normal leading-5 not-italic relative shrink-0 text-green-800 text-xs text-center text-nowrap tracking-tight whitespace-pre">
          {children}
        </p>
      </div>
    )
  }
)

Badge.displayName = "Badge"

export { Badge }
export type { BadgeProps }

