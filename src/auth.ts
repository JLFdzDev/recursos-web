import NextAuth, { CredentialsSignin } from 'next-auth'

import { prisma } from '@/db/connection'
import { validatePassword } from '@/utils'
import CredentialsProvider from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email as string,
					},
				})

				if (user) {
					const isPasswordValid = await validatePassword(user.password, credentials.password as string)

					if (isPasswordValid) {
						return {
							id: user.id,
							name: user.username,
							email: user.email,
						}
					}
				}

				throw new CredentialsSignin()
			},
		}),
	],
	pages: {
		signIn: '/auth/login',
	},
})
