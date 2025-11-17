'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Question type definition
export interface Question {
	id: string;
	type: 'single-choice' | 'multiple-choice' | 'image-choice';
	title: string;
	description?: string;
	required: boolean;
	workflowtype?: string;
	options: string[];
}

interface SurveyContextType {
	// Questions state
	questions: Question[];
	setQuestions: (questions: Question[]) => void;
	addQuestion: (question: Question) => void;
	removeQuestion: (questionId: string) => void;
	reorderQuestions: (oldIndex: number, newIndex: number) => void;
	updateQuestionOptions: (questionId: string, options: string[]) => void;

	// Available items state
	availableItems: ('single-choice' | 'multiple-choice' | 'image-choice')[];
	setAvailableItems: (items: ('single-choice' | 'multiple-choice' | 'image-choice')[]) => void;
	removeAvailableItem: (item: 'single-choice' | 'multiple-choice' | 'image-choice') => void;

	// AddContentBar visibility
	showAddContentBar: boolean;
	setShowAddContentBar: (show: boolean) => void;
	toggleAddContentBar: () => void;

	// Drag state
	activeDragId: string | null;
	setActiveDragId: (id: string | null) => void;
	activeDragType: 'single-choice' | 'multiple-choice' | 'image-choice' | null;
	setActiveDragType: (type: 'single-choice' | 'multiple-choice' | 'image-choice' | null) => void;

	// New question animation
	newQuestionId: string | null;
	setNewQuestionId: (id: string | null) => void;

	// Selected question for settings
	selectedQuestionId: string | null;
	setSelectedQuestionId: (id: string | null) => void;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export function SurveyProvider({ children }: { children: ReactNode }) {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [availableItems, setAvailableItems] = useState<('single-choice' | 'multiple-choice' | 'image-choice')[]>([
		'single-choice',
		'multiple-choice',
		'image-choice',
	]);
	const [showAddContentBar, setShowAddContentBar] = useState(false);
	const [activeDragId, setActiveDragId] = useState<string | null>(null);
	const [activeDragType, setActiveDragType] = useState<'single-choice' | 'multiple-choice' | 'image-choice' | null>(null);
	const [newQuestionId, setNewQuestionId] = useState<string | null>(null);
	const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

	const addQuestion = (question: Question) => {
		setQuestions((prev) => [...prev, question]);
		setNewQuestionId(question.id);
		setSelectedQuestionId(question.id); // Auto-select the newly added question
		setTimeout(() => setNewQuestionId(null), 600);
	};

	const reorderQuestions = (oldIndex: number, newIndex: number) => {
		setQuestions((prev) => {
			const newQuestions = [...prev];
			const [moved] = newQuestions.splice(oldIndex, 1);
			newQuestions.splice(newIndex, 0, moved);
			return newQuestions;
		});
	};

	const updateQuestionOptions = (questionId: string, options: string[]) => {
		setQuestions((prev) => prev.map((q) => (q.id === questionId ? { ...q, options } : q)));
	};

	const removeQuestion = (questionId: string) => {
		setQuestions((prev) => {
			const newQuestions = prev.filter((q) => q.id !== questionId);
			// If the deleted question was selected, select another question if available
			if (selectedQuestionId === questionId) {
				if (newQuestions.length > 0) {
					// Select the first question, or the one at the same index if possible
					const deletedIndex = prev.findIndex((q) => q.id === questionId);
					const newSelectedIndex = Math.min(deletedIndex, newQuestions.length - 1);
					setSelectedQuestionId(newQuestions[newSelectedIndex].id);
				} else {
					// No questions left, clear selection
					setSelectedQuestionId(null);
				}
			}
			return newQuestions;
		});
	};

	const removeAvailableItem = (item: 'single-choice' | 'multiple-choice' | 'image-choice') => {
		setAvailableItems((prev) => prev.filter((i) => i !== item));
	};

	const toggleAddContentBar = () => {
		setShowAddContentBar((prev) => !prev);
	};

	return (
		<SurveyContext.Provider
			value={{
				questions,
				setQuestions,
				addQuestion,
				removeQuestion,
				reorderQuestions,
				updateQuestionOptions,
				availableItems,
				setAvailableItems,
				removeAvailableItem,
				showAddContentBar,
				setShowAddContentBar,
				toggleAddContentBar,
				activeDragId,
				setActiveDragId,
				activeDragType,
				setActiveDragType,
				newQuestionId,
				setNewQuestionId,
				selectedQuestionId,
				setSelectedQuestionId,
			}}
		>
			{children}
		</SurveyContext.Provider>
	);
}

export function useSurvey() {
	const context = useContext(SurveyContext);
	if (context === undefined) {
		throw new Error('useSurvey must be used within a SurveyProvider');
	}
	return context;
}

