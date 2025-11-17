'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';
import { DeleteIcon, DuplicateIcon, PreviewIcon, CommentsIcon, SettingsIcon, ImproveWithAIIcon } from '@/assets';
import Image from 'next/image';
interface ToolbarItem {
	id: string;
	icon: string | { src: string } | React.ReactNode;
	label: string;
	onClick?: () => void;
	isActive?: boolean;
	isDestructive?: boolean;
	isPrimaryComponent?: boolean;
}

interface QuestionToolbarProps {
	activeItemId?: string;
	onItemClick?: (itemId: string) => void;
}
const ToolBarItemComponent = ({
	item,
	onItemClick,
	isPrimaryComponent = false,
	isDestructive = false,
}: {
	item: ToolbarItem;
	onItemClick?: (itemId: string) => void;
	isPrimaryComponent?: boolean;
	isDestructive?: boolean;
}) => {
	return (
		<Tooltip key={item.id}>
			<TooltipTrigger asChild>
				<div onClick={() => onItemClick?.(item.id)}>
					<div
						className={cn(
							'flex items-center justify-center w-[32px] h-[32px] hover:bg-white hover:border-2 border-[#DFE1E6] rounded-[10px] cursor-pointer',
							isPrimaryComponent && 'bg-[#1447E60D] hover:bg-[#DAE7FF] mt-1 hover:border-none',
							isDestructive && 'hover:bg-[#FFE2E2]  hover:border-2 hover:border-[#FFC9CA] mb-1'
						)}
					>
						{item.icon as React.ReactNode}
					</div>
				</div>
			</TooltipTrigger>
			<TooltipContent side='right' sideOffset={10}>
				{item.label}
			</TooltipContent>
		</Tooltip>
	);
};

function QuestionToolbar({ onItemClick }: QuestionToolbarProps) {
	const toolbarItems: ToolbarItem[] = [
		{
			id: 'improve-ai',
			icon: <Image src={ImproveWithAIIcon} alt='Improve with AI' width={15} height={15} />,
			label: 'Improve with AI',
			isPrimaryComponent: true,
		},
		{
			id: 'preview',
			icon: <Image color='fill-#9999AD' src={PreviewIcon} alt='Preview' width={15} height={15} />,
			label: 'Preview',
		},
		{
			id: 'comments',
			icon: <Image color='fill-#9999AD' src={CommentsIcon} alt='Comments' width={15} height={15} />,
			label: 'Comments',
		},
		{
			id: 'settings',
			icon: <Image src={SettingsIcon} alt='Settings' width={15} height={15} />,
			label: 'Settings',
		},
		{
			id: 'duplicate',
			icon: <Image src={DuplicateIcon} alt='Duplicate' width={15} height={15} />,
			label: 'Duplicate',
		},
		{
			id: 'delete',
			icon: <Image src={DeleteIcon} alt='Delete' width={15} height={15} />,
			label: 'Delete',
			isDestructive: true,
		},
	];

	const handleItemClick = (itemId: string) => {
		onItemClick?.(itemId);
	};

	return (
		<div className='flex flex-col items-center justify-center  bg-[#F8F8F8] border border-[#DFE1E6] rounded-[14px] gap-2 shadow-2xl z-70 w-10'>
			{toolbarItems.map((item) => {
				return (
					<div
						key={item.id}
						className={cn(
							'px-1',
							item.isDestructive && 'pt-2 border-t-1 border-[#DFE1E6]',
							item.isPrimaryComponent && 'pb-2 border-b-1 border-[#DFE1E6]'
						)}
					>
						<ToolBarItemComponent
							key={item.id}
							item={item}
							isPrimaryComponent={item.isPrimaryComponent}
							isDestructive={item.isDestructive}
							onItemClick={handleItemClick}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default QuestionToolbar;
