import clsx from 'clsx'

interface ThProps {
	className?: string
	children: React.ReactNode
}

export const Th = ({ className, children }: ThProps) => {
	return (
		<th scope="col" className={clsx(
			'px-6 py-3',
			className
		)}>
			{children}
		</th>
	)
}
