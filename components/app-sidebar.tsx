'use client';

import {
	Check,
	Layers,
	MessageSquare,
	BarChart3,
	Cloud,
	ChevronRight,
	ChevronDown,
	LayoutGrid,
	ClipboardList,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from '@/components/ui/sidebar';
import { CreateSurveyOptionIcon, ValidataLogo } from '@/assets';
import Image from 'next/image';

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
		<SidebarGroup>
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
										<a href={item.url} className='flex items-center justify-center'>
											<item.icon className='w-5 h-5 text-gray-700' />
										</a>
									</SidebarMenuButton>
								</TooltipTrigger>
								<TooltipContent side='right'>
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

export function AppSidebar() {
	const { state } = useSidebar();
	const isCollapsed = state === 'collapsed';

	return (
		<Sidebar collapsible='icon'>
			{/* Header Section */}
			{!isCollapsed ? (
				<div className='flex items-center justify-between p-4 border-b h-[65px] '>
					<div className='flex items-center gap-2'>
						<Image alt='validata-logo' src={ValidataLogo} />
						<span className='font-bold text-lg text-black'>Validata</span>
					</div>
					<SidebarTrigger className='cursor-pointer' />
				</div>
			) : (
				<div className='flex items-center justify-center p-4 border-b h-[65px] '>
					<SidebarTrigger className='cursor-pointer' />
				</div>
			)}

			<SidebarContent>
				{/* Document Title Section - Hidden in collapsed state */}
				{!isCollapsed && (
					<SidebarGroup>
						<div className='flex items-center justify-between px-4 py-3'>
							<div className='flex items-center gap-2'>
								<h2 className='font-bold text-xl text-gray-900'>Untitled</h2>
								<span className='px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md font-medium'>Draft</span>
							</div>
							<Cloud className='w-4 h-4 text-gray-400' />
						</div>

						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title} className='px-2'>
										<SidebarMenuButton asChild isActive={item.isActive} className={item.isActive ? 'bg-[#F7F7F8]' : ''}>
											<a href={item.url} className='flex items-center gap-3 w-full'>
												<item.icon className='w-5 h-5 text-gray-700' />
												<span className='text-gray-900 font-medium'>{item.title}</span>
												{item.isActive && (
													<div className='ml-auto'>
														<Button
															size='sm'
															className='cursor-pointer bg-[#DAE7FF] hover:bg-[#DAE7FF]  text-[#1447E6] h-7 px-3 rounded-md text-xs font-medium flex items-center gap-1.5'
														>
															<Image src={CreateSurveyOptionIcon} alt='Create Survey' width={14} height={14} />
															<span>Survey</span>
															<ChevronDown className='w-3 h-3' />
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
				)}

				{/* Collapsed State - Icons Only */}
				{isCollapsed && <CollapsedAppBar />}

				{/* Recent Analysis Section - Hidden in collapsed state */}
				{!isCollapsed && (
					<SidebarGroup>
						<SidebarGroupLabel>
							<div className='flex items-center gap-2 text-gray-500'>
								<ChevronRight className='w-4 h-4' />
								<span>Recent Analysis</span>
							</div>
						</SidebarGroupLabel>
					</SidebarGroup>
				)}
			</SidebarContent>
		</Sidebar>
	);
}
