import { type PropsWithChildren } from 'react'

import clsx from 'clsx'

interface Props extends PropsWithChildren {
	className?: string
}

export const Tag = ({ children, className }: Props) => {
	return (
		<span
			className={clsx(
				'bg-primary px-3 py-1 text-light font-semibold text-sm rounded-full transition-colors duration-500',
				'hover:bg-secondary hover:text-dark',
				className,
			)}
		>
			{children}
		</span>
	)
}
