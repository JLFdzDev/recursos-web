'use server'

import { DBLimit, TagInputs } from '@/types'

import { prisma } from '@/db/connection'
import { getLimit } from '@/db/repository/utils'

export async function findAll(limit?: DBLimit) {
	const data = await prisma.tag.findMany({
		orderBy: {
			name: 'asc',
		},
		...getLimit(limit),
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

export async function searchByName({ q, limit }: { q: string; limit?: DBLimit }) {
	const data = await prisma.tag.findMany({
		where: {
			name: {
				contains: q,
			},
		},
		...getLimit(limit),
	})

	return data
}

export async function count(q?: string) {
	const data = await prisma.tag.count({
		...(q != null && {
			where: {
				name: {
					contains: q,
				},
			},
		}),
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
