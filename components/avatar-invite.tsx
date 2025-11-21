import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, type AvatarColor } from "./avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface AvatarInviteProps extends Omit<React.ComponentProps<"div">, "children"> {
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
  src,
  alt,
  name,
  role = "View profile",
  color,
  onClick,
  ...props
}: AvatarInviteProps) {
  // Use provided color or determine from name
  const avatarColor = color || getColorFromName(name)

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn("relative size-[24px] cursor-pointer", className)}
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
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        asChild={true}
        className="bg-[rgba(18,18,23,0.7)] backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center overflow-clip pb-[7px] pt-[6px] px-[8px] rounded-[6px] text-nowrap whitespace-pre"
        style={{
          "--color-tooltip-bg": "rgba(18,18,23,0.7)",
          "--color-tooltip-text": "#ffffff",
          "--color-tooltip-arrow": "rgba(18,18,23,0.7)",
        } as React.CSSProperties}
      >
        <div className="flex flex-col items-center">
          <p className="font-sans font-medium leading-[16px] relative shrink-0 text-[12px] text-white tracking-[-0.24px]">
            {name}
          </p>
          <p className="font-sans font-normal leading-[12px] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[-0.2px]">
            {role}
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export { AvatarInvite }
export type { AvatarInviteProps }

