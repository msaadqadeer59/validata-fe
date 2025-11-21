import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const radioVariants = cva(
  "relative shrink-0 size-[var(--spacing-radio-size)] rounded-[var(--radius-radio)] border border-solid transition-all outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none",
  {
    variants: {
      checked: {
        false: "bg-[var(--color-radio-unchecked-bg)] border-[var(--color-radio-unchecked-border)]",
        true: "bg-[var(--color-radio-checked-bg)] border-[var(--color-radio-checked-bg)] shadow-[0px_1px_2px_0px_var(--color-radio-shadow)]",
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
        checked: false as boolean,
        state: "hover",
        class: "border-[var(--color-radio-unchecked-hover-border)]",
      },
      {
        checked: true as boolean,
        state: "hover",
        class: "bg-[var(--color-radio-checked-hover-bg)]",
      },
      {
        checked: true as boolean,
        state: "focus",
        class: "shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
      },
      {
        checked: [false, true] as boolean[],
        state: "disabled",
        class: "bg-[var(--color-radio-disabled-bg)] border-[var(--color-radio-disabled-border)] shadow-none opacity-50",
      },
    ],
    defaultVariants: {
      checked: false as boolean,
      state: "default",
    },
  }
)

// Focus-visible styles applied via peer modifier when input is focused
const focusVisibleStyles = {
  false: "peer-focus-visible:border-[var(--color-radio-unchecked-border)]",
  true: "peer-focus-visible:shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
}

interface RadioProps
  extends Omit<React.ComponentProps<"input">, "type" | "checked">,
    VariantProps<typeof radioVariants> {
  label?: string
  hint?: string
  required?: boolean
  optional?: boolean
  optionalText?: string
  showTooltip?: boolean
  tooltipText?: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  name?: string
  value?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      checked = false,
      state = "default",
      label,
      hint,
      required,
      optional,
      optionalText = "(Optional)",
      showTooltip,
      tooltipText = "Prototype",
      disabled,
      onCheckedChange,
      name,
      value,
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

    const checkedState: boolean = isChecked
    const checkedStateString = isChecked ? "true" : "false"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return
      const newChecked = e.target.checked
      setIsChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    const radioOnly = !label && !hint

    if (radioOnly) {
      return (
        <div
          className={cn(radioVariants({ checked: checkedState, state: effectiveState }), focusVisibleStyles[checkedStateString], className)}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            ref={ref}
            type="radio"
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            onFocus={() => !disabled && setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            name={name}
            value={value}
            className="peer absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
            {...props}
          />
          {checkedState === true && (
            <div
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[var(--spacing-radio-dot-size)] rounded-full",
                disabled ? "bg-[var(--color-radio-disabled-dot)]" : "bg-[var(--color-radio-checked-dot)]"
              )}
              aria-hidden="true"
            />
          )}
        </div>
      )
    }

    return (
      <div
        className={cn("flex gap-[var(--spacing-radio-gap)] items-start", className)}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn("flex gap-[var(--spacing-radio-gap)] items-start px-[var(--spacing-radio-padding-x)] py-[var(--spacing-radio-padding-y)] shrink-0")}>
          <div
            className={cn(radioVariants({ checked: checkedState, state: effectiveState }), focusVisibleStyles[checkedStateString])}
          >
            <input
              ref={ref}
              type="radio"
              checked={isChecked}
              disabled={disabled}
              onChange={handleChange}
              onFocus={() => !disabled && setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              name={name}
              value={value}
              className="peer absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
              {...props}
            />
            {checkedState === true && (
              <div
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[var(--spacing-radio-dot-size)] rounded-full",
                  disabled ? "bg-[var(--color-radio-disabled-dot)]" : "bg-[var(--color-radio-checked-dot)]"
                )}
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {(label || hint) && (
          <div className={cn("flex flex-col gap-[var(--spacing-radio-label-hint-gap)] items-start shrink-0")}>
            {label && (
              <div className={cn("flex gap-[var(--spacing-radio-label-gap)] items-center shrink-0")}>
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
              <div className={cn("flex gap-[var(--spacing-radio-hint-gap)] items-center shrink-0")}>
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

Radio.displayName = "Radio"

export { Radio, radioVariants }
export type { RadioProps }

