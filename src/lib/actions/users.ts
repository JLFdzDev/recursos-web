'use server'

import { create } from '@/db/repository/users'
import { Prisma } from '@prisma/client'

export async function createUser(data: FormData) {
	if (data.get('password') !== data.get('confirmPassword')) {
		return { errors: 'Passwords do not match' }
	}

	const user = {
		username: data.get('username') as string,
		email: data.get('email') as string,
		password: data.get('password') as string,
	}
	try {
		await create(user)
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.message.includes('User_username_key')) return { errors: 'Username alredy exist' }
			if (error.message.includes('User_email_key')) return { errors: 'Email alredy exist' }
		}
	}
}
