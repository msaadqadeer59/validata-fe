'use client';

import * as React from 'react';
import { FileUploadArea } from './file-upload-area';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface BrandKitContentProps {
	section: 'add-logo' | 'define-context' | 'select-template';
	className?: string;
}

export function BrandKitContent({ section, className }: BrandKitContentProps) {
	const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

	const handleFileSelect = (file: File) => {
		setSelectedFile(file);
	};

	const getSectionTitle = () => {
		switch (section) {
			case 'add-logo':
				return 'Add logo';
			case 'define-context':
				return 'Define your context';
			case 'select-template':
				return 'Select template';
			default:
				return '';
		}
	};

	const renderContent = () => {
		switch (section) {
			case 'add-logo':
				return (
					<>
						<div className="box-border flex flex-col gap-5 items-start justify-center p-5 relative shrink-0 w-full">
							<p className="text-base leading-6 font-medium not-italic relative shrink-0 text-gray-950 tracking-tight w-full">
								{getSectionTitle()}
							</p>
							<FileUploadArea onFileSelect={handleFileSelect} />
						</div>
						<div className="border-t border-gray-200 box-border flex flex-col gap-5 items-start justify-center p-5 relative shrink-0 w-full">
							<div className="flex gap-2 items-start justify-end relative shrink-0 w-full">
								<div className="flex gap-2 items-center relative shrink-0">
									<div
										className={cn(
											'bg-gray-950 box-border flex gap-2 items-center justify-center overflow-clip px-2 py-1 relative rounded-[10px] shrink-0',
											!selectedFile && 'opacity-30'
										)}
									>
										<button
											disabled={!selectedFile}
											className="text-sm leading-6 font-medium not-italic relative shrink-0 text-white text-nowrap tracking-tight whitespace-pre"
										>
											Save logo
										</button>
									</div>
								</div>
							</div>
						</div>
					</>
				);
			case 'define-context':
				return (
					<div className="box-border flex flex-col gap-5 items-start justify-center p-5 relative shrink-0 w-full">
						<p className="text-base leading-6 font-medium not-italic relative shrink-0 text-gray-950 tracking-tight w-full">
							{getSectionTitle()}
						</p>
						{/* Placeholder for define context content */}
						<p className="text-sm leading-5 font-normal text-gray-600 tracking-tight">
							Define your context content will go here
						</p>
					</div>
				);
			case 'select-template':
				return (
					<div className="box-border flex flex-col gap-5 items-start justify-center p-5 relative shrink-0 w-full">
						<p className="text-base leading-6 font-medium not-italic relative shrink-0 text-gray-950 tracking-tight w-full">
							{getSectionTitle()}
						</p>
						{/* Placeholder for select template content */}
						<p className="text-sm leading-5 font-normal text-gray-600 tracking-tight">
							Select template content will go here
						</p>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div
			className={cn(
				'basis-0 flex flex-col grow h-full items-start min-h-0 min-w-0 overflow-clip relative shrink-0',
				className
			)}
		>
			<div className="basis-0 flex flex-col grow items-start min-h-0 min-w-0 relative shrink-0 w-full">
				{renderContent()}
			</div>
		</div>
	);
}

