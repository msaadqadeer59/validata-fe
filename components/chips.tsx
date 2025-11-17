import Image from 'next/image';

interface ChipsProps {
	icon: string;
	label: string;
	onClick: () => void;
	backgroundColor?: string;
	isTransparent?: boolean;
}
function Chips({ icon, label, onClick, backgroundColor, isTransparent }: ChipsProps) {
	return (
		<div
			onClick={onClick}
			className={`flex items-center h-6 px-1.5 gap-1.5 ${isTransparent ? 'bg-transparent' : backgroundColor ? `bg-[${backgroundColor}]` : 'bg-[#F7F7F8]'
				} rounded-[7px]`}
		>
			<div className='flex items-center'>
				<Image src={icon} alt={label} width={16} height={16} />
			</div>
			<div className='flex items-center text-gray-600 font-sans font-medium text-xs leading-5 tracking-[-0.02em]'>
				<span>{label}</span>
			</div>
		</div>
	);
}

export default Chips;
