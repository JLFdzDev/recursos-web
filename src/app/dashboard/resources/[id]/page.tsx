import { ResourceForm } from '@/app/dashboard/resources/components/form'

interface Props {
	params: {
		id: string
	}
}

export default async function DashboardResourcesEditPage({ params: { id } }: Props) {
	return <ResourceForm id={id} />
}
