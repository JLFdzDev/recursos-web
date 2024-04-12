'use client'

import { ResourceInputs, SelectOption } from '@/types'

import { INPUT_BASE_CLASSNAME, REACT_SELECT_BASE_CLASSNAME } from '@/const/theme'

import { Button, ButtonLink } from '@/components/button'
import Select from 'react-select'

import { addResource } from '@/lib/actions/resources'

interface ResourceFormProps {
	tagOptions: SelectOption[]
}

export const ResourceForm = ({ tagOptions }: ResourceFormProps) => {
	return (
		<>
			<form action={addResource} className="grid grid-cols-2 gap-2">
				<input type="text" name="name" className={INPUT_BASE_CLASSNAME} placeholder="Nombre (*)" required />
				<input type="text" name="url" className={INPUT_BASE_CLASSNAME} placeholder="URL (*)" required />
				<input type="text" name="poster" className={INPUT_BASE_CLASSNAME} placeholder="Poster" />
				<Select
					name="tags"
					options={tagOptions}
					classNames={REACT_SELECT_BASE_CLASSNAME}
					placeholder="Selecciona uno o varios tags..."
					unstyled
					closeMenuOnSelect={false}
					hideSelectedOptions={false}
					isMulti
					instanceId="tags"
				/>
				<textarea
					name="description"
					className={`${INPUT_BASE_CLASSNAME} col-span-2 h-32`}
					placeholder="Descripción"
				></textarea>
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
