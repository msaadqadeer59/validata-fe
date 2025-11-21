'use client';

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar } from "@/components/avatar"
import { Tab } from "@/components/tab"

interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab?: "surveys" | "integrations" | "brand-kit"
  onTabChange?: (tab: "surveys" | "integrations" | "brand-kit") => void
  surveysCount?: number
  onShareFeedbackClick?: () => void
  onInviteClick?: () => void
  avatars?: Array<{
    src: string
    name: string
    alt?: string
  }>
}

export function Topbar({
  className,
  activeTab = "surveys",
  onTabChange,
  surveysCount = 3,
  onShareFeedbackClick,
  onInviteClick,
  avatars = [
    { src: "", name: "Maher Jilani" },
    { src: "", name: "Kamil Mitek" },
  ],
  ...props
}: TopbarProps) {
  const handleTabClick = (tab: "surveys" | "integrations" | "brand-kit") => {
    onTabChange?.(tab)
  }

  return (
    <div
      className={cn(
        "backdrop-blur-[32px] backdrop-filter border-[#edeef2] border-[0px_0px_1px] border-solid",
        "box-border content-stretch flex items-center justify-between",
        "px-[16px] py-0 relative w-full h-[64px]",
        className
      )}
      {...props}
    >
      {/* Left Section - Navigation Tabs */}
      <div className="ml-[16px] basis-0 content-stretch flex gap-[8px] grow isolate items-center min-h-px min-w-px relative shrink-0">
        {/* Surveys Tab */}
        <Tab
          type="underline-border"
          size="md"
          active={activeTab === "surveys"}
          text="Surveys"
          showCount={true}
          count={surveysCount}
          onClick={() => handleTabClick("surveys")}
          className="z-[3]"
        />

        {/* Integrations Tab */}
        <Tab
          type="underline-border"
          size="md"
          active={activeTab === "integrations"}
          text="Integrations"
          showCount={false}
          onClick={() => handleTabClick("integrations")}
          className="z-[2]"
        />

        {/* Brand Kit Tab */}
        <Tab
          type="underline-border"
          size="md"
          active={activeTab === "brand-kit"}
          text="Brand kit"
          showCount={false}
          onClick={() => handleTabClick("brand-kit")}
          className="z-[1]"
        />
      </div>

      {/* Right Section - Actions */}
      <div className="content-stretch flex gap-[8px] h-full items-center justify-end relative shrink-0">
        {/* Share Feedback Button */}
        <button
          onClick={onShareFeedbackClick}
          className="bg-[#f7f7f8] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[10px] shrink-0"
        >
          <span className="relative shrink-0 size-[16px] text-base leading-none" role="img" aria-label="Waving hand">
            👋
          </span>
          <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[#060510] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">
            Share feedback <span className="text-[#6a6a7e]">to help us improve!</span>
          </p>
        </button>

        {/* Invite Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div className="bg-white border border-[#dfe1e6] border-solid box-border content-stretch flex gap-px items-center relative rounded-[10px] shrink-0 w-full">
            {/* Avatars */}
            <div className="bg-white box-border content-stretch flex h-[32px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-bl-[10px] rounded-tl-[10px] shrink-0 cursor-pointer">
              {avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  src={avatar.src}
                  name={avatar.name}
                  alt={avatar.alt}
                  size="24"
                  radius="circle"
                  border={true}
                  showTooltip={true}
                  tooltipName={avatar.name}
                  tooltipRole="View profile"
                  className={cn(
                    "mr-[-4px] relative shrink-0"
                  )}
                />
              ))}
            </div>

            {/* Invite Button */}
            <button
              onClick={onInviteClick}
              className="border-l border-[#dfe1e6] border-solid relative rounded-br-[10px] rounded-tr-[10px] size-full cursor-pointer"
            >
              <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[inherit] size-full">
                <p className="font-sans font-medium leading-[20px] not-italic relative shrink-0 text-[#060510] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">
                  Invite
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
