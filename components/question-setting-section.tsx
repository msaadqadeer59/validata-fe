'use client';

import Image from 'next/image';
import { MultiChoiceTypeIcon } from '@/assets';

interface SettingItem {
	label: string;
	onClick?: () => void;
}

interface QuestionSettingSectionProps {
	title: string;
	items?: SettingItem[];
}

const defaultItems: SettingItem[] = [
	{ label: 'Add Image' },
	{ label: 'Add video' },
	{ label: 'Add banner' },
];

function SettingItemButton({ label, onClick }: SettingItem) {
	return (
		<button
			onClick={onClick}
			className='
				cursor-pointer
				flex items-center gap-2
				w-full h-10 py-2 px-1.5
				border border-gray-200 rounded-[10px]
				hover:bg-gray-50 transition-colors group
			'
		>
			{/* Icon container */}
			<div className='w-4 h-4 rounded-[4.8px] bg-[#F7F7F8] flex items-center justify-center shrink-0 group-hover:bg-[#EFF6FF] transition-colors'>
				<Image
					src={MultiChoiceTypeIcon}
					alt={label}
					width={16}
					height={16}
					className='transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(42%)_sepia(100%)_saturate(2000%)_hue-rotate(212deg)_brightness(1)]'
				/>
			</div>

			{/* Text */}
			<span className='
				font-sans font-medium text-sm leading-5 tracking-[-0.02em]
				text-gray-900
			'>
				{label}
			</span>
		</button>
	);
}

export function QuestionSettingSectionTitle({ title }: { title: string }) {
	return (
		<span className='
			block font-sans font-normal text-xs leading-4 tracking-[-0.02em]
			text-gray-500
		'>
			{title}
		</span>
	);
}

function QuestionSettingSection({ title, items = defaultItems }: QuestionSettingSectionProps) {
	return (
		<div className='space-y-2'>
			{/* Section Title */}
			<QuestionSettingSectionTitle title={title} />

			{/* Items List */}
			<div className='space-y-2'>
				{items.map((item, index) => (
					<SettingItemButton key={index} label={item.label} onClick={item.onClick} />
				))}
			</div>
		</div>
	);
}

export default QuestionSettingSection;

