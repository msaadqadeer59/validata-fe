'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Topbar } from '@/components/topbar';
import { useEffect, useState } from 'react';

export function LayoutContent({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<'surveys' | 'integrations' | 'brand-kit'>('surveys');

	// Show topbar on dashboard, integrations, brand-kit pages, but not on survey editor
	const showTopbar = pathname === '/dashboard' || pathname === '/' || pathname === '/integrations' || pathname === '/brand-kit';

	// Determine active tab based on pathname
	useEffect(() => {
		if (pathname === '/dashboard' || pathname === '/') {
			setActiveTab('surveys');
		} else if (pathname === '/integrations') {
			setActiveTab('integrations');
		} else if (pathname === '/brand-kit') {
			setActiveTab('brand-kit');
		}
	}, [pathname]);

	const handleTabChange = (tab: 'surveys' | 'integrations' | 'brand-kit') => {
		setActiveTab(tab);
		// Navigate to the corresponding page
		if (tab === 'surveys') {
			router.push('/dashboard');
		} else if (tab === 'integrations') {
			router.push('/integrations');
		} else if (tab === 'brand-kit') {
			router.push('/brand-kit');
		}
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
		<main className='flex flex-col w-full p-[16px]'>
			{showTopbar && (
				<div className='shrink-0'>
					<Topbar
						activeTab={activeTab}
						onTabChange={handleTabChange}
						surveysCount={pathname === '/dashboard' ? 50 : 3}
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

