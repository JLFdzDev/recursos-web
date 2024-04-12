import { type Resource, type Tag as ITag } from '@prisma/client'

import { Tag } from './tag'

import clsx from 'clsx'

import noImage from '@/app/images/no-image.webp'

interface CardProps {
	resource: Resource & {
		tags: ITag[]
	}
}

export const Card = ({ resource }: CardProps) => {
	return (
		<article
			className={clsx(
				'text-light rounded-md overflow-hidden transition-all duration-300 h-full group',
				'hover:shadow-md hover:shadow-primary hover:-translate-y-2 hover:cursor-pointer',
			)}
		>
			<a href={resource.url} target="_blank" rel="noreferrer" className="h-full flex flex-col">
				<img
					src={resource.poster ? resource.poster : noImage.src}
					alt={`Poster for ${resource.name}`}
					className={clsx(
						'aspect-[16/9] w-full h-40 object-cover object-center transition-transform duration-300',
						'group-hover:scale-105',
					)}
				/>
				<div className="flex flex-col flex-1 gap-4 p-6 bg-darken/50">
					<h2 className="text-2xl font-bold">{resource.name}</h2>
					<p className="text-sm">{resource.description}</p>
					<ul className="flex flex-1 gap-2 flex-wrap items-end">
						{resource.tags.map((tag) => (
							<li key={tag.id}>
								<Tag className="text-xs text-darken hover:text-darken hover:bg-primary">{tag.name}</Tag>
							</li>
						))}
					</ul>
				</div>
			</a>
		</article>
	)
}
