import type { Metadata } from 'next'

import { Navbar } from '@/components/dashboard/navbar'

export const metadata: Metadata = {
	title: 'Dashboard | JLFdezDev',
	description: 'Dashboard',
}

interface DashboardLayoutProps {
	children: React.ReactNode
	params: {
		tag: string
		item: string
	}
}

export default function DashboardLayout({ children, params }: Readonly<DashboardLayoutProps>) {
	return (
		<div className="flex flex-col gap-6 w-full max-w-screen-xl min-h-screen mx-auto">
			<Navbar />
			<main className="flex-1 py-4 px-6 text-light">{children}</main>
		</div>
	)
}
