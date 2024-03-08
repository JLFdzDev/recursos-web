import { prisma } from '@/data/db'

export async function getResources () {
	const resources = await prisma.resource.findMany({
		include: {
			tags: true
		},
		orderBy: {
			name: 'asc'
		}
	})

	return resources
}

export async function getResourcesByTagName (name: string) {
	const resources = await prisma.resource.findMany({
		where: {
			tags: {
				some: {
					name
				}
			}
		},
		include: {
			tags: true
		},
		orderBy: {
			name: 'asc'
		}
	})

	return resources
}
