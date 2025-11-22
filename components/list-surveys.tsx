'use client';

import * as React from 'react';
import { SurveyCard } from './survey-card';

export interface SurveyData {
	id: string;
	title: string;
	subtitle?: string;
	status?: 'draft' | 'published' | 'live' | 'schedule';
	tags?: string[];
	responses?: number;
	newResponses?: number;
	views?: number;
	hasResponses?: boolean;
	color?: 'blue' | 'orange' | 'gray' | 'green' | 'red';
}

interface ListSurveysProps {
	surveys?: SurveyData[];
	onSurveyClick?: (surveyId: string) => void;
	onMenuClick?: (surveyId: string) => void;
	className?: string;
}

// Survey data from Figma selection
const dummySurveys: SurveyData[] = [
	{
		id: '1',
		title: 'Remote survey',
		subtitle: 'Viewed a few seconds ago',
		status: 'live',
		tags: [],
		responses: 32,
		newResponses: 24,
		views: 2,
		hasResponses: true,
		color: 'green',
	},
	{
		id: '2',
		title: 'On-site survey',
		subtitle: 'Viewed a few seconds ago',
		status: 'schedule',
		tags: [],
		responses: 0,
		newResponses: 0,
		views: 0,
		hasResponses: false,
		color: 'orange',
	},
	{
		id: '3',
		title: 'Demo survey',
		subtitle: 'Viewed a few seconds ago',
		status: 'draft',
		tags: ['Demo'],
		responses: 0,
		newResponses: 0,
		views: 0,
		hasResponses: false,
		color: 'blue',
	},
];

export function ListSurveys({
	surveys = dummySurveys,
	onSurveyClick,
	onMenuClick,
	className,
}: ListSurveysProps) {
	const handleSurveyClick = (surveyId: string) => {
		onSurveyClick?.(surveyId);
	};

	const handleMenuClick = (surveyId: string) => {
		onMenuClick?.(surveyId);
	};

	return (
		<div className={`box-border content-start flex flex-wrap gap-4 items-start relative size-full ${className || ''}`}>
			{surveys.map((survey) => (
				<SurveyCard
					key={survey.id}
					title={survey.title}
					subtitle={survey.subtitle}
					status={survey.status}
					tags={survey.tags}
					responses={survey.responses}
					newResponses={survey.newResponses}
					views={survey.views}
					hasResponses={survey.hasResponses}
					color={survey.color}
					onClick={() => handleSurveyClick(survey.id)}
					onMenuClick={() => handleMenuClick(survey.id)}
				/>
			))}
		</div>
	);
}

