'use client'

import { type HTMLAttributeAnchorTarget } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import clsx from 'clsx'

interface Props {
	label: string
	href: string
	target?: HTMLAttributeAnchorTarget
}

export const NavbarLink = ({ label, href, target }: Props) => {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			className={clsx(
				'p-4 transition-colors duration-300',
				'hover:text-primary hover:drop-shadow-sm',
				pathname === href && 'text-secondary drop-shadow-sm',
			)}
			target={target}
		>
			{label}
		</Link>
	)
}
