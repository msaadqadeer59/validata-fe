import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Topbar } from '@/components/topbar';
import { SurveyProvider } from '@/contexts/survey-context';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Validat.ai',
	description: 'Validat.ai',
};

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SurveyProvider>
			<SidebarProvider defaultOpen={true}>
				<AppSidebar />
				<main className='flex flex-col w-full'>
					<div className='flex items-center gap-2 border-b bg-white px-6 py-4 h-[65px]'>
						<Topbar />
					</div>
					<div className='flex-1 overflow-auto'>{children}</div>
				</main>
			</SidebarProvider>
		</SurveyProvider>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} font-sans antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
