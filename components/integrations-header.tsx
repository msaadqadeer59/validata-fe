'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface IntegrationsHeaderProps {
	title?: string;
	description?: string;
	className?: string;
}

export function IntegrationsHeader({
	title = 'Integrations',
	description = 'Connect your favorite tools and services to streamline your workflow',
	className,
}: IntegrationsHeaderProps) {
	return (
		<div
			className={cn(
				'box-border content-stretch flex flex-col gap-1 items-start pb-4 pt-0 px-4 relative shrink-0 w-full',
				className
			)}
		>
			<h1 className="text-2xl leading-8 font-medium relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
				{title}
			</h1>
			<p className="text-sm leading-5 font-normal relative shrink-0 text-gray-600 tracking-tight">
				{description}
			</p>
		</div>
	);
}

