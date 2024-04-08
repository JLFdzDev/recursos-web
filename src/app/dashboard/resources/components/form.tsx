'use client'

import { SelectOption } from '@/types'

import { INPUT_BASE_CLASSNAME, REACT_SELECT_BASE_CLASSNAME } from '@/const/theme'

import { Button, ButtonLink } from '@/components/button'
import Select from 'react-select'

interface ResourceFormProps {
	tagOptions: SelectOption[]
}

export const ResourceForm = ({ tagOptions }: ResourceFormProps) => {
	return (
		<>
			<form className="grid grid-cols-2 gap-2" onSubmit={() => {}}>
				<input type="text" className={INPUT_BASE_CLASSNAME} placeholder="Nombre" />
				<input type="text" className={INPUT_BASE_CLASSNAME} placeholder="URL" />
				<input type="text" className={INPUT_BASE_CLASSNAME} placeholder="Poster" />
				<Select
					options={tagOptions}
					classNames={REACT_SELECT_BASE_CLASSNAME}
					placeholder="Selecciona uno o varios tags..."
					unstyled
					isMulti
					instanceId="tags"
				/>
				<textarea className={`${INPUT_BASE_CLASSNAME} col-span-2 h-32`} placeholder="Descripción"></textarea>
				<div className="col-span-2 flex justify-center gap-4">
					<ButtonLink href="/dashboard/resources">Atrás</ButtonLink>
					<Button type="submit" variant="secondary">
						Guardar
					</Button>
				</div>
			</form>
		</>
	)
}
