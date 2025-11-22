'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface IntegrationCardProps {
	id: string;
	name: string;
	description: string;
	icon?: string;
	iconSrc?: string;
	status?: 'connected' | 'available' | 'coming-soon';
	onConnect?: () => void;
	onDisconnect?: () => void;
	className?: string;
}

export function IntegrationCard({
	name,
	description,
	icon,
	iconSrc,
	status = 'available',
	onConnect,
	className,
}: IntegrationCardProps) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<div
			className={cn(
				'bg-white border border-[#edeef2] box-border flex flex-col gap-3 items-start overflow-clip p-3 relative rounded-xl shrink-0 w-[250px]',
				'group hover:border-[#dfe1e6] transition-colors',
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex items-center justify-between relative shrink-0 w-full">
				<div className="flex gap-2 items-center overflow-clip relative shrink-0">
					{iconSrc && (
						<div className="relative shrink-0 size-6">
							<Image
								src={iconSrc}
								alt={name}
								width={24}
								height={24}
								className="size-6 object-contain"
							/>
						</div>
					)}
					{icon && (
						<div className="relative shrink-0 size-6 flex items-center justify-center">
							<span className="text-lg">{icon}</span>
						</div>
					)}
				</div>
				<button
					onClick={onConnect}
					className={cn(
						'bg-gray-50 box-border flex gap-1 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-lg shrink-0 transition-opacity',
						isHovered ? 'opacity-100' : 'opacity-0'
					)}
				>
					<p className="text-xs leading-6 font-medium not-italic relative shrink-0 text-gray-950 text-nowrap tracking-[-0.24px] whitespace-pre">
						Connect
					</p>
				</button>
			</div>
			<div className="flex flex-col gap-1 items-start not-italic relative shrink-0 w-full">
				<p className="text-sm leading-5 font-medium relative shrink-0 text-gray-950 tracking-tight w-full">
					{name}
				</p>
				<p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 tracking-tight w-full">
					{description}
				</p>
			</div>
		</div>
	);
}

