'use client'

import { ResourceInputs, SelectOption } from '@/types'

import { INPUT_BASE_CLASSNAME, REACT_SELECT_BASE_CLASSNAME } from '@/const/theme'

import { Button, ButtonLink } from '@/components/button'
import Select from 'react-select'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface ResourceFormProps {
	tagOptions: SelectOption[]
}

export const ResourceForm = ({ tagOptions }: ResourceFormProps) => {
	const { control, register, handleSubmit } = useForm<ResourceInputs>()

	const onSubmit: SubmitHandler<ResourceInputs> = async (data) => {
		const res = await fetch('http://localhost:3000/api/resources', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		const json = await res.json()

		console.log({ json })
	}

	return (
		<>
			<form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit(onSubmit)}>
				<input type="text" {...register('name')} className={INPUT_BASE_CLASSNAME} placeholder="Nombre" />
				<input type="text" {...register('url')} className={INPUT_BASE_CLASSNAME} placeholder="URL" />
				<input type="text" {...register('poster')} className={INPUT_BASE_CLASSNAME} placeholder="Poster" />
				<Controller
					control={control}
					name="tags"
					defaultValue={[]}
					render={({ field }) => (
						<Select
							{...field}
							options={tagOptions}
							classNames={REACT_SELECT_BASE_CLASSNAME}
							placeholder="Selecciona uno o varios tags..."
							unstyled
							isMulti
							instanceId="tags"
						/>
					)}
				/>
				<textarea
					{...register('description')}
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
