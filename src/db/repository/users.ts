import { UserInputs } from '@/types'

import { prisma } from '@/db/connection'
import { hashPassword } from '@/utils'

export function findByEmail(email: string) {
	return prisma.user.findUnique({
		where: {
			email,
		},
	})
}

export function findByUsernameOrEmail(value: string) {
	return prisma.user.findFirst({
		where: {
			OR: [{ username: value }, { email: value }],
		},
	})
}

export async function create(data: Omit<UserInputs, 'id' | 'confirmPassword'>) {
	if (data.password == null) {
		return { error: 'Password is required' }
	}

	const hashedPassword = await hashPassword(data.password)
	const newUser = {
		...data,
		password: hashedPassword,
	}
	const { password: _, ...user } = await prisma.user.create({
		data: newUser,
	})

	return user
}
