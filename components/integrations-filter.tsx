'use client';

import * as React from 'react';
import Image from 'next/image';
import { FilterIcon, ChevronSelectorIcon } from '@/assets';
import { cn } from '@/lib/utils';

interface IntegrationsFilterProps {
	value?: string;
	onChange?: (value: string) => void;
	className?: string;
}

export function IntegrationsFilter({
	value = 'All integrations',
	onChange,
	className,
}: IntegrationsFilterProps) {
	return (
		<div className={cn('flex flex-col gap-2 items-start relative shrink-0', className)}>
			<div className="bg-white border border-gray-200 box-border flex gap-2 items-center px-2 py-1 relative rounded-[10px] shrink-0 w-full">
				<div className="overflow-clip relative shrink-0 size-4">
					<Image
						src={FilterIcon}
						alt="Filter"
						width={16}
						height={16}
						className="size-4"
					/>
				</div>
				<p className="text-sm leading-6 font-medium not-italic relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
					{value}
				</p>
				<div className="overflow-clip relative shrink-0 size-4">
					<Image
						src={ChevronSelectorIcon}
						alt="Chevron"
						width={16}
						height={16}
						className="size-4"
					/>
				</div>
			</div>
		</div>
	);
}
