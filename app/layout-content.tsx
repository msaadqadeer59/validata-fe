'use client';

import { usePathname } from 'next/navigation';
import { Topbar } from '@/components/topbar';
import { useState } from 'react';

export function LayoutContent({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState<'surveys' | 'integrations' | 'brand-kit'>('surveys');

	// Show topbar on dashboard and other main pages, but not on survey editor
	const showTopbar = pathname === '/dashboard' || pathname === '/';

	const handleTabChange = (tab: 'surveys' | 'integrations' | 'brand-kit') => {
		setActiveTab(tab);
		// You can add navigation logic here if needed
	};

	const handleShareFeedback = () => {
		console.log('Share feedback clicked');
		// Add your feedback handler logic here
	};

	const handleInvite = () => {
		console.log('Invite clicked');
		// Add your invite handler logic here
	};

	return (
		<main className='flex flex-col w-full'>
			{showTopbar && (
				<div className='shrink-0'>
					<Topbar
						activeTab={activeTab}
						onTabChange={handleTabChange}
						surveysCount={3}
						onShareFeedbackClick={handleShareFeedback}
						onInviteClick={handleInvite}
						avatars={[
							{ src: '', name: 'Maher Jilani' },
							{ src: '', name: 'Kamil Mitek' },
						]}
					/>
				</div>
			)}
			<div className='flex-1 overflow-auto'>{children}</div>
		</main>
	);
}

