import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const countVariants = cva(
  "box-border content-stretch flex flex-col gap-2 items-center justify-center min-w-inherit overflow-clip px-1 py-0.5 relative rounded-md",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200",
        circle: "bg-white border border-gray-200 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface CountProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof countVariants> {
  count: number | string
}

const Count = React.forwardRef<HTMLDivElement, CountProps>(
  ({ className, variant, count, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(countVariants({ variant }), className)}
        {...props}
      >
        <p className="font-sans font-normal leading-4 not-italic relative shrink-0 text-gray-600 text-xs text-center text-nowrap tracking-tight whitespace-pre">
          {count}
        </p>
      </div>
    )
  }
)

Count.displayName = "Count"

export { Count, countVariants }
export type { CountProps }

