import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Avatar } from "./avatar"

const tooltipVariants = cva(
  "absolute backdrop-blur-sm backdrop-filter flex flex-col items-center left-1/2 -translate-x-1/2 transition-all pointer-events-none",
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
  src: string
  alt?: string
  name: string
  role?: string
  tooltipArrowSrc?: string
  onClick?: () => void
}

function AvatarInvite({
  className,
  state = "default",
  src,
  alt,
  name,
  role = "View profile",
  tooltipArrowSrc,
  onClick,
  ...props
}: AvatarInviteProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const effectiveState = state === "hover" || isHovered ? "hover" : "default"

  return (
    <div
      className={cn("relative size-[24px]", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Base Avatar with white border */}
      <div className="absolute inset-0 border border-white rounded-[99px]">
        <Avatar
          src={src}
          alt={alt || name}
          name={name}
          size="24"
          radius="circle"
          className="size-full"
        />
      </div>

      {/* Tooltip */}
      <div className={cn(tooltipVariants({ state: effectiveState }))}>
        {/* Arrow */}
        {tooltipArrowSrc && (
          <div className="h-[5px] relative shrink-0 w-[10.001px]">
            <div className="absolute bottom-0 left-0 right-0 top-[8.28%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={tooltipArrowSrc}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-[rgba(18,18,23,0.7)] flex flex-col items-center justify-center overflow-clip pb-[7px] pt-[6px] px-[8px] relative rounded-[6px] shrink-0 text-nowrap whitespace-pre">
          <p className="font-sans font-medium leading-[16px] relative shrink-0 text-[12px] text-white tracking-[-0.24px]">
            {name}
          </p>
          <p className="font-sans font-normal leading-[12px] relative shrink-0 text-[10px] text-white/50 tracking-[-0.2px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

export { AvatarInvite, tooltipVariants }
export type { AvatarInviteProps }

