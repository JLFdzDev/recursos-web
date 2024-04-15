'use client'

interface ActionsProps {
	id: string
	url: string
	remove: (id: string) => void
}

export const Actions = ({ id, url, remove }: ActionsProps) => {
	return (
		<div className="flex gap-2">
			<a href={`${url}/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
				Editar
			</a>
			<button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => remove(id)}>
				Eliminar
			</button>
		</div>
	)
}
