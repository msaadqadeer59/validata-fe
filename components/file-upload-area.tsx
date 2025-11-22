'use client';

import * as React from 'react';
import Image from 'next/image';
import { EmptyNotificationIcon } from '@/assets';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface FileUploadAreaProps {
	onFileSelect?: (file: File) => void;
	onDragOver?: (e: React.DragEvent) => void;
	onDrop?: (e: React.DragEvent) => void;
	className?: string;
}

export function FileUploadArea({
	onFileSelect,
	onDragOver,
	onDrop,
	className,
}: FileUploadAreaProps) {
	const fileInputRef = React.useRef<HTMLInputElement>(null);

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			onFileSelect?.(file);
		}
	};

	const handleChooseFile = () => {
		fileInputRef.current?.click();
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		onDragOver?.(e);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		const file = e.dataTransfer.files?.[0];
		if (file) {
			onFileSelect?.(file);
		}
		onDrop?.(e);
	};

	return (
		<div
			className={cn(
				'border border-gray-300 border-dashed box-border flex flex-col gap-4 items-center p-8 relative rounded-2xl shrink-0 w-full',
				className
			)}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
			<Image
				src={EmptyNotificationIcon}
				alt="Empty file upload"
				width={120}
				height={90}
				className="h-[90px] w-[120px]"
			/>
			<div className="flex flex-col gap-2 items-center leading-none not-italic relative shrink-0 text-nowrap">
				<p className="text-base leading-6 font-medium relative shrink-0 text-gray-950 tracking-tight whitespace-pre">
					Choose file <span className="not-italic text-gray-600">or drag it here</span>
				</p>
				<div className="text-xs leading-5 font-normal relative shrink-0 text-gray-600 text-center tracking-tight whitespace-pre">
					<p className="mb-0">Supported formats: PNG, JPG, SVG (max 2MB)</p>
					<p>The uploaded logo must be at least 200 × 80 pixels</p>
				</div>
			</div>
			<div className="bg-white border border-gray-200 relative rounded-[10px] shrink-0">
				<button
					onClick={handleChooseFile}
					className="box-border flex gap-2 items-center justify-center overflow-clip px-2 py-1 relative rounded-[inherit]"
				>
					<p className="text-sm leading-6 font-medium not-italic relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
						Choose file
					</p>
				</button>
			</div>
			<input
				ref={fileInputRef}
				type="file"
				accept="image/png,image/jpeg,image/jpg,image/svg+xml"
				onChange={handleFileInputChange}
				className="hidden"
			/>
		</div>
	);
}

