import { DBLimit } from '@/types'

import { Actions } from '@/components/dashboard/actions'
import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/ui/table'

import { removeTag } from '@/actions/tags'
import { findAll, searchByName } from '@/db/repository/tags'

interface ListProps {
	limit?: DBLimit
	q?: string
}

export const List = async ({ limit, q }: ListProps) => {
	const tags = q != null ? await searchByName({ limit, q }) : await findAll(limit)

	return (
		<Table>
			<Thead>
				<Th className="w-5/6">Name</Th>
				<Th>Acciones</Th>
			</Thead>
			<Tbody>
				{tags.map((tag) => (
					<Tr key={tag.id}>
						<Td>{tag.name}</Td>
						<Td>
							<Actions url={`/dashboard/tags`} id={tag.id} remove={removeTag} />
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	)
}
