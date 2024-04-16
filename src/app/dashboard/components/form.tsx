import { PropsWithChildren } from 'react'

import { Button, ButtonLink } from '@/components/button'

interface FormProps extends PropsWithChildren {
	id?: string
	backRoute: string
	addAction?: (formData: FormData) => void
	updateAction?: (formData: FormData) => void
}

export const Form = async ({ backRoute, children, id, addAction, updateAction }: FormProps) => {
	return (
		<form action={id != null ? await updateAction : await addAction} className="grid grid-cols-1">
			{id != null && <input type="hidden" name="id" value={id} />}
			{children}
			<div className="col-span-2 flex justify-center gap-4">
				<ButtonLink href={backRoute}>Atrás</ButtonLink>
				<Button type="submit" variant="secondary">
					Guardar
				</Button>
			</div>
		</form>
	)
}
