import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group';
import { Pencil, Search, X } from 'lucide-react';
import { Separator } from './ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Button } from './ui/button';
import Image from 'next/image';
import { PlusSquareIcon } from '@/assets';
import QuestionItem from './question-item';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSurvey } from '@/contexts/survey-context';

const contentItems = ['Display text', 'Choices', 'Text', 'Number', 'Time', 'Rating & Ranking', 'Contact Info', 'Media'];

// Sortable Item Component - only for multiple-choice
export function SortableItem({ id, type }: { id: string; type: 'single-choice' | 'multiple-choice' | 'image-choice' }) {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id,
		disabled: type !== 'multiple-choice', // Disable dragging for non-multiple-choice items
		data: {
			type: 'question-item',
			questionType: type,
		},
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const isDraggable = type === 'multiple-choice';

	return (
		<div ref={setNodeRef} style={style} className='relative w-full'>
			{isDraggable ? (
				<div
					{...attributes}
					{...listeners}
					className={`w-full ${isDragging ? 'opacity-30 transition-opacity duration-200 w-full' : 'opacity-100 transition-opacity duration-200'
						}`}
				>
					<QuestionItem width='w-full' type={type} isDragging={isDragging} />
				</div>
			) : (
				<div className='opacity-100 w-full'>
					<div className='cursor-not-allowed opacity-60 w-full'>
						<QuestionItem width='w-full' type={type} isDragging={false} />
					</div>

				</div>
			)}
			{/* Ghost placeholder when dragging */}
			{isDragging && isDraggable && (
				<div className='absolute top-0 left-0 w-full h-10 rounded-[10px] bg-[#F7F7F8] pointer-events-none' />
			)}
		</div>
	);
}

function AddContentBar() {
	const { availableItems, setShowAddContentBar } = useSurvey();

	return (
		<div className='flex flex-col border-2 border-gray-100 rounded-[20px] relative'>
			{/* Close Button */}
			<Button
				variant='ghost'
				size='icon'
				className='cursor-pointer absolute top-2 right-2 h-6 w-6 rounded-[6px] hover:bg-transparent hover:border-2 hover:border-gray-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none'
				onClick={() => setShowAddContentBar(false)}
			>
				<X className='h-4 w-4' />
			</Button>

			{/* Add Content Button */}
			<div className='p-2 flex flex-row items-center gap-2 pr-10'>
				<div className='relative'>
					<Button variant={'outline'} className='rounded-[12px] p-0 h-8 w-8'>
						<Pencil className='text-gray-500' />
					</Button>
					<div className='absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2 flex items-center justify-center'>
						<Image
							src={PlusSquareIcon}
							alt='Plus Square'
							width={13}
							height={12}
							className='bg-[#155DFC] rounded-[4px] drop-shadow-lg'
						/>
					</div>
				</div>

				<span className='font-sans font-medium text-base leading-6 tracking-[-0.02em]'>Add Content</span>
			</div>

			{/* Search Input */}
			<div className='px-2 mt-2'>
				<InputGroup className='rounded-[6px] bg-gray-100 border-none'>
					<InputGroupInput placeholder='Search' className='rounded-[6px] ' />
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
					<InputGroupAddon align='inline-end'>
						<div className='bg-white text-sm text-gray-500 px-1 py-0.5 rounded-md border border-gray-300'>⌘K</div>
					</InputGroupAddon>
				</InputGroup>
			</div>

			{/* Separator */}
			<Separator className='mt-4' />

			<div>
				<Accordion type='single' collapsible={true} className='w-full border-b' defaultValue='frequently-used'>
					<AccordionItem
						value='frequently-used'
						className='px-4 rounded-[10px] transition-colors duration-200 hover:bg-[#F7F7F8]'
					>
						<AccordionTrigger>Frequently used</AccordionTrigger>
						<AccordionContent className='flex flex-col gap-2'>
							{availableItems.length > 0 ? (
								<SortableContext strategy={verticalListSortingStrategy} items={availableItems}>
									{availableItems.map((item) => (
										<SortableItem
											key={item}
											id={item}
											type={item as 'single-choice' | 'multiple-choice' | 'image-choice'}
										/>
									))}
								</SortableContext>
							) : (
								<div className='text-sm text-gray-400 py-4 text-center'>All items have been added</div>
							)}
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<Accordion type='single' collapsible={true} className='w-full' defaultValue='item-1' disabled={true}>
					{contentItems.map((item) => (
						<AccordionItem
							key={item}
							value={item}
							className='flex flex-row items-center gap-2 px-4 rounded-[10px] transition-colors duration-200 hover:bg-[#F7F7F8]'
						>
							<AccordionTrigger>{item}</AccordionTrigger>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}

export default AddContentBar;
