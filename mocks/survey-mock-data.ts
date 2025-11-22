import { SurveyData } from '@/components/list-surveys';

// Mock survey data for stressed version of dashboard (50 surveys)
export const stressedSurveyData: SurveyData[] = Array.from({ length: 50 }, (_, index) => {
	const id = `stressed-${index + 1}`;
	const statuses: Array<'draft' | 'published' | 'live' | 'schedule'> = ['draft', 'draft', 'draft', 'live', 'schedule'];
	const colors: Array<'blue' | 'orange' | 'gray' | 'green' | 'red'> = ['blue', 'blue', 'blue', 'green', 'orange'];
	const statusIndex = index % statuses.length;
	const status = statuses[statusIndex];
	const color = colors[statusIndex];
	
	// Most surveys are drafts (Untitled survey)
	const isDraft = status === 'draft';
	const title = isDraft ? 'Untitled survey' : `Survey ${index + 1}`;
	
	// Vary the subtitle
	const subtitles = [
		'Viewed a few seconds ago',
		'Viewed 1 minute ago',
		'Viewed 5 minutes ago',
		'Viewed 1 hour ago',
		'Viewed yesterday',
	];
	const subtitle = subtitles[index % subtitles.length];
	
	// Vary responses and views for non-draft surveys
	const responses = status === 'live' ? Math.floor(Math.random() * 100) : 0;
	const newResponses = status === 'live' && responses > 0 ? Math.floor(Math.random() * responses) : 0;
	const views = status === 'live' ? Math.floor(Math.random() * 50) : 0;
	
	return {
		id,
		title,
		subtitle,
		status,
		tags: [],
		responses,
		newResponses,
		views,
		hasResponses: responses > 0,
		color,
	};
});

