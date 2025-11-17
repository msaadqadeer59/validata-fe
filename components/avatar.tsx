import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

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
        class: "rounded-[10px]",
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

interface AvatarProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  name?: string
}

function Avatar({
  className,
  size,
  radius,
  src,
  alt,
  name,
  ...props
}: AvatarProps) {
  const displayName = name || alt || "Avatar"
  const imageAlt = alt || name || "Avatar"

  return (
    <div
      className={cn(avatarVariants({ size, radius }), className)}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={imageAlt}
          className={cn(
            "absolute inset-0 max-w-none object-cover pointer-events-none size-full",
            radius === "circle" ? "rounded-[99px]" : "",
            size === "12" && radius === "rectangle" ? "rounded-[4px]" : "",
            size === "16" && radius === "rectangle" ? "rounded-[5px]" : "",
            size === "24" && radius === "rectangle" ? "rounded-[7.5px]" : "",
            size === "32" && radius === "rectangle" ? "rounded-[10px]" : "",
            size === "40" && radius === "rectangle" ? "rounded-[12px]" : "",
            size === "72" && radius === "rectangle" ? "rounded-[16px]" : ""
          )}
        />
      ) : (
        <div
          className={cn(
            "flex items-center justify-center size-full bg-gray-200 text-gray-600 font-medium",
            size === "12" && "text-[8px]",
            size === "16" && "text-[10px]",
            size === "24" && "text-xs",
            size === "32" && "text-sm",
            size === "40" && "text-base",
            size === "72" && "text-2xl"
          )}
        >
          {displayName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
      )}
    </div>
  )
}

export { Avatar, avatarVariants }
export type { AvatarProps }

