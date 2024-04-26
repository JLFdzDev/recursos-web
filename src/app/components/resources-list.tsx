import { Card } from '@/components/card'

import { findAll, findByTag } from '@/db/repository/resources'
import { DBLimit } from '@/types'

interface ResourcesListProps {
	tagFilter?: string
	limit?: DBLimit
}

export const ResourcesList = async ({ tagFilter, limit }: ResourcesListProps) => {
	const resources = tagFilter != null ? await findByTag(tagFilter) : await findAll(limit)

	return (
		<section className="grid grid-cols-4 gap-4 items-stretch">
			{resources.map((resource) => (
				<Card key={resource.id} resource={resource} />
			))}
		</section>
	)
}
