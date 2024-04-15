'use server'

import { create, remove } from '@/db/repository/tags'
import { TagInputs } from '@/types'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addTag = async (data: FormData) => {
	const tag: TagInputs = {
		name: data.get('name') as string,
	}

	await create(tag)

	revalidatePath('/dashboard/tags')

	return redirect('/dashboard/tags')
}

export const removeTag = async (id: string) => {
	await remove(id)

	revalidatePath('/dashboard/tags')

	return redirect('/dashboard/tags')
}
