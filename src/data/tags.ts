'use server'

import { prisma } from '@/data/db'

export async function getTags () {
	const data = await prisma.tag.findMany()

	return data
}
