'use server'

import { prisma } from '@/db/connection'
import { TagInputs } from '@/types'

export async function findAll() {
	const data = await prisma.tag.findMany({
		orderBy: {
			name: 'asc',
		},
	})

	return data
}

export async function findById(id: string) {
	const data = await prisma.tag.findUnique({
		where: {
			id,
		},
	})

	return data
}

export async function create({ name }: TagInputs) {
	const data = await prisma.tag.create({
		data: {
			name,
		},
	})

	return data
}

export async function update({ id, name }: TagInputs) {
	const data = await prisma.tag.update({
		where: {
			id,
		},
		data: {
			name,
		},
	})

	return data
}

export async function remove(id: string) {
	const data = await prisma.tag.delete({
		where: {
			id,
		},
	})

	return data
}
