import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import Image from "next/image"
import { SearchIcon } from "@/assets"
import { cn } from "@/lib/utils"

const searchBarVariants = cva(
  "box-border content-stretch flex gap-1 items-center overflow-clip rounded-[10px] w-[244px] transition-all outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
  {
    variants: {
      state: {
        default: "bg-[rgba(6,5,16,0.03)] pl-1 pr-1.5 py-1",
        hover: "bg-[rgba(6,5,16,0.05)] pl-1 pr-1.5 py-1 cursor-pointer",
        "focus-visible": "bg-[#f7f7f8] border border-[#155dfc] border-solid p-1",
        disabled: "bg-[#f7f7f8] border border-[#dfe1e6] border-solid pl-1 pr-1.5 py-1",
        "with-value": "bg-[#f7f7f8] border border-[#155dfc] border-solid p-1",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

interface SearchBarProps
  extends Omit<React.ComponentProps<"input">, "type">,
    VariantProps<typeof searchBarVariants> {
  onClear?: () => void
  keyboardShortcut?: string
  showClearButton?: boolean
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      state,
      disabled,
      value,
      onClear,
      keyboardShortcut = "⌘K",
      showClearButton,
      onChange,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState<
      "default" | "hover" | "focus-visible" | "disabled" | "with-value"
    >(state || "default")
    const [isFocused, setIsFocused] = React.useState(false)
    const hasValue = Boolean(value && String(value).length > 0)
    const shouldShowClear = showClearButton ?? (isFocused && hasValue)

    // Determine effective state
    const effectiveState = React.useMemo(() => {
      if (disabled) return "disabled"
      if (state) return state
      if (isFocused || hasValue) return "focus-visible"
      return internalState
    }, [disabled, state, isFocused, hasValue, internalState])

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      setInternalState("focus-visible")
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setInternalState("default")
      onBlur?.(e)
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isFocused && !disabled) {
        setInternalState("hover")
      }
      onMouseEnter?.(e as any)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isFocused && !disabled) {
        setInternalState("default")
      }
      onMouseLeave?.(e as any)
    }

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (onClear) {
        onClear()
      } else if (onChange) {
        const syntheticEvent = {
          ...e,
          target: { ...e.target, value: "" },
          currentTarget: { ...e.currentTarget, value: "" },
        } as React.ChangeEvent<HTMLInputElement>
        onChange(syntheticEvent)
      }
    }

    const isFocusState = effectiveState === "focus-visible" || effectiveState === "with-value"

    return (
      <div
        className={cn(searchBarVariants({ state: effectiveState }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
          <div className="overflow-clip relative shrink-0 size-4">
            <Image
              src={SearchIcon}
              alt="Search"
              width={16}
              height={16}
              className={cn(
                "shrink-0 size-4",
                disabled && "brightness-[1.35] contrast-75"
              )}
              style={
                disabled
                  ? {
                      filter: "brightness(1.35) contrast(0.75)",
                    }
                  : undefined
              }
              aria-hidden="true"
            />
          </div>
        </div>
        <input
          ref={ref}
          type="search"
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder="Search"
          className={cn(
            "basis-0 font-['Inter'] font-medium grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-sm tracking-[-0.28px] bg-transparent border-0 outline-none",
            disabled
              ? "text-[#d7d9de] placeholder:text-[#d7d9de]"
              : isFocusState
              ? "text-[#060510] placeholder:text-[#060510]"
              : effectiveState === "hover"
              ? "text-[#4c4c5c] placeholder:text-[#4c4c5c]"
              : "text-[#6a6a7e] placeholder:text-[#6a6a7e]"
          )}
          {...props}
        />
        {shouldShowClear && isFocusState ? (
          <button
            type="button"
            onClick={handleClear}
            className="content-stretch flex gap-2 items-center justify-center relative rounded-[7px] shrink-0 size-6 hover:bg-gray-100 transition-colors"
            aria-label="Clear search"
          >
            <div className="overflow-clip relative shrink-0 size-[12.25px]">
              <X className="shrink-0 size-[12.25px] text-[#9999ad]" aria-hidden="true" />
            </div>
          </button>
        ) : !disabled && !isFocusState ? (
          <div className="bg-white border border-[#dfe1e6] border-solid min-w-[20px] relative rounded-[6px] shrink-0">
            <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-w-inherit overflow-clip px-1 py-0.5 relative rounded-[inherit]">
              <p className="font-['Inter'] font-normal leading-4 not-italic relative shrink-0 text-[#6a6a7e] text-xs text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                {keyboardShortcut}
              </p>
            </div>
          </div>
        ) : disabled ? (
          <div className="bg-white border border-[#dfe1e6] border-solid min-w-[20px] opacity-30 relative rounded-[6px] shrink-0">
            <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center min-w-inherit overflow-clip px-1 py-0.5 relative rounded-[inherit]">
              <p className="font-['Inter'] font-normal leading-4 not-italic relative shrink-0 text-[#6a6a7e] text-xs text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                {keyboardShortcut}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
)

SearchBar.displayName = "SearchBar"

export { SearchBar, searchBarVariants }
export type { SearchBarProps }

