'use client'

import { Edit, Remove } from '@/components/ui/icons'

interface Props {
	id: string
	url: string
	remove: (id: string) => void
}

export const Actions = ({ id, url, remove }: Props) => {
	return (
		<div className="flex gap-2">
			<a href={`${url}/${id}`} className="font-medium text-secondary">
				<Edit />
			</a>
			<button className="font-medium text-secondary" onClick={() => remove(id)}>
				<Remove />
			</button>
		</div>
	)
}
