'use client';

import * as React from 'react';
import { BrandKitSidebar, BrandKitSection } from '@/components/brand-kit-sidebar';
import { BrandKitContent } from '@/components/brand-kit-content';

export default function BrandKitPage() {
	const [activeSection, setActiveSection] = React.useState<BrandKitSection>('add-logo');

	return (
		<div className="bg-white box-border flex flex-col gap-4 items-start p-4 relative size-full">
			<div className="basis-0 border border-gray-200 grow min-h-0 min-w-0 relative rounded-2xl shrink-0 w-full">
				<div className="flex items-start overflow-clip relative rounded-[inherit] size-full">
					<BrandKitSidebar
						activeSection={activeSection}
						onSectionChange={setActiveSection}
					/>
					<BrandKitContent section={activeSection} />
				</div>
			</div>
		</div>
	);
}

