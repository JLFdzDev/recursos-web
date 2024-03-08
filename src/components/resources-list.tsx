import { Card } from '@/components/card'

import { getResources, getResourcesByTagName } from '@/data/resources'

interface ResourcesListProps {
	tagFilter?: string
}

export const ResourcesList = async ({ tagFilter }: ResourcesListProps) => {
	const resources = tagFilter ? await getResourcesByTagName(tagFilter) : await getResources()

	return (
		<section className="grid grid-cols-4 gap-4 items-stretch">
			{resources.map(resource => (
				<Card key={resource.id} resource={resource} />
			))}
		</section>
	)
}
