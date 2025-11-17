import * as React from "react"
import { cva } from "class-variance-authority"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const closeButtonVariants = cva(
    "gap-[8px] pl-[8px] pr-[6px] py-[4px] rounded-[10px] border border-gray-200 bg-white h-auto transition-all outline-none disabled:pointer-events-none justify-center font-sans font-medium text-[14px] leading-[24px] text-gray-950 tracking-[-0.28px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:!border-2 focus-visible:!border-gray-950",
    {
        variants: {
            state: {
                default: "bg-white hover:bg-gray-50",
                hover: "bg-gray-50",
                "focus-visible": "bg-white border-2 border-gray-950",
                disabled: "bg-white opacity-30",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
)

interface CloseButtonProps
    extends Omit<React.ComponentProps<typeof Button>, "variant"> {
    state?: "default" | "hover" | "focus-visible" | "disabled"
    keyboardShortcut?: string
}

function CloseButton({
    className,
    state,
    keyboardShortcut = "ESC",
    disabled,
    ...props
}: CloseButtonProps) {
    // Determine state based on disabled prop
    const effectiveState = disabled ? "disabled" : state

    return (
        <Button
            variant="ghost"
            className={cn(
                closeButtonVariants({ state: effectiveState }),
                className
            )}
            disabled={disabled}
            {...props}
        >
            <span className="whitespace-nowrap shrink-0">Close</span>
            {keyboardShortcut && (
                <div className="bg-white border border-gray-200 rounded-[6px] shrink-0 min-w-[20px]">
                    <div className="flex flex-col items-center justify-center px-[4px] py-[2px]">
                        <span className="font-sans font-normal text-[12px] leading-[16px] text-gray-600 text-center tracking-[-0.24px] whitespace-nowrap shrink-0">
                            {keyboardShortcut}
                        </span>
                    </div>
                </div>
            )}
        </Button>
    )
}

export { CloseButton, closeButtonVariants }
export type { CloseButtonProps }

