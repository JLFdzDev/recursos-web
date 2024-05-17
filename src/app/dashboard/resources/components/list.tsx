import { DBLimit } from '@/types'

import { Actions } from '@/components/dashboard/actions'
import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/ui/table'
import { Tag } from '@/components/ui/tag'

import { removeResource } from '@/actions/resources'
import { findAll, searchByNameOrUrl } from '@/db/repository/resources'

import noImage from '@/app/assets/images/no-image.webp'

interface ListProps {
	limit?: DBLimit
	q?: string
}

export const List = async ({ limit, q }: ListProps) => {
	const resources = q != null ? await searchByNameOrUrl({ limit, q }) : await findAll(limit)

	return (
		<Table>
			<Thead>
				<Th>Poster</Th>
				<Th>Name</Th>
				<Th>URL</Th>
				<Th>Tags</Th>
				<Th>Acciones</Th>
			</Thead>
			<Tbody>
				{resources.map((resource) => (
					<Tr key={resource.id}>
						<Td>
							<img
								src={resource.poster ? resource.poster : noImage.src}
								alt={`Poster del recurso ${resource.name}`}
								className="aspect-square w-full h-16 object-cover object-center"
							/>
						</Td>
						<Td>{resource.name}</Td>
						<Td>
							<a href={resource.url} target="_blank" rel="noreferrer noopener">
								{resource.url}
							</a>
						</Td>
						<Td>
							<div className="flex flex-wrap gap-2">
								{resource.tags.map((tag) => (
									<Tag key={tag.id} className="text-xs">
										{tag.name}
									</Tag>
								))}
							</div>
						</Td>
						<Td>
							<Actions url={`/dashboard/resources`} id={resource.id} remove={removeResource} />
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	)
}
