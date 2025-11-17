import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-button text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-white hover:bg-gray-900",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-200 bg-white hover:bg-gray-50 text-gray-950",
        ghost: "hover:bg-gray-100 text-gray-950",
        secondary: "bg-gray-100 text-gray-950 hover:bg-gray-300",
        link: "text-gray-950 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 py-[6px] pl-[6px] pr-[8px]",
        sm: "h-8 px-3 text-sm py-[6px]",
        lg: "h-10 px-6 text-base py-[6px]",
        icon: "size-9 p-0",
        "icon-sm": "size-8 p-0",
        "icon-lg": "size-10 p-0",
      },
      iconPosition: {
        left: "gap-[8px]",
        right: "gap-[8px]",
        none: "",
      },
    },
    compoundVariants: [
      // Focus-visible states - using tokens from tailwind.config.js
      {
        variant: "default",
        class: "focus-visible:border-2 focus-visible:border-gray-950 focus-visible:ring-0",
      },
      {
        variant: "destructive",
        class: "focus-visible:border-2 focus-visible:border-red-600 focus-visible:ring-0",
      },
      {
        variant: "outline",
        class: "focus-visible:border-2 focus-visible:border-gray-950 focus-visible:ring-0",
      },
      {
        variant: "ghost",
        class: "focus-visible:border-2 focus-visible:border-gray-950 focus-visible:ring-0",
      },
      {
        variant: "secondary",
        class: "focus-visible:border-2 focus-visible:border-gray-950 focus-visible:ring-0",
      },
      // Icon-only buttons don't need gap
      {
        size: ["icon", "icon-sm", "icon-lg"],
        iconPosition: ["left", "right"],
        class: "gap-0",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "none",
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right" | "none"
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconPosition = "none",
      icon,
      children,
      asChild = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    // Determine if this is an icon-only button
    const isIconOnly = size === "icon" || size === "icon-sm" || size === "icon-lg"
    const effectiveIconPosition = isIconOnly ? "none" : iconPosition

    // Determine the order of icon and children
    const content = React.useMemo(() => {
      if (isIconOnly && icon) {
        return icon
      }

      if (!icon) {
        return children
      }

      if (effectiveIconPosition === "left") {
        return (
          <>
            <span className="shrink-0 [&_svg]:size-4 [&_svg]:pointer-events-none">
              {icon}
            </span>
            {children && <span>{children}</span>}
          </>
        )
      }

      if (effectiveIconPosition === "right") {
        return (
          <>
            {children && <span>{children}</span>}
            <span className="shrink-0 [&_svg]:size-4 [&_svg]:pointer-events-none">
              {icon}
            </span>
          </>
        )
      }

      return children
    }, [icon, children, effectiveIconPosition, isIconOnly])

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, iconPosition: effectiveIconPosition }),
          className
        )}
        disabled={disabled}
        {...props}
      >
        {content}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }

