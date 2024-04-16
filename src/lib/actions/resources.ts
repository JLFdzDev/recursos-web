'use server'

import { create, remove, update } from '@/db/repository/resources'
import { ResourceInputs } from '@/types'
import { isGetAllFormDataNull } from '@/utils'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addResource = async (data: FormData) => {
	const tags = data.getAll('tags')

	const resource: ResourceInputs = {
		description: data.get('description') as string,
		name: data.get('name') as string,
		poster: data.get('poster') as string,
		tags: isGetAllFormDataNull(tags) ? undefined : tags.map((tag) => tag as string),
		url: data.get('url') as string,
	}

	await create(resource)

	revalidatePath('/dashboard/resources')

	return redirect('/dashboard/resources')
}

export const updateResource = async (data: FormData) => {
	const tags = data.getAll('tags')

	const resource: ResourceInputs = {
		id: data.get('id') as string,
		description: data.get('description') as string,
		name: data.get('name') as string,
		poster: data.get('poster') as string,
		tags: isGetAllFormDataNull(tags) ? undefined : tags.map((tag) => tag as string),
		url: data.get('url') as string,
	}

	await update(resource)

	revalidatePath('/dashboard/resources')

	return redirect('/dashboard/resources')
}

export const removeResource = async (id: string) => {
	await remove(id)

	revalidatePath('/dashboard/resources')

	return redirect('/dashboard/resources')
}
