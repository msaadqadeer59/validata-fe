import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image"
import {
  ValidataLogo,
  ValidataOnlyIcon,
  SearchIcon,
  SettingsIcon,
  InfoIcon,
  ExpandCollapseIcon,
  PlusSquareIcon,
} from "@/assets"
import { SearchBar } from "./search-bar"
import { BaseNavCategory } from "./base-nav-category"
import { NavCategoryItem } from "./nav-category-item"
import { SidebarMenuItem } from "./sidebar-menu-item"
import { Avatar } from "./avatar"
import { Count } from "./count"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Bell, HelpCircle, ChevronDown } from "lucide-react"

const sidebarVariants = cva(
  "bg-white border-r border-gray-100 box-border flex flex-col items-start relative h-full",
  {
    variants: {
      collapsed: {
        true: "w-16",
        false: "w-[276px]",
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  showItems?: boolean
  onToggle?: () => void
}

interface SurveyItem {
  id: string
  label: string
  color?: "blue" | "orange" | "gray" | "green" | "red"
}

interface ReportItem {
  id: string
  label: string
  color?: "blue" | "orange" | "gray" | "green" | "red"
}

interface SidebarData {
  surveys?: SurveyItem[]
  reports?: ReportItem[]
  notificationCount?: number
  userName?: string
  userEmail?: string
  userAvatar?: string
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      collapsed = false,
      showItems = false,
      onToggle,
      ...props
    },
    ref
  ) => {
    const [surveysExpanded, setSurveysExpanded] = React.useState(showItems)
    const [reportsExpanded, setReportsExpanded] = React.useState(showItems)

    // Default data - can be passed as props later
    const sidebarData: SidebarData = {
      surveys: showItems
        ? [
            { id: "1", label: "Demo project", color: "blue" },
            { id: "2", label: "Remote survey", color: "green" },
            { id: "3", label: "On-site survey", color: "orange" },
          ]
        : [],
      reports: showItems
        ? [
            { id: "1", label: "Workplace Transformation", color: "blue" },
            { id: "2", label: "Age Focus Analysis", color: "orange" },
            { id: "3", label: "Remote Only Analysis", color: "gray" },
          ]
        : [],
      notificationCount: 3,
      userName: "Maher Jilani",
      userEmail: "maher@validata.so",
    }

    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ collapsed }), className)}
        {...props}
      >
        {/* Header */}
        <div className="border-b border-gray-100 box-border flex h-16 items-center justify-between p-4 relative shrink-0 w-full">
          {collapsed ? (
            <div className="flex items-center justify-center relative w-[22px] h-6">
              <Image
                src={ValidataOnlyIcon}
                alt="Validata"
                width={22}
                height={24}
                className="shrink-0"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Image
                src={ValidataLogo}
                alt="Validata"
                width={100}
                height={24}
                className="shrink-0"
              />
            </div>
          )}
          <button
            onClick={onToggle}
            className="overflow-clip relative shrink-0 size-4 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Toggle sidebar"
          >
            <Image
              src={ExpandCollapseIcon}
              alt="Toggle sidebar"
              width={16}
              height={16}
              className="size-full"
            />
          </button>
        </div>

        {/* Main Content */}
        <div className="basis-0 box-border flex flex-col gap-4 grow items-start min-h-0 min-w-0 p-4 relative shrink-0 w-full overflow-y-auto">
          {/* Buttons Section */}
          <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
            {/* Create New Survey Button */}
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="bg-gray-950 box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2 py-1 relative rounded-button shrink-0 size-8 cursor-pointer hover:bg-gray-900 transition-colors"
                    aria-label="Create new survey"
                  >
                    <div className="overflow-clip relative shrink-0 size-4">
                      <Image
                        src={PlusSquareIcon}
                        alt="Create"
                        width={16}
                        height={16}
                        className="size-4 brightness-0 invert"
                      />
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">Create new survey</TooltipContent>
              </Tooltip>
            ) : (
              <button
                className="bg-gray-950 box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2 py-1 relative rounded-button shrink-0 w-full cursor-pointer hover:bg-gray-900 transition-colors"
              >
                <div className="overflow-clip relative shrink-0 size-4">
                  <Image
                    src={PlusSquareIcon}
                    alt="Create"
                    width={16}
                    height={16}
                    className="size-4 brightness-0 invert"
                  />
                </div>
                <p className="font-sans font-medium leading-6 not-italic relative shrink-0 text-sm text-white tracking-tight whitespace-nowrap">
                  Create new survey
                </p>
              </button>
            )}

            {/* Search Bar */}
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-dark-25 box-border content-stretch flex items-center overflow-clip pl-1 pr-1.5 py-1 relative rounded-button shrink-0 size-8 cursor-pointer">
                    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                      <div className="overflow-clip relative shrink-0 size-4">
                        <Image
                          src={SearchIcon}
                          alt="Search"
                          width={16}
                          height={16}
                          className="shrink-0 size-4"
                        />
                      </div>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">Search</TooltipContent>
              </Tooltip>
            ) : (
              <SearchBar placeholder="Search" keyboardShortcut="⌘K" />
            )}
          </div>

          {/* Nav Categories */}
          {!collapsed && (
            <>
              {/* Surveys Category */}
              <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
                <BaseNavCategory
                  text="Surveys"
                  defaultExpanded={surveysExpanded}
                  onToggle={setSurveysExpanded}
                  items={
                    sidebarData.surveys?.map((survey) => ({
                      id: survey.id,
                      label: survey.label,
                      color: survey.color,
                    })) || []
                  }
                />
              </div>

              {/* Reports Category */}
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-0 min-w-0 relative shrink-0 w-full">
                <BaseNavCategory
                  text="Recent Analysis"
                  defaultExpanded={reportsExpanded}
                  onToggle={setReportsExpanded}
                  items={
                    sidebarData.reports?.map((report) => ({
                      id: report.id,
                      label: report.label,
                      color: report.color,
                    })) || []
                  }
                />
              </div>
            </>
          )}

          {/* Collapsed Nav Categories */}
          {collapsed && (
            <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
              <div className="box-border content-stretch flex gap-1 h-6 items-center justify-center p-1 relative rounded-md shrink-0 w-full">
                <p className="font-sans font-medium leading-4 not-italic relative shrink-0 text-[10px] text-gray-500 text-nowrap tracking-tight whitespace-pre">
                  Surveys
                </p>
              </div>
              {sidebarData.surveys?.map((survey) => (
                <Tooltip key={survey.id}>
                  <TooltipTrigger asChild>
                    <button
                      className="box-border content-stretch flex gap-2 h-8 items-center justify-center p-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors"
                    >
                      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center overflow-clip p-0.5 relative rounded-md shrink-0 size-6">
                        <div
                          className={cn(
                            "basis-0 box-border content-stretch flex gap-2 grow items-center justify-center min-h-0 min-w-0 pb-0 pt-0.5 px-0 relative rounded-md shrink-0 w-full",
                            survey.color === "blue" && "bg-blue-100",
                            survey.color === "green" && "bg-green-50",
                            survey.color === "orange" && "bg-orange-50"
                          )}
                        >
                          <p
                            className={cn(
                              "font-sans font-medium leading-4 not-italic relative shrink-0 text-xs text-center tracking-tight w-6",
                              survey.color === "blue" && "text-blue-700",
                              survey.color === "green" && "text-green-700",
                              survey.color === "orange" && "text-orange-700"
                            )}
                          >
                            {survey.label.charAt(0)}
                          </p>
                        </div>
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">{survey.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="box-border flex flex-col gap-3 items-start p-4 relative shrink-0 w-full">
          {/* Menu List */}
          <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
            {/* Notifications */}
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="box-border content-stretch flex gap-1 h-8 items-center justify-center p-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors relative"
                  >
                    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                      <div className="relative shrink-0 size-4">
                        <Bell className="size-4 text-gray-500" />
                        <div className="absolute bg-blue-600 right-0 rounded-full size-1.5 top-0" />
                      </div>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">Notifications</TooltipContent>
              </Tooltip>
            ) : (
              <button
                className="box-border content-stretch flex gap-1 h-8 items-center pl-1 pr-1.5 py-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                  <Bell className="size-4 text-gray-500" />
                </div>
                <p className="basis-0 font-sans font-medium grow leading-5 min-h-0 min-w-0 not-italic relative shrink-0 text-sm tracking-tight text-left text-gray-600">
                  Notifications
                </p>
                {sidebarData.notificationCount && (
                  <Count count={sidebarData.notificationCount} />
                )}
              </button>
            )}

            {/* Support */}
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="box-border content-stretch flex gap-1 h-8 items-center justify-center p-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors"
                  >
                    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                      <div className="overflow-clip relative shrink-0 size-4">
                        <Image
                          src={InfoIcon}
                          alt="Support"
                          width={16}
                          height={16}
                          className="size-4"
                        />
                      </div>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">Support</TooltipContent>
              </Tooltip>
            ) : (
              <button
                className="box-border content-stretch flex gap-1 h-8 items-center pl-1 pr-1.5 py-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Image
                      src={InfoIcon}
                      alt="Support"
                      width={16}
                      height={16}
                      className="size-4"
                    />
                  </div>
                </div>
                <p className="basis-0 font-sans font-medium grow leading-5 min-h-0 min-w-0 not-italic relative shrink-0 text-sm tracking-tight text-left text-gray-600">
                  Support
                </p>
              </button>
            )}

            {/* Settings */}
            {collapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="box-border content-stretch flex gap-1 h-8 items-center justify-center p-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors"
                  >
                    <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                      <div className="overflow-clip relative shrink-0 size-4">
                        <Image
                          src={SettingsIcon}
                          alt="Settings"
                          width={16}
                          height={16}
                          className="size-4"
                        />
                      </div>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            ) : (
              <button
                className="box-border content-stretch flex gap-1 h-8 items-center pl-1 pr-1.5 py-1 relative rounded-button shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <Image
                      src={SettingsIcon}
                      alt="Settings"
                      width={16}
                      height={16}
                      className="size-4"
                    />
                  </div>
                </div>
                <p className="basis-0 font-sans font-medium grow leading-5 min-h-0 min-w-0 not-italic relative shrink-0 text-sm tracking-tight text-left text-gray-600">
                  Settings
                </p>
              </button>
            )}
          </div>

          {/* Upgrade Card */}
          {!collapsed && (
            <div className="bg-gray-50 box-border content-stretch flex flex-col gap-1 items-start p-1 relative rounded-2xl shrink-0 w-full">
              <div className="bg-gray-950 box-border content-stretch flex flex-col h-40 items-start justify-between overflow-clip p-4 relative rounded-xl shrink-0 w-full">
                <p className="font-sans font-medium leading-5 min-w-full not-italic relative shrink-0 text-[13px] text-white tracking-tight">
                  <span>Upgrade to </span>
                  <span className="font-medium">Validata+</span>
                  <br aria-hidden="true" />
                  <span className="text-gray-500">and get </span>
                  <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                    Unlimited Reports
                  </span>
                </p>
                <button className="backdrop-blur backdrop-filter bg-white/5 border border-white/5 border-solid h-7 relative rounded-lg shrink-0 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="box-border content-stretch flex gap-1.5 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[inherit]">
                    <p className="font-sans font-medium leading-5 not-italic relative shrink-0 text-xs text-white text-nowrap tracking-tight whitespace-pre">
                      Upgrade
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* User Profile */}
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="box-border content-stretch flex gap-2 items-center pb-0 pt-3 px-0 relative rounded-xl shrink-0">
                  <Avatar
                    size="32"
                    radius="rectangle"
                    src={sidebarData.userAvatar}
                    name={sidebarData.userName}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <div>
                  <p className="font-sans font-medium leading-5 text-sm text-gray-950">
                    {sidebarData.userName}
                  </p>
                  <p className="font-sans font-normal leading-4 text-xs text-gray-600">
                    {sidebarData.userEmail}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="box-border content-stretch flex gap-2 items-center px-2 py-1.5 relative rounded-xl shrink-0 w-full">
              <Avatar
                size="32"
                radius="rectangle"
                src={sidebarData.userAvatar}
                name={sidebarData.userName}
              />
              <div className="basis-0 content-stretch flex flex-col grow h-9 items-start justify-center min-h-0 min-w-0 not-italic relative shrink-0">
                <p className="font-sans font-medium leading-5 relative shrink-0 text-sm text-gray-950 text-nowrap tracking-tight whitespace-pre">
                  {sidebarData.userName}
                </p>
                <p className="font-sans font-normal leading-4 min-w-full relative shrink-0 text-xs text-gray-600 tracking-tight">
                  {sidebarData.userEmail}
                </p>
              </div>
              <div className="content-stretch flex gap-2 items-center justify-center relative rounded-lg shrink-0 size-6">
                <ChevronDown className="size-4 text-gray-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)

Sidebar.displayName = "Sidebar"

export { Sidebar, sidebarVariants }
export type { SidebarProps }

