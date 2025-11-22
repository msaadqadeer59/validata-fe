'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PopularAppsSectionProps {
	children: React.ReactNode;
	className?: string;
}

export function PopularAppsSection({
	children,
	className,
}: PopularAppsSectionProps) {
	return (
		<div
			className={cn(
				'border border-[#edeef2] box-border flex flex-col gap-2 items-start p-2 relative rounded-2xl shrink-0 w-full',
				className
			)}
		>
			<div className="bg-gray-50 box-border flex gap-3 h-12 items-center p-3 relative rounded-[10px] shrink-0 w-full">
				<div className="bg-white border border-gray-200 box-border flex gap-2 items-center justify-center p-[3px] relative rounded-[5px] shrink-0 size-5">
					<Check className="size-3 text-gray-950" />
				</div>
				<p className="basis-0 font-medium grow h-6 leading-6 min-h-0 min-w-0 not-italic relative shrink-0 text-gray-950 text-base tracking-tight">
					Popular apps
				</p>
			</div>
			<div className="box-border flex flex-col gap-5 items-start p-3 relative shrink-0 w-full">
				{children}
			</div>
		</div>
	);
}

