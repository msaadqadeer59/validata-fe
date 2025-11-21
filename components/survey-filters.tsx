'use client';

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { SortIcon, FilterIcon } from "@/assets"
import { ChevronDown } from "lucide-react"

interface SurveyFiltersProps extends React.HTMLAttributes<HTMLDivElement> {
  sortBy?: string
  onSortChange?: () => void
  onFiltersClick?: () => void
}

export function SurveyFilters({
  className,
  sortBy = "Date created",
  onSortChange,
  onFiltersClick,
  ...props
}: SurveyFiltersProps) {
  return (
    <div
      className={cn(
        "box-border content-stretch flex items-center pb-0 px-[16px] relative shrink-0 w-full",
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
          {/* Sort Button */}
          <button
            onClick={onSortChange}
            className="bg-white border border-gray-200 border-solid relative rounded-[10px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <Image src={SortIcon} alt="Sort" width={16} height={16} />
              </div>
              <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-gray-950 text-sm text-nowrap tracking-[-0.28px] whitespace-pre">
                <span className="font-sans font-normal text-gray-600">Sorted by </span>
                {sortBy}
              </p>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <ChevronDown className="size-4 text-gray-500" strokeWidth={1.5} />
              </div>
            </div>
          </button>

          {/* Filters Button */}
          <button
            onClick={onFiltersClick}
            className="bg-white border border-gray-200 border-solid relative rounded-[10px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <Image src={FilterIcon} alt="Filter" width={16} height={16} />
              </div>
              <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-gray-950 text-sm text-nowrap tracking-[-0.28px] whitespace-pre">
                Filters
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

