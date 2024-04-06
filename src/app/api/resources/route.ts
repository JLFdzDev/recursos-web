import { prisma } from '@/database/connection'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
	const tag = req.nextUrl.searchParams.get('tag')
	const tagFilter = tag != null && { tags: { some: { name: tag } } }

	const data = await prisma.resource.findMany({
		where: {
			...tagFilter,
		},
		include: {
			tags: true,
		},
		orderBy: {
			name: 'asc',
		},
	})

	return Response.json(data)
}
