import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const baseSwitchVariants = cva(
  "relative shrink-0 transition-all outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none",
  {
    variants: {
      active: {
        false: "bg-[var(--color-switch-inactive)]",
        true: "bg-[var(--color-switch-active)]",
      },
      state: {
        default: "",
        hover: "",
        focus: "",
        disabled: "",
      },
      size: {
        sm: "w-[var(--spacing-switch-track-width)] p-[var(--spacing-switch-track-padding)] rounded-[var(--radius-switch)] shadow-[0px_1px_2px_0px_var(--color-switch-shadow)]",
        xs: "w-[var(--spacing-switch-track-width)] p-[var(--spacing-switch-track-padding)] rounded-[var(--radius-switch)] shadow-[0px_1px_2px_0px_var(--color-switch-shadow)]",
      },
    },
    compoundVariants: [
      {
        active: true,
        state: "hover",
        class: "bg-[var(--color-switch-active-hover)]",
      },
      {
        active: true,
        state: "focus",
        class: "focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        active: [false, true],
        state: "disabled",
        class: "bg-[var(--color-switch-disabled-bg)] border border-[var(--color-switch-disabled-border)] border-solid shadow-none",
      },
    ] as any,
    defaultVariants: {
      active: "false" as any,
      state: "default",
      size: "sm",
    },
  }
)


interface BaseSwitchProps
  extends Omit<React.ComponentProps<"button">, "type">,
  VariantProps<typeof baseSwitchVariants> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const BaseSwitch = React.forwardRef<HTMLButtonElement, BaseSwitchProps>(
  (
    {
      className,
      checked = false,
      state = "default",
      size = "sm",
      disabled,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked)
    const [isHovered, setIsHovered] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)

    React.useEffect(() => {
      setIsChecked(checked)
    }, [checked])

    const effectiveState = disabled
      ? "disabled"
      : isFocused
        ? "focus"
        : isHovered
          ? "hover"
          : state

    const handleClick = () => {
      if (disabled) return
      const newChecked = !isChecked
      setIsChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleClick}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          baseSwitchVariants({
            active: isChecked ? "true" : "false",
            state: effectiveState,
            size,
          } as any),
          "flex items-center gap-[var(--spacing-switch-gap)]",
          isChecked && "justify-end",
          className
        )}
        {...props}
      >
        <div
          className="relative shrink-0 size-[var(--spacing-switch-dot-size)] bg-white rounded-full"
          aria-hidden="true"
        />
      </button>
    )
  }
)

BaseSwitch.displayName = "BaseSwitch"

const switchVariants = cva("flex gap-[var(--spacing-switch-gap)] items-start", {
  variants: {
    direction: {
      left: "",
      right: "flex-row-reverse",
    },
  },
  defaultVariants: {
    direction: "left",
  },
})

interface SwitchProps
  extends Omit<React.ComponentProps<"div">, "onChange">,
  VariantProps<typeof switchVariants> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: string
  hint?: string
  required?: boolean
  optional?: boolean
  optionalText?: string
  showTooltip?: boolean
  tooltipText?: string
  state?: "default" | "hover" | "focus" | "disabled"
  size?: "sm" | "xs"
  disabled?: boolean
}

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      className,
      checked = false,
      onCheckedChange,
      label,
      hint,
      required,
      optional,
      optionalText = "(Optional)",
      showTooltip,
      tooltipText = "Prototype",
      direction = "left",
      state = "default",
      size = "sm",
      disabled,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked)
    const [isHovered, setIsHovered] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)

    React.useEffect(() => {
      setIsChecked(checked)
    }, [checked])

    const effectiveState = disabled
      ? "disabled"
      : isFocused
        ? "focus"
        : isHovered
          ? "hover"
          : state

    const handleCheckedChange = (newChecked: boolean) => {
      setIsChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    const switchOnly = !label && !hint

    if (switchOnly) {
      return (
        <div
          ref={ref}
          className={cn("flex gap-[var(--spacing-switch-gap)] items-start px-[var(--spacing-switch-padding-x)] py-[var(--spacing-switch-padding-y)] shrink-0", className)}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          <BaseSwitch
            checked={isChecked}
            onCheckedChange={handleCheckedChange}
            state={effectiveState}
            size={size}
            disabled={disabled}
          />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(switchVariants({ direction }), className)}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <div className="flex gap-[var(--spacing-switch-gap)] items-start px-[var(--spacing-switch-padding-x)] py-[var(--spacing-switch-padding-y)] shrink-0">
          <BaseSwitch
            checked={isChecked}
            onCheckedChange={handleCheckedChange}
            state={effectiveState}
            size={size}
            disabled={disabled}
          />
        </div>

        {(label || hint) && (
          <div className="flex flex-col gap-[var(--spacing-switch-label-hint-gap)] items-start shrink-0">
            {label && (
              <div className="flex gap-[var(--spacing-switch-label-gap)] items-center shrink-0">
                <p className="font-sans font-medium leading-[20px] text-[14px] text-gray-950 tracking-[-0.28px] whitespace-pre">
                  {label}
                </p>
                {required && (
                  <p className="font-sans font-medium leading-[20px] text-[14px] text-blue-600 tracking-[-0.28px] whitespace-pre">
                    *
                  </p>
                )}
                {optional && (
                  <>
                    <p className="font-sans font-normal leading-[20px] text-[14px] text-gray-600 tracking-[-0.28px] whitespace-pre">
                      {optionalText}
                    </p>
                    {showTooltip && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="relative shrink-0 size-[16px] cursor-pointer">
                            <Info className="size-[14px] text-gray-400" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" arrowPlacement="middle" sideOffset={8}>
                          {tooltipText}
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </>
                )}
              </div>
            )}
            {hint && (
              <div className="flex gap-[var(--spacing-switch-hint-gap)] items-center shrink-0">
                <p className="font-sans font-normal leading-[20px] text-[14px] text-[var(--color-checkbox-hint)] tracking-[-0.28px] whitespace-pre">
                  {hint}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
)

Switch.displayName = "Switch"

export { Switch, BaseSwitch, switchVariants, baseSwitchVariants }
export type { SwitchProps, BaseSwitchProps }

