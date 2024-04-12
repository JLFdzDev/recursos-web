import { Card } from '@/components/card'
import { findAll, findByTag } from '@/db/repository/resources'

interface ResourcesListProps {
	tagFilter?: string
}

export const ResourcesList = async ({ tagFilter }: ResourcesListProps) => {
	let dataUrl = `${process.env.API_URL}/resources`

	if (tagFilter) {
		dataUrl += `?tag=${tagFilter}`
	}

	const resources = tagFilter != null ? await findByTag(tagFilter) : await findAll()

	return (
		<section className="grid grid-cols-4 gap-4 items-stretch">
			{resources.map((resource) => (
				<Card key={resource.id} resource={resource} />
			))}
		</section>
	)
}
