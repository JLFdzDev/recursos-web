import { Tag } from '@/components/tag'
import Link from 'next/link'

import { getTags } from '@/data/tags'
import clsx from 'clsx'

interface HeaderProps {
	currentFilter?: string | null
}

export const Header = async ({ currentFilter }: HeaderProps) => {
	const tags = await getTags()

	return (
		<header className="mb-10">
			<nav>
				<ul className="flex items-center justify-center gap-2">
					{tags.map(tag => {
						const url = new URLSearchParams()
						url.set('tag', tag.name)

						const link = currentFilter === tag.name ? '/' : `/?${url.toString()}`

						return (
							<li key={tag.id}>
								<Link href={link}>
									<Tag name={tag.name} className={clsx(
										currentFilter === tag.name && 'bg-secondary text-darken'
									)} />
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
