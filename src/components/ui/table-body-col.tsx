import clsx from 'clsx'

interface TdProps {
	className?: string
	children: React.ReactNode
}

export const Td = ({ className, children }: TdProps) => {
	return (
		<td className={clsx(
			'px-6 py-4',
			className
		)}>
			{children}
		</td>
	)
}
