import { ResourceForm } from '@/app/dashboard/resources/components/form'

import { findAll } from '@/db/repository/tags'

export default async function DashboardResourcesAddPage() {
	const tags = await findAll()
	const selectOptions = tags.map((tag) => ({
		value: tag.id,
		label: tag.name,
	}))

	return <ResourceForm tagOptions={selectOptions} />
}
