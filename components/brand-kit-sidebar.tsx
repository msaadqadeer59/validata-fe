'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type BrandKitSection = 'add-logo' | 'define-context' | 'select-template';

interface BrandKitSidebarProps {
	activeSection: BrandKitSection;
	onSectionChange: (section: BrandKitSection) => void;
	className?: string;
}

interface SidebarItemProps {
	id: BrandKitSection;
	label: string;
	active: boolean;
	onClick: () => void;
}

function SidebarItem({ id, label, active, onClick }: SidebarItemProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'box-border flex gap-2 items-center overflow-clip px-2 py-1.5 relative rounded-[10px] shrink-0 w-full',
				active ? 'bg-gray-50' : 'bg-white hover:bg-gray-50 transition-colors'
			)}
		>
			<div className="basis-0 flex gap-2 grow items-center justify-center min-h-0 min-w-0 relative shrink-0">
				<p
					className={cn(
						'basis-0 font-medium grow leading-5 min-h-0 min-w-0 not-italic relative shrink-0 text-sm tracking-tight',
						active ? 'text-gray-950' : 'text-gray-700'
					)}
				>
					{label}
				</p>
			</div>
		</button>
	);
}

export function BrandKitSidebar({
	activeSection,
	onSectionChange,
	className,
}: BrandKitSidebarProps) {
	const sections: Array<{ id: BrandKitSection; label: string }> = [
		{ id: 'add-logo', label: 'Add logo' },
		{ id: 'define-context', label: 'Define your context' },
		{ id: 'select-template', label: 'Select template' },
	];

	return (
		<div
			className={cn(
				'border-r border-gray-200 box-border flex flex-col gap-2 h-full items-start p-5 relative shrink-0 w-[300px]',
				className
			)}
		>
			{sections.map((section) => (
				<SidebarItem
					key={section.id}
					id={section.id}
					label={section.label}
					active={activeSection === section.id}
					onClick={() => onSectionChange(section.id)}
				/>
			))}
		</div>
	);
}

