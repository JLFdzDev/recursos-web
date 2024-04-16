import { TagForm } from '@/app/dashboard/tags/components/form'

interface Props {
	params: {
		id: string
	}
}

export default async function DashboardTagsEditPage({ params: { id } }: Props) {
	console.log(id)
	return <TagForm id={id} />
}
