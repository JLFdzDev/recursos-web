import { INPUT_BASE_CLASSNAME } from '@/const/theme'

import { Form } from '@/components/dashboard/form'

import { findById } from '@/db/repository/tags'
import { addTag, updateTag } from '@/actions/tags'

interface TagFormProps {
	id?: string
}

export const TagForm = async ({ id }: TagFormProps) => {
	const tag = id ? await findById(id) : null

	return (
		<Form
			className="grid grid-cols-1 gap-2"
			id={id}
			backRoute="/dashboard/tags"
			addAction={addTag}
			updateAction={updateTag}
		>
			<input
				type="text"
				name="name"
				className={INPUT_BASE_CLASSNAME}
				placeholder="Nombre (*)"
				required
				defaultValue={tag?.name}
			/>
		</Form>
	)
}
