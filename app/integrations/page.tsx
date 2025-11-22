'use client';

import * as React from 'react';
import { IntegrationsFilter } from '@/components/integrations-filter';
import { SearchBar } from '@/components/search-bar';
import { PopularAppsSection } from '@/components/popular-apps-section';
import { IntegrationsGrid } from '@/components/integrations-grid';
import { mockIntegrations } from '@/mocks/integrations-mock-data';

export default function IntegrationsPage() {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<div className="bg-white box-border flex flex-col gap-4 items-start p-4 relative size-full">
			<div className="flex items-start justify-between relative shrink-0 w-full">
				<IntegrationsFilter />
				<SearchBar
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					keyboardShortcut="⌘K"
				/>
			</div>
			<PopularAppsSection>
				<IntegrationsGrid integrations={mockIntegrations} />
			</PopularAppsSection>
		</div>
	);
}

