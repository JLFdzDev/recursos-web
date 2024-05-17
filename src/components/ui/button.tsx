import Link from 'next/link'

import clsx from 'clsx'

import { BUTTON_BASE, BUTTON_SIZE, BUTTON_VARIANT } from '@/const/theme'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof BUTTON_VARIANT
	size?: keyof typeof BUTTON_SIZE
}

function getClassNames({ className, variant, size }: ButtonProps) {
	return clsx(BUTTON_BASE, BUTTON_VARIANT[variant ?? 'primary'], BUTTON_SIZE[size ?? 'md'], className)
}

export const Button = (props: ButtonProps) => {
	return (
		<button {...props} className={getClassNames(props)}>
			{props.children}
		</button>
	)
}

interface ButtonLinkProps extends ButtonProps {
	href: string
}

export const ButtonLink = (props: ButtonLinkProps) => {
	return (
		<Link href={props.href} className={getClassNames(props)}>
			{props.children}
		</Link>
	)
}
