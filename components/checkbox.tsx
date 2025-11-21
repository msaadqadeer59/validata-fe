import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Minus, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const checkboxVariants = cva(
  "relative shrink-0 size-[16px] rounded-checkbox border border-solid transition-all outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none",
  {
    variants: {
      checked: {
        false: "bg-white border-gray-200",
        true: "bg-gray-950 border-gray-950",
        indeterminate: "bg-gray-950 border-gray-950",
      },
      state: {
        default: "",
        hover: "",
        focus: "",
        disabled: "",
      },
    },
    compoundVariants: [
      {
        checked: false as boolean | "indeterminate",
        state: "hover",
        class: "border-gray-300",
      },
      {
        checked: false as boolean | "indeterminate",
        state: "focus",
        class: "border-gray-200",
      },
      {
        checked: [true, "indeterminate"] as (boolean | "indeterminate")[],
        state: "focus",
        class: "shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        checked: [false, true, "indeterminate"] as (boolean | "indeterminate")[],
        state: "disabled",
        class: "bg-gray-50 border-gray-200 opacity-50",
      },
    ],
    defaultVariants: {
      checked: false as boolean | "indeterminate",
      state: "default",
    },
  }
)

// Focus-visible styles applied via peer modifier when input is focused
const focusVisibleStyles = {
  false: "peer-focus-visible:border-gray-200",
  true: "peer-focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
  indeterminate: "peer-focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
}

interface CheckboxProps
  extends Omit<React.ComponentProps<"input">, "type" | "checked">,
    VariantProps<typeof checkboxVariants> {
  label?: string
  hint?: string
  required?: boolean
  optional?: boolean
  showTooltip?: boolean
  tooltipText?: string
  checked?: boolean
  indeterminate?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      checked = false,
      indeterminate = false,
      state = "default",
      label,
      hint,
      required,
      optional,
      showTooltip,
      tooltipText = "Prototype",
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

    const checkedState: boolean | "indeterminate" = indeterminate ? "indeterminate" : isChecked
    const checkedStateString = indeterminate ? "indeterminate" : isChecked ? "true" : "false"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return
      const newChecked = e.target.checked
      setIsChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    const checkboxOnly = !label && !hint

    if (checkboxOnly) {
      return (
        <div
          className={cn(
            checkboxVariants({ checked: checkedState, state: effectiveState }),
            focusVisibleStyles[checkedStateString],
            className
          )}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            ref={ref}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            onFocus={() => !disabled && setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="peer absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
            {...props}
          />
          {checkedState === true && (
            <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[16px] text-white" strokeWidth={2} />
          )}
          {checkedState === "indeterminate" && (
            <Minus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[16px] text-white" strokeWidth={2} />
          )}
        </div>
      )
    }

    return (
      <div
        className={cn("flex gap-[var(--spacing-checkbox-gap)] items-start", className)}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn("flex gap-[var(--spacing-checkbox-gap)] items-start px-[var(--spacing-checkbox-padding-x)] py-[var(--spacing-checkbox-padding-y)] shrink-0")}>
          <div
            className={cn(
              checkboxVariants({ checked: checkedState, state: effectiveState }),
              focusVisibleStyles[checkedStateString]
            )}
          >
            <input
              ref={ref}
              type="checkbox"
              checked={isChecked}
              disabled={disabled}
              onChange={handleChange}
              onFocus={() => !disabled && setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed peer"
              {...props}
            />
            {checkedState === true && (
              <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[16px] text-white" strokeWidth={2} />
            )}
            {checkedState === "indeterminate" && (
              <Minus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[16px] text-white" strokeWidth={2} />
            )}
          </div>
        </div>

        {(label || hint) && (
          <div className={cn("flex flex-col gap-[var(--spacing-checkbox-label-hint-gap)] items-start shrink-0")}>
            {label && (
              <div className={cn("flex gap-[var(--spacing-checkbox-label-gap)] items-center shrink-0")}>
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
                      (Optional)
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
              <div className={cn("flex gap-[var(--spacing-checkbox-hint-gap)] items-center shrink-0")}>
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

Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }
export type { CheckboxProps }

