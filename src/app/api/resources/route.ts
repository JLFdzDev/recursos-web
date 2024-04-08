import { prisma } from '@/database/connection'
import { ResourceInputs } from '@/types'
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

export async function POST(req: NextRequest) {
	const { name, url, poster, tags, description }: ResourceInputs = await req.json()

	const data = await prisma.resource.create({
		data: {
			name,
			url,
			poster,
			description,
			tags: {
				connect: tags.map((tag) => ({ id: tag.value })),
			},
		},
		include: {
			tags: true,
		},
	})

	return Response.json(data)
}
