import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const addQuestionManualVariants = cva(
  "relative bg-white rounded-[20px] w-[200px] h-[283px] cursor-pointer transition-all",
  {
    variants: {
      state: {
        default: "",
        hover: "",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

const iconContainerVariants = cva(
  "absolute bg-white border left-1/2 rounded-[99px] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 transition-all",
  {
    variants: {
      state: {
        default: "border-gray-100 size-[32px]",
        hover: "border-gray-200 size-[40px] top-1/2",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

const iconVariants = cva(
  "transition-all",
  {
    variants: {
      state: {
        default: "size-[16px] text-gray-500",
        hover: "size-[20px] text-gray-950",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

const textVariants = cva(
  "absolute bottom-[60px] left-[calc(50%-0.5px)] -translate-x-1/2 translate-y-full text-center font-sans font-medium leading-[20px] not-italic text-[14px] tracking-[-0.28px] whitespace-pre transition-colors",
  {
    variants: {
      state: {
        default: "text-gray-500",
        hover: "text-gray-950",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

interface AddQuestionManualProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof addQuestionManualVariants> {
  onClick?: () => void
}

function AddQuestionManual({
  className,
  state = "default",
  onClick,
  ...props
}: AddQuestionManualProps) {
  const effectiveState = state || "default"
  const isHover = effectiveState === "hover"

  return (
    <div
      className={cn(
        addQuestionManualVariants({ state: effectiveState, className }),
        "group"
      )}
      onClick={onClick}
      {...props}
    >
      {/* Circular Icon Button */}
      <div className={cn(
        iconContainerVariants({ state: effectiveState }),
        "group-hover:border-gray-200 group-hover:size-[40px] group-hover:top-1/2"
      )}>
        <div className={cn(
          "flex items-center justify-center p-[4px] relative rounded-[inherit]",
          isHover ? "size-[40px]" : "size-[32px]",
          "group-hover:size-[40px]"
        )}>
          <div className="relative shrink-0 overflow-clip">
            <Plus className={cn(
              iconVariants({ state: effectiveState }),
              "group-hover:size-[20px] group-hover:text-gray-950"
            )} strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Text Below */}
      <div className={cn(
        textVariants({ state: effectiveState }),
        "group-hover:text-gray-950"
      )}>
        <p className="mb-0">Add question{" "}</p>
        <p className="mt-0">manually</p>
      </div>
    </div>
  )
}

export { AddQuestionManual, addQuestionManualVariants }
export type { AddQuestionManualProps }

