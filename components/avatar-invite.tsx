import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Avatar, type AvatarColor } from "./avatar"

const tooltipVariants = cva(
  "absolute backdrop-blur-sm backdrop-filter content-stretch flex flex-col items-center left-1/2 translate-x-[-50%] transition-all pointer-events-none",
  {
    variants: {
      state: {
        default: "opacity-0 top-[24px]",
        hover: "opacity-100 top-[32px]",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

interface AvatarInviteProps
  extends Omit<React.ComponentProps<"div">, "children">,
  VariantProps<typeof tooltipVariants> {
  src?: string
  alt?: string
  name: string
  role?: string
  color?: AvatarColor
  onClick?: () => void
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

function AvatarInvite({
  className,
  state = "default",
  src,
  alt,
  name,
  role = "View profile",
  color,
  onClick,
  ...props
}: AvatarInviteProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const effectiveState = state === "hover" || isHovered ? "hover" : "default"

  // Use provided color or determine from name
  const avatarColor = color || getColorFromName(name)

  // Arrow SVG - always rendered as per Figma design
  const arrow = (
    <div className="h-[5px] relative shrink-0 w-[10.001px]">
      <div className="absolute bottom-0 left-0 right-0 top-[8.28%]">
        <svg
          width={10}
          height={5}
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block max-w-none size-full"
        >
          <path
            d="M5 5L0 0H10L5 5Z"
            fill="rgba(18,18,23,0.7)"
          />
        </svg>
      </div>
    </div>
  )

  return (
    <div
      className={cn("relative size-[24px]", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Base Avatar with white border - matching Figma: border border-solid border-white */}
      <div className="absolute border border-solid border-white inset-0 rounded-[99px]">
        <Avatar
          src={src}
          alt={alt || name}
          name={name}
          size="24"
          radius="circle"
          color={avatarColor}
          className="size-full"
        />
      </div>

      {/* Tooltip - matching Figma design exactly */}
      <div className={cn(tooltipVariants({ state: effectiveState }))}>
        {arrow}
        <div className="bg-[rgba(18,18,23,0.7)] box-border content-stretch flex flex-col items-center justify-center not-italic overflow-clip pb-[7px] pt-[6px] px-[8px] relative rounded-[6px] shrink-0 text-nowrap whitespace-pre">
          <p className="font-sans font-medium leading-[16px] relative shrink-0 text-[12px] text-white tracking-[-0.24px]">
            {name}
          </p>
          <p className="font-sans font-normal leading-[12px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[-0.2px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

export { AvatarInvite, tooltipVariants }
export type { AvatarInviteProps }

