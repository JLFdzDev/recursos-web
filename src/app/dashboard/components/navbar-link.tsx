'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

interface NavbarLinkProps {
	label: string
	href: string
}

export const NavbarLink = ({ label, href }: NavbarLinkProps) => {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			className={clsx(
				'p-4 transition-colors duration-300',
				'hover:text-primary hover:drop-shadow-sm',
				pathname === href && 'text-secondary drop-shadow-sm',
			)}
		>
			{label}
		</Link>
	)
}
