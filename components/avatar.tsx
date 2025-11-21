import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

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
  orange: "bg-orange-500",  // #FF6900
  gray: "bg-gray-400",     // #B8B9C5
  green: "#57AA44",   // Green from Figma
  red: "bg-red-500",       // #FF283D
}

// Avatar text colors - white text on colored backgrounds for better contrast
const avatarTextColorMap: Record<AvatarColor, string> = {
  blue: "text-white",    // White text on purple background
  orange: "text-white", // White text on orange background
  gray: "text-white",    // White text on gray background
  green: "text-white",  // White text on green background
  red: "text-white",      // White text on red background
}

interface AvatarProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  name?: string
  color?: AvatarColor
}

function Avatar({
  className,
  size,
  radius,
  color,
  src,
  alt,
  name,
  ...props
}: AvatarProps) {
  const displayName = name || alt || "Avatar"
  const imageAlt = alt || name || "Avatar"

  // Determine if we should show image or colored background with letters
  const hasImage = src && src.trim()
  const effectiveColor = color || "gray"

  // Get background and text colors for letter variant
  const bgColor = avatarBackgroundMap[effectiveColor]
  const textColorClass = avatarTextColorMap[effectiveColor]

  // Check if bgColor is a hex color (starts with #) or a Tailwind class
  const bgColorStyle = bgColor?.startsWith("#") ? { backgroundColor: bgColor } : undefined
  const bgColorClass = bgColor?.startsWith("#") ? undefined : bgColor

  return (
    <div
      className={cn(avatarVariants({ size, radius, color }), className)}
      {...props}
    >
      {hasImage ? (
        <img
          src={src}
          alt={imageAlt}
          className={cn(
            "absolute inset-0 max-w-none object-cover pointer-events-none size-full",
            radius === "circle" ? "rounded-[99px]" : "",
            size === "12" && radius === "rectangle" ? "rounded-[4px]" : "",
            size === "16" && radius === "rectangle" ? "rounded-[5px]" : "",
            size === "24" && radius === "rectangle" ? "rounded-[7.5px]" : "",
            size === "32" && radius === "rectangle" ? "rounded-[8px]" : "",
            size === "40" && radius === "rectangle" ? "rounded-[12px]" : "",
            size === "72" && radius === "rectangle" ? "rounded-[16px]" : ""
          )}
        />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center size-full font-medium",
            bgColorClass,
            textColorClass,
            size === "12" && "text-[8px]",
            size === "16" && "text-[10px]",
            size === "24" && "text-xs",
            size === "32" && "text-sm",
            size === "40" && "text-base",
            size === "72" && "text-2xl"
          )}
          style={bgColorStyle}
        >
          {displayName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 1)}
        </div>
      )}
    </div>
  )
}

export { Avatar, avatarVariants }
export type { AvatarProps, AvatarColor }

