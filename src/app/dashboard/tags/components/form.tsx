import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { Button, ButtonLink } from '@/components/button'

import { addTag, updateTag } from '@/lib/actions/tags'
import { findById } from '@/db/repository/tags'

interface TagFormProps {
	id?: string
}

export const TagForm = async ({ id }: TagFormProps) => {
	const tag = id ? await findById(id) : null
	const action = id ? await updateTag : await addTag

	return (
		<>
			<form action={action} className="grid grid-cols-1">
				{id != null && <input type="hidden" name="id" value={id} />}
				<input
					type="text"
					name="name"
					className={`${INPUT_BASE_CLASSNAME} mb-2`}
					placeholder="Nombre (*)"
					required
					defaultValue={tag?.name}
				/>
				<div className="col-span-2 flex justify-center gap-4">
					<ButtonLink href="/dashboard/tags">Atrás</ButtonLink>
					<Button type="submit" variant="secondary">
						Guardar
					</Button>
				</div>
			</form>
		</>
	)
}
