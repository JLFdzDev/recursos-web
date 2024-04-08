import { Tag } from '@/types'

import { ResourceForm } from '@/app/dashboard/resources/components/form'

import { getData } from '@/utils'

export default async function DashboardResourcesAddPage() {
	console.log(`${process.env.API_URL}/tags`)

	const tags = await getData<Tag[]>(`${process.env.API_URL}/tags`, { cache: 'no-store' })
	const selectOptions = tags.map((tag) => ({
		value: tag.id,
		label: tag.name,
	}))

	return <ResourceForm tagOptions={selectOptions} />
}
