import { DBLimit } from '@/types'

import { Actions } from '@/components/dashboard/actions'
import { Table } from '@/components/ui/table'
import { Tbody } from '@/components/ui/table-body'
import { Td } from '@/components/ui/table-body-col'
import { Thead } from '@/components/ui/table-head'
import { Th } from '@/components/ui/table-head-col'
import { Tr } from '@/components/ui/table-row'

import { findAll, searchByName } from '@/db/repository/tags'
import { removeTag } from '@/actions/tags'

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
