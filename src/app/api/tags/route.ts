import { prisma } from '@/database/connection'

export async function GET() {
	const data = await prisma.tag.findMany()

	return Response.json(data)
}
