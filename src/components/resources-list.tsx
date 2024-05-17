import { type DBLimit } from '@/types'

import { Card } from '@/components/ui/card'

import { findAll, findByTag } from '@/db/repository/resources'

interface Props {
	tagFilter?: string
	limit?: DBLimit
}

export const ResourcesList = async ({ tagFilter, limit }: Props) => {
	const resources = tagFilter != null ? await findByTag(tagFilter) : await findAll(limit)

	return (
		<section className="grid grid-cols-4 gap-4 items-stretch">
			{resources.map((resource) => (
				<Card key={resource.id} resource={resource} />
			))}
		</section>
	)
}
