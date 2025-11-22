import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

type AvatarColor = "blue" | "orange" | "gray" | "green" | "red"

const avatarVariants = cva(
  "relative overflow-clip",
  {
    variants: {
      size: {
        "12": "size-[12px]",
        "16": "size-[16px]",
        "24": "size-[24px]",
        "32": "size-[32px]",
        "40": "size-[40px]",
        "72": "size-[72px]",
      },
      radius: {
        rectangle: "",
        circle: "rounded-[99px]",
      },
      color: {
        blue: "",
        orange: "",
        gray: "",
        green: "",
        red: "",
      },
    },
    compoundVariants: [
      {
        size: "12",
        radius: "rectangle",
        class: "rounded-[4px]",
      },
      {
        size: "16",
        radius: "rectangle",
        class: "rounded-[5px]",
      },
      {
        size: "24",
        radius: "rectangle",
        class: "rounded-[7.5px]",
      },
      {
        size: "32",
        radius: "rectangle",
        class: "rounded-[8px]",
      },
      {
        size: "40",
        radius: "rectangle",
        class: "rounded-[12px]",
      },
      {
        size: "72",
        radius: "rectangle",
        class: "rounded-[16px]",
      },
    ],
    defaultVariants: {
      size: "24",
      radius: "circle",
    },
  }
)

// Avatar background colors from Figma Design System - exact hex colors
const avatarBackgroundMap: Record<AvatarColor, string> = {
  blue: "#5006D9",    // Purple from Figma
  orange: "#FF6900",  // Orange from Figma
  gray: "#B8B9C5",   // Gray from Figma
  green: "#57AA44",  // Green from Figma
  red: "#FF283D",    // Red from Figma
}

// Avatar text colors - white text on colored backgrounds for better contrast
const avatarTextColorMap: Record<AvatarColor, string> = {
  blue: "text-white",
  orange: "text-white",
  gray: "text-white",
  green: "text-white",
  red: "text-white",
}

// Border radius map for rectangle avatars by size
const rectangleBorderRadiusMap: Record<string, string> = {
  "12": "rounded-[4px]",
  "16": "rounded-[5px]",
  "24": "rounded-[7.5px]",
  "32": "rounded-[8px]",
  "40": "rounded-[12px]",
  "72": "rounded-[16px]",
}

// Helper function to get border radius class for avatar
function getBorderRadiusClass(size: string | null | undefined, radius: "circle" | "rectangle" | null | undefined): string {
  if (radius === "circle") {
    return "rounded-[99px]"
  }
  if (radius === "rectangle" && size) {
    return rectangleBorderRadiusMap[size] || ""
  }
  return ""
}

// Helper function to determine color from name (for consistent color assignment)
function getColorFromName(name: string): AvatarColor {
  // Specific assignments for known users
  if (name.toLowerCase().includes("maher")) {
    return "green"
  }
  if (name.toLowerCase().includes("kamil")) {
    return "blue" // Blue is purple (#5006D9)
  }

  // Default assignment for other names
  const colors: AvatarColor[] = ["blue", "orange", "gray", "green", "red"]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

// Helper function to extract initials from name (supports single or multiple letters)
function getInitials(name: string, maxLetters: number = 2): string {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return "?"

  if (words.length === 1) {
    // Single word: take first N letters
    return words[0].slice(0, maxLetters).toUpperCase()
  }

  // Multiple words: take first letter of first N words
  return words
    .slice(0, maxLetters)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
}

interface AvatarProps
  extends Omit<React.ComponentProps<"div">, "children">,
  VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  name?: string
  color?: AvatarColor
  // Custom background color (overrides color prop)
  backgroundColor?: string
  // Custom text color (overrides default text color)
  textColor?: string
  // Border configuration
  border?: boolean | {
    width?: string
    style?: "solid" | "dashed" | "dotted"
    color?: string
  }
  // Tooltip configuration
  showTooltip?: boolean
  tooltipName?: string
  tooltipRole?: string
  // Number of letters to display (1 or 2, default: 1)
  maxLetters?: 1 | 2
  onClick?: () => void
}

function Avatar({
  className,
  size,
  radius,
  color,
  src,
  alt,
  name,
  backgroundColor,
  textColor,
  border,
  showTooltip = false,
  tooltipName,
  tooltipRole,
  maxLetters = 1,
  onClick,
  ...props
}: AvatarProps) {
  const displayName = name || alt || "Avatar"
  const imageAlt = alt || name || "Avatar"
  const effectiveColor = color || (name ? getColorFromName(name) : "gray")

  // Determine if we should show image or colored background with letters
  const hasImage = src && src.trim()

  // Get background and text colors for letter variant
  const bgColor = backgroundColor || avatarBackgroundMap[effectiveColor]
  const textColorClass = textColor || avatarTextColorMap[effectiveColor]

  // Border configuration
  const hasBorder = border !== undefined && border !== false
  const borderConfig = typeof border === "object" ? border : {}
  const borderWidth = borderConfig.width || "1px"
  const borderStyle = borderConfig.style || "solid"
  const borderColor = borderConfig.color || "#FFFFFF"

  // Get initials for letter avatar
  const initials = getInitials(displayName, maxLetters)

  // Avatar content
  const avatarContent = (
    <div
      className={cn(
        avatarVariants({ size, radius, color }),
        hasBorder && "border",
        onClick && "cursor-pointer",
        className
      )}
      style={{
        ...(hasBorder && {
          borderWidth,
          borderStyle,
          borderColor,
        }),
      }}
      onClick={onClick}
      {...props}
    >
      {hasImage ? (
        <img
          src={src}
          alt={imageAlt}
          className={cn(
            "absolute inset-0 max-w-none object-cover pointer-events-none size-full",
            getBorderRadiusClass(size, radius)
          )}
        />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center size-full font-medium",
            textColorClass,
            size === "12" && "text-[8px]",
            size === "16" && "text-[10px]",
            size === "24" && "text-xs",
            size === "32" && "text-sm",
            size === "40" && "text-base",
            size === "72" && "text-2xl"
          )}
          style={{
            backgroundColor: bgColor,
          }}
        >
          {initials}
        </div>
      )}
    </div>
  )

  // If tooltip is enabled, wrap in Tooltip component
  if (showTooltip && (tooltipName || name)) {
    const tooltipNameText = tooltipName || name || ""
    const tooltipRoleText = tooltipRole

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {avatarContent}
        </TooltipTrigger>
        <TooltipContent
          side="top"
          sideOffset={8}
          className="bg-[rgba(18,18,23,0.7)] backdrop-blur-sm backdrop-filter text-white flex flex-col items-center justify-center pb-[7px] pt-[6px] px-[8px] rounded-[6px] text-nowrap whitespace-pre border-0 shadow-none [&_svg]:fill-[rgba(18,18,23,0.7)] [&_svg]:stroke-[rgba(18,18,23,0.7)] [&_svg]:!rotate-0 [&_svg]:!rounded-none"
        >
          <div className="flex flex-col items-center">
            <p className="text-xs leading-none font-medium tracking-tight text-white">
              {tooltipNameText}
            </p>
            {tooltipRoleText && (
              <p className="font-sans font-normal leading-[12px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[-0.2px]">
                {tooltipRoleText}
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    )
  }

  return avatarContent
}

export { Avatar, avatarVariants }
export type { AvatarProps, AvatarColor }
