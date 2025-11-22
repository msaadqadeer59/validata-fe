'use client';

import { ListSurveys } from '@/components/list-surveys';
import { SurveyFilters } from '@/components/survey-filters';
import { stressedSurveyData } from '@/mocks/survey-mock-data';

export default function DashboardPage() {
	const handleSurveyClick = (surveyId: string) => {
		console.log('Survey clicked:', surveyId);
		// Navigate to survey detail page or handle click
	};

	const handleMenuClick = (surveyId: string) => {
		console.log('Menu clicked for survey:', surveyId);
		// Open menu dropdown or handle menu action
	};

	const handleSortChange = () => {
		console.log('Sort changed');
		// Handle sort change logic
	};

	const handleFiltersClick = () => {
		console.log('Filters clicked');
		// Handle filters click logic
	};

	return (
		<div className="box-border content-stretch flex flex-col items-start relative w-full">
			<SurveyFilters onSortChange={handleSortChange} onFiltersClick={handleFiltersClick} />
			<ListSurveys 
				surveys={stressedSurveyData}
				onSurveyClick={handleSurveyClick} 
				onMenuClick={handleMenuClick} 
			/>
		</div>
	);
}
