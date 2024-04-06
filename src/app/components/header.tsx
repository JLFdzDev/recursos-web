import { Tag as TagT } from '@/types'

import { Tag } from '@/components/tag'
import Link from 'next/link'

import { getData } from '@/utils'
import clsx from 'clsx'

interface HeaderProps {
	currentFilter?: string | null
}

export const Header = async ({ currentFilter }: HeaderProps) => {
	const tags = await getData<TagT[]>(`${process.env.API_URL}/tags`, { cache: 'no-store' })

	return (
		<header className="mb-10">
			<nav>
				<ul className="flex items-center justify-center gap-2">
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
