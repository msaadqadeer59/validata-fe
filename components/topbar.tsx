'use client';

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tab } from "@/components/tab"
import { AvatarInvite } from "@/components/avatar-invite"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

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
        "backdrop-blur-[32px] backdrop-filter border-gray-100 border-[0px_0px_1px_1px] border-solid",
        "box-border content-stretch flex items-center justify-between",
        "px-[16px] py-0 relative w-full h-[64px]",
        className
      )}
      {...props}
    >
      {/* Left Section - Navigation Tabs */}
      <div className="basis-0 content-stretch flex gap-[8px] grow isolate items-center min-h-px min-w-px relative shrink-0">
        {/* Surveys Tab */}
        <div
          onClick={() => handleTabClick("surveys")}
          className="cursor-pointer"
        >
          <Tab
            text="Surveys"
            type="underline-border"
            size="md"
            active={activeTab === "surveys"}
            showCount={true}
            count={surveysCount}
            showIcon={false}
          />
        </div>

        {/* Integrations Tab */}
        <div
          onClick={() => handleTabClick("integrations")}
          className="cursor-pointer"
        >
          <Tab
            text="Integrations"
            type="underline-border"
            size="md"
            active={activeTab === "integrations"}
            showCount={false}
            showIcon={false}
          />
        </div>

        {/* Brand Kit Tab */}
        <div
          onClick={() => handleTabClick("brand-kit")}
          className="cursor-pointer"
        >
          <Tab
            text="Brand kit"
            type="underline-border"
            size="md"
            active={activeTab === "brand-kit"}
            showCount={false}
            showIcon={false}
          />
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
        {/* Share Feedback Button */}
        <button
          onClick={onShareFeedbackClick}
          className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[10px] shrink-0"
        >
          <span className="relative shrink-0 size-4 text-base leading-none" role="img" aria-label="Waving hand">
            👋
          </span>
          <p className="font-sans font-medium leading-6 not-italic relative shrink-0 text-gray-950 text-sm text-nowrap tracking-tight whitespace-pre">
            Share feedback <span className="text-gray-600">to help us improve!</span>
          </p>
        </button>

        {/* Invite Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div className="bg-white border border-gray-200 border-solid box-border content-stretch flex gap-px items-center relative rounded-[10px] shrink-0 w-full">
            {/* Avatars */}
            <div className="box-border content-stretch flex h-8 items-center pl-1 pr-2 py-0.5 relative rounded-bl-[10px] rounded-tl-[10px] shrink-0">
              {avatars.map((avatar, index) => (
                <AvatarInvite
                  key={index}
                  src={avatar.src}
                  name={avatar.name}
                  alt={avatar.alt}
                  className={cn(
                    "relative shrink-0 size-6",
                    index > 0 && "-ml-1"
                  )}
                />
              ))}
            </div>

            {/* Invite Button */}
            <button
              onClick={onInviteClick}
              className="border border-gray-200 border-solid h-8 relative rounded-br-[10px] rounded-tr-[10px] shrink-0"
            >
              <div className="box-border content-stretch flex h-8 items-center justify-center overflow-clip px-2 py-1 relative rounded-[inherit]">
                <p className="font-sans font-medium leading-5 not-italic relative shrink-0 text-gray-950 text-sm text-nowrap tracking-tight whitespace-pre">
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
