import type { Metadata } from 'next'

import { Fira_Mono as Font } from 'next/font/google'
import '@/app/styles/globals.css'

const font = Font({
	weight: ['400', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Recusos web | JLFdezDev',
	description:
		'Recursos web para desarrolladores y diseñadores web. Artículos, tutoriales, herramientas, plantillas, snippets, y más.',
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="es">
			<body className={`${font.className} bg-dark`}>{children}</body>
		</html>
	)
}
