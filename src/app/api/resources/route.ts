import { prisma } from '@/database/connection'

export async function GET() {
	const data = await prisma.resource.findMany({
		include: {
			tags: true,
		},
	})

	return Response.json(data)
}
