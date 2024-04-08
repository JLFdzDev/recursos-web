import { Resource } from '@/types'

import { Table } from '@/components/table'
import { Tbody } from '@/components/table-body'
import { Td } from '@/components/table-body-col'
import { Thead } from '@/components/table-head'
import { Th } from '@/components/table-head-col'
import { Tr } from '@/components/table-row'
import { Tag } from '@/components/tag'

import { getData } from '@/utils'

export const List = async () => {
	const resources = await getData<Resource[]>(`${process.env.API_URL}/resources`)

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
								src={resource.poster ? resource.poster : '#'}
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
							<a
								href={`/dashboard/resources/${resource.id}`}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit
							</a>
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	)
}