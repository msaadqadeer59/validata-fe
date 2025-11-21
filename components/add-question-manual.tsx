import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const addQuestionManualVariants = cva(
  "bg-white overflow-clip relative rounded-[20px] cursor-pointer transition-all",
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
  "absolute bg-white border border-solid left-1/2 rounded-[99px] -translate-x-1/2 -translate-y-1/2 transition-all",
  {
    variants: {
      state: {
        default: "border-gray-100 size-[32px] top-[calc(50%+0.5px)]",
        hover: "border-gray-200 size-[40px] top-1/2",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

const iconInnerVariants = cva(
  "box-border content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] transition-all",
  {
    variants: {
      state: {
        default: "size-[32px]",
        hover: "size-[40px]",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
)

const iconVariants = cva(
  "overflow-clip relative shrink-0 transition-all",
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
  "absolute bottom-[60px] font-sans font-medium leading-[20px] left-[calc(50%-0.5px)] not-italic text-[14px] text-center text-nowrap tracking-[-0.28px] -translate-x-1/2 translate-y-full whitespace-pre transition-colors",
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
  const [internalState, setInternalState] = React.useState<"default" | "hover">("default")
  const effectiveState = state !== "default" ? state : internalState

  const handleMouseEnter = () => {
    if (state === "default") {
      setInternalState("hover")
    }
  }

  const handleMouseLeave = () => {
    if (state === "default") {
      setInternalState("default")
    }
  }

  return (
    <div
      className={cn(addQuestionManualVariants({ state: effectiveState }), className)}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Circular Icon Button */}
      <div className={iconContainerVariants({ state: effectiveState })}>
        <div className={iconInnerVariants({ state: effectiveState })}>
          <div className={iconVariants({ state: effectiveState })}>
            <Plus className="size-full" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Text Below */}
      <div className={textVariants({ state: effectiveState })}>
        <p className="mb-0">Add question </p>
        <p>manually</p>
      </div>
    </div>
  )
}

export { AddQuestionManual, addQuestionManualVariants }
export type { AddQuestionManualProps }
