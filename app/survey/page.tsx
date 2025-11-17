'use client';
import { WorkflowIcon } from '@/assets';

import AddItemButton from '@/components/add-item-btn';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PageIndicator from '@/components/page-indicator';
import AddContentBar from '@/components/content-bar';
import ValidataChat from '@/components/validata-chat';
import { MultipleChoiceComponent } from '@/components/multiple-choice-component';
import QuestionItem from '@/components/question-item';
import QuestionSettings from '@/components/question-settings';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
	DragOverlay,
	DragStartEvent,
	useDroppable,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
	useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useSurvey, Question } from '@/contexts/survey-context';
import { useSidebar } from '@/components/ui/sidebar';
import { useEffect } from 'react';

interface SurveyCanvasProps {
	onToggleAddContentBar: () => void;
}

function SurveyCanvas({ onToggleAddContentBar }: SurveyCanvasProps) {
	const { setNodeRef, isOver } = useDroppable({
		id: 'survey-canvas',
	});
	const { questions, newQuestionId, updateQuestionOptions } = useSurvey();

	const questionIds = questions.map((q) => q.id);

	return (
		<div
			ref={setNodeRef}
			className={`bg-[#F5F5F5] h-[90vh] rounded-3xl flex flex-col overflow-y-auto overflow-x-visible ${
				isOver ? 'ring-2 ring-blue-400 ring-offset-2' : ''
			}`}
		>
			<div className='flex flex-row items-center justify-between py-4 px-6 border-b'>
				<PageIndicator page={1} />

				<Button
					variant={'outline'}
					className='rounded-[12px]  focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none'
				>
					<Image src={WorkflowIcon} alt='Workflow' />
					<p>Workflow</p>
				</Button>
			</div>

			{/* Questions List */}
			<div className='flex-1 p-4 space-y-4 overflow-y-auto overflow-x-visible'>
				{questions.length === 0 ? (
					<div className='flex flex-1 items-center justify-center'>
						<AddItemButton onClick={onToggleAddContentBar} text='Add questions manually' />
					</div>
				) : (
					<SortableContext items={questionIds} strategy={verticalListSortingStrategy}>
						{questions.map((question) => (
							<QuestionWrapper
								key={question.id}
								question={question}
								onUpdateOptions={(options) => updateQuestionOptions(question.id, options)}
								isNew={question.id === newQuestionId}
							/>
						))}
					</SortableContext>
				)}
			</div>
		</div>
	);
}

// Wrapper component that combines SurveyCanvas and ValidataChat
function SurveyAndChatWrapper({ onToggleAddContentBar }: SurveyCanvasProps) {
	return (
		<div className='relative grid gap-5 grid-cols-[1fr_1fr]'>
			<div className='relative z-30 overflow-visible'>
				<SurveyCanvas onToggleAddContentBar={onToggleAddContentBar} />
			</div>
			<div className='relative z-20 overflow-visible'>
				<ValidataChat />
			</div>
			{/* Portal target for question toolbar */}
			<div id='question-toolbar-portal' className='absolute inset-0 pointer-events-none z-40' />
		</div>
	);
}

// Sortable Question Wrapper Component
interface QuestionWrapperProps {
	question: Question;
	onUpdateOptions: (options: string[]) => void;
	isNew?: boolean;
}

function QuestionWrapper({ question, onUpdateOptions, isNew }: QuestionWrapperProps) {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id: question.id,
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
	};

	return (
		<div
			ref={setNodeRef}
			style={{
				...style,
				...(isNew
					? {
							animation: 'fadeInSlideUp 0.5s ease-out',
					  }
					: {}),
			}}
			{...attributes}
			className='w-full'
		>
			{question.type === 'multiple-choice' || question.type === 'single-choice' ? (
				<MultipleChoiceComponent
					title={question.title}
					description={question.description}
					questiontype={question.type === 'multiple-choice' ? 'Multiple Choice' : 'Single Choice'}
					required={question.required}
					workflowtype={question.workflowtype}
					options={question.options}
					onOptionsChange={onUpdateOptions}
					dragHandleProps={listeners}
					questionId={question.id}
				/>
			) : null}
		</div>
	);
}

function SurveyPage() {
	const {
		questions,
		addQuestion,
		reorderQuestions,
		updateQuestionOptions,
		removeAvailableItem,
		showAddContentBar,
		toggleAddContentBar,
		activeDragId,
		setActiveDragId,
		activeDragType,
		setActiveDragType,
		selectedQuestionId,
	} = useSurvey();

	const { setOpen } = useSidebar();

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	// Auto-collapse sidebar when dragging starts
	useEffect(() => {
		if (activeDragId && activeDragType === 'multiple-choice') {
			setOpen(false);
		}
	}, [activeDragId, activeDragType, setOpen]);

	const handleDragStart = (event: DragStartEvent) => {
		setActiveDragId(event.active.id as string);
		// Store the type if it's a question item being dragged
		if (event.active.data.current?.type === 'question-item') {
			setActiveDragType(event.active.data.current.questionType);
		}
	};

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		setActiveDragId(null);
		setActiveDragType(null);

		if (!over) return;

		// Handle option reordering within a question
		if (active.data.current?.type === 'option' && over.data.current?.type === 'option') {
			const activeData = active.data.current;
			const overData = over.data.current;

			if (activeData.questionId === overData.questionId) {
				const question = questions.find((q) => q.id === activeData.questionId);
				if (question) {
					const oldIndex = activeData.index as number;
					const newIndex = overData.index as number;
					const newOptions = arrayMove(question.options, oldIndex, newIndex);
					updateQuestionOptions(question.id, newOptions);
				}
			}
			return;
		}

		// Handle drop from AddContentBar to SurveyCanvas - only allow multiple-choice
		if (
			active.data.current?.type === 'question-item' &&
			over.id === 'survey-canvas' &&
			active.data.current.questionType === 'multiple-choice'
		) {
			const questionType = 'multiple-choice';
			const newId = `question-${Date.now()}-${Math.random()}`;
			const newQuestion: Question = {
				id: newId,
				type: questionType,
				title: '',
				description: '',
				required: false,
				options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
			};
			addQuestion(newQuestion);
			removeAvailableItem(questionType);
			return;
		}

		// Handle reordering questions within SurveyCanvas
		if (over.id === 'survey-canvas' || questions.find((q) => q.id === over.id)) {
			const oldIndex = questions.findIndex((q) => q.id === active.id);
			const newIndex = questions.findIndex((q) => q.id === over.id);

			if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
				reorderQuestions(oldIndex, newIndex);
			}
		}
	};

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<div
				className={`grid gap-5 w-full px-6 mt-4 overflow-y-visible ${
					showAddContentBar ? 'grid-cols-[2fr_8fr]' : 'grid-cols-[1fr]'
				}`}
			>
				{showAddContentBar && (
					<div className='relative z-10 overflow-visible flex flex-col gap-4'>
						{questions.length > 0 && (
							<QuestionSettings question={questions.find((q) => q.id === selectedQuestionId) || questions[0] || null} />
						)}
						<AddContentBar />
					</div>
				)}

				<SurveyAndChatWrapper onToggleAddContentBar={toggleAddContentBar} />
			</div>

			{/* Drag Overlay for visual feedback */}
			<DragOverlay dropAnimation={null}>
				{activeDragId && activeDragType === 'multiple-choice' ? (
					<div className='bg-white rounded-[10px] border border-[#DFE1E6] shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-2 transform rotate-2'>
						<QuestionItem type={activeDragType} width='w-[240px]' />
					</div>
				) : null}
			</DragOverlay>
		</DndContext>
	);
}

export default SurveyPage;
