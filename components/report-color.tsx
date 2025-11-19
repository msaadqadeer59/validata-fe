import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const reportColorVariants = cva(
    "bg-white border border-solid box-border flex items-center justify-center rounded-[5px] shrink-0 size-4",
    {
        variants: {
            color: {
                blue: "border-blue-100", // #DAE7FF
                orange: "border-orange-100", // #FFEDD4
                gray: "border-gray-100", // #EDEEF2
                green: "border-green-200",
                red: "border-red-200",
            },
        },
        defaultVariants: {
            color: "gray",
        },
    }
)

const dotColorMap: Record<NonNullable<VariantProps<typeof reportColorVariants>["color"]>, string> = {
    blue: "bg-blue-500", // #2B7FFF
    orange: "bg-orange-500", // #FF6900
    gray: "bg-gray-400", // #B8B9C5
    green: "bg-green-500",
    red: "bg-red-500",
}

interface ReportColorProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof reportColorVariants> { }

const ReportColor = React.forwardRef<HTMLDivElement, ReportColorProps>(
    ({ className, color = "gray", ...props }, ref) => {
        const dotColor = dotColorMap[color || "gray"]

        return (
            <div
                ref={ref}
                className={cn(reportColorVariants({ color }), className)}
                {...props}
            >
                {/* <div className={cn("w-2 h-2 rounded-full", dotColor)} /> */}
                <div className="rounded-full bg-red-500 border border-solid border-red-200" />
            </div>
        )
    }
)

ReportColor.displayName = "ReportColor"

export { ReportColor, reportColorVariants }
export type { ReportColorProps }

