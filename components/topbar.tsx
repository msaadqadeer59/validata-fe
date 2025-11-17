'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Topbar() {
	return (
		<div className='flex items-center gap-4'>
			{/* Add Page Button */}
			<Button
				variant='outline'
				className='flex items-center gap-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50'
			>
				<Plus className='w-4 h-4' />
				<span className='text-sm font-medium'>Add Page</span>
			</Button>
		</div>
	);
}

