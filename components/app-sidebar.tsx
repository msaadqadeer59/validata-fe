'use client';

import * as React from 'react';
import { Layers, MessageSquare, BarChart3, Cloud, ChevronDown, Plus } from 'lucide-react';
import { Button } from '@/components/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from '@/components/ui/sidebar';
import { CreateSurveyOptionIcon, ValidataLogoComplete, ValidataOnlyIcon, UpgradeValidataImage, NotificationIcon, SupportIcon, SettingsIcon, UpgradeButtonIcon, SearchIcon, ChevronSelectorIcon } from '@/assets';
import Image from 'next/image';
import { SearchBar } from '@/components/search-bar';
import { ExpandableNavCategory } from './expandable-nav-category';
import type { NavCategoryItemData } from './nav-category-content';
import { SidebarMenuItem as SidebarMenuItemComponent } from './sidebar-menu-item';
import { Avatar } from './avatar';
import { cn } from '@/lib/utils';
import { ReportColor } from './report-color';
import { SurveyBadge } from './survey-badge';

// Menu items.
const items = [
	{
		title: 'Create',
		url: '/survey',
		icon: Layers,
		isActive: true,
	},
	{
		title: 'Responses',
		url: '#',
		icon: MessageSquare,
		isActive: false,
	},
	{
		title: 'Analysis',
		url: '#',
		icon: BarChart3,
		isActive: false,
	},
];

function CollapsedAppBar() {
	return (
		<SidebarGroup className="p-4">
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<Tooltip>
								<TooltipTrigger asChild>
									<SidebarMenuButton
										asChild
										isActive={item.isActive}
										className={item.isActive ? 'bg-gray-100 rounded-full p-2' : 'rounded-full p-2'}
									>
										<a href={item.url} className="flex items-center justify-center">
											<item.icon className="w-5 h-5 text-gray-700" />
										</a>
									</SidebarMenuButton>
								</TooltipTrigger>
								<TooltipContent side="right">
									<p>{item.title}</p>
								</TooltipContent>
							</Tooltip>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}

// Shared Recent Analysis items - used across all routes
const recentAnalysisItems: NavCategoryItemData[] = [
	{
		id: '1',
		label: 'Workplace Transformation',
		color: 'blue',
	},
	{
		id: '2',
		label: 'Age Focus Analysis',
		color: 'orange',
	},
	{
		id: '3',
		label: 'Remote Only Analysis',
		color: 'gray',
	},
];

// Recent Analysis Section - Shared across all routes
function RecentAnalysisSection() {
	return (
		<div className="flex flex-col gap-1">
			<ExpandableNavCategory text="Recent Analysis" items={recentAnalysisItems} defaultExpanded={true} showNumber={false} />
		</div>
	);
}

// Shared survey items data
const surveyItems: NavCategoryItemData[] = [
	{
		id: '1',
		label: 'Untitled survey',
		color: 'green',
	},
	{
		id: '2',
		label: 'Demo project',
		color: 'blue',
	},
	{
		id: '3',
		label: 'Remote survey',
		color: 'green',
	},
	{
		id: '4',
		label: 'On-site survey',
		color: 'orange',
	},
];

// Dashboard Route Sidebar Content
function DashboardSideBarItems() {
	return (
		<div className="flex flex-col gap-2">
			<Button variant="default" size="default" icon={<Plus />} iconPosition="left" className="w-full">
				Create new survey
			</Button>
			<SearchBar className="w-full" />
			<div className="flex flex-col gap-1">
				<ExpandableNavCategory text="Surveys" items={surveyItems} itemType="survey" defaultExpanded={true} showNumber={false} />
			</div>
		</div>
	);
}

// Dashboard Route Sidebar Content - Collapsed State
function DashboardSideBarItemsCollapsed() {
	return (
		<div className="border-[#edeef2] border-[0px_0px_1px] border-solid flex flex-col gap-4 p-4 shrink-0 items-center w-full">
			{/* Buttons Section */}
			<div className="flex flex-col gap-2 items-center w-full">
				{/* Create new survey button - collapsed */}
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="default"
							size="icon-sm"
							icon={<Plus className="w-4 h-4 text-white" />}
							className="w-8 h-8 rounded-[10px]"
						/>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>Create new survey</p>
					</TooltipContent>
				</Tooltip>

				{/* Search bar - collapsed */}
				<Tooltip>
					<TooltipTrigger asChild>
						<button className="bg-[rgba(6,5,16,0.03)] hover:bg-[rgba(6,5,16,0.05)] box-border flex items-center justify-center overflow-clip rounded-[10px] shrink-0 w-8 h-8 transition-colors">
							<div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
								<div className="overflow-clip relative shrink-0 size-4">
									<Image src={SearchIcon} alt="Search" width={16} height={16} className="shrink-0 size-4" />
								</div>
							</div>
						</button>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>Search</p>
					</TooltipContent>
				</Tooltip>
			</div>

			{/* Surveys Section */}
			<div className="flex flex-col gap-1 items-center w-full">
				{/* Surveys Label */}
				<div className="box-border flex gap-1 h-6 items-center justify-center p-1 relative rounded-md shrink-0 w-full">
					<p className="font-sans font-medium leading-4 not-italic relative shrink-0 text-[#9999ad] text-[10px] text-nowrap tracking-[-0.2px] whitespace-pre">
						Surveys
					</p>
				</div>

				{/* Survey Items - Collapsed (just badges, centered) */}
				<div className="flex flex-col gap-1 items-center w-full">
					{surveyItems.map((item) => (
						<Tooltip key={item.id}>
							<TooltipTrigger asChild>
								<button className="box-border flex items-center justify-center p-1 relative rounded-[10px] shrink-0 w-8 h-8 hover:bg-gray-50 transition-colors">
									<SurveyBadge letter={item.label.charAt(0)} color={item.color as 'blue' | 'orange' | 'gray' | 'green' | 'red'} />
								</button>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>{item.label}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			</div>
		</div>
	);
}

// Recent Analysis Section - Collapsed State
function RecentAnalysisSectionCollapsed() {
	return (
		<div className="flex flex-col gap-1 items-center p-4 shrink-0 w-full">
			{/* Recent Label */}
			<div className="box-border flex gap-1 h-6 items-center justify-center p-1 relative rounded-md shrink-0 w-full">
				<p className="font-sans font-medium leading-4 not-italic relative shrink-0 text-[#9999ad] text-[10px] text-nowrap tracking-[-0.2px] whitespace-pre">
					Recent
				</p>
			</div>

			{/* Recent Items - Collapsed (colored dots, centered) */}
			<div className="flex flex-col gap-1 items-center w-full">
				{recentAnalysisItems.map((item) => (
					<Tooltip key={item.id}>
						<TooltipTrigger asChild>
							<button className="box-border flex items-center justify-center p-1 relative rounded-[10px] shrink-0 w-8 h-8 hover:bg-gray-50 transition-colors">
								<div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
									<ReportColor color={item.color as 'blue' | 'orange' | 'gray' | 'green' | 'red'} />
								</div>
							</button>
						</TooltipTrigger>
						<TooltipContent side="right">
							<p>{item.label}</p>
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</div>
	);
}

// Survey Route Sidebar Content
function SurveySideBarItems() {
	return (
		<SidebarGroup className="p-4">
			<SidebarGroupContent className="mt-2">
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild isActive={item.isActive} className={item.isActive ? 'bg-[#F7F7F8]' : ''}>
								<a href={item.url} className="flex items-center gap-3 w-full">
									<item.icon className="w-5 h-5 text-gray-700" />
									<span className="text-gray-900 font-medium">{item.title}</span>
									{item.isActive && (
										<div className="ml-auto">
											<Button
												size="sm"
												className="cursor-pointer bg-[#DAE7FF] hover:bg-[#DAE7FF]  text-[#1447E6] h-7 px-3 rounded-md text-xs font-medium flex items-center gap-1.5"
											>
												<Image src={CreateSurveyOptionIcon} alt="Create Survey" width={14} height={14} />
												<span>Survey</span>
												<ChevronDown className="w-3 h-3" />
											</Button>
										</div>
									)}
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}

// Icon wrapper components for SVG assets
function NotificationIconWrapper({ className }: { className?: string }) {
	return <Image src={NotificationIcon} alt="Notifications" width={16} height={16} className={cn("size-4", className)} />;
}

function SupportIconWrapper({ className }: { className?: string }) {
	return <Image src={SupportIcon} alt="Support" width={16} height={16} className={cn("size-4", className)} />;
}

function SettingsIconWrapper({ className }: { className?: string }) {
	return <Image src={SettingsIcon} alt="Settings" width={16} height={16} className={cn("size-4", className)} />;
}

// Bottom Section - Menu List, Upgrade Card, User Profile
function SidebarBottomSection() {
	return (
		<div className="box-border flex flex-col gap-3 p-4 shrink-0 w-full mt-auto">
			{/* Menu List */}
			<div className="flex flex-col gap-1 shrink-0 w-full">
				<SidebarMenuItemComponent
					icon={NotificationIconWrapper}
					label="Notifications"
					count="3"
					collapsed={false}
				/>
				<SidebarMenuItemComponent
					icon={SupportIconWrapper}
					label="Support"
					collapsed={false}
				/>
				<SidebarMenuItemComponent
					icon={SettingsIconWrapper}
					label="Settings"
					collapsed={false}
				/>
			</div>

			{/* Upgrade Card */}
			<div className="bg-gray-50 box-border flex flex-col gap-1 items-start p-1 relative rounded-2xl shrink-0 w-full">
				<div className="bg-gray-950 box-border flex flex-col h-40 items-start justify-between overflow-hidden p-4 relative rounded-xl shrink-0 w-full">
					{/* Background Image */}
					<div className="absolute inset-0 pointer-events-none">
						<Image
							src={UpgradeValidataImage}
							alt=""
							fill
							className="object-cover"
							style={{ objectPosition: 'center' }}
						/>
					</div>

					{/* Content */}
					<p className="font-sans font-medium leading-5 min-w-full not-italic relative shrink-0 text-[13px] text-white tracking-[-0.26px] z-10">
						<span>Upgrade to </span>
						<span className="font-medium">Validata+</span>
						<br aria-hidden="true" />
						<span className="text-gray-500">and get </span>
						<span
							className="bg-clip-text bg-gradient-to-r from-[rgba(255,78,255,0.7)] to-[rgba(255,143,30,0.7)] text-transparent font-medium leading-[20px] text-[13px] text-nowrap tracking-[-0.26px] whitespace-pre"
							style={{ WebkitTextFillColor: "transparent" }}
						>
							Unlimited Reports
						</span>
					</p>

					<button className="backdrop-blur backdrop-filter bg-white/5 border border-white/5 border-solid h-7 relative rounded-lg shrink-0 cursor-pointer hover:bg-white/10 transition-colors z-10">
						<div className="box-border flex gap-1.5 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded-[inherit]">
							<Image src={UpgradeButtonIcon} alt="" width={12} height={12} className="relative shrink-0 size-3" />
							<p className="font-sans font-medium leading-5 not-italic relative shrink-0 text-xs text-white text-nowrap tracking-[-0.24px] whitespace-pre">
								Upgrade
							</p>
						</div>
					</button>
				</div>
			</div>

			{/* User Profile */}
			<div className="box-border flex gap-2 items-center px-2 py-1.5 relative rounded-xl shrink-0 w-full">
				<Avatar
					size="32"
					radius="rectangle"
					name="Maher Jilani"
					color="green"
				/>
				<div className="basis-0 flex flex-col grow h-9 items-start justify-center min-h-0 min-w-0 relative shrink-0">
					<p className="font-sans font-medium leading-5 relative shrink-0 text-sm text-gray-950 text-nowrap tracking-[-0.28px] whitespace-pre">
						Maher Jilani
					</p>
					<p className="font-sans font-normal leading-4 min-w-full relative shrink-0 text-xs text-gray-600 tracking-[-0.24px]">
						maher@validata.so
					</p>
				</div>
				<div className="flex gap-2 items-center justify-center relative rounded-lg shrink-0 size-6">
					<Image src={ChevronSelectorIcon} alt="Chevron Selector" width={16} height={16} className="size-4" />
				</div>
			</div>
		</div>
	);
}

// Bottom Section - Collapsed State
function SidebarBottomSectionCollapsed() {
	return (
		<div className="box-border flex flex-col gap-4 items-center pb-[22px] pt-4 px-4 shrink-0 w-full mt-auto">
			{/* Menu List */}
			<div className="flex flex-col gap-1 items-center shrink-0 w-full">
				<SidebarMenuItemComponent
					icon={NotificationIconWrapper}
					label="Notifications"
					count="3"
					collapsed={true}
					tooltipText="Notifications"
				/>
				<SidebarMenuItemComponent
					icon={SupportIconWrapper}
					label="Support"
					collapsed={true}
					tooltipText="Support"
				/>
				<SidebarMenuItemComponent
					icon={SettingsIconWrapper}
					label="Settings"
					collapsed={true}
					tooltipText="Settings"
				/>
			</div>

			{/* Upgrade Icon - Collapsed */}
			<Tooltip>
				<TooltipTrigger asChild>
					<button className="box-border flex gap-1 h-8 items-center justify-center p-1 relative rounded-[10px] shrink-0 w-8 hover:bg-gray-50 transition-colors">
						<div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 size-6">
							<div className="overflow-clip relative shrink-0 size-4">
								<Image src={UpgradeButtonIcon} alt="Upgrade" width={16} height={16} className="size-4" />
							</div>
						</div>
					</button>
				</TooltipTrigger>
				<TooltipContent side="right">
					<p>Upgrade</p>
				</TooltipContent>
			</Tooltip>

			{/* User Profile - Collapsed */}
			<div className="box-border flex gap-2 items-center justify-center pb-0 pt-3 px-0 relative rounded-xl shrink-0">
				<Avatar
					size="32"
					radius="rectangle"
					name="Maher Jilani"
					color="green"
				/>
			</div>
		</div>
	);
}

export function AppSidebar() {
	const { state } = useSidebar();
	const pathname = usePathname();
	const isCollapsed = state === 'collapsed';

	// Determine which route we're on
	const isDashboardRoute = pathname === '/dashboard';
	const isSurveyRoute = pathname === '/survey';

	return (
		<Sidebar
			collapsible="icon"
			className={cn(
				"w-[276px]",
				isCollapsed && "w-16"
			)}
			style={
				isCollapsed
					? ({ '--sidebar-width-icon': '4rem' } as React.CSSProperties)
					: undefined
			}
		>
			{/* Header Section */}
			{!isCollapsed ? (
				<div className="flex items-center justify-between p-4 border-[#edeef2] border-[0px_0px_1px] border-solid h-16">
					<div className="flex items-center gap-2">
						<Image src={ValidataLogoComplete} alt="Validata Logo" />
					</div>
					<SidebarTrigger className="cursor-pointer" />
				</div>
			) : (
				<div className="flex items-center justify-center p-4 border-[#edeef2] border-[0px_0px_1px] border-solid h-16 w-full relative">
					<SidebarTrigger
						className="cursor-pointer"
						iconSrc={ValidataOnlyIcon}
						iconAlt="Validata Logo"
						iconWidth={22}
						iconHeight={24}
					/>
				</div>
			)}

			<SidebarContent className="flex flex-col">
				{/* Document Title Section - Only shown on Survey route */}
				{!isCollapsed && isSurveyRoute && (
					<SidebarGroup className="p-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<h2 className="font-bold text-xl text-gray-900">Untitled</h2>
								<span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">Draft</span>
							</div>
							<Cloud className="w-4 h-4 text-gray-400" />
						</div>

						<SurveySideBarItems />
					</SidebarGroup>
				)}

				{/* Route-specific content */}
				{!isCollapsed && (
					<div className="flex flex-col gap-4 p-4">
						{isDashboardRoute && <DashboardSideBarItems />}
						<RecentAnalysisSection />
					</div>
				)}

				{/* Bottom Section - Menu List, Upgrade Card, User Profile */}
				{!isCollapsed && <SidebarBottomSection />}

				{/* Collapsed State - Dashboard Route */}
				{isCollapsed && isDashboardRoute && (
					<>
						<DashboardSideBarItemsCollapsed />
						<RecentAnalysisSectionCollapsed />
						<SidebarBottomSectionCollapsed />
					</>
				)}

				{/* Collapsed State - Other Routes (Icons Only) */}
				{isCollapsed && !isDashboardRoute && <CollapsedAppBar />}
			</SidebarContent>
		</Sidebar>
	);
}
