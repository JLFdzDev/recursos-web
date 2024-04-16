import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { Form } from '@/app/dashboard/components/form'

import { findById } from '@/db/repository/tags'
import { addTag, updateTag } from '@/lib/actions/tags'

interface TagFormProps {
	id?: string
}

export const TagForm = async ({ id }: TagFormProps) => {
	const tag = id ? await findById(id) : null

	return (
		<Form id={id} backRoute="/dashboard/tags" addAction={addTag} updateAction={updateTag}>
			<input
				type="text"
				name="name"
				className={`${INPUT_BASE_CLASSNAME} mb-2`}
				placeholder="Nombre (*)"
				required
				defaultValue={tag?.name}
			/>
		</Form>
	)
}
