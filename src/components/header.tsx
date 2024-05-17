import { Tag } from '@/components/ui/tag'
import Link from 'next/link'

import clsx from 'clsx'

import { findAll } from '@/db/repository/tags'

interface Props {
	currentFilter?: string | null
}

export const Header = async ({ currentFilter }: Props) => {
	const tags = await findAll()

	return (
		<header className="mb-10">
			<nav>
				<ul className="flex items-center justify-center gap-2 flex-wrap">
					{tags.map((tag) => {
						const url = new URLSearchParams()
						url.set('tag', tag.name)

						const link = currentFilter === tag.name ? '/' : `/?${url.toString()}`

						return (
							<li key={tag.id}>
								<Link href={link}>
									<Tag className={clsx(currentFilter === tag.name && 'bg-secondary text-darken')}>
										{tag.name}
									</Tag>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
