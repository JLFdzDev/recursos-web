'use server'

import { prisma } from '@/db/connection'

export async function findAll() {
	const data = await prisma.tag.findMany({
		orderBy: {
			name: 'asc',
		},
	})

	return data
}
