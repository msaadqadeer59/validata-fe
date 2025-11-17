import { Plus } from 'lucide-react';

interface AddItemButtonProps {
	onClick: () => void;
	width?: string;
	height?: string;
	className?: string;
	text?: string;
}

function AddItemButton({ onClick, width, height, className, text }: AddItemButtonProps) {
	return (
		<div
			onClick={onClick}
			className={`
        group
        ${width ?? 'w-52'} ${height ?? 'h-75'} ${className ?? ''}
        bg-white rounded-2xl border 
        flex items-center justify-center relative cursor-pointer
        transition-all duration-200 ease-in-out
      `}
		>
			{/* Centered Plus Icon */}
			<div className='absolute inset-0 flex items-center justify-center'>
				<Plus
					className='w-7 h-7 text-gray-400 border border-gray-200 rounded-full p-1
          transition-all duration-200 ease-in-out
          group-hover:text-black group-hover:shadow-lg'
					strokeWidth={2}
				/>
			</div>

			{/* Bottom Text */}
			<p
				className='absolute bottom-10 text-sm text-gray-500 font-medium text-center w-full px-10
        transition-all duration-200 ease-in-out group-hover:text-black'
			>
				{text}
			</p>
		</div>
	);
}

export default AddItemButton;
