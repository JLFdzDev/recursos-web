import clsx from 'clsx'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const baseClassName = 'py-2.5 px-4 rounded-lg transition-colors duration-300'
const variantClassName = {
	primary: 'bg-primary text-light hover:bg-secondary hover:text-dark',
	secondary: 'bg-secondary text-dark hover:bg-primary hover:text-light'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof variantClassName
}

export const Button = (props: ButtonProps) => {
	return (
		<button {...props} className={clsx(
			baseClassName,
			variantClassName[props.variant ?? 'primary'],
			props.className
		)}>
			{props.children}
		</button>
	)
}

interface ButtonLinkProps extends ButtonProps {
	href: string
}

export const ButtonLink = (props: ButtonLinkProps) => {
	return (
		<Link href={props.href} className={clsx(
			baseClassName,
			variantClassName[props.variant ?? 'primary'],
			props.className
		)}>
			{props.children}
		</Link>
	)
}
