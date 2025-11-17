// TLDR: The component has not been divided into reusable components because it was the last priority from task perspective and most parts are generated using AI only for this component
import { ValidataLogo } from '@/assets';
import { Paperclip, RefreshCw, ChevronDown, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
function ValidataChat() {
	return (
		<div className='bg-white rounded-[24px] border-2 border-gray-100 flex flex-col h-[90vh] overflow-hidden'>
			{/* Header Section */}
			<div className='flex items-center justify-between p-4'>
				<div className='flex items-center gap-2'>
					<div className='border-2 border-gray-200 rounded-md p-2'>
						<Image src={ValidataLogo} alt='Validata Logo' width={20} height={20} />
					</div>
					<span className='font-semibold text-base text-gray-900 text-[18px]'>Validata Chat</span>
				</div>
				{/* <LayoutGrid className='w-4 h-4 text-gray-400 cursor-pointer' /> */}
			</div>

			{/* Central Content Area */}
			<div className='flex-1 flex flex-col items-center justify-center relative px-6 py-12 overflow-hidden'>
				{/* Dot Grid Background Pattern */}
				<div className='absolute inset-0 opacity-5'>
					<div
						className='h-full w-full'
						style={{
							backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
							backgroundSize: '20px 20px',
						}}
					/>
				</div>

				{/* Large Icon */}
				<div className='relative z-10 bg-white rounded-4xl border-2 border-gray-300 p-8 mb-6'>
					<Image src={ValidataLogo} alt='Validata Logo' width={64} height={64} />
				</div>

				{/* Text Content */}
				<div className='relative z-10 text-center space-y-2'>
					<h2 className='text-2xl font-bold text-gray-900'>What would you like to validate today?</h2>
					<p className='text-base text-gray-600 max-w-md'>
						Tell us your survey&apos;s purpose, audience, and question types.
					</p>
				</div>
			</div>

			{/* Bottom Input Bar */}
			<div className='border-2 rounded-xl m-3 bg-white p-4 space-y-3'>
				{/* Input Field */}
				<Input placeholder='Type a new message...' className='w-full border-none bg-white placeholder:text-gray-400' />

				{/* Controls Row */}
				<div className='flex items-center gap-2'>
					{/* Attachment Icon */}
					<Button variant='ghost' size='icon' className='text-gray-600 hover:text-gray-900'>
						<Paperclip className='w-4 h-4' />
					</Button>

					{/* Grok 3 Dropdown */}
					<Button variant='outline' className='flex items-center gap-2 border-gray-300 bg-white text-gray-900 h-8 px-3'>
						<RefreshCw className='w-3.5 h-3.5' />
						<span className='text-sm'>Grok 3</span>
						<ChevronDown className='w-3.5 h-3.5' />
					</Button>

					{/* Thinking Button */}
					<Button
						variant='outline'
						className='flex items-center gap-2 border-gray-300 bg-white text-gray-900 h-8 px-3 ml-auto'
					>
						<Zap className='w-3.5 h-3.5' />
						<span className='text-sm'>Thinking</span>
					</Button>

					{/* Send Button */}
					<Button
						variant='outline'
						disabled
						className='flex items-center gap-2 border-gray-300 bg-white text-gray-400 h-8 px-3 cursor-not-allowed'
					>
						<span className='text-sm'>Send</span>
						<ArrowRight className='w-3.5 h-3.5' />
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ValidataChat;
