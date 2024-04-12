'use client'

import { removeResource } from '@/lib/actions/resources'

interface ActionsProps {
	id: string
	url: string
}

export const Actions = ({ id, url }: ActionsProps) => {
	return (
		<div className="flex gap-2">
			<a href={`${url}/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
				Editar
			</a>
			<button
				className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				onClick={() => removeResource(id)}
			>
				Eliminar
			</button>
		</div>
	)
}
