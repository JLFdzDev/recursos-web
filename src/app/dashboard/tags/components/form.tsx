import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { Button, ButtonLink } from '@/components/button'

import { addTag } from '@/lib/actions/tags'

export const TagForm = () => {
	return (
		<>
			<form action={addTag} className="grid grid-cols-1">
				<input
					type="text"
					name="name"
					className={`${INPUT_BASE_CLASSNAME} mb-2`}
					placeholder="Nombre (*)"
					required
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
