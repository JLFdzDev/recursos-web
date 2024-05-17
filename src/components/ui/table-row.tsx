import clsx from 'clsx'

interface TrProps {
	className?: string
	children: React.ReactNode
}

export const Tr = ({ className, children }: TrProps) => {
	return (
		<tr className={clsx(
			'border-b border-darken/50',
			'last:border-b-0',
			className
		)}>
			{children}
		</tr>
	)
}
