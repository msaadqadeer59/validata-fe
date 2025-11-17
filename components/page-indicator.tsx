import { PageIndicatorIcon } from '@/assets';
import Image from 'next/image';

interface PageIndicatorProps {
	page: number;
}
function PageIndicator({ page }: PageIndicatorProps) {
	return (
		<div className='flex flex-row items-center gap-2 bg-[#06051008] rounded-[12px] px-4 py-2'>
			<Image src={PageIndicatorIcon} alt='Page Indicator' />
			<p> Page {page}</p>
		</div>
	);
}

export default PageIndicator;
