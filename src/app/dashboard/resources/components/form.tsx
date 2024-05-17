import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { Form } from '@/components/dashboard/form'
import { Select } from '@/components/dashboard/select'

import { findById } from '@/db/repository/resources'
import { findAll } from '@/db/repository/tags'
import { addResource, updateResource } from '@/actions/resources'

interface ResourceFormProps {
	id?: string
}

export const ResourceForm = async ({ id }: ResourceFormProps) => {
	const resource = id ? await findById(id) : null

	const tags = await findAll()
	const tagOptions = tags.map((tag) => ({
		value: tag.id,
		label: tag.name,
	}))

	return (
		<Form id={id} backRoute="/dashboard/resources" addAction={addResource} updateAction={updateResource}>
			<input
				type="text"
				name="name"
				className={INPUT_BASE_CLASSNAME}
				placeholder="Nombre (*)"
				required
				defaultValue={resource?.name}
			/>
			<input
				type="text"
				name="url"
				className={INPUT_BASE_CLASSNAME}
				placeholder="URL (*)"
				required
				defaultValue={resource?.url}
			/>
			<input
				type="text"
				name="poster"
				className={INPUT_BASE_CLASSNAME}
				placeholder="Poster"
				defaultValue={resource?.poster != null ? resource.poster : ''}
			/>
			<Select
				name="tags"
				options={tagOptions}
				placeholder="Selecciona uno o varios tags..."
				isMulti
				defaultValue={tagOptions.filter((tag) => resource?.tags?.some((t) => t.id === tag.value))}
			/>
			<textarea
				name="description"
				className={`${INPUT_BASE_CLASSNAME} col-span-2 h-32`}
				placeholder="Descripción"
				defaultValue={resource?.description != null ? resource.description : ''}
			></textarea>
		</Form>
	)
}
