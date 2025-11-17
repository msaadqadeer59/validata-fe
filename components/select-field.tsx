import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Plus, X, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const selectInputVariants = cva(
  "bg-[var(--color-select-bg)] border border-solid flex gap-[var(--spacing-select-gap)] items-center px-[var(--spacing-select-padding-x)] py-[var(--spacing-select-padding-y)] rounded-[var(--radius-select)] transition-all outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none w-full",
  {
    variants: {
      state: {
        default: "border-[var(--color-select-border)]",
        hover: "border-[var(--color-select-border-hover)]",
        focus: "border-[var(--color-select-border-focus)] shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#060510]",
        filled: "border-[var(--color-select-border)]",
        disabled: "bg-[var(--color-select-disabled-bg)] border-[var(--color-select-disabled-border)] opacity-50",
        error: "border-[var(--color-select-border-error)]",
      },
      size: {
        md: "h-[36px]",
        sm: "h-[32px]",
        xs: "h-[28px]",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
)

interface SelectFieldProps
  extends Omit<React.ComponentProps<"div">, "onChange">,
  VariantProps<typeof selectInputVariants> {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  optional?: boolean
  optionalText?: string
  showTooltip?: boolean
  tooltipText?: string
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  badges?: string[]
  onBadgeRemove?: (badge: string) => void
  additionalButton?: {
    label: string
    onClick?: () => void
    icon?: React.ReactNode
  }
  children?: React.ReactNode
  type?: "basic" | "badges" | "additional-button"
}

const SelectField = React.forwardRef<HTMLDivElement, SelectFieldProps>(
  (
    {
      className,
      label,
      hint,
      error,
      required,
      optional,
      optionalText = "(Optional)",
      showTooltip,
      tooltipText = "Prototype",
      placeholder = "Placeholder",
      value,
      onValueChange,
      state = "default",
      size = "md",
      disabled,
      badges = [],
      onBadgeRemove,
      additionalButton,
      type = "basic",
      children,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    const effectiveState = disabled
      ? "disabled"
      : error
        ? "error"
        : isFocused || isOpen
          ? "focus"
          : isHovered
            ? "hover"
            : value
              ? "filled"
              : state

    const hasError = !!error

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-[var(--spacing-select-label-hint-gap)] items-start w-full", className)}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {label && (
          <div className="flex gap-[var(--spacing-select-label-gap)] items-center shrink-0 w-full">
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

        <div className="flex items-start relative shrink-0 w-full">
          {type === "additional-button" && additionalButton ? (
            <>
              <Select value={value} onValueChange={onValueChange} onOpenChange={setIsOpen}>
                <SelectTrigger
                  className={cn(
                    selectInputVariants({ state: effectiveState, size }),
                    "rounded-r-none border-r-0 cursor-pointer"
                  )}
                  onFocus={() => !disabled && setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  disabled={disabled}
                >
                  {badges.length > 0 && (
                    <div className="flex gap-[var(--spacing-select-badge-gap)] items-center shrink-0">
                      {badges.map((badge, index) => (
                        <div
                          key={index}
                          className="bg-[var(--color-select-badge-bg)] border border-[var(--color-select-badge-border)] border-solid rounded-[var(--radius-select-badge)] flex gap-[var(--spacing-select-badge-gap)] items-center justify-center px-[var(--spacing-select-badge-padding-x)] py-[var(--spacing-select-badge-padding-y)]"
                        >
                          <p className="font-sans font-normal leading-[20px] text-[12px] text-[var(--color-select-badge-text)] tracking-[-0.24px] whitespace-pre">
                            {badge}
                          </p>
                          {onBadgeRemove && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                onBadgeRemove(badge)
                              }}
                              className="shrink-0 size-[var(--spacing-select-badge-close)]"
                            >
                              <X className="size-[var(--spacing-select-badge-close)] text-[var(--color-select-badge-close)]" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <Plus className="size-[var(--spacing-select-icon-size)] text-[var(--color-select-icon)] shrink-0" />
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                {children || (
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                )}
              </Select>
              <button
                type="button"
                onClick={additionalButton.onClick}
                className="bg-[var(--color-select-bg)] border border-[var(--color-select-border)] border-solid rounded-l-none rounded-r-[var(--radius-select)] flex gap-[var(--spacing-select-gap)] items-center justify-center px-[var(--spacing-select-additional-button-padding-x)] py-[var(--spacing-select-padding-y)] h-full"
              >
                {additionalButton.icon || <Plus className="size-[var(--spacing-select-icon-size)] text-[var(--color-select-icon)]" />}
                <p className="font-sans font-medium leading-[24px] text-[14px] text-[var(--color-select-text)] tracking-[-0.28px] whitespace-pre">
                  {additionalButton.label}
                </p>
                <Plus className="size-[var(--spacing-select-icon-size)] text-[var(--color-select-icon)]" />
              </button>
            </>
          ) : (
            <Select value={value} onValueChange={onValueChange} onOpenChange={setIsOpen}>
              <SelectTrigger
                className={cn(selectInputVariants({ state: effectiveState, size }), "cursor-pointer")}
                onFocus={() => !disabled && setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={disabled}
              >
                {type === "badges" && badges.length > 0 && (
                  <div className="flex gap-[var(--spacing-select-badge-gap)] items-center shrink-0 pl-[6px]">
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className="bg-[var(--color-select-badge-bg)] border border-[var(--color-select-badge-border)] border-solid rounded-[var(--radius-select-badge)] flex gap-[var(--spacing-select-badge-gap)] items-center justify-center px-[var(--spacing-select-badge-padding-x)] py-[var(--spacing-select-badge-padding-y)]"
                      >
                        <p className="font-sans font-normal leading-[20px] text-[12px] text-[var(--color-select-badge-text)] tracking-[-0.24px] whitespace-pre">
                          {badge}
                        </p>
                        {onBadgeRemove && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              onBadgeRemove(badge)
                            }}
                            className="shrink-0 size-[var(--spacing-select-badge-close)]"
                          >
                            <X className="size-[var(--spacing-select-badge-close)] text-[var(--color-select-badge-close)]" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <Plus className="size-[var(--spacing-select-icon-size)] text-[var(--color-select-icon)] shrink-0" />
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              {children || (
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              )}
            </Select>
          )}
        </div>

        {(hint || error) && (
          <div className={cn(
            "flex gap-[var(--spacing-select-hint-gap)] items-center shrink-0 w-full",
            error && "bg-[var(--color-select-error-hint-bg)] px-[8px] py-[6px] rounded-[var(--radius-select-error-hint)]"
          )}>
            <Info className={cn(
              "size-[16px] shrink-0",
              error ? "text-red-700" : "text-gray-400"
            )} />
            <p className={cn(
              "font-sans font-normal leading-[20px] text-[14px] tracking-[-0.28px] whitespace-pre",
              error ? "text-[var(--color-select-error-hint-text)]" : "text-[var(--color-checkbox-hint)]"
            )}>
              {error || hint}
            </p>
          </div>
        )}
      </div>
    )
  }
)

SelectField.displayName = "SelectField"

export { SelectField, selectInputVariants }
export type { SelectFieldProps }

