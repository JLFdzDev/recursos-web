'use server'

import { DBLimit, ResourceInputs } from '@/types'

import { prisma } from '@/db/connection'
import { getLimit } from '@/db/repository/utils'

export async function findAll(limit?: DBLimit) {
	const data = await prisma.resource.findMany({
		include: {
			tags: true,
		},
		orderBy: {
			name: 'asc',
		},
		...getLimit(limit),
	})

	return data
}

export async function findByTag(tag: string) {
	const data = await prisma.resource.findMany({
		where: {
			tags: {
				some: { name: tag },
			},
		},
		include: {
			tags: true,
		},
		orderBy: {
			name: 'asc',
		},
	})

	return data
}

export async function findById(id: string) {
	const data = await prisma.resource.findUnique({
		where: {
			id,
		},
		include: {
			tags: true,
		},
	})

	return data
}

export async function searchByNameOrUrl({ limit, q }: { limit?: DBLimit; q: string }) {
	const data = await prisma.resource.findMany({
		where: {
			name: {
				contains: q,
			},
			OR: [
				{
					url: {
						contains: q,
					},
				},
			],
		},
		include: {
			tags: true,
		},
		orderBy: {
			name: 'asc',
		},
		...getLimit(limit),
	})

	return data
}

export async function count() {
	const data = await prisma.resource.count()

	return data
}

export async function create({ description, name, poster, tags, url }: ResourceInputs) {
	const connectData = tags != null && {
		tags: {
			connect: tags?.map((tag) => ({ id: tag })),
		},
	}

	const data = await prisma.resource.create({
		data: {
			name,
			url,
			poster,
			description,
			...connectData,
		},
		include: {
			tags: true,
		},
	})

	return data
}

export async function update({ id, description, name, poster, tags, url }: ResourceInputs) {
	const connectData = tags != null && {
		tags: {
			connect: tags?.map((tag) => ({ id: tag })),
		},
	}

	const data = await prisma.resource.update({
		where: {
			id,
		},
		data: {
			name,
			url,
			poster,
			description,
			...connectData,
		},
		include: {
			tags: true,
		},
	})

	return data
}

export async function remove(id: string) {
	const data = await prisma.resource.delete({
		where: {
			id,
		},
	})

	return data
}
