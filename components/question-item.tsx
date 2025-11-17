import {
	ImageChoiceToolTipIcon,
	SingleChoiceToolTipIcon,
	MultipleChoiceToolTipIcon,
	ImageChoiceIcon,
	SingleChoiceIcon,
	MultipleChoiceIcon,
	DragIcon,
} from '@/assets';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';
import { useDndContext } from '@dnd-kit/core';

interface QuestionItemProps {
	type: 'image-choice' | 'single-choice' | 'multiple-choice';
	isDragging?: boolean;
	width?: string;
}

const questionItemConfigs = {
	'image-choice': {
		title: 'Image choice',
		description: 'Image choice questions let respondents pick one or several visual options instead of text answers.',
		toolTipIcon: ImageChoiceToolTipIcon,
		icon: ImageChoiceIcon,
	},
	'single-choice': {
		title: 'Single choice',
		description: 'Single choice questions let respondents select only one answer from the available options.',
		toolTipIcon: SingleChoiceToolTipIcon,
		icon: SingleChoiceIcon,
	},
	'multiple-choice': {
		title: 'Multiple choice',
		description:
			'Multiple choice questions allow respondents to choose one or multiple options from a list of possible answers.',
		toolTipIcon: MultipleChoiceToolTipIcon,
		icon: MultipleChoiceIcon,
	},
};

const QuestionItemToolTipContent = ({
	title,
	description,
	toolTipIcon,
}: {
	title: string;
	description: string;
	toolTipIcon: string;
}) => {
	return (
		<div className='w-[254px] h-[272px] bg-[#060510] p-4'>
			<div className='border-[#FFFFFF1A] rounded-[20px]'>
				<Image src={toolTipIcon} alt={title} width={214} height={124} />
			</div>
			<div className='mt-2'>
				<p className='font-inter text-[20px] text-white'>{title}</p>
				<p className='mt-2 font-inter text-[14px] text-[#B8B9C5] line-height-[20px]'>{description}</p>
			</div>
		</div>
	);
};

function QuestionItem({ type, isDragging = false, width = 'w-[240px]' }: QuestionItemProps) {
	const { title, description, toolTipIcon, icon } = questionItemConfigs[type];
	const { active } = useDndContext();
	const isDragActive = !!active;

	return (
		<Tooltip open={isDragActive ? false : undefined}>
			<TooltipTrigger className='w-full'>
				<div
					className={`cursor-grab active:cursor-grabbing group flex flex-row items-center ${width} h-[40px] rounded-[10px] border border-[#DFE1E6] p-[8px] gap-[8px] transition-colors duration-200 ${isDragActive ? '' : 'hover:bg-[#F7F7F8]'}`}
				>
					<div className='flex items-center justify-center flex-col bg-[#daeafe] rounded-[5px] p-[2px]'>
						<Image className='border-radius-[8px]' src={icon.src} alt={title} width={20} height={20} />
					</div>
					<span className='font-inter text-[14px] font-medium text-black'>{title}</span>

					<Image
						className={`
							ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200
							${isDragging ? 'brightness-0' : 'group-hover:brightness-0'}
						`}
						src={DragIcon}
						alt='Drag'
						width={20}
						height={20}
					/>
				</div>
			</TooltipTrigger>

			{!isDragActive && (
				<TooltipContent side='right' className='rounded-[20px]'>
					<QuestionItemToolTipContent title={title} description={description} toolTipIcon={toolTipIcon} />
				</TooltipContent>
			)}
		</Tooltip>
	);
}

export default QuestionItem;
