import { Actions } from '@/app/dashboard/components/actions'
import { Table } from '@/components/table'
import { Tbody } from '@/components/table-body'
import { Td } from '@/components/table-body-col'
import { Thead } from '@/components/table-head'
import { Th } from '@/components/table-head-col'
import { Tr } from '@/components/table-row'

import { findAll } from '@/db/repository/tags'
import { removeTag } from '@/lib/actions/tags'

export const List = async () => {
	const tags = await findAll()

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