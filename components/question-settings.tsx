'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { X, Settings } from 'lucide-react';
import { useSurvey } from '@/contexts/survey-context';
import { Question } from '@/contexts/survey-context';
import QuestionSettingSection, { QuestionSettingSectionTitle } from './question-setting-section';
import { InfoIcon, MultiChoiceTypeIcon, PlusSquareIcon } from '@/assets';

interface QuestionSettingsProps {
	question: Question | null;
}

function QuestionSettings({ question }: QuestionSettingsProps) {
	const { questions, setQuestions, setSelectedQuestionId } = useSurvey();
	const [required, setRequired] = useState(question?.required ?? true);
	const [hideForParticipants, setHideForParticipants] = useState(false);
	const [randomizeOrder, setRandomizeOrder] = useState(false);
	const [questionType, setQuestionType] = useState(question?.type === 'multiple-choice' ? 'Multiple choice' : 'Single choice');
	const [mapping, setMapping] = useState('Question');

	// Sync state when question changes
	useEffect(() => {
		if (question) {
			setRequired(question.required ?? true);
			setQuestionType(question.type === 'multiple-choice' ? 'Multiple choice' : 'Single choice');
		}
	}, [question]);

	if (!question) return null;

	const updateQuestion = (updates: Partial<Question>) => {
		setQuestions(questions.map((q) => (q.id === question.id ? { ...q, ...updates } : q)));
	};

	const handleRequiredChange = (checked: boolean) => {
		setRequired(checked);
		updateQuestion({ required: checked });
	};

	return (
		<div className='flex flex-col border-2 border-gray-100 rounded-[20px] bg-white relative overflow-x-visible'>
			{/* Header */}
			<div className='p-4 flex flex-row items-center justify-between border-b border-gray-200 relative'>
				<div className='flex items-center gap-2'>
					<div className='relative'>
						<Button variant={'outline'} className='rounded-[12px] p-0 h-8 w-8'>
							<Settings className='text-gray-500' />
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
					<span className='font-sans font-medium text-base leading-6 tracking-[-0.02em]'>Question Settings</span>
				</div>
				<Button
					variant='ghost'
					size='icon'
					className='cursor-pointer absolute top-2 right-2 h-6 w-6 rounded-[6px] hover:bg-transparent hover:border-2 hover:border-gray-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none'
					onClick={() => setSelectedQuestionId(null)}
				>
					<X className='h-4 w-4' />
				</Button>
			</div>

			<div className='flex flex-col overflow-y-auto max-h-[calc(90vh-100px)]'>
				<div className='flex flex-col p-4 space-y-6'>
					{/* Add elements to question */}
					<QuestionSettingSection title='Add elements to question' />
				</div>

				<div className='border-t border-gray-200'></div>

				<div className='flex flex-col p-4 space-y-6'>
					{/* Basic Section */}
					<div className='space-y-4'>
						<QuestionSettingSectionTitle title='Basic' />
						<div className='space-y-4'>
							{/* Required */}
							<div className='flex items-center justify-between'>
								<span className='font-sans font-medium text-sm leading-5 tracking-[-0.02em]'>Required</span>
								<Switch checked={required} onCheckedChange={handleRequiredChange} />
							</div>

							{/* Type of question */}
							<div className='space-y-2 mt-2'>
								<span className='font-sans font-medium text-sm leading-5 tracking-[-0.02em]'>Type of question</span>
								<Select
									value={questionType}
									onValueChange={(value) => {
										setQuestionType(value);
										const newType = value === 'Multiple choice' ? 'multiple-choice' : 'single-choice';
										updateQuestion({ type: newType });
									}}

								>
									<SelectTrigger className='w-[240px] h-16 gap-2 group mt-2'>
										<div className='flex items-center gap-2'>
											<div className='w-4 h-4 rounded-[4.8px] flex items-center justify-center group-hover:bg-[#EFF6FF] transition-colors'>
												<Settings className='h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors' />
											</div>
											<SelectValue />
										</div>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Multiple choice'>Multiple choice</SelectItem>
										<SelectItem value='Single choice'>Single choice</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-200'></div>

				<div className='flex flex-col p-4 space-y-6'>
					{/* Advanced Section */}
					<div className='space-y-4'>
						<QuestionSettingSectionTitle title='Advanced' />
						<div className='space-y-4'>
							{/* Hide for participants */}
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<span className='font-sans font-medium text-sm leading-5 tracking-[-0.02em]'>Hide for participants</span>
									<Image src={InfoIcon} alt='Info' width={16} height={16} />
								</div>
								<Switch checked={hideForParticipants} onCheckedChange={setHideForParticipants} />
							</div>

							{/* Randomize order */}
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-2'>
									<span className='font-sans font-medium text-sm leading-5 tracking-[-0.02em]'>Randomize order</span>
									<Image src={InfoIcon} alt='Info' width={16} height={16} />
								</div>
								<Switch checked={randomizeOrder} onCheckedChange={setRandomizeOrder} />
							</div>

							{/* Mapping */}
							<div className='space-y-2 mt-2'>
								<span className='font-sans font-medium text-sm leading-5 tracking-[-0.02em] '>Mapping</span>
								<Select value={mapping} onValueChange={setMapping} >
									<SelectTrigger className='w-[240px] h-16 gap-2 group mt-2'>
										<div className='flex items-center gap-2'>
											<div className='w-4 h-4 rounded-[4.8px] flex items-center justify-center group-hover:bg-[#EFF6FF] transition-colors'>
												<Image src={MultiChoiceTypeIcon} alt='Mapping' width={16} height={16} />
											</div>
											<SelectValue />
										</div>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Question'>Question</SelectItem>
										<SelectItem value='Answer'>Answer</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionSettings;

