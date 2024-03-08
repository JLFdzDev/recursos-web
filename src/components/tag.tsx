import { type Prisma } from '@prisma/client'
import clsx from 'clsx'

interface TagProps extends Pick<Prisma.TagCreateInput, 'name'> {
	className?: string
}

export const Tag = ({ className, name }: TagProps) => {
	return (
		<span className={clsx(
			'bg-primary px-3 py-1 text-light font-semibold text-sm rounded-full transition-colors duration-500',
			'hover:bg-secondary hover:text-dark',
			className
		)}>
			{name}
		</span>
	)
}
