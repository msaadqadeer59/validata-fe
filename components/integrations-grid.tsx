'use client';

import * as React from 'react';
import { IntegrationCard, IntegrationCardProps } from './integration-card';
import { cn } from '@/lib/utils';

interface IntegrationsGridProps {
	integrations: IntegrationCardProps[];
	className?: string;
}

export function IntegrationsGrid({ integrations, className }: IntegrationsGridProps) {
	// Group integrations into rows of 4
	const rows: IntegrationCardProps[][] = [];
	for (let i = 0; i < integrations.length; i += 4) {
		rows.push(integrations.slice(i, i + 4));
	}

	return (
		<div
			className={cn(
				'flex flex-col gap-5 items-start relative shrink-0 w-full',
				className
			)}
		>
			{rows.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className="flex gap-2 items-start relative shrink-0 w-full"
				>
					{row.map((integration) => (
						<IntegrationCard key={integration.id} {...integration} />
					))}
				</div>
			))}
		</div>
	);
}

