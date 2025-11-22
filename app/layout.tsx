import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SurveyProvider } from '@/contexts/survey-context';
import { LayoutContent } from './layout-content';

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
				<LayoutContent >
					{children}
				</LayoutContent>
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
