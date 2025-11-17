'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import {
	DragIcon,
	ImproveWithAIIcon,
	LogicIcon,
	MultiChoiceTypeIcon,
	RequiredIcon,
	WorkflowIcon,
	OptionDeleteIcon,
} from '@/assets';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import Chips from './chips';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import { Checkbox } from './ui/checkbox';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS, Transform } from '@dnd-kit/utilities';
import { useDndContext } from '@dnd-kit/core';
import QuestionToolbar from './question-toolbar';
import { Question, useSurvey } from '@/contexts/survey-context';

type FancyCheckboxProps = React.ComponentProps<typeof Checkbox>;

function FancyCheckbox(props: FancyCheckboxProps) {
	return (
		<label className='inline-flex items-center justify-center cursor-pointer'>
			{/* Outer rounded square (the big soft gray border) */}
			<span
				className='
          flex h-6.5 w-6.5 items-center justify-center
          rounded-[8px]
          
          bg-[#F7F7F8]                      /* very light gray fill */
        '
			>
				{/* Inner checkbox (actual control) */}
				<Checkbox
					{...props}
					className='
            h-3 w-3 rounded-[4px]
            border-[1px] border-[##DFE1E6]   /* thick inner border */
            bg-white
            shadow-none

            
          '
				/>
			</span>
		</label>
	);
}

interface MultipleChoiceComponentProps {
	title: string;
	description?: string;
	questiontype: string;
	required: boolean;
	workflowtype?: string;
	options?: string[];
	onOptionsChange?: (options: string[]) => void;
	dragHandleProps?: React.HTMLAttributes<HTMLDivElement>;
	questionId?: string;
}

// Option Item Component with CSS-based states
function OptionItem({
	option,
	onUpdate,
	onDelete,
	attributes,
	listeners,
	setNodeRef,
	transform,
	transition,
	isDragging,
}: {
	option: string;
	onUpdate: (value: string) => void;
	onDelete?: () => void;
	attributes: React.HTMLAttributes<HTMLElement>;
	listeners: React.HTMLAttributes<HTMLElement> | undefined;
	setNodeRef: (node: HTMLElement | null) => void;
	transform: Transform | null;
	transition: string | undefined;
	isDragging: boolean;
}) {
	const style = {
		transform: CSS.Transform.toString(transform),
		transition: transition || 'transform 200ms ease',
	};

	return (
		<div ref={setNodeRef} style={style} className={isDragging ? 'opacity-30 transition-opacity duration-200' : 'opacity-100 transition-opacity duration-200'}>
			<div
				className={`
					flex w-full items-center
					cursor-default
					rounded-[10px] p-0.1
					transition-all duration-200
					hover:bg-[#DFE1E6] hover:shadow-sm
				`}
			>
				<div
					{...attributes}
					{...(listeners || {})}
					className='cursor-grab active:cursor-grabbing active:bg-gray-200 rounded-[10px] w-6 h-6 flex items-center justify-center'
				>
					<Image src={DragIcon} alt='Drag' width={20} height={20} />
				</div>
				<InputGroup
					className={`
						flex-1 rounded-[10px] bg-white
						transition-all duration-200
						group/option
						
					`}
				>
					<InputGroupInput
						placeholder='Option'
						className={`
							rounded-[6px] font-sans font-medium text-sm leading-6 tracking-[-0.02em]
							border-transparent bg-transparent
							transition-all duration-200
							placeholder:font-sans placeholder:font-medium placeholder:text-sm placeholder:leading-6 placeholder:tracking-[-0.02em]
						`}
						value={option}
						onChange={(e) => onUpdate(e.target.value)}
					/>
					{/* Delete button - appears on hover */}
					{onDelete && (
						<InputGroupAddon align='inline-end'>
							<button
								type='button'
								onClick={(e) => {
									e.stopPropagation();
									onDelete();
								}}
								className='
									opacity-0 group-hover/option:opacity-100
									flex items-center justify-center
									w-6 h-6 rounded-[7px]
									hover:bg-[#FFF2F2]
									transition-all duration-200
									cursor-pointer
								'
							>
								<Image src={OptionDeleteIcon} alt='Delete' width={15} height={15} />
							</button>
						</InputGroupAddon>
					)}
					<InputGroupAddon className='pl-0.75 pt-1 pr-1 pb-1'>
						<FancyCheckbox
							className={`
								transition-all duration-200
								hover:scale-110 active:scale-95
								cursor-pointer
							`}
						/>
					</InputGroupAddon>
				</InputGroup>
			</div>
		</div>
	);
}

// Sortable Option Component
function SortableOption({
	option,
	index,
	onUpdate,
	onDelete,
	questionId,
}: {
	option: string;
	index: number;
	onUpdate: (value: string) => void;
	onDelete?: () => void;
	questionId: string;
}) {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: `${questionId}-option-${index}`,
		data: {
			type: 'option',
			questionId,
			index,
		},
	});

	const { active } = useDndContext();
	const isActive = active?.id === `${questionId}-option-${index}`;

	// Only apply transition to the actively dragged item, others snap instantly
	const style = {
		transform: CSS.Transform.toString(transform),
		transition: isActive ? transition : undefined,
	};

	return (
		<div ref={setNodeRef} style={style} className='relative'>
			<OptionItem
				option={option}
				onUpdate={onUpdate}
				onDelete={onDelete}
				attributes={attributes as React.HTMLAttributes<HTMLElement>}
				listeners={listeners as React.HTMLAttributes<HTMLElement> | undefined}
				setNodeRef={() => { }}
				transform={null}
				transition={undefined}
				isDragging={isDragging}
			/>
			{/* Ghost placeholder when dragging */}
			{isDragging && (
				<div className='opacity-70 absolute top-0 left-0 w-full h-full'>
					<OptionItem
						option={option}
						onUpdate={onUpdate}
						onDelete={onDelete}
						attributes={attributes as React.HTMLAttributes<HTMLElement>}
						listeners={listeners as React.HTMLAttributes<HTMLElement> | undefined}
						setNodeRef={() => { }}
						transform={null}
						transition={undefined}
						isDragging={isDragging}
					/>
				</div>
			)}
		</div>
	);
}

export function MultipleChoiceComponent({
	title: initialTitle,
	description: initialDescription,
	questiontype,
	required,
	workflowtype,
	options: initialOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
	onOptionsChange,
	dragHandleProps,
	questionId = 'default',
}: MultipleChoiceComponentProps) {
	const [title, setTitle] = useState(initialTitle);
	const [description, setDescription] = useState(initialDescription || '');
	const [options, setOptions] = useState(initialOptions);
	const [activeToolbarItem, setActiveToolbarItem] = useState<string>('improve-ai');
	const [isHovered, setIsHovered] = useState(false);
	const [isToolbarHovered, setIsToolbarHovered] = useState(false);
	const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
	const questionRef = useRef<HTMLDivElement>(null);
	const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const { addQuestion, removeQuestion } = useSurvey();

	const showToolbar = isHovered || isToolbarHovered;

	const handleQuestionMouseLeave = () => {
		// Add a small delay before hiding to allow mouse to move to toolbar
		hideTimeoutRef.current = setTimeout(() => {
			setIsHovered(false);
		}, 100);
	};

	const handleQuestionMouseEnter = () => {
		// Clear any pending hide timeout
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
			hideTimeoutRef.current = null;
		}
		setIsHovered(true);
	};

	const handleToolbarMouseEnter = () => {
		// Clear any pending hide timeout
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
			hideTimeoutRef.current = null;
		}
		setIsToolbarHovered(true);
	};

	const handleToolbarMouseLeave = () => {
		setIsToolbarHovered(false);
	};

	// Sync options with parent when they change
	useEffect(() => {
		setOptions(initialOptions);
	}, [initialOptions]);

	// Sync title and description when props change
	useEffect(() => {
		setTitle(initialTitle);
	}, [initialTitle]);

	useEffect(() => {
		setDescription(initialDescription || '');
	}, [initialDescription]);

	// Calculate toolbar position when hovered
	useEffect(() => {
		if (showToolbar && questionRef.current) {
			const updatePosition = () => {
				if (questionRef.current) {
					const rect = questionRef.current.getBoundingClientRect();
					const portalElement = document.getElementById('question-toolbar-portal');
					if (portalElement) {
						const portalRect = portalElement.getBoundingClientRect();
						// Position toolbar in the gap between SurveyCanvas and ValidataChat
						// SurveyCanvas is 50% width, gap is 1.25rem (gap-5 = 20px)
						setToolbarPosition({
							top: rect.top - portalRect.top,
							left: portalRect.width * 0.5 + 1, // 50% + half gap (10px)
						});
					}
				}
			};

			updatePosition();
			window.addEventListener('scroll', updatePosition, true);
			window.addEventListener('resize', updatePosition);

			return () => {
				window.removeEventListener('scroll', updatePosition, true);
				window.removeEventListener('resize', updatePosition);
			};
		}
	}, [showToolbar]);

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (hideTimeoutRef.current) {
				clearTimeout(hideTimeoutRef.current);
			}
		};
	}, []);

	const addOption = () => {
		const newOptions = [...options, `Option ${options.length + 1}`];
		setOptions(newOptions);
		onOptionsChange?.(newOptions);
	};

	const addOtherQuestion = () => {
		const newId = `question-${Date.now()}-${Math.random()}`;
		const newQuestion: Question = {
			id: newId,
			type: 'multiple-choice',
			title: '',
			description: '',
			required: false,
			options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
		};
		addQuestion(newQuestion);
	};

	const updateOption = (index: number, value: string) => {
		const newOptions = [...options];
		newOptions[index] = value;
		setOptions(newOptions);
		onOptionsChange?.(newOptions);
	};

	const deleteOption = (index: number) => {
		if (options.length > 1) {
			const newOptions = options.filter((_, i) => i !== index);
			setOptions(newOptions);
			onOptionsChange?.(newOptions);
		}
	};

	const optionIds = options.map((_, index) => `${questionId}-option-${index}`);

	const handleToolbarItemClick = (itemId: string) => {
		setActiveToolbarItem(itemId);
		switch (itemId) {
			case 'delete':
				removeQuestion(questionId);
				break;
			case 'duplicate':
				// Handle duplicate action
				break;
			// Add other cases as needed
		}
	};

	const portalTarget = typeof document !== 'undefined' ? document.getElementById('question-toolbar-portal') : null;

	return (
		<div
			ref={questionRef}
			className='group'
			onMouseEnter={handleQuestionMouseEnter}
			onMouseLeave={handleQuestionMouseLeave}
		>
			{/* Card */}
			<div className='relative rounded-[20px] border-2 border-gray-200 '>
				{/* Header Section - Title and Description */}
				<div className='flex gap-3 rounded-tl-[20px] rounded-tr-[20px]  bg-white p-4'>
					{/* Drag Icon */}
					<div {...dragHandleProps} className='flex cursor-grab items-start pt-2 active:cursor-grabbing '>
						<Image src={DragIcon} alt='Drag' width={20} height={20} />
					</div>

					{/* Title and Description Inputs */}
					<div className='flex-1 space-y-3'>
						<div className='group relative flex items-center gap-2'>
							<Input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder='Your question title. Recall information with @'
								className='
      w-full border border-transparent bg-transparent outline-none 
      focus:border-gray-800 focus:bg-white focus:ring-0 
      focus-visible:border-gray-800 focus-visible:bg-white 
      focus-visible:ring-0 focus-visible:ring-offset-0 
      h-auto py-2 px-3 rounded-md transition-all duration-200 

      /* Typography */
      font-inter font-medium not-italic text-[16px] leading-[24px] tracking-[-0.02em]
      placeholder:font-medium placeholder:not-italic placeholder:text-[16px] 
      placeholder:leading-[24px] placeholder:tracking-[-0.02em]
    '
							/>

							<div
								className='
      flex items-center justify-center w-6 h-6 rounded-md 
      border border-transparent bg-gray-100 shrink-0 
      transition-all duration-200 opacity-0 
      group-hover:opacity-100 group-focus-within:opacity-100
    '
							>
								<Image
									src={ImproveWithAIIcon}
									alt='Improve with AI'
									width={16}
									height={16}
									className='shrink-0 cursor-pointer'
								/>
							</div>
						</div>

						<div className='group relative flex items-center gap-2'>
							<Input
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder='Add description (Optional)'
								className='
      w-full border border-transparent bg-transparent outline-none 
      focus:border-gray-800 focus:bg-white focus:ring-0 
      focus-visible:border-gray-800 focus-visible:bg-white 
      focus-visible:ring-0 focus-visible:ring-offset-0 
      h-auto py-2 px-3 rounded-md transition-all duration-200 
      
      /* Typography */
      font-inter font-normal not-italic text-[12px] leading-[20px] tracking-[-0.02em]
      placeholder:font-normal placeholder:not-italic placeholder:text-[12px] placeholder:leading-[20px] placeholder:tracking-[-0.02em]
    '
							/>

							<div
								className='
      flex items-center justify-center w-6 h-6 rounded-md 
      border border-transparent bg-gray-100 shrink-0 
      transition-all duration-200 opacity-0 group-hover:opacity-100
    '
							>
								<Image
									src={ImproveWithAIIcon}
									alt='Improve with AI'
									width={16}
									height={16}
									className='shrink-0 cursor-pointer'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row gap-2  w-full bg-white border-b-2 border-gray-200'>
					<div className='ml-4 mt-2 mb-4 flex flex-row gap-2'>
						<Chips
							icon={MultiChoiceTypeIcon}
							label={questiontype === 'Multiple Choice' ? 'Multiple Choice' : 'Single Choice'}
							onClick={() => { }}
						/>
						{required && <Chips icon={RequiredIcon} label='Required' onClick={() => { }} />}
					</div>
				</div>
				{/* Question Settings Section */}
				<div className='flex justify-between border-b-2 border-gray-200 bg-white p-4'>
					{/* Workflow Buttons */}
					<div className='flex items-center gap-2'>
						<Chips icon={LogicIcon} label='Logic' onClick={() => { }} isTransparent={true} />
						<Chips icon={WorkflowIcon} label='Move to next question' onClick={() => { }} />
					</div>
				</div>

				{/* Separator */}
				<Separator />

				{/* Answer Options Section */}
				<div className='space-y-2 p-4'>
					<SortableContext items={optionIds} strategy={verticalListSortingStrategy}>
						{options.map((option, index) => (
							<SortableOption
								key={`${questionId}-option-${index}`}
								option={option}
								index={index}
								onUpdate={(value) => updateOption(index, value)}
								onDelete={() => deleteOption(index)}
								questionId={questionId}
							/>
						))}
					</SortableContext>
					<div className='ml-6 mt-5 flex items-center gap-2'>
						<div
							className='cursor-pointer hover:bg-[#06051008] flex flex-row items-center gap-2 rounded-md p-2'
							role='button'
							onClick={addOption}
						>
							<Button
								className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border'
								variant='outline'
							>
								<Plus className='h-4 w-4 text-[#9999AD]' />
							</Button>
							<span className='text-sm'>Add answer</span>
						</div>
						<span className='text-sm text-gray-400 mr-1'>or</span>

						<div
							role='button'
							className='text-[#1447E6]  p-2 rounded-md border-none cursor-pointer hover:bg-[#1447E60D]'
							onClick={addOtherQuestion}
						>
							<span className='text-sm'>Add &quot;Other&quot;</span>
						</div>
					</div>
				</div>
			</div>

			{/* Portal toolbar */}
			{showToolbar &&
				portalTarget &&
				createPortal(
					<div
						className='pointer-events-auto absolute z-50 transition-opacity duration-200 p-2 -m-2'
						style={{
							top: `${toolbarPosition.top}px`,
							left: `${toolbarPosition.left}px`,
							transform: 'translateX(-50%)',
						}}
						onMouseEnter={handleToolbarMouseEnter}
						onMouseLeave={handleToolbarMouseLeave}
					>
						<QuestionToolbar activeItemId={activeToolbarItem} onItemClick={handleToolbarItemClick} />
					</div>,
					portalTarget
				)}
		</div>
	);
}
